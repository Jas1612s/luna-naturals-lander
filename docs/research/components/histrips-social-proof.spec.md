# HiStripsSocialProof Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsSocialProof.tsx`
- **Interaction model:** click-driven (click video thumbnail → opens modal/video)

## DOM Structure
- Full-width section, white background
- Top: "Loved by 150k+ athletes" label + "Over 30.4M Views On Instagram"
- Center: horizontal scrollable row of 5 video thumbnails (9.6:16 aspect ratio)
- Each card: thumbnail image + athlete handle (@...) overlay at bottom-left

## Computed Styles

### Section Container
- background: #ffffff
- padding: 40px 20px
- overflow: hidden

### Header text
- "Loved by 150k+ athletes" — fontSize: 14px, fontWeight: 600, letterSpacing: 0.5px, textTransform: uppercase, color: #1c1c1c
- "Over 30.4M Views On Instagram" — fontSize: 14px, fontWeight: 400, color: #666

### Video grid
- display: flex
- gap: 12px
- justifyContent: center
- overflow: visible (no scroll, 5 cards centered)

### Each video card
- width: ~180px (desktop), aspect-ratio: 9.6/16 (~0.6)
- borderRadius: 16px
- overflow: hidden
- position: relative
- boxShadow: 0 0 5px rgba(0,0,0,0.25)
- cursor: pointer

### Thumbnail image
- width: 100%
- height: 100%
- objectFit: cover

### Athlete handle overlay
- position: absolute
- bottom: 10px
- left: 10px
- color: #ffffff
- fontSize: 13px
- fontWeight: 700
- textShadow: 0 1px 4px rgba(0,0,0,0.5)
- display: flex, alignItems: center, gap: 4px

### Play icon (bottom-left)
- 32x32px white circle with play triangle
- position: absolute, bottom: 10px, left: 10px

## Video Cards Data
1. src: `/images/histrips/social/carlos-alcaraz.png`, handle: `@carlitosalcarazz`
2. src: `/images/histrips/social/team-visma.png`, handle: `@teamvisma`
3. src: `/images/histrips/social/video-3.png`, handle: `@juanlebron`
4. src: `/images/histrips/social/taeke.png`, handle: `@taeke`
5. src: `/images/histrips/social/video-5.png`, handle: `@histrips`

## Assets
- Video thumbnails: `/images/histrips/social/carlos-alcaraz.png` etc.

## Responsive Behavior
- **Desktop (1440px):** 5 cards side by side, centered
- **Mobile (390px):** horizontally scrollable row, 3 cards visible, swiper-style
- **Breakpoint:** ~768px
