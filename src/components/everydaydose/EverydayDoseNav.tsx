"use client";

import Image from "next/image";

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ed-dark)"
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

function BagIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ed-dark)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export function EverydayDoseNav() {
  return (
    <header
      style={{
        background: "var(--ed-white)",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Desktop nav */}
      <nav
        className="hidden md:flex"
        style={{
          height: "64px",
          padding: "0 40px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Shop */}
        <div style={{ flex: 1 }}>
          <a
            href="#"
            style={{
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--ed-dark)",
              textDecoration: "none",
            }}
          >
            Shop
          </a>
        </div>

        {/* Center: Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/everydaydose/logo-black.webp"
            alt="Everyday Dose"
            width={120}
            height={24}
            style={{ height: "24px", width: "auto" }}
            priority
          />
        </a>

        {/* Right: Sign In + Bag */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <a
            href="#"
            style={{
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--ed-dark)",
              textDecoration: "none",
            }}
          >
            Sign In
          </a>
          <a href="#" aria-label="Shopping bag">
            <BagIcon />
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className="flex md:hidden"
        style={{
          height: "56px",
          padding: "0 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HamburgerIcon />
        </button>

        {/* Center: Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/everydaydose/logo-black.webp"
            alt="Everyday Dose"
            width={120}
            height={24}
            style={{ height: "24px", width: "auto" }}
            priority
          />
        </a>

        {/* Right: Bag */}
        <a href="#" aria-label="Shopping bag">
          <BagIcon />
        </a>
      </nav>
    </header>
  );
}
