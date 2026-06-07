"use client";

function CloudIcon({ width = 160 }: { width?: number }) {
  const height = Math.round(width * 0.62);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 72 C18 72 8 62 8 50 C8 39 16 30 27 29 C27 17 37 8 49 8 C57 8 64 12 68 19 C71 15 76 13 82 13 C93 13 102 22 102 33 C102 34 102 35 101 36 C111 37 118 46 118 57 C118 69 108 78 96 78 L30 72 Z"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TreydTestimonialSection() {
  return (
    <section
      style={{
        backgroundColor: "#0A0A0A",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative clouds */}
      <div style={{ position: "absolute", top: "40px", left: "60px" }}>
        <CloudIcon width={160} />
      </div>
      <div style={{ position: "absolute", bottom: "60px", right: "60px" }}>
        <CloudIcon width={130} />
      </div>

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Pull quote — placeholder sized for ~25 words */}
        <div
          style={{
            borderLeft: "2px solid #006B2E",
            paddingLeft: "28px",
            textAlign: "left",
            marginBottom: "28px",
          }}
        >
          <blockquote
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              fontWeight: 500,
              color: "#F0F0F0",
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;Treyd gave us more control over cash flow and let us guarantee a negative Cash Conversion Cycle in many cases.&rdquo;
          </blockquote>
        </div>

        {/* Attribution */}
        <div style={{ textAlign: "left", paddingLeft: "28px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "2px",
            }}
          >
            Daniel Ohlson, COO
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Morjas
          </p>
        </div>

        {/* Trustpilot badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "48px",
            justifyContent: "flex-start",
            paddingLeft: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "3px" }}>
            {[1,2,3,4,5].map((i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="24" height="24" fill="#00b67a" />
                <path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 5.5L12 14l-5 3.5 1.5-5.5L4 8.5h5.5L12 3z" fill="white" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
            4.7/5 on Trustpilot
          </span>
        </div>
      </div>
    </section>
  );
}
