import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import https from 'https';
import http from 'http';

const BASE = '/Users/brainor/my-clone/public/images/everydaydose';
mkdirSync(BASE, { recursive: true });

const assets = [
  // Logo
  { url: 'https://www.everydaydose.com/cdn/shop/files/EDD_Logo_2025_Primary_BLK_2.png?v=12174584517625088562', name: 'logo-black.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Group_48101455-cropped.svg?v=1762833065', name: 'logo-nav.svg' },
  { url: 'https://cdn.shopify.com/s/files/1/0272/4531/4113/files/Logo_Vertical_Center_White.svg?v=1748980896', name: 'logo-white.svg' },

  // Hero
  { url: 'https://www.everydaydose.com/cdn/shop/files/DESKTOP_25_a08f9964-cded-4471-ad38-e9a4af50d7aa.webp?v=1778634732&width=2500', name: 'hero-desktop.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/new_mob_1_b515f41e-bb69-4c6c-b616-499242f7c3bc.webp?v=1778566770&width=1000', name: 'hero-mobile.webp' },

  // Product images (redefined section)
  { url: 'https://www.everydaydose.com/cdn/shop/files/main_mild.webp?v=1777581020&width=600', name: 'product-mild.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/man_medium_83b244a1-aa55-485c-993d-4eacc37d9519.webp?v=1777581020&width=600', name: 'product-medium.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/man_medium_1_bd77802c-a264-4ebb-9cb3-f95f578f0844.webp?v=1777581020&width=600', name: 'product-medium-2.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/man_medium_26a9468b-3e3c-46a0-bbea-58d4b65d5761.webp?v=1777581020&width=600', name: 'product-matcha.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/90s_mid_e6283ee5-2153-45d3-b5e4-c047f7775337.webp?v=1778794996&width=300', name: 'product-90s.webp' },

  // Coffee plus benefits hero
  { url: 'https://www.everydaydose.com/cdn/shop/files/coffee-plus-benefits-feature-hero-1600w.webp?v=1777439272&width=1200', name: 'coffee-plus-benefits.webp' },

  // Trust badges
  { url: 'https://cdn.shopify.com/s/files/1/0272/4531/4113/files/lock.svg?v=1731391956', name: 'icon-lock.svg' },
  { url: 'https://cdn.shopify.com/s/files/1/0272/4531/4113/files/reviews.svg?v=1731392106', name: 'icon-reviews.svg' },
  { url: 'https://cdn.shopify.com/s/files/1/0272/4531/4113/files/badge.svg?v=1731392106', name: 'icon-badge.svg' },

  // Review photos
  { url: 'https://www.everydaydose.com/cdn/shop/files/1e_1.webp?v=1777580911&width=480', name: 'review-1.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/pic_1_2d41e69b-7717-45b4-b304-a63b7c4349b7.webp?v=1777580911&width=480', name: 'review-2.webp' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/sdd.webp?v=1777580911&width=480', name: 'review-3.webp' },

  // Banner/press logos
  { url: 'https://www.everydaydose.com/cdn/shop/files/image_227.png?v=1775604106&width=320', name: 'press-1.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/image_228_696c95d9-eab0-4ebf-8896-27e6ab015899.png?v=1775603997&width=320', name: 'press-2.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Your_design.png?v=1755288632&width=320', name: 'press-3.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/image_229_2a855b4d-5bb7-4d36-95dd-86cb8060e2a9.png?v=1775604038&width=320', name: 'press-4.png' },

  // Ingredient images
  { url: 'https://www.everydaydose.com/cdn/shop/files/image_212.png?v=1758817677&width=320', name: 'ingredient-bg-1.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/image_213.png?v=1758817688&width=320', name: 'ingredient-bg-2.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/coffee_3.png?v=1717080902&width=200', name: 'ingredient-coffee.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/pngwing_7.png?v=1717080822&width=200', name: 'ingredient-collagen.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/PngItem_1146565_8.png?v=1717080782&width=200', name: 'ingredient-lions-mane.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/chaga_png_5.png?v=1717080852&width=200', name: 'ingredient-chaga.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/pngegg_5.png?v=1717080877&width=200', name: 'ingredient-l-theanine.png' },

  // How to make / About section images
  { url: 'https://www.everydaydose.com/cdn/shop/files/Vector_d1d3ff5b-3a1f-4643-8a05-9a1cde718b73.png?v=1769455592&width=100', name: 'step-icon-1.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Vector_3455007d-fce5-4d51-b482-a1c91b5565b7.png?v=1769455618&width=100', name: 'step-icon-2.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Vector_fbb34050-e8da-4cd8-af95-61983e43fa99.png?v=1769454514&width=100', name: 'step-icon-3.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Vector_2f9890d4-7f33-41c8-b3b6-7142da636bf6.png?v=1769454562&width=100', name: 'step-icon-4.png' },
  { url: 'https://www.everydaydose.com/cdn/shop/files/Vector_2816ed65-20a0-4c8f-9adf-928d780fc22d.png?v=1769454598&width=100', name: 'step-icon-5.png' },

  // OG image
  { url: 'https://www.everydaydose.com/cdn/shop/files/banner.png?v=1774033353&width=600', name: 'og-image.png' },
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    if (existsSync(filepath)) {
      console.log(`  SKIP (exists): ${basename(filepath)}`);
      resolve();
      return;
    }
    const fullUrl = url.startsWith('//') ? 'https:' + url : url;
    const client = fullUrl.startsWith('https') ? https : http;
    client.get(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        console.log(`  FAIL (${res.statusCode}): ${basename(filepath)}`);
        resolve();
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        writeFileSync(filepath, Buffer.concat(chunks));
        console.log(`  OK: ${basename(filepath)} (${Buffer.concat(chunks).length} bytes)`);
        resolve();
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadBatch(items, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    await Promise.all(batch.map(item => download(item.url, join(BASE, item.name)).catch(e => console.log(`  ERROR: ${item.name}: ${e.message}`))));
  }
}

console.log(`Downloading ${assets.length} assets...`);
await downloadBatch(assets);

// Also grab some images from the "about" and partnership sections
const extraAssets = [];

// Try to get remaining images from rendered HTML
import { readFileSync } from 'fs';
try {
  const html = readFileSync('/Users/brainor/my-clone/tmp/everydaydose-rendered.html', 'utf8');
  const imgRegex = /src="(https?:\/\/[^"]*(?:cdn\.shopify\.com|everydaydose\.com)[^"]*\.(?:webp|png|jpg|jpeg|svg)(?:\?[^"]*)?)"/g;
  const allUrls = new Set();
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    allUrls.add(match[1]);
  }
  // Filter to ones we haven't downloaded yet
  const existing = new Set(assets.map(a => a.url));
  const missing = [...allUrls].filter(u => !existing.has(u) && !u.includes('modal-close') && !u.includes('Coffee-Modal'));
  console.log(`\nFound ${missing.length} additional images to download...`);

  const extra = missing.map((u, i) => {
    const ext = u.match(/\.(webp|png|jpg|jpeg|svg)/)?.[1] || 'webp';
    // Try to derive a meaningful name
    const urlPath = new URL(u).pathname;
    const filename = basename(urlPath).replace(/\?.*/, '').substring(0, 60);
    return { url: u, name: `extra-${filename}` };
  });

  await downloadBatch(extra);
} catch (e) {
  console.log('Could not read rendered HTML for extra images:', e.message);
}

console.log('\nDone!');
