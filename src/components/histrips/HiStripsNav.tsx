"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const marqueeMessages = [
  "+ FREE Fast Shipping Over 50$",
  "30-day money-back guarantee",
  "1,000,000+ Happy Customers",
  "Doctor Recommended. Champion Approved.",
];

function CartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
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
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

const NAV_LINKS = ["Our Story", "Store Locator", "Support"];

export function HiStripsNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build duplicated messages for seamless marquee loop
  const allMessages = [...marqueeMessages, ...marqueeMessages];

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
      {/* Announcement bar */}
      <div
        style={{
          backgroundColor: "#000000",
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

      {/* Sticky header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #D4D1C4",
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
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
          {/* Mobile: hamburger on left, logo center, cart right */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              aria-label="Open menu"
              style={{ color: "#2A2E16", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            >
              <HamburgerIcon />
            </button>
            <a href="/histrips" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/luna/luna-logo-green-trimmed.webp"
                width={140}
                height={32}
                alt="Luna Naturals"
                style={{ objectFit: "contain" }}
              />
            </a>
            <button
              aria-label="Cart"
              style={{ color: "#2A2E16", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            >
              <CartIcon />
            </button>
          </div>

          {/* Desktop: logo left, nav center, right items */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <a href="/histrips" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src="/images/luna/luna-logo-green-trimmed.webp"
                width={140}
                height={32}
                alt="Luna Naturals"
                style={{ objectFit: "contain" }}
              />
            </a>

            {/* Center nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#2A2E16",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#000000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#2A2E16";
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Right items */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
              {/* NEW INFRARED LIGHT pill */}
              <span
                style={{
                  background: "linear-gradient(90deg, #E8603C, #C49B3D)",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 600,
                  borderRadius: "20px",
                  padding: "4px 10px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                NEW INFRARED LIGHT
              </span>

              {/* Cart icon */}
              <button
                aria-label="Cart"
                style={{
                  color: "#2A2E16",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CartIcon />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
