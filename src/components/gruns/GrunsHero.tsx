"use client";

import { useState, useEffect, useCallback } from "react";

const heroImages = [
  { src: "/images/gruns/hero-slide3-hiker.png", alt: "Hiker applying bug spray in the forest" },
  { src: "/images/gruns/hero-slide2-kids.png", alt: "Mom applying Luna Naturals patch to toddler at playground" },
];

export function GrunsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((activeIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, goToSlide]);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "668px" }}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: "668px" }}>
        {/* Text Side — static */}
        <div
          className="relative z-10 flex flex-1 items-center"
          style={{ background: "linear-gradient(to bottom, #46502D, #F4F1EA)" }}
        >
          <div className="mx-auto max-w-[700px] px-4 py-6 md:px-6 md:py-12">
            <h2
              className="gr-display mb-6 text-[44px] leading-[1] md:text-[96px]"
              style={{ color: "rgba(255,255,255,0.95)", fontWeight: 400 }}
            >
              Bug Protection People Actually Want to Wear.
            </h2>

            <div className="mb-5 flex flex-wrap gap-3">
              <button
                className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 md:px-8 cursor-pointer"
                style={{ backgroundColor: "#F4693E", color: "white" }}
              >
                Save 52% + Free Shipping
              </button>
            </div>

            <p className="text-sm font-medium" style={{ color: "#F4693E" }}>
              ★★★★★ 4.8 • 100,000 reviews
            </p>
          </div>
        </div>

        {/* Image Side — carousel */}
        <div
          className="relative aspect-square flex-1 overflow-hidden md:aspect-auto"
          style={{ minHeight: "340px" }}
        >
          <img
            src={heroImages[activeIndex].src}
            alt={heroImages[activeIndex].alt}
            className="h-full w-full object-cover"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Dot Indicators */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goToSlide(i)}
                style={{
                  width: i === activeIndex ? "32px" : "10px",
                  height: "10px",
                  borderRadius: i === activeIndex ? "9999px" : "50%",
                  backgroundColor: i === activeIndex ? "white" : "rgba(255,255,255,0.5)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
