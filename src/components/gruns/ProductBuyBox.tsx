"use client";

import { useState } from "react";
import Image from "next/image";

const variants = [
  { id: "adults", name: "Adults", image: "/images/gruns/product-adults-patches.png" },
  { id: "kids", name: "Kids", image: "/images/gruns/product-kids-patches.png" },
];

const benefitsList = [
  { icon: "🛡️", title: "Up to 12 hours protection", desc: "Per patch" },
  { icon: "🌿", title: "Plant-based active oils", desc: "Citronella & eucalyptus" },
  { icon: "👶", title: "Safe for all ages", desc: "Kids 2+ and adults" },
  { icon: "💧", title: "Waterproof & sweatproof", desc: "Stays on during activity" },
  { icon: "🚫", title: "DEET-free", desc: "No harsh chemicals on skin" },
];

const galleryImages = [
  "/images/gruns/product-adults-patches.png",
  "/images/gruns/sachet-luna.png",
  "/images/gruns/product-kids-patches.png",
];

const faqItems = [
  {
    q: "Why Luna Naturals?",
    a: "We use only plant-based essential oils — no DEET, no parabens, no synthetic chemicals. Our patches are designed for real families who want effective bug protection without compromising on safety.",
  },
  {
    q: "Ingredients & Allergies",
    a: "Active ingredients: Citronella oil, Eucalyptus oil. Patch material: Non-woven fabric, medical-grade adhesive. Free from: DEET, parabens, phthalates, artificial fragrances. Consult your doctor if you have sensitive skin.",
  },
  {
    q: "How long does each patch last?",
    a: "Each patch provides up to 12 hours of protection. For best results, apply to clothing rather than directly on skin. Replace after 12 hours or if the patch gets wet.",
  },
  {
    q: "Science & Certifications",
    a: "Leaping Bunny certified cruelty-free. Third-party tested for safety and efficacy. Our citronella and eucalyptus oil blend has been shown to repel mosquitoes effectively in independent lab studies.",
  },
  {
    q: "How to Use",
    a: "1. Peel patch from backing. 2. Stick onto clothing (shirts, shorts, hats, strollers). 3. Use 1-2 patches per person for best coverage. 4. Replace every 12 hours as needed.",
  },
  {
    q: "Shipping & Returns",
    a: "Free shipping on orders of 2+ packs. Standard delivery in 3-5 business days. 30-day money-back guarantee — if you're not happy, we'll refund you, no questions asked.",
  },
];

