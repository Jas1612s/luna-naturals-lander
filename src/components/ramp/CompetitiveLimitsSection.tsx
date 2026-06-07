"use client";

const testimonials = [
  {
    quote: "We had a $400K purchase order from a major retailer and couldn't fill it. Ramp approved us in 6 hours and wired the supplier payment the next morning. That one order 3x'd our Q4.",
    author: "James Okafor",
    title: "Founder & CEO",
    company: "Kova Goods",
    metric: "3× Q4 revenue",
  },
  {
    quote: "Our bank wanted 3 months of financials, a business plan, and a personal guarantee. Ramp connected to our Shopify, looked at our invoices, and gave us a decision the same day. No comparison.",
    author: "Priya Nair",
    title: "Co-founder",
    company: "Bloom DTC",
    metric: "$1.2M facility",
  },
  {
    quote: "Net-60 terms from our distributors were killing our cash flow. With Ramp we get 90% of every invoice upfront and the rest when they pay. We finally stopped worrying about payroll timing.",
    author: "Tom Reyes",
    title: "CEO",
    company: "Stackd Supplements",
    metric: "Cash flow solved",
  },
];

export function CompetitiveLimitsSection() {
  return (
    <section style={{ backgroundColor: "#0A0A0A" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
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
            Founder stories
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.05em",
              color: "#ffffff",
            }}
          >
            E-commerce founders who stopped waiting.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.company}
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#00B248">
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.79l-3.09 1.665L4.5 7.045 2 4.635l3.455-.545L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.75)",
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{t.author}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{t.title}, {t.company}</div>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(0,178,72,0.08)",
                    color: "#00B248",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#00B248",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Read all founder stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
