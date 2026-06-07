#!/usr/bin/env node
/**
 * Compress all PNG/JPG images in public/images/ to WebP using sharp.
 * - Converts .png and .jpg/.jpeg to .webp
 * - Replaces originals with compressed WebP files (keeps .webp extension)
 * - Updates all source references in src/ to use new .webp paths
 * - Skips files already in .webp format (but re-compresses if > 500KB)
 * - Skips .svg files
 */

import sharp from "sharp";
import { readdir, stat, readFile, writeFile, unlink } from "fs/promises";
import { join, extname, relative } from "path";

const PUBLIC_DIR = new URL("../public/images", import.meta.url).pathname;
const SRC_DIR = new URL("../src", import.meta.url).pathname;
const WEBP_QUALITY = 80;
const MAX_DIMENSION = 1920; // resize images wider than this
const LARGE_WEBP_THRESHOLD = 500 * 1024; // re-compress webp files larger than 500KB

let totalBefore = 0;
let totalAfter = 0;
let filesProcessed = 0;
const renames = []; // [oldPath, newPath] pairs for reference updates

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === ".svg") return;

  const isWebp = ext === ".webp";
  const isPngOrJpg = [".png", ".jpg", ".jpeg"].includes(ext);

  if (!isPngOrJpg && !isWebp) return;

  const fileStat = await stat(filePath);
  const sizeBefore = fileStat.size;

  // Skip small webp files
  if (isWebp && sizeBefore <= LARGE_WEBP_THRESHOLD) return;

  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();

    // Resize if too large
    if (metadata.width && metadata.width > MAX_DIMENSION) {
      pipeline = pipeline.resize(MAX_DIMENSION, null, { withoutEnlargement: true });
    }

    const webpBuffer = await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toBuffer();

    // Only save if actually smaller (or if converting format)
    if (webpBuffer.length < sizeBefore || isPngOrJpg) {
      const webpPath = isPngOrJpg ? filePath.replace(/\.(png|jpe?g)$/i, ".webp") : filePath;

      await writeFile(webpPath, webpBuffer);

      // Remove original if we changed the extension
      if (isPngOrJpg && webpPath !== filePath) {
        await unlink(filePath);
        const relOld = "/images" + filePath.split("/images")[1];
        const relNew = "/images" + webpPath.split("/images")[1];
        renames.push([relOld, relNew]);
      }

      totalBefore += sizeBefore;
      totalAfter += webpBuffer.length;
      filesProcessed++;

      const savings = ((1 - webpBuffer.length / sizeBefore) * 100).toFixed(0);
      const relPath = relative(PUBLIC_DIR, isPngOrJpg ? webpPath : filePath);
      console.log(`  ${relPath}: ${fmt(sizeBefore)} -> ${fmt(webpBuffer.length)} (-${savings}%)`);
    }
  } catch (err) {
    console.error(`  SKIP ${relative(PUBLIC_DIR, filePath)}: ${err.message}`);
  }
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function updateReferences() {
  if (renames.length === 0) return;

  const srcFiles = await getAllFiles(SRC_DIR);
  const codeFiles = srcFiles.filter((f) => /\.(tsx?|jsx?|css|json)$/.test(f));

  let updatedCount = 0;
  for (const file of codeFiles) {
    let content = await readFile(file, "utf-8");
    let changed = false;
    for (const [oldRef, newRef] of renames) {
      if (content.includes(oldRef)) {
        content = content.replaceAll(oldRef, newRef);
        changed = true;
      }
    }
    if (changed) {
      await writeFile(file, content);
      updatedCount++;
      console.log(`  Updated refs: ${relative(SRC_DIR, file)}`);
    }
  }
  console.log(`\nUpdated ${updatedCount} source files with ${renames.length} path changes.`);
}

async function main() {
  console.log("Compressing images in public/images/...\n");
  const files = await getAllFiles(PUBLIC_DIR);

  // Process in batches of 5 to avoid memory issues
  for (let i = 0; i < files.length; i += 5) {
    const batch = files.slice(i, i + 5);
    await Promise.all(batch.map(compressImage));
  }

  console.log(`\n--- Summary ---`);
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Total before: ${fmt(totalBefore)}`);
  console.log(`Total after:  ${fmt(totalAfter)}`);
  console.log(`Saved: ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);

  console.log(`\nUpdating source references...`);
  await updateReferences();

  console.log("\nDone!");
}

main().catch(console.error);
