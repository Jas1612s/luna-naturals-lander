import { ArrowRightIcon } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Take your assessment",
    body: "A 5-minute medical questionnaire covers your history, goals, and current health. No fluff, no upsells — just what your doctor needs to see you clearly.",
  },
  {
    number: "02",
    title: "Talk to a Max Healthcare physician",
    body: "A licensed MD reviews your case and meets you on a video call. If GLP-1 isn't right for you, they'll say so. Honestly. We don't prescribe to people who shouldn't be on it.",
  },
  {
    number: "03",
    title: "Receive your medication, discreetly",
    body: "If you're approved, your medication ships from a licensed Indian pharmacy in temperature-controlled packaging. Authentic, prescribed, traceable.",
  },
  {
    number: "04",
    title: "Stay supported, every week",
    body: "Your care team checks in. Your dose adjusts as your body responds. Your nutrition and movement plan evolve. You're not alone with a pen.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: "#072018",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1600px" }}
      >
        <p
          className="mb-6 font-mono text-xs uppercase tracking-[0.18em]"
          style={{ color: "#6FE8A7" }}
        >
          How it works
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
          Four steps.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Start to results.
          </span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="mb-5 font-mono"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "#6FE8A7",
                  textTransform: "uppercase",
                }}
              >
                Step {step.number}
              </p>
              <h3
                className="mb-4"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#6FE8A7", color: "#0B3D2E" }}
          >
            Start your assessment
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
