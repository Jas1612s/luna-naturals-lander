"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function FormaLogo({ className }: { className?: string }) {
  return (
    <span
      className={`font-sans font-bold tracking-[-0.045em] leading-none text-white ${className ?? ""}`}
    >
      forma
      <span style={{ color: "#00D68C" }}>·</span>
    </span>
  );
}

export function FormaNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 h-14 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(11,61,46,0.97)"
          : "rgba(11,61,46,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between px-6"
        style={{ maxWidth: "1600px" }}
      >
        <a href="/" aria-label="Forma home">
          <FormaLogo className="text-xl" />
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hidden text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            Pricing
          </a>
          <a
            href="#assessment"
            className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#6FE8A7", color: "#0B3D2E" }}
          >
            Start assessment
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
