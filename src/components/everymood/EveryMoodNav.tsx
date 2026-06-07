"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  "Home",
  "Shop All",
  "Hair & Body Mists",
  "Body Oil",
  "Hand Sanitizer",
  "Lip Balms",
  "Mood Quiz",
];

export function EveryMoodNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 80,
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "background-color 0.2s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/everymood/logo-luna-naturals.webp"
          alt="Luna Naturals"
          style={{ height: 200 }}
        />
      </a>

      {/* Desktop Nav Links */}
      <nav
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
        }}
        className="em-desktop-nav"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "black",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--em-indigo)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right Icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Search */}
        <button
          aria-label="Search"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
        </button>

        {/* Account */}
        <button
          aria-label="Account"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </button>

        {/* Cart */}
        <button
          aria-label="Cart"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1={3} y1={6} x2={21} y2={6} />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>

        {/* Mobile Hamburger */}
        <button
          aria-label="Menu"
          className="em-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "none",
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="em-mobile-menu"
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            backgroundColor: "white",
            padding: "20px 50px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "black",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
