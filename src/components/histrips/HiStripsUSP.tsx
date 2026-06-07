const stats = [
  {
    number: "96",
    unit: "%",
    label: "Reported Easier Nasal Breathing*",
  },
  {
    number: "91",
    unit: "%",
    label: "Felt Clearer Airways Overnight*",
  },
  {
    number: "94",
    unit: "%",
    label: "Slept Deeper With Less Disruption*",
  },
];

export function HiStripsUSP() {
  return (
    <>
      <style>{`
        .histrips-usp-section {
          min-height: max(80vh, 750px);
          background-image: url('/images/histrips/usp/usp-bg-desktop.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }
        @media (max-width: 989px) {
          .histrips-usp-section {
            background-image: url('/images/histrips/usp/usp-bg-mobile.webp');
          }
          .histrips-usp-heading {
            font-size: 36px !important;
          }
          .histrips-usp-paragraph {
            font-size: 13px !important;
            max-width: 300px !important;
          }
        }
      `}</style>

      {/* USP hero section */}
      <section className="histrips-usp-section">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "110px",
            width: "100%",
            position: "relative",
            padding: "0 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Top block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              maxWidth: "430px",
            }}
          >
            <h2
              className="histrips-usp-heading"
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "60px",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1,
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {"Breathe Better With\nHiStrips"}
            </h2>
            <p
              className="histrips-usp-paragraph"
              style={{
                fontSize: "14px",
                color: "#ffffff",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Clinically Inspired. Habit-Forming Simplicity. HiStrips helps you
              build nasal breathing into your nightly routine, naturally,
              comfortably, and without gimmicks.
            </p>
            <a
              href="#"
              style={{
                background: "#ffffff",
                color: "#000000",
                borderRadius: "999px",
                padding: "14px 36px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                border: "none",
              }}
            >
              SHOP NASAL STRIPS
            </a>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px 20px",
              maxWidth: "500px",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: 500,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.3px",
                    margin: 0,
                  }}
                >
                  {stat.number}
                  {stat.unit}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#ffffff",
                    lineHeight: 1.3,
                    marginTop: "15px",
                    letterSpacing: "-0.3px",
                    marginBottom: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
