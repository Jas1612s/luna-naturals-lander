# WeightLossSection Specification

## Overview
- **Target file:** `src/components/WeightLossSection.tsx`
- **Screenshot:** `docs/design-references/weight-loss-section.png`
- **Interaction model:** static scroll + video autoplay + horizontal scroll (GLP-1 cards)

## DOM Structure
```
section.weight-loss (bg dark brown #392E25, rounded top corners ~24px, overflow hidden)

  [Sub-section A: Hero]
  div.wl-hero (text center, pt 80px, pb 0, position relative)
    h2 "Your weight loss" + br + span.gold "breakthrough is here"
    video (autoplay loop muted, poster=Hims_Sunlight_Rough_PillsPen_April_17_2026.jpg)
      source (Hims_Sunlight_Rough_PillsPen_April_17_2026.mp4)

  [Sub-section B: CTA]
  div.wl-cta (text center, py 48px)
    p span.gold "Lose up to 25%" + " body weight"
    p "with Wegovy®*, now with more options than ever."
    a.btn-pill href="/#wm-quiz" "Get started"

  [Sub-section C: GLP-1 Lineup]
  div.wl-lineup (py 32px)
    h3 "Access our wide GLP-1 lineup"
    div.lineup-scroll (display flex, overflow-x scroll, gap 16px, px 24px, scrollbar hidden)
      [cards: Wegovy Pill, Zepbound KwikPen, Foundayo, Wegovy Pen, Zepbound...]
        div.product-card (bg #C8977A tan, borderRadius 16px, p 20px, min-w 280px)
          img (product image)
          p.name "Wegovy® Pill"
          p.price "From $149/mo†"
          p.type "Semaglutide"

  [Sub-section D: SNAC + Wegovy Pen]
  div.wl-snac-row (display flex, gap 0)
    div.snac-left (w 50%, p 48px)
      h3 "The perfect" + br + span.gold "SNAC"
      a.btn-pill-outline "See the science"
      p (SNAC description)
    div.snac-right (w 50%, p 48px, text right)
      span.badge "New high dose"
      h3 "Lose up to 25%" + br + "body weight*"
      video (comprehensive-pill.mp4, autoplay loop muted)
      a.btn-rounded "Explore Wegovy® Pen"

  [Footer disclaimer]
  p.disclaimer (small text, center, opacity 0.66)
```

## Computed Styles

### Section
- backgroundColor: rgb(57, 46, 37) ≈ #392E25 (dark brown/chocolate)
- borderTopLeftRadius: 24px
- borderTopRightRadius: 24px

### Hero H2
- color: rgb(255, 255, 255)
- fontSize: ~64px
- fontWeight: 400
- textAlign: center

### Gold accent text (in dark sections)
- color: rgb(255, 198, 113) = #FFC671

### Get Started Button
- backgroundColor: rgb(255, 198, 113) = #FFC671
- color: rgba(0,0,0,0.88)
- borderRadius: 100px (full pill)
- padding: 14px 32px
- fontSize: 16px
- fontWeight: 500

### Product Card (lineup)
- backgroundColor: ~rgb(200, 151, 122) or tan/beige
- borderRadius: 16px
- padding: 20px
- minWidth: 240-280px
- color: white

### Product Card Name
- fontSize: 20px
- fontWeight: 500
- color: rgb(255, 255, 255)

### Product Card Price
- fontSize: 14px
- color: rgba(255,255,255,0.8)

### SNAC Badge
- backgroundColor: rgb(255, 198, 113)
- color: rgba(0,0,0,0.88)
- borderRadius: 100px
- padding: 4px 12px
- fontSize: 12px

## Assets
### Videos:
- `public/videos/Hims_Sunlight_Rough_PillsPen_April_17_2026.mp4`
- `public/videos/comprehensive-pill.mp4`

### Video posters:
- `public/images/Hims_Sunlight_Rough_PillsPen_April_17_2026.jpg`
- `public/images/comprehensive-pill-poster.png`

### Product images (GLP-1 lineup):
- Wegovy Pill, Zepbound KwikPen, Foundayo, Wegovy Pen — from public/images/

## Text Content (verbatim)
- H2: "Your weight loss breakthrough is here"
- CTA: "Lose up to 25% body weight with Wegovy®*, now with more options than ever."
- Button: "Get started"
- Lineup heading: "Access our wide GLP-1 lineup"
- Products: "Wegovy® Pill / From $149/mo† / Semaglutide", "Zepbound® KwikPen® / $299/mo† / Tirzepatide", "Foundayo® / From $149/mo† / Orforglipron", "Wegovy® Pen / From $199/mo† / Semaglutide"
- SNAC: "The perfect SNAC"
- Button: "See the science"
- Right side: "New high dose" badge, "Lose up to 25% body weight*"
- Button: "Explore Wegovy® Pen"

## Responsive Behavior
- **Desktop**: hero full width, cards horizontal scroll, SNAC 2-col
- **Mobile**: everything stacks, SNAC becomes single column
