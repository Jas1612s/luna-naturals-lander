# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/AnnouncementBar.tsx`
- **Screenshot:** `docs/design-references/announcement-bar.png`
- **Interaction model:** static (link click)

## DOM Structure
```
div.announcement-bar (full width, 44px height, centered content)
  div.bg-layer (absolute, fills parent, bg #FFC671)
  a (centered flex row)
    span "The GLP-1 pill is here."
    span.cta "Check it out →" (bold)
```

## Computed Styles

### Container
- height: 44px
- display: flex / align items center / justify center
- backgroundColor: rgb(255, 198, 113) = #FFC671
- padding: 12px 16px
- textAlign: center
- position: relative
- zIndex: above content, below nav

### Link / Text
- color: rgba(0, 0, 0, 0.88)
- fontFamily: sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif
- fontSize: 16px
- fontWeight: 400

### CTA "Check it out →"
- fontWeight: 600
- color: rgba(0, 0, 0, 0.88)
- Same font size

## Text Content (verbatim)
"The GLP-1 pill is here. **Check it out →**"

## Assets
- No images

## Responsive Behavior
- **Desktop**: full-width bar, centered text
- **Mobile**: same, may wrap
