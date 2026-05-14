"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      style={{
        backgroundColor: "#F7F7F4",
        borderTop: "1px solid #E4E1DB",
        borderBottom: "1px solid #E4E1DB",
      }}
      className="py-16"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "640px" }}>
        {/* Label */}
        <p
          style={{
            fontSize: "11px",
            color: "#FF6500",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          Finance leadership
        </p>

        {/* Heading */}
        <h3
          style={{
            fontSize: "clamp(22px, 2.5vw, 34px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0F0F0F",
            marginBottom: "12px",
          }}
        >
          Stay sharp with the Ramp finance newsletter.
        </h3>

        {/* Body */}
        <p
          style={{
            fontSize: "15px",
            color: "#595959",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          Join 30,000+ finance leaders who get weekly insights on spend management, accounting
          automation, and the future of finance.
        </p>

        {/* Success state */}
        {submitted ? (
          <div className="flex items-center gap-2" style={{ marginTop: "8px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(22,163,74,0.1)",
                color: "#16a34a",
                border: "1px solid rgba(22,163,74,0.2)",
                borderRadius: "9999px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5L6 11.5L13 4.5"
                  stroke="#16a34a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              You&apos;re subscribed!
            </span>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1,
                border: "1px solid #E4E1DB",
                backgroundColor: "white",
                borderRadius: "9999px",
                padding: "12px 20px",
                fontSize: "14px",
                color: "#0F0F0F",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#FF6500",
                color: "white",
                borderRadius: "9999px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              className="transition-opacity hover:opacity-85"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
