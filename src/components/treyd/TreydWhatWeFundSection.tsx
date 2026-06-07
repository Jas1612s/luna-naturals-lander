"use client";

function CloudSVG({ width = 120, stroke = "#ffffff" }: { width?: number; stroke?: string }) {
  const h = Math.round(width * 0.6);
  return (
    <svg width={width} height={h} viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M22 56 C13 56 6 49 6 40 C6 31.5 12 24.5 20 23.5 C20 14 28 7 38 7 C44.5 7 50 10 53.5 15 C56 11.5 60 9.5 65 9.5 C73.5 9.5 80.5 16.5 80.5 25 C80.5 25.8 80.4 26.5 80.3 27.3 C88 28 94 35 94 43.5 C94 52.5 86.5 60 77.5 60 L22 56 Z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const criteria = [
  {
    stat: "1 year",
    label: "Of proven success",
    description:
      "We love to see your business shine! Show us your financial performance from the past year to help us set your Treyd limit.",
  },
  {
    stat: "£200K+",
    label: "Annual revenue",
    description:
      "Your business is growing, and so are your opportunities! With a minimum turnover of £200,000, you're eligible for a Treyd limit.",
  },
  {
    stat: "Seller",
    label: "Of physical goods",
    description:
      "Are you in the business of trading physical products? Perfect! Join the Treyd family and take your growth to the next level.",
  },
];

export function TreydWhatWeFundSection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        padding: "88px 24px 100px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Top row: text left, clouds right */}
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "48px", alignItems: "flex-start", marginBottom: "80px" }}
        >
          {/* Left — text */}
          <div>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              What we fund
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 1.4vw, 20px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.4,
                marginBottom: "20px",
              }}
            >
              From raw materials to freight and marketing.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "540px",
              }}
            >
              Treyd offers supplier invoice financing for a wide range of needs, including physical goods,
              supply chain services and even marketing costs. Whether you&apos;re a retailer restocking
              inventory, a wholesaler handling bulk orders, a manufacturer managing production, or boosting
              your online presence, Treyd provides the financial support to keep your business moving and
              growing.
            </p>
          </div>

          {/* Right — decorative clouds */}
          <div
            className="hidden lg:block"
            style={{ position: "relative", height: "260px" }}
          >
            <div style={{ position: "absolute", top: "10px", right: "120px" }}>
              <CloudSVG width={140} />
            </div>
            <div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <CloudSVG width={160} />
            </div>
            <div style={{ position: "absolute", top: "90px", right: "50px" }}>
              <CloudSVG width={110} />
            </div>
            <div style={{ position: "absolute", top: "160px", right: "160px" }}>
              <CloudSVG width={80} />
            </div>
          </div>
        </div>

        {/* Criteria section */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              marginBottom: "40px",
            }}
          >
            Criteria to apply
          </h3>

          <div
            className="grid md:grid-cols-3"
            style={{ gap: "0" }}
          >
            {criteria.map((item, i) => (
              <div
                key={item.stat}
                style={{
                  padding: "0 40px 0 0",
                  borderRight: i < criteria.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  marginRight: i < criteria.length - 1 ? "40px" : "0",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 700,
                    color: "#006B2E",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "16px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
