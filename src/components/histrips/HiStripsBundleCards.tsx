const cards = [
  {
    backgroundImage: "url('/images/luna/bundle-all.webp')",
    heading: "Complete Protection Bundle",
    subheading: "Everything you need to stay bite-free all summer long.",
    cta: "SHOP THE BUNDLE",
  },
  {
    backgroundImage: "url('/images/luna/hero-bracelets-opt.webp')",
    heading: "Nature-Powered Protection",
    subheading: "DEET-free formulas that are safe for the whole family.",
    cta: "EXPLORE PRODUCTS",
  },
];

export function HiStripsBundleCards() {
  return (
    <>
      <style>{`
        .histrips-bundle-grid {
          display: flex;
          flex-direction: row;
          gap: 24px;
        }
        @media (max-width: 767px) {
          .histrips-bundle-grid {
            flex-direction: column;
          }
        }
      `}</style>

      <section
        style={{
          padding: "40px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="histrips-bundle-grid">
          {cards.map((card) => (
            <div
              key={card.heading}
              style={{
                flex: 1,
                minHeight: "520px",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundImage: card.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                  margin: "0 0 12px 0",
                  maxWidth: "320px",
                }}
              >
                {card.heading}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: "300px",
                }}
              >
                {card.subheading}
              </p>
              <a
                href="#"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  borderRadius: "999px",
                  padding: "12px 28px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "20px",
                  border: "none",
                }}
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
