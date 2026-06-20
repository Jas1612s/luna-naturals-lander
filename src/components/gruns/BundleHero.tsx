"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/images/gruns/hero-hiker-spray.webp", alt: "Family hiking outdoors with Luna Natural patches" },
  { src: "/images/gruns/hero-camping-lifestyle.webp", alt: "Camping with mosquito protection patches" },
  { src: "/images/gruns/hero-slide2-playground.webp", alt: "Mom and toddler at playground with Luna patches" },
];

export function BundleHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "668px" }}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: "668px" }}>
        {/* Text Side */}
        <div
          className="relative z-10 flex flex-1 items-center"
          style={{ background: "linear-gradient(135deg, #2E3A1A 0%, #4A5A2E 40%, #647A3E 70%, #F5F0E6 100%)" }}
        >
          <div className="mx-auto max-w-[700px] px-4 py-6 md:px-6 md:py-12">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gr-accent)] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--gr-gold)]">
                Limited Time Bundle Deal
              </span>
            </div>

            <h1
              className="gr-display mb-4 text-[40px] leading-[1.05] md:text-[80px]"
              style={{ color: "rgba(255,255,255,0.95)", fontWeight: 400 }}
            >
              The Family{" "}
              <span className="text-[var(--gr-accent)]">Bundle</span>
            </h1>

            <p className="text-base md:text-[17px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              Protect the whole crew this summer. Adults + Kids packs together at our biggest discount ever.
            </p>

            <p className="text-sm font-semibold mb-5" style={{ color: "var(--gr-accent)" }}>
              ★★★★★ 4.8 • 50,000+ happy families
            </p>

            {/* Savings pills */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {["Save up to 60%", "Free shipping included", "Bonus gift with 3+ packs"].map((text) => (
                <span key={text} className="inline-flex items-center gap-1.5 bg-[var(--gr-accent)]/15 border border-[var(--gr-accent)]/30 rounded-full px-3.5 py-2 text-[13px] font-bold text-[var(--gr-accent)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {text}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-4 flex flex-wrap gap-3 items-center">
              <a
                href="#bundle-builder"
                className="rounded-full px-8 py-3.5 text-base font-bold transition-all hover:brightness-110 active:scale-[0.97] cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-[var(--gr-accent)]/20"
                style={{ backgroundColor: "var(--gr-accent)", color: "var(--gr-accent-text)" }}
              >
                Build Your Bundle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
              <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                Only 127 bundles left at this price
              </span>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              {[
                { icon: "shield", label: "30-day guarantee" },
                { icon: "truck", label: "Free shipping" },
                { icon: "leaf", label: "DEET-free" },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-1">
                  {item.icon === "shield" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  {item.icon === "truck" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                  {item.icon === "leaf" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>}
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: "340px" }}>
          {heroImages.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
              className="object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: activeIndex === i ? 1 : 0 }}
            />
          ))}

          {/* Save badge */}
          <div
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--gr-accent)] text-white flex flex-col items-center justify-center text-center shadow-lg"
            style={{ animation: "gr-badge-wobble 5s ease-in-out infinite" }}
          >
            <span className="text-[9px] font-bold uppercase tracking-wider leading-none opacity-80">Save</span>
            <span className="text-2xl md:text-[34px] font-extrabold leading-none">60%</span>
            <span className="text-[9px] font-bold uppercase tracking-wider leading-none opacity-80">Off</span>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="cursor-pointer"
                style={{
                  width: i === activeIndex ? "32px" : "10px",
                  height: "10px",
                  borderRadius: i === activeIndex ? "9999px" : "50%",
                  backgroundColor: i === activeIndex ? "white" : "rgba(255,255,255,0.5)",
                  border: "none",
                  padding: 0,
                  transition: "width 300ms ease, background-color 300ms ease",
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
