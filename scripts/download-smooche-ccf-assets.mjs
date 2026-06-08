#!/usr/bin/env node
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";

const BASE_DIR = "public/images/smooche-ccf";

const assets = [
  // Replo CDN images (main content images)
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/215a694d-fed6-490c-9ad7-df4f828e3557", name: "hero-author.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/42d7bfd8-1d07-4ff5-b188-e157bab21cba", name: "article-image-1.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/adc2be4a-7515-4935-8eba-0f6eebc9bdd5", name: "article-image-2.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/5566edf4-41d5-4d8c-8c8d-c23a251c545a", name: "how-it-works.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/738efeb9-43ff-423e-8568-3855f2c3ebc7", name: "traditional-vs.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/aaffe090-5c7b-4f68-84bb-7bd8159a3169", name: "product-comparison-1.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/80474300-1d4c-4a4e-89ea-0ee8af42bc16", name: "product-comparison-2.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/1fb602b2-4855-4aa6-95b5-30ff6de29e61", name: "product-comparison-3.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/ebf49472-4451-491c-b058-d13ef0080569", name: "product-comparison-4.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/4aad477b-466f-4a2b-bca3-bea7c2c1739e", name: "product-comparison-5.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/9241f0d0-c906-45e4-9d0e-a64bc1be6573", name: "reviews-section.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/04c18aae-21da-4e58-9d94-a1ef063bb8af", name: "comparison-table.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/d3f752c7-70b1-42c3-bcc1-6c60f66bc481", name: "final-cta.jpg" },
  { url: "https://assets.replocdn.com/projects/15fb8e11-2001-4f35-9549-927069a2f114/e1e4a823-0dfd-4154-8ef0-e3e0bf73287e", name: "limited-stock.jpg" },
  // Ingredients image
  { url: "https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/jrn/indegrents_replo.png?v=1675664346", name: "ingredients.png" },
  // Smooche logo
  { url: "https://smooche.com/cdn/shop/files/Smooche_LOGO_final_Black-01.svg", name: "logo-black.svg" },
  { url: "https://smooche.com/cdn/shop/files/Smooche_LOGO_final_White-02.svg", name: "logo-white.svg" },
  // Product images
  { url: "https://smooche.com/cdn/shop/files/ColorChangingFoundation-Productimagesphotos_639aab4b-1799-451b-902f-6f6be9fb6433_800x.png", name: "ccf-product.png" },
  { url: "https://smooche.com/cdn/shop/files/stain.jpg", name: "stain.jpg" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(BASE_DIR, dest);
    if (fs.existsSync(fullPath)) {
      console.log(`SKIP ${dest} (exists)`);
      return resolve();
    }
    const proto = url.startsWith("https") ? https : http;
    proto.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.log(`FAIL ${dest} (${res.statusCode})`);
        return resolve();
      }
      const ws = fs.createWriteStream(fullPath);
      res.pipe(ws);
      ws.on("finish", () => {
        console.log(`OK   ${dest} (${fs.statSync(fullPath).size} bytes)`);
        resolve();
      });
      ws.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  fs.mkdirSync(BASE_DIR, { recursive: true });
  // Download 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map((a) => download(a.url, a.name)));
  }
  console.log("\nDone!");
}

main().catch(console.error);
