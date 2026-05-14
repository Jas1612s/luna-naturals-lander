import { ArrowRightIcon } from "@/components/icons";

const included = [
  "Monthly GLP-1 medication (prescribed & delivered)",
  "Licensed Max Healthcare physician oversight",
  "Personalised nutrition + movement protocol",
  "Monthly clinical review & dose adjustment",
  "WhatsApp care team access",
  "Structured step-down plan",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#0B3D2E" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23ffffff' stroke-opacity='0.035' stroke-width='1.2'><path d='M40 32 L40 48 M32 40 L48 40'/></g></svg>")`,
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
          Pricing
        </p>

        <h2
          className="mb-5"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          One subscription.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            No surprises.
          </span>
        </h2>

        <p
          className="mb-14"
          style={{
            fontSize: "clamp(15px, 1.1vw, 17px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.60)",
            maxWidth: "560px",
          }}
        >
          Includes your medication, clinical team, nutrition and movement plan,
          and ongoing support. No separate consult fees. No upsell add-ons.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Price card */}
          <div
            className="rounded-2xl p-10"
            style={{
              backgroundColor: "rgba(111,232,167,0.07)",
              border: "1px solid rgba(111,232,167,0.2)",
            }}
          >
            <p
              className="mb-2 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "#6FE8A7" }}
            >
              Monthly subscription
            </p>

            <div className="mb-8 flex items-end gap-2">
              <span
                style={{
                  fontSize: "clamp(48px, 5vw, 72px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#FFFFFF",
                }}
              >
                ₹X,XXX
              </span>
              <span
                className="mb-2 text-base"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                / month
              </span>
            </div>

            <p
              className="mb-8 text-sm"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Pricing inclusive of medication. Finalised at approval.
            </p>

            <a
              href="#assessment"
              className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#6FE8A7", color: "#0B3D2E" }}
            >
              See if you qualify
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Included list */}
          <div className="flex flex-col justify-center">
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Everything that&apos;s included
            </p>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#6FE8A7" }}
                  />
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="mt-6 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Lab tests, if recommended, are billed at Max Healthcare standard
              rates. We&apos;ll always tell you the cost before you do anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
