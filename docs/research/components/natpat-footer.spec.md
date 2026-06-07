# NatPatFooter Specification

## Overview
- **Target file:** `src/components/natpat/NatPatFooter.tsx`
- **Interaction model:** Static. Email newsletter form (no real submit needed).
- **Includes:** HealthWellness section + Footer wave image + actual footer

## Health and Wellness Section (also in this file)
Before the footer proper, there's a brief SEO text section:

### Visual
Heading "Health and wellness patches" (blue, centered).
Text paragraph (one on mobile, repeated differently on desktop).
Two-column layout: text on right, image on left (desktop), just image then text (mobile).

### Text content
H2: "Health and wellness patches"

P: "NATPAT stands as a beacon of innovation in the realm of health and wellness, offering a unique range of patches and stickers designed to enhance your daily life. Each product is crafted with care, ensuring a natural, effective solution to various everyday challenges."

P2 (desktop): Same paragraph repeated. Then links paragraph:
"For those seeking tranquility in their hectic lives, NATPAT's calming patches and calming stickers offer a soothing escape. The uv stickers are a must-have for sun lovers, providing a smart way to monitor UV exposure. When congestion hits, the stuffy patch is an excellent ally, helping to alleviate discomfort.
Parents will appreciate the gentle effectiveness of the sleepy patch for kids, ensuring a peaceful night for the little ones. For adults, the sleep patch for adults offers a similar benefit, promoting restful sleep. The itch patch is a quick solution for those annoying itches, while the bug bite patches provide relief from insect bites."

### Styles
- Section background: white
- H2: Urbane/Barlow 900, 20px (mobile) / 38px (desktop), color: #1F4FC9, text-align: left (mobile)
- Body text: Barlow, 16px, 500, line-height: 22px, color: #1F1F5B
- Links in text: color: #1F4FC9, text-decoration: underline
- Image (desktop): width 552px / mobile: full-bleed (width: calc(100% + 48px), margin-left: -24px)

### Assets
- Desktop cover: `/images/natpat/health-wellness-cover-ds.png` (hidden on mobile)
- Mobile cover: `/images/natpat/health-wellness-cover-mb.png` (hidden on desktop)

---

## Footer Wave (transition from body to footer)
- On desktop: `/images/natpat/footer-gray-wave.png` — gray wave image, margin-bottom: -40px (overlaps into footer)
- On mobile: `/images/natpat/footer-dark-wave-mb.png` — dark wave (transitions to dark blue footer background on mobile)
- Mobile footer background: #263645 (dark blue-gray), padding-top: 17px
- Desktop footer background: #F0F0F4 (light gray)

---

## Footer DOM Structure
```
<footer>
  <wave image>
  <div class="footer-grid">
    <div class="newsletter-col">
      <h3>Join The NATPAT Fam</h3>
      <p>Get first access to offers & more in our newsletter.</p>
      <p>Got a question? Contact <a>care@natpat.com</a></p>
      <form>
        <input type="email" placeholder="Email address">
        <button type="submit">→</button>
      </form>
    <div class="links-grid"> (4 link columns on desktop)
      <col> Help: Contact us, FAQs, Shipping, Order Tracking, Returns & Exchanges, Terms of Service, Privacy Policy
      <col> About: Our Story, Affiliates, Become an Ambassador, Press, Sitemap, Reviews
      <col> Retail: Find In-store, Become a Retailer, You Sell We Ship
      <col> Shop All Natural: Outdoor Protection, Mind and Body, Wellness Patches, Allergy Relief Patches, Bundle and Save, Build Your Own, Shop All
    <div class="social-row">
      Follow Us: Twitter, Facebook, Instagram, TikTok, YouTube
    <div class="payment-row">
      Payment: Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, Shop Pay, Visa
    <div class="copyright">
      © 2026, NATPAT
```

## Computed Styles

### Footer container
- Desktop background: #F0F0F4
- Mobile background: #263645 (dark blue-gray)
- padding-top: 0 (desktop) / 17px (mobile)
- border-top: none

### Newsletter section
- font-family: Barlow, sans-serif
- H3: font-size: 20px (mobile) / 24px (desktop), font-weight: 700, color: #1F1F5B (desktop) / #ffffff (mobile)

### Newsletter email input
- border: 1px solid #E5E5E5
- border-radius: 50px
- padding: 12px 20px
- font-family: Barlow
- font-size: 16px
- width: 100%

### Link columns
- H4 column title: font-size: 14px, font-weight: 700, text-transform: uppercase, color: #1F1F5B (desktop) / #9AABD5 (mobile)
- Links: font-size: 14px, font-weight: 500, color: #1F1F5B (desktop) / #D1D5DB (mobile)
- line-height: 28px

### Social icons
- display: flex, gap: 16px
- icon size: 20px x 20px
- color: #1F1F5B (desktop) / #ffffff (mobile)

### Payment row
- display: flex, flex-wrap: wrap, gap: 8px
- payment badge: height: 28px, background: #fff, border: 1px solid #E5E5E5, border-radius: 4px, padding: 4px 8px, font-size: 11px, font-weight: 600

### Copyright
- font-size: 12px, color: #9AABD5, text-align: center, margin-top: 24px

## Desktop layout
- Max-width: 1280px, margin: 0 auto, padding: 40px 24px
- Grid: newsletter (1 col) | links (3-4 cols) side by side
- OR: newsletter top full-width, then links 4-column grid below

## Mobile layout
- Single column
- All white/light text on dark background
- Newsletter form first, links collapsed/stacked below

## Social Icons (use Lucide or simple SVG)
- Twitter/X: X icon
- Facebook: Facebook icon
- Instagram: Instagram icon
- TikTok: TikTok (Music2 icon or custom SVG)
- YouTube: Youtube icon

## Payment Methods (text-based badges, no actual card icons needed)
- American Express, Apple Pay, Diners Club, Discover, Google Pay, Mastercard, Shop Pay, Visa

## Responsive
- **Desktop:** Light gray background, black text, 4-column link grid, newsletter on left or top
- **Mobile:** Dark navy background (#263645), white/gray text, single column, wave image is dark
