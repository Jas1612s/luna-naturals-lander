import { ArrowRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-20"
      style={{ backgroundColor: "#0B3D2E" }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1600px" }}
      >
        {/* Eyebrow */}
        <p
          className="mb-8 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#6FE8A7" }}
        >
          In medical partnership with Max Healthcare
        </p>

        {/* Headline */}
        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(52px, 7vw, 112px)",
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: "900px",
          }}
        >
          Real weight loss.
          <br />
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            With real doctors.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mb-10"
          style={{
            fontSize: "clamp(17px, 1.4vw, 22px)",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "560px",
          }}
        >
          Forma is India&apos;s first end-to-end GLP-1 weight care program
          — clinically led by Max Healthcare. Lose the weight, build the
          habits, keep both for life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-medium transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#6FE8A7", color: "#0B3D2E" }}
          >
            Start your medical assessment
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-base transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            See how it works
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Microcopy */}
        <p
          className="mt-4"
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.38)",
          }}
        >
          5 minutes. Reviewed by an MD within 24 hours. No charge until
          you&apos;re approved.
        </p>
      </div>
    </section>
  );
}
