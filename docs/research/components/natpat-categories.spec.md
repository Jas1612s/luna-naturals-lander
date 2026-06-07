# NatPatCategories Specification

## Overview
- **Target file:** `src/components/natpat/NatPatCategories.tsx`
- **Interaction model:** Hover-driven. Each card has a hover bounce animation on the "View Collection" button.
- **Static content** — no carousel

## Visual Description
Section with heading "Shop By Category". Contains 5 category cards arranged in a grid.
Each card has:
1. Top: full-bleed category image (photo of products/lifestyle)
2. Bottom: wave overlay image (decorative wave shape), then overlaid content:
   - Stack of product packs (PNG with transparent bg)
   - Category logo icon (small, 32px)
   - Category name text (white)
   - "View Collection →" button (white pill with colored text)

The 5th card (Bundles) is special: has a "Save up to 59%" badge floating above.

## Grid Layout
- Desktop: 12-column grid
  - Cards 1-3 and card 5: span 4 columns each
  - Card 4 (Respiratory): starts at column 3, spans 4 columns
  - This creates a row of 3, then a row of 2 (cards 4+5 centered)
- Tablet (768-992px): 2 per row (span 6)
- Mobile: 1 per row (span 12), max-width: 327px, centered

## Category Data
```typescript
const categories = [
  {
    color: '#FF209E',
    cover: '/images/natpat/cat-outdoor-cover.png',
    wave: '/images/natpat/cat-outdoor-wave.png',
    packs: '/images/natpat/cat-outdoor-packs.png',
    packsWidth: 228,
    logo: '/images/natpat/cat-outdoor-logo.png',
    name: 'Outdoor Protection',
    href: '/natpat/collections/outdoor-protection',
    gridClass: 'col-span-4',
  },
  {
    color: '#1F4FC9',
    cover: '/images/natpat/cat-wellness-cover.png',
    wave: '/images/natpat/cat-wellness-wave.png',
    packs: '/images/natpat/cat-wellness-packs.png',
    packsWidth: 286,
    logo: '/images/natpat/cat-wellness-logo.png',
    name: 'Wellness & Cognitive',
    href: '/natpat/collections/wellness-cognitive',
    gridClass: 'col-span-4',
  },
  {
    color: '#19714B',
    cover: '/images/natpat/cat-pets-cover.png',
    wave: '/images/natpat/cat-pets-wave.png',
    packs: '/images/natpat/cat-pets-packs.png',
    packsWidth: 228,
    logo: '/images/natpat/cat-pets-logo.png',
    name: 'Pets',
    href: '/natpat/collections/pets',
    gridClass: 'col-span-4',
  },
  {
    color: '#9D38F4',
    cover: '/images/natpat/cat-allergy-cover.png',
    wave: '/images/natpat/cat-allergy-wave.png',
    packs: '/images/natpat/cat-allergy-packs.png',
    packsWidth: 112,
    logo: '/images/natpat/cat-allergy-logo.png',
    name: 'Respiratory & Allergy Relief',
    href: '/natpat/collections/respiratory-allergy-relief',
    gridClass: 'col-start-3 col-span-4',
  },
  {
    color: '#1F4FC9',
    cover: '/images/natpat/cat-bundles-cover.png',
    wave: '/images/natpat/cat-bundles-wave.png',
    packs: '/images/natpat/cat-bundles-packs.png',
    packsWidth: 170,
    logo: null,
    name: 'Shop our Bundles Collection',
    href: '/natpat/collections/bundles',
    gridClass: 'col-span-4',
    isBundle: true,
    saveBadge: '/images/natpat/cat-bundles-save-badge.svg',
    saveText: 'Save up to 59%',
  },
];
```

## Computed Styles

### Section
- margin-top: 30px
- padding-bottom: 40px

### Section title (h2)
- font-family: Urbane, Barlow, sans-serif (Barlow 900 fallback)
- font-size: 22px (mobile) / 38px (desktop)
- font-weight: 900
- color: #1F4FC9
- text-transform: uppercase
- text-align: center (mobile) / center (desktop)
- margin: 0 0 20px (mobile) / 40px auto (desktop)

### Grid container
- display: grid
- grid-template-columns: repeat(12, 1fr) (desktop) / repeat(12, 1fr) (tablet) / 1fr (mobile)
- gap: 20px
- max-width: 1140px
- margin: 0 auto
- padding: 0 24px

### Card container (stickers-box)
- position: relative
- border-top-right-radius: 16px
- border-top-left-radius: 16px
- overflow: hidden
- max-width: 360px (desktop md) / 290px (desktop sm) / 100%

### Card header (cover image area)
- width: 100%
- img: clip-path: inset(0 3.5px 0 4.5px) [removes thin white edges from image]

### Wave overlay image (rectangle-wave)
- margin-top: -50px
- z-index: 9
- position: relative
- width: 100%
- min-height: 200px (at 1200px and below)

### Card body content (overlaid over wave)
- position: absolute
- top: -80px
- z-index: 9
- left: 50%
- transform: translate(-50%)
- width: 100%
- padding: 0 25px

### Pack image
- display: block
- margin: 0 auto 20px
- z-index: 9
- position: relative

### Category name text
- font-family: Urbane, Barlow (fallback bold)
- font-size: 16px
- color: #ffffff
- display: flex
- align-items: center
- gap: 10px
- min-height: 32px
- text-align: center

### View Collection button
- padding: 12px 32px (desktop) / 12px 0 (at 1200px)
- text-align: center
- border-radius: 50px
- background: #ffffff
- color: var(--category-color) [set per card]
- margin-top: 15px
- font-family: Barlow
- font-weight: 600
- text-transform: uppercase
- font-size: 17px
- display: flex
- align-items: center
- gap: 10px
- justify-content: center
- width: 100%
- transition: transform 0.3s ease

### Arrow circle span in button
- width: 20px
- height: 20px
- border-radius: 50%
- background: var(--category-color)
- display: inline-flex
- align-items: center
- justify-content: center

### Arrow SVG/img in circle
- width: 8px
- filter: none (colored arrow, each category color)

### Hover state - card hover animation
- @keyframes bounce: 0%,20%,50%,80%,100%{ translateY(0) } 40%{ translateY(-15px) } 60%{ translateY(-7px) }
- On card hover: `.view-collection-btn` gets `animation: bounce 1s ease 1`

### Bundle card special - save badge
- position: absolute
- left: 50%
- top: -35px (from body content top)
- transform: translate(-50%)
- SVG badge (use the svg file as img)
- badge text overlaid: font-size 14px, font-weight 700, uppercase, white, Barlow, centered

## Responsive
- **Desktop 1200px+:** 3-row grid, full pack images
- **Desktop 992-1200px:** Pack images: height 60px, width 200px, object-fit contain; button padding reduced
- **Tablet 768-992px:** 2-per-row
- **Mobile <768px:** 1-per-row, max-width 327px centered, section title centered

## Implementation Notes
- Use `'use client'` is NOT needed (pure CSS hover)
- Arrow in View Collection button can use the cat-arrow-right.svg as an `<img>` or just use a › character
- Bundle card: the Bundles "View Collection" button has white text + white arrow — special case with color override styles
