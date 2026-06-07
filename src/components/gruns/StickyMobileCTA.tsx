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

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-black/10 px-4 py-3 shadow-lg">
      <a
        href="#shop"
        className="block w-full py-3.5 bg-[var(--gr-accent)] text-white text-center text-base font-bold rounded-full hover:brightness-110 transition"
      >
        Shop Now — 60% Off
      </a>
    </div>
  );
}
