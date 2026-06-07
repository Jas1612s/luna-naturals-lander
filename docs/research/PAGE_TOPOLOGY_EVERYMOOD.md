# Everymood.com — Page Topology

## Design System
- **Font:** Bricolage Grotesque (Google Fonts) — sans-serif
- **Primary accent:** `#505EE2` (rgb(80, 94, 226)) — indigo/purple
- **Marquee bg:** `#E4FF71` (rgb(228, 255, 113)) — lime/yellow-green
- **Background:** `#FFFFFF` white
- **Text:** `#000000` black
- **Category card bg:** `#B8C4F6` lavender/periwinkle
- **Sale badge:** red ~`#C73C3C`
- **Button primary:** white bg, black text, rounded-full (50px)
- **Button accent:** `#505EE2` bg, white text, rounded-full
- **Feature badge:** white bg, 1px border, rounded-full, with checkmark icon

## Sections (top to bottom)

### 1. Scrolling Promotion Bar (h: 40px)
- **Type:** Marquee/ticker
- **BG:** `#E4FF71` lime
- **Text color:** `#505EE2` indigo
- **Content:** "NO ANIMAL TESTING" | "FREE SHIPPING ON ALL U.S. ORDERS $200+" | "100% CLEAN, NON-IRRITATING" (repeating)
- **Interaction:** Auto-scrolling horizontal marquee

### 2. Header/Nav (h: 80px, sticky)
- **Layout:** Logo left, nav center, icons right
- **Logo:** "everymood" SVG (Group_6.svg)
- **Nav items:** Home, Shop All, Hair & Body Mists, Body Oil, Hand Sanitizer, Lip Balms, Mood Quiz
- **Right icons:** Search, Account, Cart
- **BG:** transparent (over hero), white when scrolled
- **Interaction:** Sticky on scroll

### 3. Hero Section (h: ~895px)
- **Layout:** 2-column split, full-width images side by side
- **Left image:** colum1.png — hand reaching for product bottles
- **Right image:** colum2.png — group of smiling women
- **Text overlay on right:** "Premium self-care essentials that move the moment."
- **CTA:** "Shop Now" — white bg, black text, rounded-full
- **Gap:** ~10px between columns

### 4. Mood Menu / Category Cards (h: ~162px title + ~544px cards)
- **Title:** "Mood Menu" + "Discover All" link
- **Layout:** 4 cards in a row on lavender (`#B8C4F6`) background
- **Cards:** rounded corners, image with category name overlay (white text, bottom-left)
  - Hair & Body Mists (feture-cat-img1.png)
  - Hand Sanitizer (feture-cat-img2.png)
  - Lip Care (feture-cat-img3.png)
  - Body Oils (ChatGPT-Image.png)

### 5. Product Tabs (h: ~1512px)
- **Tabs:** "Current Obsessions" (active, indigo), "New Arrivals" (grey), "Kits" (grey) | "Shop All Products" (right-aligned, underlined)
- **Grid:** 4 columns × 2 rows of product cards
- **Product card:**
  - Sale badge (red, "-35%" or "-36%")
  - Product image (grey bg, rounded)
  - Title (indigo text)
  - Price: sale price (indigo) + crossed-out original (grey)
- **Interaction:** Click tabs to switch product sets

### 6. Quiz CTA Section (h: ~500px)
- **BG:** Light grey/lavender gradient with 3D decorative elements (puzzle pieces, blue shapes)
- **Eyebrow:** "Stop guessing. Start smelling like the vibe." (indigo)
- **Heading:** "Sweet? Sexy? Soft-girl? You decide." (black, large)
- **Subtext:** "Take our 60-second quiz & meet your Everymood alter ego."
- **CTA:** "Get My Scent Match" — indigo bg, white text, rounded
- **Progress bar:** "0% complete" below
- **Nav arrows:** Left/right pagination

