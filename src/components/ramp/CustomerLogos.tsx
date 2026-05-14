const companies = [
  "Shopify", "Notion", "Webflow", "Eventbrite", "Poshmark",
  "Quora", "CBRE", "Anduril", "GoodRx", "Opendoor",
  "Virgin Voyages", "Sierra Nevada", "Zola", "Discord", "Barry's",
];

export function CustomerLogos() {
  return (
    <div
      style={{
        backgroundColor: "#F7F7F4",
        borderTop: "1px solid #E4E1DB",
        borderBottom: "1px solid #E4E1DB",
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
            color: "#8A8A8A",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Trusted by 50,000+ businesses
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
                color: "#C8C4C4",
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
