import Image from "next/image";

const leftCallouts = [
  "Improve Your Sleep Quality",
  "Feel Energized During The Day",
  "Don't Disturb Your Partner's Sleep",
  "Reliable Silent Wakeup",
];

const rightCallouts = [
  "Waking Up Naturally",
  "Best Device For Heavy Sleepers",
  "14+ Day Battery Life",
  "Up To 5 Alarms",
];

const stats = [
  {
    number: "93%",
    label: "Of users report waking up less groggy and feeling more rested.",
  },
  {
    number: "97%",
    label:
      "Of athletes feel immediate improvement in nasal airflow, with more energy and focus during training.",
  },
];

export function HiStripsClinical() {
  return (
    <section
      style={{
        background: "#2A2E16",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          padding: "60px 20px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: "720px",
            margin: "0 auto 40px",
            color: "#ffffff",
          }}
        >
          Clinically Designed. Backed by Experts in Sleep &amp; Respiratory
          Health.
        </h2>

        {/* White diagram card */}
        <div
          className="max-[767px]:grid-cols-1"
          style={{
            background: "#ffffff",
            color: "#2A2E16",
            borderRadius: "28px",
            padding: "40px 30px",
            display: "grid",
            gridTemplateColumns: "1fr minmax(260px, 360px) 1fr",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* LEFT column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "right",
            }}
          >
            {leftCallouts.map((text) => (
              <p
                key={text}
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.2px",
                  margin: 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* CENTER — chart */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/histrips/charts/desktop-chart.svg"
              width={300}
              height={400}
              alt="HiStrips clinical chart"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>

          {/* RIGHT column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            {rightCallouts.map((text) => (
              <p
                key={text}
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.2px",
                  margin: 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.number} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-2px",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "220px",
                  lineHeight: 1.4,
                  textAlign: "center",
                  margin: "8px auto 0",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div style={{ marginTop: "36px" }}>
          <button
            style={{
              background: "#ffffff",
              color: "#2A2E16",
              borderRadius: "9999px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 700,
              display: "inline-block",
              cursor: "pointer",
              border: "none",
            }}
          >
            SHOP NASAL STRIPS
          </button>
        </div>
      </div>
    </section>
  );
}
