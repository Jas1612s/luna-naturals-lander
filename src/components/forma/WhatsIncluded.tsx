const features = [
  {
    icon: "⚕️",
    title: "MD oversight, end-to-end",
    body: "Your doctor isn't a one-time consult. They're with you for the duration.",
  },
  {
    icon: "💊",
    title: "Authentic medication, delivered",
    body: "Sourced from licensed Indian pharmacies. Cold-chain shipped. No grey market.",
  },
  {
    icon: "🥗",
    title: "Personalised nutrition plan",
    body: "Built for the Indian plate. High protein, muscle-preserving, vegetarian-friendly by default.",
  },
  {
    icon: "🏋️",
    title: "Movement protocol",
    body: "Strength-led, because GLP-1 alone can cost you muscle. We don't let that happen.",
  },
  {
    icon: "💬",
    title: "Side-effect support",
    body: "WhatsApp access to your care team. Real responses, fast — not chatbots.",
  },
  {
    icon: "📊",
    title: "Monthly progress reviews",
    body: "Weight, body composition, labs where indicated. We adjust based on data, not vibes.",
  },
  {
    icon: "🚪",
    title: "A real exit plan",
    body: "When you're ready to come off the medication, we step you down properly. Most platforms abandon you here. We don't.",
  },
];

export function WhatsIncluded() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#0B3D2E" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23ffffff' stroke-opacity='0.035' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1600px" }}
      >
        <p
          className="mb-6 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#6FE8A7" }}
        >
          What&apos;s included
        </p>

        <h2
          className="mb-16"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          One subscription.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#6FE8A7",
            }}
          >
            Everything you need.
          </span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.slice(0, 6).map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="mb-4 text-2xl">{feature.icon}</div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  color: "#FFFFFF",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* 7th feature highlighted */}
        <div
          className="mt-4 rounded-2xl p-7"
          style={{
            backgroundColor: "rgba(111,232,167,0.07)",
            border: "1px solid rgba(111,232,167,0.2)",
          }}
        >
          <div className="flex items-start gap-5">
            <div className="text-2xl">{features[6].icon}</div>
            <div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#6FE8A7",
                  letterSpacing: "-0.015em",
                }}
              >
                {features[6].title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "560px",
                }}
              >
                {features[6].body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
