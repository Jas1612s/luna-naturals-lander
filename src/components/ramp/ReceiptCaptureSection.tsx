"use client";

const aiFeatures = [
  {
    icon: "🔍",
    title: "Anomaly detection",
    desc: "Automatically flags duplicate charges, out-of-policy spend, and unusual patterns before they become problems.",
  },
  {
    icon: "💡",
    title: "Proactive savings",
    desc: "Identifies negotiation opportunities, underutilized subscriptions, and vendor consolidation across your entire spend.",
  },
  {
    icon: "📊",
    title: "Instant insights",
    desc: "Real-time dashboards show exactly where every dollar goes — by employee, team, vendor, or category.",
  },
  {
    icon: "⚡",
    title: "Month-end acceleration",
    desc: "Automatic GL coding, ERP sync, and statement reconciliation cuts close time by 75% on average.",
  },
];

export function ReceiptCaptureSection() {
  return (
    <section style={{ backgroundColor: "#F7F7F4" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#FF6500",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Ramp Intelligence
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#0F0F0F",
              maxWidth: "560px",
            }}
          >
            AI that actively saves your company money.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.65,
              color: "#595959",
              maxWidth: "520px",
              marginTop: "16px",
            }}
          >
            Ramp&apos;s AI engine analyzes every transaction in real time — surfacing savings opportunities,
            flagging anomalies, and automating the financial ops your team used to do manually.
          </p>
        </div>

        {/* Feature cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "16px" }}
        >
          {aiFeatures.map((f) => (
            <div
              key={f.title}
              style={{
                background: "white",
                border: "1px solid #E4E1DB",
                borderRadius: "20px",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  marginBottom: "16px",
                  lineHeight: 1,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0F0F0F",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#595959",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FF6500",
              color: "white",
              borderRadius: "9999px",
              padding: "13px 28px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Explore Ramp Intelligence
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
