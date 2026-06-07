"use client";

import Link from "next/link";

export function BugOffBundleSection() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 40px",
      }}
    >
      <div
        className="em-bundle-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          backgroundColor: "var(--em-grey-bg)",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {/* Left — product image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 3",
            backgroundColor: "#e8e8e6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 400,
          }}
        >
          <img
            src="/images/everymood/bug-off-bundle.webp"
            alt="Luna Naturals Bug Off Bundle — Itch Relief Stick, Bug & Tick Repellent Sprays, and Bug Bite Relief Patches"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        {/* Right — product info */}
        <div
          className="em-bundle-info"
          style={{
            padding: "60px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "fit-content",
              backgroundColor: "var(--em-indigo)",
              color: "white",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              padding: "4px 14px",
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            New
          </span>

          <h2
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "var(--em-black)",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Bug Off Bundle
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--em-text-muted)",
              marginTop: 12,
              maxWidth: 400,
            }}
          >
            Everything you need to stay bite-free outdoors. Includes our
            best-selling Bug Bite Relief Patches, Itch Relief Stick, and Bug &
            Tick Repellent Spray — all in one convenient bundle.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginTop: 20,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "var(--em-black)",
              }}
            >
              $49.99
            </span>
            <span
              style={{
                fontSize: 18,
                color: "var(--em-text-muted)",
                textDecoration: "line-through",
              }}
            >
              $72.00
            </span>
          </div>

          <Link
            href="#"
            style={{
              display: "inline-block",
              width: "fit-content",
              marginTop: 24,
              backgroundColor: "var(--em-indigo)",
              color: "white",
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              borderRadius: 50,
              padding: "14px 32px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
