"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function RampNav() {
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E4E1DB",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#FF6500" />
            <path
              d="M8 20V8h7.2c1.4 0 2.5.4 3.3 1.1.8.7 1.2 1.7 1.2 2.9 0 .9-.2 1.7-.7 2.3-.4.6-1 1.1-1.8 1.4l3 4.3h-3.1L14.5 16H10.8v4H8zm2.8-6.5h4.1c.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5h-4.1v3.8z"
              fill="white"
            />
          </svg>
          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#0F0F0F",
              letterSpacing: "-0.02em",
              fontFamily: "inherit",
            }}
          >
            ramp
          </span>
        </a>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Sign in — hidden on mobile */}
          <a
            href="/signin"
            className="hidden sm:block"
            style={{
              fontSize: "13px",
              color: "#595959",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Sign in
          </a>

          {/* Email form — hidden on mobile, visible lg: */}
          <form
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "8px" }}
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit
            }}
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
                padding: "8px 20px",
                fontSize: "14px",
                width: "200px",
                color: "#0F0F0F",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#FF6500",
                color: "white",
                borderRadius: "9999px",
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Get started for free
            </button>
          </form>

          {/* Mobile CTA — visible only below lg */}
          <a
            href="/signup"
            className="lg:hidden"
            style={{
              background: "#FF6500",
              color: "white",
              borderRadius: "9999px",
              padding: "8px 20px",
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
