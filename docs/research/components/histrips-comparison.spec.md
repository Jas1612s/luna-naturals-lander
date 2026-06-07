# HiStripsComparison Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsComparison.tsx`
- **Interaction model:** static

## DOM Structure
- Cream background (#f5f3ef) section
- Centered heading "HiStrips vs Others"
- Comparison table: 5 columns (feature label + 4 products)
- Column headers: product images + name
- Rows: feature label on left, checkmarks or X for each column
- Price row at bottom

## Computed Styles

### Section wrapper
- background: #f5f3ef
- display: flex, justifyContent: center

### Inner container
- maxWidth: 840px, padding: 60px 30px, margin: auto, width: 100%
- display: flex, gap: 20px, flexDirection: column, alignItems: center

### Heading
- fontSize: 36px, fontWeight: 700, letterSpacing: -1.5px, textAlign: center, color: #1c1c1c
- marginBottom: 10px

### Table
- width: 100%
- display: flex, flexDirection: column

### Header row (product images)
- display: flex, width: 100%
- First cell (empty, 20% width): minWidth: 20%
- Each product cell: minWidth: 20%, display: flex, flexDirection: column, alignItems: center, justifyContent: center, gap: 10px, minHeight: 115px, padding: 15px 0

### Product names in header
- fontSize: 19px, fontWeight: 600
- HiStrips: gradient text (var(--hs-grad-text))
- Others: regular text, color: #666
- letterSpacing: -0.8px, maxWidth: 90px, margin: auto

### Product images (circular, in header)
- width: 60px, height: 60px, objectFit: contain, borderRadius: 50%
- Images: `/images/histrips/compare/col-histrips.png`, `col-others.png`, `col-spray.png`, `col-strips.png`

### Data rows
- display: flex, width: 100%, borderTop: 1px solid rgba(0,0,0,0.1)

### Feature label cell
- display: flex, minHeight: 75px, margin: auto, minWidth: 20%
- justifyContent: flex-start, alignItems: center
- fontSize: 14px, fontWeight: 500, color: #1c1c1c

### Checkmark cell
- display: flex, minWidth: 20%, justifyContent: center, alignItems: center, gap: 15px, minHeight: 75px
- Green tick: `/images/histrips/icons/tick-green.svg` (27px wide)
- Grey tick/X: `/images/histrips/icons/tick-grey.svg`

### Price row
- Same structure, values: "$29", "$129+", "$35 (P/M)", "$32+"
- fontSize: 16px, fontWeight: 700
- Sub-label: "*Cost calculated over 3 months of consistent use." — fontSize: 12px, color: #888

## Table Data
| Feature | HiStrips | Other Devices | Nasal Spray | Pharmacy Strips |
|---------|----------|---------------|-------------|-----------------|
| Works up to 24H | ✓ | ✗ | ✗ | ✗ |
| Gentle, drug-free solution | ✓ | ✗ | ✗ | ✓ |
| One-time stick, easy peel | ✓ | ✗ | ✓ | ✓ |
| Anti-Sweat Grip | ✓ | ✗ | ✗ | ✗ |
| Comfortable for overnight wear | ✓ | ✗ | ✗ | ✗ |
| Pricing* | $29 | $129+ | $35 (P/M) | $32+ |

(Use green tick image for ✓ and grey/X image for ✗)

## Responsive Behavior
- **Desktop:** full table visible
- **Mobile:** horizontally scrollable table, or columns stack with reduced font size
