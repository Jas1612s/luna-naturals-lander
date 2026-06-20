"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ── Countdown hook (same as ProductBuyBox) ── */
function useCountdown(startHrs = 3, startMin = 0, startSec = 0) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ hrs: startHrs, min: startMin, sec: startSec });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hrs, min, sec } = prev;
        sec -= 1;
        if (sec < 0) { sec = 59; min -= 1; }
        if (min < 0) { min = 59; hrs -= 1; }
        if (hrs < 0) { hrs = 0; min = 0; sec = 0; }
        return { hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  return { time, mounted, formatted: `${pad(time.hrs)}h ${pad(time.min)}m ${pad(time.sec)}s` };
}

/* ── Bundle data ── */
const products = [
  {
    id: "adults",
    name: "Adults Pack",
    desc: "90 patches · 12hr protection · Citronella + Eucalyptus",
    tag: "Best Seller",
    tagColor: "bg-[var(--gr-green-dark)]",
    price: 14.99,
    compare: 24.99,
    patchCount: 90,
    image: "/images/gruns/adults-pack-moss.webp",
  },
  {
    id: "kids",
    name: "Kids Pack",
    desc: "90 patches · Fun dinosaur designs · Ages 2+",
    tag: "Kid Favorite",
    tagColor: "bg-[var(--gr-accent)]",
    price: 14.99,
    compare: 24.99,
    patchCount: 90,
    image: "/images/gruns/product-kids-patches-v2.webp",
  },
];

const tiers = [
  { packs: 2, label: "Starter", save: 40 },
  { packs: 3, label: "Most Popular", save: 50 },
  { packs: 5, label: "Best Value", save: 60 },
];

