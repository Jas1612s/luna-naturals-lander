import Image from "next/image";

export function SpendVisibilitySection() {
  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="py-20 lg:py-28"
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
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
                Spend Visibility
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
              Complete spend visibility
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                lineHeight: 1.6,
                color: "#595959",
                maxWidth: "480px",
                marginBottom: "32px",
              }}
            >
              Get real-time spend visibility across the entire company. Know
              exactly where every dollar is going, the moment it&apos;s
              spent—by employee, department, or merchant.
            </p>

            {/* CTA button */}
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

          {/* Right column: image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/ramp/spend-visibility.webp"
              alt="Ramp spend visibility dashboard"
              width={1200}
              height={800}
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
