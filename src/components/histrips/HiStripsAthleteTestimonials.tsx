import Image from "next/image";

const testimonials = [
  {
    image: "/images/histrips/ugc/ugc-marisa.webp",
    review:
      "These nasal strips are real game changers, they help me get more air through my nose while running",
    name: "Marisa P. | Marathon Runner",
  },
  {
    image: "/images/histrips/ugc/ugc-chris.webp",
    review:
      "Elite 15 pace leaves zero room for weak breathing, these nasal strips keep my oxygen maxed out wall to wall",
    name: "Chris V. | HYROX Elite 15 Athlete",
  },
  {
    image: "/images/histrips/ugc/ugc-conrad.webp",
    review:
      "Huge difference with these nasal strips. I can breathe so much better while riding",
    name: "Conrad M. | Motocross Athlete",
  },
  {
    image: "/images/histrips/ugc/ugc-thiago.webp",
    review:
      "Long rallies, five-set battles, clean breathing is everything at this level. These nasal strips keep me sharp point after point",
    name: "Thiago Tirante | ATP Tennis Player",
  },
  {
    image: "/images/histrips/ugc/ugc-jaume.webp",
    review:
      "Full throttle laps demand full airflow, these nasal strips keep my breathing locked in at 300 km/h",
    name: "Jaume M. | MotoGP Rider",
  },
  {
    image: "/images/histrips/ugc/ugc-fermin.webp",
    review:
      "Crazy how much cleaner I breathe with these strips on. Total game changer for long races",
    name: "Fermin A. | MotoGP Rider for GRESINI",
  },
  {
    image: "/images/histrips/ugc/ugc-alfonso.webp",
    review:
      "Recovery starts with breathing. These strips open up my airways so I can push harder and recover faster",
    name: "Alfonso G. | Hyrox Athlete",
  },
];

export function HiStripsAthleteTestimonials() {
  // Duplicate for seamless infinite loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <section
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "40px 0",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes histrips-scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `,
        }}
      />
      <div
        style={{
          display: "flex",
          gap: 0,
          animation: "histrips-scroll-left 40s linear infinite",
          width: "fit-content",
        }}
      >
        {allCards.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            style={{
              width: 360,
              height: 500,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background athlete photo */}
            <Image
              src={t.image}
              alt={t.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Dark gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)",
              }}
            />

            {/* Content at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 20,
                zIndex: 1,
              }}
            >
              {/* Stars */}
              <div
                style={{
                  fontSize: 20,
                  color: "#FFD700",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                {"★★★★★"}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "#fff",
                  fontSize: 14,
                  lineHeight: 1.5,
                  margin: "0 0 12px 0",
                }}
              >
                {t.review}
              </p>

              {/* Name with verified badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
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
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
