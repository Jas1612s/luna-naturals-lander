"use client";

export function TreydHowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Apply.",
      description:
        "Online, in minutes. Get your Treyd limit within 24 hours. Holding a limit costs nothing.",
      cta: null,
    },
    {
      number: "02",
      title: "Upload an invoice.",
      description:
        "Pick the supplier invoice you want funded. Choose a payback window from 1 to 5 months. See the fixed fee before you commit.",
      cta: null,
    },
    {
      number: "03",
      title: "Sell, then repay.",
      description:
        "We pay your supplier. You sell your stock. You repay Treyd when it's due.",
      cta: { label: "Get your limit", href: "/treyd/apply" },
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "#111111",
        padding: "88px 24px 100px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "56px",
          }}
        >
          Three steps. No drama.
        </h2>

        <div
          className="grid md:grid-cols-3"
          style={{ gap: "16px", alignItems: "stretch" }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#111E17",
                border: "1px solid rgba(0,107,46,0.2)",
                borderRadius: "20px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "280px",
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#006B2E",
                  letterSpacing: "0.06em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.number}
              </div>

              {/* Text content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#F0F0F0",
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* CTA */}
              {step.cta && (
                <div>
                  <a
                    href={step.cta.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#006B2E",
                      color: "#ffffff",
                      borderRadius: "8px",
                      padding: "11px 20px",
                      fontSize: "15px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    {step.cta.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
