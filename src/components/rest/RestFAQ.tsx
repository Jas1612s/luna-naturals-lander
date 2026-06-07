"use client";

import { useState, useCallback } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What makes the Evercool\u00ae Comforter different from other cooling comforters?",
    answer:
      "Evercool\u00ae offers unmatched cooling with one of the highest Qmax values on the market, delivering an instantly cool touch that lasts throughout the night.",
  },
  {
    question:
      "How does the Evercool\u00ae Comforter compare to other cooling fabrics like bamboo or silk?",
    answer:
      "The Evercool\u00ae Comforter\u2019s high Qmax score means it feels cooler to the touch than bamboo or silk, providing superior and lasting temperature regulation.",
  },
  {
    question:
      "Is the Evercool\u00ae Comforter suitable for all seasons?",
    answer:
      "Yes, the Evercool\u00ae Comforter is designed to provide cooling relief in warmer months and comfort in cooler weather, making it a versatile year-round bedding choice.",
  },
  {
    question: "Will the cooling effect wear off over time?",
    answer:
      "No, the cooling effect is built into the Evercool\u00ae fabric and does not rely on chemicals or additives that degrade, ensuring long-lasting performance.",
  },
  {
    question:
      "Is the Evercool\u00ae Comforter suitable for people with allergies or sensitive skin?",
    answer:
      "Yes, the Evercool\u00ae Comforter is hypoallergenic and OEKO-TEX\u00ae certified, making it safe for sensitive skin and those with allergies.",
  },
  {
    question:
      "How does Evercool\u00ae help reduce night sweats?",
    answer:
      "The Evercool\u00ae fabric wicks away moisture and quickly dries, keeping you comfortable and reducing the buildup of sweat, providing a more restful night\u2019s sleep.",
  },
];

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="border-b border-[#D4D1C4]">
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium text-[#2A2E16]">
          {item.question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 stroke-[#2A2E16] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <line x1="8" y1="2" x2="8" y2="14" strokeWidth="1.5" />
          <line x1="2" y1="8" x2="14" y2="8" strokeWidth="1.5" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="pb-5 text-[14px] leading-[22px] text-[#8B9077]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function RestFAQ() {
  return (
    <section className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="mb-10 text-center text-[28px] font-semibold text-[#2A2E16] md:text-[32px]">
          Questions about Evercool&reg;?
        </h2>
        <div>
          {faqData.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
