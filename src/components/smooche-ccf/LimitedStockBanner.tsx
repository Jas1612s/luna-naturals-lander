export function LimitedStockBanner() {
  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid #d4ddd4",
        padding: "32px 20px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        {/* Heading */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#1a2e1a",
            margin: "0 0 10px",
          }}
        >
          Mosquito season is here — limited stock
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "#4a5d4a",
            lineHeight: 1.6,
            margin: "0 0 20px",
          }}
        >
          Luna Naturals is running their biggest sale of the year &mdash; 60%
          off, free shipping, and a 30-day money-back guarantee. These sell out
          every summer. Don&apos;t wait until the bites start.
        </p>

        {/* CTA label */}
        <p
          style={{
            fontSize: "13px",
            color: "#4a5d4a",
            fontWeight: 500,
            margin: "0 0 8px",
          }}
        >
          Use offer
        </p>

        {/* CTA button */}
        <a
          href="#"
          style={{
            display: "inline-block",
            width: "100%",
            maxWidth: "400px",
            background: "#2d4a2d",
            color: "#fff",
            borderRadius: "8px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          60% OFF + FREE SHIPPING &rarr;
        </a>
      </div>
    </section>
  );
}
