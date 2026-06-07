import Image from "next/image";

const pressQuotes = [
  {
    logo: "/images/everydaydose/press-1.webp",
    quote:
      "Three reasons we\u2019re switching: it boosts mood, enhances immunity, and maintains that delicious, authentic coffee taste.",
  },
  {
    logo: "/images/everydaydose/press-2.webp",
    quote:
      "Shockingly effective after just a few days. Best-tasting mushroom coffee on the market.",
  },
  {
    logo: "/images/everydaydose/press-3.webp",
    quote:
      "The category has evolved, and Everyday Dose is part of a newer class of brands prioritizing taste as much as function.",
  },
  {
    logo: "/images/everydaydose/press-4.webp",
    quote: "A go-to for wellness insiders",
  },
];

export function PressBanner() {
  return (
    <section
      style={{
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        background: "white",
        height: "293px",
        padding: "40px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="scrollbar-hide"
        style={{
          display: "flex",
          overflowX: "auto",
          width: "100%",
        }}
      >
        {pressQuotes.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "400px",
              padding: "0 40px",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            {/* Press logo */}
            <div style={{ position: "relative", height: "30px", width: "120px" }}>
              <Image
                src={item.logo}
                alt="Press logo"
                fill
                sizes="120px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#333",
                maxWidth: "350px",
                margin: 0,
              }}
            >
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
