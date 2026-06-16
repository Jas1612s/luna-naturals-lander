"use client";

import { useState } from "react";
import { ProductBuyBox } from "./ProductBuyBox";

type Collection = "adults" | "kids";

export function CollectionTogglePDP() {
  const [collection, setCollection] = useState<Collection>("adults");

  return (
    <section>
      {/* Toggle bar */}
      <div className="bg-[var(--gr-cream-light)] pt-8 pb-0 px-4">
        <div className="max-w-[480px] mx-auto">
          <p className="text-center text-xs font-semibold text-[var(--gr-sage)] uppercase tracking-widest mb-3">
            Shop by collection
          </p>
          <div className="bg-[var(--gr-cream-warm)] rounded-full p-1 flex">
            {(["adults", "kids"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setCollection(option)}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  collection === option
                    ? "bg-[var(--gr-green)] text-white shadow-md"
                    : "text-[var(--gr-sage)] hover:text-[var(--gr-dark)]"
                }`}
              >
                {option === "adults" ? "Adults" : "Kids"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductBuyBox key={collection} defaultVariant={collection} />
    </section>
  );
}
