"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Weight Loss", href: "#weight-loss" },
  { label: "Peptides & Longevity", href: "#peptides" },
  { label: "Men's Health", href: "#mens-health" },
  { label: "Women's Health", href: "#womens-health" },
];

export function MedviNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-4"
        style={{ maxWidth: "1280px" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-1" aria-label="MEDVi Home">
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-sans)",
              color: scrolled ? "rgb(36,34,32)" : "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            MED
          </span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#2E936F",
              letterSpacing: "-0.03em",
            }}
          >
            Vi
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{
                color: scrolled ? "rgb(36,34,32)" : "rgba(255,255,255,0.9)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85 lg:inline-flex"
            style={{
              backgroundColor: "#2E936F",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
            }}
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-6 transition-all duration-200"
              style={{
                backgroundColor: scrolled ? "rgb(36,34,32)" : "#ffffff",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-200"
              style={{
                backgroundColor: scrolled ? "rgb(36,34,32)" : "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-200"
              style={{
                backgroundColor: scrolled ? "rgb(36,34,32)" : "#ffffff",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-6 py-4 lg:hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: "rgb(36,34,32)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "#2E936F", color: "#ffffff" }}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
