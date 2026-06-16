"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function useCountdown(startHrs = 5, startMin = 11, startSec = 26) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ hrs: startHrs, min: startMin, sec: startSec });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hrs, min, sec } = prev;
        sec -= 1;
        if (sec < 0) { sec = 59; min -= 1; }
        if (min < 0) { min = 59; hrs -= 1; }
        if (hrs < 0) { hrs = 0; min = 0; sec = 0; }
        return { hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  return { time, mounted, formatted: `${pad(time.hrs)}:${pad(time.min)}:${pad(time.sec)}` };
}

/* ------------------------------------------------------------------ */
/*  Product details tab data                                           */
/* ------------------------------------------------------------------ */

const detailTabs = ["What you get", "Specifications", "How to use"] as const;

const whatYouGet: Record<string, string[]> = {
  adults: [
    "Luna Naturals Mosquito Repellent Patches (90 pcs)",
    "Resealable freshness pouch",
    "Quick-start usage guide",
  ],
  kids: [
    "Luna Naturals Kids Mosquito Repellent Patches (120 pcs)",
    "Resealable freshness pouch",
    "Fun sticker designs guide for kids",
  ],
};

const specifications = [
  { label: "Active ingredients", value: "Citronella oil, Eucalyptus oil" },
  { label: "Patch material", value: "Non-woven fabric, medical-grade adhesive" },
  { label: "Protection duration", value: "Up to 12 hours per patch" },
  { label: "Water resistance", value: "Waterproof & sweatproof" },
  { label: "Free from", value: "DEET, parabens, phthalates, artificial fragrances" },
  { label: "Certifications", value: "Leaping Bunny certified cruelty-free" },
  { label: "Shelf life", value: "24 months from date of manufacture" },
];

const howToUse = [
  "Peel the patch from its backing. Each patch is individually sealed for freshness.",
  "Stick onto clothing — shirts, shorts, hats, strollers, or bags. Avoid direct skin contact for best results.",
  "Use 1-2 patches per person for optimal coverage. Position near exposed skin areas.",
  "Replace every 12 hours or after heavy rain exposure for continuous protection.",
];

/* ------------------------------------------------------------------ */
/*  Variant-specific data                                              */
/* ------------------------------------------------------------------ */

const variantData: Record<
  string,
  { name: string; label: string; patchCount: number; tagline: string; gallery: string[] }
> = {
  adults: {
    name: "Adults",
    label: "Mosquito Repellent Patches — Adults",
    patchCount: 90,
    tagline: "Plant-powered protection for the whole family. One pack covers your entire summer.",
    gallery: [
      "/images/gruns/adults-pack-moss.jpg",
      "/images/gruns/before-after-no-labels.jpg",
      "/images/gruns/adults-3pack-forest.jpg",
      "/images/gruns/adults-lifestyle-pouch.webp",
    ],
  },
  kids: {
    name: "Kids",
    label: "Mosquito Repellent Patches — Kids",
    patchCount: 120,
    tagline: "Finally, bug protection your kids will actually ask for. Pediatrician-approved. Zero DEET touching their skin.",
    gallery: [
      "/images/gruns/product-kids-patches-v2.jpg",
      "/images/gruns/before-after-no-labels.jpg",
      "/images/gruns/kids-3pack-forest.jpg",
      "/images/gruns/kids-pack-moss.jpg",
      "/images/gruns/kids-lifestyle-stickers.webp",
    ],
  },
};

const variants = Object.keys(variantData);

/* ------------------------------------------------------------------ */
/*  SVG icon components                                                */
/* ------------------------------------------------------------------ */

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function BanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefit pills                                                      */
/* ------------------------------------------------------------------ */

const benefitsList = [
  { icon: <ClockIcon className="text-[var(--gr-green)]" />, title: "Up to 12 hours protection" },
  { icon: <LeafIcon className="text-[var(--gr-green)]" />, title: "Plant-based essential oils" },
  { icon: <ShieldCheckIcon className="text-[var(--gr-green)]" />, title: "Safe for ages 2+" },
  { icon: <DropletIcon className="text-[var(--gr-green)]" />, title: "Waterproof & sweatproof" },
  { icon: <BanIcon className="text-[var(--gr-green)]" />, title: "DEET-free formula" },
];

