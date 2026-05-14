"use client";

import { useState } from "react";
import Image from "next/image";

function StarRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF6500" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.79l-3.09 1.665L4.5 7.045 2 4.635l3.455-.545L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="rgba(255,255,255,0.25)" />
      <path d="M13 10.5L22 16L13 21.5V10.5Z" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

export function RampHero() {
  const [email, setEmail] = useState("");

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #07090F 0%, #0E1422 60%, #131928 100%)",
        paddingTop: "64px", // nav height offset
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px 64px",
        }}
      >
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "48px", alignItems: "center" }}
        >
          {/* Left — text */}
          <div>
            {/* Social proof */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <StarRow />
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                2,000+ 5-star reviews · #1 on G2
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(38px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Finance that works{" "}
              <span style={{ color: "#FF6500" }}>as hard as you do.</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "500px",
                marginBottom: "36px",
              }}
            >
              Ramp brings together corporate cards, expense management, accounts
              payable, travel, procurement, and accounting automation — helping
              companies save 3.3% on average.
            </p>

            {/* CTA form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ marginBottom: "20px" }}
            >
              <div
                className="flex flex-col sm:flex-row"
                style={{ gap: "12px", maxWidth: "480px" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "9999px",
                    padding: "14px 22px",
                    fontSize: "14px",
                    color: "white",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#FF6500"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#FF6500",
                    color: "white",
                    borderRadius: "9999px",
                    padding: "14px 28px",
                    fontSize: "14px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  Get started for free
                </button>
              </div>
            </form>

            {/* Book demo */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                marginBottom: "48px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
            >
              <PlayIcon />
              Watch a product demo
            </button>

            {/* Trust stat pills */}
            <div
              className="flex flex-wrap"
              style={{ gap: "12px" }}
            >
              {[
                { value: "50,000+", label: "businesses" },
                { value: "27.5M+", label: "hours saved" },
                { value: "3.3%", label: "avg savings" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "10px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "white",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div
            className="hidden lg:block"
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Glow behind image */}
            <div
              style={{
                position: "absolute",
                inset: "-40px",
                background: "radial-gradient(ellipse at 50% 50%, rgba(255,101,0,0.15) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <Image
                src="/images/ramp/hero.webp"
                alt="Ramp spend management dashboard"
                width={1200}
                height={800}
                className="w-full"
                priority
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
