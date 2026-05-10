"use client";

import { useState } from "react";
import Image from "next/image";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#FF6500" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.79l-3.09 1.665L4.5 7.045 2 4.635l3.455-.545L7 1z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: "rgba(255,101,0,0.1)",
        flexShrink: 0,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 4.5L3.5 6.5L7.5 2.5"
          stroke="#FF6500"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const checkItems = ["5% savings", "No personal credit checks", "Global acceptance"];

export function RampHero() {
  const [email, setEmail] = useState("");

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          paddingTop: "96px",
          paddingBottom: "80px",
        }}
        className="lg:py-28"
      >
        <div
          className="grid lg:grid-cols-2 lg:gap-20"
          style={{ alignItems: "center" }}
        >
          {/* Left column — text */}
          <div>
            {/* Social proof badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span style={{ fontSize: "13px", color: "#595959" }}>
                2,000+ 5-star reviews · 5 stars on G2
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "#0F0F0F",
                marginBottom: "20px",
              }}
            >
              Business cards that provide spend visibility and control.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(16px, 1.3vw, 20px)",
                lineHeight: 1.55,
                color: "#595959",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              With accounting integrations that will make you love your ERP again.
            </p>

            {/* Email form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "24px",
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
                  maxWidth: "320px",
                  width: "100%",
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

            {/* Checkmarks row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {checkItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <CheckIcon />
                  <span style={{ fontSize: "13px", color: "#595959" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image */}
          <div style={{ paddingBottom: "32px" }}>
            <Image
              src="/images/ramp/hero.webp"
              alt="Ramp business cards dashboard"
              width={1920}
              height={1080}
              className="w-full rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
