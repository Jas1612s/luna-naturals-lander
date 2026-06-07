# Rest.com Homepage — Page Topology

## Site Overview
- **URL:** https://rest.com/
- **Platform:** Shopify (custom theme, theme ID 190439588209)
- **Brand:** Rest® — science-backed cooling bedding for hot sleepers
- **Primary Font:** Siri (custom, weights 200-600) + Dear Script (decorative)
- **Color Theme:** Navy (#002855) primary, white secondary, teal accent (#218eb8)
- **Max Width:** 1280px container
- **Body Background:** #ffffff (index page), #f2f2f2 (other pages)

## Design Tokens (from :root)
```
--color-primary: #002855
--color-secondary: #ffffff
--color-accent: #005ae6
--color-dark: #001227
--color-star: #ffad0a
--color-text: #002855
--color-text-light: #00285590
--color-bg: #ffffff
--color-bg-alt: #f2f2f2
--color-border: #e5e5e5
--color-sf-content: #2b4f77
--color-sf-content-muted: #557599
--font-primary: 'Siri', serif
--container-max-width: 1280px
--section-padding: 80px
--grid-gap: 24px
--radius-base: 8px
--border-radius-desktop: 16px
--border-radius-mobile: 12px
--transition-base: all 0.25s ease
--announcement-bar-height-mobile: 36px
--announcement-bar-height-desktop: 44px
```

## Sections (top to bottom)

### 1. Announcement Bar
- **Class:** `sale-announcement-bar`
- **Type:** Fixed top banner
- **Bg:** #002855, text #ffffff
- **Content:** "Best Sheets Ever Sale: Up to 40% Off + FREE Gifts" + HSA/FSA badge
- **Interaction:** Click opens gift popup dialog

### 2. Navigation Header
- **Class:** `theme-navbar`
- **Type:** Fixed header below announcement bar
- **Logo:** Rest® SVG (56x22), tagline "Transform Your Sleep"
- **Nav items:** Shop, Science, Explore (mega menus), Store Locator, Rewards, Refer-a-Friend, Gift Cards
- **Right:** Account, Search, Cart icons
- **Behavior:** Sticky, transparent over hero → opaque on scroll

### 3. Hero Section (Sale Sheet)
- **Class:** `index-hero-sale-sheet`
- **Type:** STICKY (position: sticky, top: 0, z-index: 0)
- **Height:** 700px mobile, 100vh desktop
- **Bg:** #001228 dark navy
- **Content:** 5 white stars, `"BEST SHEETS EVER"` h1, description, "Shop the Sale" + "Learn More" CTAs
- **Images:** Full-screen bedroom photo (desktop/mobile versions), floating pillow overlay
- **Animation:** `heroZoomBg` — background scales from 1 to 1.05
- **Floating pillow:** Positioned absolutely, desktop 515px wide, mobile 286px

### 4. Free Gifts / Trust Badges
- **Class:** `index-free-gifts-v2-section`
- **Content:**
  - Trust badges row: THIRD-PARTY TESTED | 30-NIGHT RETURNS | 1-YEAR WARRANTY | HSA/FSA ELIGIBLE
  - Gift tier progress: "Unlock a FREE gift at every tier"
  - Tier 1: Orders $249+ → FREE Pillowcases ($79 value)
  - Tier 2: Spend $599 → unlock both gifts (+ FREE Flat Sheet)
- **Images:** pillowcases-gift-v2-mobile.webp, flat-sheet-gift-v2-mobile.webp

### 5. Shop Bestsellers
- **Class:** `index-shop-bestsellers`
- **Type:** Horizontal product card carousel (CSS slider)
- **Heading:** "Discover Evercool® Bedding"
- **Products (4 cards):**
  1. Evercool® Cooling Comforter — #1 Best Seller, 30% Off, 4.9★, From $199→$139, GH award badge
  2. Evercool®+ Cooling Starter Sheet Set — Best Cooling, 30% Off, 4.9★, hw.png badge
  3. Evercool® Cooling Pillow — Men's Health badge
  4. Evercool® Cooling Pajamas Pants Set — RCA badge
- **Card features:** Color swatches (2-color circles), award badges, sale tags, star rating
- **Navigation:** Prev/Next arrow buttons

### 6. About Reviews
- **Class:** `index-about-reviews`
- **Type:** Dark bg section with full-bleed image
- **Heading:** "Over 300,000+ People Have Transformed Their Sleep."
- **CTA:** "Read Reviews" button
- **Reviews (Splide carousel):**
  - Ronnie E. (Verified) — Evercool® Comforter — "Best sleep in a long time"
  - Gail K. (Verified) — Evercool® Comforter — "Life changing!"
  - Hai Q. (Verified) — "Middle age..."
- **Background:** Full-width lifestyle image (bedding photo)

### 7. Press Logos
- **Class:** `index-press`
- **Type:** Logo marquee/slider
- **Logos:** HOUSEKEEPING, DWELL (and more) as inline SVGs
- **Note:** Empty heading, purely visual logo display

### 8. Sleep Score
- **Class:** `index-sleep-score`
- **Heading:** "Scientifically Proven, Third-Party Tested."
- **CTA:** "View Third-party Test Results"
- **Stats:**
  - 94% — reported improved overall sleep quality
  - 88% — experienced better temperature regulation
  - 97% — found cooling sensation better vs regular comforter
- **Badge:** SleepScore Labs badge image
- **Source:** SleepScore Labs study, 1000+ nights analyzed

### 9. UGC Videos
- **Class:** `index-ugc`
- **Heading:** "Trusted by experts and all kinds of sleepers."
- **Videos (5):** Customer review videos + "AS SEEN IN" press
  - "Real Review: Changed for The Better!"
  - "Perfect Temperature All Night Long"
  - "Evercool® IRL"
  - "Cooling Technology That Lasts"
  - "Real Review: 2025's Best Purchase"
- **Interaction:** Video cards with thumbnails, click to play

### 10. FAQ
- **Class:** `index-faq`
- **Heading:** "Questions about Evercool®?"
- **Questions (6):**
  1. What makes the Evercool® Comforter different...?
  2. How does the Evercool® Comforter compare to bamboo or silk?
  3. Is the Evercool® Comforter suitable for all seasons?
  4. Will the cooling effect wear off over time?
  5. Is the Evercool® Comforter suitable for people with allergies?
  6. How does Evercool® help reduce night sweats?
- **Type:** Accordion (click to expand/collapse)

### 11. Follow Us + Newsletter
- **Class:** `index-follow-us`
- **Heading:** "@Rest" + "Follow Us"
- **Content:** Instagram feed embed
- **Newsletter section:** Email signup, "Science with Rest — research-backed reads for better sleep"
- **Support:** Live Chat, Call Us, Mon to Sun 6am–9pm PST

### 12. Footer
- **Class:** `theme-footer-banner`
- **Type:** Video background footer
- **Video:** Full-bleed looping video (Transform Your Sleep)
- **Content:** "Transform Your Sleep" heading, social icons (Instagram, Facebook, TikTok)
- **Copyright:** "© 2026 Rest® | All Rights Reserved."
- **Note:** Minimal footer — no extensive link columns, just video + social + copyright
