"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What can I finance?",
    answer:
      "Physical goods, supply chain services, and select marketing costs — anything you'll sell within a few months. Not fixed assets or long-term inventory.",
  },
  {
    question: "Where can I import from?",
    answer: "Anywhere.",
  },
  {
    question: "Where can my business be based?",
    answer:
      "UK, Ireland, Sweden, and the Nordics. More of Europe is coming.",
  },
  {
    question: "Does holding a limit cost anything?",
    answer:
      "No. You only pay on invoices you actually fund.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          minHeight: "44px",
        }}
      >
        <span
          style={{
            fontSize: "clamp(15px, 1.2vw, 17px)",
            fontWeight: 600,
            color: open ? "#ffffff" : "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
            transition: "color 0.15s",
          }}
        >
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            border: `1px solid ${open ? "rgba(0,107,46,0.4)" : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.15s, background-color 0.15s",
            backgroundColor: open ? "rgba(0,107,46,0.15)" : "transparent",
          }}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#3DBE6C" : "rgba(255,255,255,0.45)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease, stroke 0.15s",
            }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {/* Animated body */}
      <div
        style={{
          overflow: "hidden",
          height: `${height}px`,
          transition: "height 0.25s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div ref={bodyRef} style={{ paddingBottom: "22px" }}>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TreydFAQBannerSection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        padding: "88px 24px 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* FAQ header */}
        <div
          className="grid lg:grid-cols-[1fr_auto]"
          style={{ gap: "32px", alignItems: "flex-start", marginBottom: "48px" }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#006B2E",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Quick answers.
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              paddingTop: "8px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
          >
            Full FAQ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: "720px" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Final CTA — full-width green block, no bottom radius to blend into footer */}
        <div
          style={{
            marginTop: "88px",
            padding: "72px 48px 80px",
            backgroundColor: "#006B2E",
            borderRadius: "24px 24px 0 0",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            Stop letting cash flow set your ceiling.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              marginBottom: "40px",
              maxWidth: "420px",
              margin: "0 auto 40px",
            }}
          >
            Free limit estimate in 24 hours. No commitment.
          </p>
          <a
            href="/treyd/apply"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#006B2E",
              borderRadius: "10px",
              padding: "16px 40px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.15s",
              minHeight: "44px",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Apply now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
