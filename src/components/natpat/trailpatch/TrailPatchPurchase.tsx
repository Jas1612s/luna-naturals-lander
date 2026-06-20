"use client";

import { useState } from "react";
import Image from "next/image";

const packs = [
  { label: "1 Pack", sub: "$24.99", price: 24.99 },
  { label: "2 Packs", sub: "Save 20%", price: 39.98 },
  { label: "3 Packs", sub: "Save 25%", price: 56.22 },
  { label: "4 Packs", sub: "Save 30%", price: 69.97 },
];

const regularPrices = [24.99, 49.98, 74.97, 99.96];

export function TrailPatchPurchase() {
  const [selectedPack, setSelectedPack] = useState(2);

  return (
    <section id="getNow">
      <style>{`
        @media (min-width: 768px) {
          .tp-purchase-wrapper { margin: 100px 0 !important; }
          .tp-purchase-big-title { font-size: 70px !important; margin-bottom: 100px !important; }
          .tp-purchase-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; }
          .tp-purchase-img-wrap { display: block !important; position: relative; min-height: 700px; }
          .tp-purchase-mobile-img { display: none !important; }
          .tp-purchase-form { background: #f9f8f6 !important; padding: 40px 50px 30px !important; }
          .tp-purchase-price { font-size: 40px !important; line-height: 47px !important; }
          .tp-purchase-risk { max-width: 60% !important; font-size: 16px !important; }
          .tp-purchase-reviews-text { font-size: 16px !important; }
          .tp-purchase-gallery { display: none !important; }
        }
        @media (max-width: 1200px) {
          .tp-purchase-price { font-size: 25px !important; }
        }
      `}</style>

      <div className="tp-purchase-wrapper" style={{ margin: "20px 0" }}>
        {/* Title */}
        <h2
          className="tp-purchase-big-title"
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            fontSize: "40px",
            fontWeight: 400,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "30px",
          }}
        >
          PURCHASE TODAY!
        </h2>

        {/* Two-column grid (desktop) / stacked (mobile) */}
        <div className="tp-purchase-grid" style={{ display: "block", maxWidth: "1280px", margin: "0 auto" }}>
          {/* Left: Product Image (desktop only) */}
          <div className="tp-purchase-img-wrap" style={{ display: "none" }}>
            <Image
              src="/images/natpat/trailpatch/purchase-hero.jpg"
              alt="TrailPatch Kids Tick Repellent"
              fill
              style={{ objectFit: "cover" }}
              sizes="50vw"
            />
          </div>

          {/* Right: Purchase Form */}
          <div className="tp-purchase-form" style={{ background: "white", padding: "40px 16px 30px", textAlign: "center" }}>
            {/* Mobile product image */}
            <div className="tp-purchase-mobile-img" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <Image
                src="/images/natpat/trailpatch/purchase-mobile.png"
                alt="TrailPatch"
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Subtitle */}
            <h3
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "55px",
                fontWeight: 400,
                letterSpacing: "0.75px",
                color: "#0c0b0b",
                marginBottom: 0,
                lineHeight: 1,
              }}
            >
              Stock Up &amp; Save!
            </h3>

            {/* Pack Selection */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                maxWidth: "452px",
                margin: "20px auto",
                justifyItems: "center",
              }}
            >
              {packs.map((pack, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPack(i)}
                  style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "20px",
                    letterSpacing: "0.6px",
                    lineHeight: "24px",
                    border: "2px solid var(--tp-pink)",
                    color: selectedPack === i ? "#fff" : "#181717",
                    background: selectedPack === i ? "var(--tp-pink)" : "transparent",
                    textTransform: "uppercase",
                    padding: "14px 15px",
                    width: "100%",
                    maxWidth: "216px",
                    fontWeight: 400,
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background 0.3s ease-in-out",
                  }}
                >
                  <div>{pack.label}</div>
                  <span
                    style={{
                      fontFamily: "var(--font-roboto), Roboto, sans-serif",
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "13px",
                    }}
                  >
                    {pack.sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Reviews line */}
            <div
              className="tp-purchase-reviews-text"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "20px",
                fontSize: "14px",
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
              }}
            >
              <Image src="/images/natpat/trailpatch/5-star.svg" alt="5 stars" width={90} height={18} style={{ display: "inline-block", marginRight: "5px" }} />
              Rated Excellent
            </div>

            {/* Price */}
            <div style={{ marginBottom: "15px" }}>
              {regularPrices[selectedPack] !== packs[selectedPack].price && (
                <span
                  style={{
                    fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#6f6f6f",
                    textDecoration: "line-through",
                    marginRight: "8px",
                  }}
                >
                  ${regularPrices[selectedPack].toFixed(2)}
                </span>
              )}
              <span
                className="tp-purchase-price"
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "28px",
                  fontWeight: 900,
                  lineHeight: "47px",
                  color: selectedPack > 0 ? "var(--tp-pink)" : "#141313",
                }}
              >
                ${packs[selectedPack].price.toFixed(2)}
              </span>
            </div>

            {/* Risk-free text */}
            <p
              className="tp-purchase-risk"
              style={{
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                maxWidth: "100%",
                margin: "0 auto 30px",
                color: "#515151",
                letterSpacing: "0.5px",
                lineHeight: "24px",
              }}
            >
              Shop with confidence. Our 30 Day Guarantee ensures hassle-free returns.
            </p>

            {/* CTA */}
            <div style={{ margin: "0 auto", maxWidth: "420px" }}>
              <a
                href="#getNow"
                style={{
                  fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "var(--tp-blue)",
                  padding: "20px 0",
                  borderRadius: "50px",
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Get Started Now
              </a>
            </div>

            {/* Trust icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "24px", flexWrap: "wrap" }}>
              {[
                { src: "/images/natpat/trailpatch/icon-money.png", text: "Money Back" },
                { src: "/images/natpat/trailpatch/icon-secure.png", text: "Secure" },
                { src: "/images/natpat/trailpatch/icon-shield-green.png", text: "Protected" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <Image src={item.src} alt={item.text} width={40} height={40} style={{ objectFit: "contain" }} />
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-roboto), Roboto, sans-serif", color: "#6f6f6f" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile product gallery */}
        <div className="tp-purchase-gallery" style={{ display: "flex", gap: "8px", marginTop: "20px", padding: "0 16px", justifyContent: "center" }}>
          {["product-gallery-1.jpg", "product-gallery-2.jpg", "product-gallery-3.jpg"].map((img) => (
            <div key={img} style={{ flex: 1, maxWidth: "120px", aspectRatio: "1", position: "relative" }}>
              <Image src={`/images/natpat/trailpatch/${img}`} alt="Product view" fill style={{ objectFit: "cover", borderRadius: "4px" }} sizes="120px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
