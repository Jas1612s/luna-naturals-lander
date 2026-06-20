import https from "https";
import http from "http";
import fs from "fs";
import path from "path";

const BASE_DIR = "public/images/natpat/trailpatch";

const assets = [
  // Hero / Float images
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--kids-ticks2.png?v=5881243977190899505", name: "kids-ticks-float-top.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--kids-ticks1.png?v=14680196549199509638", name: "kids-ticks-float-left.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--kids-ticks-mb.png?v=9956785762113834935", name: "kids-ticks-mb.png" },

  // Trustpilot
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick--truspilot-mobile.png?v=12817642194687343112", name: "trustpilot-mobile.png" },

  // Icons - hero footer
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--return.svg?v=9827252066703676785", name: "icon-return.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--whatsapp.svg?v=17131876044496768547", name: "icon-whatsapp.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--cart.svg?v=17521821676303498280", name: "icon-cart.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--shipping.svg?v=6080015466425943303", name: "icon-shipping.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--arrow-down.svg?v=12059871315155414065", name: "icon-arrow-down.svg" },

  // Hero list icons
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--natural.svg?v=9232447498548472155", name: "icon-natural.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--baby.svg?v=6624430873045969387", name: "icon-baby.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--smile-face.svg?v=5858513874657419973", name: "icon-smile-face.svg" },

  // Why Kids Love NatPat
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--kids-tick-sticker-pink.png?v=9487047519030529537", name: "sticker-pink.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--why-kids-love-natpat.png?v=3515072133877200281", name: "why-kids-love-mb.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-smiley.svg?v=12062192729377705372", name: "icon-pink-smiley.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-shirt.svg?v=17402798981166492120", name: "icon-pink-shirt.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-smells.svg?v=7129725911941198104", name: "icon-pink-smells.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-clock.svg?v=12222173659958251587", name: "icon-pink-clock.svg" },

  // 100% Natural
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--100-natural.svg?v=17941045528924915517", name: "100-natural.svg" },

  // Feature grid images
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--aroma-weave-tech.jpg?v=14882321270786003495", name: "aroma-weave-tech.jpg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--long-lasting-protection.png?v=8673148800230174321", name: "long-lasting-protection.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--60-color-patches.png?v=13799685271263925707", name: "60-color-patches.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--airtight-seal.png?v=1706863735333277630", name: "airtight-seal.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--easy-to-use.png?v=4294401218954606340", name: "easy-to-use.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--family-friendly-and-safe.png?v=12722485430393918105", name: "family-friendly.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--how-to-use.png?v=13061618958551455821", name: "how-to-use.png" },

  // Compare
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--compare-v2.png?v=2461975603761382260", name: "compare-desktop.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--compare-mb.png?v=9347337940833278022", name: "compare-mobile.png" },

  // Featured logos
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--womens-health.svg?v=16620135607554068484", name: "logo-womens-health.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--delish.svg?v=5710871553000960288", name: "logo-delish.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--usa-today.svg?v=2726241727437279647", name: "logo-usa-today.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--yahoo.svg?v=2358068912111117503", name: "logo-yahoo.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--little-things.svg?v=8465224433871986967", name: "logo-little-things.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--today.svg?v=4322489367135085015", name: "logo-today.svg" },

  // Reviews
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--slider-img-desktop1.png?v=10872250571858183194", name: "review-1.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--slider-img-desktop2.png?v=14275329770783019232", name: "review-2.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--slider-img-desktop3.png?v=2372265431772889963", name: "review-3.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--5-star.svg?v=1639680964868830741", name: "5-star.svg" },

  // Purchase section
  { url: "https://www.natpat.com/cdn/shop/files/lp-kids-tick-trailpatch-free-shipping.jpg?v=16456246719756396863", name: "purchase-hero.jpg" },
  { url: "https://www.natpat.com/cdn/shop/files/kids-tick-purchase-slider-img-mobile-0v2.png?v=10765567837116384258", name: "purchase-mobile.png" },
  { url: "https://www.natpat.com/cdn/shop/files/kids-tick-alt-1.png?v=1775721339&width=800", name: "pack-1.png" },
  { url: "https://www.natpat.com/cdn/shop/files/kids-tick-alt-2.png?v=1775721251&width=800", name: "pack-2.png" },
  { url: "https://www.natpat.com/cdn/shop/files/kids-tick-alt-3.png?v=1775721278&width=800", name: "pack-3.png" },
  { url: "https://www.natpat.com/cdn/shop/files/kids-tick-alt-4.png?v=1775721310&width=800", name: "pack-4.png" },
  { url: "https://www.natpat.com/cdn/shop/files/natpat-3-packs-of-kids-tick-repellent-stickers-1-pack-buzzpatch-stickers-1231392820.jpg?v=1775552195&width=800", name: "bundle-combo.jpg" },
  { url: "https://www.natpat.com/cdn/shop/files/natpat-mosquito-protection-patches-for-kids-safe-easy-to-use-natpat-1241225555.jpg?v=1780405268&width=800", name: "product-gallery-1.jpg" },
  { url: "https://www.natpat.com/cdn/shop/files/natpat-mosquito-protection-patches-for-kids-safe-easy-to-use-natpat-1241225548.jpg?v=1780405357&width=800", name: "product-gallery-2.jpg" },
  { url: "https://www.natpat.com/cdn/shop/files/natpat-mosquito-protection-patches-for-kids-safe-easy-to-use-natpat-1241225553.jpg?v=1780405389&width=800", name: "product-gallery-3.jpg" },

  // Bottom section icons
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--return-sleepy.png?v=6673929953369183508", name: "icon-return-sleepy.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--whatsapp-sleepy.png?v=7808537964665468019", name: "icon-whatsapp-sleepy.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--cart-sleepy.png?v=7452862013619034708", name: "icon-cart-sleepy.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--shipping-sleepy.png?v=10169020579580163736", name: "icon-shipping-sleepy.png" },

  // Trust icons
  { url: "https://www.natpat.com/cdn/shop/files/lp-pet-zen--money.png?v=10998535909371937834", name: "icon-money.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-pet-zen--secure.png?v=2285992159657062207", name: "icon-secure.png" },
  { url: "https://www.natpat.com/cdn/shop/files/np-shield-icon-green.png?v=12908727962409787397", name: "icon-shield-green.png" },

  // Background waves (referenced in CSS)
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-wave.svg?v=18310463654590326360", name: "pink-wave.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--wave.png?v=1587774982794472925", name: "wave-bg.png" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--gray-wave.png?v=9949882775341990192", name: "gray-wave-bg.png" },

  // Background: kids tick pack (used in reasons section)
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--kids-tick-pack.png?v=13714755712045792422", name: "kids-tick-pack-bg.png" },

  // Scroll to learn
  { url: "https://cdn.shopify.com/s/files/1/0387/0749/4956/files/scroll-to-learn-buzzpatch_212x.png?v=4223321914665400024", name: "scroll-to-learn.png" },

  // Expand/collapse icons
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--expand-more.svg?v=2520937404046046876", name: "icon-expand-more.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--expand-more-mb.svg?v=3438671040534733138", name: "icon-expand-more-mb.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--plus.svg?v=7798802640041568722", name: "icon-plus.svg" },
  { url: "https://www.natpat.com/cdn/shop/files/lp-tick-repellent--minus.svg?v=15660706709528966989", name: "icon-minus.svg" },

  // Up arrow
  { url: "https://cdn.shopify.com/s/files/1/0387/0749/4956/files/up-arrow.svg?v=1588909512", name: "icon-up-arrow.svg" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const protocol = url.startsWith("https") ? https : http;
    if (url.startsWith("//")) url = "https:" + url;

    const req = protocol.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on("finish", () => { stream.close(); resolve(); });
      stream.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error("Timeout")); });
  });
}

async function main() {
  if (!fs.existsSync(BASE_DIR)) fs.mkdirSync(BASE_DIR, { recursive: true });

  let ok = 0, fail = 0;
  const batch = 6;

  for (let i = 0; i < assets.length; i += batch) {
    const chunk = assets.slice(i, i + batch);
    const results = await Promise.allSettled(
      chunk.map(a => {
        const dest = path.join(BASE_DIR, a.name);
        if (fs.existsSync(dest)) { ok++; return Promise.resolve(); }
        console.log(`Downloading: ${a.name}`);
        return download(a.url, dest);
      })
    );
    results.forEach((r, j) => {
      if (r.status === "fulfilled") ok++;
      else { fail++; console.error(`FAIL: ${chunk[j].name} - ${r.reason?.message}`); }
    });
  }

  console.log(`\nDone: ${ok} ok, ${fail} failed out of ${assets.length} total`);
}

main().catch(console.error);
