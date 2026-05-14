const trustPillars = [
  "Licensed Medical Providers",
  "100% Online",
  "Clear pricing",
  "Shipped to your door",
];

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32"
      style={{
        background: "linear-gradient(166deg, rgb(27,101,73) 0%, rgb(17,33,17) 100%)",
      }}
    >
      {/* Blob decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          right: "-150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,195,144,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "500px",
          height: "500px",
          bottom: "0px",
          left: "-100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,147,111,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2">
          <span
            className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              backgroundColor: "rgba(132,195,144,0.2)",
              color: "#84C390",
              border: "1px solid rgba(132,195,144,0.3)",
            }}
          >
            100% Online Healthcare
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(42px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            fontFamily: "var(--font-sans)",
          }}
        >
          Healthcare, redefined{" "}
          <span style={{ color: "#84C390" }}>for real life.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10"
          style={{
            fontSize: "clamp(16px, 1.4vw, 20px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "600px",
            fontFamily: "var(--font-body, var(--font-sans))",
          }}
        >
          We provide medical care online—simple, direct, and led by licensed
          providers. No waiting rooms. No unnecessary steps. Just care that
          works.
        </p>

        {/* CTA */}
        <div className="mb-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "#2E936F",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
            }}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#weight-loss"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-opacity hover:opacity-70"
            style={{
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            See our programs
          </a>
        </div>

        {/* Trust pillars */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustPillars.map((pillar, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="7" stroke="rgba(132,195,144,0.6)" strokeWidth="1.5" />
                <path d="M5 8L7 10L11 6" stroke="#84C390" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(17,33,17,0.4))",
        }}
      />
    </section>
  );
}
