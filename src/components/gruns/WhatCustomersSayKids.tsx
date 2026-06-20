"use client";

import { useState } from "react";

const categories = ["Parents", "Daycare", "Outdoors", "Sensitive Skin", "Value"] as const;

const reviews: Record<string, { quote: string; name: string; age: number }> = {
  Parents: {
    quote: "My 3-year-old calls them her \u2018magic stickers\u2019 and reminds ME to put them on before we go outside. Zero meltdowns, zero bites. This is the parenting hack I didn\u2019t know I needed.",
    name: "Sarah M.",
    age: 29,
  },
  Daycare: {
    quote: "I send a pack with my son to daycare every summer. The teachers love them because there\u2019s no spray to apply \u2014 just peel and stick. He comes home bite-free every single day.",
    name: "Michelle R.",
    age: 33,
  },
  Outdoors: {
    quote: "Soccer practice, camping trips, backyard playdates \u2014 my kids wear these for everything. They last the whole day and I don\u2019t have to chase anyone down with a spray bottle.",
    name: "David K.",
    age: 38,
  },
  "Sensitive Skin": {
    quote: "My daughter has eczema and reacts to everything. These patches don\u2019t touch her skin directly and she\u2019s had zero irritation. Finally something that works for sensitive kids.",
    name: "Amanda K.",
    age: 37,
  },
  Value: {
    quote: "90 patches for under $10? That\u2019s the entire summer covered for both my kids. I was spending $30/month on sprays they hated. This is a no-brainer for any parent.",
    name: "Jeremy H.",
    age: 42,
  },
};

export function WhatCustomersSayKids() {
  const [active, setActive] = useState<(typeof categories)[number]>("Parents");

  return (
    <section className="bg-[var(--gr-green-dark)] py-14 md:py-16 px-4 md:px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-5">
          What Parents Say
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
