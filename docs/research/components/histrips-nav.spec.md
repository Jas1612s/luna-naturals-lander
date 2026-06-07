# HiStripsNav Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsNav.tsx`
- **Interaction model:** scroll-driven (header transparency/shadow changes on scroll) + click-driven (mobile menu)

## DOM Structure
1. Announcement bar (above nav) — scrolling marquee with 4 messages
2. Sticky `<header>` — logo left, nav links center, icons right

## Computed Styles

### Announcement Bar
- background: #000000 (black)
- color: #ffffff
- fontSize: 13px
- fontWeight: 400
- padding: 10px 0
- overflow: hidden
- position: relative

### Marquee messages (cycling via CSS animation)
- gap between items: 60px (padding: 0 30px each side)
- animation: scroll left continuously, 20s linear infinite

### Header Container
- position: sticky
- top: 0
- z-index: 10
- background: #ffffff
- borderBottom: 1px solid #E4E3E1
- padding: 0 20px
- height: 60px
- display: flex
- alignItems: center
- justifyContent: space-between
- maxWidth: 1440px per side (full-width with inner max-width)

### Logo
- src: `/images/histrips/logo.svg`
- width: 100px (auto height)

### Nav Links (desktop)
- display: flex
- gap: 32px
- fontSize: 14px
- fontWeight: 500
- color: #1c1c1c
- Items: "Our Story", "Store Locator", "Support"

### Right icons
- Cart icon (SVG), search icon
- "NEW INFRARED LIGHT" pill badge — gradient background #FF3492→#DD33ED, white text, 11px, border-radius: 20px, padding: 4px 10px

## States & Behaviors

### Scroll behavior
- **Trigger:** scroll position > 0
- **State A:** boxShadow: none
- **State B:** boxShadow: 0 2px 8px rgba(0,0,0,0.08)
- **Transition:** transition: box-shadow 0.3s ease

### Mobile (< 768px)
- Logo centered
- Hamburger menu icon replaces nav links
- Nav links hidden behind drawer

## Announcement Bar Content (4 messages, cycling marquee)
1. "+ FREE Fast Shipping Over 50$"
2. "30-day money-back guarantee"
3. "1,000,000+ Happy Customers"
4. "Doctor Recommended. Champion Approved."

## Assets
- Logo: `/images/histrips/logo.svg`

## Responsive Behavior
- **Desktop (1440px):** full nav with all links visible
- **Mobile (390px):** hamburger, logo centered
- **Breakpoint:** ~768px
