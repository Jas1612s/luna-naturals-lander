import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

const BASE = "public/images/histrips";

const assets = [
  // Featured product
  { url: "https://histrips.com/cdn/shop/files/Onyx_Strip_bundle.png", dest: `${BASE}/featured-product.png` },
  // Athlete testimonials
  { url: "https://histrips.com/cdn/shop/files/Snapins.ai_474485313_18389141815100566_6145669061376159114_n_1080_1.png", dest: `${BASE}/ugc/ugc-marisa.png` },
  { url: "https://histrips.com/cdn/shop/files/ig_carrousel_histrips.png", dest: `${BASE}/ugc/ugc-chris.png` },
  { url: "https://histrips.com/cdn/shop/files/Rectangle_38.png", dest: `${BASE}/ugc/ugc-conrad.png` },
  { url: "https://histrips.com/cdn/shop/files/IMG_7734_1.png", dest: `${BASE}/ugc/ugc-thiago.png` },
  { url: "https://histrips.com/cdn/shop/files/jaumemasia5__YES_1.png", dest: `${BASE}/ugc/ugc-jaume.png` },
  { url: "https://histrips.com/cdn/shop/files/15_1.png", dest: `${BASE}/ugc/ugc-fermin.png` },
  { url: "https://histrips.com/cdn/shop/files/Rectangle_37.png", dest: `${BASE}/ugc/ugc-alfonso.png` },
  // Twin CTA backgrounds
  { url: "https://histrips.com/cdn/shop/files/histrips_fe6867f9-b3bd-40d5-ac47-c6ae71592de0.png", dest: `${BASE}/feature/cta-money-back.png` },
  { url: "https://histrips.com/cdn/shop/files/histrips_ee9d82eb-7724-4605-8898-2ce20b9c1e15.png", dest: `${BASE}/feature/cta-perfect-bundle.png` },
  // Expert section doctor photos
  { url: "https://histrips.com/cdn/shop/files/histrips_doctors_b1e6fda3-111c-4df0-8324-a5b7dd43aba2.png", dest: `${BASE}/experts/doctor-samuel.png` },
  { url: "https://histrips.com/cdn/shop/files/histrips_doctors-2_4a76f2eb-6024-4caf-ad92-cb67c4dbf4bc.png", dest: `${BASE}/experts/doctor-sommer.png` },
  { url: "https://histrips.com/cdn/shop/files/histrips_doctors-1_8a7836ec-05ef-48f5-a747-b8f29bb69415.png", dest: `${BASE}/experts/doctor-ercan.png` },
];

async function download(url, dest) {
  if (existsSync(dest)) {
    console.log(`SKIP ${dest}`);
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK   ${dest} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`FAIL ${dest}: ${e.message}`);
  }
}

// Create directories
for (const dir of [`${BASE}/ugc`, `${BASE}/experts`]) {
  await mkdir(dir, { recursive: true });
}

// Download in batches of 4
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map((a) => download(a.url, a.dest)));
}

console.log("Done!");
