/**
 * Download HiStrips homepage assets from Shopify CDN
 */
import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE = 'https://histrips.com/cdn/shop/files/';
const CDN = 'https://cdn.shopify.com/s/files/1/0834/1107/5416/files/';
const ARTICLES = 'https://histrips.com/cdn/shop/articles/';
const OUT = path.resolve('public/images/histrips');

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
};

const ASSETS = [
  // Hero
  { url: `${BASE}histrips_hero_athletes_3.png?v=1772639772&width=1920`, dest: 'hero/hero-desktop.png' },
  { url: `${BASE}histrips_hero_athletes_4.png?v=1772639765&width=800`, dest: 'hero/hero-mobile.png' },

  // Logo
  { url: `${BASE}hq-logo.svg?v=1765267618`, dest: 'logo.svg' },

  // USP section backgrounds
  { url: `${BASE}cus-t.png?v=1764699624&width=2500`, dest: 'usp/usp-bg-desktop.png' },
  { url: `${BASE}cus-t-mobile.png?v=1764699623&width=1500`, dest: 'usp/usp-bg-mobile.png' },

  // Feature block card backgrounds
  { url: `${BASE}histrips_fe6867f9-b3bd-40d5-ac47-c6ae71592de0.png?v=1765355852`, dest: 'feature/feature-card-1.png' },
  { url: `${BASE}histrips_ee9d82eb-7724-4605-8898-2ce20b9c1e15.png?v=1765355546`, dest: 'feature/feature-card-2.png' },
  { url: `${BASE}histrips-1_475d4832-6670-440e-87a1-39eef876c7e0.png?v=1765355851`, dest: 'feature/feature-card-3.png' },
  { url: `${BASE}histrips-1.png?v=1765355543`, dest: 'feature/feature-card-4.png' },

  // Collection tab - HiStrips products (lifestyle + product shots)
  { url: `${BASE}Black_Nasal_Strips_HiStrips-4_57b74b4c-31e9-4bcd-8d09-ffcff4d0e67d.png?v=1777196533&width=800`, dest: 'products/black-strips-lifestyle.png' },
  { url: `${BASE}BlackNasalStripsHiStrips.png?v=1773417722&width=800`, dest: 'products/black-strips-product.png' },
  { url: `${BASE}ONYX_histrips_Wrist_Alaram-4_d5535f2e-952f-4646-92be-a174a6e6c6b0.png?v=1773849117&width=800`, dest: 'products/onyx-alarm-lifestyle.png' },
  { url: `${BASE}JMHS-Week-34-adset-2-POST-V3_1.png?v=1778659748&width=800`, dest: 'products/onyx-alarm-product.png' },
  { url: `${BASE}PDP_8.png?v=1771919447&width=800`, dest: 'products/magnetic-strips-lifestyle.png' },
  { url: `${BASE}PDP_2_e7fe3f2e-b74b-429b-a77c-92e9c69057f0.png?v=1771919447&width=800`, dest: 'products/magnetic-strips-product.png' },
  { url: `${BASE}histrips_Red_Light_Therapy_3.png?v=1778991013&width=800`, dest: 'products/red-light-lifestyle.png' },
  { url: `${BASE}histripsRedLightTherapy-1.png?v=1778917052&width=800`, dest: 'products/red-light-product.png' },
  { url: `${BASE}histrips_nasal_strips_athletes_favorite_bundle-4_680faa33-9185-4954-895f-d82c91f5cedd.png?v=1777380783&width=800`, dest: 'products/athlete-fav-black-lifestyle.png' },
  { url: `${BASE}Black_Nasal_Strips_HiStrips_b86cd3a6-9e7b-4686-9c42-af3bcd986517.png?v=1765365698&width=800`, dest: 'products/athlete-fav-black-product.png' },
  { url: `${BASE}histripsessentialnasalsticks.png?v=1778817609&width=800`, dest: 'products/nasal-sticks-lifestyle.png' },
  { url: `${BASE}histripsessentialnasalsticks-1.png?v=1778817609&width=800`, dest: 'products/nasal-sticks-product.png' },
  { url: `${BASE}athlete_favorite_combo_7.png?v=1764679581&width=800`, dest: 'products/elite-kit-lifestyle.png' },
  { url: `${BASE}Frame_2147239588_16a3d8c7-7d04-4759-a918-ad1f280a4c8d.png?v=1777458189&width=800`, dest: 'products/elite-kit-product.png' },

  // HiSleep products
  { url: `${BASE}Mouth_Tape_HiStrips_ee9882a8-b277-485b-886d-1fe6b649d57e.png?v=1777380785&width=800`, dest: 'products/mouth-tape-lifestyle.png' },
  { url: `${BASE}perfect_sleep_kit_histrips.png?v=1777383383&width=800`, dest: 'products/sleep-kit-lifestyle.png' },
  { url: `${BASE}Best_Nasal_Stick_from_HiStrips_9b0de70b-cb2c-4919-8d6d-0bb3d2d77ab8.png?v=1777380791&width=800`, dest: 'products/nasal-sticks-main.png' },

  // Color variants (For Every Shade section)
  { url: `${BASE}skin_Nasal_Strips_HiStrips.png?v=1778183236&width=800`, dest: 'products/skin-strips.png' },
  { url: `${BASE}brown_Nasal_Strips_HiStrips.png?v=1778183238&width=800`, dest: 'products/brown-strips.png' },
  { url: `${BASE}pink_Nasal_Strips_HiStrips_2c25f170-ac85-4dfe-8130-104e0ec0821f.png?v=1778125001&width=800`, dest: 'products/pink-strips-lifestyle.png' },
  { url: `${BASE}pinkNasalStripsHiStrips.png?v=1765815578&width=800`, dest: 'products/pink-strips-product.png' },
  { url: `${BASE}white_Nasal_Strips_HiStrips_281bc67c-176d-4194-bce5-dee15f781fcc.png?v=1778183237&width=800`, dest: 'products/white-strips-lifestyle.png' },
  { url: `${BASE}whiteNasalStripsHiStrips.png?v=1765793106&width=800`, dest: 'products/white-strips-product.png' },
  { url: `${BASE}blue_Nasal_Strips_HiStrips_e95cc2e2-6951-4ab6-8b3f-e9649b66b5e2.png?v=1778183236&width=800`, dest: 'products/blue-strips-lifestyle.png' },
  { url: `${BASE}blueNasalStripsHiStrips.png?v=1764679670&width=800`, dest: 'products/blue-strips-product.png' },
  { url: `${BASE}camo_Nasal_Strips_HiStrips_7d46bc31-3417-4966-bfae-341b8b13a1a9.png?v=1778183235&width=800`, dest: 'products/camo-strips-lifestyle.png' },
  { url: `${BASE}camoNasalStripsHiStrips.png?v=1764679635&width=800`, dest: 'products/camo-strips-product.png' },
  { url: `${BASE}Black_Nasal_Strips_HiStrips_bae3773c-f7f7-4605-994b-130c82456e93.png?v=1778183233&width=800`, dest: 'products/black-strips-lifestyle-2.png' },

  // Breathing section doctor images
  { url: `${BASE}histrips_doctors_b1e6fda3-111c-4df0-8324-a5b7dd43aba2.png?v=1764699624&width=800`, dest: 'breathing/doctor-1.png' },
  { url: `${BASE}histrips_doctors-2_4a76f2eb-6024-4caf-ad92-cb67c4dbf4bc.png?v=1764699624&width=800`, dest: 'breathing/doctor-2.png' },
  { url: `${BASE}histrips_doctors-1_8a7836ec-05ef-48f5-a747-b8f29bb69415.png?v=1764699624&width=800`, dest: 'breathing/doctor-3.png' },
  { url: `${CDN}bt.svg?v=1764942359`, dest: 'breathing/breathing-icon.svg' },
  { url: `${CDN}Down_Arrow_3.svg?v=1764942359`, dest: 'breathing/down-arrow.svg' },

  // Bundles (from tab)
  { url: `${BASE}histrips_nasal_strips_athletes_favorite_bundle-3_cc318d99-05f7-4e02-ad62-5f42f94527b5.png?v=1777380785&width=800`, dest: 'products/athlete-fav-pink-lifestyle.png' },
  { url: `${BASE}Black_Nasal_Strips_HiStrips_e2919137-99e0-43c5-8b28-dcf803ef3a69.png?v=1774624874&width=800`, dest: 'products/athlete-fav-pink-product.png' },

  // Blog post images
  { url: `${ARTICLES}how-to-wake-up-for-work-without-disturbing-your-spouse.jpg?v=1777473615&width=800`, dest: 'blog/blog-1.jpg' },
  { url: `${ARTICLES}best-wake-up-solution-for-couples-sharing-a-bed.jpg?v=1777473618&width=800`, dest: 'blog/blog-2.jpg' },
  { url: `${ARTICLES}how-married-couples-can-improve-mornings-with-a-vibration-alarm.jpg?v=1777473621&width=800`, dest: 'blog/blog-3.jpg' },
  { url: `${ARTICLES}best-alarm-for-couples-where-one-person-sleeps-much-heavier.jpg?v=1777473624&width=800`, dest: 'blog/blog-4.jpg' },
];

async function download(url, dest) {
  const fullDest = path.join(OUT, dest);
  const dir = path.dirname(fullDest);

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (existsSync(fullDest)) {
    console.log(`  skip  ${dest}`);
    return;
  }

  try {
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) {
      console.error(`  FAIL  ${dest} (${res.status})`);
      return;
    }
    await pipeline(res.body, createWriteStream(fullDest));
    console.log(`  done  ${dest}`);
  } catch (err) {
    console.error(`  ERR   ${dest}: ${err.message}`);
  }
}

// Batch downloads 4 at a time
async function main() {
  console.log(`Downloading ${ASSETS.length} assets to public/images/histrips/`);
  const BATCH = 4;
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    const batch = ASSETS.slice(i, i + BATCH);
    await Promise.all(batch.map(({ url, dest }) => download(url, dest)));
  }
  console.log('\nAll done.');
}

main();
