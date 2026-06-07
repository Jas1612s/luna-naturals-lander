"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const marqueeMessages = [
  "+ FREE Fast Shipping Over 50$",
  "NEW INFRARED LIGHT",
  "30-day money-back guarantee",
  "1,000,000+ Happy Customers",
  "Doctor Recommended. Champion Approved.",
];

const NAV_LINKS = ["Shop All", "Bestsellers", "Limited Editions", "Accessories"];

function SearchIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transition: "stroke 0.3s ease" }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

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

export function HiStripsHomeNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    // Set initial state
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Duplicate messages for seamless marquee loop
  const allMessages = [...marqueeMessages, ...marqueeMessages];

  const iconColor = "#2A2E16";

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
      {/* Announcement bar — always black */}
      <div
        style={{
          backgroundColor: "#2A2E16",
          height: "40px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="hs-marquee-track" style={{ whiteSpace: "nowrap" }}>
          {allMessages.map((msg, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 400,
                padding: "0 30px",
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
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #D4D1C4",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          transition: "background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
          height: "60px",
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
            <a href="/histrips" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/luna/luna-logo-green-trimmed.webp"
                width={140}
                height={32}
                alt="Luna Naturals"
                style={{
                  objectFit: "contain",
                  
                  
                }}
              />
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

          {/* Desktop layout: logo left, nav center, icons right */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <a href="/histrips" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src="/images/luna/luna-logo-green-trimmed.webp"
                width={140}
                height={32}
                alt="Luna Naturals"
                style={{
                  objectFit: "contain",
                  
                  
                }}
              />
            </a>

            {/* Center nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: scrolled ? "#2A2E16" : "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Right icons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexShrink: 0,
              }}
            >
              <button
                aria-label="Search"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SearchIcon color={iconColor} />
              </button>
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
          </div>
        </div>
      </header>
    </div>
  );
}
