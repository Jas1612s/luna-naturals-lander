import { ReactNode } from "react";

type Feature = { text: string };

type ProductSectionProps = {
  id?: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle?: string;
  body: string;
  features: Feature[];
  ctaText: string;
  ctaDisabled?: boolean;
  bgColor: string;
  blobColor: string;
  illustration: ReactNode;
  reverse?: boolean;
};

export function ProductSection({
  id,
  badge,
  badgeColor,
  badgeBg,
  title,
  subtitle,
  body,
  features,
  ctaText,
  ctaDisabled = false,
  bgColor,
  blobColor,
  illustration,
  reverse = false,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: bgColor }}
    >
      {/* Blob top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "500px",
          height: "500px",
          top: "-100px",
          right: "-100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${blobColor} 0%, transparent 65%)`,
        }}
      />
      {/* Blob bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-80px",
          left: "-80px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${blobColor} 0%, transparent 65%)`,
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Text column */}
          <div>
            <span
              className="mb-5 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: badgeBg,
                color: badgeColor,
              }}
            >
              {badge}
            </span>

            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "rgb(36,34,32)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className="mb-4"
                style={{
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  fontWeight: 500,
                  color: "rgb(56,49,44)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {subtitle}
              </p>
            )}

            <p
              className="mb-7"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.65,
                color: "rgb(56,49,44)",
                fontFamily: "var(--font-body, var(--font-sans))",
              }}
            >
              {body}
            </p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(46,147,111,0.15)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5L4 7L8 3" stroke="#2E936F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "rgb(56,49,44)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaDisabled ? (
              <span
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(36,34,32,0.08)",
                  color: "rgba(36,34,32,0.4)",
                  cursor: "default",
                }}
              >
                Coming Soon
              </span>
            ) : (
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: "#2E936F",
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {ctaText}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>

          {/* Illustration column */}
          <div className="flex items-center justify-center">
            {illustration}
          </div>
        </div>
      </div>
    </section>
  );
}
