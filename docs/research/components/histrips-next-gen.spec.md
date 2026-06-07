# HiStripsNextGenTech Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsNextGenTech.tsx`
- **Interaction model:** static

## DOM Structure
- 2-column layout: LEFT = text content (45%), RIGHT = video (55%)
- White background section

## Computed Styles

### Section outer
- background: #ffffff
- width: 100%

### Inner container
- display: flex
- maxWidth: 1260px
- margin: auto
- gap: 50px
- padding: 60px 20px
- alignItems: center

### LEFT column (45% width)

**Heading:**
- fontSize: 56px
- fontWeight: 600
- lineHeight: 110%
- letterSpacing: -2.8px
- maxWidth: 300px
- marginBottom: 20px
- color: #1c1c1c

**Paragraph:**
- fontSize: 18px
- fontWeight: 400
- lineHeight: 120%
- letterSpacing: -0.18px
- maxWidth: 400px
- marginBottom: 30px
- color: #555

**3 USP items (flex wrap, gap: 20px):**
Each item:
- display: flex, gap: 15px, alignItems: center
- Icon: width: 40px, maxWidth: 40px, height: 47px, objectFit: contain
- Title: fontSize: 20px, fontWeight: 600, lineHeight: 110%, letterSpacing: -1px, maxWidth: 165px

### RIGHT column (55% width)
- Video element: borderRadius: 30px, aspectRatio: 1.4, objectFit: cover, width: 100%
- Use thumbnail image as poster: `/images/histrips/next-gen/video-thumb.jpg`
- (No actual video needed — display as static image with play button overlay)

## Text Content

**Heading:** "Next-Gen Nasal Tech"

**Paragraph:** "HiStrips uses multi-layer tension-release technology to gently lift and open your nasal passages, giving you up to 40% more oxygen with every breath."

**USP items:**
1. icon: `/images/histrips/icons/usp-badge-1.svg` — "Dynamic Lift Design"
2. icon: `/images/histrips/icons/usp-badge-2.svg` — "Sweat-Proof Adhesive Matrix"
3. icon: `/images/histrips/icons/usp-badge-3.svg` — "40% More Oxygen Per Breath"

## Responsive Behavior
- **Desktop (1440px):** 2-column flex, 45/55 split
- **Mobile (390px):** stacked single column, text first, video below
- **Breakpoint:** ~768px
