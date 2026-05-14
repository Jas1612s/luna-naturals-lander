"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "cards",
    label: "Cards",
    badge: "Corporate Cards",
    heading: "Smart cards that pay you back.",
    desc: "Issue physical and virtual cards instantly. Set merchant-level controls, real-time limits, and category restrictions — all from one dashboard. Earn 1.5% cashback on every purchase.",
    bullets: [
      "Physical & virtual cards in seconds",
      "Merchant-level spend controls",
      "Real-time transaction alerts",
      "1.5% cashback on all spend",
      "No personal guarantee required",
    ],
    image: "/images/ramp/spend-visibility.webp",
  },
  {
    id: "expenses",
    label: "Expenses",
    badge: "Expense Management",
    heading: "Expenses that close themselves.",
    desc: "AI-powered receipt matching, instant reimbursements, and automatic categorization. Ramp eliminates 90% of manual expense work so your team can focus on what matters.",
    bullets: [
      "AI receipt capture & matching",
      "Instant employee reimbursements",
      "Automatic GL categorization",
      "Mileage & per diem tracking",
      "Policy enforcement at swipe",
    ],
    image: "/images/ramp/hero.webp",
  },
  {
    id: "ap",
    label: "Payables",
    badge: "Accounts Payable",
    heading: "AP automation, end to end.",
    desc: "From invoice intake to payment, Ramp automates every step. Build approval workflows, sync to your ERP, and pay vendors by ACH, check, or card — all in one place.",
    bullets: [
      "Invoice ingestion & OCR",
      "Multi-level approval workflows",
      "ERP sync with NetSuite, QuickBooks",
      "ACH, check, and card payments",
      "Duplicate & fraud detection",
    ],
    image: "/images/ramp/higher-limits.webp",
  },
  {
    id: "travel",
    label: "Travel",
    badge: "Travel",
    heading: "Business travel, on policy.",
    desc: "Book flights, hotels, and car rentals within your company's policy — automatically. Ramp Travel keeps every booking compliant without slowing your team down.",
    bullets: [
      "In-policy booking enforcement",
      "Integrated with expense reports",
      "Direct billing to company card",
      "24/7 travel support",
      "Real-time spend tracking",
    ],
    image: "/images/ramp/cta-card.webp",
  },
];

export function ControlSpendSection() {
  const [activeTab, setActiveTab] = useState("cards");
  const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section style={{ backgroundColor: "#F7F7F4" }} className="py-20 lg:py-28">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#FF6500",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            The platform
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#0F0F0F",
              maxWidth: "600px",
            }}
          >
            Everything your finance team needs, in one platform.
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
                backgroundColor: activeTab === t.id ? "#FF6500" : "#ffffff",
                color: activeTab === t.id ? "white" : "#3D3D3D",
                boxShadow: activeTab === t.id ? "0 2px 8px rgba(255,101,0,0.3)" : "none",
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
                backgroundColor: "rgba(255,101,0,0.08)",
                color: "#FF6500",
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
                color: "#0F0F0F",
                marginBottom: "16px",
              }}
            >
              {tab.heading}
            </h3>
            <p
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.65,
                color: "#595959",
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
                      background: "rgba(255,101,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#FF6500" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "14px", color: "#3D3D3D" }}>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FF6500",
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
              boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              border: "1px solid #E4E1DB",
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
