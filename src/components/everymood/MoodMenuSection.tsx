"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Itch Relief Stick",
    image: "/images/everymood/bestseller-itch-stick.webp",
    description: "Menthol & colloidal oatmeal formula that cools and soothes bites in seconds.",
    price: "$12.99",
    originalPrice: "$18.00",
    save: "$5.01",
  },
  {
    name: "Bug Bite Relief Patches",
    image: "/images/everymood/bestseller-patches.webp",
    description: "Hydrocolloid patches infused with aloe & witch hazel. 50 transparent patches per pack.",
    price: "$14.99",
    originalPrice: "$22.00",
    save: "$7.01",
  },
  {
    name: "Repellent Spray 50ml",
    image: "/images/everymood/bestseller-spray-small.webp",
    description: "Pocket-sized lemon eucalyptus bug & tick repellent. Perfect for on-the-go protection.",
    price: "$9.99",
    originalPrice: "$15.00",
    save: "$5.01",
  },
  {
    name: "Repellent Spray 120ml",
    image: "/images/everymood/bestseller-spray-large.webp",
    description: "Full-size DEET-free repellent spray with lemon eucalyptus oil. Family-friendly.",
    price: "$16.99",
    originalPrice: "$24.00",
    save: "$7.01",
  },
];

export function MoodMenuSection() {
  return (
    <section
      style={{
        padding: "60px 40px",
      }}
    >
      <h2
        className="em-bestsellers-title"
        style={{
          textAlign: "center",
          fontSize: 36,
          fontWeight: 600,
          color: "var(--em-black)",
          marginBottom: 40,
          letterSpacing: "-1px",
        }}
      >
        Our Bestsellers
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 em-bestsellers-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          gap: 20,
        }}
      >
        {products.map((product) => (
          <Link
            key={product.name}
            href="#"
            style={{
              display: "block",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "white",
              border: "1px solid var(--em-border)",
              textDecoration: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Image area */}
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Save badge */}
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  backgroundColor: "var(--em-indigo)",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 20,
                  zIndex: 1,
                }}
              >
                Save {product.save}
              </span>

              {/* Cart icon */}
              <button
                style={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "1px solid var(--em-border)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
                onClick={(e) => e.preventDefault()}
                aria-label={`Add ${product.name} to cart`}
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--em-black)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </button>
            </div>

            {/* Card info */}
            <div style={{ padding: "16px 16px 20px" }}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--em-black)",
                  margin: 0,
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "var(--em-text-muted)",
                  marginTop: 6,
                  marginBottom: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginTop: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--em-indigo)",
                  }}
                >
                  {product.price}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--em-text-muted)",
                    textDecoration: "line-through",
                  }}
                >
                  {product.originalPrice}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
