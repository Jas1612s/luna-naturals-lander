const stats = [
  { value: "1,000+", label: "brands funded" },
  { value: "24h", label: "from application to limit" },
  { value: "5 months", label: "maximum payback window" },
  { value: "1% – 1.4%", label: "fixed fee per month" },
];

export function TreydLogos() {
  return (
    <div
      style={{
        backgroundColor: "#060606",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: "32px 0" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                paddingLeft: i % 2 === 0 && i > 0 ? "0" : "0",
                paddingRight: "0",
                borderRight: "none",
              }}
              className={[
                "pr-8",
                i % 2 !== 1 ? "border-r border-white/[0.07]" : "",
                "lg:border-r lg:border-white/[0.07]",
                i === stats.length - 1 ? "lg:border-none" : "",
              ].join(" ")}
            >
              <div
                style={{
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: 700,
                  color: "#F2F2F2",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: "8px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
