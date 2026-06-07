"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "invoice",
    label: "Invoice Finance",
    badge: "Invoice Financing",
    heading: "Get paid on your invoices today — not in 60 days.",
    desc: "Submit your outstanding customer invoices and receive up to 90% of their value within 24 hours. Stop letting net-60 terms strangle your cash flow while you wait to restock and reorder.",
    bullets: [
      "Up to 90% advance on eligible invoices",
      "Funded within 24 business hours",
      "Works with any B2B or marketplace invoice",
      "No equity, no personal guarantee",
      "Repay automatically when your customer pays",
    ],
    image: "/images/ramp/tab-invoice.webp",
  },
  {
    id: "po",
    label: "PO Financing",
    badge: "Purchase Order Finance",
    heading: "Win large orders without the capital to fill them.",
    desc: "Have a big purchase order from a retailer or distributor but not enough cash to fulfil it? Ramp finances your supplier payments so you can take on orders that would otherwise be out of reach.",
    bullets: [
      "Finance up to 100% of your supplier invoice",
      "Accept orders larger than your cash on hand",
      "Pay your manufacturer on time, every time",
      "Ideal for Shopify, Amazon, and wholesale brands",
      "Fast decisions — no months-long underwriting",
    ],
    image: "/images/ramp/tab-po.webp",
  },
  {
    id: "inventory",
    label: "Inventory Finance",
    badge: "Inventory Financing",
    heading: "Never miss a restock because of a cash gap.",
    desc: "Use your existing inventory as collateral to unlock a revolving credit facility. Buy stock before peak season, take advantage of bulk discounts, and keep your bestsellers in stock without draining cash reserves.",
    bullets: [
      "Revolving facility — draw down when needed",
      "Stock used as collateral, not your home",
      "Ideal for seasonal and high-velocity SKUs",
      "Integrates with Shopify & warehouse data",
      "Lines from $100K to $20M",
    ],
    image: "/images/ramp/tab-inventory.webp",
  },
  {
    id: "loc",
    label: "Credit Line",
    badge: "Flexible Credit Line",
    heading: "A credit line that grows with your brand.",
    desc: "Get a flexible revolving credit facility sized to your revenue. Draw down for ad spend, payroll, returns reserves, or any operational need — and repay as cash comes in from sales.",
    bullets: [
      "Revolving line from $100K to $20M",
      "Sized to your monthly revenue",
      "Use for ads, ops, payroll, or inventory",
      "No fixed repayment schedule",
      "Limit increases automatically as you grow",
    ],
    image: "/images/ramp/tab-credit.webp",
  },
];

export function ControlSpendSection() {
  const [activeTab, setActiveTab] = useState("cards");
  const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section style={{ backgroundColor: "#111111" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#00B248",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            Funding products
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.05em",
              color: "#ffffff",
              maxWidth: "640px",
            }}
          >
            Every type of e-commerce financing — in one platform.
          </h2>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s",
                backgroundColor: activeTab === t.id ? "#00B248" : "#1a1a1a",
                color: activeTab === t.id ? "white" : "rgba(255,255,255,0.6)",
                boxShadow: activeTab === t.id ? "0 2px 8px rgba(0,178,72,0.3)" : "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "48px", alignItems: "center" }}
        >
          {/* Left: text */}
          <div>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(0,178,72,0.08)",
                color: "#00B248",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 12px",
                borderRadius: "9999px",
                marginBottom: "16px",
              }}
            >
              {tab.badge}
            </span>
            <h3
              style={{
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              {tab.heading}
            </h3>
            <p
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "28px",
                maxWidth: "460px",
              }}
            >
              {tab.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {tab.bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(0,178,72,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#00B248" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#00B248",
                color: "white",
                borderRadius: "9999px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: screenshot */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src={tab.image}
              alt={tab.badge}
              width={1200}
              height={800}
              className="w-full"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
