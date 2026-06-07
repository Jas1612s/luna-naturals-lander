# HiStripsFooter Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsFooter.tsx`
- **Interaction model:** static (newsletter form is just UI mock)

## DOM Structure
1. Newsletter section (cream background) — heading, sub-text, email input + submit
2. Footer proper (dark background #0f1115) — logo, links, social icons, legal

## Computed Styles

### Newsletter Section
- background: #f5f3ef
- padding: 60px 20px
- textAlign: center

### Newsletter heading
- fontSize: 32px, fontWeight: 700, letterSpacing: -1px, color: #1c1c1c, marginBottom: 12px
- Text: "Stay in the loop"

### Newsletter sub-text
- fontSize: 15px, color: #666, maxWidth: 420px, margin: 0 auto 28px, lineHeight: 1.5
- Text: "Sign up to unlock first-access offers and science-led breathing insights. From elite sleep tips to expert-backed breathing strategies, straight to your inbox."

### Email form
- display: flex, gap: 0, maxWidth: 400px, margin: 0 auto
- Input: flex: 1, height: 48px, padding: 0 16px, border: 1px solid #E4E3E1, borderRadius: 30px 0 0 30px, fontSize: 14px, outline: none
- Button: "Submit" — background: #1c1c1c, color: #fff, padding: 0 24px, borderRadius: 0 30px 30px 0, fontSize: 14px, fontWeight: 600, border: none, cursor: pointer

### Footer proper
- background: #0f1115
- color: rgba(255,255,255,0.7)
- padding: 48px 20px 24px

### Footer inner
- maxWidth: 1200px, margin: 0 auto
- display: flex, flexWrap: wrap, gap: 40px, justifyContent: space-between

### Footer logo
- src: `/images/histrips/footer-logo.svg`
- width: 120px, marginBottom: 12px

### Footer tagline
- "// Stay Limitless"
- fontSize: 13px, color: rgba(255,255,255,0.5)

### Footer links column
- display: flex, flexDirection: column, gap: 10px
- Each link: fontSize: 14px, color: rgba(255,255,255,0.7), textDecoration: none
- hover: color: #ffffff

### Footer link groups
**Products:** Nasal Strips, Sleep Mask, Mouth Tape
**Company:** Our Story, Store Locator, Support

### Footer bottom bar
- borderTop: 1px solid rgba(255,255,255,0.1)
- marginTop: 40px, paddingTop: 20px
- display: flex, justifyContent: space-between, alignItems: center
- fontSize: 12px, color: rgba(255,255,255,0.4)

### Bottom left text
- "HiStrips. // Stay Limitless LLC 228 Park Ave S PMB 43559 New York, New York 10003-1502"
- "Our only support e-mail is: support@histrips.com"

### Social icons (in footer)
- display: flex, gap: 16px
- Instagram, TikTok (SVG icons)
- 20x20px, color: rgba(255,255,255,0.6)

## Responsive Behavior
- **Desktop:** flex row with multiple columns
- **Mobile:** stacked single column
