# HeroATF Specification

## Overview
- **Target file:** `src/components/HeroATF.tsx`
- **Screenshot:** `docs/design-references/hero-atf.png`
- **Interaction model:** static (click to navigate) + hover image swap

## DOM Structure
```
section.hero-atf (white bg, padding-top ~300px for nav offset, width 100%)
  h1 "The care you've\nalways deserved"
  div.cards-wrapper (max-width 1392px, mx auto, padding 0 24px)
    div.featured-row (flex, gap 16px, mb 12px)
      a.featured-card-1 (href="/#wm-quiz", borderRadius 24px, overflow hidden, w ~678px, h 199px)
        div.card-image (position relative, full fill)
          img[default] (hims_nn-wp-hd-pen-default-d.png, position absolute, opacity 1)
          img[hover] (hims_nn-wp-hd-pen-hover-d, position absolute, opacity 0, transition)
        div.card-overlay (absolute bottom-left, p 16px 20px)
          p.label "Start your" (white, 20px w-500) + span "weight loss today" (gold #FFC671)
          p.sublabel "Find your Rx match" (white, 16px w-400)
        div.arrow-btn (absolute bottom-right, circle button, white bg)
          svg ">"
      a.featured-card-2 (href="/#wm-quiz", bg rgb(154,109,42), borderRadius 24px, overflow hidden, w ~678px, h 199px)
        div.card-image
          img[default] (hims_nn-wp-2-default-d, position absolute)
          img[person] (hims_nn-wp-2-person-d, position absolute)
          img[graph] (hims_nn-wp-2-graph-d, position absolute)
        div.card-overlay (absolute bottom-left, p 16px 20px)
          p.label "See how much" (gold #FFC671, 20px w-500) + span "weight you can lose" (gold)
          p.sublabel "↓ Lose up to 25%*" (gold, 16px)
        div.arrow-btn (absolute bottom-right)
    div.category-row (flex, gap 12px, 4 equal columns)
      a.cat-tile-1 (href="/g/i/sh", bg #FBF8F5, borderRadius 16px, h 100px, flex space-between items-center, px 20px)
        p "Have better " + span.accent "sex" (color rgb(78,121,158))
        img (Hims_Homepage_Better_Sex_Default_240-3, h 80px, object-fit contain)
        span.arrow ">"
      a.cat-tile-2 (href="/c/hl", same layout)
        p "Regrow " + span.accent "hair" (color rgb(138,58,52))
        img (Hims_Homepage_Regrow_Hair_Default_480-2)
      a.cat-tile-3 (href="/g/i/tt", same layout)
        p "Boost " + span.accent "testosterone" (color rgb(109,141,158))
        img (Hims_Homepage_Boost_Testosterone_Supps_Default)
      a.cat-tile-4 (href="/g/i/hc", same layout)
        p "Get a " + span.accent "health check" (color rgb(191,142,94))
        img (health check icon/image)
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: ~300px (accounts for nav + announcement bar)
- paddingBottom: 32px

### H1
- fontSize: 57px
- fontWeight: 400
- lineHeight: 57px
- letterSpacing: -3.5625px
- color: rgba(0, 0, 0, 0.88)
- fontFamily: sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif
- marginBottom: 24px
- paddingLeft: 24px (or within max-width container)

### Featured Cards Container
- display: flex
- gap: 16px
- marginBottom: 12px

### Featured Card (each)
- borderRadius: 24px
- overflow: hidden
- height: 199px
- flex: 1 (equal width)
- position: relative
- cursor: pointer

### Card 1 (weight loss pen)
- background: dark brown-black (from image) - let image fill fully
- The dark bg is part of the image itself

### Card 2 (weight loss graph)
- backgroundColor: rgb(154, 109, 42) = #9A6D2A
- background-image: person + graph overlaid

### Card Overlay Text
- position: absolute
- bottom: 16px
- left: 20px

### Label (large)
- fontSize: 20px
- fontWeight: 500
- color: rgb(255, 198, 113) for gold parts; white for prefix "Start your"

### Sublabel
- fontSize: 16px
- fontWeight: 400
- color: rgb(255, 255, 255) OR rgb(255, 198, 113) depending on card

### Arrow Button (bottom-right)
- position: absolute
- right: 16px
- bottom: 16px
- width: 32px; height: 32px
- borderRadius: 50%
- backgroundColor: rgba(255,255,255,0.8)
- display: flex; alignItems: center; justifyContent: center

### Category Tile (each)
- backgroundColor: rgb(251, 248, 245) = #FBF8F5
- borderRadius: 16px (or 24px based on computed)
- height: 100px
- display: flex
- alignItems: center
- justifyContent: space-between
- padding: 0 20px
- flex: 1

### Category Tile Text
- fontSize: 18px
- fontWeight: 400 for prefix, 500 for accent word
- color: rgba(0,0,0,0.88) for prefix

### Category Tile Arrow
- color: rgba(0,0,0,0.44)
- fontSize: 16px

## States & Behaviors

### Featured Card Hover Image Swap
- **Trigger**: hover on featured card
- **State A**: default image visible (opacity 1), hover image hidden (opacity 0)
- **State B**: default image hidden (opacity 0), hover image visible (opacity 1)
- **Transition**: opacity 0.3s ease

### Category Tile Hover
- **State B**: slight bg darkening or scale transform ~1.02
- **Transition**: 0.2s ease

## Assets
### Card 1 images:
- Default desktop: `public/images/hims_nn-wp-hd-pen-default-d.png`
- Hover desktop: `public/images/hims_nn-wp-hd-pen-hover-d.webp`

### Card 2 images:
- Default: `public/images/hims_nn-wp-2-default-d.webp`
- Person: `public/images/hims_nn-wp-2-person-d.webp`
- Graph: `public/images/hims_nn-wp-2-graph-d.webp`
- Hover: `public/images/hims_nn-wp-2-hover-d.webp`

### Category tile images:
- `public/images/Hims_Homepage_Better_Sex_Default_240-3.webp`
- `public/images/Hims_Homepage_Regrow_Hair_Default_480-2.webp`
- `public/images/Hims_Homepage_Boost_Testosterone_Supps_Default.webp`
- `public/images/Hims_Homepage_Health_Check_Default.webp`

## Text Content (verbatim)
- H1: "The care you've always deserved"
- Card 1: "Start your weight loss today" / "Find your Rx match"
- Card 2: "See how much weight you can lose" / "↓ Lose up to 25%*"
- Tile 1: "Have better sex"
- Tile 2: "Regrow hair"
- Tile 3: "Boost testosterone"
- Tile 4: "Get a health check"

## Responsive Behavior
- **Desktop (1440px)**: 2 large cards side by side, 4 small tiles in one row
- **Tablet (768px)**: 2 cards stack or shrink, tiles wrap 2×2
- **Mobile (390px)**: 1 card wide, tiles stack 2×2
- **Breakpoint**: ~768px
