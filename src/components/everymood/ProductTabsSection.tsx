"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  title: string;
  sale: string;
  orig: string | null;
  badge: string | null;
  img: string;
  hoverImg: string;
}

const currentObsessions: Product[] = [
  {
    title: "Itch Relief Stick | Menthol & Colloidal Oatmeal 18g",
    sale: "$12.99",
    orig: "$18.00",
    badge: "-28%",
    img: "bestseller-itch-stick.webp",
    hoverImg: "bestseller-itch-stick.webp",
  },
  {
    title: "Bug Bite Relief Patches | Hydrocolloid 50 Pack",
    sale: "$14.99",
    orig: "$22.00",
    badge: "-32%",
    img: "bestseller-patches.webp",
    hoverImg: "bestseller-patches.webp",
  },
  {
    title: "Bug & Tick Repellent Spray | Lemon Eucalyptus 50ml",
    sale: "$9.99",
    orig: "$15.00",
    badge: "-33%",
    img: "bestseller-spray-small.webp",
    hoverImg: "bestseller-spray-small.webp",
  },
  {
    title: "Bug & Tick Repellent Spray | Lemon Eucalyptus 120ml",
    sale: "$16.99",
    orig: "$24.00",
    badge: "-29%",
    img: "bestseller-spray-large.webp",
    hoverImg: "bestseller-spray-large.webp",
  },
];

const tabs = ["Current Obsessions", "New Arrivals", "Kits"] as const;
type TabName = (typeof tabs)[number];

const tabData: Record<TabName, Product[]> = {
  "Current Obsessions": currentObsessions,
  "New Arrivals": currentObsessions.slice(0, 4),
  Kits: currentObsessions.slice(0, 4),
};

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="overflow-hidden"
      style={{ borderRadius: 12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="relative"
        style={{
          aspectRatio: "1 / 1",
          backgroundColor: "#F5F5F5",
          padding: 20,
        }}
      >
        <Image
          src={`/images/everymood/${hovered ? product.hoverImg : product.img}`}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "contain", padding: 20 }}
          priority={index < 4}
        />
        {product.badge && (
          <span
            className="absolute"
            style={{
              top: 12,
              left: 12,
              backgroundColor: "#C73C3C",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              padding: "4px 8px",
              borderRadius: 4,
              lineHeight: 1.2,
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Card info */}
      <div style={{ padding: 16, backgroundColor: "#fff" }}>
        <p
          style={{
            color: "var(--em-indigo)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
          }}
        >
          {product.title}
        </p>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
          <span
            style={{
              color: "var(--em-indigo)",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {product.sale}
          </span>
          {product.orig && (
            <span
              style={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: 14,
                marginLeft: 8,
              }}
            >
              {product.orig}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState<TabName>("Current Obsessions");
  const products = tabData[activeTab];

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 40px",
      }}
    >
      {/* Tabs row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 32 }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 20,
                fontWeight: activeTab === tab ? 500 : 400,
                color: activeTab === tab ? "var(--em-indigo)" : "#999",
                padding: 0,
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <a
          href="#"
          className="hidden md:inline"
          style={{
            marginLeft: "auto",
            color: "#000",
            fontSize: 14,
            textDecoration: "underline",
          }}
        >
          Shop All Products
        </a>
      </div>

      {/* Product grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: 20, marginTop: 32 }}
      >
        {products.map((product, i) => (
          <ProductCard key={`${activeTab}-${i}`} product={product} index={i} />
        ))}
      </div>

      {/* Tab font size override for mobile */}
      <style>{`
        @media (max-width: 768px) {
          section button {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
