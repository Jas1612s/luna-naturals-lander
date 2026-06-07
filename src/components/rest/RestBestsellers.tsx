"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";

interface ColorSwatch {
  left: string;
  right: string;
}

interface Product {
  title: string;
  tag: string | null;
  badge: string;
  rating: number;
  comparePrice: number;
  salePrice: number;
  discount: string;
  secondBadgeLabel: string | null;
  image: string;
  colors: ColorSwatch[];
}

const products: Product[] = [
  {
    title: "Bug Spray 120ml",
    tag: "#1 Best Seller",
    badge: "/images/luna/badge-natural.webp",
    rating: 4.9,
    comparePrice: 24,
    salePrice: 18,
    discount: "25% Off",
    secondBadgeLabel: "DEET-Free",
    image: "/images/luna/prod-spray-120.webp",
    colors: [],
  },
  {
    title: "Mosquito Patches \u2014 Kids",
    tag: "Fan Favorite",
    badge: "/images/luna/badge-eco.webp",
    rating: 4.9,
    comparePrice: 20,
    salePrice: 15,
    discount: "25% Off",
    secondBadgeLabel: null,
    image: "/images/luna/prod-patches-kids.webp",
    colors: [],
  },
  {
    title: "Bite Relief Patches",
    tag: null,
    badge: "/images/luna/badge-lab.webp",
    rating: 4.8,
    comparePrice: 16,
    salePrice: 12,
    discount: "25% Off",
    secondBadgeLabel: null,
    image: "/images/luna/prod-bite-patches.webp",
    colors: [],
  },
  {
    title: "Repellent Bracelets",
    tag: null,
    badge: "/images/luna/badge-deet.webp",
    rating: 4.7,
    comparePrice: 18,
    salePrice: 14,
    discount: "22% Off",
    secondBadgeLabel: null,
    image: "/images/luna/prod-bracelets.webp",
    colors: [],
  },
];

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
    >
      <path
        d="M6.76224 0.731762C6.83707 0.501435 7.16293 0.501435 7.23776 0.731763L8.51547 4.66414C8.54894 4.76714 8.64493 4.83688 8.75323 4.83688H12.888C13.1302 4.83688 13.2309 5.14678 13.0349 5.28913L9.68985 7.71948C9.60222 7.78314 9.56556 7.89598 9.59903 7.99898L10.8767 11.9314C10.9516 12.1617 10.688 12.3532 10.492 12.2109L7.14695 9.78053C7.05932 9.71686 6.94068 9.71686 6.85305 9.78053L3.50798 12.2109C3.31205 12.3532 3.04843 12.1617 3.12327 11.9314L4.40097 7.99898C4.43444 7.89598 4.39778 7.78314 4.31015 7.71948L0.965078 5.28913C0.76915 5.14678 0.869844 4.83688 1.11202 4.83688H5.24677C5.35507 4.83688 5.45106 4.76714 5.48453 4.66413L6.76224 0.731762Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 1L1.5 6.5L7 12"
        stroke="#4A4D3A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L6.5 6.5L1 12"
        stroke="#4A4D3A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Swatch({ left, right }: ColorSwatch) {
  return (
    <div
      className="flex h-5 w-5 overflow-hidden rounded-full"
      style={{ border: "1px solid #D4D1C4" }}
    >
      <div className="h-full w-1/2" style={{ backgroundColor: left }} />
      <div className="h-full w-1/2" style={{ backgroundColor: right }} />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="min-w-[280px] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[16px] bg-white"
      style={{ border: "1px solid #D4D1C4" }}
    >
      <a href="#" className="block">
        {/* Media wrapper */}
        <div
          className="relative flex items-center justify-center"
          style={{
            aspectRatio: "1 / 1",
            backgroundColor: "#F5EDE2",
            padding: "24px",
          }}
        >
          {/* Award badge */}
          <Image
            src={product.badge}
            alt="Award badge"
            width={48}
            height={48}
            className="absolute left-3 top-3 rounded-full"
            loading="lazy"
          />

          {/* Tag */}
          {product.tag && (
            <div className="absolute right-3 top-3">
              <span
                className="inline-block rounded-full px-2 py-0.5"
                style={{
                  backgroundColor: "rgba(42, 46, 22, 0.1)",
                  color: "#2A2E16",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                {product.tag}
              </span>
            </div>
          )}

          {/* Product image */}
          <Image
            src={product.image}
            alt={product.title}
            width={168}
            height={168}
            className="object-contain"
            style={{ maxWidth: "168px", maxHeight: "168px" }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Top row: badges + rating */}
          <div className="flex items-start justify-between">
            <div className="flex flex-wrap gap-1">
              <span
                className="inline-block rounded px-2 py-0.5"
                style={{
                  backgroundColor: "#E8603C",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                {product.discount}
              </span>
              {product.secondBadgeLabel && (
                <span
                  className="inline-block rounded px-2 py-0.5"
                  style={{
                    backgroundColor: "#2A2E16",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  {product.secondBadgeLabel}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1" style={{ color: "#2A2E16" }}>
              <StarIcon />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#2A2E16",
                }}
              >
                {product.rating}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="mt-2"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#2A2E16",
            }}
          >
            {product.title}
          </h3>

          {/* Price row */}
          <div className="mt-1 flex items-center gap-2">
            <span style={{ fontSize: "12px", color: "#8B9077" }}>From:</span>
            <span
              style={{
                fontSize: "14px",
                color: "#8B9077",
                textDecoration: "line-through",
              }}
            >
              ${product.comparePrice}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#2A2E16",
              }}
            >
              ${product.salePrice}
            </span>
          </div>

          {/* Color swatches */}
          <div className="mt-3 flex gap-1.5">
            {product.colors.map((color, idx) => (
              <Swatch key={idx} left={color.left} right={color.right} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export function RestBestsellers() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      className="relative z-10 bg-white py-20"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="mx-auto px-6"
      >
        {/* Title row */}
        <div className="mb-8 flex items-center justify-between">
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#2A2E16",
            }}
          >
            Discover Luna Naturals
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4D1C4] bg-white transition-colors hover:bg-[#F0E8DC]"
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4D1C4] bg-white transition-colors hover:bg-[#F0E8DC]"
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto px-6"
        >
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
