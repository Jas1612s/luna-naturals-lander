"use client";

import { useState, useEffect, useCallback } from "react";

const heroImages = [
  { src: "/images/gruns/hero-kid-running.webp", alt: "Child protected outdoors with Luna Natural patches" },
  { src: "/images/gruns/hero-slide2-playground.webp", alt: "Parent applying Luna Natural patch at the playground" },
  { src: "/images/gruns/hero-dad-hiking.jpg", alt: "Dad hiking with baby wearing Luna Natural patches" },
];

const rotatingWords = ["Tick", "Itch"];

export function GrunsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setWordVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "668px" }}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: "668px" }}>
        {/* Text Side – static */}
        <div
          className="relative z-10 flex flex-1 items-center"
          style={{ background: "linear-gradient(135deg, #2E3A1A 0%, #4A5A2E 40%, #647A3E 70%, #F5F0E6 100%)" }}
        >
          <div className="mx-auto max-w-[700px] px-4 py-6 md:px-6 md:py-12">
            <h2
              className="gr-display mb-6 text-[44px] leading-[1] md:text-[96px]"
              style={{ color: "rgba(255,255,255,0.95)", fontWeight: 400 }}
            >
              <span
                className="inline-block text-[var(--gr-accent)]"
                style={{
                  opacity: wordVisible ? 1 : 0,
                  transform: wordVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 300ms ease, transform 300ms ease",
                }}
              >
                {rotatingWords[wordIndex]}
              </span>{" "}
              Protection You Can Actually Trust.
            </h2>

            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 md:px-8 cursor-pointer inline-block"
                style={{ backgroundColor: "var(--gr-accent)", color: "var(--gr-accent-text)" }}
              >
                Shop Now – Save 60%
              </a>
            </div>

            <p className="text-sm font-medium" style={{ color: "var(--gr-accent)" }}>
              ★★★★★ 4.8 • 50,000+ happy families
            </p>

            <p className="text-xs mt-2 font-medium" style={{ color: "var(--gr-dark)" }}>
              Free shipping on 2+ packs &middot; 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Image carousel */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              width={1400}
              height={1400}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: activeIndex === i ? 1 : 0 }}
            />
          ))}

          {/* Dot indicators */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goToSlide(i)}
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
