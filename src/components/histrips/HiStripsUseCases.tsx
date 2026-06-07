import Image from "next/image";

const useCases = [
  {
    image: "/images/histrips/usecase/sleep.webp",
    heading: "Snore Less, Sleep Better",
    body: "Apply before bed to open nasal passages, reduce snoring, and unlock deeper, more restorative sleep, naturally.",
  },
  {
    image: "/images/histrips/usecase/workout.webp",
    heading: "Power Your Workouts",
    body: "Use pre-workout to improve airflow and stamina. HiStrips support better oxygen delivery so you can push harder, longer.",
  },
  {
    image: "/images/histrips/usecase/breathwork.webp",
    heading: "Calm Your System",
    body: "Wear during breathwork or meditation to reduce heart rate, ease anxiety, and support parasympathetic recovery.",
  },
  {
    image: "/images/histrips/usecase/recovery.webp",
    heading: "Recover When Sick",
    body: "When congestion hits, HiStrips act as a non-medicated decongestant, easing airflow and helping you breathe freely.",
  },
];

export function HiStripsUseCases() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "30px 20px 50px",
      }}
    >
      {/* Small label */}
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          textAlign: "center",
          color: "#666",
          marginBottom: "8px",
        }}
      >
        HiStrips sessions for better nasal flow
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
          margin: "0 auto",
          color: "#2A2E16",
        }}
      >
        Snore Less. Perform More.
      </h2>

      {/* Cards container */}
      <div
        className="max-[767px]:grid-cols-2"
        style={{
          maxWidth: "1300px",
          margin: "30px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {useCases.map((useCase) => (
          <div
            key={useCase.heading}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#FADCC5",
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
                src={useCase.image}
                alt={useCase.heading}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 767px) 50vw, 25vw"
              />
            </div>

            {/* Card text */}
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-1.2px",
                  color: "#2A2E16",
                  marginBottom: "8px",
                }}
              >
                {useCase.heading}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#555",
                  maxWidth: "280px",
                  margin: 0,
                }}
              >
                {useCase.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
