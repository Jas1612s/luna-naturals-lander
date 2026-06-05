"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What are Luna Naturals Mosquito Repellent Patches?",
    a: "Luna Naturals patches are plant-based mosquito repellent stickers that use citronella and eucalyptus essential oils to keep bugs away. Just peel, stick on clothing, and enjoy up to 12 hours of DEET-free protection.",
  },
  {
    q: "I'm subscribed. How do I get patches on my next order?",
    a: "Your subscription automatically ships every 3 months. You can manage your subscription, skip a delivery, or add extra packs from your account dashboard at any time.",
  },
  {
    q: "When will my patches arrive?",
    a: "Standard orders ship within 1-2 business days and arrive in 3-5 business days. Orders of 2+ packs ship free. You'll receive tracking info via email as soon as your order ships.",
  },
  {
    q: "What's inside each order? What am I getting?",
    a: "Each pack contains 90 individual patches — enough to cover a family of four for the entire summer. Patches come in fun, kid-friendly designs and are individually sealed for freshness.",
  },
  {
    q: "How long does each patch last?",
    a: "Each patch provides up to 12 hours of continuous protection. For best results, apply to clothing rather than directly on skin. Replace after 12 hours or after heavy rain exposure.",
  },
  {
    q: "How do you handle returns?",
    a: "We offer a 30-day money-back guarantee — no questions asked. If you're not completely satisfied, contact us for a full refund. We'll even cover return shipping.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[var(--gr-cream)] py-16 md:py-20">
      <div className="max-w-[640px] mx-auto px-4 md:px-6">
        <h2 className="gr-display text-3xl md:text-4xl text-[var(--gr-dark)] text-center leading-tight mb-10">
          Any last questions?
        </h2>

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
