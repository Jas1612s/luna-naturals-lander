export function ClinicalTeam() {
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
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <p
              className="mb-6 font-mono text-xs uppercase tracking-[0.18em]"
              style={{ color: "#6FE8A7" }}
            >
              The clinical team
            </p>

            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 3.5vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              This isn&apos;t a startup{" "}
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                playing doctor.
              </span>
            </h2>

            <p
              className="mb-8"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.60)",
                maxWidth: "520px",
              }}
            >
              Forma is built in clinical partnership with Max Healthcare — one
              of India&apos;s largest and most respected hospital networks, with
              21+ facilities and decades of specialist care behind it.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.60)",
                maxWidth: "520px",
              }}
            >
              Every patient on Forma is overseen by a licensed MD. Our
              protocols are reviewed by Max&apos;s endocrinology and metabolic
              health specialists. Our escalation paths run into a real hospital,
              not a customer service queue.
            </p>

            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.88)",
                fontWeight: 500,
                maxWidth: "520px",
              }}
            >
              When you join Forma, you&apos;re not buying access to a pharmacy.
              You&apos;re joining a program that hospitals built.
            </p>
          </div>

          {/* Right: Max Healthcare card */}
          <div
            className="rounded-2xl p-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Max Healthcare logo placeholder */}
            <div
              className="mb-8 inline-flex items-center gap-3 rounded-xl px-5 py-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
                style={{ backgroundColor: "#0B3D2E", color: "#6FE8A7" }}
              >
                M
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Max Healthcare</p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Clinical partner
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "21+", label: "Hospital facilities" },
                { value: "30+", label: "Years of specialist care" },
                { value: "100%", label: "MD-supervised patients" },
                { value: "24h", label: "MD review turnaround" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      color: "#6FE8A7",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
