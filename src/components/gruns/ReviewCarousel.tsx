"use client";

import { useState, useRef, useEffect } from "react";

const reviews = [
  {
    title: "Set It and Forget It",
    quote:
      "I just stick one on my arm before heading outside and forget about it. 8 hours later, zero bites. It\u2019s honestly the simplest thing I\u2019ve ever used.",
    name: "Jeremy H.",
    tag: "Subscriber Since 2025",
    stars: 5,
  },
  {
    title: "Saves Money Every Season",
    quote:
      "I was spending $40+ a month on sprays that barely worked. One box of these lasts the whole season for less than $15. The quality is incredible.",
    name: "Lisa C.",
    tag: "Outdoor Enthusiast",
    stars: 5,
  },
  {
    title: "Kids Actually Love Them",
    quote:
      "My toddler thinks they\u2019re dinosaur stickers and wants to put them on herself every morning. Three weeks, zero bites. The fun designs are such a smart touch!",
    name: "Sarah M.",
    tag: "Mom of 2",
    stars: 5,
  },
  {
    title: "Trail Tested, Bug Free",
    quote:
      "Took these on a 4-day hiking trip. We used maybe 20 patches total for both of us. Not a single bite the entire trip. Absolute must-have for the outdoors.",
    name: "Rebecca D.",
    tag: "Adventure Couple",
    stars: 5,
  },
  {
    title: "No Smell, No Fuss",
    quote:
      "Finally something that actually works AND doesn\u2019t smell awful. My kids don\u2019t complain about putting them on. Game changer for summer camp.",
    name: "Priya K.",
    tag: "Camp Mom",
    stars: 5,
  },
  {
    title: "Lakeside Lifesaver",
    quote:
      "We live near a lake and mosquitoes are brutal. These patches have been a lifesaver. Zero DEET, zero bites, zero complaints from the kids.",
    name: "Mike T.",
    tag: "Lakeside Dad",
    stars: 5,
  },
];

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="var(--gr-accent)" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    setActive(index);
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  };

  const prev = () => scrollTo(active === 0 ? reviews.length - 1 : active - 1);
  const next = () => scrollTo(active === reviews.length - 1 ? 0 : active + 1);

  return (
    <section className="bg-[var(--gr-green-dark)] py-14 md:py-20 lg:py-28 px-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-sm font-bold text-[var(--gr-accent)] mb-1"><CountUp target={50000} /> orders</p>
            <div className="flex items-center gap-2 mb-2">
              <Stars count={5} />
              <span className="text-sm font-bold text-white/80">4.8 / 5</span>
            </div>
            <h2 className="gr-display text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              What Parents Are Saying
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition cursor-pointer text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition cursor-pointer text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          onScroll={(e) => {
            const container = e.currentTarget;
            const scrollLeft = container.scrollLeft;
            const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth ?? 300;
            const newIndex = Math.round(scrollLeft / (cardWidth + 20));
            if (newIndex !== active && newIndex >= 0 && newIndex < reviews.length) {
              setActive(newIndex);
            }
          }}
        >
          {reviews.map((review, i) => (
            <button
              key={review.name}
              onClick={() => scrollTo(i)}
              className={`shrink-0 w-[300px] md:w-[360px] snap-start text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer border-2 ${
                active === i
                  ? "bg-[var(--gr-green)] text-white border-[var(--gr-green)] scale-[1.02] shadow-lg"
                  : "bg-white/10 text-white border-white/15 hover:border-white/30 hover:bg-white/15"
              }`}
            >
              <Stars count={review.stars} />
              <p className="mt-3 font-bold text-base text-white">{review.title}</p>
              <p className={`mt-2 text-sm leading-relaxed ${active === i ? "text-white/90" : "text-white/70"}`}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-current/10">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <p className="font-bold text-sm">{review.name}</p>
                </div>
                <p className={`text-xs mt-0.5 ${active === i ? "text-white/60" : "text-white/40"}`}>
                  {review.tag} &middot; Verified Buyer
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Dot indicators (mobile) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className="cursor-pointer"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "white",
                opacity: active === i ? 1 : 0.3,
                transition: "width 300ms ease, opacity 300ms ease",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
