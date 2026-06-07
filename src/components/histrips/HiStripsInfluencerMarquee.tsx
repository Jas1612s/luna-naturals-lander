const pressLogos = [
  { name: "CBS", src: "/images/luna/press/cbs.svg", width: 80 },
  { name: "NBC", src: "/images/luna/press/nbc.svg", width: 70 },
  { name: "Tatler", width: 90 },
  { name: "The Guardian", src: "/images/luna/press/guardian.avif", width: 140 },
  { name: "Vice", src: "/images/luna/press/vice.svg", width: 70 },
];

const allLogos = [...pressLogos, ...pressLogos];

export function HiStripsInfluencerMarquee() {
  return (
    <section
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "24px 0",
        background: "#ffffff",
        borderTop: "1px solid #D4D1C4",
        borderBottom: "1px solid #D4D1C4",
      }}
    >
      <style>{`
        @keyframes hs-press-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "hs-press-scroll 25s linear infinite",
          gap: "60px",
        }}
      >
        {allLogos.map((logo, i) =>
          logo.src ? (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              style={{
                height: "28px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.7,
                filter: "grayscale(100%)",
              }}
            />
          ) : (
            <span
              key={i}
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#2A2E16",
                opacity: 0.5,
                whiteSpace: "nowrap",
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
              }}
            >
              {logo.name}
            </span>
          )
        )}
      </div>
    </section>
  );
}
