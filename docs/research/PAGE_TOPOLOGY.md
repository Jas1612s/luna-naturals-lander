# MEDVi (home.medvi.org) Page Topology

## Page URL: https://home.medvi.org/

## Overall Structure
- Fixed/sticky nav (transparent → white on scroll)
- Single-page scroll with anchor links to each section
- Framer-generated site (class names framer-*)
- No scroll-snap, no smooth scroll library detected

## Sections (top to bottom)

| # | Name | Component | BG Color |
|---|------|-----------|----------|
| 0 | MedviNav | MedviNav.tsx | transparent → white |
| 1 | Hero | HeroSection.tsx | gradient(166deg, #1B6549, #112111) |
| 2 | Weight Loss | WeightLossSection.tsx | rgb(241,245,233) sage |
| 3 | Women's Health | WomensHealthSection.tsx | rgb(242,230,236) pink |
| 4 | MEDVi Meals | MealsSection.tsx | rgb(250,249,247) warm |
| 5 | Supplements | SupplementsSection.tsx | rgb(228,236,242) blue |
| 6 | Men's Health | MensHealthSection.tsx | rgb(232,224,220) beige |
| 7 | Peptides & Longevity | PeptidesSection.tsx | rgb(241,245,233) sage |
| 8 | Hair Restoration | HairSection.tsx | rgb(242,230,236) pink |
| 9 | Skincare | SkincareSection.tsx | rgb(250,249,247) warm |
| 10 | Support & Coaching | SupportSection.tsx | rgb(250,250,250) white |
| 11 | Testimonials | TestimonialsSection.tsx | rgb(241,245,233) sage |
| 12 | Guarantee Bar | GuaranteeBar.tsx | gradient green |
| 13 | Footer | MedviFooter.tsx | rgb(17,33,17) dark |

## Product Section Pattern
All product sections (2–9) share the same layout:
- 2-column grid (text left + illustration right, alternating)
- Badge eyebrow → H2 → optional subtitle → body → feature bullets → CTA
- Blob radial gradient decorations in corners
- "Coming Soon" CTA for: Women's Health, Supplements, Peptides, Hair, Skincare
- "Get Started" CTA for: Weight Loss, Meals, Men's Health

## Nav Behavior
- At scroll 0: transparent bg, white logo text + white nav links
- After scroll > 10px: white bg (97% opacity + blur), dark logo + dark links
- INTERACTION MODEL: scroll-driven CSS transition (useEffect + scroll listener)

## Hero Detail
- Full viewport height, dark green gradient
- Badge: "100% Online Healthcare"
- H1: "Healthcare, redefined for real life."
- Subhead: "We provide medical care online—simple, direct..."
- Trust pillars: Licensed Medical Providers | 100% Online | Clear pricing | Shipped to your door
- CTAs: "Get Started" (primary) + "See our programs" (ghost)

## Footer Detail
- Logo + brand description + contact (email, phone, address)
- Programs link list
- Pharmacy Partners: Triad Rx (AL), RedRock Pharmacy (UT), Beaker Pharmacy (TX)
- Start Today CTA column
- Legal links bar
- Giant "MEDVi" watermark text
