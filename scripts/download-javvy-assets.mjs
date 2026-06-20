import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = path.resolve('public');

const assets = {
  images: [
    { url: 'https://assets.javvycoffee.com/6a303c5d03c813b02d9fdf52_rf-utm-01.webp', name: 'rf-utm-01.webp' },
    { url: 'https://assets.javvycoffee.com/6a303c5ddef7738c0eed3f86_rf-utm-02.webp', name: 'rf-utm-02.webp' },
    { url: 'https://assets.javvycoffee.com/69b030b27ab41fb042342e32_listicle_autor_refresher.webp', name: 'author.webp' },
    { url: 'https://assets.javvycoffee.com/69aadfd916ea5aa27c7d02c5_refreshers-bundle-img-listicle.webp', name: 'refreshers-bundle.webp' },
    { url: 'https://assets.javvycoffee.com/6724fdda94d57f82bf0c2f9a_bf-gift-icon.svg', name: 'gift-icon.svg' },
    { url: 'https://assets.javvycoffee.com/6904d1d2a04083b4f4e2e935_ee8b7fb06f547d51c5a8b5310d7bfc58_chekmark-cr02.svg', name: 'checkmark.svg' },
  ],
  posters: [
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1774383130/videoframe_1787_d8bo0f.png', name: 'poster-1.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409161/2_mn4snp.png', name: 'poster-2.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/3_ahabbi.png', name: 'poster-3.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/4_nvumyh.png', name: 'poster-4.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/9_igwk9i.png', name: 'poster-5.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/6_cryzgy.png', name: 'poster-6.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/7_dqumv1.png', name: 'poster-7.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/8_ri0hjs.png', name: 'poster-8.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/9_igwk9i.png', name: 'poster-9.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773409159/10_ygqyic.png', name: 'poster-10.png' },
  ],
  videos: [
    { url: 'https://vz-318e2430-7a3.b-cdn.net/8221aa02-34e3-4f5f-b9ba-44031f254ce8/play_720p.mp4', name: 'reason-1.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/d5af288c-3047-4fbd-82af-1470e196afdb/play_720p.mp4', name: 'reason-2.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/18877545-0493-413f-98b9-b803f4202f39/play_720p.mp4', name: 'reason-3.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/7cceec99-02f6-4dfe-9a52-0e04d00a2508/play_720p.mp4', name: 'reason-4.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/20e50675-b596-428b-9b49-e65b8642ee7f/play_720p.mp4', name: 'reason-5.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/db9bd39e-705f-465b-bc48-24eef0689cbc/play_720p.mp4', name: 'reason-6.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/81db29ef-6181-4aed-a1cb-74412f1438fd/play_720p.mp4', name: 'reason-7.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/a72ae361-759b-4508-a471-372bde05247f/play_720p.mp4', name: 'reason-8.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/df61ba77-ff16-4762-8c31-6e1409757c90/play_720p.mp4', name: 'reason-9.mp4' },
    { url: 'https://vz-318e2430-7a3.b-cdn.net/ebba2a65-9406-4bde-9254-33baf5dc2dee/play_720p.mp4', name: 'reason-10.mp4' },
  ],
  favicons: [
    { url: 'https://cdn.prod.website-files.com/65de5f112dbd7f7bdfc2f7b0/68a617bf0f927b2749fbd371_fav-32.png', name: 'favicon-32.png' },
    { url: 'https://cdn.prod.website-files.com/65de5f112dbd7f7bdfc2f7b0/68a617c1d09f6d28718c125a_fav-256.png', name: 'favicon-256.png' },
    { url: 'https://res.cloudinary.com/dqxw76yvk/image/upload/q_auto,f_auto/v1773412281/meta-refreresher03_ark5bv.png', name: 'og-image.png' },
  ],
};

async function download(url, dest) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
    });
    if (!res.ok) {
      console.error(`FAIL ${res.status}: ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK: ${dest} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`ERR: ${url} - ${e.message}`);
  }
}

async function run() {
  const dirs = ['images/javvy', 'videos/javvy', 'seo/javvy'];
  for (const d of dirs) {
    const full = path.join(BASE, d);
    if (!existsSync(full)) await mkdir(full, { recursive: true });
  }

  const tasks = [];

  for (const img of assets.images) {
    tasks.push(download(img.url, path.join(BASE, 'images/javvy', img.name)));
  }
  for (const poster of assets.posters) {
    tasks.push(download(poster.url, path.join(BASE, 'images/javvy', poster.name)));
  }
  for (const fav of assets.favicons) {
    tasks.push(download(fav.url, path.join(BASE, 'seo/javvy', fav.name)));
  }

  // Download videos in batches of 3
  console.log('Downloading images and posters...');
  await Promise.all(tasks);

  console.log('Downloading videos...');
  for (let i = 0; i < assets.videos.length; i += 3) {
    const batch = assets.videos.slice(i, i + 3);
    await Promise.all(batch.map(v => download(v.url, path.join(BASE, 'videos/javvy', v.name))));
  }

  console.log('Done!');
}

run();
