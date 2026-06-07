import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = 'public/images/histrips';
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124.0 Safari/537.36'
};

const ASSETS = [
  // Logo
  ['//histrips.com/cdn/shop/files/hq-logo.svg?v=1765267618&width=417', 'logo.svg'],
  ['//histrips.com/cdn/shop/files/footer-logo.svg?v=1764783600&width=1000', 'footer-logo.svg'],

  // Product images - Brown Nasal Strips (main product)
  ['//histrips.com/cdn/shop/files/brown_Nasal_Strips_HiStrips.png?v=1778183238&width=800', 'product/brown-nasal-strips-1.png'],
  ['//histrips.com/cdn/shop/files/pink_Nasal_Strips_HiStrips_8298a3d8-77b9-4118-bfed-ce8c924670ba.png?v=1778125118&width=800', 'product/brown-nasal-strips-2.png'],
  ['//histrips.com/cdn/shop/files/pink_Nasal_Strips_HiStrips-3_05751516-2267-4016-a9b2-35c162899f70.png?v=1778125122&width=800', 'product/brown-nasal-strips-3.png'],
  ['//histrips.com/cdn/shop/files/pink_Nasal_Strips_HiStrips-1_56b346ca-c5ca-4d3a-bed6-197f89309f41.png?v=1778125122&width=800', 'product/brown-nasal-strips-4.png'],
  ['//histrips.com/cdn/shop/files/Black_Nasal_Strips_HiStrips-1_1130c8e9-ec8f-4f65-8433-760aef1c8a3d.png?v=1778125122&width=800', 'product/brown-nasal-strips-5.png'],
  ['//histrips.com/cdn/shop/files/pink_Nasal_Strips_HiStrips-2_d2814cec-c15b-445e-bdb0-621fdf1ddf9d.png?v=1778125119&width=800', 'product/brown-nasal-strips-6.png'],
  ['//histrips.com/cdn/shop/files/white_histrips_nasal_strips_5eb7b1d2-e316-4bcd-9769-15baf7cc06f1.png?v=1778125123&width=800', 'product/brown-nasal-strips-7.png'],
  ['//histrips.com/cdn/shop/files/histrips_nasal_strips_comparison_86852559-fb2b-4bc8-8b50-775191eb5418.png?v=1778125117&width=800', 'product/brown-nasal-strips-8.png'],
  ['//histrips.com/cdn/shop/files/pink_Nasal_Strips_HiStrips-4_e02813c4-435a-4a6b-aece-8a9396d02a90.png?v=1778125117&width=800', 'product/brown-nasal-strips-9.png'],
  ['//histrips.com/cdn/shop/files/ebooks_histrips_56320a25-ce28-4d9a-9cf0-85313003829e.png?v=1778125122&width=800', 'product/brown-nasal-strips-10.png'],

  // Video thumbnails (social proof section)
  ['//histrips.com/cdn/shop/files/Carlos_Alcaraz_Nasal_Strips.png?v=1749591746&width=600', 'social/carlos-alcaraz.png'],
  ['//histrips.com/cdn/shop/files/Screenshot_2025-07-01_at_15.47.15.png?v=1751356188&width=600', 'social/team-visma.png'],
  ['//histrips.com/cdn/shop/files/Screenshot_2025-07-01_at_15.36.23.png?v=1751355445&width=600', 'social/video-3.png'],
  ['//histrips.com/cdn/shop/files/taeke_histrips.png?v=1749641923&width=600', 'social/taeke.png'],
  ['//histrips.com/cdn/shop/files/Screenshot_2025-06-11_at_05.58.50.png?v=1749592788&width=600', 'social/video-5.png'],

  // Athlete avatars (marquee)
  ['//histrips.com/cdn/shop/files/equal_1331624_1.png?v=1758450267', 'athletes/carlitos.png'],
  ['//histrips.com/cdn/shop/files/equal_1331624_7.png?v=1758815483', 'athletes/team-visma.png'],
  ['//histrips.com/cdn/shop/files/K0A1582.png?v=1768222420', 'athletes/juanlebron.png'],
  ['//histrips.com/cdn/shop/files/one.png?v=1764681645&width=100', 'athletes/one.png'],
  ['//histrips.com/cdn/shop/files/pablo.png?v=1764681862&width=100', 'athletes/pablo.png'],
  ['//histrips.com/cdn/shop/files/alca.png?v=1764681929&width=100', 'athletes/alca.png'],
  ['//histrips.com/cdn/shop/files/bryan.png?v=1764681970&width=100', 'athletes/bryan.png'],
  ['//histrips.com/cdn/shop/files/gadio.png?v=1764682012&width=100', 'athletes/gadio.png'],
  ['//histrips.com/cdn/shop/files/ibali.png?v=1764682073&width=100', 'athletes/ibali.png'],
  ['//histrips.com/cdn/shop/files/jua.png?v=1764682128&width=100', 'athletes/jua.png'],
  ['//histrips.com/cdn/shop/files/fermin.png?v=1764682145&width=100', 'athletes/fermin.png'],
  ['//histrips.com/cdn/shop/files/lebron.png?v=1765266903&width=100', 'athletes/lebron.png'],
  ['//histrips.com/cdn/shop/files/image_1_02973a45-fdf4-4415-bee2-f2fbf95a32ae.png?v=1765311880&width=100', 'athletes/image1.png'],

  // USP icons
  ['//histrips.com/cdn/shop/files/icon-1_60x.svg?v=1764863427', 'icons/usp-1.svg'],
  ['//histrips.com/cdn/shop/files/icon-2_60x.svg?v=1764863428', 'icons/usp-2.svg'],
  ['//histrips.com/cdn/shop/files/icon-3_60x.svg?v=1764863428', 'icons/usp-3.svg'],
  ['//histrips.com/cdn/shop/files/icon-4_60x.svg?v=1764863427', 'icons/usp-4.svg'],
  ['//histrips.com/cdn/shop/files/usp1.svg?v=1764780719&width=1000', 'icons/usp-badge-1.svg'],
  ['//histrips.com/cdn/shop/files/usp2.svg?v=1764780819&width=1000', 'icons/usp-badge-2.svg'],
  ['//histrips.com/cdn/shop/files/usp3.svg?v=1764780819&width=1000', 'icons/usp-badge-3.svg'],
  ['//histrips.com/cdn/shop/files/sheild-icon.svg?v=1765364679&width=1000', 'icons/shield.svg'],

  // As seen in logos
  ['//histrips.com/cdn/shop/files/Item_elle-logo-113023_png_a9ed7b5e-24c7-45a0-ad1a-583d9be052d5.png?v=1765015939', 'press/elle.png'],
  ['//histrips.com/cdn/shop/files/Item_goop-113023_png_b6356415-3469-4e53-9ae5-8d9aacb827de.png?v=1765015940', 'press/goop.png'],
  ['//histrips.com/cdn/shop/files/Item_forbes-logo-113023_png_f533707b-b877-46d3-8c3c-ac20b91f131b.png?v=1765015940', 'press/forbes.png'],
  ['//histrips.com/cdn/shop/files/Item_people-logo-113023_png_df0b250b-7036-4f14-a02b-1c95b31a0a75.png?v=1765015939', 'press/people.png'],
  ['//histrips.com/cdn/shop/files/Item_vogue-logo-113023_png_e73bf6ec-71dc-4b57-bb2a-c2671ceba928.png?v=1765015940', 'press/vogue.png'],
  ['//histrips.com/cdn/shop/files/Item_womens-health-logo-113023_png_fa8d1f42-c744-43bc-a50b-ba6b30cb8307.png?v=1765015940', 'press/womens-health.png'],
  ['//histrips.com/cdn/shop/files/Item_oprah-magazine-logo-113023_png_14066a40-ed6d-45be-bf41-b19fabb7d43a.png?v=1765015939', 'press/oprah.png'],
  ['//histrips.com/cdn/shop/files/Item_cosmopolitan-logo-113023_png_ee71185d-0340-41ad-960c-21ee75e9e2bd.png?v=1765015940', 'press/cosmopolitan.png'],

  // Comparison section icons
  ['//histrips.com/cdn/shop/files/tick-1_1024x1024.svg?v=1764930624', 'icons/tick-green.svg'],
  ['//histrips.com/cdn/shop/files/tick-2_1024x1024.svg?v=1764930626', 'icons/tick-grey.svg'],
  ['//histrips.com/cdn/shop/files/compare-1_1024x1024.png?v=1764930531', 'compare/col-histrips.png'],
  ['//histrips.com/cdn/shop/files/compare-4_1024x1024.png?v=1764930531', 'compare/col-others.png'],
  ['//histrips.com/cdn/shop/files/compare-3_1024x1024.png?v=1764930531', 'compare/col-spray.png'],
  ['//histrips.com/cdn/shop/files/compare-2_1024x1024.png?v=1764930531', 'compare/col-strips.png'],

  // Clinical section chart
  ['//histrips.com/cdn/shop/files/desktop-chart.svg?v=1765020950&width=800', 'charts/desktop-chart.svg'],

  // Performance section images
  ['//histrips.com/cdn/shop/files/Frame_2147206105.png?v=1766082180&width=1000', 'performance/frame-1.png'],
  ['//histrips.com/cdn/shop/files/Frame_2147206106.png?v=1766082181&width=1000', 'performance/frame-2.png'],
  ['//histrips.com/cdn/shop/files/Frame_2147206107.png?v=1766082180&width=1000', 'performance/frame-3.png'],
  ['//histrips.com/cdn/shop/files/Frame_2147206108.png?v=1766082181&width=1000', 'performance/frame-4.png'],

  // Better nasal flow section
  ['//histrips.com/cdn/shop/files/Black_Nasal_Strips_HiStrips-1_2d7c1088-09d2-48cf-a5bd-f40f12b68d04.png?v=1767392705&width=1000', 'usecase/sleep.png'],
  ['//histrips.com/cdn/shop/files/Black_Nasal_Strips_HiStrips-2_e7f79153-a424-4033-85b2-18a164f6e0cf.png?v=1767392704&width=1000', 'usecase/workout.png'],
  ['//histrips.com/cdn/shop/files/Black_Nasal_Strips_HiStrips-5_ac2d42ff-0ffe-4b1a-9288-7c446a20d447.png?v=1767392705&width=1000', 'usecase/breathwork.png'],
  ['//histrips.com/cdn/shop/files/Black_Nasal_Strips_HiStrips-3_023c3bbc-7b58-4ce5-a0e2-1880f7050e1c.png?v=1767392705&width=1000', 'usecase/recovery.png'],

  // Instagram carousel images
  ['//histrips.com/cdn/shop/files/snapins-ai_3706360947654805921_1.png?v=1765311052', 'instagram/post-1.png'],
  ['//histrips.com/cdn/shop/files/Carousl_histrips_2_copy_4d3478a0-c37b-4965-b2d3-86e0e2dbff68.png?v=1765312763', 'instagram/post-2.png'],
  ['//histrips.com/cdn/shop/files/Rectangle_34.png?v=1765028088', 'instagram/post-3.png'],
  ['//histrips.com/cdn/shop/files/Carousl_histrips_2-3.png?v=1765313538', 'instagram/post-4.png'],
  ['//histrips.com/cdn/shop/files/IMG_7268_1.png?v=1765310465', 'instagram/post-5.png'],
  ['//histrips.com/cdn/shop/files/HiStrips_Insta_Carrousel.png?v=1765310740', 'instagram/post-6.png'],
  ['//histrips.com/cdn/shop/files/Rectangle_35.png?v=1765028087', 'instagram/post-7.png'],
  ['//histrips.com/cdn/shop/files/Rectangle_36.png?v=1765028088', 'instagram/post-8.png'],
  ['//histrips.com/cdn/shop/files/image00004_1.png?v=1765310628', 'instagram/post-9.png'],
  ['//histrips.com/cdn/shop/files/IMG_7708_1.png?v=1765310369', 'instagram/post-10.png'],
  ['//histrips.com/cdn/shop/files/Group_1000004894.png?v=1765310524', 'instagram/post-11.png'],
  ['//histrips.com/cdn/shop/files/Snapinsta.app_471491521_8810539279014565_8692136857461667609_n_1080_1.png?v=1765310428', 'instagram/post-12.png'],

  // Verified badge
  ['https://cdn.shopify.com/s/files/1/0834/1107/5416/files/verifd.svg', 'icons/verified.svg'],

  // Navigation arrows
  ['https://cdn.shopify.com/s/files/1/0834/1107/5416/files/right-ara.svg?v=1765228301', 'icons/arrow-right.svg'],
  ['https://cdn.shopify.com/s/files/1/0834/1107/5416/files/left-ara.svg?v=1765228302', 'icons/arrow-left.svg'],
  ['https://cdn.shopify.com/s/files/1/0834/1107/5416/files/Down_Arrow_3.svg?v=1764942359', 'icons/arrow-down.svg'],

  // Next gen section video thumbnail
  ['//histrips.com/cdn/shop/files/preview_images/327f034f640d4d75acdb25f179800e8a.thumbnail.0000000000_small.jpg?v=1754995003', 'next-gen/video-thumb.jpg'],

  // Bundles section
  ['//histrips.com/cdn/shop/files/histrips_nasal_strips_athletes_favorite_bundle-4_680faa33-9185-4954-895f-d82c91f5cedd.png?v=1777380783&width=600', 'bundles/athletes-favorite.png'],
  ['//histrips.com/cdn/shop/files/Frame_2147239578_ba0523bb-302d-4e46-8e9f-49a866b17107.png?v=1778753811&width=600', 'bundles/bundle-2.png'],
  ['//histrips.com/cdn/shop/files/perfect_sleep_kit_histrips_1.png?v=1777474705&width=600', 'bundles/sleep-kit.png'],

  // Background PR section
  ['//histrips.com/cdn/shop/files/bg-pr.png?v=1764797192&width=1000', 'bg-pr.png'],

  // Marquee influencer avatar extras
  ['//histrips.com/cdn/shop/files/equal_13316248_7.png?v=1758450071', 'athletes/equal7.png'],
  ['//histrips.com/cdn/shop/files/equal_1316248_4.png?v=1758450267', 'athletes/equal4.png'],
  ['//histrips.com/cdn/shop/files/K0A1441.png?v=1768222424', 'athletes/k0a1441.png'],

  // Verification badge for athlete
  ['//histrips.com/cdn/shop/files/c8ad5e4ac9916aff57422fc2d88da8bd48c1947b.png?v=1758102554', 'icons/badge.png'],
];

async function download(url, filename) {
  const absUrl = url.startsWith('//') ? `https:${url}` : url;
  const dest = path.join(BASE, filename);
  await mkdir(path.dirname(dest), { recursive: true });
  if (existsSync(dest)) {
    console.log(`[SKIP] ${filename}`);
    return;
  }
  try {
    const res = await fetch(absUrl, { headers: HEADERS });
    if (!res.ok) { console.error(`[FAIL] ${filename}: HTTP ${res.status}`); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`[OK] ${filename} (${(buf.length/1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`[ERR] ${filename}: ${e.message}`);
  }
}

// Batch download 4 at a time
async function run() {
  const batch = 4;
  for (let i = 0; i < ASSETS.length; i += batch) {
    await Promise.all(ASSETS.slice(i, i + batch).map(([url, name]) => download(url, name)));
  }
  console.log('Done!');
}

run();
