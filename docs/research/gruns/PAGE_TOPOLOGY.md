# Grüns Homepage — Page Topology

## Design Tokens
- **Primary Green:** #007E40 / rgb(0, 126, 64)
- **Dark Green:** #002C17 / rgb(0, 44, 23)
- **Deep Dark Green:** rgba(0, 31, 16, 0.95)
- **Yellow/Gold:** #FFCC2E / rgb(255, 204, 47)
- **Cream:** #FFF7DF / rgb(255, 247, 223)
- **Light Cream:** #FFFCF6 / rgb(255, 252, 246)
- **White:** #FFFFFF
- **Dark Navy:** rgba(0, 8, 46, 0.95) — used on Popsicle slide
- **Red (Popsicle):** rgb(237, 28, 36)
- **Body text:** rgb(10, 28, 32)

## Fonts
- **Retail Display** — Display headings (hero h2, benefits stats, social fan heading)
- **Work Sans** — Body text, nav, buttons, paragraphs (weight 400-700)
- **DM Mono** — Monospace accents

## Sections (top to bottom)

### 1. Announcement Bar (h:40px, top:0)
- Yellow bg (#FFCC2E), dark text
- Centered text: "Popsicle® Firecracker — Limited time flavor with up to 52% off"
- Full-width link

### 2. Header/Nav (h:51px, top:40, sticky)
- Green bg (#007E40)
- Left: "Shop Adults" + "Shop Kids" links (yellow text, pill border)
- Center: grüns logo (yellow, custom font)
- Right: "Account" link + cart icon (yellow)
- Sticky on scroll

### 3. Hero Carousel (h:668px, top:91)
- `<lg-hero-sync>` custom element — 3 slides with auto-cycling
- Layout: 50/50 split — text left, image right
- **Slide 1 (Original Adults):** Green gradient bg (#007E40 → yellow), white heading "Daily Nutrition Never Tasted So Good.", green CTA "Save 52% + Free Shipping", star rating "4.8 • 100,000 reviews", gummy sticker overlay
- **Slide 2 (Popsicle Firecracker):** Light cream bg, "LIMITED EDITION" red label, dark navy heading "The Collab Your Inner Child Needed.", red "Shop Adults" + "Shop Kids" buttons, popsicle sticker overlay
- **Slide 3 (Kids):** Green bg, dark heading "Finally, Vitamins Kids Actually Want.", green "Shop Kids" button
- 3 dot indicators bottom-right, active = pill shape
- Heading font: Retail Display, 96px, weight 400
- Images: lifestyle photo right + sticker overlay center-bottom
- Transition: bg color + opacity 500ms cubic-bezier

### 4. Press Marquee (h:70px, top:759)
- Cream bg, scrolling horizontal marquee
- 8 logos: Forbes, Men's Journal, TODAY, People, Women's Health, Good Housekeeping, GQ, Travel+Leisure
- All SVGs, black, continuous scroll animation
- Left edge fade overlay

### 5. Find Your Flavor (h:586px, top:829)
- Light cream bg (#FFFCF6)
- Heading: "Find Your Flavor" — Retail Display italic, green (#007E40), centered
- 4 product cards in a row:
  1. Original Adults — green bg, "Best Seller" badge, $40.80 ~~$79.99~~
  2. Original Kids — yellow bg, $34.17 ~~$66.99~~
  3. Popsicle Firecracker Adults — red bg, "Limited Time!" badge, $43.35 ~~$84.98~~
  4. Popsicle Firecracker Kids — red bg, "Brand New!" badge, $35.99 ~~$71.98~~
- Each card: product image, title, price (sale + strikethrough), green "Add to Cart" button, "Learn More" link

### 6. Value Props (h:832px, top:1415)
- Two-tone: dark green top (#002C17) → cream cards area
- Heading (green section): "We made daily nutrition, like, ridiculously easy." — white + yellow italic for "ridiculously easy."
- 3 cards with images + text:
  1. "Delicious Flavor" — guy eating gummy
  2. "Rip. Tip. Enjoy." — guy with packet
  3. "Daily Nutrition" — product with ingredient pills floating
- Cards: white bg, rounded corners, image top, bold heading, description text

### 7. Benefits Scroll (h:2724px, top:2247)
- Full-width green bg transitioning to yellow-green gradient
- Large uppercase text lines appearing on scroll:
  - "60+ INGREDIENTS" (white)
  - "21 VITAMINS & MINERALS" (white)
  - "6G OF FIBER" (white)
  - "1 CONVENIENT PACK" (yellow/gold)
- Decorative: gummy bear images floating left + right
- Product sachet reveal at bottom (torn paper effect)
- Font: Retail Display, very large (80-120px), uppercase, italic

### 8. Third Party Science (h:325px, top:4971)
- Dark green bg (#002C17)
- Left: "3rd party-tested for potency, purity, & safety." heading (white, Retail Display)
- Subtext: testing description
- Right: 4 icon cards (dark bg with white icon + label):
  - "70 different pesticides"
  - "4 types of heavy metals"
  - "16 different contaminants"
  - "9 microbial contaminants"
- Icons are circular line-art SVGs

### 9. Buy Box / PDP (h:2870px, top:5296)
- Light cream bg, standard ecommerce buy box layout
- Left: product image gallery with thumbnails
- Right: product details, flavor selector, sugar level toggle, quantity selector, pricing, add to cart
- COMPLEX — will be simplified for clone

### 10. Social Fan (h:768px, top:8166)
- Cream bg
- Heading: "1 MILLION MEMBERS. WE'VE BEEN GETTING AROUND" — green, Retail Display, uppercase
- Social icons row: Instagram, TikTok, YouTube, Facebook (green)
- Fan-out photo gallery: 5 overlapping rotated photos of brand events/mascot

### 11. Final CTA (h:630px, top:8934)
- Dark green bg with gradient (green → green-yellow right side)
- Star rating: "4.8 stars from 100,000 reviews | 1,000,000+ members" (yellow)
- Heading: "See what all the hype is about." (white, Retail Display)
- Checkmarks: "30-day money-back guarantee", "Clinically and 3rd party tested", "HSA/FSA eligible"
- Buttons: "Shop Adults" + "Shop Kids" (yellow bg, dark text, pill shape)
- Right: product image with gummies

### 12. Footer (h:1146px, top:9564)
- Dark green bg (#002C17)
- SMS signup: "Sign Up for 52% Off" + phone input + "Email me instead" link
- 3 link columns: Learn, Connect, ü snacks brand
- Bottom: grüns logo (yellow) + social icons
- Legal disclaimers in bordered boxes
- Copyright bar + policy links

### 13. Floating CTA (fixed position)
- "Try Grüns →" button — dark green bg, white text, pill shape
- Fixed top-right, appears after scrolling past hero
- Also: "Get 52% Off!" blue button fixed bottom-left

## Interaction Model
- Hero: auto-cycling carousel (click dots or auto-advance)
- Press Marquee: CSS infinite scroll animation
- Benefits: scroll-driven text reveal (sticky positioning or scroll animation)
- Buy Box: click-driven (flavor/sugar/quantity selectors)
- Social Fan: static photo layout
- Floating CTA: scroll-triggered visibility
