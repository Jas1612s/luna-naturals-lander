# HiStripsUseCases Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsUseCases.tsx`
- **Interaction model:** static (4 cards in a horizontal layout, swiper on mobile)

## DOM Structure
- White background section
- Centered heading
- 4-card horizontal layout (each card = use case scenario)

## Computed Styles

### Section wrapper
- background: #ffffff
- padding: 30px 20px 50px

### Heading
- fontSize: 46px, fontWeight: 600, lineHeight: 110%, letterSpacing: -1.84px
- textAlign: center, maxWidth: 500px, margin: 0 auto, color: #1c1c1c

### Small label above heading
- fontSize: 13px, fontWeight: 500, textAlign: center, color: #666
- marginBottom: 8px
- Text: "HiStrips sessions for better nasal flow"

### Cards container
- maxWidth: 1300px, margin: 30px auto 0, overflow: hidden
- display: grid, gridTemplateColumns: repeat(4, 1fr), gap: 20px

### Each card
- display: flex, flexDirection: column, gap: 16px, textAlign: left
- background: #f5f3ef
- borderRadius: 20px, overflow: hidden

### Card image
- width: 100%, aspectRatio: 1 or 4/3, objectFit: cover

### Card text area
- padding: 20px

### Card heading (h2)
- fontSize: 28px, fontWeight: 600, lineHeight: 110%, letterSpacing: -1.4px, color: #1c1c1c

### Card body
- fontSize: 16px, fontWeight: 400, lineHeight: 120%, letterSpacing: -0.16px, color: #555, maxWidth: 320px

## Cards Data
1. Image: `/images/histrips/usecase/sleep.png`
   Heading: "Snore Less, Sleep Better"
   Body: "Apply before bed to open nasal passages, reduce snoring, and unlock deeper, more restorative sleep, naturally."

2. Image: `/images/histrips/usecase/workout.png`
   Heading: "Power Your Workouts"
   Body: "Use pre-workout to improve airflow and stamina. HiStrips support better oxygen delivery so you can push harder, longer."

3. Image: `/images/histrips/usecase/breathwork.png`
   Heading: "Calm Your System"
   Body: "Wear during breathwork or meditation to reduce heart rate, ease anxiety, and support parasympathetic recovery."

4. Image: `/images/histrips/usecase/recovery.png`
   Heading: "Recover When Sick"
   Body: "When congestion hits, HiStrips act as a non-medicated decongestant, easing airflow and helping you breathe freely."

## Responsive Behavior
- **Desktop (1440px):** 4-column grid
- **Mobile (< 990px):** horizontal scroll / 1-column with overflow scroll, padding: 0 20px
