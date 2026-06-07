"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/images/gruns/hero-hiker-spray.webp", alt: "Hiker spraying bug repellent on trail at sunset" },
  { src: "/images/gruns/hero-camping-lifestyle.webp", alt: "Woman camping outdoors wearing bug repellent bracelets" },
  { src: "/images/gruns/hero-slide2-playground.webp", alt: "Mom applying Luna Naturals patch to toddler at playground" },
  { src: "/images/gruns/hero-product-sky.webp", alt: "Hand holding Luna Naturals Bug Bite Relief Patches against blue sky" },
];

const rotatingWords = ["Adults", "Kids"];

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
        {/* Text Side — static */}
        <div
          className="relative z-10 flex flex-1 items-center"
          style={{ background: "linear-gradient(135deg, #2F3A1C 0%, #3A4428 40%, #4E5C36 70%, #E8DECE 100%)" }}
        >
          <div className="mx-auto max-w-[700px] px-4 py-6 md:px-6 md:py-12">
            <h2
              className="gr-display mb-6 text-[44px] leading-[1] md:text-[96px]"
              style={{ color: "rgba(255,255,255,0.95)", fontWeight: 400 }}
            >
              Bug Protection{" "}
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
              Actually Want to Wear.
            </h2>

            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 md:px-8 cursor-pointer inline-block"
                style={{ backgroundColor: "var(--gr-accent)", color: "white" }}
              >
                Shop Now — Save 60%
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
