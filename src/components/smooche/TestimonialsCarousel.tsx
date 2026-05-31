"use client";

import { useState, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Lena, 63",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    text: "I'm 63 and honestly didn't expect much — but this lip plumper surprised me. My lips look fuller and smoother without that fake, overdone look, and the fine lines around my mouth are less noticeable. It tingles a little at first, but nothing uncomfortable. I've gotten compliments!",
  },
  {
    name: "Melissa, 34",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    text: "I saw it on TikTok and was thankful this product actually worked. My lips look plumper and feel so hydrated. The tingling is satisfying — you can tell it's working. I use it every morning and it lasts most of the day.",
  },
  {
    name: "Sophie, 28",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    text: "Game changer! I've tried so many lip plumpers and most of them do nothing. This one actually delivers visible results in minutes. My boyfriend noticed right away. The cherry flavor is a bonus — tastes amazing.",
  },
  {
    name: "Rachel, 41",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "After two weeks of using this daily, my lips genuinely look different — like I got filler but better. They're softer, more defined, and have this natural plump that I love. Worth every penny and then some.",
  },
  {
    name: "Kim, 55",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    rating: 4,
    text: "Beautiful product, great packaging. The plumping effect is noticeable and I appreciate that it's made with natural ingredients. My only note is the sensation is quite intense at first — you get used to it after a few uses though!",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={s <= count ? "#C8A45C" : "none"} aria-hidden="true">
          <path
            d="M7 1l1.6 3.3L12.2 5l-2.6 2.5.6 3.6L7 9.2 3.8 11.1l.6-3.6L1.8 5l3.6-.7L7 1z"
            stroke="#C8A45C"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  }

  return (
    <section style={{ backgroundColor: "#F5EAE4", padding: "60px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: 20, paddingRight: 20 }}>
        {/* Heading */}
        <h2 className="text-center" style={{ fontSize: 28, fontWeight: 700, color: "#3D1018", marginBottom: 32 }}>
          Loved by <span style={{ color: "#C8A45C" }}>60,000+</span>
        </h2>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors focus:outline-none"
              style={{ width: 40, height: 40, marginLeft: -4 }}
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3l-5 5 5 5" stroke="#3D1018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors focus:outline-none"
              style={{ width: 40, height: 40, marginRight: -4 }}
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="#3D1018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col rounded-2xl overflow-hidden bg-white"
                style={{ width: 280, scrollSnapAlign: "start" }}
              >
                {/* Photo */}
                <div className="relative" style={{ height: 200, backgroundColor: "#EBD3C7" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-4 flex-1">
                  {/* Name + stars row */}
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#3D1018" }}>
                      {t.name}
                    </span>
                    <StarRow count={t.rating} />
                  </div>

                  {/* Verified badge */}
                  <div className="flex items-center gap-1 mb-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="7" fill="#22c55e" />
                      <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#B01E3C", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Verified Purchase
                    </span>
                  </div>

                  {/* Review text */}
                  <p style={{ fontSize: 13, color: "#5A2D35", lineHeight: 1.55, margin: 0, flex: 1 }}>
                    {t.text.length > 180 ? t.text.slice(0, 180) + "..." : t.text}
                  </p>

                  {/* Read more link */}
                  {t.text.length > 180 && (
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#B01E3C", marginTop: 8, marginBottom: 0, cursor: "pointer" }}>
                      Read More
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
