# HiStripsInfluencerMarquee Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsInfluencerMarquee.tsx`
- **Interaction model:** time-driven (auto-scrolling left, infinite loop)

## DOM Structure
- Full-width strip, white background
- Infinite horizontal marquee of athlete cards
- Each card: avatar photo + name (with verified checkmark after-element) + role/designation

## Computed Styles

### Section wrapper
- width: 100%
- overflow: hidden
- padding: 20px 0
- background: #ffffff
- position: relative
- borderTop: 1px solid #E4E3E1
- borderBottom: 1px solid #E4E3E1

### Marquee track
- display: flex
- width: max-content
- animation: scroll 30s linear infinite
- @keyframes scroll: translateX(0) → translateX(-50%)
- (content duplicated to create seamless loop)

### Each influencer item
- display: flex
- alignItems: center
- gap: 8px
- padding: 0 25px
- whiteSpace: nowrap

### Avatar
- width: 35px, height: 35px
- borderRadius: 50%
- objectFit: cover

### Name
- fontWeight: 700
- fontSize: 17px
- lineHeight: 1.2
- letterSpacing: -0.7px
- display: inline-flex, alignItems: center
- After element: 15x15px verified badge icon (blue checkmark)
  - background-image: url('/images/histrips/icons/verified.svg')
  - marginLeft: 6px

### Designation
- fontSize: 11px
- color: #009BF1 (blue)

## Athletes Data (duplicated for seamless loop)
| avatar | name | designation |
|--------|------|-------------|
| `/images/histrips/athletes/one.png` | bensmithlive | Best Seller Author |
| `/images/histrips/athletes/pablo.png` | pablo | Health Coach |
| `/images/histrips/athletes/alca.png` | carlitosalcarazz | Tennis Player |
| `/images/histrips/athletes/bryan.png` | brianwallack | Gym Coach |
| `/images/histrips/athletes/gadio.png` | afonsogaidao | Hyrox Athlete |
| `/images/histrips/athletes/ibali.png` | ibaillanos | Streamer & Creator |
| `/images/histrips/athletes/image1.png` | Jaume Masià | Moto 3 World Champion |
| `/images/histrips/athletes/fermin.png` | Fermin Aldeguer | MotoGP rider for GRESINI |
| `/images/histrips/athletes/jua.png` | juanlebron | Pro Padel Player |
| `/images/histrips/athletes/lebron.png` | Teamvisma | World Tour Cycling Team |

## Responsive Behavior
- **Desktop:** fontSize: 17px
- **Mobile (< 990px):** fontSize: 15px, padding: 0 15px per item
