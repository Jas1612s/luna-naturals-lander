# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer.png`
- **Interaction model:** static links

## DOM Structure
```
footer (bg #0A2633 dark navy, color white, pt 64px pb 32px)
  div.footer-grid (display grid, grid-template-columns: 1fr 3fr, gap 48px, max-w 1400px, mx auto, px 24px)

    [Left: App Card]
    div.app-card (bg rgba(255,255,255,0.06) dark card, borderRadius 16px, p 32px, display flex, flex-col, gap 24px)
      p.eyebrow "Download the free Hims app"
      h2 "Total care." + br + "Totally different."
      div.app-download (display flex, gap 16px, align-items center)
        div.download-btn (bg rgba(255,255,255,0.1), borderRadius 12px, p 16px 20px, display flex, flex-col)
          p.label "Download"
          p "the app"
        img.qr (QR code image, h 56px, w 56px)
      p.sub "For iOS and Android"
      img.phone-mockup (phone with doctor photo, h 240px, object-fit contain, mt auto)

    [Right: Nav Links + Social]
    div.nav-columns (display grid, grid-template-columns: repeat(3, 1fr), gap 32px)
      [Column 1: Learn + Tools]
      div
        p.col-header "Learn"
        nav (flex col, gap 12px)
          a "Labs", "Weight Loss", "Sexual Health", "Testosterone", "Hair Regrowth", "Mental Health", "Drug Comparisons", "Drugs & Medications", "About the Company"
        p.col-header.mt-8 "Tools"
        nav
          a "BMI Calculator", "TDEE Calculator", "Calorie Deficit Calculator", "Protein Calculator", "Water Intake Calculator"
      [Column 2: Popular]
      div
        p.col-header "Popular"
        nav
          a "GLP-1 Injections"
          div a "Sildenafil" + p.sub "Generic for Viagra®"
          div a "Cialis®"
          div a "Tadalafil" + p.sub "Generic for Cialis®"
          a "Minoxidil Solution", "Finasteride Pills", "Topical Finasteride", "Sertraline for PE"
          div a "Sertraline" + p.sub "Generic for Zoloft®"
          div a "Escitalopram" + p.sub "Generic for Lexapro®"
      [Column 3: Hims + Careers + Connect]
      div
        p.col-header "Hims"
        nav
          a "About Us", "Good Health (It's our blog)", "How It Works", "Clinical Excellence", "Innovation", "Quality & Safety", "Hims Benefits", "Editorial Standards", "FAQs", "Investors"
        p.col-header.mt-8 "Careers"
        nav a "Professionals", "Providers"
        p.col-header.mt-8 "Connect"
        nav a "Customer Help Center", "Press Center"

  [Social Row]
  div.social-row (display flex, gap 16px, px 24px, mt 32px, max-w 1400px, mx auto)
    a[href=facebook] div.social-icon (circle dark bg, svg)
    a[href=twitter] div.social-icon
    a[href=instagram] div.social-icon
    a[href=tiktok] div.social-icon

  [Hers Cross-link]
  div.hers-card (position absolute right px-24, bg rgba(255,255,255,0.08), borderRadius 12px, p 12px 16px, display flex, gap 12px, align-items center)
    img (hers logo, round, 36px)
    div
      p.bold "hers"
      p.muted "visit forhers.com"
    svg.external-link

  [Legal Row]
  div.legal (px 24px mt 32px)
    div.legal-links (display flex, flex-wrap, gap 8px 24px)
      a "Terms & conditions", "Privacy policy", "Sitemap", "Telehealth Consent & Open Payments", "Consumer Health Data Privacy Policy"
    p "Your privacy choices"
    p.copyright "© 2026 Hims & Hers Health, Inc. All rights reserved. HIMS, HERS, H, and HIMS & HERS are trademarks of Hims, Inc."

section.footer-logo-watermark (bg black, overflow hidden)
  h2 "hims" (giant watermark text, color rgba(255,255,255,0.05) very faint, font-size ~400px)
```

## Computed Styles

### Footer
- backgroundColor: rgb(10, 38, 51) = #0A2633
- color: rgb(255, 255, 255)
- paddingTop: 64px

### Column Header
- fontSize: 12px
- fontWeight: 500
- color: rgba(255,255,255,0.44)
- textTransform: uppercase
- letterSpacing: 0.08em
- marginBottom: 16px

### Nav Links
- fontSize: 16px
- color: rgb(255, 255, 255)
- lineHeight: 1.4
- marginBottom: 12px
- hover: underline

### Sub-text (Generic for...)
- fontSize: 12px
- color: rgba(255,255,255,0.44)
- marginTop: -8px

### Social Icon Container
- width: 40px; height: 40px
- borderRadius: 50%
- backgroundColor: rgba(255,255,255,0.1)
- display: flex; alignItems: center; justifyContent: center

### Legal Links
- fontSize: 12px
- color: rgba(255,255,255,0.44)

### Copyright
- fontSize: 12px
- color: rgba(255,255,255,0.3)

### App Card
- backgroundColor: rgba(255,255,255,0.06)
- borderRadius: 16px

### App Card H2
- fontSize: ~32px
- fontWeight: 400
- color: white

## Assets
- Phone mockup: `public/images/footer-phone-mockup.webp`
- QR code: `public/images/footer-qr.webp` (or just placeholder)
- Hers logo: image from footer

## Responsive Behavior
- **Desktop**: 1/3 app card + 2/3 nav grid
- **Mobile**: stacked, app card full width, nav columns stack
