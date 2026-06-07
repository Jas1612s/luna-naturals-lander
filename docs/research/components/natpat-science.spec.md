# NatPatScience Specification

## Overview
- **Target file:** `src/components/natpat/NatPatScience.tsx`
- **Interaction model:** Static on mobile. Desktop has parallax background (fixed attachment) in the middle "natpat manifesto" section. UGC photo carousel.
- **`'use client'`** required for UGC carousel

## Visual Description (4 sub-sections)

### Sub-section 1: Science Text Boxes
Heading "Unlocking the science behind NATPAT patches" (blue).
Two gray curled boxes side by side (desktop) or stacked (mobile):
- Left box: has floating science illustration (test tube / lab image) at top right, gray curved background shape with text inside
- Right box: similar layout, science illustration on left, gray curved background

### Sub-section 2: Manifesto (white/parallax)
A wavy-masked section with:
- Desktop: paralax background image (fixed attachment)
- White box with NATPAT logo + italic quote text
- Below: text columns + UGC photo grid (desktop)
- Mobile: NATPAT logo box, long text paragraphs, yellow box quote at bottom

### Sub-section 3: Verified Buyer Reviews (blue wavy section)
Blue background (#93c3e9), scalloped/wavy top and bottom edges (CSS mask).
4 verified buyer review cards (photos + names + reviews).

### Sub-section 4: Image strips
On mobile: single scrollable carousel of product usage photos.
On desktop: this is hidden (it moves to inside the manifesto section).

## DOM Structure
```
<section id="scientifically">
  <div> (heading + two gray boxes)
  <div class="middle-sec"> (manifesto zone)
    <div class="natpat"> (parallax/white zone)
      <div class="white-box"> (NATPAT logo + quote)
    <div class="natpat-info"> (blue scalloped zone)
      <div class="natpat-info-row"> (flex row: text left + UGC carousel right)
    <div class="natpat-bottom"> (yellow box, mobile only)
    <div class="verified-main-container"> (light blue scalloped zone)
      <div id="verified-buyer-slide"> (4 review cards carousel)
  <div> (bottom image strip, mobile only)
```

## Text Content

### Section heading
"Unlocking the science behind NATPAT patches"

### Left text box
"At NATPAT, skepticism is a sign of care, especially when it comes to products for our loved ones. That's why we're not just about promises; we're about proving. Our mission is to blend playful innovation with solid science, offering you peace of mind with every NATPAT patch. From natural essential oils to cutting-edge slow-release technology, every detail of NATPAT patches is meticulously planned to ensure safety, avoid allergies, and deliver measurable results."

### Right text box
"Discover the power of AromaWeave™, our pioneering bamboo-based fiber that's reshaping how we experience essential oils. With a commitment to sustainability and effectiveness, AromaWeave™ stands out with its biodegradable nature and unique ability to deliver consistent, long-lasting aromas. Join us as we delve into the science, sustainability, and sensory delight of AromaWeave™, and see how it's setting new standards in the world of aromatherapy."

### White box quote
'"At NATPAT, it\'s not just about products; it\'s about a way of life. We\'re here to bring you a kinder, more fun, and totally natural approach to feeling great. Join us in this journey towards a happier, healthier you!"'

### Natpat info text (4 paragraphs)
P1: "Hey there! At NATPAT, we're all about unlocking the superhero potential in every kiddo. We totally get it, right? Kids have their ups and downs, from mood swings that could rival any soap opera to those nights when they just won't hit the hay. And let's be honest, us parents could use a little help steering the ship sometimes."

P2: "In this fast-paced world where popping a pill seems like the go-to, we thought, 'Hey, why not take a step back and give Mother Nature a high five?' Sure, meds have their place (no shade there!), but why not start with something a bit more chill?"

P3: "Enter our secret weapon: stickers! But not just any stickers. These little guys are like a comforting hug from your favorite essential oils. They've been around for ages and trust us, they're not just old wives' tales. Science gives them a big thumbs up too!"

P4: "Next time you're wandering down those drugstore aisles, remember our mantra: 'Start with a sticker.' Our stickers are more than just a pretty face. They're packed with nature's goodness and are an absolute hit with the kids. It's like sneaking veggies into their favorite meal – they'll love them, and you'll love knowing you're choosing something gentle and effective."

### Yellow box quote
"At NATPAT, we're doing more than just selling something cool. We're all about bringing smiles, health, and a bit of nature's magic into your family's life. Here's to making well-being fun, natural, and full of joy! 🌿✨🌟"

## Computed Styles

### Section heading
- font-family: Urbane, Barlow 900
- font-size: 22px (mobile) / 38px (desktop, text-align: center, width: 70%, margin: 40px auto)
- color: #1F4FC9
- padding-inline: 15px (mobile)

### Gray text boxes container (behind-natpat-box)
- margin: 40px 0 (desktop)
- max-width: 1140px (desktop)
- margin: 0 auto (desktop)

### Left text box
- Mobile: background-image: url(/cdn-gray-box-curl-left.png)... → APPROXIMATE with just a gray background + border-radius
- Desktop: background url (gray square), aspect-ratio: 1, max-width: 552px, padding: 60px
- font-size: 22px (desktop) / 16px (mobile)
- font-weight: 500
- line-height: 30px (desktop)
- color: #1F1F5B (midnight)
- width: 75% (mobile) / 90% (desktop)
- position: relative (for the side illustration)

### Side illustration image (left box)
- Mobile: max-width: 141px, position: absolute, right: 0, top: 50%, transform: translateY(-50%)
- Desktop: max-width: 364px, transform: translateY(-65%)

### Right text box (mirror)
- Same as left but mirrored (margin-left: auto on desktop)
- Desktop: transform: translateY(50px) — slightly lower offset
- Side illustration: left side

### Manifesto section (.natpat)
- Desktop: uses CSS mask (radial gradient scalloped edges top + bottom) for wave effect
- Background: white (#ffffff)
- Before pseudo-element: parallax bg image (homepage-parallax-bg.jpg)
- padding: 60px 0 100px (mobile) / ... 350px bottom (desktop)
- margin-top: -50px (mobile) / -67px (desktop)
- For simplicity: use a white div with gentle wave-shaped top border

### White box (natpat quote)
- position: relative
- display: flex, justify-content: center, align-items: center
- NATPAT logo: max-width: 206px, absolute bottom: -90px (mobile) / -140px (desktop)
- Quote: position: absolute, width: 100%, padding: 30px, font-size: 20px (mobile) / 26px (desktop), font-weight: 700, line-height: 28px, color: #1F1F5B, text-align: center

### Natpat-info section
- Desktop: CSS mask (scalloped edges), background: white + before is #1F4FC9 (blue)
- margin-top: -100px (desktop)
- padding: 70px 24px

### Natpat-info row
- Desktop: max-width: 1140px, display: flex, flex-direction: row-reverse, gap: 80px, margin: 80px auto
- text column: width: 50%
- UGC carousel: width: 50%

### Text paragraphs
- font-family: Barlow
- font-size: 16px
- font-weight: 500
- line-height: 22px
- color: #1F1F5B
- padding: 7px 0

### Yellow quote box (mobile only)
- position: relative, display: flex, align-items: center
- img fills background (yellow curled shape)
- p overlaid: font-size: 16px, font-weight: 600, line-height: 22px, color: #ffffff, text-align: center, padding: 20px 24px

### Verified main container
- Desktop: CSS mask (scalloped top + bottom), background: #93c3e9 (light blue)
- padding: 70px 0 0 (mobile) / 100px 0 (desktop)
- margin-top: -50px (mobile) / -140px (desktop)

### Verified buyer cards
- max-width: 1140px (desktop), margin: 50px auto
- desktop: static display (all 4 visible in flex row? NO — they're a carousel on desktop too)
- Card: border: 1px solid #E0E4ED, border-radius: 15px, background: #ffffff, overflow: hidden
- Banner photo: width: 100%, height: ~200px, object-fit: cover
- Content area: padding: 20px, min-height: 405px
- Name (h4): font-size: 20px, font-weight: 600, color: #1F1F5B
- Body text: font-size: 16px (mobile) / 18px (desktop), font-weight: 400, line-height: 22px
- Verified badge: max-width: 125px, margin-top: 30px

## Verified Buyer Review Data
```typescript
const verifiedReviews = [
  {
    photo: '/images/natpat/review-megan.jpg',
    name: 'Megan Hilling',
    text: "I am so glad to have found this product/company. I have a newborn son who loves going on walks- which we do in the evening when it is cooler- which is also when the bugs come out. We have not had a single bug bite since we started using these stickers. The fact that it is chemical-free was a huge selling point for me. I highly recommend this product!",
  },
  {
    photo: '/images/natpat/review-carly.jpg',
    name: 'Carly Kool',
    text: "We use your product all the time, not just on our daughter but my husband and I use them too! It's so nice to be able to use a product that simply sticks on to an item of clothing instead of a cream or spray. Plus my daughter and I are, let's just say, very appealing to mosquitoes and will consistently get bites. When we are wearing buzz patches I never worry about bites, the most I have ever gotten is one bite!",
  },
  {
    photo: '/images/natpat/review-jacquelyn.jpg',
    name: 'Jacquelyn',
    text: "They worked! I had a bite on my wrist and used them and it really got rid of the itch, almost immediately. I put them all over my children when they were covered in mosquito bites and they did not scratch at all. Loved knowing that I wasn't putting chemicals on their gentle skin too.",
  },
  {
    photo: '/images/natpat/review-debora.jpg',
    name: 'Debora',
    text: "I LOVE ❤️ these stickers. I get bit all the time, even when using spray with deet! The little patches are like a miracle! Afternoon before last I had 7 patches on fresh bites! One was even on my face. They work wonders and keep me from whelping up and continuing to violently itch, as I usually do.",
  },
];
```

## UGC Photos (12 photos for carousel)
```typescript
const ugcPhotos = Array.from({length: 12}, (_, i) => `/images/natpat/ugc-${i+1}.jpg`);
```

## Bottom Product Image Strip
```typescript
const bottomPhotos = [
  '/images/natpat/bottom-slide-1.png',
  '/images/natpat/bottom-slide-2.png',
  '/images/natpat/bottom-slide-3.png',
  '/images/natpat/ugc-slide-1.jpg',
  '/images/natpat/ugc-slide-2.jpg',
  '/images/natpat/ugc-slide-3.jpg',
  '/images/natpat/ugc-slide-4.jpg',
  '/images/natpat/ugc-slide-5.jpg',
  '/images/natpat/ugc-slide-6.jpg',
];
```

## Assets
- Science side illustration 1 (desktop): `/images/natpat/science-side-1-ds.png`
- Science side illustration 2 (desktop): `/images/natpat/science-side-2-ds.png`
- Science side illustration 1 (mobile): `/images/natpat/science-side-1-mb.png`
- Science side illustration 2 (mobile): `/images/natpat/science-side-2-mb.png`
- NATPAT logo (white box): `/images/natpat/science-natpat-logo.png`
- White box image (mobile): `/images/natpat/science-white-box-mb.png`
- White box image (desktop): `/images/natpat/science-white-box-ds.png`
- Yellow box (mobile): `/images/natpat/science-yellow-box.png`
- Yellow box (desktop): `/images/natpat/science-yellow-box-ds.png`
- Purple decorative curl (bottom): `/images/natpat/science-purple-curl.png`
- Verified badge: `/images/natpat/verified-badge.png`

## Simplification Guidance
The complex CSS mask effects (scalloped/wavy edges) can be approximated using:
- For section dividers: a custom SVG wave or just gentle section breaks
- The parallax background: use background-attachment: fixed on desktop
- Prioritize getting the CONTENT right over pixel-perfect mask shapes

## Responsive
- **Mobile:** Science boxes stacked, natpat manifesto compressed, verified cards 1-at-a-time carousel, bottom image strip visible
- **Desktop:** Science boxes side-by-side, natpat info has text+UGC carousel in flex row, verified cards carousel with wider cards, bottom strip hidden
