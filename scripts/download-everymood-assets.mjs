import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_DIR = 'public/images/everymood';

const IMAGES = [
  // Logo
  'https://everymood.com/cdn/shop/files/Group_6.svg',
  // Hero
  'https://everymood.com/cdn/shop/files/colum1.png',
  'https://everymood.com/cdn/shop/files/colum2.png',
  // Category cards
  'https://everymood.com/cdn/shop/files/feture-cat-img1.png',
  'https://everymood.com/cdn/shop/files/feture-cat-img2_04d110f2-dad7-4fdb-9ca7-48ecbf23cf83.png',
  'https://everymood.com/cdn/shop/files/feture-cat-img3.png',
  'https://everymood.com/cdn/shop/files/ChatGPT-Image-Oct-30_-2025_-06_34_08-PM_2_1.png',
  // Products
  'https://everymood.com/cdn/shop/files/Vanilla_soft_serve.png',
  'https://everymood.com/cdn/shop/files/Frame294.png',
  'https://everymood.com/cdn/shop/files/Headintheclouds_fc37ec55-42be-4b22-9ffa-dc2b66b7b29c.png',
  'https://everymood.com/cdn/shop/files/Frame215_87ec1651-2ca5-44d0-ace2-91c719e931e4.png',
  'https://everymood.com/cdn/shop/files/BerryObsessed_dd90a68a-f06c-4f01-a218-bf02af437cfe.png',
  'https://everymood.com/cdn/shop/files/Frame288.png',
  'https://everymood.com/cdn/shop/files/MissYouAlready_c26b0a99-97d0-49ef-a700-760b3218cf12.png',
  'https://everymood.com/cdn/shop/files/Frame293.png',
  'https://everymood.com/cdn/shop/files/Dreamcatcher_01c2e0d2-4421-466d-9fab-95a19b8289b4.png',
  'https://everymood.com/cdn/shop/files/Faire_Gemini3.1Flash_NanoBanana2__2026-03-13_18-11-021.png',
  'https://everymood.com/cdn/shop/files/SmellTheRose_1e6db4d5-fc38-4de5-9294-9bff3100ff08.png',
  'https://everymood.com/cdn/shop/files/Frame295.png',
  'https://everymood.com/cdn/shop/files/Cherryontop.png',
  'https://everymood.com/cdn/shop/files/Frame292_476c504c-2470-4417-b7da-31edc112fab1.png',
  'https://everymood.com/cdn/shop/files/Burningdesire_2ae1e41c-9ba0-460a-a5bc-d9b6983fef98.png',
  'https://everymood.com/cdn/shop/files/Frame291_7189a99c-ef29-45f0-bde5-d12ad1ecc919.png',
  // Bundle / kit images
  'https://everymood.com/cdn/shop/files/SweetSeduction_30837be5-b0d9-48ed-b7eb-09f2e56c55b6.png',
  'https://everymood.com/cdn/shop/files/GoldenHour_616becd7-b0fe-4d19-aa56-dc0fdcfd259a.png',
  'https://everymood.com/cdn/shop/files/Sweetescape_2e6e9081-cd04-45b5-8c6c-d6bfcb23ceba.png',
  'https://everymood.com/cdn/shop/files/MainCharacter2.png',
  // Highlight text with image section
  'https://everymood.com/cdn/shop/files/text-with-image-1-min.jpg_1_667666f8-4408-4a11-b19c-8f560d623672.png',
  'https://everymood.com/cdn/shop/files/text-with-image-1-min.jpg_2_4b04efee-73cf-40f7-9c4a-4b58a9ff8a6d.png',
  'https://everymood.com/cdn/shop/files/text-with-image-1-min.jpg_4.png',
  // Image with text / hero area
  'https://everymood.com/cdn/shop/files/Rectangle-resize-2.png',
  'https://everymood.com/cdn/shop/files/High-end_cinematic_product_2026032515401.png',
  'https://everymood.com/cdn/shop/files/High-end_cinematic_product_2026032515411.png',
  'https://everymood.com/cdn/shop/files/High-end_cinematic_product_2026032515421.png',
  'https://everymood.com/cdn/shop/files/High-end_cinematic_product_2026032516011.png',
  // Product detail images
  'https://everymood.com/cdn/shop/files/EspressoYourself.png',
  'https://everymood.com/cdn/shop/files/HeadinTheClouds.png',
  'https://everymood.com/cdn/shop/files/Sweettemptation.png',
  'https://everymood.com/cdn/shop/files/TheDessertEdit100mL-1Pager111_tif.png',
  // Decorative / 3D elements
  'https://everymood.com/cdn/shop/files/4.png',
  'https://everymood.com/cdn/shop/files/rwerwer_1.png',
  'https://everymood.com/cdn/shop/files/motion-element_Picture_image-card_jpg.png',
  'https://everymood.com/cdn/shop/files/Group_167.png',
  'https://everymood.com/cdn/shop/files/Frame129.png',
  'https://everymood.com/cdn/shop/files/Frame150.png',
  'https://everymood.com/cdn/shop/files/Frame225.png',
  'https://everymood.com/cdn/shop/files/Frame226.png',
  // Background vectors
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/backgroundvector3.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/homebackgroundvectorhomebottom.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/left1bakcgroundimage.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/right1bakcgroundimage2.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/rectangle-product-blue.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/Rectangle_ac9ffb45-23e6-4c61-87ee-3de1636c8a58.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/Rectangle_5_1.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/Rectangle_7.png',
  'https://cdn.shopify.com/s/files/1/0725/1469/9450/files/Group_36_1.png',
  // Testimonial photos
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.18.27_PM.jpg',
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.18.27_PM-2.jpg',
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.18.27_PM-3.jpg',
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.18.27_PM-4.jpg',
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.18.27_PM-5.jpg',
  'https://everymood.com/cdn/shop/files/WhatsApp_Image_2025-10-27_at_5.22.38_PM.jpg',
  // Favicon
  'https://everymood.com/cdn/shop/files/favicon.png',
];

async function download(url, retries = 2) {
  const filename = decodeURIComponent(url.split('/').pop().split('?')[0]);
  const dest = path.join(BASE_DIR, filename);

  if (existsSync(dest)) {
    console.log(`  SKIP ${filename}`);
    return;
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      console.log(`  OK   ${filename} (${(buf.length / 1024).toFixed(0)}KB)`);
      return;
    } catch (e) {
      if (attempt === retries) console.error(`  FAIL ${filename}: ${e.message}`);
      else await new Promise(r => setTimeout(r, 500));
    }
  }
}

async function main() {
  await mkdir(BASE_DIR, { recursive: true });
  console.log(`Downloading ${IMAGES.length} images to ${BASE_DIR}/...`);

  // Batch download 6 at a time
  for (let i = 0; i < IMAGES.length; i += 6) {
    const batch = IMAGES.slice(i, i + 6);
    await Promise.all(batch.map(url => download(url)));
  }

  console.log('\nDone!');
}

main();
