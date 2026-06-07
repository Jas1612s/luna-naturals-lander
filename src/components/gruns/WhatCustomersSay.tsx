"use client";

import { useState } from "react";

const categories = ["Families", "Outdoors", "Kids", "Ingredients", "Value"] as const;

const reviews: Record<string, { quote: string; name: string; age: number }> = {
  Families: {
    quote: "Stuck one on each kid before the park \u2014 zero bites. I\u2019m literally never going back to spray. These are a game-changer for our family.",
    name: "Rebecca D.",
    age: 34,
  },
  Outdoors: {
    quote: "Took these on a 4-day camping trip. Not a single bite the entire trip for any of us. The patches stayed on even while hiking in the heat.",
    name: "Marcus T.",
    age: 41,
  },
  Kids: {
    quote: "My toddler thinks they\u2019re dinosaur stickers and wants to put them on himself every morning. Three weeks, zero bites. Absolute parent win.",
    name: "Sarah M.",
    age: 29,
  },
  Ingredients: {
    quote: "As someone with eczema, I can\u2019t use DEET products. These don\u2019t touch my skin directly and the citronella oil actually keeps bugs away.",
    name: "Amanda K.",
    age: 37,
  },
  Value: {
    quote: "I used to spend $40+ a month on sprays, candles, and coils in summer. One pack of these lasts the whole season for under $15. No-brainer.",
    name: "Jeremy H.",
    age: 45,
  },
};

export function WhatCustomersSay() {
  const [active, setActive] = useState<(typeof categories)[number]>("Families");

  return (
    <section className="bg-[var(--gr-green-dark)] py-14 md:py-16 px-4 md:px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-5">
          What Customers Say
        </p>

        <p className="text-base md:text-lg font-semibold text-white leading-relaxed mb-1 italic">
          &ldquo;{reviews[active].quote}&rdquo;
        </p>
        <p className="text-sm text-white/50 mb-6">
          &mdash; {reviews[active].name} {reviews[active].age}
        </p>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 w-max mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active === cat
                    ? "border-2 border-[var(--gr-accent)] text-[var(--gr-accent)]"
                    : "border border-white/20 text-white/60 hover:border-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
