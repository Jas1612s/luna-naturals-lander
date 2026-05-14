const stats = [
  {
    label: "First results",
    value: "8–12 weeks",
    note: "Most patients see meaningful results within",
  },
  {
    label: "Program duration",
    value: "6–12 months",
    note: "Significant body weight reduction over",
  },
  {
    label: "Success factor",
    value: "3×",
    note: "Better outcomes with structured nutrition + movement",
  },
];

export function WhatToExpect() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: "#F5F1E8",
        borderBottom: "1px solid rgba(11,61,46,0.1)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%230B3D2E' stroke-opacity='0.04' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1600px" }}
      >
        <p
          className="mb-6 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#0B3D2E" }}
        >
          What to expect
        </p>

        <h2
          className="mb-6"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#0B3D2E",
            maxWidth: "760px",
          }}
        >
          Honest expectations.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Real outcomes.
          </span>
        </h2>

        <p
          className="mb-14"
          style={{
            fontSize: "clamp(15px, 1.1vw, 17px)",
            lineHeight: 1.65,
            color: "rgba(11,61,46,0.65)",
            maxWidth: "620px",
          }}
        >
          GLP-1 medication, paired with the right program, produces some of the
          strongest weight-loss outcomes in modern medicine. But every body
          responds differently. Here&apos;s what the science generally shows
          when the program is run properly.
        </p>

        {/* Stats row */}
        <div className="mb-14 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(11,61,46,0.06)",
                border: "1px solid rgba(11,61,46,0.1)",
              }}
            >
              <p
                className="mb-2 font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: "rgba(11,61,46,0.45)" }}
              >
                {stat.label}
              </p>
              <p
                className="mb-2"
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  color: "#0B3D2E",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(11,61,46,0.55)",
                  lineHeight: 1.5,
                }}
              >
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="rounded-xl px-6 py-4"
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "rgba(11,61,46,0.5)",
            backgroundColor: "rgba(11,61,46,0.06)",
            border: "1px solid rgba(11,61,46,0.1)",
            maxWidth: "640px",
          }}
        >
          We won&apos;t promise you a number. We will promise you a program
          designed to give you the best shot at the result you&apos;re after,
          and the support to keep it.
        </p>
      </div>
    </section>
  );
}
