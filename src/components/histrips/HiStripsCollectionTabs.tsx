"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  save: string;
  sale: string;
  regular: string;
  lifestyle: string;
  badge?: string;
}

const tabs = ["All Products", "Sprays", "Patches", "Accessories", "Bundles"];

const tabProducts: Product[][] = [
  // TAB 0: All Products
  [
    { name: "Bug & Tick Repellent Spray 120ml", save: "25%", sale: "$18", regular: "$24", lifestyle: "/images/luna/spray-120-hero.webp" },
    { name: "Bug Bite Relief Patches (50ct)", save: "20%", sale: "$12", regular: "$15", lifestyle: "/images/luna/patches-hero.webp" },
    { name: "Bug & Tick Repellent Spray 50ml", save: "15%", sale: "$13", regular: "$15", lifestyle: "/images/luna/spray-50-hero.webp" },
    { name: "Itch Relief Stick", save: "22%", sale: "$9", regular: "$12", lifestyle: "/images/luna/itch-stick-hero.webp" },
  ],
  // TAB 1: Sprays
  [
    { name: "Bug & Tick Repellent Spray 120ml", save: "25%", sale: "$18", regular: "$24", lifestyle: "/images/luna/spray-120-hero.webp" },
    { name: "Bug & Tick Repellent Spray 50ml", save: "15%", sale: "$13", regular: "$15", lifestyle: "/images/luna/spray-50-hero.webp" },
  ],
  // TAB 2: Patches
  [
    { name: "Bug Bite Relief Patches (50ct)", save: "20%", sale: "$12", regular: "$15", lifestyle: "/images/luna/patches-hero.webp" },
  ],
  // TAB 3: Accessories
  [
    { name: "Itch Relief Stick", save: "22%", sale: "$9", regular: "$12", lifestyle: "/images/luna/itch-stick-hero.webp" },
  ],
  // TAB 4: Bundles
  [
    { name: "Complete Protection Bundle", save: "30%", sale: "$39", regular: "$56", lifestyle: "/images/luna/bundle-all.webp" },
  ],
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Image container */}
      <div
        className="product-card-image"
        style={{
          aspectRatio: "1 / 1",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          background: "#F4F4EF",
        }}
      >
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 2,
              background: "#2A2E16",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              borderRadius: "4px",
              padding: "3px 8px",
              letterSpacing: "0.5px",
            }}
          >
            {product.badge}
          </div>
        )}
        <Image
          src={product.lifestyle}
          alt={product.name}
          width={400}
          height={400}
          className="product-card-img"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Info below image */}
      <div style={{ padding: "12px 0" }}>
        {product.save && (
          <span
            style={{
              fontSize: "11px",
              background: "#F4F4EF",
              color: "#2A2E16",
              borderRadius: "4px",
              padding: "2px 8px",
              fontWeight: 500,
              marginBottom: "6px",
              display: "inline-block",
            }}
          >
            Save {product.save}
          </span>
        )}
        <p
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#2A2E16",
            lineHeight: 1.2,
            marginBottom: "4px",
          }}
        >
          {product.name}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: "#2A2E16" }}>
            {product.sale}
          </span>
          {product.regular && (
            <span
              style={{
                fontSize: "13px",
                color: "#999",
                textDecoration: "line-through",
              }}
            >
              {product.regular}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function HiStripsCollectionTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);
  const [displayTab, setDisplayTab] = useState(0);

  function handleTabClick(index: number) {
    if (index === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setDisplayTab(index);
      setActiveTab(index);
      setFading(false);
    }, 200);
  }

  const products = tabProducts[displayTab];

  return (
    <section
      style={{
        background: "#fff",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          className="collection-tabs-heading"
          style={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#2A2E16",
            marginBottom: "24px",
          }}
        >
          Explore Our Collection
        </h2>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => handleTabClick(i)}
              style={{
                borderRadius: "999px",
                padding: "8px 18px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s, background 0.15s",
                background: activeTab === i ? "#2A2E16" : "transparent",
                color: activeTab === i ? "#fff" : "#666",
                border: activeTab === i ? "1px solid #2A2E16" : "1px solid #dddddd",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== i) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#2A2E16";
                  (e.currentTarget as HTMLButtonElement).style.color = "#2A2E16";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== i) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#dddddd";
                  (e.currentTarget as HTMLButtonElement).style.color = "#666";
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div
          className="collection-tabs-grid"
          style={{
            display: "grid",
            gap: "16px",
            opacity: fading ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          {products.map((product, i) => (
            <ProductCard key={`${displayTab}-${i}`} product={product} />
          ))}
        </div>
      </div>

      <style>{`
        .collection-tabs-heading {
          font-size: 28px;
        }
        .collection-tabs-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .product-card-image:hover .product-card-img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .collection-tabs-heading {
            font-size: 22px;
          }
          .collection-tabs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
