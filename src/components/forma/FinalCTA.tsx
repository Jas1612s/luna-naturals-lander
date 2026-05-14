import { ArrowRightIcon } from "@/components/icons";

export function FinalCTA() {
  return (
    <section
      id="assessment"
      className="relative overflow-hidden py-28"
      style={{ backgroundColor: "#04130D" }}
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
        className="relative z-10 mx-auto px-6 text-center"
        style={{ maxWidth: "1600px" }}
      >
        <p
          className="mb-8 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#6FE8A7" }}
        >
          Ready to begin
        </p>

        <h2
          className="mx-auto mb-6"
          style={{
            fontSize: "clamp(40px, 5vw, 88px)",
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: "900px",
          }}
        >
          Start with the assessment.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#6FE8A7",
            }}
          >
            The rest follows.
          </span>
        </h2>

        <p
          className="mx-auto mb-12"
          style={{
            fontSize: "clamp(15px, 1.2vw, 18px)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "540px",
          }}
        >
          Five minutes. No payment until you&apos;re approved. If GLP-1
          isn&apos;t right for you, our doctors will tell you that — and
          we&apos;ll point you somewhere that is.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-full px-9 py-5 text-base font-medium transition-opacity hover:opacity-85"
          style={{ backgroundColor: "#6FE8A7", color: "#0B3D2E" }}
        >
          Start my assessment
          <ArrowRightIcon className="h-4 w-4" />
        </a>

        <p
          className="mt-5 text-xs"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          No credit card required. Results reviewed by an MD within 24 hours.
        </p>
      </div>
    </section>
  );
}
