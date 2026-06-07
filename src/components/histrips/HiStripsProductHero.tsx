"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { src: "/images/histrips/product/brown-nasal-strips-1.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-2.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-3.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-4.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-5.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-6.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-7.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-8.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-9.webp", alt: "Brown Nasal Strips" },
  { src: "/images/histrips/product/brown-nasal-strips-10.webp", alt: "Brown Nasal Strips" },
];

const badges = ["40% More Oxygen", "Deeper Sleep", "Sharper Focus", "Reduced Snoring"];

const uspItems = [
  { icon: "/images/histrips/icons/usp-1.svg", label: "Free Shipping" },
  { icon: "/images/histrips/icons/usp-2.svg", label: "30-Day Returns" },
  { icon: "/images/histrips/icons/usp-3.svg", label: "Secure Payment" },
  { icon: "/images/histrips/icons/usp-4.svg", label: "24/7 Support" },
];

const accordionItems = [
  {
    question: "Shipping & Returns",
    answer:
      "We ship fast, worldwide. Free shipping on orders over €45 | $50. Processing time: 1 business day. Delivery: 3-7 business days. Tracking provided on all orders.",
  },
  {
    question: "Description",
    answer:
      "HiStrips Nose Strips gently open your nasal passages, getting up to 40% more oxygen day and night. Improves airflow, boosts focus, stamina, and sleep quality. Reduce snoring, mouth breathing, and enhance performance recovery.",
  },
  {
    question: "Will they stay on during intense workouts?",
    answer:
      "Yes! HiStrips uses a strong yet gentle adhesive that keeps them in place, even during intense workouts or active movement.",
  },
  {
    question: "What makes HiStrips different?",
    answer:
      "1. Premium adhesive that stays on even during sweat and sleep. 2. Bold design (finally, something that looks good). 3. Sleek, resealable pouch with 30 strips per pack. 4. Trusted by 150,000+ athletes worldwide. 5. Developed for performance, recovery and sleep.",
  },
];

export function HiStripsProductHero() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedQty, setSelectedQty] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"subscribe" | "one-time">("subscribe");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <section
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "flex-start",
        }}
        className="max-[1000px]:grid-cols-1"
      >
        {/* ── LEFT: Image Gallery ── */}
        <div>
          {/* Main image */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "#FADCC5",
              aspectRatio: "1",
              position: "relative",
            }}
          >
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              style={{ objectFit: "contain" }}
              priority={activeImage === 0}
              sizes="(max-width: 1000px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail strip */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "12px",
              overflowX: "auto",
            }}
            className="scrollbar-hide"
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  flexShrink: 0,
                  background: "#FADCC5",
                  border: "none",
                  padding: 0,
                  position: "relative",
                  outline:
                    activeImage === i ? "2px solid #2A2E16" : "2px solid transparent",
                  outlineOffset: "2px",
                }}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="72px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Product Form ── */}
        <div>
          {/* Title */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#2A2E16",
              marginBottom: "12px",
            }}
          >
            Brown Nasal Strips
          </h1>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "0" }}>
            {badges.map((badge) => (
              <span
                key={badge}
                style={{
                  background: "#FADCC5",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2A2E16",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#D4D1C4] my-4" />

          {/* Price block */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              marginBottom: "0",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#2A2E16" }}>
              €26,95
            </span>
            <span
              style={{
                fontSize: "16px",
                textDecoration: "line-through",
                color: "#999",
              }}
            >
              €34,95
            </span>
            <span
              style={{
                background: "#E8603C",
                color: "#fff",
                borderRadius: "4px",
                padding: "3px 8px",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Save 23%
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#D4D1C4] my-4" />

          {/* Quantity Selector */}
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#2A2E16",
                marginBottom: "10px",
              }}
            >
              Select Quantity
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[1, 2, 3].map((qty) => (
                <div key={qty} style={{ flex: 1, position: "relative" }}>
                  {/* "Most Popular" pill above the 2-strip card */}
                  {qty === 2 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-18px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#E8603C",
                        color: "#fff",
                        fontSize: "10px",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        whiteSpace: "nowrap",
                        fontWeight: 600,
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedQty(qty)}
                    style={{
                      width: "100%",
                      border:
                        selectedQty === qty
                          ? "2px solid #2A2E16"
                          : "1px solid #D4D1C4",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      cursor: "pointer",
                      background: selectedQty === qty ? "#fff" : "transparent",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: selectedQty === qty ? 600 : 400,
                      color: "#2A2E16",
                      transition: "border 0.15s, background 0.15s",
                    }}
                  >
                    {qty} {qty === 1 ? "Strip" : "Strips"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase option toggle */}
          <div
            style={{
              display: "flex",
              background: "#FADCC5",
              borderRadius: "30px",
              padding: "4px",
              marginBottom: "8px",
            }}
          >
            {(["one-time", "subscribe"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setPurchaseType(type)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: "30px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: purchaseType === type ? 600 : 400,
                  color: "#2A2E16",
                  background: purchaseType === type ? "#fff" : "transparent",
                  transition: "background 0.15s, font-weight 0.15s",
                  boxShadow:
                    purchaseType === type
                      ? "0 1px 4px rgba(0,0,0,0.08)"
                      : "none",
                }}
              >
                {type === "one-time" ? "One-Time Purchase" : "Subscribe & Save"}
              </button>
            ))}
          </div>

          {/* Subscribe info */}
          {purchaseType === "subscribe" && (
            <div style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "13px", color: "#555", marginBottom: "4px" }}>
                Most popular + 3 free gifts, one every month.
              </p>
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "2px" }}>
                Month 1 (Now): Face Wipes + 2 E-books
              </p>
              <p style={{ fontSize: "12px", color: "#888" }}>
                Month 2: Mouth Tape + Coupon
              </p>
            </div>
          )}

          {/* Add to Cart */}
          <button
            style={{
              background: "#2A2E16",
              color: "#fff",
              borderRadius: "9999px",
              padding: "16px 32px",
              fontSize: "17px",
              fontWeight: 700,
              width: "100%",
              cursor: "pointer",
              border: "none",
              marginTop: "8px",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#333";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2A2E16";
            }}
          >
            Add to cart
          </button>

          {/* USP Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px 10px",
              maxWidth: "360px",
              marginTop: "20px",
            }}
          >
            {uspItems.map((usp) => (
              <div
                key={usp.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#2A2E16",
                }}
              >
                <Image
                  src={usp.icon}
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden="true"
                />
                {usp.label}
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div style={{ marginTop: "24px", borderTop: "1px solid #D4D1C4" }}>
            {accordionItems.map((item, i) => (
              <div
                key={i}
                className="border-b border-[#D4D1C4]"
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === i ? null : i)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#2A2E16",
                    textAlign: "left",
                  }}
                  aria-expanded={openAccordion === i}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      fontSize: "20px",
                      lineHeight: 1,
                      fontWeight: 400,
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                    aria-hidden="true"
                  >
                    {openAccordion === i ? "−" : "+"}
                  </span>
                </button>
                {openAccordion === i && (
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#555",
                      paddingTop: "0",
                      paddingBottom: "16px",
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
