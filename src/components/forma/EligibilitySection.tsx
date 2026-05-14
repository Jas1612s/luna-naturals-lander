const fitItems = [
  "Have struggled with sustained weight loss despite genuine effort",
  "Have a BMI of 27+ with weight-related concerns, or a BMI of 30+",
  "Want medical supervision, not a DIY prescription",
  "Are ready to commit to a 6+ month program",
];

const notFitItems = [
  "Want a quick fix without lifestyle change",
  "Are pregnant, breastfeeding, or trying to conceive",
  "Have certain medical conditions our doctors will screen for",
  "Are looking for the cheapest pen on the market — that's not us",
];

export function EligibilitySection() {
  return (
    <section
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
          Is Forma right for you?
        </p>

        <h2
          className="mb-14"
          style={{
            fontSize: "clamp(32px, 3.5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: "800px",
          }}
        >
          Forma works for some people.{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Not everyone.
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Fit column */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(111,232,167,0.07)",
              border: "1px solid rgba(111,232,167,0.18)",
            }}
          >
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "#6FE8A7" }}
            >
              Forma may be a fit if you…
            </p>
            <ul className="space-y-4">
              {fitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "#6FE8A7" }}
                  />
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.80)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit column */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: "rgba(255,255,255,0.44)" }}
            >
              Forma is not for you if you…
            </p>
            <ul className="space-y-4">
              {notFitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  />
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.48)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Honesty note */}
        <p
          className="mt-10"
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.35)",
            maxWidth: "560px",
          }}
        >
          This section is unusually honest for healthcare marketing. It builds
          trust precisely because most competitors will sell to anyone with a
          credit card. We&apos;re not them.
        </p>
      </div>
    </section>
  );
}
