import Image from "next/image";

const cards = [
  {
    image: "/images/histrips/performance/frame-1.webp",
    heading: "Strong hold, immediate airflow",
    body: "Strong hold, immediate airflow expansion, no fiddling, no reapplying.",
  },
  {
    image: "/images/histrips/performance/frame-2.webp",
    heading: "Engineered for Motion",
    body: "Built for performance, the nasal strip grip doesn't budge, even during sweat-heavy workouts or deep sleep.",
  },
  {
    image: "/images/histrips/performance/frame-3.webp",
    heading: "Stable, Yet Flexible",
    body: "No collapsing. No warping. The reinforced band ensures consistent lift with a soft-touch feel.",
  },
  {
    image: "/images/histrips/performance/frame-4.webp",
    heading: "Medical Grade",
    body: "Crafted with hypoallergenic, FDA-registered materials. Strong enough for performance, gentle enough for nightly wear.",
  },
];

export function HiStripsPerformance() {
  return (
    <section
      style={{
        background: "#FADCC5",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#666",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Performance-focused
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "46px",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-1.84px",
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto 30px",
            color: "#2A2E16",
          }}
        >
          Engineered For Any Condition
        </h2>

        {/* Card grid */}
        <div
          className="max-[767px]:grid-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.heading}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* Card image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1",
                  width: "100%",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.heading}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 767px) 50vw, 25vw"
                />
              </div>

              {/* Card text */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "-1px",
                    marginBottom: "8px",
                    color: "#2A2E16",
                  }}
                >
                  {card.heading}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
