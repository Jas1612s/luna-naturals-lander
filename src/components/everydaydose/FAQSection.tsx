"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are the ingredients and what do they do for me?",
    answer:
      "Everyday Dose Coffee+ contains five clean, functional ingredients: Mushrooms (Lion\u2019s Mane + Chaga) for mental clarity and immune health, Grass-Fed Collagen Peptides for skin, hair, nails, and joints, L-Theanine for calm focus, and Organic Coffee Extract for clean energy with less caffeine.",
  },
  {
    question: "How much caffeine is in it?",
    answer:
      "Mild Roast Coffee+: 45mg caffeine (less than half a regular cup). Medium Roast Coffee+: 90mg caffeine (about one cup). Matcha+: 40mg caffeine (lowest option).",
  },
  {
    question: "What does it taste like?",
    answer:
      "Like a delicious cup of coffee. We use low-acidity coffee extract to capture complex flavors with chocolatey notes, making Dose taste like a full-bodied coffee with natural creaminess.",
  },
  {
    question: "Is Everyday Dose safe for pregnant or breastfeeding women?",
    answer:
      "Many customers drink Everyday Dose while pregnant or nursing after their doctor has reviewed and approved the ingredients. We always recommend consulting your healthcare provider.",
  },
  {
    question:
      "What\u2019s the difference between Medium Roast and Mild Roast?",
    answer:
      "Mild Roast: 45mg caffeine, smoother lighter taste, great if caffeine-sensitive. Medium Roast: 90mg caffeine, richer more robust flavor, better for stronger coffee taste.",
  },
  {
    question: "How much can I drink per day?",
    answer:
      "We generally recommend 1-4 cups per day. Having more just means more functional mushrooms, nootropics, and collagen.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-5 py-[60px] md:px-5">
      <div className="mx-auto max-w-[800px]">
        <h2 className="ed-heading mb-10 text-center text-[34px] font-bold">
          Questions
        </h2>

        <div>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#eee]">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-[var(--ed-dark)]"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="ml-4 flex-shrink-0 text-xl leading-none">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-[1.7] text-[#666]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-[30px] bg-[linear-gradient(90deg,#05C2F7,#E749FF)] px-12 py-4 text-sm font-bold uppercase tracking-[1px] text-white transition-opacity hover:opacity-90"
          >
            TRY DOSE TODAY
          </a>
          <p className="mt-3 text-xs text-[#666]">
            45-Day Money-Back Guaranteed*
          </p>
        </div>
      </div>
    </section>
  );
}
