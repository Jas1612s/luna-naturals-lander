"use client";

import Image from "next/image";

export function TreydHero() {
  return (
    <section
      style={{
        backgroundColor: "#0A0A0A",
        paddingTop: "68px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 100px",
        }}
      >
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "48px", alignItems: "center" }}
        >
          {/* Left — text */}
          <div style={{ maxWidth: "580px" }}>
            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F2F2F2",
                marginBottom: "24px",
              }}
            >
              Sell first. Pay suppliers later.
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 1.3vw, 20px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "500px",
                marginBottom: "40px",
              }}
            >
              Supplier invoice financing for product brands. We pay your suppliers upfront. You pay us back in up to 5 months — once your stock has sold.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
              <a
                href="/treyd/apply"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#006B2E",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "15px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Get your limit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.15s, border-color 0.15s, color 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                }}
              >
                See how it works
              </a>
            </div>

            {/* Trust strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "3px" }} aria-label="4.7 out of 5 stars on Trustpilot">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect width="24" height="24" fill="#00b67a" />
                    <path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 5.5L12 14l-5 3.5 1.5-5.5L4 8.5h5.5L12 3z" fill="white" />
                  </svg>
                ))}
              </div>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}
              >
                Backing 1,000+ product brands across the UK and Nordics.
              </span>
            </div>
          </div>

          {/* Right — photo + floating stat cards */}
          <div className="hidden lg:block" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/treyd/hero.webp"
                alt="E-commerce founder browsing inventory"
                width={1200}
                height={1600}
                className="w-full"
                priority
                style={{ display: "block", objectFit: "cover", maxHeight: "520px" }}
              />
            </div>

            {/* Floating stat cards */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#1C1C1C",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                  minWidth: "140px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  £500M+
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px", fontWeight: 500 }}>
                  Amount financed
                </div>
              </div>

              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "9999px",
                  backgroundColor: "#006B2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,107,46,0.4)",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>£</span>
              </div>

              <div
                style={{
                  backgroundColor: "#1C1C1C",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                  minWidth: "120px",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  1,000+
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px", fontWeight: 500 }}>
                  Brands funded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
