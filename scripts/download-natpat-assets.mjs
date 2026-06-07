import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE_DIR = 'public/images/natpat';
const FONTS_DIR = 'public/fonts/natpat';

mkdirSync(BASE_DIR, { recursive: true });
mkdirSync(FONTS_DIR, { recursive: true });

const images = [
  // Logo
  ['https://www.natpat.com/cdn/shop/files/Logo_Natpat.svg?v=1685441412', 'logo.svg'],
  // Hero
  ['https://www.natpat.com/cdn/shop/files/homapage-waving-character.svg?v=521352463007159362', 'hero-waving-character.svg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-green-5-star.png?v=8064953813835079412', 'green-5-star.png'],
  // Hero carousel slides
  ['https://www.natpat.com/cdn/shop/files/Mosquito_Kit_Hompage_Slider_v1.png?v=10033366341693799798', 'hero-slide-mosquito-kit.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-mosquito-repellent-stickers-cover.png?v=9648087639229782077', 'hero-slide-mosquito-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-mosquito-logo.png?v=1641043725495022091', 'hero-slide-mosquito-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-buzzpatch-pack.png?v=17272758674920424784', 'hero-slide-buzzpatch-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-two-mosquito.svg?v=11792396062778119013', 'hero-slide-two-mosquito.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Kids_Tick_Slider_Background.png?v=4822787371038869211', 'hero-slide-tick-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-tick-repellent--pink-smiley.svg?v=12062192729377705372', 'hero-slide-tick-logo.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Kids_Tick.png?v=16914601022558046410', 'hero-slide-tick-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Pet_Tick_Slider_Background.png?v=7306861698522576071', 'hero-slide-pet-tick-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pet-tick-logo.png?v=8035917924685653261', 'hero-slide-pet-tick-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Pet_Tick.png?v=12631966918196846906', 'hero-slide-pet-tick-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pet-zen-vapor-stickers-cover.png?v=9379675152607122556', 'hero-slide-pet-zen-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-calm-logo.png?v=5548348060624847592', 'hero-slide-calm-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-new-petzen-vapor-stickers.png?v=11359366700910487245', 'hero-slide-pet-zen-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-white-sparkle.svg?v=15980777935555213222', 'hero-slide-sparkle.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Pet_Flea_Slider_Background.png?v=3450753716197076760', 'hero-slide-flea-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage_pet_flea_icon_8038508f-317b-4b5d-9957-75b17515b977.png?v=9664688077953783117', 'hero-slide-flea-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-new-graphic.png?v=9629689489690615029', 'hero-slide-new-graphic.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage_slider_Pet_Flea.png?v=12330808987151919729', 'hero-slide-flea-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-sleep-promoting-stickers-cover.png?v=11537890003189763474', 'hero-slide-sleep-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-sleep-logo.png?v=14712276555598123874', 'hero-slide-sleep-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-bedtime-stickers.png?v=9426359724035070283', 'hero-slide-sleep-pack.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-snoring-graphic.svg?v=17521869339723768152', 'hero-slide-snoring.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage-mood-calming-stickers-cover.png?v=6743156515055650075', 'hero-slide-mood-bg.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-calm2-logo.png?v=6185090430801392649', 'hero-slide-mood-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-zen-stickers.png?v=17145739756470208969', 'hero-slide-mood-pack.png'],
  // Hero benefits
  ['https://www.natpat.com/cdn/shop/files/homepage-return-of-investment.png?v=12119288576022334674', 'benefit-money-back.png'],
  ['https://www.natpat.com/cdn/shop/files/np-shield-icon.png?v=6951811664246479624', 'benefit-shield.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-non-toxic.png?v=7068977747304538528', 'benefit-non-toxic.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-safe.png?v=7015485965604546347', 'benefit-safe.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-flag.png?v=9087614022763638298', 'benefit-flag.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-car.png?v=1612323835650803553', 'benefit-shipping.png'],
  // Category cards
  ['https://www.natpat.com/cdn/shop/files/homepage-outdoor-protection-category-cover.png?v=9938257117389382097', 'cat-outdoor-cover.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-outdoor-protection-rectangle-wave.png?v=14213461916129627989', 'cat-outdoor-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-outdoor-protection-packs.png?v=9210988410830088941', 'cat-outdoor-packs.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-outdoor-protection-logo.png?v=12559897270191800957', 'cat-outdoor-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-category-arrow-right.svg?v=17318542071893376027', 'cat-arrow-right.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage-wellness-cognitive-category-cover.png?v=17700253745892763662', 'cat-wellness-cover.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-wellness-cognitive-rectangle-wave.png?v=6429197884361680815', 'cat-wellness-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-wellness-cognitive-packs.png?v=1119150254765518028', 'cat-wellness-packs.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-wellness-cognitive-logo.png?v=14266914481722182194', 'cat-wellness-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pets-category-cover.png?v=10818317493260804840', 'cat-pets-cover.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pets-rectangle-wave.png?v=6545437602715469909', 'cat-pets-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pets-packs.png?v=881582349860224074', 'cat-pets-packs.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-pets-logo.png?v=15082447614667802430', 'cat-pets-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-respiratory-allergyrelief-category-cover.png?v=18028187872650356427', 'cat-allergy-cover.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-respiratory-allergyrelief-rectangle-wave.png?v=17097280552610198444', 'cat-allergy-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-respiratory-allergyrelief-packs.png?v=2619137322161068315', 'cat-allergy-packs.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-respiratory-allergyrelief-logo.png?v=17125207198509108919', 'cat-allergy-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-bundles-category-cover.png?v=15256668085718612197', 'cat-bundles-cover.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-bundles-rectangle-wave.png?v=1580896598632129913', 'cat-bundles-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-save-bundles-vector.svg?v=11835349999107364788', 'cat-bundles-save-badge.svg'],
  ['https://www.natpat.com/cdn/shop/files/homepage-bundles-packs.png?v=6150189165570800361', 'cat-bundles-packs.png'],
  // Reviews
  ['https://www.natpat.com/cdn/shop/files/natpat-judge.me-reviews.jpg?v=1246628093380263227', 'reviews-trustpilot.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-long-green-curl.png?v=9067437082741223917', 'news-green-curl.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422', 'news-green-box.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-1.png?v=3830637619735333204', 'news-slide-1.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-fatherly.png?v=7981861639238024059', 'news-logo-fatherly.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-2.png?v=16466260640405698518', 'news-slide-2.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-little-things.png?v=1087512643171391755', 'news-logo-little-things.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-3.png?v=5139057514493829864', 'news-slide-3.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-nbc.png?v=13965751135571694710', 'news-logo-nbc.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-4.png?v=1006741721868702270', 'news-slide-4.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-sweet-high.png?v=16103103967437991624', 'news-logo-sweet-high.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-5.png?v=8713306645812462635', 'news-slide-5.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-motherly.png?v=3070082413295760601', 'news-logo-motherly.png'],
  // Science section
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-sec-side-img-1.png?v=9128030773368921552', 'science-side-1-mb.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-sec-side-img-1-full.png?v=15856502843422858058', 'science-side-1-ds.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-sec-side-img-2.png?v=10850351746111140543', 'science-side-2-mb.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-sec-side-img-2-full.png?v=15121396631439590743', 'science-side-2-ds.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-logo-natpat.png?v=12800871384803786962', 'science-natpat-logo.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-white-box-curl.png?v=15827203295766984977', 'science-white-box-mb.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-white-box-curl-ds.png?v=7315492770820315163', 'science-white-box-ds.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-yellow-box-curl.png?v=17507282249200718212', 'science-yellow-box.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-yellow-box-curl-ds.png?v=14809442441386496910', 'science-yellow-box-ds.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-purple-bg-curl.png?v=9685785500582270904', 'science-purple-curl.png'],
  // UGC photos
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_1.jpg?v=11878557954067157816', 'ugc-1.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_2.jpg?v=9186686887967445318', 'ugc-2.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_3.jpg?v=4562877602888817157', 'ugc-3.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_4.jpg?v=5305559874223308390', 'ugc-4.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_5.jpg?v=9232463226620126293', 'ugc-5.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_6.jpg?v=6134118365635010315', 'ugc-6.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_7.jpg?v=17175999171993449391', 'ugc-7.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_8.jpg?v=460531727381998960', 'ugc-8.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_9.jpg?v=7515890335238382601', 'ugc-9.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_10.jpg?v=14451946750341160945', 'ugc-10.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_11.jpg?v=18375970029843388613', 'ugc-11.jpg'],
  ['https://www.natpat.com/cdn/shop/files/bottom_ugc_12.jpg?v=8619041464120185599', 'ugc-12.jpg'],
  // Verified buyer reviews
  ['https://www.natpat.com/cdn/shop/files/review-slide-megan-hilling.jpg?v=15643312909492266268', 'review-megan.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-verified.png?v=4372928743828076921', 'verified-badge.png'],
  ['https://www.natpat.com/cdn/shop/files/review-slide-carly-cool.jpg?v=6240384494522747678', 'review-carly.jpg'],
  ['https://www.natpat.com/cdn/shop/files/review-slide-jacquelyn.jpg?v=15484855920125424495', 'review-jacquelyn.jpg'],
  ['https://www.natpat.com/cdn/shop/files/review-slide-debora.jpg?v=12755399962307352777', 'review-debora.jpg'],
  // Bottom image slider
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-bottom-slide-img-1.png?v=3252996465953128791', 'bottom-slide-1.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-bottom-slide-img-2.png?v=10759964737848306520', 'bottom-slide-2.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-bottom-slide-img-3.png?v=2390353992378804485', 'bottom-slide-3.png'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-1-m.jpg?v=6759239977187853877', 'ugc-slide-1.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-2-m.jpg?v=12631404992006861644', 'ugc-slide-2.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-3-m.jpg?v=4260913773192682912', 'ugc-slide-3.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-4-m.jpg?v=11422875208306816215', 'ugc-slide-4.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-5-m.jpg?v=15450967108607361458', 'ugc-slide-5.jpg'],
  ['https://www.natpat.com/cdn/shop/files/lp-catalog-user-reviews-slide-6-m.jpg?v=17056060712858208816', 'ugc-slide-6.jpg'],
  // Health & Wellness
  ['https://www.natpat.com/cdn/shop/files/homepage-health-wellness-patches-cover.png?v=17211690352179506977', 'health-wellness-cover-ds.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-health-wellness-patches-cover-mb.png?v=8684057409601642041', 'health-wellness-cover-mb.png'],
  // Footer waves
  ['https://www.natpat.com/cdn/shop/files/homepage-footer-gray-wave.png?v=4612592745608888915', 'footer-gray-wave.png'],
  ['https://www.natpat.com/cdn/shop/files/homepage-footer-dark-wave-mobile.png?v=5460951390853888932', 'footer-dark-wave-mb.png'],
];

