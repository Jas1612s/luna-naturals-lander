# hims.com Behavior Documentation

## Global Behaviors

### 1. Navigation Scroll Transform
- **Trigger**: Scrolling past the 44px announcement bar (~44px scroll position)
- **State A (initial)**: Nav bg = transparent, logo fill = white (dark logo SVG at top)
- **State B (scrolled)**: Nav bg = white/cream, logo fill = dark, subtle box-shadow
- **Transition**: CSS transition ~0.2s ease
- **Implementation**: JS scroll listener toggling a CSS class; or CSS `position:sticky` with `backdrop-filter`
- **Note**: At scroll=0 (hero), logo is dark colored because hero bg is white. No inversion needed for hero.

### 2. Hero Card Hover States
- **Trigger**: Hover over large featured card
- **State A**: Default product image shown (e.g., `hims_nn-wp-hd-pen-default-d.png`)
- **State B**: Hover image shown (e.g., `hims_nn-wp-hd-pen-hover-d`)
- **Transition**: opacity or image swap, ~0.3s
- **Implementation**: CSS opacity swap on hover via hidden second `<img>` or CSS background-image swap

### 3. Category Tile Hover
- **Trigger**: Hover over small 4-column category tiles
- **Effect**: Slight background darkening or scale/elevation
- **Transition**: ~0.2s ease

### 4. GLP-1 Lineup Horizontal Scroll
- **Interaction**: Horizontal scroll (mouse wheel or click-drag)
- **Type**: Native CSS `overflow-x: scroll` with hidden scrollbar, or JS-driven
- **No snap behavior** observed

### 5. Weight Loss Section Videos
- **Video 1** (hero): `Hims_Sunlight_Rough_PillsPen_April_17_2026.mp4` — autoplay, loop, muted
- **Video 2** (SNAC/Wegovy Pen): `comprehensive-pill.mp4` — autoplay, loop, muted
- Both have poster images as fallback

### 6. Smooth Scroll Library
- **None detected** — no Lenis, Locomotive Scroll, or custom scroll containers

### 7. Scroll-Driven Animations (potential)
- Elements may fade/slide in as they enter viewport via IntersectionObserver
- Doctor cards section appears to auto-scroll/marquee (needs confirmation)

## Responsive Breakpoints (observed)
- **Desktop**: 1440px — full layout as described
- **Tablet**: ~768px — hero cards stack, reduced font sizes
- **Mobile**: ~390px — single column, nav becomes hamburger only

## Page-Level Scroll
- Standard browser scroll, no custom scroll container
- Body has `--document-height: 1017px` (viewport-related CSS var)
