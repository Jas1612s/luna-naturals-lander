"use client";

import { useEffect, useRef, useState } from "react";

const safetyCards = [
  {
    id: "chemical-free",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "Zero Chemicals on Skin",
    desc: "Patches go on clothing, never directly on your child\u2019s skin. The active oils create a protective zone around them.",
  },
  {
    id: "deet-free",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: "100% DEET-Free",
    desc: "Only plant-based citronella and eucalyptus oils. No parabens, phthalates, or synthetic fragrances.",
  },
  {
    id: "safe-ages",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Safe for Ages 2+",
    desc: "Pediatrician-reviewed formula. Trusted by 50,000+ parents for babies, toddlers, and school-age kids.",
  },
  {
    id: "cruelty-free",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
    title: "Cruelty-Free & Eco",
    desc: "Leaping Bunny certified. Recyclable packaging. 1% of every purchase supports environmental causes.",
  },
  {
    id: "lab-tested",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "3rd-Party Lab Tested",
    desc: "Every batch independently tested for potency, purity, and safety. Nothing to hide.",
  },
];

function FadeInCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function SafeForKids() {
  return (
    <section className="bg-[var(--gr-cream-warm)] px-4 md:px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <p className="text-xs font-bold text-[var(--gr-accent)] uppercase tracking-widest mb-2">
          Parent Peace of Mind
        </p>
        <h2 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-dark)] leading-tight mb-2">
          Safe enough for your<br />littlest ones.
        </h2>
        <p className="text-sm text-[var(--gr-sage)] max-w-sm mx-auto">
          We&apos;re parents too. That&apos;s why we made patches we&apos;d put on our own kids.
        </p>
      </div>

      {/* Cards — staggered fade-in on scroll */}
      <div className="max-w-[420px] mx-auto flex flex-col gap-5 md:hidden">
        {safetyCards.map((card, i) => (
          <FadeInCard key={card.id} delay={i * 100}>
            <div className="bg-[var(--gr-green-dark)] rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">{card.desc}</p>
            </div>
          </FadeInCard>
        ))}
      </div>

      {/* Desktop: grid with stagger */}
      <div className="max-w-[960px] mx-auto hidden md:grid grid-cols-3 gap-4">
        {safetyCards.map((card, i) => (
          <FadeInCard key={card.id} delay={i * 120}>
            <div className="bg-[var(--gr-green-dark)] rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">{card.desc}</p>
            </div>
          </FadeInCard>
        ))}
      </div>
    </section>
  );
}
