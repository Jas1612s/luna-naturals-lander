import Image from "next/image";

const trustItems = [
  {
    badge: { src: "/images/luna/badge-lab.webp", width: 28, height: 28, alt: "Lab tested badge" },
    text: "Lab-Tested, Adventure-Approved",
  },
  {
    badge: { src: "/images/luna/badge-deet.webp", width: 28, height: 28, alt: "DEET-free badge" },
    text: "DEET-Free, Safe for Everyone",
  },
  {
    badge: { src: "/images/luna/badge-natural.webp", width: 28, height: 28, alt: "All-natural badge" },
    text: "All-Natural Ingredients",
  },
  {
    badge: { src: "/images/luna/badge-eco.webp", width: 28, height: 28, alt: "Eco-friendly badge" },
    text: "Eco-Friendly & Effective",
  },
  {
    badge: null,
    stars: "⭐⭐⭐⭐⭐",
    text: "1,000,000+ Happy Adventurers",
  },
];

// Double for seamless marquee loop
const allItems = [...trustItems, ...trustItems];

export function LunaTrustBar() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5",
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      <div className="luna-marquee-track">
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 40px",
              whiteSpace: "nowrap",
            }}
          >
            {item.badge ? (
              <Image
                src={item.badge.src}
                width={item.badge.width}
                height={item.badge.height}
                alt={item.badge.alt}
                style={{ flexShrink: 0 }}
              />
            ) : (
              <span style={{ fontSize: "16px" }}>{item.stars}</span>
            )}
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#2a2e16",
                fontFamily: "var(--font-jost)",
              }}
            >
              {item.text}
            </span>
            <span style={{ margin: "0 12px", color: "#f26a3e" }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
