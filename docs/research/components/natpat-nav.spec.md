# NatPatNav Specification

## Overview
- **Target file:** `src/components/natpat/NatPatNav.tsx`
- **Interaction model:** Static nav bar, sticky at top. Mobile: hamburger drawer. Desktop: horizontal nav with mega dropdowns.
- **No scroll behavior changes** (stays as-is on scroll)

## Visual Description
White background nav bar. Left: Logo (NATPAT wordmark in teal/green). Center/Right desktop: nav links. Right icons: search, account, cart.
On mobile: hamburger menu icon left, logo center, cart right.

## DOM Structure
```
<header> (sticky top-0, z-50, white bg, bottom border)
  <div> (utility bar - announcement / country selector - minimal, can be omitted)
  <div> (main header - page-width, flex, space-between)
    <button> (hamburger, mobile only)
    <a href="/natpat"> (logo image)
    <nav> (desktop nav links - hidden on mobile)
      <ul>
        <li>Shop (dropdown trigger)
        <li>About (dropdown trigger)
        <li>Reviews
        <li>Learn
        <li>Help (dropdown trigger)
        <li>Wholesale (dropdown trigger)
    <div> (icons: search, account, cart)
```

## Computed Styles (exact values)

### Header wrapper
- position: sticky
- top: 0
- z-index: 50
- background-color: #ffffff
- border-bottom: 1px solid #e5e7eb
- width: 100%

### Inner container
- display: flex
- align-items: center
- justify-content: space-between
- padding: 0 24px
- height: 64px
- max-width: 1280px
- margin: 0 auto

### Logo image
- height: 36px (mobile: 32px)
- width: auto

### Nav links (desktop)
- display: flex (mobile: display none)
- gap: 32px
- font-family: Barlow, sans-serif
- font-size: 15px
- font-weight: 600
- color: #1F1F5B (midnight)
- cursor: pointer

### Nav link hover
- color: #1F4FC9

### Icon buttons (search, account, cart)
- display: flex
- align-items: center
- gap: 16px
- color: #1F1F5B

### Cart icon - shows count badge
- position: relative
- badge: 12px circle, background #FF209E, white text, font-size 10px

## Assets
- Logo: `/images/natpat/logo.svg`

## Text Content (nav links)
Desktop nav:
- Shop → /natpat/collections/homepage
- About → /natpat/pages/about-us
- Reviews → /natpat/reviews
- Learn → /natpat/learn
- Help → /natpat/help
- Wholesale → /natpat/wholesale

Shop submenu:
- Shop All → /natpat/collections/homepage
- Outdoor Protection → /natpat/collections/outdoor-protection
- Wellness & Cognitive → /natpat/collections/wellness-cognitive
- Pets → /natpat/collections/pets
- Respiratory & Allergy Relief → /natpat/collections/respiratory-allergy-relief
- Gifts & Swag → /natpat/collections/swag
- Bundle and Save → /natpat/collections/bundles
- Build Your Own → /natpat/pages/bundle-builder
- Where to Buy → /natpat/pages/store-locator

## Responsive Behavior
- **Desktop (768px+):** Full horizontal nav visible, hamburger hidden
- **Mobile (<768px):** Hamburger icon visible, nav links hidden, logo centered

## Notes
- The mobile drawer can be a simple slide-in from left with the Shop/About/Help/Wholesale links
- Keep it functional but simple - the mega menu images are complex, use a simpler list-based dropdown
- Use `'use client'` for mobile drawer state
