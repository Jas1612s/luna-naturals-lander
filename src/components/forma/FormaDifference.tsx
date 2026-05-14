const othersItems = [
  "Send you a prescription and disappear",
  "No medical oversight after signup",
  "Generic protocols, not personalised",
  "No nutrition or movement support",
  "Leave you stranded when side effects hit",
  "No exit plan when you stop medication",
];

const formaItems = [
  "An MD-supervised program, end to end",
  "Ongoing care with a licensed physician",
  "Titration and plan adjusted to your body",
  "Personalised nutrition and movement protocol",
  "WhatsApp care team for real-time support",
  "Structured step-down when you&apos;re ready",
];

export function FormaDifference() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: "#0B3D2E",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
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
          The Forma difference
        </p>

        <h2
          className="mb-16"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: "760px",
          }}
        >
          Most clinics give you a prescription.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#6FE8A7",
            }}
          >
            We give you a program.
          </span>
        </h2>

        {/* Comparison grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Others column */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "#E8C87A" }}
            >
              Other GLP-1 platforms
            </p>
            <ul className="space-y-4">
              {othersItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-base font-bold leading-none"
                    style={{ color: "#E8C87A" }}
                  >
                    ✕
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Forma column */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(111,232,167,0.07)",
              border: "1px solid rgba(111,232,167,0.2)",
            }}
          >
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "#6FE8A7" }}
            >
              Forma
            </p>
            <ul className="space-y-4">
              {formaItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-base font-bold leading-none"
                    style={{ color: "#6FE8A7" }}
                  >
                    ✓
                  </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Body copy */}
        <p
          className="mt-12"
          style={{
            fontSize: "clamp(15px, 1.1vw, 17px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "680px",
          }}
        >
          Forma is the only program in India built end-to-end with a hospital.
          Your care isn&apos;t being run by a wellness app. It&apos;s being run
          by Max Healthcare doctors, with the protocols, escalation paths, and
          accountability that come with that.
        </p>
      </div>
    </section>
  );
}
