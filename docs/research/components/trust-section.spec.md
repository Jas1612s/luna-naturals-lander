# TrustSection Specification

## Overview
- **Target file:** `src/components/TrustSection.tsx`
- **Screenshot:** `docs/design-references/trust-section.png`
- **Interaction model:** horizontal scroll carousel

## DOM Structure
```
section.trust (white bg, py 80px)
  div.trust-header (text center, mb 48px)
    h2.gold "The best care"
    h2.dark "by the best in medicine"
    p.sub "Meet the team of leading specialists with decades of combined experience across key specialties."
  div.doctors-scroll (overflow-x scroll, display flex, gap 24px, px 24px, scrollbar hidden)
    [Doctor cards × 5+]
    div.doctor-card (w 280px, flex-shrink 0)
      div.card-top (bg light peach #FBF0E8, borderRadius 16px, p 0, overflow hidden, mb 16px, h 200px, relative)
        img (doctor headshot, w 80px, h 80px, object-fit cover, rounded)
        div.specialties (flex col, gap 4px, ml 16px)
          p.title "Head of Weight Loss, Hims & Hers"
          div.tags (flex col, gap 2px)
            span.tag "Metabolic Health"
      p.name "Dr. Craig Primack, MD"
      p.bio "As a nationally recognized obesity specialist..."
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px

### H2 Gold ("The best care")
- color: rgb(154, 109, 42) = #9A6D2A (dark amber/gold)
- fontSize: ~52px
- fontWeight: 400
- textAlign: center

### H2 Dark ("by the best in medicine")
- color: rgba(0, 0, 0, 0.88)
- fontSize: ~52px
- fontWeight: 400
- textAlign: center

### Subtitle
- color: rgba(0, 0, 0, 0.66)
- fontSize: 16px
- textAlign: center
- maxWidth: 600px
- mx: auto

### Scroll Container
- display: flex
- gap: 24px
- overflowX: scroll
- paddingLeft: 24px (or 48px)
- scrollbarWidth: none

### Doctor Card
- width: 280px
- flexShrink: 0

### Card Top (peach bg)
- backgroundColor: rgb(229, 199, 179) peach/tan
- borderRadius: 16px
- display: flex
- alignItems: center
- padding: 20px
- marginBottom: 16px

### Doctor Photo
- width: 80px
- height: 80px
- borderRadius: 50%
- objectFit: cover

### Doctor Title
- fontSize: 12px
- fontWeight: 500
- color: rgba(0,0,0,0.88)

### Specialty Tag (vertical line + text)
- borderLeft: 3px solid amber
- paddingLeft: 8px
- fontSize: 12px
- color: rgba(0,0,0,0.66)
- marginTop: 4px

### Doctor Name
- fontSize: 18px
- fontWeight: 500
- color: rgba(0,0,0,0.88)
- marginBottom: 8px

### Doctor Bio
- fontSize: 14px
- color: rgba(0,0,0,0.66)
- lineHeight: 1.5

## Text Content (verbatim)
### Doctor Cards (5 visible):
1. Dr. Craig Primack, MD — Head of Weight Loss, Hims & Hers | Metabolic Health
   Bio: "As a nationally recognized obesity specialist, Dr. Primack regularly educates clinicians across the country on evidence-based metabolic and weight-management care."

2. Dr. Peter Stahl, MD — Head of Men's Sexual Health & Urology | Men's Health | Metabolic Health
   Bio: "A recognized leader in urology, hormonal health, and complex sexual medicine, Dr. Stahl is expertly attuned to the biological markers that influence energy, sexual function, and metabolic performance in men."

3. Dr. Brian Williams, MD — Head of Medical Affairs, Hims & Hers | Inflammation & Stress | Liver & Kidney Health | Immune Defense | Nutrients & Blood
   Bio: "A board-certified family medicine physician with extensive experience in dermatology, Dr. Williams brings years of clinical expertise to the Hims & Hers patient experience."

4. Dr. Alicia Warnock, MD — Endocrinology Advisor | Thyroid Health
   Bio: "An endocrinologist and former U.S. Navy officer, Dr. Warnock directed the Diabetes Institute at Walter Reed and brings deep expertise in thyroid, metabolic, and endocrine care."

5. Dr. Deepak L. Bhatt, MD — Cardiology Advisor | Heart Health
   Bio: "One of the world's leading cardiologists, having held leadership roles at top medical programs and received countless awards for clinical innovation, Dr. Bhatt brings exceptional insight into heart health."

## Responsive Behavior
- **Desktop**: horizontal scroll of cards, 5+ visible
- **Mobile**: horizontal scroll, 1.5 cards visible
