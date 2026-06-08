export function LimitedStockBanner() {
  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid #e5e5e5",
        padding: "32px 20px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        {/* Heading */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#151515",
            margin: "0 0 10px",
          }}
        >
          Limited stock notice
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.6,
            margin: "0 0 20px",
          }}
        >
          Due to their secret 60% OFF discount they have limited stock.
          Don&apos;t miss out on this secret deal, they sell out quickly.
        </p>

        {/* CTA label */}
        <p
          style={{
            fontSize: "13px",
            color: "#555",
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
            background: "#000",
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
          60% OFF + FREE GIFTS &rarr;
        </a>
      </div>
    </section>
  );
}
