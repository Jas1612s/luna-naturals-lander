# HiStrips Nasal PDP — Shopify Liquid Clone

Clone of: https://histrips.com/products/nasal-histrips

## Files

```
shopify/
  assets/
    histrips-pdp.css              ← All styles (copy to Shopify theme assets/)
  sections/
    histrips-pdp-hero.liquid      ← Product hero: gallery + form + qty/subscribe/ATC
    histrips-pdp-nextgen.liquid   ← Next-Gen Tech two-column section
    histrips-pdp-features.liquid  ← 4-card feature grid + press bar + stats
    histrips-pdp-faq.liquid       ← Accordion FAQ
  templates/
    product.histrips-nasal.json   ← Page template wiring all sections
```

## How to install in your Shopify theme

### 1. Copy files
Copy everything into your theme folder matching the directory structure:
- `assets/histrips-pdp.css` → `assets/histrips-pdp.css`
- `sections/*.liquid` → `sections/*.liquid`
- `templates/product.histrips-nasal.json` → `templates/product.histrips-nasal.json`

### 2. Load the CSS in your layout
Add to `layout/theme.liquid` inside `<head>`:
```liquid
{{ 'histrips-pdp.css' | asset_url | stylesheet_tag }}
```

### 3. Load Alpine.js
This template uses Alpine.js for interactivity. Add before `</body>`:
```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```
Or install via npm if using a modern Shopify theme (Dawn, etc.).

### 4. Assign the template to your product
In Shopify Admin → Products → select your nasal strip product → Template → choose `histrips-nasal`.

### 5. Customise in Theme Editor
All sections are fully configurable in the Theme Editor (Customize):
- **Hero**: set benefit badge text, pick the product
- **Next-Gen**: set heading, body text, upload media image, add/remove USP blocks
- **Features**: edit each feature card title/body/icon; set stats heading
- **FAQ**: add/edit/remove FAQ items

## Design system
- **Font**: Inter (loaded via Shopify's theme font system)
- **Background**: `#090909` (near-black)
- **Gradient accent**: `linear-gradient(90deg, #FF3492, #DD33ED)`
- **Green success**: `#22c55e`
- **Body text muted**: `rgba(255,255,255,0.55)`
