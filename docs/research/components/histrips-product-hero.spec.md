# HiStripsProductHero Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsProductHero.tsx`
- **Interaction model:** click-driven (thumbnail gallery, quantity selector, purchase option toggle)

## DOM Structure
Two-column layout (desktop): LEFT = image gallery, RIGHT = product form
- Image gallery: large main image + thumbnail row below
- Product form: title, badges, price, quantity selector, purchase option, add-to-cart, USP grid, accordion sections

## Computed Styles

### Section wrapper
- maxWidth: 1440px
- margin: 0 auto
- padding: 40px 20px
- display: grid
- gridTemplateColumns: 1fr 1fr (desktop)
- gap: 40px
- alignItems: flex-start

### Image Gallery (LEFT)
- Main image: borderRadius: 20px, overflow: hidden, aspectRatio: 1, background: #f5f3ef
- Main image `<img>`: width: 100%, height: 100%, objectFit: cover
- Thumbnail row: display: flex, gap: 10px, marginTop: 16px, overflowX: auto
- Each thumbnail: width: 80px, height: 80px, borderRadius: 10px, objectFit: cover, cursor: pointer
- Active thumbnail: outline: 2px solid #1c1c1c, outlineOffset: 2px

### Product Form (RIGHT)

**Title block:**
- fontSize: 32px, fontWeight: 700, letterSpacing: -1px, color: #1c1c1c, marginBottom: 12px

**Badges row** (4 pill badges, flex wrap):
- Each badge: background: #f5f3ef, borderRadius: 20px, padding: 6px 14px, fontSize: 13px, fontWeight: 600, color: #1c1c1c
- Text: "40% More Oxygen", "Deeper Sleep", "Sharper Focus", "Reduced Snoring"

**Price block:**
- Sale price: fontSize: 28px, fontWeight: 700, color: #1c1c1c — "€26,95"
- Regular price: fontSize: 16px, textDecoration: line-through, color: #999 — "€34,95"
- Save badge: background: #2BB673, color: #fff, borderRadius: 4px, padding: 3px 8px, fontSize: 12px, fontWeight: 700 — "Save 23%"

**Separator line:**
- borderBottom: 1px solid #E4E3E1, margin: 16px 0

**Quantity Selector:**
- Label: "Select Quantity", fontSize: 14px, fontWeight: 600, marginBottom: 10px
- 3 pill buttons: 1 strip, 2 strips (most popular), 3 strips
- Each: border: 1px solid #E4E3E1, borderRadius: 10px, padding: 12px 16px, cursor: pointer
- Active: border: 2px solid #1c1c1c, background: #fff
- "Most Popular" label on button 2: small green badge above

**Purchase Option Toggle:**
- Two options: "One-Time Purchase" | "Subscribe & Save"
- Subscribe selected by default (most popular)
- Subscribe shows "Most popular + 3 free gifts, one every month."
- Gift list: Month 1 (Now) Face Wipes + 2 E-books, Month 2 Mouth Tape + Coupon

**Add to Cart Button:**
- background: #1c1c1c
- color: #ffffff
- borderRadius: 30px
- padding: 16px 32px
- fontSize: 17px
- fontWeight: 700
- width: 100%
- cursor: pointer
- hover: background: #333

**USP Grid:**
- display: grid, gridTemplateColumns: 1fr 1fr, gap: 15px 10px, maxWidth: 360px, marginTop: 20px
- Each USP item: display: flex, alignItems: center, gap: 10px, fontSize: 14px, fontWeight: 500
- Icon: 22x22px img from `/images/histrips/icons/usp-1.svg` etc.
- 4 items (use icon-1 through icon-4)

**Collapsible Accordions** (below USP):
- borderTop: 1px solid #E4E3E1
- Each: padding: 14px 0, cursor: pointer, fontWeight: 600
- Shipping & Returns | Description | Will they stay on? | What makes HiStrips different?
- Content text in grey

## Product Images
Main gallery (10 images):
1. `/images/histrips/product/brown-nasal-strips-1.png` — brown strip product
2. `/images/histrips/product/brown-nasal-strips-2.png`
3. `/images/histrips/product/brown-nasal-strips-3.png`
4. `/images/histrips/product/brown-nasal-strips-4.png`
5. `/images/histrips/product/brown-nasal-strips-5.png`
6. `/images/histrips/product/brown-nasal-strips-6.png`
7. `/images/histrips/product/brown-nasal-strips-7.png`
8. `/images/histrips/product/brown-nasal-strips-8.png`
9. `/images/histrips/product/brown-nasal-strips-9.png`
10. `/images/histrips/product/brown-nasal-strips-10.png`

## Accordion Content
- **Shipping & Returns:** "We ship fast, worldwide. Free shipping on orders over €45 | $50. Processing time: 1 business day. Delivery: 3-7 business days. Express: 2-5 business days. Tracking provided on all orders."
- **Description:** "HiStrips Nose Strips gently open your nasal passages, getting up to 40% more oxygen day and night. Improves airflow, boosts focus, stamina, and sleep quality. Reduce snoring, mouth breathing, and enhance performance recovery."
- **Will they stay on during intense workouts?:** "Yes! HiStrips uses a strong yet gentle adhesive that keeps them in place, even during intense workouts or active movement."
- **What makes HiStrips different?:** "1. Premium adhesive that stays on even during sweat and sleep. 72h 2. Bold design 3. Sleek, resealable pouch with 30 strips per pack 4. Trusted by 150,000+ athletes worldwide 5. Developed for performance, recovery and sleep."

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, 50/50
- **Mobile (390px):** stacked single column, images first, form below
- **Breakpoint:** ~1000px (from inline CSS)
