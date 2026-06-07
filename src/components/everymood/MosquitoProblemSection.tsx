"use client";

const PROBLEMS = [
  {
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
    title: "Disease Transmission",
    label: "MOSQUITO THREAT",
    detail: "Malaria, Dengue & Zika Spread",
  },
  {
    image: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=600&h=400&fit=crop",
    title: "Harmful Chemicals",
    label: "DEET-BASED REPELLENTS",
    detail: "Skin Irritation & Toxicity Risks",
  },
  {
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&h=400&fit=crop",
    title: "Allergic Reactions",
    label: "BUG BITE EFFECTS",
    detail: "Swelling, Itching & Infections",
  },
  {
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    title: "Outdoor Anxiety",
    label: "LIFESTYLE IMPACT",
    detail: "Avoiding Nature & Activities",
  },
];

export function MosquitoProblemSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <h2
        className="em-problem-title"
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "var(--em-black)",
          lineHeight: 1.2,
          letterSpacing: "-1px",
          margin: 0,
        }}
      >
        How traditional repellents{" "}
        <em
          style={{
            fontStyle: "italic",
            color: "var(--em-indigo)",
          }}
        >
          fail you.
        </em>
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "var(--em-text-muted)",
          marginTop: 12,
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        Conventional mosquito solutions are loaded with harsh chemicals, leave
        greasy residue, and barely last an hour. You deserve better.
      </p>

      <div
        className="em-problem-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginTop: 48,
          textAlign: "left",
        }}
      >
        {PROBLEMS.map((item) => (
          <div key={item.title}>
            <div
              style={{
                position: "relative",
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "4 / 3",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "var(--em-indigo)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                +
              </div>
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "var(--em-black)",
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--em-text-muted)",
                margin: 0,
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--em-black)",
                marginTop: 4,
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
