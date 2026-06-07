'use client';

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  price: string;
  img: string;
  soldOut: boolean;
};

type TabKey = "BEST SELLERS" | "NEW ARRIVALS" | "Value Packs";

const tabs: Record<TabKey, Product[]> = {
  // Available products shown first to maximise add-to-cart rate
  "BEST SELLERS": [
    { name: "Mosquito Repellent Wipes - 15 Individually Wrapped Wipes", price: "$12.00 USD", img: "/images/luna/prod-wipes.webp", soldOut: false },
    { name: "Natural Bug Repellent Spray - 40mL", price: "$12.00 USD", img: "/images/luna/prod-spray-40.webp", soldOut: false },
    { name: "Mosquito Repellent Incense - 24 Sticks", price: "$14.99 USD", img: "/images/luna/prod-incense.webp", soldOut: false },
    { name: "Mosquito Repellent Patches for Kids - 90 Patches", price: "$14.99 USD", img: "/images/luna/prod-patches-kids.webp", soldOut: true },
    { name: "Mosquito Repellent Bracelets - 12 Pack", price: "$11.99 USD", img: "/images/luna/prod-bracelets.webp", soldOut: true },
    { name: "Bug & Tick Repellent Spray - 120 mL", price: "$14.99 USD", img: "/images/luna/prod-spray-120-tab.webp", soldOut: true },
  ],
  "NEW ARRIVALS": [
    { name: "Hydrocolloid Bug Bite Relief Patches - 50 Transparent Patches", price: "$14.99 USD", img: "/images/luna/prod-bite-patches-tab.webp", soldOut: false },
    { name: "Itch Relief Stick - 18gm", price: "$11.99 USD", img: "/images/luna/prod-itch-stick.webp", soldOut: false },
    { name: "Mosquito Repellent Candles - 3 Pack", price: "$12.00 USD", img: "/images/luna/prod-candles.webp", soldOut: false },
  ],
  "Value Packs": [
    { name: "Bug Protection Value Pack - Spray + Patches", price: "$24.99 USD", img: "/images/luna/prod-value-1.webp", soldOut: false },
    { name: "Family Bug Defense Bundle", price: "$34.99 USD", img: "/images/luna/prod-value-2.webp", soldOut: false },
    { name: "Adventure Kit - Complete Bug Defense", price: "$44.99 USD", img: "/images/luna/prod-value-3.webp", soldOut: false },
  ],
};

const TAB_KEYS = Object.keys(tabs) as TabKey[];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={cn("group bg-[#f2f2f2] rounded-[12px] overflow-hidden", product.soldOut && "opacity-70")}>
      <div className="aspect-square bg-white p-4 relative">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {product.soldOut && (
          <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full" style={{ backgroundColor: '#d1d1d1', color: '#555' }}>
            Sold out
          </span>
        )}
        {!product.soldOut && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              className="flex items-center gap-1.5 text-white text-[12px] font-semibold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: '#4a5940' }}
            >
              <ShoppingBag size={12} />
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[13px] font-medium text-[#1d1d1d] line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className={cn("text-[13px] font-bold", product.soldOut ? "text-[#999]" : "text-[#1d1d1d]")}>
            {product.price}
          </p>
          {!product.soldOut && (
            <span className="text-[10px] font-medium text-[#22a06b]">In stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full text-[13px] font-semibold uppercase transition-colors",
        active
          ? "bg-[#1d1d1d] text-white border border-[#1d1d1d]"
          : "bg-transparent text-[#1d1d1d] border border-[#d1d1d1] hover:border-[#1d1d1d]"
      )}
    >
      {label}{" "}
      <span className="opacity-60 text-[11px]">({count})</span>
    </button>
  );
}

export function LunaProducts() {
  const [activeTab, setActiveTab] = useState<TabKey>("BEST SELLERS");

  const activeProducts = tabs[activeTab];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2
          className={cn(
            "font-[family-name:var(--font-josefin-sans)]",
            "text-[26px] md:text-[36px] text-[#1d1d1d] text-center mb-8"
          )}
        >
          Powerful Protection, Naturally.
        </h2>

        {/* Tab buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {TAB_KEYS.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              count={tabs[tab].length}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Content: featured image + product grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Featured image */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/luna/featured-product.webp"
                alt="Featured product"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="text-[13px] text-[#1d1d1d] text-center mt-3 font-medium">
              Our products are engineered for one job: keeping you bite-free so you can focus on living.
            </p>
            <a
              href="#"
              className="block mt-3 text-center text-[13px] font-semibold text-[#4a5940] underline"
            >
              Shop Protection →
            </a>
          </div>

          {/* Product grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {activeProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
