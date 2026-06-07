"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Slide {
  bg: string;
  logo: string;
  title: string;
  pack: string;
  packW: number;
  decor: string | null;
  decorW?: number;
  href: string;
  newGraphic?: string;
}

const slides: Slide[] = [
  {
    bg: "/images/natpat/hero-slide-mosquito-bg.webp",
    logo: "/images/natpat/hero-slide-mosquito-logo.webp",
    title: "Mosquito Repellent Stickers",
    pack: "/images/natpat/hero-slide-buzzpatch-pack.webp",
    packW: 264,
    decor: "/images/natpat/hero-slide-two-mosquito.svg",
    decorW: 26,
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-tick-bg.webp",
    logo: "/images/natpat/hero-slide-tick-logo.svg",
    title: "Kids Tick Repellent Stickers",
    pack: "/images/natpat/hero-slide-tick-pack.webp",
    packW: 264,
    decor: null,
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-pet-tick-bg.webp",
    logo: "/images/natpat/hero-slide-pet-tick-logo.webp",
    title: "Pet Tick Repellent Stickers",
    pack: "/images/natpat/hero-slide-pet-tick-pack.webp",
    packW: 264,
    decor: null,
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-pet-zen-bg.webp",
    logo: "/images/natpat/hero-slide-calm-logo.webp",
    title: "Pet Zen Vapor Stickers",
    pack: "/images/natpat/hero-slide-pet-zen-pack.webp",
    packW: 264,
    decor: "/images/natpat/hero-slide-sparkle.svg",
    decorW: 49,
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-flea-bg.webp",
    logo: "/images/natpat/hero-slide-flea-logo.webp",
    title: "Pet Flea Repellent Stickers",
    pack: "/images/natpat/hero-slide-flea-pack.webp",
    packW: 264,
    decor: null,
    newGraphic: "/images/natpat/hero-slide-new-graphic.webp",
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-sleep-bg.webp",
    logo: "/images/natpat/hero-slide-sleep-logo.webp",
    title: "Sleep Promoting Stickers",
    pack: "/images/natpat/hero-slide-sleep-pack.webp",
    packW: 264,
    decor: "/images/natpat/hero-slide-snoring.svg",
    decorW: 49,
    href: "#",
  },
  {
    bg: "/images/natpat/hero-slide-mood-bg.webp",
    logo: "/images/natpat/hero-slide-mood-logo.webp",
    title: "Mood Calming Stickers",
    pack: "/images/natpat/hero-slide-mood-pack.webp",
    packW: 264,
    decor: "/images/natpat/hero-slide-sparkle.svg",
    decorW: 49,
    href: "#",
  },
];

interface Benefit {
  icon: string;
  text: string;
}

const benefits: Benefit[] = [
  { icon: "/images/natpat/benefit-non-toxic.webp", text: "Non Toxic, DEET free" },
  { icon: "/images/natpat/benefit-safe.webp", text: "Safe for kids (0+)" },
  { icon: "/images/natpat/benefit-flag.webp", text: "Designed in Australia" },
  { icon: "/images/natpat/benefit-shipping.webp", text: "FREE shipping" },
];

function FiveStars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="#FFB800"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M10 1l2.39 5.26L18 7.27l-4 3.9.94 5.49L10 14l-4.94 2.66L6 11.17 2 7.27l5.61-.51z" />
        </svg>
      ))}
    </div>
  );
}

