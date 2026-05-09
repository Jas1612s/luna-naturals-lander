# GlobalNav Specification

## Overview
- **Target file:** `src/components/GlobalNav.tsx`
- **Screenshot:** `docs/design-references/global-nav.png`
- **Interaction model:** scroll-driven (bg change) + click (login, menu)

## DOM Structure
```
nav (fixed, z-index 701, full width)
  div.nav-inner (flex row, space-between, height 48px, px 24px)
    a[href="/"] div.logo-wrapper
      svg (hims wordmark, 69.75px × 24px)
    div.nav-right (flex row, gap 16px, align center)
      a.login "Log in"
      button.hamburger
        svg (menu/hamburger icon, 3 lines)
```

## Computed Styles

### Nav Outer
- position: fixed
- top: 0 (but pushed down by announcement bar height via CSS var)
- width: 100%
- zIndex: 701
- backgroundColor: rgba(0, 0, 0, 0) → transitions to white on scroll
- height: 48px (--global-nav-header-row-height: 3rem)
- transition: background-color 0.2s ease

### Nav Inner
- display: flex
- justifyContent: space-between
- alignItems: center
- padding: 0 24px
- height: 48px
- maxWidth: 100%

### Logo SVG
- width: 69.75px
- height: 24px
- fill: currently dark (rgba(0,0,0,0.88)) because hero bg is white
- Use the HimsLogo SVG from src/components/icons.tsx

### Login Link
- color: rgba(0, 0, 0, 0.88)
- fontSize: 16px
- fontWeight: 400
- no border/bg (text link)

### Hamburger Button
- display: flex
- padding: 4px
- cursor: pointer
- Icon: 3 horizontal lines (SVG)

## States & Behaviors

### Scroll Transform
- **Trigger**: window.scrollY > 44 (past announcement bar)
- **State A (top)**: backgroundColor: transparent
- **State B (scrolled)**: backgroundColor: rgb(255, 255, 255), boxShadow: 0 1px 4px rgba(0,0,0,0.1)
- **Transition**: background-color 0.3s ease, box-shadow 0.3s ease
- **Implementation**: useEffect + scroll listener toggling `scrolled` class

## Assets
- Logo: HimsLogo SVG component from `src/components/icons.tsx`
- Hamburger: inline SVG (3 horizontal lines)

## Text Content
- "Log in"

## Responsive Behavior
- **Desktop (1440px)**: logo left, "Log in" + hamburger right
- **Mobile (390px)**: logo left, hamburger right only (Log in may hide)
