const companies = [
  "Gymshark", "MVMT", "Allbirds", "Pura Vida", "Ridge",
  "True Classic", "Hexclad", "Caraway", "Bearaby", "Cuts",
  "Graza", "Jolie", "Brightland", "Chamberlain Coffee", "Olipop",
];

export function CustomerLogos() {
  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
      className="py-10"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            textAlign: "center",
            marginBottom: "28px",
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Funding e-commerce founders at every stage
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px 32px",
          }}
        >
          {companies.map((company) => (
            <span
              key={company}
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
