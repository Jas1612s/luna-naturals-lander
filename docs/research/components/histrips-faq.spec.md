# HiStripsFAQ Specification

## Overview
- **Target file:** `src/components/histrips/HiStripsFAQ.tsx`
- **Interaction model:** click-driven (accordion open/close)

## DOM Structure
- White background section
- Heading + sub-heading
- Stacked accordion items (one open at a time)

## Computed Styles

### Section wrapper
- background: #ffffff
- padding: 60px 20px

### Inner container
- maxWidth: 800px, margin: 0 auto

### Section heading
- fontSize: 36px, fontWeight: 700, letterSpacing: -1.5px, color: #1c1c1c, marginBottom: 8px

### Sub-heading
- fontSize: 16px, color: #666, marginBottom: 40px

### Accordion item
- borderBottom: 1px solid #E4E3E1
- padding: 20px 0
- cursor: pointer

### Question row
- display: flex, justifyContent: space-between, alignItems: center
- fontSize: 16px, fontWeight: 600, color: #1c1c1c

### Toggle icon
- 20x20px SVG (+ when closed, − when open)
- color: #1c1c1c

### Answer
- fontSize: 15px, lineHeight: 1.6, color: #555, paddingTop: 12px
- maxHeight: 0 when collapsed, maxHeight: 500px when open
- overflow: hidden, transition: max-height 0.3s ease

## FAQ Data
1. **Q:** Do you ship overseas?
   **A:** Yes, we ship internationally. We currently ship to 75+ countries. Shipping costs will apply and will be added at checkout unless free shipping discount is available. Currently Free Shipping is Available on all orders above 45€ | 50$. We run discounts and promotions all year, so stay tuned for exclusive deals on shipping.

2. **Q:** Do you ship to my country?
   **A:** We excluded countries we can not ship to, from checking out. This means if you are able to check-out, we can ship to your country.

3. **Q:** How long will it take to get my orders?
   **A:** We are currently experiencing a very high order volume, all orders will be dispatched within 24-48 hours, and shipping will take around 5-7 business days depending on your location. We ship to all countries except some Islands. Delivery details will be provided during checkout & in your confirmation email.

4. **Q:** What is Histrips Nasal?
   **A:** A nasal strip is an adhesive band that helps open nasal passages for easier breathing by gently lifting the sides of your nose.

5. **Q:** How does it work?
   **A:** The nasal strip uses a flexible, spring-like material to gently pull open your nasal passages, improving airflow and making it easier to breathe.

6. **Q:** Histrips nasal are safe to use?
   **A:** Yes, nasal strips are completely safe for most people when used as directed. They're non-medicated, hypoallergenic and gentle on the skin, but should not be applied to broken or irritated skin. If you have specific concerns, consult with a doctor.

7. **Q:** Other questions?
   **A:** You can contact us at support@histrips.com, we will be happy to assist you.

## Responsive Behavior
- Same on all viewports (single column)
- Full width on mobile
