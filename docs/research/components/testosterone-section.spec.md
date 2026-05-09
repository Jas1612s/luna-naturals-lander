# TestosteroneSection Specification

## Overview
- **Target file:** `src/components/TestosteroneSection.tsx`
- **Screenshot:** `docs/design-references/testosterone-section.png`
- **Interaction model:** static (click to navigate)

## DOM Structure
```
section.testosterone (light olive/cream gradient bg, py 80px)
  h2 "Get your edge back with" + br + "Testosterone by Hims"
  div.cta-row (flex, gap 16px, justify center, mb 48px)
    a.btn-primary "Get started"
    a.btn-ghost "Do I have low T?"
  div.cards-row (flex, gap 24px, max-w 1200px, mx auto, px 24px)
    div.card-1 (bg #FFFDE8 cream, borderRadius 24px, p 32px, flex-1)
      h3 "Enclomiphene" + br + span "to elevate your T"
      p.sub "Now with " + a "supplements" (link)
      [image area - product image]
      a.btn-dark "Learn more"
    div.card-2 (bg #FFFDE8 cream, borderRadius 24px, p 32px, flex-1)
      h3 "At-home labs" + br + span "to check your T levels"
      [image area - lab kit image]
      a.btn-dark "Start testing"
  p.disclaimer (small, center, mt 24px)
```

## Computed Styles

### Section
- background: light olive-green to cream gradient
  - approx: linear-gradient(to bottom, rgb(219,230,205) 0%, rgb(237,225,172) 100%)
  - OR: backgroundColor: rgb(237, 225, 172) = #EDE1AC
- paddingTop: 80px
- paddingBottom: 80px

### H2
- fontSize: ~48px
- fontWeight: 400
- color: rgba(0,0,0,0.88)
- textAlign: center
- marginBottom: 32px

### CTA Buttons
#### Get Started (primary):
- backgroundColor: rgb(255, 255, 255)
- color: rgba(0,0,0,0.88)
- borderRadius: 100px
- padding: 12px 28px
- fontSize: 16px
- fontWeight: 500
- border: 1px solid rgba(0,0,0,0.2)

#### Do I have low T? (ghost):
- backgroundColor: transparent
- color: rgba(0,0,0,0.66)
- borderRadius: 100px
- padding: 12px 28px
- fontSize: 16px

### Feature Card
- backgroundColor: ~rgb(255, 253, 232) = #FFFDE8 very light cream
- borderRadius: 24px
- padding: 32px
- flex: 1
- overflow: hidden
- minHeight: 480px

### Card H3
- fontSize: 28px
- fontWeight: 400
- color: rgba(0,0,0,0.88)
- lineHeight: 1.2

### Card Subtitle color (italic/muted)
- color: rgba(0,0,0,0.44)

### Card Bottom Button (dark)
- backgroundColor: rgb(10, 38, 51) = #0A2633 (dark navy)
- color: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 12px 28px
- fontSize: 16px

## Assets
- Enclomiphene product image
- At-home lab kit image
- Images from public/images/

## Text Content (verbatim)
- H2: "Get your edge back with Testosterone by Hims"
- Button: "Get started"
- Button: "Do I have low T?"
- Card 1 title: "Enclomiphene to elevate your T"
- Card 1 sub: "Now with supplements"
- Card 1 button: "Learn more"
- Card 2 title: "At-home labs to check your T levels"
- Card 2 button: "Start testing"
- Disclaimer: "Compounded products are not approved nor evaluated for safety, effectiveness, or quality by the FDA. Image is for illustrative purposes only. Individual lab results may vary."

## Responsive Behavior
- **Desktop**: 2 cards side by side
- **Mobile**: 2 cards stack vertically
- **Breakpoint**: ~768px
