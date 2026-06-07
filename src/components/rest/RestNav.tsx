"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function RestLogo() {
  return (
    <span
      className="text-[20px] font-bold text-[#2A2E16]"
      style={{
        fontFamily: "var(--font-rest-heading), 'DM Serif Display', Georgia, serif",
        letterSpacing: "-0.02em",
      }}
      aria-label="Luna Naturals"
    >
      Luna Naturals
    </span>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const navLinks = ["Shop", "Science", "Explore"] as const;

export function RestNav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-white border-b border-[#D4D1C4] transition-shadow duration-200",
          scrolled && "shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Left — Logo + tagline */}
          <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <span className="text-[#2A2E16]">
              <RestLogo />
            </span>
            <span className="text-[11px] text-[#2A2E16] tracking-wider uppercase font-light hidden sm:inline">
              Effective Bug Protection
            </span>
          </a>

          {/* Center — Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] font-medium text-[#2A2E16] hover:text-[#E8603C] transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right — Icons */}
          <div className="flex items-center gap-5">
            {/* Store Locator — desktop only */}
            <a
              href="#"
              className="hidden md:inline text-[13px] text-[#4A4D3A] hover:text-[#E8603C] transition-colors no-underline"
            >
              Store Locator
            </a>

            {/* Search icon */}
            <button
              aria-label="Search"
              className="text-[#2A2E16] hover:text-[#E8603C] transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              <SearchIcon />
            </button>

            {/* Account icon — desktop only */}
            <button
              aria-label="Account"
              className="hidden md:block text-[#2A2E16] hover:text-[#E8603C] transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              <AccountIcon />
            </button>

            {/* Cart icon with badge */}
            <button
              aria-label="Cart"
              className="relative text-[#2A2E16] hover:text-[#E8603C] transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              <CartIcon />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#2A2E16] text-white text-[10px] leading-none flex items-center justify-center font-semibold">
                0
              </span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              aria-label="Open menu"
              className="md:hidden text-[#2A2E16] hover:text-[#E8603C] transition-colors bg-transparent border-none cursor-pointer p-0"
              onClick={() => setDrawerOpen(true)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white z-[9999] shadow-2xl transition-transform duration-300",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#D4D1C4]">
          <span className="text-[#2A2E16]">
            <RestLogo />
          </span>
          <button
            aria-label="Close menu"
            className="text-[#2A2E16] bg-transparent border-none cursor-pointer p-0"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[17px] font-medium text-[#2A2E16] hover:text-[#E8603C] transition-colors no-underline"
              onClick={() => setDrawerOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="text-[17px] font-medium text-[#2A2E16] hover:text-[#E8603C] transition-colors no-underline"
            onClick={() => setDrawerOpen(false)}
          >
            Store Locator
          </a>
        </nav>
      </div>
    </>
  );
}
