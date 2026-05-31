"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How does it work?",
    answer:
      "Our lollipops are infused with a blend of natural aphrodisiac ingredients including Damiana, Maca Root, and Tribulus Terrestris. Simply enjoy one lollipop 30-60 minutes before desired effects. The active ingredients are absorbed sublingually for faster onset.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Yes! All our ingredients are 100% natural, vegan, and FDA-compliant. Our lollipops are manufactured in a GMP-certified facility. However, if you are pregnant, nursing, or taking medication, please consult your healthcare provider before use.",
  },
  {
    question: "How strong is the effect?",
    answer:
      "Effects vary by individual, but most customers report noticeable results within 30-60 minutes. The Cherry + Damiana formula is our most popular blend, delivering a gentle, natural boost that 97% of our customers describe as effective.",
  },
  {
    question: "How long does it last?",
    answer:
      "The effects typically last 2-4 hours, depending on your individual metabolism and sensitivity. For best results, we recommend taking on an empty or light stomach.",
  },
  {
    question: "Can I use it with other products?",
    answer:
      "Our lollipops are safe to use alongside most supplements and products. However, we recommend avoiding combining with other stimulant-based supplements. If you have any concerns, consult your healthcare provider.",
  },
  {
    question: "Ingredients",
    answer:
      "Organic cane sugar, organic tapioca syrup, citric acid, natural cherry flavor, Damiana leaf extract (Turnera diffusa), Maca root extract (Lepidium meyenii), Tribulus Terrestris extract, natural color (beet juice concentrate).",
  },
  {
    question: "Shipping and returns",
    answer:
      "We offer free shipping on all orders within Canada. Orders are shipped within 1-2 business days and typically arrive within 3-5 business days. We offer a 30-day money-back guarantee — if you're not satisfied, contact us for a full refund.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 20px 60px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #D4B5AB",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full text-left py-5 focus:outline-none group"
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#3D1018",
                }}
              >
                {item.question}
              </span>
              <span
                className="shrink-0 ml-4 transition-transform duration-200"
                style={{
                  fontSize: 22,
                  fontWeight: 300,
                  color: "#8B6B6B",
                  lineHeight: 1,
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div style={{ paddingBottom: 20 }}>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5A2D35",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
