"use client";

import Link from "next/link";

export function PreQualCTABanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #002B12 0%, #003D1A 50%, #004F22 100%)",
        borderTop: "1px solid rgba(0,178,72,0.2)",
        borderBottom: "1px solid rgba(0,178,72,0.2)",
      }}
      className="py-10 lg:py-14"
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        className="flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Left: messaging */}
        <div style={{ maxWidth: "620px" }}>
          {/* Label */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#4ade80",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "10px",
            }}
          >
            Invoice Financing Pre-Qualification
          </p>

          <h2
            style={{
              fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Find out how much working capital you qualify for —{" "}
            <span style={{ color: "#4ade80" }}>in 60 seconds.</span>
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              marginBottom: "0",
            }}
          >
            Answer 4 questions to get your estimated credit facility — up to $20M.
            No credit check. No personal guarantee. Built for e-commerce brands doing $500K+ in annual revenue.
          </p>
        </div>

        {/* Right: CTA block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
            flexShrink: 0,
          }}
          className="w-full lg:w-auto items-start lg:items-end"
        >
          {/* Trust line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {["No credit check", "No commitment", "Instant estimate"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5l2 2 5-5" stroke="#00B248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          <Link
            href="/ramp/pre-qualification"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#00B248",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 24px rgba(0,178,72,0.35)",
              transition: "opacity 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 32px rgba(0,178,72,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,178,72,0.35)";
            }}
          >
            Check My Eligibility
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textAlign: "right" }}>
            Decisions typically within 24 business hours
          </p>
        </div>
      </div>
    </section>
  );
}