const fonts = [
  ['https://www.natpat.com/cdn/shop/files/urbanerounded-bold-webfont.woff2?v=1333656270480753319', 'urbane-bold.woff2'],
  ['https://www.natpat.com/cdn/shop/files/urbanerounded-bold-webfont.woff?v=11254272132251603248', 'urbane-bold.woff'],
];

async function downloadFile(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`Failed: ${url} => ${res.status}`);
  await pipeline(res.body, createWriteStream(destPath));
  return destPath;
}

async function downloadBatch(items, dir, label) {
  const BATCH = 4;
  let success = 0, fail = 0;
  for (let i = 0; i < items.length; i += BATCH) {
    const batch = items.slice(i, i + BATCH);
    await Promise.all(batch.map(async ([url, filename]) => {
      const dest = path.join(dir, filename);
      try {
        await downloadFile(url, dest);
        success++;
        process.stdout.write(`  ✓ ${filename}\n`);
      } catch (e) {
        fail++;
        process.stdout.write(`  ✗ ${filename}: ${e.message}\n`);
      }
    }));
  }
  console.log(`\n${label}: ${success} ok, ${fail} failed\n`);
}

console.log('Downloading NATPAT images...');
await downloadBatch(images, BASE_DIR, 'Images');

console.log('Downloading NATPAT fonts...');
await downloadBatch(fonts, FONTS_DIR, 'Fonts');
