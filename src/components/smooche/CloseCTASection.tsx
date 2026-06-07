export function CloseCTASection() {
  return (
    <section style={{ backgroundColor: "#5A1726", padding: "80px 20px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#F5EDE6",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Set the mood.
          <br />
          <span style={{ color: "#C8A45C" }}>The rest is yours.</span>
        </h2>

        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            className="transition-colors duration-200"
            style={{
              backgroundColor: "#C8A45C",
              color: "#3D1018",
              fontSize: 15,
              fontWeight: 700,
              padding: "16px 44px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Add to Bag — $55
          </button>

          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            style={{ fontSize: 13, color: "rgba(245,237,230,0.6)" }}
          >
            <span>10 lollipops</span>
            <span style={{ color: "rgba(245,237,230,0.3)" }}>·</span>
            <span>Free discreet shipping over $75</span>
            <span style={{ color: "rgba(245,237,230,0.3)" }}>·</span>
            <span>Happy-or-refund</span>
          </div>
        </div>
      </div>
    </section>
  );
}
