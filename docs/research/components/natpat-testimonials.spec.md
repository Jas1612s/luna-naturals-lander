# NatPatTestimonials Specification

## Overview
- **Target file:** `src/components/natpat/NatPatTestimonials.tsx`
- **Interaction model:** Mobile: click-driven carousel (dot navigation). Desktop: 3-column grid with previous/next pagination (shows 6 at a time, 3 pages).
- **`'use client'`** required for carousel

## Visual Description
White/light background. At top: Trustpilot-style review image. "Trusted by over 1 million customers" heading.
Below: Review cards in carousel/grid layout.
Below that: "We're in the news... for good reasons." section (the news section is combined in same section on mobile).

## DOM Structure
```
<section>
  <img trustpilot>  (max-width: 390px, centered)
  <p> "Trusted by over 1 million customers"
  <div reviews-grid>  (desktop: 3x2 grid with pagination / mobile: single card carousel)
```

## Review Data (9 reviews, 3 pages x 3)
```typescript
const reviews = [
  {
    product: 'SleepyPatch for Kids',
    text: "Helps My asd child!! My son is 8 and struggles to fall asleep. He is autistic so I guess This can be normal. Well tried melatonin and yes it works but idk not a fan. Tried these and wow work great and as routines work for him using this daily works!! Bought many times so far and will keep purchasing. Thank you for making these. Even got the adult ones. And they help me If I need it.",
    stars: 5,
  },
  {
    product: 'SleepyPatch for Kids',
    text: "I was sceptical but 4 weeks in: LIFE-CHANGING. Our 2 year old was really sporadical in his sleep, a week or so of sleeping through, and then months on end of being up at least once a night, settling only after yet more milk and us losing between 2-3 hours of sleep a night. I bought these on a whim and the first night he was still up, but since that we've only had one night where he hasn't slept for 11 hours...",
    stars: 5,
  },
  {
    product: 'ZenPatch - Mood Calming Patches',
    text: "This is the third day I've put one on my little boy's shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he's a happy, calm, playful little dude.",
    stars: 5,
  },
  {
    product: 'ZenPatch - Mood Calming Patches',
    text: "Mood calming patches. My son has been wearing them since January. They have helped him so much. Obviously he still has bad days but not like before we used them. He is even aware if he doesn't wear one it affects him negatively.",
    stars: 5,
  },
  {
    product: 'Mosquito Patches for Kids',
    text: "Best purchase ever too bad I waited so long but now we're stocked and loyal customers. we use the buzz patches for the whole family now after buying them for my 8 month old. they work like magic and we love in swampy hot climate perfect recipe for bugs especially mosquitoes.",
    stars: 5,
  },
  {
    product: 'Mosquito Patches for Kids',
    text: "Works better than bug sprays! The patches worked better than expected. Bug sprays rarely work for me. I shared with other adults and we had a good chuckle about which fun designs to use.",
    stars: 5,
  },
  {
    product: 'MagicPatch Itch Relief Patches',
    text: "These are great for helping with the itch from mosquito bites. I gave the product 4 stars because they don't always work. Both my son and I found that sometimes the patches are very effective and sometimes they don't do anything. If you have one that doesn't do anything I found trying another patch to work.",
    stars: 5,
  },
  {
    product: 'FocusPatch - Focus Enhancing Stickers',
    text: "This product has really helped my son. We are going through a ADHD Assessment and I really do not want to medicate him if I can get away with it. His teacher have said they have seen a 60% improvement which is a big improvement for him.",
    stars: 5,
  },
  {
    product: 'StuffyPatch - Congestion Relief Patch',
    text: "I got the StuffyPatch for my 7-year-old son who often wakes up with a congested nose. We put the patch on his pillowcase, and it worked wonders! Not only did it help him breathe easier, but it also allowed for a full night of uninterrupted sleep for the whole family.",
    stars: 5,
  },
];
```

## Computed Styles

### Section container
- padding: 0 20px (mobile) / 0 (desktop)

### Trustpilot image
- width: 100%
- max-width: 390px
- margin: 0 auto
- display: block
- padding: 12px

### "Trusted by" heading
- font-family: Urbane, Barlow 900 (fallback)
- font-size: 22px (mobile) / 34px (desktop)
- font-weight: 900
- line-height: 34px
- color: #1F4FC9
- text-align: center (desktop) / left (mobile - max-width 327px, margin auto, padding-inline 15px)
- margin: 10px 0

### Review card
- background: #F5F5F5
- border-radius: 15px
- padding: 30px
- text-align: left

### Review card title (h3)
- font-family: Barlow, sans-serif
- font-size: 20px
- font-weight: 600
- line-height: 30px
- color: #1F1F5B

### Review card body text
- font-family: Barlow, sans-serif
- font-size: 16px (mobile) / 18px (desktop)
- font-weight: 400
- line-height: 22px
- color: #333 (dark)
- display: -webkit-box
- -webkit-line-clamp: 5
- -webkit-box-orient: vertical
- overflow: hidden

### "Read more" link
- font-size: 16px
- font-weight: 500
- text-decoration: underline
- color: #616267
- margin: 10px 0
- cursor: pointer
- (clicking expands the review - toggle clamped state)

### Stars image
- width: auto

### Mobile carousel
- max-width: 450px
- margin: 0 auto
- Single card shown, dots below
- Swipe/dot navigation

### Desktop grid
- max-width: 1180px
- margin: 0 auto 50px
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 40px
- Shows 6 cards per page (3x2), with prev/next navigation

### Desktop pagination arrows
- display: flex
- justify-content: center
- gap: 40px
- margin-top: 15px
- arrows are text-style (← ›) or small chevron icons

## Assets
- Trustpilot image: `/images/natpat/reviews-trustpilot.jpg`
- Stars: `/images/natpat/green-5-star.png` (reuse per card)

## Responsive
- **Mobile (<769px):** Single card carousel with dots
- **Desktop (769px+):** 3-column grid, 6 reviews visible, prev/next dots to page through

## Notes
- Stars image should be `alt="5 stars"` / use 5 yellow stars or the provided green-5-star.png
- On mobile only 1 review shows at a time in carousel
- "Read more" expands truncated text (toggle clamp)
