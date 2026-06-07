# NatPatInTheNews Specification

## Overview
- **Target file:** `src/components/natpat/NatPatInTheNews.tsx`
- **Interaction model:** Carousel with dot navigation (mobile: 1 at a time, desktop: static grid or centered single large card with prev/next)
- **`'use client'`** required for carousel

## Visual Description
On desktop: A decorative long green curl image with "We're in the news... for good reasons." text overlaid (white, centered).
Below: 5 large press quote cards (carousel on desktop too). Each card:
- Green box shape (decorative, at top — visible on mobile only)
- "We're in the news..." heading (inside green box top — mobile only)
- Main blue/decorative image at center with press quote text and media logo overlaid

On desktop: The top green heading section disappears, replaced by the long-green-curl banner. Cards are displayed one at a time, large (max-width ~400px), centered, with visible prev/next arrows.

## Press Data
```typescript
const pressItems = [
  {
    slideImg: '/images/natpat/news-slide-1.png',
    quote: '"Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway."',
    logo: '/images/natpat/news-logo-fatherly.png',
    logoWidth: 120,
    logoAlt: 'Fatherly',
  },
  {
    slideImg: '/images/natpat/news-slide-2.png',
    quote: '"The first thing I noticed when I opened the package were that these smelled seriously amazing. They\'re citrusy without being overpowering."',
    logo: '/images/natpat/news-logo-little-things.png',
    logoWidth: 154,
    logoAlt: 'The Little Things',
  },
  {
    slideImg: '/images/natpat/news-slide-3.png',
    quote: '"I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either."',
    logo: '/images/natpat/news-logo-nbc.png',
    logoWidth: 70,
    logoAlt: 'NBC',
  },
  {
    slideImg: '/images/natpat/news-slide-4.png',
    quote: '"These anti-mosquito stickers were technically developed for kids, but we think they\'re also perfect for any outdoorsy dads who also happen to be mosquito magnets"',
    logo: '/images/natpat/news-logo-sweet-high.png',
    logoWidth: 170,
    logoAlt: 'Sweet High',
  },
  {
    slideImg: '/images/natpat/news-slide-5.png',
    quote: '"The Buzzpatch scent creates a virtual shield by \'camouflaging\' your kids from mosquitos Genius!"',
    logo: '/images/natpat/news-logo-motherly.png',
    logoWidth: 120,
    logoAlt: 'Motherly',
  },
];
```

## Computed Styles

### Long green curl header (desktop only)
- margin: 50px 0
- position: relative
- img: display block, margin: 0 auto, width: 100%, max-width: 963px
- h2 overlaid: position absolute, top: 50%, left: 50%, transform: translate(-50%, -50%)
  - font-family: Urbane, Barlow 900 (fallback)
  - font-size: 38px
  - font-weight: 900
  - line-height: 36px
  - color: #ffffff
  - text-align: center
  - width: 100%

### Mobile header (inside first card green box)
- Each card has green box curl image at top with "We're in the news..." heading overlaid
- Green box: max-width: 290px, margin: 0 auto, transform: translateY(50px), opacity 0 (hidden on inactive slide)
- Active slide green box: opacity: 1

### Card container
- position: relative
- max-width: 400px (desktop)
- margin: 0 20px

### Card blue/decorative image (slide image)
- display: block
- margin: 0 auto
- width: 100%
- max-width: 327px (mobile) / 357px (desktop)

### Quote text overlaid on image
- position: absolute
- bottom: 10px (mobile) / top: 50%, bottom: unset (desktop — centered)
- left: 50%
- transform: translate(-50%) (mobile) / translate(-50%, -50%) (desktop)
- color: #ffffff
- width: 100%
- padding: 30px
- text-align: center
- font-family: Barlow, sans-serif
- font-size: 18px (desktop)
- font-weight: 500
- line-height: 22px

### Media logo inside quote area
- display: block
- margin: 15px auto 0 (mobile) / 35px auto 0 (desktop)

### Carousel navigation arrows (desktop)
- prev: background url news prev arrow, no border, transparent
- next: background url news next arrow, no border, transparent
- width: 79px, height: 79px
- position: absolute, z-index: 1, top: 50%, transform: translateY(-50%)
- prev: left: 13%
- next: right: 13%
- For simplicity: use ‹ › text characters in styled buttons

### Carousel dots
- Centered below, custom dots style (same as hero: pink active, gray inactive)

## Responsive
- **Mobile (<769px):** Single card carousel, green box visible with "We're in the news..." heading inside each card
- **Desktop (769px+):** Long green curl header shown, card top headings hidden, large centered cards with prev/next arrows at far sides

## Implementation Notes
- `'use client'` directive needed
- Current slide state with manual dot/arrow navigation
- Can simplify by showing all 5 cards as a scrollable strip on desktop and hiding prev/next
