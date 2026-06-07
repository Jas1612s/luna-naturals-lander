# HiStripsClinical Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsClinical.tsx`
- **Interaction model:** static

## DOM Structure
- Dark background (#0f1115) full-width section
- Centered heading
- White card with 3-column diagram (callouts left, center image/device, callouts right)
- 2 stat blocks below diagram
- CTA button + reference footnote

## Computed Styles

### Section wrapper
- background: #0f1115
- color: #ffffff

### Inner container
- padding: 60px 20px
- width: 100%, maxWidth: 1200px, margin: auto, textAlign: center

### Heading
- fontSize: 42px, fontWeight: 600, lineHeight: 1.1, letterSpacing: -1px
- maxWidth: 720px, margin: 0 auto 40px
- color: #ffffff

### White diagram card
- background: #ffffff
- color: #0f1115
- borderRadius: 28px
- padding: 40px 30px
- display: grid
- gridTemplateColumns: 1fr minmax(260px, 360px) 1fr
- alignItems: center
- gap: 20px

### Left column (callouts, right-aligned)
- display: flex, flexDirection: column, gap: 36px, justifyContent: center
- alignItems: flex-end, textAlign: right

### Right column (callouts, left-aligned)
- display: flex, flexDirection: column, gap: 36px, justifyContent: center
- alignItems: flex-start, textAlign: left

### Center column
- Contains the HiStrips device/strip image or chart SVG
- Use `/images/histrips/charts/desktop-chart.svg`

### Each callout
- fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.2px
- position: relative, maxWidth: 260px
- display: flex, alignItems: center, gap: 10px
- Has ::before (horizontal connector line) and ::after (dot) pseudo-elements
- Left col callouts: flex-direction: row-reverse, text-align: right
- Connector line: width: 28px, height: 1px, background: rgba(0,0,0,0.55)
- Dot: 7x7px, borderRadius: 50%, border: 1.5px solid rgba(0,0,0,0.55), background: #ffffff

### Stats row (below diagram)
- display: flex, justifyContent: center, gap: 60px, marginTop: 40px
- Each stat: textAlign: center

### Stat number
- fontSize: 48px, fontWeight: 700, color: #ffffff, letterSpacing: -2px

### Stat description
- fontSize: 15px, color: rgba(255,255,255,0.7), maxWidth: 220px, lineHeight: 1.4

### CTA Button
- background: #ffffff, color: #0f1115
- borderRadius: 30px, padding: 14px 32px
- fontSize: 16px, fontWeight: 700
- marginTop: 36px, display: inline-block
- hover: background: #f0f0f0

## Text Content

**Heading:** "Clinically Designed. Backed by Experts in Sleep & Respiratory Health."

**Left callouts:**
- "Improve Your Sleep Quality"
- "Feel Energized During The Day"
- "Don't Disturb Your Partner's Sleep"
- "Reliable Silent Wakeup"

**Right callouts:**
- "Waking Up Naturally"
- "Best Device For Heavy Sleepers"
- "14+ Day Battery Life"
- "Up To 5 Alarms"

**Stats:**
- "93%" — "Of users report waking up less groggy and feeling more rested."
- "97%" — "Of athletes feel immediate improvement in nasal airflow, with more energy and focus during training."

**CTA button:** "SHOP NASAL STRIPS"

**Footnote:** "Study References" (small text link)

## Assets
- Center diagram: `/images/histrips/charts/desktop-chart.svg`

## Responsive Behavior
- **Desktop (1440px):** 3-column diagram
- **Mobile (390px):** single column, callouts stacked vertically, no connectors
- **Breakpoint:** ~768px
