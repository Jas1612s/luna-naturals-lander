# LabsSection Specification

## Overview
- **Target file:** `src/components/LabsSection.tsx`
- **Screenshot:** `docs/design-references/labs-section.png`
- **Interaction model:** static (click to navigate)

## DOM Structure
```
section.labs (peach/copper bg, rounded top ~24px, overflow hidden)

  [A: Hero row]
  div.labs-hero (full width, min-height 500px, relative, overflow hidden)
    div.hero-bg (peach gradient bg, absolute inset 0)
    div.hero-content (text left, z-index 1, p 48px)
      p.eyebrow "labs by"
      h2 "Get your labs." + br + "Go for your optimal."
    div.hero-cta (absolute bottom, flex gap 16px, p 48px)
      a.btn-white "Start my labs"
      a.btn-ghost-dark "Learn more"
    img.hero-person (absolute right, h 100%, object-fit contain)
      (man in orange/tan sweater, peach bg)

  [B: Info cards row]
  div.info-row (flex, gap 16px, px 24px, pb 16px)
    div.info-card-1 (bg peach-lighter, borderRadius 24px, p 32px 48px, flex-1, relative overflow hidden)
      h3 "Find your" + br + span "baseline"
      p "Get a clear picture of your health with a simple lab test."
      img.phone-mockup (phone showing insights app, absolute right)
    div.info-card-2 (bg peach-lighter, borderRadius 24px, p 32px 48px, flex-1, relative overflow hidden)
      h3 "Plan your" + br + span "breakthrough"
      p "Optimize your health with a doctor-developed Action Plan."
      a.btn-rounded "Explore the plan"

  [C: Feature cards row]
  div.feature-row (flex, gap 16px, px 24px, pb 48px)
    div.feature-card-1 (bg peach-mid, borderRadius 24px, p 32px, flex-1, relative overflow hidden)
      h3 "Test 130+" + br + "biomarkers"
      div.tags-marquee (scrolling tags: Cholesterol, Heart, LDL, HDL, Metabolism...)
      img.person-overlay (man in orange top, abs right)
      a.btn-rounded "Meet the markers"
    div.feature-card-2 (bg peach-mid, borderRadius 24px, p 32px, flex-1, relative overflow hidden)
      h3 "Screen for 50+" + br + "types of cancer"
      img.cancer-visual (circular glow image)
      a.btn-rounded "Learn more"
```

## Computed Styles

### Section
- background: peach/copper tones
  - Main bg: approximately rgb(191, 142, 94) = #BF8E5E or gradient
  - Lighter cards: rgba(255,255,255,0.3) overlay on peach
- borderTopLeftRadius: 24px
- borderTopRightRadius: 24px

### Labs Eyebrow
- fontSize: 14px
- fontWeight: 400
- color: rgba(255,255,255,0.7)
- textTransform: uppercase
- letterSpacing: 0.1em

### H2 (Get your labs)
- fontSize: ~52px
- fontWeight: 400
- color: rgb(255, 255, 255)
- lineHeight: 1.1

### CTA Buttons (hero)
#### Start my labs (white):
- backgroundColor: rgb(255, 255, 255)
- color: rgba(0,0,0,0.88)
- borderRadius: 100px
- padding: 12px 28px

#### Learn more (ghost):
- backgroundColor: rgba(255,255,255,0.2)
- color: rgb(255,255,255)
- border: 1px solid rgba(255,255,255,0.4)
- borderRadius: 100px

### Info Card
- backgroundColor: rgba(255,255,255,0.25)
- borderRadius: 24px
- padding: 32px 48px
- color: white

### Info Card H3
- fontSize: 36px
- fontWeight: 400
- color: rgba(255,255,255,0.9)

### Info Card active title
- color: rgba(255,255,255,0.4) for "Plan your"
- color: white for "breakthrough"

### Feature Card
- backgroundColor: rgba(0,0,0,0.15) or similar darker peach
- borderRadius: 24px
- minHeight: 300px

### Feature H3
- fontSize: ~48px
- fontWeight: 400
- color: white

### Biomarker Tags
- display: inline-flex pills
- bg: rgba(255,255,255,0.15)
- border: 1px solid rgba(255,255,255,0.3)
- borderRadius: 100px
- padding: 4px 12px
- fontSize: 12px
- color: white
- Some tags highlighted (circled): "Heart", "Metabolism", "Inflammation & Stress", "Thyroid"

### Dark Action Buttons
- backgroundColor: rgba(0,0,0,0.3) or dark navy
- color: white
- borderRadius: 100px
- padding: 10px 24px

## Assets
- Hero person image: `public/images/labs-hero-person.webp`
- Phone mockup: `public/images/labs-phone-mockup.webp`
- Man in orange top (biomarkers): `public/images/labs-biomarker-person.webp`
- Cancer screening visual: `public/images/labs-cancer-screen.webp`

## Text Content (verbatim)
- Eyebrow: "labs by"
- H2: "Get your labs. Go for your optimal."
- Button: "Start my labs"
- Button: "Learn more"
- Card 1: "Find your baseline" / "Get a clear picture of your health with a simple lab test."
- Card 2: "Plan your breakthrough" / "Optimize your health with a doctor-developed Action Plan."
- Button: "Explore the plan"
- Feature 1: "Test 130+ biomarkers"
- Feature 2: "Screen for 50+ types of cancer"
- Tags: Cholesterol, Heart, LDL Cholesterol, HDL Cholesterol, Apolipoprotein, Hemoglobin A1c, Fasting Insulin, Uric Acid, Glucose, Metabolism, Luteinizing Hormone, Follicle Stimulating Hormone, Hormone, Cortisol, Inflammation & Stress, DHEA-Sulfate, Thyroid, Thyroxine (T4), Free Triiodothyronine (T3), Blood Urea Nitrogen, BUN/Creatinine Ratio, Kidney...
- Button: "Meet the markers"
- Button: "Learn more"
- Disclaimer: "Not available in all 50 states. Eligibility determination and prescription required for all lab tests..."

## Responsive Behavior
- **Desktop**: 2-col info cards, 2-col feature cards
- **Mobile**: stacked, full width
