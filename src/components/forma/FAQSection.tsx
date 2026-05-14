"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is GLP-1 medication safe?",
    a: "GLP-1 receptor agonists have been prescribed and studied for years, originally for Type 2 diabetes and now for weight management. Like any medication, they have side effects and aren't right for everyone. That's why every Forma patient is screened and monitored by an MD — not just sent a pen and a prayer.",
  },
  {
    q: "Will I gain the weight back when I stop?",
    a: "This is the question most platforms duck. The honest answer: stopping medication abruptly, without a maintenance program, often leads to rebound weight gain. That's why Forma is built around a structured step-down phase and long-term habit support — not just the months you're on the drug.",
  },
  {
    q: "What medication does Forma prescribe?",
    a: "Your doctor will recommend what's clinically appropriate for you, which may include semaglutide or other GLP-1 agonists licensed in India. We don't push a specific brand. We prescribe based on your case.",
  },
  {
    q: "Where does the medication come from?",
    a: "All medication is dispensed by licensed Indian pharmacies, against a valid prescription from your Forma physician. Authentic, traceable, cold-chain delivered.",
  },
  {
    q: "What if I have side effects?",
    a: "Most side effects (nausea, GI discomfort) are mild and improve as your body adjusts. Your care team is reachable on WhatsApp, and your doctor will adjust your dose if needed. Severe reactions are rare and managed via Max Healthcare's clinical infrastructure.",
  },
  {
    q: "Do I need to come into a clinic?",
    a: "No. The full Forma program runs from your phone. Lab tests, if recommended, can be done at any Max Healthcare facility or partner lab.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Forma is a month-to-month subscription. No lock-ins.",
  },
  {
    q: "Is my data private?",
    a: "Your medical information is held to hospital-grade privacy standards. We don't sell data. We don't share it with anyone outside your care team without your consent.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: "#F5F1E8",
        borderBottom: "1px solid rgba(11,61,46,0.1)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%230B3D2E' stroke-opacity='0.04' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1600px" }}
      >
        <p
          className="mb-6 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#0B3D2E" }}
        >
          Frequently asked
        </p>

        <h2
          className="mb-14"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#0B3D2E",
          }}
        >
          Questions we{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            actually answer.
          </span>
        </h2>

        <div
          className="divide-y"
          style={{
            borderTop: "1px solid rgba(11,61,46,0.12)",
            maxWidth: "860px",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderColor: "rgba(11,61,46,0.12)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  style={{
                    fontSize: "clamp(15px, 1.1vw, 17px)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                    color: "#0B3D2E",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="mt-0.5 shrink-0 text-xl font-light leading-none transition-transform duration-200"
                  style={{
                    color: "#0B3D2E",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p
                  className="pb-6"
                  style={{
                    fontSize: "clamp(14px, 1vw, 16px)",
                    lineHeight: 1.65,
                    color: "rgba(11,61,46,0.65)",
                  }}
                >
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
