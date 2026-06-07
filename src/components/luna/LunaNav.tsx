"use client";

import { useState, useEffect } from "react";


const marqueeMessages = [
  "🌿 Free Shipping on Orders Over $35",
  "DEET-Free & Family Safe",
  "30-Day Money-Back Guarantee",
  "1,000,000+ Happy Adventurers",
  "Lab-Tested, Adventure-Approved",
];

const NAV_LINKS = [
  { label: "Home", href: "/luna" },
  { label: "Catalog", href: "/luna" },
  { label: "Contact", href: "/luna" },
];

function CartIcon({ color }: { color: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transition: "stroke 0.3s ease" }}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function HamburgerIcon({ color }: { color: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      style={{ transition: "stroke 0.3s ease" }}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function LunaNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Double for seamless marquee loop
  const allMessages = [...marqueeMessages, ...marqueeMessages];

  const iconColor = scrolled ? "#1D1D1D" : "#ffffff";

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
      {/* Announcement bar — always dark green */}
      <div
        style={{
          backgroundColor: "#2a2e16",
          height: "40px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="luna-marquee-track" style={{ whiteSpace: "nowrap" }}>
          {allMessages.map((msg, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 400,
                padding: "0 30px",
                fontFamily: "var(--font-jost)",
              }}
            >
              {msg}
              <span style={{ margin: "0 12px", opacity: 0.5 }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main header — transparent until scrolled */}
      <header
        style={{
          backgroundColor: scrolled ? "#ffffff" : "transparent",
          borderBottom: scrolled ? "1px solid #e5e5e5" : "none",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Mobile layout: hamburger left, logo center, cart right */}
          <div
            className="flex md:hidden items-center justify-between w-full"
            style={{ height: "56px" }}
          >
            <button
              aria-label="Open menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HamburgerIcon color={iconColor} />
            </button>
            <a
              href="/luna"
              className="ln-heading"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: scrolled ? "#2a2e16" : "#ffffff",
                textDecoration: "none",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              Luna Naturals
            </a>
            <button
              aria-label="Cart"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CartIcon color={iconColor} />
            </button>
          </div>

          {/* Desktop layout: nav links left, logo center, icons right */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left: nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1 }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "var(--font-jost)",
                    letterSpacing: "0.3px",
                    color: scrolled ? "#2a2e16" : "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Center: text logo */}
            <a
              href="/luna"
              className="ln-heading"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: scrolled ? "#2a2e16" : "#ffffff",
                textDecoration: "none",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              Luna Naturals
            </a>

            {/* Right: search, account, cart icons with dividers */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <button
                aria-label="Search"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <div style={{ width: "1px", height: "20px", backgroundColor: scrolled ? "#d1d1d1" : "rgba(255,255,255,0.3)", transition: "background-color 0.3s ease" }} />
              <button
                aria-label="Account"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <div style={{ width: "1px", height: "20px", backgroundColor: scrolled ? "#d1d1d1" : "rgba(255,255,255,0.3)", transition: "background-color 0.3s ease" }} />
              <button
                aria-label="Cart"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CartIcon color={iconColor} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
