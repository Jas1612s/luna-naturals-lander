# MEDVi (home.medvi.org) Design Tokens

## Typography

### Font Families
- **Primary**: `Red Hat Text` (Google Fonts) — headings and UI
- **Body**: `Onest` (Google Fonts) — body copy
- **Watermark**: `Montserrat` — large decorative text

### Font Sizes
| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| H1 (hero) | clamp(42px, 6vw, 80px) | 700 | -0.03em |
| H2 (section) | clamp(28px, 3.5vw, 50px) | 600 | -0.025em |
| H3 (card title) | clamp(18px, 1.5vw, 22px) | 600 | -0.02em |
| Body | 15–17px | 400 | normal |
| Badge/Eyebrow | 11–12px | 600 | 0.08–0.1em uppercase |
| Caption | 11–12px | 400 | normal |

## Colors

### Brand Palette
```
--medvi-accent:       #2E936F   rgb(46,147,111)    /* primary CTA green */
--medvi-accent-soft:  #84C390   rgb(132,195,144)   /* soft accent, hero highlights */
--medvi-accent-dark:  #1B6549   rgb(27,101,73)     /* hero gradient start */
--medvi-hero-end:     #112111   rgb(17,33,17)      /* hero gradient end, footer bg */
```

### Text Colors
```
--medvi-text:         #242220   rgb(36,34,32)      /* primary text */
--medvi-text-muted:   #38312C   rgb(56,49,44)      /* secondary / body text */
```

### Section Backgrounds
```
--bg-white:     rgb(250,250,250)   /* Support section */
--bg-sage:      rgb(241,245,233)   /* Weight Loss, Peptides, Testimonials */
--bg-warm:      rgb(250,249,247)   /* Meals, Skincare */
--bg-blue:      rgb(228,236,242)   /* Supplements */
--bg-pink:      rgb(242,230,236)   /* Women's Health, Hair */
--bg-beige:     rgb(232,224,220)   /* Men's Health */
```

### Hero Gradient
```
background: linear-gradient(166deg, rgb(27,101,73) 0%, rgb(17,33,17) 100%)
```

## Spacing & Layout
- **Max content width**: 1280px
- **Section padding**: 80–112px vertical
- **Container padding**: 24px horizontal
- **Border radius (cards)**: 24–32px
- **Border radius (badges)**: 100px (pill)
- **Border radius (buttons)**: 100px (pill)
- **Card gap**: 16–24px

## Buttons
- **Primary**: `#2E936F` bg, white text, rounded-full, px-6 py-3, font-semibold
- **Coming Soon**: Muted grey bg, grey text, cursor-default, disabled state
- **Ghost/Outline**: Transparent, green border, green text

## Blob Decorations
- Radial gradient circles positioned absolutely in section corners
- Opacity: 10–20% of section accent color
- Size: 400–700px diameter
- Blur effect via radial gradient falloff
