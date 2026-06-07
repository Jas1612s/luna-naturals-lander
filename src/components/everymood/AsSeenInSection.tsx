"use client";

const LOGOS = [
  { src: "/images/everymood/logos/cbs-logo_400x.svg", alt: "CBS" },
  { src: "/images/everymood/logos/kroger.svg", alt: "Kroger" },
  { src: "/images/everymood/logos/nbc-logo_400x.svg", alt: "NBC" },
  { src: "/images/everymood/logos/target.svg", alt: "Target" },
  { src: "/images/everymood/logos/tatler.webp", alt: "Tatler" },
  { src: "/images/everymood/logos/the-guardian.webp", alt: "The Guardian" },
  { src: "/images/everymood/logos/vice-logo_6cc50991-ceed-4fc6-8e84-7bf8b7252af9_400x.svg", alt: "Vice" },
];

function LogoSet() {
  return (
    <>
      {LOGOS.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          style={{
            height: 30,
            maxWidth: 100,
            objectFit: "contain",
            opacity: 0.85,
            flexShrink: 0,
            filter: "grayscale(100%)",
          }}
        />
      ))}
    </>
  );
}

export function AsSeenInSection() {
  return (
    <section
      style={{
        padding: "32px 40px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "var(--em-text-muted)",
          marginBottom: 24,
        }}
      >
        As Seen In
      </p>

      <div
        style={{
          display: "flex",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="em-as-seen-in-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            whiteSpace: "nowrap",
          }}
        >
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}
