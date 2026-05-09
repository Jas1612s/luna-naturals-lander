# hims.com Page Topology

## Page URL: https://www.hims.com/

## Overall Structure
- Fixed nav (z-index 701) overlays all content
- Announcement bar (44px) sits above nav in flow
- Single-page scroll, no snap points, no Lenis/Locomotive scroll
- Two autoplay/loop videos embedded in sections

## Sections (top to bottom)

| # | Name | Selector Class | Height | BG |
|---|------|---------------|--------|----|
| 0 | AnnouncementBar | `promo-bannerstyle__PromoBannerBackground` | 44px | `rgb(255, 198, 113)` |
| 1 | GlobalNav | `GlobalNavigationOuterWrapper` | fixed | transparent → white on scroll |
| 2 | HeroATF | `ATFWrapper` | ~805px | white |
| 3 | WeightLossSection | `wl-secton-nnstyle__WLSectionNnWrapper` | ~2711px | dark brown `rgb(57,46,37)` |
| 4 | TestosteroneSection | `homepage-frameutils__Section` | ~1272px | olive/cream gradient |
| 5 | LabsSection | `blood-hedge-sectioncomponentstyle__BloodHedgeSectionWrapper` | ~1976px | peach/copper |
| 6 | TrustSection | `truststyle__TrustRoot` | ~787px | white |
| 7 | LeadCaptureSection | `SECTION` | ~400px | light grey/tan |
| 8 | Footer | `footerstyle__FooterGrid` | ~971px | near-black `rgb(10,38,51)` |
| 9 | FooterLogo | `footerstyle__FooterLargeLogoWrapper` | ~535px | black |

## HeroATF Detail
- H1: "The care you've always deserved" (57px, weight 400, letter-spacing -3.5625px)
- **2 large featured cards** (side by side, 24px border-radius, ~678px × 199px each):
  - Card 1: dark overlay image (wegovy pen/pill), "Start your **weight loss today**" + "Find your Rx match"
  - Card 2: bg `rgb(154,109,42)`, graph image + man photo, "See how much **weight you can lose**" + "↓ Lose up to 25%*"
- **4 small category tiles** (cream bg `rgb(251,248,245)`, 24px border-radius, ~337px × 100px each):
  - "Have better **sex**" (sex = `rgb(78,121,158)`)
  - "Regrow **hair**" (hair = `rgb(138,58,52)`)
  - "Boost **testosterone**" (testosterone = `rgb(109,141,158)`)
  - "Get a **health check**" (health check = warm amber)

## WeightLoss Section Detail
- "Your weight loss **breakthrough is here**" (white + gold headline)
- Video: Hims_Sunlight_Rough_PillsPen_April_17_2026.mp4 (autoplay, loop, muted)
- "Lose up to 25% body weight with Wegovy®*, now with more options than ever." + "Get started" button
- "Access our wide GLP-1 lineup" – horizontal scroll cards: Wegovy Pill, Zepbound KwikPen, Foundayo, Wegovy Pen, Zep...
- "The perfect **SNAC**" + "See the science" | "Lose up to 25% body weight*" with "New high dose" badge
- Video: comprehensive-pill.mp4
- "Explore Wegovy® Pen" button

## Footer Detail
- Left card: "Download the free Hims app / **Total care. Totally different.**" + QR code + app icon + phone mockup
- Nav columns: Learn (Labs, Weight Loss, Sexual Health, Testosterone, Hair Regrowth, Mental Health, Drug Comparisons, Drugs & Medications, About the Company), Tools (BMI/TDEE/Calorie Deficit/Protein/Water Intake Calculators), Popular (GLP-1 Injections, Sildenafil, Cialis, Tadalafil, Minoxidil, Finasteride, Topical Finasteride, Sertraline for PE, Sertraline, Escitalopram), Hims (About Us, Good Health, How It Works, Clinical Excellence, Innovation, Quality & Safety, Hims Benefits, Editorial Standards, FAQs, Investors), Careers, Connect (Customer Help Center, Press Center)
- Social icons: Facebook, X, Instagram, TikTok
- "hers" cross-link card
- Legal: Terms & conditions, Privacy policy, Sitemap, Telehealth Consent & Open Payments, Consumer Health Data Privacy Policy, Your privacy choices
- Copyright: © 2026 Hims & Hers Health, Inc.
- Giant "hims" watermark text below footer

## Nav behavior on scroll
- At scroll 0: transparent bg, white logo + white Login text
- After scrolling past announcement bar: white bg, dark logo + dark Login text, subtle box-shadow
- INTERACTION MODEL: scroll-driven CSS transition
