import Image from "next/image";

const bullets = [
  "No personal credit check required",
  "Limits based on your actual business financials",
  "No personal guarantee or liability",
  "Available for businesses of all sizes",
];

function OrangeCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(255,101,0,0.1)" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="#FF6500"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompetitiveLimitsSection() {
  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-20 lg:py-28">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column: text */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-block">
              <span
                style={{
                  backgroundColor: "rgba(255,101,0,0.08)",
                  color: "#FF6500",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                }}
              >
                Credit Limits
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0F0F0F",
                marginBottom: "20px",
              }}
            >
              Unlock competitive limits
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                lineHeight: 1.6,
                color: "#595959",
                maxWidth: "480px",
                marginBottom: "28px",
              }}
            >
              Get competitive credit limits based on real-time business financials and no personal
              guarantees. Stop being held back by limits designed for someone else&apos;s business.
            </p>

            {/* Bullet list */}
            <ul className="mb-8 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <OrangeCheck />
                  <span style={{ fontSize: "15px", color: "#595959", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "#FF6500",
                color: "white",
                borderRadius: "9999px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get started for free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right column: image with floating pill */}
          <div className="relative pb-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/ramp/higher-limits.webp"
                alt="Ramp higher credit limits dashboard"
                width={1376}
                height={768}
                className="w-full rounded-2xl"
              />
            </div>

            {/* Floating dark pill overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#0A0F1E",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {/* Left: Traditional banks */}
              <div>
                <p
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 4px",
                    fontWeight: 600,
                  }}
                >
                  Traditional banks
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.25)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  $25K
                </p>
              </div>

              {/* Right: With Ramp */}
              <div>
                <p
                  style={{
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 4px",
                    fontWeight: 600,
                  }}
                >
                  With Ramp
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#FF6500",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  $500K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