export function NatPatHero() {
  const [current, setCurrent] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-advance carousel
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Sticky CTA via IntersectionObserver
  useEffect(() => {
    if (!ctaRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(ctaRef.current);
    return () => obs.disconnect();
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-x-hidden bg-white">
      {/* Desktop waving character */}
      <img
        src="/images/natpat/hero-waving-character.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-24 right-0 w-[300px] pointer-events-none"
        style={{ animation: "np-wave 4s ease-in-out infinite 3s", transform: "translateX(50%)" }}
      />

      <div className="px-5 py-8 max-w-7xl mx-auto">
        {/* Mobile title — shown above carousel */}
        <h1
          className="md:hidden text-[28px] font-[900] leading-8 text-[#1F4FC9] max-w-[327px] mx-auto mb-4 text-center"
          style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
        >
          Boost mood, focus, sleep &amp; more with our Natural Stickers
        </h1>

        {/* Mobile 5-star badge */}
        <div className="md:hidden flex flex-col items-center mb-4">
          <FiveStars />
          <p className="text-[13px] font-semibold text-[#1F1F5B] mt-1">
            4.9 / 5 · 10,000+ reviews
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[684px] mx-auto my-5">
          <div className="relative h-[280px] md:h-[440px] rounded-xl overflow-hidden">
            {/* Background */}
            <img
              src={slide.bg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Product logo — top left */}
            <img
              src={slide.logo}
              alt={slide.title}
              className="absolute left-4 md:left-6 top-4 md:top-6 w-10 md:w-[62px] object-contain"
            />

            {/* New graphic badge (flea slide) */}
            {slide.newGraphic && (
              <img
                src={slide.newGraphic}
                alt="New"
                className="absolute left-4 md:left-6 top-16 md:top-20 w-12 md:w-16 object-contain"
              />
            )}

            {/* Right panel: title, pack, CTA */}
            <div className="absolute right-0 top-0 h-full max-w-[172px] md:max-w-[271px] p-4 md:p-5 flex flex-col items-center justify-center">
              <h3 className="text-white font-bold text-base md:text-2xl text-center mb-2 leading-snug">
                {slide.title}
              </h3>
              <div className="flex -translate-x-8 md:-translate-x-16">
                <img
                  src={slide.pack}
                  alt={slide.title}
                  width={slide.packW}
                  className="max-w-[145px] md:max-w-[264px] object-contain"
                />
                {slide.decor && (
                  <img
                    src={slide.decor}
                    alt=""
                    aria-hidden="true"
                    width={slide.decorW}
                    className="self-start object-contain"
                  />
                )}
              </div>
              <a
                href={slide.href}
                className="bg-[#FF209E] text-white text-sm md:text-base font-bold uppercase px-6 md:px-8 py-2 md:py-3 rounded-full block text-center mt-2 hover:opacity-80 transition-opacity"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "rounded-full transition-all",
                  i === current
                    ? "w-3 h-3 bg-[#FF209E]"
                    : "w-1.5 h-1.5 bg-[#9AABD5]/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Desktop title — shown below carousel */}
        <h1
          className="hidden md:block text-[46px] md:text-[48px] font-[900] leading-[50px] text-[#1F4FC9] max-w-[855px] mx-auto text-center mt-0 mb-6"
          style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
        >
          Boost mood, focus, sleep &amp; more with our Natural Stickers
        </h1>

        {/* Desktop 5-star badge */}
        <div className="hidden md:flex flex-col items-center mb-6">
          <FiveStars />
          <p className="text-[14px] font-semibold text-[#1F1F5B] mt-1">
            4.9 / 5 · 10,000+ reviews
          </p>
        </div>

        {/* CTA button + natural solutions text wrapper */}
        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14"
        >
          <div className="hidden md:block text-left">
            <h2
              className="text-[24px] font-[900] text-[#1F4FC9]"
              style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
            >
              Natural Solutions for Enhanced Well-being
            </h2>
            <p className="text-[16px] font-semibold text-[#1F1F5B]">
              Better Sleep, Improved Mood, Sharper Focus, and More!
            </p>
          </div>
          <a
            href="#"
            className="block text-center uppercase font-semibold text-white rounded-[50px] hover:opacity-80 transition-opacity"
            style={{
              background: "#1F4FC9",
              fontSize: "20px",
              padding: "20px 15px",
              width: "100%",
              maxWidth: "327px",
              margin: "30px auto",
            }}
          >
            Explore NatPat Stickers
          </a>
        </div>

        {/* Money back strip */}
        <div className="md:flex md:flex-row md:gap-10 md:justify-center">
          {/* Mobile: full-bleed strip */}
          <div className="-mx-5 px-5 py-4 bg-[#F0F0F4] md:bg-transparent md:mx-0 md:px-0 md:py-0 flex items-center justify-center gap-4 md:gap-10 flex-wrap">
            {/* Money back guarantee */}
            <div className="flex items-center gap-2">
              <img
                src="/images/natpat/benefit-money-back.webp"
                alt=""
                aria-hidden="true"
                className="w-10 md:w-[40px] object-contain flex-shrink-0"
              />
              <span className="text-[14px] font-semibold text-[#1F1F5B] leading-tight">
                365-day Money Back Guarantee
              </span>
            </div>

            {/* Less buyers box */}
            <div
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 bg-[#F3F3F6]"
            >
              <img
                src="/images/natpat/benefit-shield.webp"
                alt=""
                aria-hidden="true"
                className="w-[30px] object-contain flex-shrink-0"
              />
              <p className="text-[13px] text-[#1F1F5B] leading-snug">
                <strong>Less than 0.5% of buyers</strong>
                <br className="hidden md:block" /> use our money-back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Benefits strip */}
        <div className="flex justify-center gap-1 md:gap-8 mt-6 flex-wrap">
          {benefits.map((b) => (
            <div
              key={b.text}
              className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left"
            >
              <img
                src={b.icon}
                alt=""
                aria-hidden="true"
                className="object-contain"
                style={{ maxWidth: "40px" }}
              />
              <span className="text-[14px] md:text-[16px] font-semibold text-[#1F1F5B] max-w-[71px] md:max-w-none leading-tight">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky floating CTA */}
      {isSticky && (
        <div className="fixed bottom-0 md:bottom-[30px] left-1/2 -translate-x-1/2 w-full md:max-w-[1074px] bg-white shadow-lg md:rounded-2xl px-6 py-4 flex items-center justify-center md:justify-between gap-8 z-[9999]">
          <div className="hidden md:block text-left">
            <p
              className="text-[24px] font-[900] text-[#1F4FC9]"
              style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
            >
              Natural Solutions for Enhanced Well-being
            </p>
            <p className="text-[16px] font-semibold text-[#1F1F5B]">
              Better Sleep, Improved Mood, Sharper Focus, and More!
            </p>
          </div>
          <a
            href="#"
            className="bg-[#1F4FC9] text-white text-[20px] font-semibold uppercase px-8 py-5 rounded-full block text-center hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Explore All Products
          </a>
        </div>
      )}
    </section>
  );
}
