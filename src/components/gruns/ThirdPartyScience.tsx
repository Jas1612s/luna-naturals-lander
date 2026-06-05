const cards = [
  {
    label: "No DEET — ever",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    label: "No Parabens — no synthetic preservatives",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Leaping Bunny Certified — cruelty-free, always",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4c-1 0-2 .5-2.5 1.5S15 8 14 9c-1 1-2 1-3 1s-2 0-3-1-1.5-2.5-2-3.5S4.5 4 4 4C3 4 2 5 2 7s1 4 3 5c1.5.8 3 1 4 1h6c1 0 2.5-.2 4-1 2-1 3-3 3-5s-1-3-2-3h-2z" />
        <circle cx="8" cy="14" r="1" fill="white" />
        <path d="M9 18c0 1.5 1.5 3 3 3s3-1.5 3-3" />
      </svg>
    ),
  },
  {
    label: "Recyclable Packaging — 1% of profits go to environmental causes",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 7.5L12 2l4.5 5.5" />
        <path d="M12 2v8" />
        <path d="M19.5 13.5L22 12l-2-4.5" />
        <path d="M22 12h-8" />
        <path d="M4.5 13.5L2 12l2-4.5" />
        <path d="M2 12h8" />
        <path d="M7.5 20.5L12 22l4.5-1.5" />
        <path d="M12 22v-8" />
      </svg>
    ),
  },
];

export function ThirdPartyScience() {
  return (
    <section className="bg-[var(--gr-green-dark)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-6 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="md:w-2/5">
          <h2 className="gr-display italic text-3xl md:text-4xl leading-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
            What&apos;s in it. What&apos;s not. No surprises.
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Work Sans', sans-serif" }}>
            Our patches use plant-based essential oils and are tested to be free of the stuff you don&apos;t want on your family&apos;s skin.
          </p>
        </div>

        {/* Icon Cards */}
        <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full w-12 h-12"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {card.iconSvg}
              </div>
              <p
                className="mt-3 text-sm text-center font-medium text-white"
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
