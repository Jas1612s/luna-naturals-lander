"use client";

import Image from "next/image";

const useCases = [
  "Retailers restocking inventory",
  "Wholesalers covering bulk orders",
  "Manufacturers funding production",
  "DTC brands scaling ad spend without draining working capital",
];

const criteria = [
  "Minimum £200K annual turnover",
  "At least one filed annual report",
  "Trading in physical goods",
];

export function TreydProductSection() {
  return (
    <section
      style={{
        backgroundColor: "#060606",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "80px", alignItems: "center" }}
        >
          {/* Left — image */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/treyd/product-business.webp"
              alt="Person reviewing material samples on a desk"
              width={896}
              height={1200}
              className="w-full"
              style={{ display: "block", objectFit: "cover", maxHeight: "560px" }}
            />
          </div>

          {/* Right — text */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.8vw, 52px)",
                fontWeight: 700,
                color: "#F0F0F0",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "36px",
              }}
            >
              Built for brands that move product.
            </h2>

            {/* Use cases */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {useCases.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "9999px",
                        backgroundColor: "#006B2E",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.75)",
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div
              style={{
                backgroundColor: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
                marginBottom: "36px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "14px",
                }}
              >
                Eligibility
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {criteria.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="/treyd/apply"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#006B2E",
                  color: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px 26px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Apply now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  borderRadius: "10px",
                  padding: "13px 26px",
                  fontSize: "15px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
