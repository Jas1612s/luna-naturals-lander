import Image from "next/image";

const TESTIMONIALS = [
  {
    image: "/images/smooche-ccf/reviews-section.jpg",
    alt: "Before and after foundation application",
    quote:
      "I've been searching for my shade for 15 years. This is the first foundation that's actually matched my skin tone. It doesn't turn orange, it doesn't look gray\u2014it just disappears into my skin.",
    name: "Miranda",
  },
  {
    image: "/images/smooche-ccf/comparison-table.jpg",
    alt: "Before and after foundation on mature skin",
    quote:
      "I was so skeptical, but this actually works. I applied it and watched it literally change color to match my face. Eight hours later it still looked the same. No oxidation, no separation. This is insane.",
    name: "Katie",
  },
  {
    image: "/images/smooche-ccf/final-cta.jpg",
    alt: "Before and after foundation on blonde woman",
    quote:
      "I have vitiligo so my skin tone varies dramatically across my face. This is the ONLY foundation that's adapted to both my lighter and darker areas. I finally feel like myself again.",
    name: "Stephanie",
  },
] as const;

const STATS = [
  { value: "97%", description: "said it matched their exact skin tone" },
  { value: "96%", description: "said it never oxidized or changed color" },
  {
    value: "96%",
    description: "said they'd never go back to traditional foundation",
  },
] as const;

function StarRating() {
  return (
    <span
      aria-label="5 out of 5 stars"
      style={{ color: "#f59e0b", fontSize: "14px", letterSpacing: "1px" }}
    >
      {"★★★★★"}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 700,
          textAlign: "center",
          color: "#151515",
          margin: "0 0 12px",
        }}
      >
        Why smooche is loved
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontSize: "15px",
          color: "#555",
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}
      >
        Thanks to its unique and effective formula, over 10,000 complexions have
        found their perfect match with smooche.
      </p>

      {/* Testimonial cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "20px", overflowX: "auto" }}
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid #e5e5e5",
              overflow: "hidden",
              minWidth: "260px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
              <Image
                src={t.image}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 33vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#333",
                  lineHeight: 1.6,
                  margin: "0 0 12px",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <StarRating />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#151515",
                    margin: "6px 0 0",
                  }}
                >
                  {t.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div
        className="grid grid-cols-3"
        style={{
          marginTop: "36px",
          borderTop: "1px solid #e5e5e5",
          paddingTop: "28px",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.value + i}
            style={{
              textAlign: "center",
              padding: "0 12px",
              borderLeft: i > 0 ? "1px solid #e5e5e5" : "none",
            }}
          >
            <p
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#151515",
                margin: "0 0 4px",
                lineHeight: 1.1,
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#555",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
