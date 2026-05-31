import Image from "next/image";

const TRUST_ITEMS = [
  {
    icon: "/images/smooche/icon-plumping.svg",
    title: "Extreme plumping effect",
    subtitle: null,
  },
  {
    icon: "/images/smooche/icon-natural.svg",
    title: "100% natural & vegan",
    subtitle: "100% natural",
  },
  {
    icon: "/images/smooche/icon-results.svg",
    title: "Visible results in seconds",
    subtitle: null,
  },
  {
    icon: "/images/smooche/icon-trusted.svg",
    title: "Trusted by 100,000+ women",
    subtitle: "Clean & cruelty free",
  },
] as const;

export function TrustIconsBar() {
  return (
    <section
      style={{ backgroundColor: "#F5EAE4", padding: "40px 20px" }}
      aria-label="Trust badges"
    >
      <div
        className="mx-auto grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: "1200px", gap: "24px" }}
      >
        {TRUST_ITEMS.map(({ icon, title, subtitle }) => (
          <div
            key={title}
            className="flex flex-col items-center"
            style={{ gap: "8px" }}
          >
            {/* Icon */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />

            {/* Title */}
            <p
              className="text-center"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#3D1018",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {title}
            </p>

            {/* Subtitle (optional) */}
            {subtitle && (
              <p
                className="text-center"
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#8B6B6B",
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
