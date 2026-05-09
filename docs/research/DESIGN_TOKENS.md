# hims.com Design Tokens

## Typography

### Font Family
- **Primary**: `sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif`
- Self-hosted at: `https://www.hims.com/css/fonts/SofiaProRegular-english.woff2`
- Weight 400 = Regular, Weight 500 = Medium, Weight 600 = SemiBold

### Font Sizes
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (hero) | 57px | 400 | 57px | -3.5625px |
| H2 section | ~48-64px | 400 | ~1 | -2px |
| Large card title | 20px | 500 | auto | normal |
| Body text | 16px | 400 | auto | normal |
| Small label | 14px | 400 | auto | normal |
| Caption | 12px | 400 | auto | normal |

## Colors

### Brand Palette
```
--hims-amber:        rgb(255, 198, 113)   /* #FFC671 - accent gold, announcement bar bg */
--hims-amber-dark:   rgb(154, 109, 42)    /* #9A6D2A - hero card 2 bg, darker gold */
--hims-brown-dark:   rgb(57, 46, 37)      /* #392E25 - weight loss section bg */
--hims-cream:        rgb(251, 248, 245)   /* #FBF8F5 - off-white, category tile bg */
--hims-navy:         rgb(10, 38, 51)      /* #0A2633 - footer bg */
--hims-peach:        rgb(191, 142, 94)    /* #BF8E5E - labs section elements */
--hims-olive:        rgb(237, 225, 172)   /* #EDE1AC - testosterone section light */

--hims-sex-blue:     rgb(78, 121, 158)    /* #4E799E - sex tile accent */
--hims-hair-red:     rgb(138, 58, 52)     /* #8A3A34 - hair tile accent */
--hims-testo-teal:   rgb(109, 141, 158)   /* #6D8D9E - testosterone tile accent */
```

### Semantic Colors
```
--background: rgb(255, 255, 255)          /* white */
--foreground: rgba(0, 0, 0, 0.88)         /* body text */
--muted-foreground: rgba(0, 0, 0, 0.44)   /* secondary text */
--text-white: rgb(255, 255, 255)
--text-gold: rgb(255, 198, 113)           /* accent in dark sections */
```

## Spacing & Layout
- **Grid**: 13 columns, 1.5rem (24px) gutter
- **Max content width**: ~1360px
- **Border radius**: 24px (cards), 100px (pill buttons), 8px (small elements)
- **Nav height**: 48px (3rem via `--global-nav-header-row-height`)

## Buttons
### Pill shape (primary)
- Border-radius: 100px (full pill)
- Padding: ~12px 24px
- Background: `rgb(255, 198, 113)` amber / dark options

### Dark rounded (secondary)
- Border-radius: ~40px
- Background: dark navy/brown
- Color: white

## Shadows / Effects
- Section transitions: dark-to-light theme changes between sections
- No global box shadows on nav at scroll 0; shadow appears after scroll
