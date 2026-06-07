"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { src: "/images/everydaydose/product-mild.webp", alt: "Mild Roast" },
  { src: "/images/everydaydose/product-medium.webp", alt: "Medium Roast" },
  { src: "/images/everydaydose/product-medium-2.webp", alt: "Medium Roast 2" },
  { src: "/images/everydaydose/product-matcha.webp", alt: "Matcha" },
];

const trustBadges = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Secure Checkout",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: "101,172 Reviews",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "HSA/FSA",
  },
];

export function CoffeePlusBenefits() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "center",
          minHeight: "700px",
        }}
        className="ed-coffee-plus-layout"
      >
        {/* Left column — product image */}
        <div
          style={{ flex: "0 0 55%", maxWidth: "55%" }}
          className="ed-coffee-plus-image-col"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/everydaydose/coffee-plus-benefits.webp"
              alt="Everyday Dose mushroom coffee"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Right column — content */}
        <div
          style={{ flex: 1 }}
          className="ed-coffee-plus-content-col"
        >
          {/* Heading */}
          <h2
            className="ed-heading"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "120%",
              margin: "0 0 16px 0",
            }}
          >
            <span style={{ color: "var(--ed-dark, #231f20)" }}>
              coffee plus
            </span>
            <br />
            <span style={{ color: "var(--ed-purple, #4C19D8)" }}>
              benefits
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              color: "var(--ed-dark, #231f20)",
              lineHeight: 1.5,
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            The all-in-one coffee that makes you feel as good as it tastes
            &mdash; naturally.
          </p>

          {/* Product selector */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            {products.map((product, i) => (
              <button
                key={product.alt}
                onClick={() => setActiveProduct(i)}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border:
                    activeProduct === i
                      ? "2px solid var(--ed-purple, #4C19D8)"
                      : "2px solid transparent",
                  padding: 0,
                  background: "#f5f5f5",
                  cursor: "pointer",
                  position: "relative",
                  flexShrink: 0,
                }}
                aria-label={product.alt}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#666",
                }}
              >
                {badge.icon}
                <span style={{ fontSize: "11px" }}>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            style={{
              background:
                "var(--ed-gradient, linear-gradient(90deg, rgba(5, 194, 247, 0.8) 0.9%, rgba(231, 73, 255, 0.71) 100%))",
              color: "var(--ed-white, #ffffff)",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              padding: "14px 40px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            }}
          >
            UPGRADE NOW
          </button>
        </div>
      </div>

      {/* Responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .ed-coffee-plus-layout {
                flex-direction: column !important;
                gap: 24px !important;
                min-height: auto !important;
                padding: 20px 0 !important;
              }
              .ed-coffee-plus-image-col {
                flex: none !important;
                max-width: 100% !important;
              }
              .ed-coffee-plus-image-col > div {
                border-radius: 12px !important;
              }
              .ed-coffee-plus-content-col {
                padding: 0 !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}
