'use client';

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  img: string;
};

type Tab = {
  label: string;
  products: Product[];
};

const tabs: Tab[] = [
  {
    label: "BEST SELLERS",
    products: [
      { name: "Mosquito Repellent Patches for Kids", price: "$14.99", img: "/images/luna/prod-patches-kids.webp" },
      { name: "Mosquito Repellent Bracelets - 12 Pack", price: "$11.99", img: "/images/luna/prod-bracelets.webp" },
      { name: "Bug & Tick Repellent Spray - 120 mL", price: "$14.99", img: "/images/luna/prod-spray-120-tab.webp" },
      { name: "Mosquito Repellent Wipes - 15 Wipes", price: "$12.00", img: "/images/luna/prod-wipes.webp" },
      { name: "Natural Bug Repellent Spray - 40mL", price: "$8.00", img: "/images/luna/prod-spray-40.webp" },
      { name: "Mosquito Repellent Incense - 24 Sticks", price: "$10.00", img: "/images/luna/prod-incense.webp" },
    ],
  },
  {
    label: "NEW ARRIVALS",
    products: [
      { name: "Hydrocolloid Bug Bite Relief Patches", price: "$11.99", img: "/images/luna/prod-bite-patches-tab.webp" },
      { name: "New Protection Formula", price: "$14.99", img: "/images/luna/prod-new-1.webp" },
      { name: "Advanced Repellent Kit", price: "$19.99", img: "/images/luna/prod-new-2.webp" },
    ],
  },
  {
    label: "VALUE PACKS",
    products: [
      { name: "Adventure Value Pack", price: "$29.99", img: "/images/luna/prod-value-1.webp" },
      { name: "Family Bundle", price: "$39.99", img: "/images/luna/prod-value-2.webp" },
      { name: "Outdoor Explorer Kit", price: "$34.99", img: "/images/luna/prod-value-3.webp" },
      { name: "Bug & Tick Repellent Spray - 50 mL × 2", price: "$14.99", img: "/images/luna/prod-spray-50-2pk.webp" },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #f0f0f0",
        cursor: "pointer",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          aspectRatio: "1/1",
          background: "#f9f9f9",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={product.img}
          alt={product.name}
          width={300}
          height={300}
          style={{ objectFit: "contain", padding: 12 }}
        />
      </div>
      <div style={{ padding: 14 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#1D1D1D",
            lineHeight: 1.3,
            marginBottom: 6,
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#f26a3e",
          }}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
}

export function LunaProtection() {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(true);

  function handleTabClick(index: number) {
    if (index === activeTab) return;
    setVisible(false);
    setTimeout(() => {
      setActiveTab(index);
      setVisible(true);
    }, 200);
  }

  return (
    <section
      style={{
        background: "white",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: 11,
              letterSpacing: 3,
              color: "#f26a3e",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            SHOP NOW
          </p>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#2a2e16",
              letterSpacing: -0.5,
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            Powerful Protection, Naturally.
          </h2>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(i)}
              style={{
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--font-josefin)",
                letterSpacing: 1,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                ...(activeTab === i
                  ? {
                      background: "#2a2e16",
                      color: "white",
                      border: "1.5px solid #2a2e16",
                    }
                  : {
                      background: "white",
                      color: "#666",
                      border: "1.5px solid #ddd",
                    }),
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s",
          }}
          className="luna-protection-grid"
        >
          {tabs[activeTab].products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .luna-protection-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
