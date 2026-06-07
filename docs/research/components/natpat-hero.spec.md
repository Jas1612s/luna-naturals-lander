# NatPatHero Specification

## Overview
- **Target file:** `src/components/natpat/NatPatHero.tsx`
- **Interaction model:** Click-driven carousel (auto-advancing, dot navigation). Also has a sticky floating bottom bar that appears when the user scrolls past the static CTA button.
- **`'use client'`** required (carousel + scroll listener)

## Visual Description
White background. Left side: Heading text + 5-star badge + benefits strip (desktop: a waving animated character appears at top-right).
Center: A full-width carousel showing product slides — each slide has:
- Full background image (landscape illustration)
- Small brand logo icon (top-left of slide)
- Product title (right side)
- Product pack image (center)
- "Shop Now" button (pink pill)
- Dots navigation below

Below carousel: Heading (mobile repeat), 5-star badge (mobile), "Explore NatPat Stickers" CTA button (blue pill), benefits row (4 items).
A separate "365-day money back guarantee" + "Less than 0.5% use it" strip.

**Floating sticky CTA:** When user scrolls past the hero CTA button, a fixed bar appears at bottom:
- position: fixed, bottom: 30px (desktop) / bottom: 0 (mobile)
- white background with shadow, border-radius: 16px (desktop), 0 (mobile)
- Contains: "Natural Solutions for Enhanced Well-being" text (desktop) + blue CTA button
- On mobile: just the blue CTA button centered

## Slides Data (8 slides)

```typescript
const slides = [
  {
    bg: '/images/natpat/hero-slide-mosquito-bg.png',
    logo: '/images/natpat/hero-slide-mosquito-logo.png',
    logoWidth: 62,
    title: 'Mosquito Repellent Stickers',
    packImg: '/images/natpat/hero-slide-buzzpatch-pack.png',
    packWidth: 264,
    decorImg: '/images/natpat/hero-slide-two-mosquito.svg',
    decorWidth: 26,
    href: '/natpat/products/buzzpatch-bundles',
  },
  {
    bg: '/images/natpat/hero-slide-tick-bg.png',
    logo: '/images/natpat/hero-slide-tick-logo.svg',
    logoWidth: 62,
    title: 'Kids Tick Repellent Stickers',
    packImg: '/images/natpat/hero-slide-tick-pack.png',
    packWidth: 264,
    decorImg: null,
    href: '/natpat/products/trailpatch-kids-tick-repellent-stickers',
  },
  {
    bg: '/images/natpat/hero-slide-pet-tick-bg.png',
    logo: '/images/natpat/hero-slide-pet-tick-logo.png',
    logoWidth: 62,
    title: 'Pet Tick Repellent Stickers',
    packImg: '/images/natpat/hero-slide-pet-tick-pack.png',
    packWidth: 264,
    decorImg: null,
    href: '/natpat/products/trailpatch-pet-tick-repellent-stickers',
  },
  {
    bg: '/images/natpat/hero-slide-pet-zen-bg.png',
    logo: '/images/natpat/hero-slide-calm-logo.png',
    logoWidth: 62,
    title: 'Pet Zen Vapor Stickers',
    packImg: '/images/natpat/hero-slide-pet-zen-pack.png',
    packWidth: 264,
    decorImg: '/images/natpat/hero-slide-sparkle.svg',
    decorWidth: 49,
    href: '/natpat/products/zenpatch-pet-stickers',
  },
  {
    bg: '/images/natpat/hero-slide-flea-bg.png',
    logo: '/images/natpat/hero-slide-flea-logo.png',
    logoWidth: 62,
    title: 'Pet Flea Repellent Stickers',
    packImg: '/images/natpat/hero-slide-flea-pack.png',
    packWidth: 264,
    decorImg: null,
    newGraphic: '/images/natpat/hero-slide-new-graphic.png',
    href: '/natpat/products/pet-flea-repellent-stickers',
  },
  {
    bg: '/images/natpat/hero-slide-sleep-bg.png',
    logo: '/images/natpat/hero-slide-sleep-logo.png',
    logoWidth: 62,
    title: 'Sleep Promoting Stickers',
    packImg: '/images/natpat/hero-slide-sleep-pack.png',
    packWidth: 264,
    decorImg: '/images/natpat/hero-slide-snoring.svg',
    decorWidth: 49,
    href: '/natpat/products/sleepypatch-sleep-promoting-stickers',
  },
  {
    bg: '/images/natpat/hero-slide-mood-bg.png',
    logo: '/images/natpat/hero-slide-mood-logo.png',
    logoWidth: 62,
    title: 'Mood Calming Stickers',
    packImg: '/images/natpat/hero-slide-mood-pack.png',
    packWidth: 264,
    decorImg: '/images/natpat/hero-slide-sparkle.svg',
    decorWidth: 49,
    href: '/natpat/products/zenpatch-mood-calming-stickers',
  },
];
```

## Computed Styles

### Section container
- position: relative
- overflow: visible (to allow waving character overflow)
- padding-inline: 20px (mobile)
- color: #1F1F5B

### Hero heading (h1)
- font-family: Urbane, Barlow, sans-serif (fallback to Barlow bold 900)
- font-size: 28px (mobile) / 48px (desktop)
- font-weight: 900
- line-height: 32px (mobile) / 50px (desktop)
- color: #1F4FC9
- max-width: 327px (mobile) / 855px (desktop)
- text-align: left (mobile) / center (desktop)
- margin: 0 auto

### 5-star badge link
- display: flex
- align-items: center
- gap: 8px
- font-family: Barlow, sans-serif
- font-size: 14px
- font-weight: 600
- color: #1F1F5B
- text-decoration: none
- padding-top: 15px
- margin: 15px 0
- border-top: 1px solid #F0F0F4

