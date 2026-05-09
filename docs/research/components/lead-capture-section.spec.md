# LeadCaptureSection Specification

## Overview
- **Target file:** `src/components/LeadCaptureSection.tsx`
- **Screenshot:** `docs/design-references/lead-capture.png`
- **Interaction model:** form submission (email)

## DOM Structure
```
section.lead-capture (bg light grey/tan, display flex, full width)
  div.left-col (w 40%, p 48px 64px)
    h2 "Unlock the free Guide to Protein for Weight Loss"
    p.sub "Written by board-certified doctors to support your journey."
    form
      input[type=email] placeholder="Email"
      button[type=submit] "Get the guide"
    p.legal "By creating an account using email, I agree to the " + a "Terms & Conditions" + ", and acknowledge the " + a "Privacy Policy" + "."
  div.right-col (w 60%, relative overflow hidden)
    img (man in tan/cream knit sweater, close-cropped headshot)
```

## Computed Styles

### Section
- backgroundColor: rgb(220, 210, 195) or similar warm grey-tan
- display: flex
- minHeight: 400px

### Left Column
- padding: 48px 64px
- display: flex
- flexDirection: column
- justifyContent: center
- color: rgb(255, 255, 255)

### H2
- fontSize: ~40px
- fontWeight: 400
- color: rgb(255, 255, 255)
- lineHeight: 1.2
- marginBottom: 16px

### Subtitle
- fontSize: 16px
- color: rgba(255,255,255,0.8)
- marginBottom: 32px

### Email Input
- width: 100%
- padding: 14px 20px
- borderRadius: 100px
- border: 1px solid rgba(255,255,255,0.3)
- backgroundColor: rgba(255,255,255,0.15)
- color: white
- fontSize: 16px
- marginBottom: 12px
- placeholder color: rgba(255,255,255,0.6)

### Submit Button
- backgroundColor: rgba(0,0,0,0.88)
- color: white
- borderRadius: 100px
- width: 100%
- padding: 14px 20px
- fontSize: 16px
- fontWeight: 500
- cursor: pointer

### Legal Text
- fontSize: 11px
- color: rgba(255,255,255,0.6)
- marginTop: 12px
- lineHeight: 1.4

### Right Column / Image
- objectFit: cover
- height: 100%
- width: 100%

## Text Content (verbatim)
- H2: "Unlock the free Guide to Protein for Weight Loss"
- Sub: "Written by board-certified doctors to support your journey."
- Input: placeholder "Email"
- Button: "Get the guide"
- Legal: "By creating an account using email, I agree to the Terms & Conditions, and acknowledge the Privacy Policy."

## Responsive Behavior
- **Desktop**: 40/60 left/right split
- **Mobile**: stacks (form on top, image below or hidden)
