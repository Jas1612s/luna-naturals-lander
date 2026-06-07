import Image from "next/image";

const experts = [
  {
    image: "/images/histrips/experts/doctor-samuel.webp",
    quote:
      '"My patients struggling with chronic nasal blockage often miss how big of an impact it has on their sleep and focus. Histrips provides a non-invasive way to support better oxygen flow and quality of life."',
    name: "Samuel A.",
    title: "ENT Specialist & Clinical Researcher",
  },
  {
    image: "/images/histrips/experts/doctor-sommer.webp",
    quote:
      '"Most of my clients dealing with chronic mouth breathing don\'t realize how much it disrupts their sleep and recovery. Histrips offers a non-invasive way to restore natural airflow."',
    name: "Sommer L.",
    title: "Sleep Advisor",
  },
  {
    image: "/images/histrips/experts/doctor-ercan.webp",
    quote:
      '"Nasal breathing matters for oral health. Patients who use Histrips at night report less dry mouth, better tolerance of their night guard, and calmer sleep. It\'s a small habit with a big quality-of-life payoff."',
    name: "Ercan A.",
    title: "Dentist & Hygienist",
  },
];

export function HiStripsExpertSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      {/* Header */}
      <div>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#000",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Backed by Experts & Trusted by
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #E8603C, #C49B3D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everyday Performers
          </span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#666",
            maxWidth: 600,
            marginTop: 12,
            lineHeight: 1.6,
          }}
        >
          Clinically driven, customer validated. From health researchers to
          active professionals, Histrips is a go-to for optimized breathing and
          recovery.
        </p>
      </div>

      {/* Expert Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 24, marginTop: 40 }}
      >
        {experts.map((expert) => (
          <div
            key={expert.name}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {/* Photo */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: 24 }}>
              <p
                style={{
                  fontSize: 15,
                  color: "#333",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {expert.quote}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 16,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  {expert.name}
                </span>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  margin: "4px 0 0 24px",
                }}
              >
                {expert.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
