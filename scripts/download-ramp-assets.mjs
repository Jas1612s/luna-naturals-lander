import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const BASE = "https://ramp.com";

const assets = [
  {
    url: "/assets/images/business-cards/business-cards-hero-16-9.webp",
    dest: "public/images/ramp/hero.webp",
  },
  {
    url: "/assets/images/business-cards/complete-spend-visibility.webp",
    dest: "public/images/ramp/spend-visibility.webp",
  },
  {
    url: "/assets/images/business-cards/higher-limits-new.webp",
    dest: "public/images/ramp/higher-limits.webp",
  },
  {
    url: "/_next/static/media/low-intent-cta-left-card.0zbvozym6l5ik.webp",
    dest: "public/images/ramp/cta-card.webp",
  },
];

async function download(url, dest) {
  mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(BASE + url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Referer: "https://ramp.com/",
    },
  });
  if (!res.ok) {
    console.error(`Failed ${url}: ${res.status}`);
    return false;
  }
  await pipeline(res.body, createWriteStream(dest));
  const size = (await import("fs")).statSync(dest).size;
  console.log(`✓ ${dest} (${Math.round(size / 1024)}KB)`);
  return true;
}

// Download in batches of 4
for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  await Promise.all(batch.map((a) => download(a.url, a.dest)));
}
console.log("Done.");
