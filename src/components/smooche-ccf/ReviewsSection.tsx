import Image from "next/image";

const TESTIMONIALS = [
  {
    image: "/images/smooche-ccf/reviews-section.jpg",
    alt: "Happy child wearing mosquito repellent patch outdoors",
    quote:
      "My daughter used to scream when I tried to spray her. Now she picks her own patch \u2014 she calls it her \u2018bug shield sticker.\u2019 We\u2019ve gone the entire summer without a single bite. I wish I\u2019d found these years ago.",
    name: "Jessica",
  },
  {
    image: "/images/smooche-ccf/comparison-table.jpg",
    alt: "Kid at camp with zero mosquito bites",
    quote:
      "I was a skeptic. $9.99 for 120 patches? Seemed too cheap to work. But my son wore one to camp and came back with zero bites while his friends were scratching all night. We\u2019re on our third pack now.",
    name: "Amanda",
  },
  {
    image: "/images/smooche-ccf/final-cta.jpg",
    alt: "Mother applying patch sticker on child",
    quote:
      "I have three kids under 6. The morning spray routine was a nightmare \u2014 screaming, tears, chemical smell everywhere. These patches turned a 15-minute battle into a 10-second sticker moment. Life-changing.",
    name: "Rachel",
  },
] as const;

const STATS = [
  { value: "98%", description: "said their kids had zero bites while wearing patches" },
  { value: "97%", description: "said their kids applied the patches themselves" },
  {
    value: "96%",
    description: "said they'll never go back to chemical sprays",
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
          color: "#1a2e1a",
          margin: "0 0 12px",
        }}
      >
        Why parents love Luna Naturals
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontSize: "15px",
          color: "#4a5d4a",
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}
      >
        Thanks to its plant-based formula and kid-friendly design, over 50,000
        families have made the switch from chemical sprays to patches.
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
              border: "1px solid #d4ddd4",
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
                    color: "#1a2e1a",
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
          borderTop: "1px solid #d4ddd4",
          paddingTop: "28px",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.value + i}
            style={{
              textAlign: "center",
              padding: "0 12px",
              borderLeft: i > 0 ? "1px solid #d4ddd4" : "none",
            }}
          >
            <p
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#1a2e1a",
                margin: "0 0 4px",
                lineHeight: 1.1,
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#4a5d4a",
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
