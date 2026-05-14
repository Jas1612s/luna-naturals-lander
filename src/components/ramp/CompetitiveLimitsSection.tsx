"use client";

const testimonials = [
  {
    quote: "Ramp has saved us 10 hours a week in expense management. The automation is incredible — receipts match automatically and reports close themselves.",
    author: "Sarah Chen",
    title: "VP Finance",
    company: "Notion",
    metric: "10 hrs/week saved",
  },
  {
    quote: "We replaced three separate tools with Ramp. Implementation took two weeks. The savings and visibility we get are something we couldn't achieve before.",
    author: "Marcus Rivera",
    title: "CFO",
    company: "Webflow",
    metric: "3 tools replaced",
  },
  {
    quote: "The spend controls are unmatched. We can set merchant-level restrictions in real time. It's the only corporate card platform that actively helps us save money.",
    author: "Jennifer Walsh",
    title: "Head of Finance",
    company: "Shopify",
    metric: "$2.4M saved",
  },
];

export function CompetitiveLimitsSection() {
  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#FF6500",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Customer stories
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#0F0F0F",
            }}
          >
            Loved by finance teams everywhere.
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
                background: "#F7F7F4",
                border: "1px solid #E4E1DB",
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF6500">
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.79l-3.09 1.665L4.5 7.045 2 4.635l3.455-.545L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#3D3D3D",
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F0F0F" }}>{t.author}</div>
                  <div style={{ fontSize: "12px", color: "#8A8A8A" }}>{t.title}, {t.company}</div>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(255,101,0,0.08)",
                    color: "#FF6500",
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
              color: "#FF6500",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Read all customer stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
