"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const leftCards: BenefitCard[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" stroke="#4A5A2E" strokeWidth="2" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#4A5A2E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="10" r="1" fill="#4A5A2E" />
        <circle cx="15" cy="10" r="1" fill="#4A5A2E" />
      </svg>
    ),
    title: "No More Spray Battles",
    description: "Fun sticker designs kids actually want to wear. Zero arguments at the door.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 3c-1.5 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3.5-6-5-9z" stroke="#4A5A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3c-1.5 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3.5-6-5-9z" fill="#4A5A2E" fillOpacity="0.15" />
      </svg>
    ),
    title: "Ingredients You Can Pronounce",
    description: "Peppermint, Cedarwood, and Citronella. Plant-based oils that actually work.",
  },
];

const rightCards: BenefitCard[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M20 6L9 17l-5-5" stroke="#4A5A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="20" height="16" rx="2" stroke="#4A5A2E" strokeWidth="2" transform="translate(0 2)" />
      </svg>
    ),
    title: "Stick It and Forget It",
    description: "Apply to hats, shirts, or backpacks in seconds. No reapplying, no mess, no stress.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" stroke="#4A5A2E" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#4A5A2E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "It Lasts All Day",
    description: "One patch lasts 8+ hours. From morning drop-off to after-dinner fireflies.",
  },
];

function BenefitCardComponent({ card, align }: { card: BenefitCard; align: "left" | "right" }) {
  return (
    <div
      className={`flex items-start gap-4 border-2 border-[var(--gr-green)] rounded-2xl p-5 bg-[var(--gr-cream-light)] ${
        align === "left" ? "flex-row" : "flex-row-reverse text-left"
      }`}
    >
      <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--gr-green)]/15 flex items-center justify-center">
        {card.icon}
      </div>
      <div>
        <h3 className="font-bold text-base text-[var(--gr-dark)]">{card.title}</h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

function AnimatedPouch({ className, children }: { className: string; children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: [0, 3, -3, 2, -1, 0] } : {}}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.5, type: "spring", bounce: 0.4 },
        rotate: { duration: 0.8, delay: 0.4, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ValueProps() {
  return (
    <section className="bg-[var(--gr-cream)] py-16 md:py-24 px-4">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="gr-display text-3xl md:text-4xl lg:text-5xl text-[var(--gr-green-dark)] leading-tight font-bold">
          Here&apos;s Why Parents Love Luna Naturals
        </h2>
      </div>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden max-w-md mx-auto space-y-8">
        {/* Product image placeholder */}
        <a href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer">
          <AnimatedPouch className="aspect-[3/4] max-w-[360px] mx-auto rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <img loading="lazy" src="/images/gruns/luna-natural-pouch.webp" alt="Luna Natural Mosquito Repellent Patches" className="w-full h-full object-cover" />
          </AnimatedPouch>
        </a>
        {/* All cards stacked */}
        <div className="space-y-4">
          {[...leftCards, ...rightCards].map((card) => (
            <BenefitCardComponent key={card.title} card={card} align="left" />
          ))}
        </div>
      </div>

      {/* Desktop: 3-col layout with product in center */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-10 max-w-[1200px] mx-auto items-center">
        {/* Left cards */}
        <div className="flex flex-col gap-8 justify-center">
          {leftCards.map((card) => (
            <BenefitCardComponent key={card.title} card={card} align="left" />
          ))}
        </div>

        {/* Center product image placeholder */}
        <a href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer">
          <AnimatedPouch className="w-[400px] xl:w-[460px] aspect-[3/4] rounded-2xl overflow-hidden shrink-0 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <img loading="lazy" src="/images/gruns/luna-natural-pouch.webp" alt="Luna Natural Mosquito Repellent Patches" className="w-full h-full object-cover" />
          </AnimatedPouch>
        </a>

        {/* Right cards */}
        <div className="flex flex-col gap-8 justify-center">
          {rightCards.map((card) => (
            <BenefitCardComponent key={card.title} card={card} align="right" />
          ))}
        </div>
      </div>
    </section>
  );
}
