const stats = [
  {
    value: "27.5M+",
    label: "Hours saved",
    desc: "Hours returned to finance teams through automation",
  },
  {
    value: "3.3%",
    label: "Average savings",
    desc: "Average reduction in company spend using Ramp",
  },
  {
    value: "75%",
    label: "Faster close",
    desc: "Faster monthly close with accounting automation",
  },
  {
    value: "2.6x",
    label: "Faster implementation",
    desc: "Faster to implement than competitors on average",
  },
];

export function SpendVisibilitySection() {
  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#00B248",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Results that matter
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#0F0F0F",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Ramp works. The numbers prove it.
          </h2>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1px", background: "#E4E1DB", borderRadius: "20px", overflow: "hidden" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                background: "#ffffff",
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 4vw, 60px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#0F0F0F",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#00B248",
                  marginBottom: "8px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#8A8A8A",
                  lineHeight: 1.5,
                  maxWidth: "160px",
                  margin: "0 auto",
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
