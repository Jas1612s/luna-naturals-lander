"use client";

import { useState, useEffect, useRef } from "react";

function TreydLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      <path d="M8 10h10M13 10v12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navLinks = [
  { label: "Who we fund", hasDropdown: true },
  { label: "Solution", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Partners", hasDropdown: true },
  { label: "Customers", hasDropdown: false },
];

export function TreydNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#0A0A0A",
          borderBottom: scrolled || mobileOpen ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.6)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <a
            href="/treyd"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}
          >
            <TreydLogo />
            <span
              style={{
                fontWeight: 700,
                fontSize: "20px",
                color: "#ffffff",
                letterSpacing: "-0.03em",
                fontFamily: "var(--font-treyd), Inter, sans-serif",
              }}
            >
              Treyd
            </span>
          </a>

          {/* Center nav — desktop only */}
          <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "2px", flex: 1 }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 14px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  background: "none",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.15s, color 0.15s",
                  fontFamily: "var(--font-treyd), Inter, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown />}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {/* Log in — hidden on small mobile */}
            <a
              href="#"
              className="hidden sm:block"
              style={{
                padding: "8px 16px",
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "background-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Log in
            </a>

            {/* Get funded CTA */}
            <a
              href="/treyd/apply"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#006B2E",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Get funded
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "44px",
                height: "44px",
                background: "none",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "0",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                  transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                  opacity: mobileOpen ? 0 : 1,
                  transition: "opacity 0.15s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                  transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: "#0A0A0A",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            overflowY: "auto",
            padding: "16px 24px 40px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "16px 0",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-treyd), Inter, sans-serif",
                }}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>
            ))}

            {/* Mobile CTA block */}
            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="/treyd/apply"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#006B2E",
                  color: "#ffffff",
                  borderRadius: "10px",
                  padding: "16px 24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Get your limit
              </a>
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.75)",
                  borderRadius: "10px",
                  padding: "15px 24px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Log in
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
