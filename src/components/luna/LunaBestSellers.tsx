'use client';

import Image from "next/image";

const products = [
  {
    name: "Bug & Tick Repellent Spray - 120 mL",
    price: "$14.99",
    image: "/images/luna/prod-spray-120.webp",
  },
  {
    name: "Bug & Tick Repellent Spray - 50 mL × 2",
    price: "$14.99",
    image: "/images/luna/prod-spray-50-2pk.webp",
  },
  {
    name: "Hydrocolloid Bug Bite Relief Patches",
    price: "$11.99",
    image: "/images/luna/prod-bite-patches.webp",
  },
  {
    name: "Itch Relief Stick - 18gm",
    price: "$12.00",
    image: "/images/luna/prod-itch-stick.webp",
  },
  {
    name: "Mosquito Repellent Bracelets - 12 Pack",
    price: "$11.99",
    image: "/images/luna/prod-bracelets.webp",
  },
  {
    name: "Mosquito Repellent Candles - 3 Pack",
    price: "$19.98",
    image: "/images/luna/prod-candles.webp",
  },
  {
    name: "Mosquito Repellent Incense - 24 Sticks",
    price: "$10.00",
    image: "/images/luna/prod-incense.webp",
  },
  {
    name: "Mosquito Repellent Patches for Kids - 90 Patches",
    price: "$14.99",
    image: "/images/luna/prod-patches-kids.webp",
  },
  {
    name: "Mosquito Repellent Wipes - 15 Wipes",
    price: "$12.00",
    image: "/images/luna/prod-wipes.webp",
  },
  {
    name: "Natural Bug Repellent Spray - 40mL",
    price: "$8.00",
    image: "/images/luna/prod-spray-40.webp",
  },
];

export function LunaBestSellers() {
  return (
    <section
      style={{
        background: "white",
        padding: "60px 0",
      }}
    >
      <style>{`
        .luna-best-sellers-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ padding: "0 20px", marginBottom: 32 }}>
          <p
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: 11,
              letterSpacing: 3,
              color: "#f26a3e",
              marginBottom: 8,
              textTransform: "uppercase",
              margin: "0 0 8px 0",
            }}
          >
            OUR PRODUCTS
          </p>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1D1D1D",
              letterSpacing: -0.5,
              margin: 0,
              fontFamily: "var(--font-jost)",
            }}
          >
            Best Sellers
          </h2>
        </div>

        {/* Scrolling track */}
        <div
          className="luna-best-sellers-track"
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            padding: "0 20px 20px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
}: {
  product: { name: string; price: string; image: string };
}) {
  return (
    <div
      className="luna-product-card"
      style={{
        flexShrink: 0,
        width: 260,
        scrollSnapAlign: "start",
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
        border: "1px solid #f0f0f0",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          aspectRatio: "1 / 1",
          position: "relative",
          overflow: "hidden",
          background: "#f4f4f4",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={260}
          height={260}
          style={{ objectFit: "contain", padding: 16 }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: 16 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#1D1D1D",
            lineHeight: 1.3,
            marginBottom: 6,
            margin: "0 0 6px 0",
            fontFamily: "var(--font-jost)",
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#f26a3e",
            margin: 0,
            fontFamily: "var(--font-jost)",
          }}
        >
          {product.price}
        </p>
        <button
          style={{
            width: "100%",
            background: "#2a2e16",
            color: "white",
            borderRadius: 8,
            padding: 10,
            fontSize: 13,
            fontWeight: 600,
            border: "none",
            marginTop: 10,
            cursor: "pointer",
            fontFamily: "var(--font-jost)",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