export function BundleBuyBox() {
  const [quantities, setQuantities] = useState<Record<string, number>>({ adults: 2, kids: 1 });
  const { formatted: countdownText, mounted: countdownMounted } = useCountdown();

  const totalPacks = Object.values(quantities).reduce((a, b) => a + b, 0);
  const subtotal = products.reduce((acc, p) => acc + (quantities[p.id] ?? 0) * p.price, 0);
  const compareTotal = products.reduce((acc, p) => acc + (quantities[p.id] ?? 0) * p.compare, 0);
  const savings = compareTotal - subtotal;
  const savingsPct = compareTotal > 0 ? Math.round((savings / compareTotal) * 100) : 0;

  const freeGiftThreshold = 3;
  const remaining = Math.max(0, freeGiftThreshold - totalPacks);
  const progressPct = Math.min(100, (totalPacks / freeGiftThreshold) * 100);

  const freeShipThreshold = 30;
  const shipRemaining = Math.max(0, freeShipThreshold - subtotal);
  const shipPct = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));
  const qualifiesShip = shipRemaining <= 0;

  function setQty(id: string, delta: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(10, (prev[id] ?? 0) + delta)),
    }));
  }

  function selectTier(target: number) {
    const ids = products.map((p) => p.id);
    const each = Math.floor(target / ids.length);
    const rem = target % ids.length;
    const next: Record<string, number> = {};
    ids.forEach((id, i) => { next[id] = each + (i < rem ? 1 : 0); });
    setQuantities(next);
  }

  return (
    <section id="bundle-builder" className="bg-[var(--gr-cream-light)] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="gr-display italic text-3xl md:text-[42px] text-[var(--gr-dark)] leading-tight mb-2">
            Build Your Bundle &amp; Save Big
          </h2>
          <p className="text-[15px] text-[var(--gr-sage)] leading-relaxed">
            Mix adults + kids packs. The more you add, the more you save.
          </p>
        </div>

        {/* Tier quick-select */}
        <div className="grid grid-cols-3 gap-2.5 mb-8">
          {tiers.map((tier) => {
            const isActive = tier.packs === totalPacks;
            return (
              <button
                key={tier.packs}
                onClick={() => selectTier(tier.packs)}
                className={`text-center py-4 px-2 rounded-2xl border-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-[var(--gr-accent)] shadow-md ring-1 ring-[var(--gr-accent)]"
                    : "border-[var(--gr-dark)]/6 bg-white hover:shadow-md"
                } ${isActive ? "bg-white" : ""}`}
              >
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 ${
                  isActive ? "bg-[var(--gr-accent)] text-white" : "bg-[var(--gr-cream)] text-[var(--gr-sage)]"
                }`}>
                  {tier.label}
                </span>
                <div className="text-2xl font-extrabold text-[var(--gr-dark)] leading-tight">{tier.packs}</div>
                <div className="text-xs text-[var(--gr-sage)] mt-0.5">packs</div>
                <div className="text-xs font-bold text-[var(--gr-accent)] mt-1">Save {tier.save}%</div>
              </button>
            );
          })}
        </div>

        <div className="md:grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_400px] md:gap-8 md:items-start">
          {/* Product selectors */}
          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            {products.map((product) => {
              const qty = quantities[product.id] ?? 0;
              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl p-4 md:p-5 grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-center transition-all ${
                    qty > 0
                      ? "border-2 border-[var(--gr-accent)] shadow-md ring-1 ring-[var(--gr-accent)]"
                      : "border-2 border-[var(--gr-dark)]/6"
                  }`}
                >
                  <div className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-xl overflow-hidden bg-[var(--gr-cream)] shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-base text-[var(--gr-dark)]">{product.name}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white whitespace-nowrap ${product.tagColor}`}>
                        {product.tag}
                      </span>
                    </div>
                    <p className="text-[13px] text-[var(--gr-sage)] leading-snug mb-2.5">{product.desc}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[var(--gr-dark)]/12 rounded-full overflow-hidden">
                        <button
                          onClick={() => setQty(product.id, -1)}
                          disabled={qty <= 0}
                          className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-[var(--gr-dark)] hover:bg-[var(--gr-cream)] transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          &#8722;
                        </button>
                        <span className="w-9 text-center text-base font-bold text-[var(--gr-dark)]">{qty}</span>
                        <button
                          onClick={() => setQty(product.id, 1)}
                          className="w-9 h-9 flex items-center justify-center text-lg font-semibold text-[var(--gr-dark)] hover:bg-[var(--gr-cream)] transition cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm text-[var(--gr-sage)]">
                        <strong className="text-[var(--gr-dark)]">${product.price.toFixed(2)}</strong>/pack{" "}
                        <span className="line-through opacity-50">${product.compare.toFixed(2)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary sidebar */}
          <div className="bg-[var(--gr-green-dark)] rounded-3xl p-6 text-white md:sticky md:top-[140px]">
            <h3 className="gr-display italic text-[22px] font-bold text-center mb-5">Your Bundle</h3>

            {/* Free gift progress */}
            <div className="mb-5">
              <p className="text-[13px] text-white/60 text-center mb-2">
                {remaining > 0 ? (
                  <>Add <strong className="text-[var(--gr-gold)]">{remaining} more pack{remaining !== 1 ? "s" : ""}</strong> to unlock <strong className="text-[var(--gr-gold)]">free gift</strong></>
                ) : (
                  <strong className="text-[var(--gr-gold)]">Free gift unlocked! 🎉</strong>
                )}
              </p>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-400"
                  style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, var(--gr-accent), var(--gr-gold))" }}
                />
              </div>
            </div>

            {/* Line items */}
            <div className="flex flex-col gap-2.5 pb-4 mb-4 border-b border-white/15">
              <div className="flex justify-between text-sm text-white/70">
                <span>{totalPacks} pack{totalPacks !== 1 ? "s" : ""}</span>
                <span>
                  <span className="line-through opacity-50 mr-2 text-xs">${compareTotal.toFixed(2)}</span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[var(--gr-gold)]">
                <span>You save</span>
                <span>${savings.toFixed(2)} ({savingsPct}%)</span>
              </div>
              <div className="flex justify-between text-sm text-white/70">
                <span>Shipping</span>
                <span className={qualifiesShip ? "text-[var(--gr-gold)] font-semibold" : ""}>
                  {qualifiesShip ? "FREE" : "$4.99"}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-bold mb-5">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* CTA */}
            <button
              disabled={totalPacks === 0}
              className="w-full py-5 bg-[var(--gr-accent)] text-white rounded-2xl hover:brightness-110 active:scale-[0.98] transition cursor-pointer shadow-lg shadow-[var(--gr-accent)]/30 mb-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <p className="gr-display italic text-xl">
                {totalPacks === 0 ? "Select at least 1 pack" : `Claim deal · Save ${savingsPct}%`}
              </p>
              {totalPacks > 0 && (
                <p className="text-xs opacity-80 mt-0.5">
                  Skip to checkout – total <span className="font-bold">${subtotal.toFixed(2)}</span>{" "}
                  <span className="line-through opacity-60">${compareTotal.toFixed(2)}</span>
                </p>
              )}
            </button>

            {/* Trust */}
            <div className="flex justify-center gap-4 text-[11px] text-white/45">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                30-day guarantee
              </span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                Secure checkout
              </span>
            </div>
          </div>
        </div>

        {/* Below summary: deal timer + shipping progress + trust badges */}
        <div className="max-w-[540px] mt-8 space-y-3">
          {/* Deal timer */}
          <div className="bg-[var(--gr-cream)] rounded-xl p-3.5 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gr-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            <p className="text-sm text-[var(--gr-dark)]">
              Deal locks in <span className="font-bold">{countdownMounted ? countdownText : "03h 00m 00s"}</span>
            </p>
          </div>

          {/* Free shipping progress */}
          <div className="bg-[var(--gr-cream)] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[var(--gr-dark)]">
                {qualifiesShip ? (
                  <span className="font-bold text-[var(--gr-green)]">You qualify for free shipping!</span>
                ) : (
                  <>You&apos;re <span className="font-bold text-[var(--gr-accent)]">${shipRemaining.toFixed(2)}</span> from free shipping</>
                )}
              </p>
              <span className="text-xs font-bold text-[var(--gr-accent)]">{shipPct}%</span>
            </div>
            <div className="w-full h-2 bg-[var(--gr-cream-warm)] rounded-full overflow-hidden mb-2">
              <div className={`h-full rounded-full transition-all duration-500 ${qualifiesShip ? "bg-[var(--gr-green)]" : "bg-[var(--gr-accent)]"}`} style={{ width: `${shipPct}%` }} />
            </div>
            <p className="text-[11px] text-[var(--gr-sage)]">Ships next business day · Free returns within 60 days</p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
            {[
              "30-day money-back guarantee",
              "Free US shipping over $30",
              "Delivered in 2–3 business days",
              "Pediatrician reviewed & approved",
            ].map((badge) => (
              <p key={badge} className="text-xs text-[var(--gr-sage)] flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gr-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
                </svg>
                {badge}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
