"use client";

import { useState, useEffect, useRef } from "react";

function RampLogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#00B248" />
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

function NavSvgIcon({ path, path2 }: { path: string; path2?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
      {path2 && <path d={path2} />}
    </svg>
  );
}

const productsMenu = [
  { label: "Corporate Cards", desc: "Smart cards with real-time controls", iconPath: "M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z", iconPath2: "M2 11h20" },
  { label: "Expense Management", desc: "Receipt capture & reimbursements", iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { label: "Accounts Payable", desc: "Automated bill pay & approval", iconPath: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", iconPath2: "M14 2v6h6M9 13h6M9 17h4" },
  { label: "Travel", desc: "Policy-compliant booking", iconPath: "M22 16.5a4 4 0 01-4 4H6a4 4 0 01-4-4V9a4 4 0 014-4l4 3h4l3-3a4 4 0 014 4v7.5z" },
  { label: "Procurement", desc: "Intake to purchase order", iconPath: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z", iconPath2: "M3 6h18M16 10a4 4 0 01-8 0" },
  { label: "Intelligence", desc: "AI-powered savings insights", iconPath: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" },
  { label: "Accounting", desc: "ERP sync & close automation", iconPath: "M18 20V10M12 20V4M6 20v-6" },
  { label: "Treasury", desc: "FDIC-insured business banking", iconPath: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", iconPath2: "M9 22V12h6v10" },
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
        backgroundColor: "#07090F",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.4)" : "none",
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
              color: "#ffffff",
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-ramp), Inter, sans-serif",
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
                color: openMenu === "products" ? "#ffffff" : "rgba(255,255,255,0.7)",
                background: "none",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: openMenu === "products" ? "rgba(255,255,255,0.08)" : "transparent",
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
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
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
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    <span style={{ color: "#00B248", flexShrink: 0, marginTop: "1px" }}>
                      <NavSvgIcon path={item.iconPath} path2={item.iconPath2} />
                    </span>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff", marginBottom: "2px" }}>{item.label}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.3 }}>{item.desc}</div>
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
                color: openMenu === "solutions" ? "#ffffff" : "rgba(255,255,255,0.7)",
                background: "none",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: openMenu === "solutions" ? "rgba(255,255,255,0.08)" : "transparent",
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
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
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
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{item.desc}</div>
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
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "background-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
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
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              borderRadius: "9999px",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
          >
            Log in
          </a>
          <a
            href="/ramp/pre-qualification"
            className="hidden lg:inline-flex"
            style={{
              background: "#00B248",
              color: "white",
              borderRadius: "9999px",
              padding: "9px 20px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Check my eligibility
          </a>
          {/* Mobile CTA */}
          <a
            href="/ramp/pre-qualification"
            className="lg:hidden"
            style={{
              background: "#00B248",
              color: "white",
              borderRadius: "9999px",
              padding: "9px 18px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Check my eligibility
          </a>
        </div>
      </div>
    </header>
  );
}