/* ------------------------------------------------------------------ */
/*  Trust badge data                                                   */
/* ------------------------------------------------------------------ */

const trustBadges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
    label: "30-Day Money-Back\nGuarantee",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: "Clinically &\n3rd Party Tested",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    label: "HSA/FSA\nEligible",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ProductBuyBox({ defaultVariant }: { defaultVariant?: string } = {}) {
  const initialKey = defaultVariant && variantData[defaultVariant] ? defaultVariant : "adults";
  const [selectedVariant, setSelectedVariant] = useState(initialKey);
  const [activeImage, setActiveImage] = useState(0);
  const [offerType, setOfferType] = useState<"subscribe" | "onetime">("subscribe");
  const [bundleSize, setBundleSize] = useState<2 | 4>(2);
  const [activeDetailTab, setActiveDetailTab] = useState<(typeof detailTabs)[number]>("What you get");
  const [activeInfoTab, setActiveInfoTab] = useState<"why" | "inside" | "steps" | "reviews">("why");
  const { formatted: countdownText, mounted: countdownMounted } = useCountdown();

  const variant = variantData[selectedVariant];
  const gallery = variant.gallery;

  const subPrice = 9.99;
  const subCompare = 24.99;

  const bundles = [
    { packs: 2 as const, priceEach: 12.99, compareEach: 24.99, tag: "Popular", image: "/images/gruns/pack-1.webp" },
    { packs: 4 as const, priceEach: 8.99, compareEach: 24.99, tag: "Best Value", image: "/images/gruns/pack-4.webp" },
  ];
  const activeBundleData = bundles.find((b) => b.packs === bundleSize) ?? bundles[0];

  const onetimePrice = activeBundleData.priceEach * activeBundleData.packs;
  const onetimeCompare = activeBundleData.compareEach * activeBundleData.packs;

  const currentPrice = offerType === "subscribe" ? subPrice : onetimePrice;
  const currentCompare = offerType === "subscribe" ? subCompare : onetimeCompare;
  const discount = Math.round(((currentCompare - currentPrice) / currentCompare) * 100);
  const perPatch = (offerType === "subscribe" ? subPrice : activeBundleData.priceEach) / variant.patchCount;

  return (
    <section id="shop" className="bg-[var(--gr-cream-light)] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12">
          {/* ---- Left: Image gallery ---- */}
          <div>
            <div className="relative aspect-square bg-[var(--gr-cream)] rounded-3xl overflow-hidden mb-4">
              <Image
                src={gallery[activeImage] ?? gallery[0]}
                alt={variant.label}
                width={700}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover"
                priority
              />

              {/* Feature tags on first image */}
              {activeImage === 0 && (
                <>
                  {/* Top-left pill */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span className="text-[11px] font-bold text-[var(--gr-dark)]">12-hour protection</span>
                  </div>
                  {/* Top-right badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 bg-[var(--gr-accent)] rounded-full w-[70px] h-[70px] flex flex-col items-center justify-center text-center shadow-md" style={{ animation: "gr-badge-wobble 5s ease-in-out infinite" }}>
                    <span className="text-[8px] font-bold text-white/70 uppercase tracking-wider leading-none">Loved by</span>
                    <span className="text-sm font-extrabold text-white leading-tight">50K+</span>
                    <span className="text-[8px] font-bold text-white/70 uppercase tracking-wider leading-none">families</span>
                  </div>
                  {/* Bottom trust pills */}
                  <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2">
                    {[
                      { icon: "leaf", label: "Plant-based" },
                      { icon: "shield", label: "Pediatrician-reviewed" },
                      { icon: "check", label: "DEET-free" },
                    ].map((tag) => (
                      <div key={tag.label} className="bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                        {tag.icon === "leaf" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>}
                        {tag.icon === "shield" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                        {tag.icon === "check" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>}
                        <span className="text-[10px] font-semibold text-[var(--gr-dark)]">{tag.label}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Before/After labels for comparison image */}
              {/* 3-pack value overlay */}
              {(gallery[activeImage] ?? "").includes("3pack") && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent pt-16 pb-5 px-5">
                  <span className="inline-block bg-[var(--gr-accent)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                    3-Pack · Best Value
                  </span>
                  <p className="gr-display italic text-white text-2xl md:text-3xl leading-tight">
                    Save up to <span className="text-[var(--gr-gold)]">60%</span>
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    3-pack subscribed · $0.08/patch · ~All summer covered
                  </p>
                </div>
              )}

              {(gallery[activeImage] ?? "").includes("before-after") && (
                <>
                  <span className="absolute top-4 left-4 bg-[var(--gr-accent)] text-white text-sm gr-display italic px-4 py-1.5 rounded">
                    Before
                  </span>
                  <span className="absolute top-4 right-4 bg-[var(--gr-accent)] text-white text-sm gr-display italic px-4 py-1.5 rounded">
                    After
                  </span>
                </>
              )}

              {/* Left/Right arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((activeImage - 1 + gallery.length) % gallery.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition"
                    aria-label="Previous image"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImage((activeImage + 1) % gallery.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition"
                    aria-label="Next image"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-full transition-all cursor-pointer ${
                      activeImage === i
                        ? "w-6 h-2 bg-[var(--gr-dark)]"
                        : "w-2 h-2 bg-[var(--gr-dark)]/30"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden border-2 transition-colors cursor-pointer shrink-0 ${
                    activeImage === i ? "border-[var(--gr-green)]" : "border-transparent hover:border-[var(--gr-sage)]/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={72}
                    height={72}
                    sizes="72px"
                    loading="lazy"
                    className="w-full h-full object-cover bg-[var(--gr-cream)]"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* ---- Right: Purchase funnel ---- */}
          <div>
            {/* Rating + Title */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--gr-accent)">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[var(--gr-sage)]">4.8/5.0 (50,000+ reviews)</span>
            </div>
            <h1 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-dark)] leading-tight mb-2">
              Luna Naturals {variant.label}
            </h1>
            <p className="text-[var(--gr-sage)] text-base mb-3">{variant.tagline}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-base text-[var(--gr-accent)] line-through font-medium">${currentCompare.toFixed(2)}</span>
              <span className="text-2xl font-bold text-[var(--gr-dark)]">${currentPrice.toFixed(2)}</span>
              <span className="bg-[var(--gr-accent)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                Flash Sale
              </span>
            </div>
            <p className="text-xs text-[var(--gr-sage)] mb-5">${perPatch.toFixed(2)}/patch &middot; {variant.patchCount} patches per pack</p>

            {/* Available Nationwide */}
            <div className="mb-6 py-4 border-y border-[var(--gr-dark)]/8">
              <p className="text-[10px] font-semibold text-[var(--gr-sage)] uppercase tracking-widest mb-1 text-center">
                Available Nationwide
              </p>
              <p className="text-base font-bold text-[var(--gr-dark)] text-center mb-3 gr-display italic">
                Find Us In Store
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-8">
                {[
                  { src: "/images/gruns/target.svg", alt: "Target", h: 22 },
                  { src: "/images/gruns/walmart.svg", alt: "Walmart", h: 20 },
                  { src: "/images/gruns/costco.svg", alt: "Costco", h: 18 },
                  { src: "/images/gruns/kroger.svg", alt: "Kroger", h: 20 },
                ].map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.h }} className="w-auto opacity-40 grayscale" />
                ))}
              </div>
            </div>

            {/* ── Product info tabs ── */}
            <div className="mb-8">
              {/* Segmented tab bar */}
              <div className="bg-[var(--gr-cream-warm)] rounded-t-xl p-1 flex">
                {([
                  { key: "why" as const, label: "Why it works" },
                  { key: "inside" as const, label: "Inside" },
                  { key: "steps" as const, label: "3 steps" },
                  { key: "reviews" as const, label: "Reviews" },
                ]).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveInfoTab(tab.key)}
                    className={`flex-1 py-2.5 text-[11px] font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      activeInfoTab === tab.key
                        ? "bg-white text-[var(--gr-dark)] shadow-sm"
                        : "text-[var(--gr-sage)] hover:text-[var(--gr-dark)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content — connected to tab bar */}
              <div className="bg-white rounded-b-xl shadow-sm p-4">
              {activeInfoTab === "why" && (
                <div className="divide-y divide-[var(--gr-dark)]/5">
                  {[
                    { icon: "clock", text: <>Repels mosquitoes for up to <strong>12 hours</strong></> },
                    { icon: "shield", text: "Goes on clothing — zero chemicals on skin" },
                    { icon: "leaf", text: "Plant-based, pediatrician-reviewed, DEET-free" },
                    { icon: "box", text: <>{variant.patchCount} patches per pack — lasts all summer</> },
                    { icon: "drop", text: "Waterproof & sweatproof for real outdoor life" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-1 py-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--gr-green)]/10 flex items-center justify-center shrink-0">
                        {item.icon === "clock" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                        {item.icon === "shield" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>}
                        {item.icon === "leaf" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>}
                        {item.icon === "box" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>}
                        {item.icon === "drop" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>}
                      </div>
                      <span className="text-sm text-[var(--gr-dark)] leading-snug">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeInfoTab === "inside" && (
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: "Citronella Oil", role: "Repellent" },
                    { name: "Eucalyptus Oil", role: "Deterrent" },
                    { name: "Peppermint Oil", role: "Scent barrier" },
                    { name: "Non-woven fabric", role: "Adhesive base" },
                  ].map((item) => (
                    <div key={item.name} className="bg-[var(--gr-cream-light)] rounded-xl p-3.5 text-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--gr-green)]/10 flex items-center justify-center mx-auto mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z"/>
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                        </svg>
                      </div>
                      <p className="text-xs font-bold text-[var(--gr-dark)]">{item.name}</p>
                      <p className="text-[10px] text-[var(--gr-sage)] mt-0.5">{item.role}</p>
                    </div>
                  ))}
                  <div className="col-span-2 bg-[var(--gr-green)]/5 rounded-xl px-4 py-3 text-center">
                    <p className="text-xs font-semibold text-[var(--gr-green)]">
                      No DEET &middot; No parabens &middot; No phthalates &middot; No synthetic fragrances
                    </p>
                  </div>
                </div>
              )}

              {activeInfoTab === "steps" && (
                <div className="divide-y divide-[var(--gr-dark)]/5">
                  {[
                    { step: "1", title: "Peel", desc: "Remove patch from backing", color: "bg-[var(--gr-green)]" },
                    { step: "2", title: "Stick", desc: "Apply to clothing, hats, or bags", color: "bg-[var(--gr-green-mid)]" },
                    { step: "3", title: "Protect", desc: "12 hours of plant-based protection", color: "bg-[var(--gr-accent)]" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 px-1 py-3.5">
                      <span className={`w-9 h-9 rounded-xl ${item.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[var(--gr-dark)]">{item.title}</p>
                        <p className="text-xs text-[var(--gr-sage)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeInfoTab === "reviews" && (
                <div className="divide-y divide-[var(--gr-dark)]/5">
                  {[
                    { name: "Rebecca D.", text: "Zero bites all summer. Never going back to spray.", avatar: "RD" },
                    { name: "Jeremy H.", text: "One pack lasts the whole season for under $15.", avatar: "JH" },
                    { name: "Sarah M.", text: "My toddler thinks they\u2019re stickers. Zero bites in 3 weeks.", avatar: "SM" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-start gap-3 px-1 py-3.5">
                      <div className="w-9 h-9 rounded-full bg-[var(--gr-cream-warm)] flex items-center justify-center text-xs font-bold text-[var(--gr-green)] shrink-0">
                        {item.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--gr-dark)]">{item.name}</span>
                          <div className="flex gap-px">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <svg key={j} width="12" height="12" viewBox="0 0 20 20" fill="var(--gr-gold)">
                                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[10px] text-[var(--gr-green)] font-semibold">Verified</span>
                        </div>
                        <p className="text-sm text-[var(--gr-dark)] leading-snug">&ldquo;{item.text}&rdquo;</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>

            {/* ── Pick your supply ── */}
            <p className="text-xs font-semibold text-[var(--gr-sage)] uppercase tracking-widest mb-3">Pick your supply</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {bundles.map((bundle) => {
                const isActive = bundleSize === bundle.packs;
                const savePercent = Math.round(((bundle.compareEach - bundle.priceEach) / bundle.compareEach) * 100);
                const totalPrice = bundle.priceEach * bundle.packs;
                const totalCompare = bundle.compareEach * bundle.packs;
                return (
                  <button
                    key={bundle.packs}
                    onClick={() => setBundleSize(bundle.packs)}
                    className={`relative rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-white shadow-md ring-2 ring-[var(--gr-green)]"
                        : "bg-white shadow-sm hover:shadow-md"
                    }`}
                  >
                    {bundle.tag && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {bundle.tag === "Best Value" && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--gr-green)] text-white px-2.5 py-0.5 rounded-full whitespace-nowrap">Best Value</span>
                        )}
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--gr-accent)] text-white px-2.5 py-0.5 rounded-full whitespace-nowrap">Save {savePercent}%</span>
                      </div>
                    )}
                    <p className="text-base font-bold text-[var(--gr-dark)] mt-1">{bundle.packs}-Pack</p>
                    <p className="text-xs text-[var(--gr-sage)] mb-3">{variant.patchCount * bundle.packs} patches &middot; {bundle.packs === 2 ? "2" : "4"}-mo supply</p>
                    <p className="text-2xl font-extrabold text-[var(--gr-dark)]">${totalPrice.toFixed(2)}</p>
                    <p className="text-xs text-[var(--gr-sage)] line-through mb-2">${totalCompare.toFixed(2)}</p>
                    <div className="pt-2 border-t border-[var(--gr-dark)]/5">
                      <p className="text-xs font-bold text-[var(--gr-accent)]">${bundle.priceEach.toFixed(2)}/pack</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Subscribe & Save toggle ── */}
            <div className={`rounded-2xl p-5 mb-4 transition-all ${
              offerType === "subscribe"
                ? "bg-white shadow-md ring-2 ring-[var(--gr-green)]"
                : "bg-white shadow-sm"
            }`}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[var(--gr-green)]/10 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[var(--gr-dark)] text-sm flex items-center gap-2 flex-wrap">
                      Subscribe &amp; save <span className="text-[var(--gr-accent)]">20%</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--gr-green)] text-white px-2 py-0.5 rounded-full">Best Value</span>
                    </p>
                    <p className="text-xs text-[var(--gr-sage)] mt-0.5">Every 3 months &middot; skip, edit, or cancel anytime</p>
                  </div>
                </div>
                <button
                  onClick={() => setOfferType(offerType === "subscribe" ? "onetime" : "subscribe")}
                  className={`w-[52px] h-8 rounded-full transition-colors cursor-pointer relative shrink-0 ${
                    offerType === "subscribe" ? "bg-[var(--gr-green)]" : "bg-[var(--gr-dark)]/15"
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                    offerType === "subscribe" ? "translate-x-[22px]" : "translate-x-1"
                  }`} />
                </button>
              </div>
            </div>

            {/* ── Cross-sell add-on ── */}
            <div className="rounded-2xl bg-white shadow-sm p-4 mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[var(--gr-cream)] overflow-hidden shrink-0">
                <Image
                  src={selectedVariant === "kids" ? variantData.adults.gallery[0] : variantData.kids.gallery[0]}
                  alt={selectedVariant === "kids" ? "Adults Patches" : "Kids Patches"}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[var(--gr-dark)] leading-snug">
                  Add {selectedVariant === "kids" ? "Adults" : "Kids"} Patches
                </p>
                <p className="text-xs text-[var(--gr-dark)] mt-1">
                  <span className="font-bold text-[var(--gr-accent)]">+$9.99</span>{" "}
                  <span className="text-[var(--gr-sage)] line-through">$24.99</span>{" "}
                  &middot; <span className="text-[var(--gr-green)] font-semibold">save $15</span>
                </p>
                <p className="text-[11px] text-[var(--gr-sage)] mt-0.5">
                  {selectedVariant === "kids"
                    ? "90 patches · protect the whole family"
                    : "120 patches · fun designs kids love"}
                </p>
              </div>
              <button className="w-10 h-10 rounded-xl bg-[var(--gr-cream)] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[var(--gr-green)]/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gr-dark)" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>

            {/* ── CTA Button ── */}
            <button className="w-full py-5 bg-[var(--gr-accent)] text-white rounded-2xl hover:brightness-110 active:scale-[0.98] transition cursor-pointer shadow-lg shadow-[var(--gr-accent)]/20 mb-2">
              <p className="gr-display italic text-xl">Claim deal &middot; Save {discount}%</p>
              <p className="text-xs opacity-80 mt-0.5">
                Skip to checkout — total <span className="font-bold">${currentPrice.toFixed(2)}</span>{" "}
                <span className="line-through opacity-60">${currentCompare.toFixed(2)}</span>
              </p>
            </button>

            {/* ── Shipping info ── */}
            <div className="space-y-1.5 py-4">
              <p className="text-xs font-semibold text-[var(--gr-dark)] flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gr-green)"><circle cx="12" cy="12" r="6" /></svg>
                <span className="text-[var(--gr-green)]">In stock</span>
                <span className="text-[var(--gr-dark)]">&middot; Expected delivery in 2–3 days</span>
              </p>
              <p className="text-xs text-[var(--gr-green)] flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                Ships Mon, Jun 9 from our California warehouse
              </p>
            </div>

            {/* ── Deal timer ── */}
            <div className="bg-[var(--gr-cream)] rounded-xl p-3.5 flex items-center gap-3 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              <p className="text-sm text-[var(--gr-dark)]">
                Deal locks in <span className="font-bold">{countdownMounted ? countdownText.replace(/:/g, "h ").replace(/h\s(\d+)$/, "m $1s") : "5h 11m 26s"}</span>
              </p>
            </div>

            {/* ── Free shipping progress ── */}
            {(() => {
              const freeShipThreshold = 30;
              const remaining = Math.max(0, freeShipThreshold - currentPrice);
              const pct = Math.min(100, Math.round((currentPrice / freeShipThreshold) * 100));
              const qualified = remaining <= 0;
              return (
                <div className="bg-[var(--gr-cream)] rounded-xl p-3.5 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[var(--gr-dark)]">
                      {qualified ? (
                        <span className="font-bold text-[var(--gr-green)]">You qualify for free shipping!</span>
                      ) : (
                        <>You&apos;re <span className="font-bold text-[var(--gr-accent)]">${remaining.toFixed(2)}</span> from free shipping</>
                      )}
                    </p>
                    <span className="text-xs font-bold text-[var(--gr-accent)]">{pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-[var(--gr-cream-warm)] rounded-full overflow-hidden mb-2">
                    <div className={`h-full rounded-full transition-all duration-500 ${qualified ? "bg-[var(--gr-green)]" : "bg-[var(--gr-accent)]"}`} style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-[11px] text-[var(--gr-sage)]">
                    Ships next business day &middot; Free returns within 60 days
                  </p>
                </div>
              );
            })()}

            {/* ── Trust badges ── */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                "30-day money-back guarantee",
                "Free US shipping over $30",
                "Delivered in 2–3 business days",
                "Pediatrician reviewed & approved",
              ].map((badge) => (
                <p key={badge} className="text-xs text-[var(--gr-sage)] flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
                  </svg>
                  {badge}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
