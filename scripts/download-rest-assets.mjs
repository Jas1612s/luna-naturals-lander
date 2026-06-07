import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';

const BASE = 'public/images/rest';
const VIDEO_BASE = 'public/videos/rest';
const FONT_BASE = 'public/fonts/rest';
const SEO_BASE = 'public/seo';

async function download(url, dest) {
  if (existsSync(dest)) {
    console.log(`  SKIP (exists): ${dest}`);
    return;
  }
  const fullUrl = url.startsWith('//') ? `https:${url}` : url;
  try {
    const res = await fetch(fullUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`  OK: ${dest} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`  FAIL: ${dest} — ${e.message}`);
  }
}

async function batch(tasks, concurrency = 4) {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const chunk = tasks.slice(i, i + concurrency);
    await Promise.all(chunk.map(([url, dest]) => download(url, dest)));
  }
}

await mkdir(BASE, { recursive: true });
await mkdir(VIDEO_BASE, { recursive: true });
await mkdir(FONT_BASE, { recursive: true });
await mkdir(SEO_BASE, { recursive: true });

console.log('=== Downloading Rest.com assets ===\n');

// Hero images
console.log('--- Hero ---');
const heroImages = [
  ['//rest.com/cdn/shop/files/2026-best-sheets-ever-sale-hero-kv1-desktop.webp?v=1780045737&width=1920', `${BASE}/hero-desktop.webp`],
  ['//rest.com/cdn/shop/files/2026-best-sheets-ever-sale-hero-kv1-mobile.webp?v=1780045737&width=600', `${BASE}/hero-mobile.webp`],
  ['//rest.com/cdn/shop/files/2026-best-sheets-ever-sale-floating-pillow-kv1-desktop.webp?v=1780045736&width=515', `${BASE}/floating-pillow-desktop.webp`],
  ['//rest.com/cdn/shop/files/2026-best-sheets-ever-sale-floating-pillow-kv1-mobile.webp?v=1780045737&width=286', `${BASE}/floating-pillow-mobile.webp`],
];
await batch(heroImages);

// Free gifts images
console.log('\n--- Free Gifts ---');
const giftImages = [
  ['//rest.com/cdn/shop/files/pillowcases-gift-v2-mobile.webp', `${BASE}/pillowcases-gift.webp`],
  ['//rest.com/cdn/shop/files/flat-sheet-gift-v2-mobile.webp', `${BASE}/flat-sheet-gift.webp`],
];
await batch(giftImages);

// Product card images
console.log('\n--- Product Cards ---');
const productImages = [
  ['//rest.com/cdn/shop/files/product-card-comforter-01.jpg?v=1763609818&width=504', `${BASE}/product-comforter.jpg`],
  ['//rest.com/cdn/shop/files/product-card-starterss-01.jpg?width=504', `${BASE}/product-starter-sheet.jpg`],
  ['//rest.com/cdn/shop/files/product-card-pillow-01.jpg?width=504', `${BASE}/product-pillow.jpg`],
  ['//rest.com/cdn/shop/files/product-card-pj-pants-01.jpg?width=504', `${BASE}/product-pajamas.jpg`],
];
await batch(productImages);

// Award badges
console.log('\n--- Award Badges ---');
const badgeImages = [
  ['//rest.com/cdn/shop/files/GH-2026-cropped.png?v=1775110271&width=128', `${BASE}/badge-gh.png`],
  ['//rest.com/cdn/shop/files/hw.png?width=128', `${BASE}/badge-hw.png`],
  ['//rest.com/cdn/shop/files/MensHeath_SleepAwards2025.png?width=128', `${BASE}/badge-mens-health.png`],
  ['//rest.com/cdn/shop/files/rca-badge-2025.webp?width=128', `${BASE}/badge-rca.webp`],
];
await batch(badgeImages);

// About/Reviews background
console.log('\n--- About Reviews ---');
const aboutImages = [
  ['//rest.com/cdn/shop/files/index-about-bg-desktop.webp?v=1773135189&width=1920', `${BASE}/about-bg-desktop.webp`],
  ['//rest.com/cdn/shop/files/index-about-bg-mobile.webp?v=1773135244&width=600', `${BASE}/about-bg-mobile.webp`],
];
await batch(aboutImages);

// Sleep score badge
console.log('\n--- Sleep Score ---');
const sleepImages = [
  ['//rest.com/cdn/shop/files/index-sleep-score-badge.webp', `${BASE}/sleep-score-badge.webp`],
];
await batch(sleepImages);

// UGC video thumbnails
console.log('\n--- UGC Thumbnails ---');
const ugcThumbs = [
  ['//rest.com/cdn/shop/files/preview_images/4166e8d1e8be480fb6497bc00f437194.thumbnail.0000000000_small.jpg?v=1767782211', `${BASE}/ugc-thumb-1.jpg`],
  ['//rest.com/cdn/shop/files/preview_images/bf7b76d0bfff49e3bf9bb821ab341120.thumbnail.0000000000_small.jpg?v=1767782211', `${BASE}/ugc-thumb-2.jpg`],
  ['//rest.com/cdn/shop/files/preview_images/6a0f3464cad148b7a86f840ce0868309.thumbnail.0000000000_small.jpg?v=1767782211', `${BASE}/ugc-thumb-3.jpg`],
  ['//rest.com/cdn/shop/files/preview_images/c7943990853a4d64b4a183113ae2b5d6.thumbnail.0000000000_small.jpg?v=1767782211', `${BASE}/ugc-thumb-4.jpg`],
  ['//rest.com/cdn/shop/files/preview_images/c0a5e3af1f4544cfa973a5f1194e5644.thumbnail.0000000000_small.jpg?v=1767782211', `${BASE}/ugc-thumb-5.jpg`],
];
await batch(ugcThumbs);

// UGC videos
console.log('\n--- UGC Videos ---');
const ugcVideos = [
  ['//rest.com/cdn/shop/videos/c/vp/4166e8d1e8be480fb6497bc00f437194/4166e8d1e8be480fb6497bc00f437194.HD-720p-1.6Mbps-66514340.mp4?v=0', `${VIDEO_BASE}/ugc-1.mp4`],
  ['//rest.com/cdn/shop/videos/c/vp/bf7b76d0bfff49e3bf9bb821ab341120/bf7b76d0bfff49e3bf9bb821ab341120.HD-720p-1.6Mbps-66514341.mp4?v=0', `${VIDEO_BASE}/ugc-2.mp4`],
  ['//rest.com/cdn/shop/videos/c/vp/6a0f3464cad148b7a86f840ce0868309/6a0f3464cad148b7a86f840ce0868309.HD-720p-1.6Mbps-66514342.mp4?v=0', `${VIDEO_BASE}/ugc-3.mp4`],
  ['//rest.com/cdn/shop/videos/c/vp/c7943990853a4d64b4a183113ae2b5d6/c7943990853a4d64b4a183113ae2b5d6.HD-720p-1.6Mbps-66514343.mp4?v=0', `${VIDEO_BASE}/ugc-4.mp4`],
  ['//rest.com/cdn/shop/videos/c/vp/c0a5e3af1f4544cfa973a5f1194e5644/c0a5e3af1f4544cfa973a5f1194e5644.HD-720p-1.6Mbps-66514344.mp4?v=0', `${VIDEO_BASE}/ugc-5.mp4`],
];
await batch(ugcVideos, 2);

// Footer video
console.log('\n--- Footer Video ---');
const footerVideo = [
  ['//rest.com/cdn/shop/videos/c/vp/cd462f16796d43ebb63a4c784882856a/cd462f16796d43ebb63a4c784882856a.HD-1080p-2.5Mbps-69865348.mp4?v=0', `${VIDEO_BASE}/footer-banner.mp4`],
  ['//rest.com/cdn/shop/files/preview_images/cd462f16796d43ebb63a4c784882856a.thumbnail.0000000000_small.jpg?v=1770038861', `${BASE}/footer-banner-poster.jpg`],
];
await batch(footerVideo);

// Fonts
console.log('\n--- Fonts ---');
const fonts = [
  ['//rest.com/cdn/shop/t/414/assets/Siri-Light.woff2?v=164009752766922740651771847083', `${FONT_BASE}/Siri-Light.woff2`],
  ['//rest.com/cdn/shop/t/414/assets/Siri-Book.woff2?v=32445651227119919301771847081', `${FONT_BASE}/Siri-Book.woff2`],
  ['//rest.com/cdn/shop/t/414/assets/Siri-Regular.woff2?v=18276409375926241781771847080', `${FONT_BASE}/Siri-Regular.woff2`],
  ['//rest.com/cdn/shop/t/414/assets/Siri-Medium.woff2?v=138336854629742090081771847080', `${FONT_BASE}/Siri-Medium.woff2`],
  ['//rest.com/cdn/shop/t/414/assets/Siri-SemiBold.woff2?v=128468482839292172981771847081', `${FONT_BASE}/Siri-SemiBold.woff2`],
  ['//rest.com/cdn/shop/t/414/assets/DearScript.woff2?v=143977394254203396381771847081', `${FONT_BASE}/DearScript.woff2`],
];
await batch(fonts);

// Favicons
console.log('\n--- Favicons ---');
const favicons = [
  ['//rest.com/cdn/shop/t/414/assets/favicon.ico?v=46692516084420371801771847083', `${SEO_BASE}/rest-favicon.ico`],
  ['//rest.com/cdn/shop/t/414/assets/apple-touch-icon_180x.png?v=15555765690920761531771847082', `${SEO_BASE}/rest-apple-touch-icon.png`],
  ['//rest.com/cdn/shop/t/414/assets/favicon-32x32_32x.png?v=94668094445993875921771847082', `${SEO_BASE}/rest-favicon-32.png`],
  ['//rest.com/cdn/shop/t/414/assets/favicon.svg?v=123288712797600407801771847080', `${SEO_BASE}/rest-favicon.svg`],
];
await batch(favicons);

// OG Image
console.log('\n--- OG Image ---');
await download('https://rest.com/cdn/shop/files/OG_-_Home_Page_1.jpg?v=1736925868&width=800', `${SEO_BASE}/rest-og.jpg`);

// Menu card images
console.log('\n--- Menu Card Images ---');
const menuImages = [
  ['//rest.com/cdn/shop/files/shop-comforter-image.webp', `${BASE}/menu-comforter.webp`],
  ['//rest.com/cdn/shop/files/shop-sheet-set-image.webp', `${BASE}/menu-sheet-set.webp`],
  ['//rest.com/cdn/shop/files/shop-starter-sheet-image.webp', `${BASE}/menu-starter-sheet.webp`],
  ['//rest.com/cdn/shop/files/shop-pillowcases-image.webp', `${BASE}/menu-pillowcases.webp`],
  ['//rest.com/cdn/shop/files/shop-pillow-image.webp', `${BASE}/menu-pillow.webp`],
  ['//rest.com/cdn/shop/files/shop-pajamas-pants-image.webp', `${BASE}/menu-pajamas-pants.webp`],
  ['//rest.com/cdn/shop/files/shop-eye-mask-image.webp', `${BASE}/menu-eye-mask.webp`],
  ['//rest.com/cdn/shop/files/science_desktop_menu_card_01_2x_df1654bd-8707-4716-888d-f571e32a3833.webp', `${BASE}/menu-science-1.webp`],
  ['//rest.com/cdn/shop/files/science_desktop_menu_card_02_2x_04f9a453-92ae-4874-aaf6-5380c745a6c7.webp', `${BASE}/menu-science-2.webp`],
  ['//rest.com/cdn/shop/files/science_desktop_menu_card_03_2x_5603c455-df46-46ba-bb73-11d8e0baccc1.webp', `${BASE}/menu-science-3.webp`],
];
await batch(menuImages);

console.log('\n=== Done! ===');
