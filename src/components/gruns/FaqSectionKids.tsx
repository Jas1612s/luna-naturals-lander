"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What age is this safe for?",
    a: "Luna Naturals Kids patches are safe for children ages 2 and up. The patches stick to clothing, not skin, so there's zero direct skin contact with active ingredients. Always consult your pediatrician if you have concerns about specific allergies.",
  },
  {
    q: "Are these really DEET-free?",
    a: "100% DEET-free. We use only plant-based citronella and eucalyptus essential oils. No parabens, no phthalates, no synthetic chemicals. Just natural protection that actually works.",
  },
  {
    q: "Can my child put them on by themselves?",
    a: "Yes! That's the beauty of it. Kids as young as 3 can peel and stick the patches on their own clothes. Most kids think they're fun stickers and actually ask to wear them.",
  },
  {
    q: "How many patches does my child need?",
    a: "1-2 patches per child provides full coverage. Stick them on the collar, sleeve, or shorts near exposed skin. For heavy mosquito areas, use 2 patches on opposite sides of the body.",
  },
  {
    q: "Will they stay on during sports and swimming?",
    a: "The patches are waterproof and sweatproof. They'll stay on through soccer practice, sprinklers, and playground time. For full submersion swimming, reapply after drying off.",
  },
  {
    q: "What if my child has sensitive skin or eczema?",
    a: "Because the patches go on clothing — not skin — they're ideal for kids with sensitive skin, eczema, or allergies to topical products. The active oils evaporate into the air around the patch, creating a protective zone without skin contact.",
  },
];

export function FaqSectionKids() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[var(--gr-cream)] py-16 md:py-20 border-t border-[var(--gr-dark)]/5">
      <div className="max-w-[640px] mx-auto px-4 md:px-6">
        <h2 className="gr-display text-3xl md:text-4xl text-[var(--gr-dark)] text-center leading-tight mb-3">
          Parents ask, we answer.
        </h2>
        <p className="text-center text-sm text-[var(--gr-sage)] mb-10">
          Everything you need to know before protecting your little ones.
        </p>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[var(--gr-dark)]/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
              >
                <span className="font-bold text-base text-[var(--gr-dark)] leading-snug">
                  {faq.q}
                </span>
                <span className="text-2xl text-[var(--gr-dark)] leading-none shrink-0 mt-0.5">
                  {open === i ? "\u2212" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-[var(--gr-sage)] leading-relaxed -mt-1">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
