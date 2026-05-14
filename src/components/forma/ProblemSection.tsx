export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#F5F1E8" }}
    >
      {/* Grid texture on light bg */}
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
          The problem
        </p>

        <h2
          className="mb-8"
          style={{
            fontSize: "clamp(36px, 4vw, 68px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#0B3D2E",
            maxWidth: "860px",
          }}
        >
          You&apos;ve tried everything.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            So has everyone else.
          </span>
        </h2>

        <div
          style={{
            maxWidth: "640px",
            borderLeft: "2px solid rgba(11,61,46,0.2)",
            paddingLeft: "24px",
          }}
        >
          <p
            className="mb-5"
            style={{
              fontSize: "clamp(16px, 1.2vw, 18px)",
              lineHeight: 1.6,
              color: "rgba(11,61,46,0.72)",
            }}
          >
            Crash diets. Fitness apps. The same advice, repackaged. The
            numbers say it all — for most people, weight loss without medical
            support fails inside a year.
          </p>
          <p
            className="mb-5"
            style={{
              fontSize: "clamp(16px, 1.2vw, 18px)",
              lineHeight: 1.6,
              color: "rgba(11,61,46,0.72)",
            }}
          >
            GLP-1 medication changed that. But a prescription on its own
            isn&apos;t a program. And weight loss without a program is just
            weight loss waiting to come back.
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 1.2vw, 18px)",
              lineHeight: 1.6,
              color: "#0B3D2E",
              fontWeight: 500,
            }}
          >
            That&apos;s what Forma fixes.
          </p>
        </div>
      </div>
    </section>
  );
}
