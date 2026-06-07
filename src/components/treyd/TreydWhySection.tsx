"use client";

const cards = [
  {
    title: "Fixed fee. Zero surprises.",
    body: "See the cost before you commit. The price doesn't move.",
  },
  {
    title: "Use it or don't.",
    body: "Your limit costs nothing to hold. You only pay on the invoices you fund.",
  },
  {
    title: "Built for product businesses.",
    body: "Not a loan. Capital matched to the exact invoice, for the exact time you need it.",
  },
  {
    title: "Lighter balance sheet.",
    body: "Less working capital tied up. Better return on equity. Stronger credit profile.",
  },
];

export function TreydWhySection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        padding: "88px 24px 100px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 3.8vw, 52px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "56px",
          }}
        >
          Capital sized to the transaction.
        </h2>

        {/* Always 2-col grid — single col only on very small screens */}
        <div
          className="grid sm:grid-cols-2"
          style={{ gap: "16px" }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "36px 32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#F0F0F0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
