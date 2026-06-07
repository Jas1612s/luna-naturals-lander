import Image from "next/image";

interface ShadeProduct {
  name: string;
  color: string;
  lifestyle: string;
  sale: string;
  regular: string;
  save: string;
}

const shades: ShadeProduct[] = [
  { name: "Skin Nasal Strips", color: "#D4A882", lifestyle: "/images/histrips/products/skin-strips.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "Brown Nasal Strips", color: "#8B5E3C", lifestyle: "/images/histrips/products/brown-strips.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "Pink Nasal Strips", color: "#FF8FB3", lifestyle: "/images/histrips/products/pink-strips-lifestyle.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "White Nasal Strips", color: "#F0EDE8", lifestyle: "/images/histrips/products/white-strips-lifestyle.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "Blue Nasal Strips", color: "#3B82F6", lifestyle: "/images/histrips/products/blue-strips-lifestyle.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "Camo Nasal Strips", color: "#4D6B3D", lifestyle: "/images/histrips/products/camo-strips-lifestyle.webp", sale: "$42", regular: "$56", save: "25%" },
  { name: "Black Nasal Strips", color: "#2A2E16", lifestyle: "/images/histrips/products/black-strips-lifestyle-2.webp", sale: "$42", regular: "$56", save: "25%" },
];

export function HiStripsForEveryShade() {
  return (
    <section
      style={{
        background: "#F9F8F6",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Heading row */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            className="every-shade-heading"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#2A2E16",
              marginBottom: "8px",
            }}
          >
            HiStrips For Every Shade
          </h2>
          <span
            style={{
              fontSize: "14px",
              color: "#666",
              background: "#F4F4EF",
              borderRadius: "4px",
              padding: "2px 10px",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            Save 25%
          </span>
        </div>

        {/* Product grid */}
        <div className="every-shade-grid" style={{ display: "grid", gap: "16px" }}>
          {shades.map((shade) => (
            <div
              key={shade.name}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio: "1 / 1",
                  position: "relative",
                  overflow: "hidden",
                  background: "#F4F4EF",
                }}
              >
                <Image
                  src={shade.lifestyle}
                  alt={shade.name}
                  width={400}
                  height={400}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "16px" }}>
                {/* Color pill + name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: shade.color,
                      marginRight: "6px",
                      flexShrink: 0,
                      border: shade.color === "#F0EDE8" ? "1px solid #ddd" : "none",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#2A2E16",
                      lineHeight: 1.2,
                    }}
                  >
                    {shade.name}
                  </p>
                </div>

                {/* Price row */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#2A2E16" }}>
                    {shade.sale}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    {shade.regular}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            style={{
              background: "linear-gradient(90deg, #E8603C, #C49B3D)",
              color: "#fff",
              borderRadius: "999px",
              padding: "14px 40px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            SHOP NASAL STRIPS
          </button>
        </div>
      </div>

      <style>{`
        .every-shade-heading {
          font-size: 28px;
        }
        .every-shade-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 768px) {
          .every-shade-heading {
            font-size: 22px;
          }
          .every-shade-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