export function ProductBuyBox() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [offerType, setOfferType] = useState<"subscribe" | "onetime">("subscribe");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subPrice = 9.99;
  const subCompare = 24.99;
  const onetimePrice = 14.99;
  const onetimeCompare = 24.99;

  const currentPrice = offerType === "subscribe" ? subPrice : onetimePrice;
  const currentCompare = offerType === "subscribe" ? subCompare : onetimeCompare;
  const discount = Math.round(((currentCompare - currentPrice) / currentCompare) * 100);

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-square bg-[var(--gr-cream)] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
              <Image
                src={galleryImages[activeImage]}
                alt="Luna Naturals Mosquito Repellent Patches"
                width={600}
                height={600}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                    activeImage === i ? "border-[var(--gr-green)]" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" width={80} height={80} className="w-full h-full object-contain bg-[var(--gr-cream)] p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[var(--gr-accent)]">★★★★★</span>
              <span className="text-sm text-[var(--gr-sage)]">4.8/5.0 (50,000+ reviews)</span>
            </div>

            {/* Title */}
            <h2 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-dark)] leading-tight mb-2">
              Luna Naturals Mosquito Repellent Patches
            </h2>

            <p className="text-[var(--gr-sage)] text-base mb-6">
              Plant-powered protection. 90 patches per pack. One pack covers the whole summer.
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-[var(--gr-dark)] mb-3">
                Select Type: <span className="font-normal text-[var(--gr-sage)]">{variants[selectedVariant].name}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((variant, i) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-colors cursor-pointer ${
                      selectedVariant === i
                        ? "border-[var(--gr-green)] bg-[var(--gr-green)]/5"
                        : "border-[var(--gr-cream)] hover:border-[var(--gr-sage)]"
                    }`}
                  >
                    <Image src={variant.image} alt={variant.name} width={40} height={40} className="w-10 h-10 rounded-md object-contain" />
                    <span className="text-sm font-medium text-[var(--gr-dark)]">{variant.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-[var(--gr-cream)] mb-6" />

            {/* Select Offer */}
            <p className="text-sm font-bold text-[var(--gr-dark)] mb-4">Select Offer</p>

            {/* Subscribe & Save option */}
            <button
              onClick={() => setOfferType("subscribe")}
              className={`w-full text-left rounded-xl border-2 p-4 mb-3 transition-colors cursor-pointer ${
                offerType === "subscribe"
                  ? "border-[var(--gr-green)] bg-[var(--gr-green)]/5"
                  : "border-[var(--gr-cream)] hover:border-[var(--gr-sage)]"
              }`}
            >
              {/* Most popular badge */}
              <div className="text-center -mt-8 mb-2">
                <span className="bg-[var(--gr-green)] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                  Most Popular: Get {discount}% Off
                </span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                    offerType === "subscribe" ? "border-[var(--gr-green)]" : "border-[var(--gr-sage)]"
                  }`}>
                    {offerType === "subscribe" && <div className="w-2.5 h-2.5 rounded-full bg-[var(--gr-green)]" />}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--gr-dark)]">Subscribe & Save</p>
                    <p className="text-xs text-[var(--gr-sage)]">Delivered every 3 months</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[var(--gr-dark)]">${subPrice.toFixed(2)} <span className="text-[var(--gr-sage)] line-through font-normal text-sm">${subCompare.toFixed(2)}</span></p>
                  <p className="text-xs text-[var(--gr-sage)]">${(subPrice / 90).toFixed(2)}/patch</p>
                </div>
              </div>

              {offerType === "subscribe" && (
                <div className="mt-4 space-y-2 pl-8">
                  <p className="text-xs text-[var(--gr-green)] font-medium">✓ 30-Day Money-Back Guarantee</p>
                  <p className="text-xs text-[var(--gr-green)] font-medium">✓ FAST & FREE Shipping On Every Order</p>
                  <p className="text-xs text-[var(--gr-green)] font-medium">✓ Pause Or Cancel Any Time</p>
                  <p className="text-xs text-[var(--gr-green)] font-medium">✓ Online Exclusive</p>
                </div>
              )}
            </button>

            {/* One Time Purchase option */}
            <button
              onClick={() => setOfferType("onetime")}
              className={`w-full text-left rounded-xl border-2 p-4 mb-6 transition-colors cursor-pointer ${
                offerType === "onetime"
                  ? "border-[var(--gr-green)] bg-[var(--gr-green)]/5"
                  : "border-[var(--gr-cream)] hover:border-[var(--gr-sage)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                    offerType === "onetime" ? "border-[var(--gr-green)]" : "border-[var(--gr-sage)]"
                  }`}>
                    {offerType === "onetime" && <div className="w-2.5 h-2.5 rounded-full bg-[var(--gr-green)]" />}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--gr-dark)]">One Time Purchase</p>
                    <p className="text-xs text-[var(--gr-sage)]">90 patches delivered once</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[var(--gr-dark)]">${onetimePrice.toFixed(2)} <span className="text-[var(--gr-sage)] line-through font-normal text-sm">${onetimeCompare.toFixed(2)}</span></p>
                  <p className="text-xs text-[var(--gr-sage)]">${(onetimePrice / 90).toFixed(2)}/patch</p>
                </div>
              </div>
            </button>

            {/* CTA Button */}
            <button className="w-full py-4 bg-[var(--gr-green-dark)] text-white text-lg font-bold rounded-full hover:bg-[var(--gr-green)] transition-colors cursor-pointer mb-4">
              Start Now
            </button>

            {/* Discount auto-applied badge */}
            <div className="bg-[var(--gr-cream)] text-center py-2.5 rounded-lg mb-6 text-sm font-medium text-[var(--gr-dark)]">
              Limited Time Discount Auto-Applied ✅
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: "✓", label: "30-Day Money-\nBack Guarantee" },
                { icon: "🛡️", label: "Clinically and\n3rd party tested" },
                { icon: "💳", label: "HSA/FSA\neligible" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[var(--gr-green)] flex items-center justify-center text-[var(--gr-green)] text-sm">
                    {badge.icon}
                  </div>
                  <p className="text-xs text-[var(--gr-dark)] font-medium whitespace-pre-line">{badge.label}</p>
                </div>
              ))}
            </div>

            <hr className="border-[var(--gr-cream)] mb-4" />

            {/* FAQ Accordion */}
            <div>
              {faqItems.map((item, i) => (
                <div key={i} className="border-b border-[var(--gr-cream)]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
                  >
                    <span className="font-bold text-[var(--gr-dark)]">{item.q}</span>
                    <span className="text-xl text-[var(--gr-sage)] shrink-0 ml-4">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-4 text-sm text-[var(--gr-sage)] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
