"use client";

import { useState } from "react";

export function DemoCTA() {
  const [email, setEmail] = useState("");

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0A0F1E 0%, #1a1f35 100%)",
      }}
      className="py-20 lg:py-28"
    >
      <div
        className="mx-auto px-6 text-center"
        style={{ maxWidth: "800px" }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "11px",
            color: "#FF6500",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          Ready to start?
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: "white",
            marginBottom: "20px",
            fontFamily: "var(--font-plus-jakarta-sans)",
          }}
        >
          Get started today.
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontSize: "clamp(16px, 1.2vw, 18px)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "520px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Join 25,000+ businesses that use Ramp to save time and money. No personal credit check. No
          hidden fees.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 mx-auto mb-8"
          style={{ maxWidth: "420px" }}
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
              padding: "14px 20px",
              fontSize: "14px",
              color: "white",
              outline: "none",
            }}
            className="placeholder:text-[rgba(255,255,255,0.4)]"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#FF6500",
              color: "white",
              borderRadius: "9999px",
              padding: "14px 24px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            className="transition-opacity hover:opacity-90"
          >
            Get started for free
          </button>
        </form>

        {/* Watch demo link */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <button
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.45)",
              fontSize: "14px",
            }}
            className="transition-opacity hover:opacity-70"
          >
            {/* Play button circle icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="14" cy="14" r="13.5" stroke="rgba(255,255,255,0.2)" />
              <path
                d="M11.5 10.5L19 14L11.5 17.5V10.5Z"
                fill="rgba(255,255,255,0.45)"
              />
            </svg>
            Watch demo · See Ramp in action
          </button>
        </div>

        {/* 2-minute tour pill */}
        <div className="flex justify-center">
          <a
            href="#"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              borderRadius: "9999px",
              padding: "10px 20px",
              fontSize: "14px",
              textDecoration: "none",
            }}
            className="transition-opacity hover:opacity-70"
          >
            Take the 2-minute tour
          </a>
        </div>
      </div>
    </section>
  );
}
