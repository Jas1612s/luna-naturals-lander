"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS: { label: string; sale?: boolean }[] = [
  { label: "Shop all" },
  { label: "Lips" },
  { label: "Lashes" },
  { label: "Brows" },
  { label: "Face" },
  { label: "Bestsellers" },
  { label: "Accessories" },
  { label: "About" },
  { label: "SALE", sale: true },
];

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Shopping bag outline */}
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function SmoocheNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-200",
        "border-b border-[#D4B5AB]",
        scrolled && "shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      )}
      style={{ height: "60px" }}
      aria-label="Main navigation"
    >
      <div
        className="mx-auto flex h-full max-w-[1400px] items-center justify-between"
        style={{ padding: "0 20px" }}
      >
        {/* ── Left: hamburger (mobile only) ── */}
        <button
          className="flex items-center justify-center text-[#3D1018] md:hidden"
          aria-label="Open menu"
          style={{ minWidth: "24px" }}
        >
          <HamburgerIcon />
        </button>

        {/* ── Center on mobile / Left on desktop: Logo ── */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          aria-label="Smooche — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smooche/logo-black.svg"
            alt="Smooche"
            width={150}
            height={32}
            style={{ width: "150px", height: "auto" }}
          />
        </a>

        {/* ── Center: Desktop nav links ── */}
        <ul
          className="hidden items-center md:flex"
          style={{ gap: "24px", listStyle: "none", margin: 0, padding: 0 }}
          role="list"
        >
          {NAV_LINKS.map(({ label, sale }) => (
            <li key={label}>
              <a
                href="#"
                className={cn(
                  "transition-opacity hover:opacity-70",
                  sale ? "font-medium" : "font-normal"
                )}
                style={{
                  fontFamily: '"Sohne", system-ui, sans-serif',
                  fontSize: "14px",
                  fontWeight: sale ? 500 : 400,
                  color: sale ? "#B01E3C" : "#3D1018",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right: Cart icon ── */}
        <a
          href="#"
          className="relative flex items-center text-[#3D1018] transition-opacity hover:opacity-70"
          aria-label="Cart, 0 items"
          style={{ minWidth: "24px" }}
        >
          <CartIcon />
          {/* Badge */}
          <span
            className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5A1726] text-[#F5EDE6]"
            style={{ fontSize: "9px", fontWeight: 600, lineHeight: 1 }}
            aria-hidden="true"
          >
            0
          </span>
        </a>
      </div>
    </nav>
  );
}