### Carousel slide container
- max-width: 684px (desktop) / 351px (mobile)
- max-height: 440px (desktop) / 280px (mobile)
- border-radius: 12px
- overflow: hidden
- position: relative
- margin: 20px auto

### Carousel background image
- position: absolute
- width: 100%
- height: 100%
- min-width: 100%
- min-height: 100%
- object-fit: cover
- object-position: center

### Carousel logo (top-left)
- position: absolute
- left: 25px (desktop) / 15px (mobile)
- top: 25px (desktop) / 15px (mobile)
- max-width: 62px (desktop) / 42px (mobile)

### Carousel side container (right side)
- position: relative
- max-width: 271px (desktop) / 172px (mobile)
- margin-left: auto
- height: 100%
- padding: 20px

### Carousel title (h3)
- font-family: Barlow, sans-serif
- font-weight: 700
- font-size: 24px (desktop) / 16px (mobile)
- line-height: 32px (desktop) / 24px (mobile)
- color: #ffffff
- text-align: center

### Carousel pack image container
- display: flex
- transform: translate(-65px) (desktop) / translate(-35px) (mobile)

### Shop Now button
- background: #FF209E
- padding: 15px 32px (desktop) / 8px 26px (mobile)
- border-radius: 50px
- color: #ffffff
- font-family: Barlow
- font-weight: 700
- font-size: 16px
- text-transform: uppercase
- display: block
- max-width: max-content
- margin: 0 auto
- transition: opacity 0.3s ease

### Carousel dots
- display: flex
- justify-content: center
- gap: 4px
- margin: 15px 0
- dot: 7px circle, background #9AABD580
- active dot: 12px circle, background #FF209E

### Natural solutions text block (above desktop CTA)
- font-family: Barlow, sans-serif
- h2 font-size: 24px / color: #1F4FC9 / font-weight: 900
- p font-size: 16px / font-weight: 600 / color: #1F1F5B

### Explore button
- background: #1F4FC9
- color: #ffffff
- padding: 20px 15px
- border-radius: 50px
- font-family: Barlow
- font-size: 20px
- font-weight: 600
- text-transform: uppercase
- width: 100%
- max-width: 327px (mobile) / 400px (desktop)
- display: block
- margin: 30px auto
- text-align: center

### Money back + shield row
- display: flex (desktop) / block (mobile)
- flex-direction: row
- justify-content: center
- align-items: center
- gap: 40px
- background: #F0F0F4 (mobile only - full bleed strip)
- padding: 0 (desktop) / 8px 20px (mobile)

### Less buyers badge (dark)
- background: #F3F3F6
- border-radius: 8px
- display: flex
- align-items: center
- gap: 10px
- padding: 10px 15px

### Benefits row (4 items)
- display: flex
- justify-content: center
- align-items: center
- gap: 5px (mobile) / evenly spaced (desktop)
- margin-top: 15px

### Each benefit
- display: flex
- flex-direction: column (mobile) / row (desktop)
- align-items: center
- gap: 10px (desktop)

### Benefit icon
- max-width: 40px

### Benefit text
- font-family: Barlow
- font-size: 14px (mobile) / 16px (desktop)
- font-weight: 600
- text-align: center
- max-width: 71px (mobile - so it wraps nicely)

## Benefits Data
```typescript
const benefits = [
  { icon: '/images/natpat/benefit-non-toxic.png', text: 'Non Toxic, DEET free' },
  { icon: '/images/natpat/benefit-safe.png', text: 'Safe for kids (0+)' },
  { icon: '/images/natpat/benefit-flag.png', text: 'Designed in Australia' },
  { icon: '/images/natpat/benefit-shipping.png', text: 'FREE shipping' },
];
```

## Floating Sticky CTA
- **Trigger:** Intersection Observer on the static `.hero-btn` - when it leaves viewport going up, add `.active` class to `.hero-btn-container`
- **State A (default):** `.hero-btn-container` is a normal block-level container (the explore button shows inline in page)
- **State B (sticky):** position fixed, bottom: 30px (desktop) / bottom: 0px (mobile), left: 50%, transform: translate(-50%), z-index: 9999, background: #ffffff, padding: 18px 24px, border-radius: 16px (desktop) / 0 (mobile), box-shadow: 0 4px 14px rgba(0,0,0,0.2), max-width: 1074px, width: 100%, display: flex, align-items: center, justify-content: center, gap: 58px
- On desktop sticky: shows "Natural Solutions for Enhanced Well-being" title + subtitle LEFT, blue button RIGHT
- On mobile sticky: only the blue button, full width

## Assets
- 5-star icon: `/images/natpat/green-5-star.png`
- Waving character (desktop only): `/images/natpat/hero-waving-character.svg` — animated, appears at top-right, partially off-screen
- Waving animation: `@keyframes wave` with translate/rotate — use CSS animation
- Money back: `/images/natpat/benefit-money-back.png`
- Shield: `/images/natpat/benefit-shield.png`

## Responsive
- **Desktop (769px+):** Hero title centered (max-width: 855px), carousel max 684x440, benefits horizontal with icons left
- **Mobile (<769px):** Title left-aligned (max-width: 327px), carousel max 351x280, waving character hidden, benefits vertical icons

## Implementation Notes
- Use `useRef` on the explore button, `useEffect` + `IntersectionObserver` to toggle floating state
- Carousel: implement manually with useState (currentSlide), auto-advance with setInterval (4s), dot clicks change slide
- Center slide scales to 1, adjacent slides scale to 0.8 and translate offset (see CSS)
- Use `next/image` with `layout="fill"` or `fill` prop for background images
