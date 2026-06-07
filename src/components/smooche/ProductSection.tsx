"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #D4B5AB" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-4 focus:outline-none"
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#3D1018" }}>{question}</span>
        <span
          className="shrink-0 ml-4 transition-transform duration-200"
          style={{ fontSize: 20, fontWeight: 300, color: "#8B6B6B", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 13, color: "#5A2D35", lineHeight: 1.6, margin: 0, paddingBottom: 16 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Variant = "transparent" | "raspberry";

const VARIANT_IMAGES: Record<Variant, string[]> = {
  transparent: [
    "/images/smooche/lick-pouch.webp",
    "/images/smooche/lick-lifestyle-2.webp",
    "/images/smooche/elpc-3.webp",
    "/images/smooche/elpc-4.webp",
    "/images/smooche/elpc-5.webp",
    "/images/smooche/elpc-6.webp",
    "/images/smooche/elpc-7.webp",
    "/images/smooche/elpc-8.webp",
  ],
  raspberry: [
    "/images/smooche/elpr-1.webp",
    "/images/smooche/elpr-2.webp",
    "/images/smooche/elpr-3.webp",
    "/images/smooche/elpr-4.webp",
    "/images/smooche/elpr-5.webp",
    "/images/smooche/elpr-6.webp",
    "/images/smooche/elpr-7.webp",
    "/images/smooche/elpr-7b.webp",
  ],
};

const VARIANT_COLORS: Record<Variant, string> = {
  transparent: "#f6ddea",
  raspberry: "#df8096",
};

const VARIANT_LABELS: Record<Variant, string> = {
  transparent: "Transparent",
  raspberry: "Raspberry",
};


// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function ProductSection() {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("transparent");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity] = useState(1);

  const images = VARIANT_IMAGES[selectedVariant];
  const mainImage = images[selectedImageIndex] ?? images[0];

  function handleVariantChange(v: Variant) {
    setSelectedVariant(v);
    setSelectedImageIndex(0);
  }


  return (
    <section className="w-full">
      <div
        className="mx-auto flex flex-col md:flex-row gap-8 md:gap-10"
        style={{ maxWidth: 1200, padding: "40px 20px" }}
      >
        {/* ---------------------------------------------------------------- */}
        {/* LEFT: Image Gallery                                               */}
        {/* ---------------------------------------------------------------- */}
        <div className="w-full md:w-[55%] flex flex-col gap-3">
          {/* Main image */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "1 / 1",
              backgroundColor: "#F5EAE4",
              borderRadius: 8,
            }}
          >
            <Image
              key={mainImage}
              src={mainImage}
              alt="Libido Lollipops"
              fill
              className="object-contain transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex flex-row gap-2 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImageIndex(i)}
                className="shrink-0 overflow-hidden focus:outline-none"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 6,
                  border:
                    i === selectedImageIndex
                      ? "2px solid #5A1726"
                      : "2px solid transparent",
                  opacity: i === selectedImageIndex ? 1 : 0.6,
                  transition: "border-color 0.15s, opacity 0.15s",
                  position: "relative",
                  backgroundColor: "#F5EAE4",
                }}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Product view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="70px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* RIGHT: Product Details                                            */}
        {/* ---------------------------------------------------------------- */}
        <div className="w-full md:w-[45%] flex flex-col">
          {/* Social proof bar — TOP */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <div className="flex -space-x-2">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/women/65.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="rounded-full ring-2 ring-white"
                  style={{ width: 28, height: 28, objectFit: "cover" }}
                />
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#3D1018", margin: 0 }}>
              <strong>Rosalie</strong>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginLeft: 4,
                  marginRight: 2,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="7" fill="#22c55e" />
                  <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              and <strong>100,000+</strong> others purchased
            </p>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill={star <= 4 ? "#C8A45C" : "none"}
                aria-hidden="true"
              >
                <path
                  d="M8 1.5l1.85 3.75L14 5.9l-3 2.93.71 4.12L8 10.93 4.29 12.95 5 8.83 2 5.9l4.15-.65L8 1.5z"
                  stroke="#C8A45C"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  fill={star <= 4 ? "#C8A45C" : star === 5 ? "url(#halfStar)" : "none"}
                />
                {star === 5 && (
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="80%" stopColor="#C8A45C" />
                      <stop offset="80%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                )}
              </svg>
            ))}
            <span style={{ fontSize: 13, fontWeight: 600, color: "#3D1018", marginLeft: 4 }}>
              4.8/5
            </span>
            <span style={{ fontSize: 13, color: "#8B6B6B" }}>
              (61,876 reviews)
            </span>
          </div>

          {/* Flash SALE badge */}
          <div className="mb-3">
            <span
              className="inline-block uppercase tracking-wide"
              style={{
                backgroundColor: "#B01E3C",
                color: "#F5EDE6",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 4,
              }}
            >
              Flash SALE
            </span>
          </div>

          {/* Product title */}
          <h1
            style={{ fontSize: 36, fontWeight: 800, color: "#3D1018", marginBottom: 6, letterSpacing: "-0.5px", lineHeight: 1.1 }}
          >
            Libido Lollipops
          </h1>

          {/* Subtitle */}
          <p
            style={{ fontSize: 13, color: "#8B6B6B", fontWeight: 400, marginBottom: 12 }}
          >
            30-day money-back guarantee
          </p>

          {/* Price block */}
          <div className="mb-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                style={{
                  fontSize: 16,
                  color: "#B01E3C",
                  textDecoration: "line-through",
                  fontWeight: 400,
                }}
              >
                $69.00 CAD
              </span>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#3D1018" }}>
                $55.00 CAD
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#5A1726",
                  backgroundColor: "#EBD3C7",
                  padding: "3px 10px",
                  borderRadius: 4,
                  whiteSpace: "nowrap",
                }}
              >
                BUY 1, GET 1 FREE
              </span>
            </div>
            {/* Afterpay */}
            <p style={{ fontSize: 12, color: "#8B6B6B", marginTop: 6, marginBottom: 0 }}>
              or 4 interest-free payments of <strong style={{ color: "#3D1018" }}>$13.75</strong> with{" "}
              <span style={{ fontWeight: 700, color: "#3D1018" }}>afterpay</span>
            </p>
          </div>

          {/* Trust icons — 2x2 grid with checkmarks */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5"
            style={{ paddingTop: 12, paddingBottom: 4 }}
          >
            {[
              "Instantly fuller lips",
              "Extreme plumping effect",
              "Approved by dermatologists",
              "100% natural & vegan",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="#22c55e" />
                  <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13, color: "#3D1018", fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* TYPE selector */}
          <div className="mb-4">
            <p style={{ fontSize: 11, fontWeight: 600, color: "#8B6B6B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>
              Type
            </p>
            <div className="flex gap-2">
              {(["transparent", "raspberry"] as Variant[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => handleVariantChange(v)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all focus:outline-none",
                    selectedVariant === v
                      ? "border-2 border-[#3D1018] bg-white"
                      : "border border-[#D4B5AB] bg-white hover:border-[#8B6B6B]"
                  )}
                  style={{ color: "#3D1018" }}
                >
                  {v === "transparent" ? "Normal" : "Extreme"} - $55.00
                </button>
              ))}
            </div>
          </div>

          {/* COLOR label */}
          <p style={{ fontSize: 11, fontWeight: 600, color: "#8B6B6B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>
            Color: {VARIANT_LABELS[selectedVariant].toUpperCase()}
          </p>

          {/* Flash SALE text */}
          <p className="text-center mb-4" style={{ fontSize: 15, fontWeight: 700, color: "#3D1018", fontStyle: "italic" }}>
            Flash SALE
          </p>

          {/* Buy 1, Get 1 FREE promo */}
          <div className="flex items-center gap-3 mb-3 px-3 py-3 rounded-lg" style={{ backgroundColor: "#F5EAE4" }}>
            <span style={{ fontSize: 20 }} aria-hidden="true">🎁</span>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#3D1018", margin: 0 }}>
                Buy 1, Get 1 FREE
              </p>
              <p style={{ fontSize: 12, color: "#8B6B6B", margin: 0 }}>
                Add two items to your cart
              </p>
            </div>
          </div>

          {/* FREE Mystery Gift */}
          <div className="flex items-center gap-3 mb-5 px-3 py-3 rounded-lg" style={{ backgroundColor: "#F5EAE4" }}>
            <span style={{ fontSize: 20 }} aria-hidden="true">📦</span>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#3D1018", margin: 0 }}>
              + FREE Mystery Gift
            </p>
          </div>

          {/* Add to Cart + Quantity row */}
          <div className="flex gap-3 mb-4">
            <button
              type="button"
              className="flex-1 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A1726]"
              style={{
                height: 52,
                backgroundColor: "#5A1726",
                color: "#F5EDE6",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#6B1F30";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#5A1726";
              }}
            >
              ADD TO CART
            </button>
            {/* Quantity dropdown */}
            <div
              className="flex items-center justify-center gap-1.5"
              style={{
                height: 52,
                minWidth: 64,
                border: "1px solid #D4B5AB",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 500, color: "#3D1018" }}>{quantity}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 5l3 3 3-3" stroke="#3D1018" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Shipping info row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-1.5">
              <span style={{ fontSize: 14 }}>🔥</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#22c55e" }}>Shipped today</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span style={{ fontSize: 14 }}>🇨🇦</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#3D1018" }}>Free shipping to <strong>CA</strong></span>
            </div>
          </div>

          {/* Urgency block */}
          <div className="mb-5">
            <p style={{ fontSize: 15, fontWeight: 700, color: "#3D1018", marginBottom: 2 }}>
              Selling out fast
            </p>
            <p style={{ fontSize: 13, color: "#8B6B6B", marginBottom: 10 }}>
              Due to high demand, limited quantities available
            </p>
            {/* Progress bar */}
            <div className="w-full rounded-full overflow-hidden mb-2" style={{ height: 8, backgroundColor: "#EBD3C7" }}>
              <div className="h-full rounded-full" style={{ width: "91%", backgroundColor: "#5A1726" }} />
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 13, fontWeight: 600, color: "#3D1018" }}>91% sold</span>
              <span style={{ fontSize: 13, color: "#8B6B6B" }}>Ends in 06:18:16</span>
            </div>
          </div>

          {/* 30-day money-back guarantee card */}
          <div
            className="rounded-xl p-5 flex gap-4 items-start"
            style={{ backgroundColor: "#F5EAE4" }}
          >
            <div
              className="shrink-0 flex items-center justify-center rounded-full"
              style={{ width: 44, height: 44, backgroundColor: "#EBD3C7" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M11 1l2.5 5.5L19 7.5l-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-1L11 1z" fill="#C8A45C" stroke="#B8924A" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#3D1018", marginBottom: 6 }}>
                30-day money-back guarantee
              </p>
              <p style={{ fontSize: 13, color: "#5A2D35", lineHeight: 1.5, margin: 0 }}>
                Try it worry-free. If our lip plumper extreme doesn&apos;t give you the fuller, more defined lips you expect, you&apos;ll get your money back*
              </p>
            </div>
          </div>

          {/* ── UGC Videos ── */}
          <div className="mt-8">
            <h3 className="text-center" style={{ fontSize: 18, fontWeight: 600, color: "#3D1018", marginBottom: 16 }}>
              Loved by 60,000+ happy lips
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "/images/smooche/elpc-5.webp",
                "/images/smooche/lick-lifestyle-2.webp",
                "/images/smooche/elpc-7.webp",
              ].map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="relative overflow-hidden rounded-lg focus:outline-none group"
                  style={{ aspectRatio: "9 / 16", backgroundColor: "#F5EAE4" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-full" style={{ width: 40, height: 40, backgroundColor: "rgba(255,255,255,0.9)" }}>
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M1 1l12 7-12 7V1z" fill="#B01E3C" /></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── FAQ Accordion ── */}
          <div className="mt-8">
            {[
              { q: "How does it work?", a: "Our lollipops are infused with a blend of natural aphrodisiac ingredients including Damiana, Maca Root, and Tribulus Terrestris. Simply enjoy one lollipop 30-60 minutes before desired effects." },
              { q: "Is it safe to use?", a: "Yes! All our ingredients are 100% natural, vegan, and FDA-compliant. Manufactured in a GMP-certified facility. Consult your healthcare provider if pregnant, nursing, or taking medication." },
              { q: "How strong is the effect?", a: "Effects vary by individual, but most customers report noticeable results within 30-60 minutes. The Cherry + Damiana formula is our most popular blend." },
              { q: "How long does it last?", a: "The effects typically last 2-4 hours, depending on your individual metabolism. For best results, take on an empty or light stomach." },
              { q: "Can I use it with other products?", a: "Our lollipops are safe to use alongside most supplements. Avoid combining with other stimulant-based supplements. Consult your healthcare provider if concerned." },
              { q: "Ingredients", a: "Organic cane sugar, organic tapioca syrup, citric acid, natural cherry flavor, Damiana leaf extract, Maca root extract, Tribulus Terrestris extract, natural color (beet juice concentrate)." },
              { q: "Shipping and returns", a: "Free shipping on all orders within Canada. Ships within 1-2 business days, arrives in 3-5 days. 30-day money-back guarantee — contact us for a full refund if not satisfied." },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* ── Testimonials Carousel ── */}
          <div className="mt-8">
            <h3 className="text-center" style={{ fontSize: 22, fontWeight: 700, color: "#3D1018", marginBottom: 20 }}>
              Loved by <span style={{ color: "#C8A45C" }}>60,000+</span>
            </h3>
            <div
              className="flex gap-3 overflow-x-auto pb-2"
              style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            >
              {[
                { name: "Lena, 63", img: "https://randomuser.me/api/portraits/women/52.jpg", text: "I'm 63 and honestly didn't expect much — but this lip plumper surprised me. My lips look fuller and smoother without that fake, overdone look, and the fine lines around my mouth ar..." },
                { name: "Melissa, 34", img: "https://randomuser.me/api/portraits/women/26.jpg", text: "I saw it on TikTok and was thankful this product actually worked. My lips look plumper and feel so hydrated. The tingling is satisfying — you can tell it's working. I use it every ..." },
                { name: "Sophie, 28", img: "https://randomuser.me/api/portraits/women/33.jpg", text: "Game changer! I've tried so many lip plumpers and most do nothing. This one actually delivers visible results in minutes. My boyfriend noticed right away..." },
                { name: "Rachel, 41", img: "https://randomuser.me/api/portraits/women/45.jpg", text: "After two weeks of using this daily, my lips genuinely look different — like I got filler but better. They're softer, more defined, and have this natural plump..." },
              ].map((t, i) => (
                <div key={i} className="shrink-0 flex flex-col rounded-2xl overflow-hidden bg-white" style={{ width: 240, scrollSnapAlign: "start" }}>
                  <div style={{ height: 180, backgroundColor: "#EBD3C7" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1018" }}>{t.name}</span>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#C8A45C" aria-hidden="true">
                            <path d="M6 1l1.4 2.8L10.4 4.3l-2.2 2.1.5 3.1L6 8l-2.7 1.5.5-3.1-2.2-2.1 3-.5L6 1z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="6" fill="#22c55e" />
                        <path d="M3.5 6l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: 10, fontWeight: 600, color: "#B01E3C", textTransform: "uppercase", letterSpacing: "0.3px" }}>Verified Purchase</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#5A2D35", lineHeight: 1.5, margin: 0 }}>{t.text}</p>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#B01E3C", marginTop: 6, cursor: "pointer" }}>Read More</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
