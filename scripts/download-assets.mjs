/**
 * Download all hims.com assets (images and videos)
 */
import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const PUBLIC_DIR = "public";
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const VIDEOS_DIR = path.join(PUBLIC_DIR, "videos");

[IMAGES_DIR, VIDEOS_DIR].forEach(d => {
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
});

const images = [
  // Hero ATF cards
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/hims_nn-wp-hd-pen-default-d.png", file: "hims_nn-wp-hd-pen-default-d.webp" },
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/hims_nn-wp-hd-pen-hover-d", file: "hims_nn-wp-hd-pen-hover-d.webp" },
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/final/hims_nn-wp-2-graph-d", file: "hims_nn-wp-2-graph-d.webp" },
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/final/hims_nn-wp-2-person-d", file: "hims_nn-wp-2-person-d.webp" },
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/final/hims_nn-wp-2-default-d", file: "hims_nn-wp-2-default-d.webp" },
  { url: "https://www.hims.com/forhims/image/upload/w_1356,f_webp/Hims/homepage/2026/final/hims_nn-wp-2-hover-d", file: "hims_nn-wp-2-hover-d.webp" },
  // Category tiles
  { url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/product-category-grid/Hims_Homepage_Better_Sex_Default_240-3", file: "Hims_Homepage_Better_Sex_Default.webp" },
  { url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/product-category-grid/Hims_Homepage_Better_Sex_Rollover_480-3", file: "Hims_Homepage_Better_Sex_Hover.webp" },
  { url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/product-category-grid/Hims_Homepage_Regrow_Hair_Default_480-2", file: "Hims_Homepage_Regrow_Hair_Default.webp" },
  { url: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/product-category-grid/Hims_Homepage_Boost_Testosterone_Supps_Default", file: "Hims_Homepage_Boost_Testosterone_Default.webp" },
  // Video posters
  { url: "https://cloudinary.forhims.com/image/upload/v1776462440/Hims/homepage/2026/Hims_Sunlight_Rough_PillsPen_April_17_2026.jpg", file: "Hims_Sunlight_Rough_PillsPen_poster.jpg" },
  { url: "https://cloudinary.forhims.com/image/upload/v1774281769/Hims/homepage/2026/comprehensive-pill-poster.png", file: "comprehensive-pill-poster.png" },
];

const videos = [
  { url: "https://cloudinary.forhims.com/video/upload/v1776462654/Hims/homepage/2026/Hims_Sunlight_Rough_PillsPen_April_17_2026.mp4", file: "Hims_Sunlight_Rough_PillsPen.mp4" },
  { url: "https://cloudinary.forhims.com/video/upload/v1774281769/Hims/homepage/2026/comprehensive-pill.mp4", file: "comprehensive-pill.mp4" },
];

async function download(url, dest) {
  if (existsSync(dest)) {
    console.log(`  SKIP (exists): ${path.basename(dest)}`);
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await pipeline(res.body, createWriteStream(dest));
    console.log(`  OK: ${path.basename(dest)}`);
  } catch (e) {
    console.error(`  FAIL: ${path.basename(dest)} — ${e.message}`);
  }
}

async function batchDownload(items, dir, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    await Promise.all(batch.map(({ url, file }) => download(url, path.join(dir, file))));
  }
}

console.log("Downloading images...");
await batchDownload(images, IMAGES_DIR);

console.log("\nDownloading videos...");
await batchDownload(videos, VIDEOS_DIR);

console.log("\nDone!");
