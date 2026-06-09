const FEATURES = [
  "No chemicals on skin",
  "12+ hour protection",
  "Kids apply it themselves",
  "Waterproof & sweatproof",
  "No reapplication needed",
  "Pediatrician approved",
] as const;

function Check() {
  return (
    <span style={{ color: "#3d5a3d", fontSize: "20px", fontWeight: 700 }} aria-label="Yes">
      &#10003;
    </span>
  );
}

function Cross() {
  return (
    <span style={{ color: "#ef4444", fontSize: "20px", fontWeight: 700 }} aria-label="No">
      &#10007;
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 700,
          textAlign: "center",
          color: "#1a2e1a",
          margin: "0 0 24px",
        }}
      >
        Why chemical sprays are losing to patches
      </h2>

      {/* Table */}
      <div
        style={{
          border: "1px solid #d4ddd4",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px 100px",
            background: "#fff",
            borderBottom: "1px solid #d4ddd4",
          }}
        >
          <div style={{ padding: "12px 16px" }} />
          <div
            style={{
              padding: "12px 8px",
              fontWeight: 700,
              fontSize: "16px",
              textAlign: "center",
              color: "#1a2e1a",
            }}
          >
            Luna Naturals
          </div>
          <div
            style={{
              padding: "12px 8px",
              fontWeight: 700,
              fontSize: "16px",
              textAlign: "center",
              color: "#1a2e1a",
            }}
          >
            Chemical Sprays
          </div>
        </div>

        {/* Feature rows */}
        {FEATURES.map((feature, i) => (
          <div
            key={feature}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 100px",
              background: i % 2 === 0 ? "#f5f7f4" : "#fff",
              borderBottom: i < FEATURES.length - 1 ? "1px solid #d4ddd4" : "none",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#1a2e1a",
                display: "flex",
                alignItems: "center",
              }}
            >
              {feature}
            </div>
            <div
              style={{
                padding: "12px 8px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check />
            </div>
            <div
              style={{
                padding: "12px 8px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cross />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
