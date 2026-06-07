const stats = [
  {
    value: "$500M+",
    label: "Advanced to brands",
    desc: "Total capital deployed to e-commerce founders since launch",
  },
  {
    value: "90%",
    label: "Avg advance rate",
    desc: "We advance up to 90% of your eligible invoice value upfront",
  },
  {
    value: "24hrs",
    label: "Avg time to fund",
    desc: "From application approval to cash in your account",
  },
  {
    value: "0%",
    label: "Equity required",
    desc: "Invoice financing — not a loan, not dilution. You keep everything.",
  },
];

export function SpendVisibilitySection() {
  return (
    <section style={{ backgroundColor: "#07090F" }} className="py-20 lg:py-28">
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
            Why founders choose Ramp
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.05em",
              color: "#ffffff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Unlock the cash trapped in your invoices.
          </h2>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "20px", overflow: "hidden" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                background: "#0A0A0A",
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 4vw, 60px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
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
                  color: "rgba(255,255,255,0.4)",
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
