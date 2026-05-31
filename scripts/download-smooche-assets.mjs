#!/usr/bin/env node
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('public/images/smooche');
fs.mkdirSync(OUT_DIR, { recursive: true });

const assets = [
  // Logo
  { url: 'https://smooche.com/cdn/shop/files/Smooche_LOGO_final_Black-01.svg?v=1745494343', name: 'logo-black.svg' },
  { url: 'https://smooche.com/cdn/shop/files/Smooche_LOGO_final_White-02.svg?v=1752487286', name: 'logo-white.svg' },

  // Product images - Transparent variant
  { url: 'https://smooche.com/cdn/shop/files/ELPC.png?v=1768886153', name: 'elpc-1.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_2.png?v=1768886153', name: 'elpc-2.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_3.png?v=1768886153', name: 'elpc-3.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_4.png?v=1768886153', name: 'elpc-4.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_3_f22044c0-cda7-481f-87a1-3648b9f9ddc2.png?v=1768886153', name: 'elpc-5.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_6.png?v=1768886153', name: 'elpc-6.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_7.png?v=1768886153', name: 'elpc-7.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_8.png?v=1768886153', name: 'elpc-8.png' },

  // Product images - Raspberry variant
  { url: 'https://smooche.com/cdn/shop/files/ELPR.png?v=1768886153', name: 'elpr-1.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_2.png?v=1768886153', name: 'elpr-2.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_3.png?v=1768886153', name: 'elpr-3.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_4.png?v=1768886153', name: 'elpr-4.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_2_d519db13-ccc7-46be-8537-ce42f2245c5e.png?v=1768886153', name: 'elpr-5.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_94688b38-ca0b-44de-b490-5ff17a9bb788.png?v=1768886153', name: 'elpr-6.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_6.png?v=1768886153', name: 'elpr-7.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPR_7.png?v=1768886153', name: 'elpr-7b.png' },

  // Smooche icons
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_21.svg', name: 'icon-plumping.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_22.svg', name: 'icon-natural.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_26.svg', name: 'icon-results.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_30.svg', name: 'icon-trusted.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_4_bfdf70f5-3226-4cbd-b987-f623e75dd045_500x500.svg', name: 'icon-delivery.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_12_500x500.svg', name: 'icon-money-back.svg' },
  { url: 'https://smooche.com/cdn/shop/files/icons_smooche_new_13_500x500.svg', name: 'icon-cruelty-free.svg' },

  // Lifestyle / section images
  { url: 'https://smooche.com/cdn/shop/files/ELPC_8_1200x1200.png?v=1768886153', name: 'fuller-lips-hero.png' },
  { url: 'https://smooche.com/cdn/shop/files/sdfsdffs_1000x1000.png?v=1727534497', name: 'how-it-works-1.png' },
  { url: 'https://smooche.com/cdn/shop/files/A29203DF-5B9B-4AE5-9ACB-29FC6108C19D_1000x1000.jpg?v=1727504048', name: 'how-it-works-2.jpg' },
  { url: 'https://smooche.com/cdn/shop/files/B992F382-CB90-4DD2-9380-42F3BBEA7C08_1000x1000.jpg?v=1727504034', name: 'how-it-works-3.jpg' },
  { url: 'https://smooche.com/cdn/shop/files/smooche_ingredients_3_600x600.png?v=1725384811', name: 'ingredients-bg.png' },
  { url: 'https://smooche.com/cdn/shop/files/stain.jpg?v=1752488356', name: 'stain-hero.jpg' },
  { url: 'https://smooche.com/cdn/shop/files/8_9b44ff89-6119-4081-b0d1-46a3d657b031.png?v=1765459844', name: 'hero-banner.png' },
  { url: 'https://smooche.com/cdn/shop/files/shipping_box_2_1000x1000.png?v=1763007034', name: 'shipping-box.png' },

  // Upsell product images
  { url: 'https://smooche.com/cdn/shop/files/1_42bfe2c2-229b-43b9-83b2-b2d44c53f23d_1000x1000.png', name: 'upsell-brush.png' },
  { url: 'https://smooche.com/cdn/shop/files/vc_1d8f5d7e-2690-4cbc-8390-13ac8b063c2c_800x.png?v=1765455083', name: 'upsell-gloss.png' },
  { url: 'https://smooche.com/cdn/shop/files/1_806b81e8-e466-4549-be40-160b224b6b3f_800x.png?v=1765879190', name: 'upsell-liner.png' },

  // Best sellers
  { url: 'https://smooche.com/cdn/shop/files/ColorChangingFoundation-Productimagesphotos_639aab4b-1799-451b-902f-6f6be9fb6433_800x.png?v=1765177252', name: 'bestseller-foundation.png' },
  { url: 'https://smooche.com/cdn/shop/files/1_43349fcf-3993-4895-8c93-75a4b32b6ac5_800x.png?v=1770816193', name: 'bestseller-stain.png' },
  { url: 'https://smooche.com/cdn/shop/files/Espresso_800x.png?v=1765878866', name: 'bestseller-mascara.png' },
  { url: 'https://smooche.com/cdn/shop/files/ELPC_800x.png?v=1768886153', name: 'bestseller-plumper.png' },

  // Review avatars
  { url: 'https://smooche.com/cdn/shop/files/pp_2.png?v=1765539391', name: 'avatar-1.png' },
  { url: 'https://smooche.com/cdn/shop/files/1_eea6d46b-7558-42fc-966a-83c64539e969.png?v=1765022918', name: 'avatar-2.png' },

  // AP logo
  { url: 'https://cdn.shopify.com/s/files/1/0621/4988/6108/files/AP_logo_badge_6328x2204_blackmint_png.png?v=1723243993', name: 'ap-badge.png' },

  // "8" lifestyle banner
  { url: 'https://smooche.com/cdn/shop/files/8_bed56c8e-3bd1-461a-b435-17db8d3450c6_800x800.jpg', name: 'lifestyle-banner.jpg' },

  // Color Changing Foundation bestseller
  { url: 'https://smooche.com/cdn/shop/files/Color_Changing_Foundation_-_Product_images_photos_2.png', name: 'bestseller-foundation-2.png' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { console.log(`  SKIP ${path.basename(dest)}`); return resolve(); }
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) { console.log(`  FAIL ${path.basename(dest)} (${res.statusCode})`); return resolve(); }
      const ws = fs.createWriteStream(dest);
      res.pipe(ws);
      ws.on('finish', () => { console.log(`  OK ${path.basename(dest)}`); ws.close(resolve); });
      ws.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  console.log(`Downloading ${assets.length} assets to ${OUT_DIR}...`);
  const batch = 4;
  for (let i = 0; i < assets.length; i += batch) {
    const chunk = assets.slice(i, i + batch);
    await Promise.all(chunk.map(a => download(a.url, path.join(OUT_DIR, a.name)).catch(e => console.log(`  ERR ${a.name}: ${e.message}`))));
  }
  console.log('Done!');
}

main();
