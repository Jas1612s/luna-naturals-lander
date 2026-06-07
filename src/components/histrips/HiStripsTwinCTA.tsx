import Image from "next/image";

interface CTACard {
  heading: string;
  italicWord: string;
  desc: string;
  button: string;
  bgImage: string;
}

const cards: CTACard[] = [
  {
    heading: "Feel Better or Get Your",
    italicWord: "Money Back",
    desc: "We're confident you'll feel the difference. Try our Performance products and improve your Health, or it's on us.",
    button: "SHOP NASAL STRIPS",
    bgImage: "/images/histrips/feature/cta-money-back.webp",
  },
  {
    heading: "Pick Your Perfect",
    italicWord: "Bundle",
    desc: "Discover the bundle that fits your nights, training, and daily energy.",
    button: "START MY ROUTINE",
    bgImage: "/images/histrips/feature/cta-perfect-bundle.webp",
  },
];

function GradientItalicText({ text }: { text: string }) {
  return (
    <span
      style={{
        background: "linear-gradient(90deg, #E8603C, #C49B3D)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontFamily: "var(--font-instrument-serif)",
        fontStyle: "italic",
      }}
    >
      {text}
    </span>
  );
}

export function HiStripsTwinCTA() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 20 }}
      >
        {cards.map((card) => (
          <div
            key={card.button}
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              minHeight: 460,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {/* Background image */}
            <Image
              src={card.bgImage}
              alt={card.heading}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Dark overlay for readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: 400,
              }}
            >
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {card.heading}{" "}
                <GradientItalicText text={card.italicWord} />
              </h2>

              <p
                style={{
                  color: "#fff",
                  fontSize: 15,
                  opacity: 0.9,
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                {card.desc}
              </p>

              <button
                style={{
                  marginTop: 20,
                  background: "linear-gradient(90deg, #E8603C, #C49B3D)",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 1,
                  padding: "14px 28px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
