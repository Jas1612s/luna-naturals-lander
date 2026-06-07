"use client";

import Image from "next/image";

function AnomalyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v3M11 14h.01" />
    </svg>
  );
}
function SavingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
function InsightsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}
function AccelerationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const aiFeatures = [
  {
    Icon: AnomalyIcon,
    title: "Invoice verification in seconds",
    desc: "Our AI reads and validates your invoices instantly — checking for eligibility, duplicate submissions, and fraud signals before you ever talk to a human.",
  },
  {
    Icon: SavingsIcon,
    title: "Dynamic credit sizing",
    desc: "Your facility limit grows automatically as your revenue scales. Ramp monitors your Shopify, Amazon, and bank data to increase your line without you asking.",
  },
  {
    Icon: InsightsIcon,
    title: "Real-time cash flow forecasting",
    desc: "See exactly when invoices will pay out, what's available to draw, and how your working capital position looks over the next 30, 60, and 90 days.",
  },
  {
    Icon: AccelerationIcon,
    title: "One-click draw-down",
    desc: "Once approved, drawing funds takes seconds — not days. No forms, no calls, no waiting. Cash hits your account within one business day.",
  },
];

export function ReceiptCaptureSection() {
  return (
    <section style={{ backgroundColor: "#07090F" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#00B248",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Ramp Intelligence
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.05em",
              color: "#ffffff",
              maxWidth: "560px",
            }}
          >
            AI-powered underwriting. Human-speed decisions.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "520px",
              marginTop: "16px",
            }}
          >
            Traditional lenders take weeks to assess your business. Ramp&apos;s AI reads your invoices,
            sales data, and payment history in real time — so you get a decision in hours, not months.
          </p>
        </div>

        {/* AI image */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "40px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <Image
            src="/images/ramp/ai-underwriting.webp"
            alt="AI-powered invoice underwriting dashboard"
            width={2752}
            height={1536}
            className="w-full"
            style={{ display: "block" }}
          />
        </div>

        {/* Feature cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "16px" }}
        >
          {aiFeatures.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0,178,72,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <f.Icon />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#00B248",
              color: "white",
              borderRadius: "9999px",
              padding: "13px 28px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Explore Ramp Intelligence
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
