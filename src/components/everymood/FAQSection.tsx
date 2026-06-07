"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-7 business days, depending on your location. Expedited shipping options are available for faster delivery. Contact us for any specific shipping inquiries.",
  },
  {
    question: "Does my piece come in any packaging?",
    answer:
      "Yes, every item comes in our signature, eco-friendly packaging, designed to protect your product and add a touch of luxury to your unboxing experience.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select international locations. Shipping rates and delivery times vary by destination. Check our shipping page for more details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Shop Pay.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        border: "1px solid #E5E5E5",
        borderRadius: "12px",
        marginBottom: "12px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "black",
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            fontSize: "20px",
            color: "#999",
            lineHeight: 1,
            flexShrink: 0,
            marginLeft: "16px",
          }}
        >
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 24px 20px",
            fontSize: "14px",
            color: "#666",
            lineHeight: "22px",
          }}
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        width: "100%",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}
        className="max-md:grid-cols-1 em-faq-grid"
      >
        {/* Left column */}
        <div>
          <h2
            style={{
              color: "var(--em-indigo)",
              fontSize: "32px",
              fontWeight: 400,
              letterSpacing: "-1.28px",
              margin: 0,
            }}
          >
            We&apos;ve got answers.
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              marginTop: "12px",
              lineHeight: 1.6,
            }}
          >
            Clean, mood-shifting formulas that actually work&mdash;and make you
            feel good doing it. Got a question?
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginTop: "4px",
            }}
          >
            Check if you can find them here or{" "}
            <a
              href="#"
              style={{
                color: "var(--em-indigo)",
                textDecoration: "underline",
              }}
            >
              Contact us
            </a>
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "var(--em-indigo)",
                color: "white",
                borderRadius: "50px",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Customer Service
            </a>
          </div>

          {/* Decorative image */}
          <div style={{ marginTop: "32px" }}>
            <Image
              src="/images/everymood/rwerwer_1.webp"
              alt="Decorative 3D blue flower"
              width={250}
              height={250}
              style={{ width: "250px", height: "auto" }}
            />
          </div>
        </div>

        {/* Right column — Accordion */}
        <div>
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