### 7. Highlight Text with Images (h: ~489px)
- **Layout:** Creative typographic section with circular images interspersed in text
- **Text:** "Scent your way [img] and into next-gen [img] emotional optimization. [img]"
- **Images:** 3 circular lifestyle photos placed inline with text
- **Decorative:** Large lavender 3D flower shape on left, yellow-green gradient circle on right
- **Text color:** muted grey/purple

### 8. Image with Text / "This Moment is Yours" (h: ~808px)
- **Layout:** Split — product image left (with pink/purple gradient bg, 3D flower elements), text right
- **Heading:** "This Moment is Yours" (indigo)
- **Body:** "Monday motivation. Tuesday tranquility. Wednesday wildness..."
- **CTA:** "Find Your Mood" — indigo bg, white text, rounded
- **Feature badges below:** 4 pill badges with checkmarks
  - "Science Backed Formulas"
  - "Eco-First Design"
  - "No Harmful Chemicals"
  - "Safe & Gentle Always"

### 9. Mood Science (h: ~729px)
- **Layout:** Centered text block
- **Decorative:** Yellow-green gradient flower on left edge
- **Heading:** "The Mood Science" (indigo)
- **Body:** "In 0.146 seconds, our scent molecules reach your limbic system..."
- **CTA:** "Learn More" — indigo bg, white text, rounded

### 10. Products Bundle / Kits (h: ~904px)
- **Layout:** Image left (stacked product trio boxes with numbered badges), content right
- **BG:** Lavender/blue gradient on left image area
- **Eyebrow:** "Kits for Main Characters" (indigo)
- **Heading:** "Transform mundane into magical with the world's freshest sanitizers" (indigo, large)
- **Product list:** 3 numbered items with thumbnail, title, price ($24.00 each)
  1. Sweet Seduction Trio | Hydrating Hand Sanitizer Gift Set
  2. Golden Hour Trio | Hydrating Hand Sanitizer Gift Set
  3. Sweet Escape Trio | Hydrating Hand Sanitizer Gift Set

### 11. Hair & Body Mists Feature (h: ~844px)
- **Layout:** Lifestyle image left, product cards right with carousel
- **Heading:** "Hair & Body Mists" (indigo)
- **Carousel:** 2 visible product cards with prev/next arrows
- **Decorative:** Purple/lavender background accent in top-right corner

### 12. Testimonials (h: ~888px)
- **Heading:** "Don't Just Take Our Word for It..." (indigo, italic)
- **Layout:** Horizontal carousel of review cards
- **Card:** Photo (square, rounded), name + "Verified Buyer", star rating, review text
- **Carousel arrows:** Left/right
- **Reviews:**
  - Jenny E. — 4 stars — about Sun Drunk mist
  - Joanne — 5 stars — about Head in the Clouds mist
  - Danielle S. — 5 stars — about Berry Obsessed lip balm
  - Elizabeth R. — 5 stars — about Mood Set of 3

### 13. FAQ Section (h: ~813px)
- **Layout:** 2 columns — left text + 3D decorative image, right accordion
- **Left title:** "We've got answers."
- **Left subtitle:** "Clean, mood-shifting formulas that actually work..."
- **Left CTA:** "Customer Service" — indigo bg, white text, rounded
- **Left decoration:** 3D blue flower/puzzle piece
- **Accordion items:**
  - "How long does shipping take?" (open by default)
  - "Does my piece come in any packaging?"
  - "Do you ship internationally?"
  - "What payment methods do you accept?"

### 14. Footer (h: ~607px)
- **BG:** Light pink/lavender tint
- **Left column:** Subscribe form (email input + arrow button)
  - "Subscribe to get 10% OFF"
  - "Sign up for VIP access to exclusive drops and a 10% discount."
  - "Join the club and be part of our growing community."
- **Middle column:** "The Mood is Yours™" + links (Shop All, About Us, Get in Touch)
- **Right column:** Customer care links (Search, My Account, Contact, FAQ's, Support, Shipping & Return)
- **Bottom:** Social icons (Facebook, X, Instagram, TikTok, Pinterest, YouTube) + © 2026 + Payment icons
