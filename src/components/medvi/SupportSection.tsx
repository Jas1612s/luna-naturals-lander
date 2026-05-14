const supportCards = [
  {
    eyebrow: "Care Coaching",
    title: "Care coaching and nutrition support",
    body: "Certified medical assistants and registered dietitians work alongside your doctor to guide you through medication, lifestyle changes, and everything in between—so you're never figuring it out alone.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="10" r="5" stroke="#2E936F" strokeWidth="1.8" />
        <path d="M4 24c0-4.4 4.5-8 10-8s10 3.6 10 8" stroke="#2E936F" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    eyebrow: "The Details Matter",
    title: "We're creating a better healthcare experience",
    body: "Every touchpoint in your care—from the first consultation to prescription delivery—is designed to be clear, respectful, and genuinely helpful. Because you deserve healthcare that actually works for you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2.5 7.5H24l-6.5 4.7 2.5 7.5L14 19l-6 4.7 2.5-7.5L4 11.5h7.5z" stroke="#2E936F" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function SupportSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      {/* Blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "-150px",
          right: "-150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,195,144,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span
            className="mb-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ backgroundColor: "rgba(46,147,111,0.1)", color: "#2E936F" }}
          >
            Support & Coaching
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "rgb(36,34,32)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Modern healthcare,{" "}
            <span style={{ color: "#2E936F" }}>built around you</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {supportCards.map((card) => (
            <div
              key={card.eyebrow}
              className="rounded-3xl p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(36,34,32,0.07)",
                boxShadow: "0 2px 16px rgba(36,34,32,0.05)",
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "rgba(46,147,111,0.1)" }}
              >
                {card.icon}
              </div>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#2E936F", fontFamily: "var(--font-sans)" }}
              >
                {card.eyebrow}
              </p>
              <h3
                className="mb-3"
                style={{
                  fontSize: "clamp(18px, 1.5vw, 22px)",
                  fontWeight: 600,
                  color: "rgb(36,34,32)",
                  lineHeight: 1.25,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.02em",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "rgb(56,49,44)",
                  fontFamily: "var(--font-body, var(--font-sans))",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
