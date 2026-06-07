# HiStripsPerformance Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsPerformance.tsx`
- **Interaction model:** static (or simple swiper on mobile)

## DOM Structure
- Light cream background section (#f5f3ef)
- Centered heading above
- 4-column grid of feature cards, each with image + text

## Computed Styles

### Section wrapper
- background: #f5f3ef
- padding: 60px 20px

### Inner container
- maxWidth: 1300px
- margin: 0 auto

### Section label (small caps above heading)
- fontSize: 12px, fontWeight: 600, letterSpacing: 2px, textTransform: uppercase, color: #666
- marginBottom: 8px, textAlign: center
- Text: "Performance-focused"

### Section heading
- fontSize: 46px, fontWeight: 600, lineHeight: 110%, letterSpacing: -1.84px
- textAlign: center, maxWidth: 500px, margin: 0 auto 30px
- color: #1c1c1c

### Card grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr) (desktop)
- gap: 20px
- marginTop: 30px

### Each card
- display: flex, flexDirection: column, gap: 16px, textAlign: left
- background: #ffffff
- borderRadius: 20px
- overflow: hidden
- padding: 0 (image is full-bleed top, text below)

### Card image
- width: 100%, aspectRatio: 1, objectFit: cover

### Card text area (below image)
- padding: 20px

### Card heading
- fontSize: 20px, fontWeight: 600, lineHeight: 110%, letterSpacing: -1px, marginBottom: 8px, color: #1c1c1c

### Card body
- fontSize: 15px, fontWeight: 400, lineHeight: 140%, color: #555

## Cards Data
1. Image: `/images/histrips/performance/frame-1.png`
   Heading: "Strong hold, immediate airflow expansion, no fiddling, no reapplying."
   Body: (no additional body — heading IS the description)

2. Image: `/images/histrips/performance/frame-2.png`
   Heading: "Engineered for Motion"
   Body: "Built for performance, the nasal strip grip doesn't budge, even during sweat-heavy workouts or deep sleep."

3. Image: `/images/histrips/performance/frame-3.png`
   Heading: "Stable, Yet Flexible"
   Body: "No collapsing. No warping. The reinforced band ensures consistent lift with a soft-touch feel."

4. Image: `/images/histrips/performance/frame-4.png`
   Heading: "Medical Grade"
   Body: "Crafted with hypoallergenic, FDA-registered materials. Strong enough for performance, gentle enough for nightly wear."

## Responsive Behavior
- **Desktop (1440px):** 4-column grid
- **Mobile (< 990px):** 1 column, horizontal swiper (or 2-column grid)
- **Breakpoint:** ~990px
