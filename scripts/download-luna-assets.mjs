import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const OUT_DIR = 'public/images/luna';

const assets = [
  // Logo
  ['https://lunanaturals.co/cdn/shop/files/Group_8.png?v=1740476979', 'logo.png'],

  // Hero
  ['https://lunanaturals.co/cdn/shop/files/Image_Composition_4faO5bdD.png?v=1774546104', 'hero-main.png'],
  ['https://lunanaturals.co/cdn/shop/files/Image_Composition_36ynbZ2l1.png?v=1775117096', 'hero-secondary.png'],
  ['https://lunanaturals.co/cdn/shop/files/Photorealistic_outdoor_lifestyle__202603262337.jpg?v=1774550327', 'hero-lifestyle.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/Minimalist_product_photography__202603190154_2.png?v=1774545945', 'hero-product.png'],

  // Best Sellers product carousel (header)
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-26_18-12-44_e9a4cedb-2943-4797-80d4-325171c63f7b.png?v=1774549592', 'prod-spray-120.png'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603311643.jpg?v=1774957926', 'prod-spray-120-b.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___2026032516341.png?v=1774958199', 'prod-spray-50-2pk.png'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___2026032516231.png?v=1774958199', 'prod-spray-50-2pk-b.png'],
  ['https://lunanaturals.co/cdn/shop/files/Frame389.png?v=1774958415', 'prod-bite-patches.png'],
  ['https://lunanaturals.co/cdn/shop/files/Frame376.png?v=1774958414', 'prod-bite-patches-b.png'],

  // Collections thumbnails
  ['https://lunanaturals.co/cdn/shop/files/Professional_studio_product_202604021300.jpg?v=1775117096', 'col-itch-relief.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-26_18-11-27.png?v=1774549822', 'col-sprays.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-26_16-28-30.png?v=1774543197', 'col-patches.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-33-321.png?v=1774539485', 'col-wipes.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-35-041.png?v=1774539494', 'col-bracelets.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-02-341.png?v=1774530895', 'col-kids.png'],
  ['https://lunanaturals.co/cdn/shop/files/MosquitoRepellentIncense_1_1_f961e80c-e7f2-4353-97b5-a6e508295c8b.png?v=1774958825', 'col-candles.png'],

  // Trust badges
  ['https://lunanaturals.co/cdn/shop/files/lab.png?v=1740472887', 'badge-lab.png'],
  ['https://lunanaturals.co/cdn/shop/files/deet.png?v=1740473257', 'badge-deet.png'],
  ['https://lunanaturals.co/cdn/shop/files/natural.png?v=1740473290', 'badge-natural.png'],
  ['https://lunanaturals.co/cdn/shop/files/eco.png?v=1740473328', 'badge-eco.png'],

  // Featured product (left panel in product tabs section)
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK__attached_2026032416301.png?v=1774543455', 'featured-product.png'],

  // Product tab images - Best Sellers
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-26_16-28-30.png?v=1774543197', 'prod-patches-kids.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-33-321.png?v=1774539485', 'prod-bracelets.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-26_18-12-44_e9a4cedb-2943-4797-80d4-325171c63f7b.png?v=1774549592', 'prod-spray-120-tab.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-02-341.png?v=1774530895', 'prod-wipes.png'],
  ['https://lunanaturals.co/cdn/shop/files/PASTE_PACKAGING_LOCK__2026032415271_3aabfa5a-3899-4755-a186-e9ffc8213a64.png?v=1774960220', 'prod-spray-40.png'],
  ['https://lunanaturals.co/cdn/shop/files/MosquitoRepellentIncense_1_1_f961e80c-e7f2-4353-97b5-a6e508295c8b.png?v=1774958825', 'prod-incense.png'],
  ['https://lunanaturals.co/cdn/shop/files/Frame389.png?v=1774958415', 'prod-bite-patches-tab.png'],
  ['https://lunanaturals.co/cdn/shop/files/PASTE_PACKAGING_LOCK__2026032415301.png?v=1774537779', 'prod-candles.png'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603241439_1_1.png?v=1774543239', 'prod-itch-stick.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_15-07-321.png?v=1775117107', 'prod-new-1.png'],
  ['https://lunanaturals.co/cdn/shop/files/luna_Gemini3.1Flash_NanoBanana2__2026-03-25_16-05-001_cc194d7d-0ff1-4a34-9280-c183d53a3633.png?v=1774959808', 'prod-new-2.png'],
  ['https://lunanaturals.co/cdn/shop/files/PASTE_PACKAGING_LOCK_2026032415221_82179c5d-b962-4d76-8ace-b62d2b90c722.png?v=1774960220', 'prod-value-1.png'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603262312.jpg?v=1774957926', 'prod-value-2.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603262306_1.jpg?v=1774957926', 'prod-value-3.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603262306.jpg?v=1774957926', 'prod-value-4.jpg'],

  // Footer banner
  ['https://lunanaturals.co/cdn/shop/files/PACKAGING_LOCK___202603251632_1_1.png?v=1774958200', 'footer-banner-product.png'],

  // Testimonial reviewer photos (pexels)
  ['https://lunanaturals.co/cdn/shop/files/pexels-riciardus-307008.jpg?v=1740722862', 'reviewer-megan.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/pexels-stephen-leonardi-587681991-27081700.jpg?v=1740723046', 'reviewer-elle.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/pexels-hannah-nelson-390257-1065084.jpg?v=1740723379', 'reviewer-jenny.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/pexels-olly-774909.jpg?v=1740723463', 'reviewer-4.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/pexels-tarzine-jackson-254126-773371.jpg?v=1740723557', 'reviewer-5.jpg'],
  ['https://lunanaturals.co/cdn/shop/files/beautiful-shot-red-flowers-near-green-trees-with-forested-mountains-distance.jpg?v=1740721534', 'testimonial-bg.jpg'],
];

await mkdir(OUT_DIR, { recursive: true });

const BATCH = 4;
let ok = 0, fail = 0;
const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' };

for (let i = 0; i < assets.length; i += BATCH) {
  const batch = assets.slice(i, i + BATCH);
  await Promise.all(batch.map(async ([url, filename]) => {
    const dest = path.join(OUT_DIR, filename);
    if (existsSync(dest)) { ok++; return; }
    try {
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      console.log(`✓ ${filename}`);
      ok++;
    } catch (e) {
      console.error(`✗ ${filename}: ${e.message}`);
      fail++;
    }
  }));
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
