import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = 'public/images/gruns';

const assets = [
  // Hero images
  'https://gruns.co/cdn/shop/files/OGAdults-hero-image-lifestyle-womangummyinlips.webp',
  'https://gruns.co/cdn/shop/files/Firecracker-HeroImage-Adults-Lifestyle.png',
  'https://gruns.co/cdn/shop/files/Kids_Hero_Image_Square.webp',
  'https://gruns.co/cdn/shop/files/HeroSticker-OGAdults-GummyFlavor-_Compressify.io.webp',
  'https://gruns.co/cdn/shop/files/HeroSticker-Popsicle-GummyFlavor-_Compressify.io.webp',
  'https://gruns.co/cdn/shop/files/HeroSticker-OGKids-GummyFlavor-_Compressify.io.webp',
  // Press logos
  'https://gruns.co/cdn/shop/files/logo-forbes-black.svg',
  'https://gruns.co/cdn/shop/files/logo-mensjournal-black.svg',
  'https://gruns.co/cdn/shop/files/logo-today-black.svg',
  'https://gruns.co/cdn/shop/files/logo-people-black.svg',
  'https://gruns.co/cdn/shop/files/logo-womenshealth-black.svg',
  'https://gruns.co/cdn/shop/files/logo-goodhousekeeping-black.svg',
  'https://gruns.co/cdn/shop/files/logo-GQ-black.svg',
  'https://gruns.co/cdn/shop/files/logo-travelleisure-black.svg',
  // Product tiles
  'https://gruns.co/cdn/shop/files/ShopTile-OG-Adults.webp',
  'https://gruns.co/cdn/shop/files/ShopTile-OG-Kids.webp',
  'https://gruns.co/cdn/shop/files/ShopTile-Firecracker-Adults.webp',
  'https://gruns.co/cdn/shop/files/ShopTile-Firecracker-Kids.webp',
  // Value props
  'https://gruns.co/cdn/shop/files/valueprop-cardimg1.webp',
  'https://gruns.co/cdn/shop/files/valueprop-cardimg2.webp',
  'https://gruns.co/cdn/shop/files/valueprop-cardimg3.webp',
  // Benefits scroll
  'https://gruns.co/cdn/shop/files/Angle04.png',
  'https://gruns.co/cdn/shop/files/Angle03.png',
  'https://gruns.co/cdn/shop/files/sachet-rip.webp',
  'https://gruns.co/cdn/shop/files/gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp',
  'https://gruns.co/cdn/shop/files/sachet-front.webp',
  // Testing icons
  'https://gruns.co/cdn/shop/files/icon-tested-bugs.svg',
  'https://gruns.co/cdn/shop/files/icon-tested-metals.svg',
  'https://gruns.co/cdn/shop/files/icon-tested-contaminants.svg',
  'https://gruns.co/cdn/shop/files/icon-tested-microbial.svg',
  // Buy box
  'https://gruns.co/cdn/shop/files/og_adults_ls_52_2x_307df677-3dc9-4152-a629-7aaa003da9c9.webp',
  'https://gruns.co/cdn/shop/files/Nutrition_Label_LS_-_Adults_B_-_Desktop.jpg',
  'https://gruns.co/cdn/shop/files/gal-ugc-reviews.webp',
  'https://gruns.co/cdn/shop/files/gal-what-to-expect.webp',
  'https://gruns.co/cdn/shop/files/gal-clinical.webp',
  'https://gruns.co/cdn/shop/files/gal-benefits-lifestyle.webp',
  // Social fan
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-16.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-08.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-12.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-10.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-09.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-13.png',
  'https://gruns.co/cdn/shop/files/Gruns-Social-Images-03.png',
  // Final CTA
  'https://gruns.co/cdn/shop/files/final-cta-product-desktop.webp',
  // Firecracker variants for buybox
  'https://gruns.co/cdn/shop/files/Adult-Firecracker-Gallery-1.png',
];

async function download(url, retries = 2) {
  const filename = decodeURIComponent(url.split('/').pop().split('?')[0]);
  const filepath = path.join(BASE, filename);
  if (existsSync(filepath)) {
    console.log(`  SKIP ${filename}`);
    return;
  }
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(filepath, buf);
      console.log(`  OK   ${filename} (${(buf.length / 1024).toFixed(0)}KB)`);
      return;
    } catch (e) {
      if (i === retries) console.log(`  FAIL ${filename}: ${e.message}`);
      else await new Promise(r => setTimeout(r, 500));
    }
  }
}

async function main() {
  await mkdir(BASE, { recursive: true });
  console.log(`Downloading ${assets.length} assets to ${BASE}/...`);
  // Batch 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    await Promise.all(assets.slice(i, i + 4).map(download));
  }
  console.log('Done!');
}

main();
