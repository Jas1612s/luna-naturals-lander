const BENEFITS = [
  {
    icon: "✨",
    title: "A ritual, not a regimen.",
    text: "No pills, no routine to maintain. Reach for it when you want to.",
  },
  {
    icon: "💕",
    title: "Made to be shared.",
    text: "Hand one to your partner. The heart on a stick does the flirting for you.",
  },
  {
    icon: "👜",
    title: "Discreet and beautiful.",
    text: "It looks like a treat, not a treatment. Lives happily in your nightstand drawer or your bag.",
  },
  {
    icon: "🍒",
    title: "Tastes like you'd want it to.",
    text: "Cherry that's sweet without being childish — because the experience should be a pleasure from the first lick.",
  },
];

export function BenefitsSection() {
  return (
    <section style={{ backgroundColor: "#F5EAE4", padding: "80px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          className="text-center"
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#3D1018",
            marginBottom: 40,
          }}
        >
          Why women reach for Lick.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#ffffff" }}
            >
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }} aria-hidden="true">
                {b.icon}
              </span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#3D1018", marginBottom: 6 }}>
                {b.title}
              </h3>
              <p style={{ fontSize: 14, color: "#5A2D35", lineHeight: 1.6, margin: 0 }}>
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
