"use client";

import { useEffect, useState } from "react";
import { HimsLogo, HamburgerIcon } from "@/components/icons";

export function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 44);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[701] h-12 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-full items-center justify-between px-6">
        <a href="/" aria-label="Hims home">
          <HimsLogo className="h-6 w-auto" />
        </a>
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden text-base text-[rgba(0,0,0,0.88)] sm:block"
          >
            Log in
          </a>
          <button
            className="flex cursor-pointer p-1"
            aria-label="Open menu"
          >
            <HamburgerIcon className="h-6 w-6 text-[rgba(0,0,0,0.88)]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
