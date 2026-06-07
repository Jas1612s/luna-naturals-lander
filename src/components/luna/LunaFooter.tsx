'use client';

import { useState } from "react";
import Image from "next/image";

const productLinks = ["Sprays", "Patches", "Bracelets", "Wipes", "Candles"];
const companyLinks = ["Our Story", "Catalog", "Contact", "Blog"];

export function LunaFooter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      {/* Newsletter strip */}
      <div
        style={{
          background: "#ffecdc",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#2a2e16",
            marginBottom: 8,
          }}
        >
          Stay Adventure-Ready
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#666",
            maxWidth: 420,
            margin: "0 auto 24px",
          }}
        >
          Get exclusive deals, new arrivals, and outdoor tips delivered to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            maxWidth: 400,
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              height: 48,
              padding: "0 16px",
              border: "1.5px solid #ddd",
              borderRadius: "999px 0 0 999px",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#f26a3e",
              color: "white",
              padding: "0 24px",
              borderRadius: "0 999px 999px 0",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              height: 48,
              whiteSpace: "nowrap",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Main footer */}
      <footer
        style={{
          background: "#2a2e16",
          color: "rgba(255,255,255,0.7)",
          padding: "48px 20px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Top row: logo + columns */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 48,
              marginBottom: 40,
            }}
          >
            {/* Brand */}
            <div>
              <Image
                src="/images/luna/logo.webp"
                width={120}
                height={36}
                alt="LunaNaturals"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 6,
                }}
              >
                Adventure-Ready Protection
              </p>
            </div>

            {/* Products column */}
            <div>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                Products
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {productLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 20,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: 13, margin: 0, color: "rgba(255,255,255,0.5)" }}>
              &copy; 2025 LunaNaturals. All rights reserved.
            </p>
            <a
              href="mailto:support@lunanaturals.co"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              support@lunanaturals.co
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
