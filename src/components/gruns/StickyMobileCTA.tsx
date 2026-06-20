"use client";

import { useState, useEffect } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const productName = "Family · 90ct";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-black/5 px-4 py-3.5 shadow-[0_-4px_24px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[600px] mx-auto flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#586B3A] shrink-0 shadow-sm">
          <img loading="lazy" src="/images/gruns/luna-natural-kids-product.webp" alt="Luna Natural Mosquito Repellent Patches" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--gr-dark)] leading-snug">{productName}</p>
          <p className="mt-0.5">
            <span className="text-lg font-bold text-[var(--gr-dark)]">$16.15</span>{" "}
            <span className="text-sm text-[var(--gr-sage)] line-through">$24.99</span>
          </p>
        </div>
        <a
          href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-[var(--gr-accent)] text-white text-base font-bold px-7 py-3.5 rounded-full hover:brightness-110 active:scale-[0.97] transition whitespace-nowrap shadow-md shadow-[var(--gr-accent)]/20 no-underline"
        >
          Order now &rarr;
        </a>
      </div>
    </div>
  );
}
