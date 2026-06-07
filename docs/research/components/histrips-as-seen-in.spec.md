# HiStripsAsSeenIn Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsAsSeenIn.tsx`
- **Interaction model:** time-driven (auto-scrolling marquee)

## DOM Structure
- Full-width black bar
- "AS SEEN IN" label on left (absolute positioned)
- Infinite scrolling row of 8 press logos

## Computed Styles

### Container
- background: #000000
- color: #ffffff
- borderTop: 1px solid #000000
- borderBottom: 1px solid #000000
- overflow: hidden
- position: relative
- height: 70px (logos + padding)

### "AS SEEN IN" label
- position: absolute, top: 0, left: 0, height: 100%
- display: flex, alignItems: center
- padding: 20px
- fontWeight: 400, fontSize: 14px, lineHeight: 16px
- background: #000000 (same as container, acts as mask)
- zIndex: 2
- color: #ffffff
- letterSpacing: 0.1px

### Scrolling track
- display: flex, alignItems: center, justifyContent: space-around
- width: max-content
- animation: scrollNew4 25s linear infinite
- @keyframes: translateX(0) → translateX(-50%) (logos duplicated for seamless loop)

### Each logo item
- display: flex, alignItems: center, justifyContent: center
- gap: 10px, padding: 5px 30px
- width: max-content, height: 100%

### Logo images
- height: 28px (auto width)
- objectFit: contain
- filter: invert(1) brightness(2) (to make white on black bg)

## Press Logos (duplicated for seamless loop)
1. `/images/histrips/press/elle.png` — Elle
2. `/images/histrips/press/goop.png` — Goop
3. `/images/histrips/press/forbes.png` — Forbes
4. `/images/histrips/press/people.png` — People
5. `/images/histrips/press/vogue.png` — Vogue
6. `/images/histrips/press/womens-health.png` — Women's Health
7. `/images/histrips/press/oprah.png` — Oprah Magazine
8. `/images/histrips/press/cosmopolitan.png` — Cosmopolitan

## Responsive Behavior
- Same on all viewports (full-width scrolling strip)
