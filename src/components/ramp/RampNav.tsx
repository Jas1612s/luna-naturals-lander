"use client";

import { useState, useEffect, useRef } from "react";

function RampLogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#FF6500" />
      <path
        d="M8 20V8h7.2c1.4 0 2.5.4 3.3 1.1.8.7 1.2 1.7 1.2 2.9 0 .9-.2 1.7-.7 2.3-.4.6-1 1.1-1.8 1.4l3 4.3h-3.1L14.5 16H10.8v4H8zm2.8-6.5h4.1c.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5h-4.1v3.8z"
        fill="white"
      />
    </svg>
  );
}

function ChevronDown({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const productsMenu = [
  { label: "Corporate Cards", desc: "Smart cards with real-time controls", icon: "💳" },
  { label: "Expense Management", desc: "Receipt capture & reimbursements", icon: "📋" },
  { label: "Accounts Payable", desc: "Automated bill pay & approval", icon: "📑" },
  { label: "Travel", desc: "Policy-compliant booking", icon: "✈️" },
  { label: "Procurement", desc: "Intake to purchase order", icon: "🛒" },
  { label: "Intelligence", desc: "AI-powered savings insights", icon: "✨" },
  { label: "Accounting", desc: "ERP sync & close automation", icon: "📊" },
  { label: "Treasury", desc: "FDIC-insured business banking", icon: "🏦" },
];

const solutionsMenu = [
  { label: "Startups", desc: "Scale faster with less overhead" },
  { label: "SMBs", desc: "Professional finance for growing teams" },
  { label: "Enterprise", desc: "Global scale with deep controls" },
  { label: "Finance Teams", desc: "Close faster, report smarter" },
];

export function RampNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E4E1DB",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <a
          href="/ramp"
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}
        >
          <RampLogoIcon />
          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#0F0F0F",
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            }}
          >
            ramp
          </span>
        </a>

        {/* Center nav */}
        <nav
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "4px", flex: 1 }}
        >
          {/* Products dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => setOpenMenu("products")}
              onMouseLeave={() => setOpenMenu(null)}
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: 500,
                color: openMenu === "products" ? "#0F0F0F" : "#3D3D3D",
                background: "none",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: openMenu === "products" ? "#F7F7F4" : "transparent",
                transition: "background-color 0.15s",
              }}
            >
              Products <ChevronDown />
            </button>
            {openMenu === "products" && (
              <div
                onMouseEnter={() => setOpenMenu("products")}
                onMouseLeave={() => setOpenMenu(null)}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #E4E1DB",
                  borderRadius: "16px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: "12px",
                  minWidth: "260px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4px",
                  zIndex: 200,
                }}
              >
                {productsMenu.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      transition: "background-color 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F4"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0F0F0F", marginBottom: "2px" }}>{item.label}</div>
                      <div style={{ fontSize: "12px", color: "#8A8A8A", lineHeight: 1.3 }}>{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
              onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: 500,
                color: openMenu === "solutions" ? "#0F0F0F" : "#3D3D3D",
                background: "none",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: openMenu === "solutions" ? "#F7F7F4" : "transparent",
                transition: "background-color 0.15s",
              }}
            >
              Solutions <ChevronDown />
            </button>
            {openMenu === "solutions" && (
              <div
                onMouseEnter={() => setOpenMenu("solutions")}
                onMouseLeave={() => setOpenMenu(null)}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #E4E1DB",
                  borderRadius: "16px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: "8px",
                  minWidth: "220px",
                  zIndex: 200,
                }}
              >
                {solutionsMenu.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    style={{
                      display: "block",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      transition: "background-color 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F4"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#0F0F0F", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "#8A8A8A" }}>{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {["Customers", "Pricing", "Company"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#3D3D3D",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "background-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F4";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0F0F0F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#3D3D3D";
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <a
            href="#"
            className="hidden sm:block"
            style={{
              padding: "8px 14px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#3D3D3D",
              textDecoration: "none",
              borderRadius: "9999px",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
          >
            Log in
          </a>
          <form
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "8px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              style={{
                border: "1px solid #E4E1DB",
                background: "#F7F7F4",
                borderRadius: "9999px",
                padding: "9px 18px",
                fontSize: "13px",
                width: "200px",
                color: "#0F0F0F",
                outline: "none",
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#FF6500"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#E4E1DB"; }}
            />
            <button
              type="submit"
              style={{
                background: "#FF6500",
                color: "white",
                borderRadius: "9999px",
                padding: "9px 20px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Get started
            </button>
          </form>
          {/* Mobile CTA */}
          <a
            href="#"
            className="lg:hidden"
            style={{
              background: "#FF6500",
              color: "white",
              borderRadius: "9999px",
              padding: "9px 18px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
