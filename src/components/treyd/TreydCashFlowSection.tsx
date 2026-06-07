"use client";

import { useEffect, useRef, useState } from "react";

export function TreydCashFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const greyPathRef = useRef<SVGPathElement>(null);
  const purplePathRef = useRef<SVGPathElement>(null);
  const [animated, setAnimated] = useState(false);
  const [greyLen, setGreyLen] = useState(700);
  const [purpleLen, setPurpleLen] = useState(900);

  // Respect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (greyPathRef.current) setGreyLen(greyPathRef.current.getTotalLength());
    if (purplePathRef.current) setPurpleLen(purplePathRef.current.getTotalLength());
    // If reduced motion, show immediately without animation
    if (prefersReduced) setAnimated(true);
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  const greyPath =
    "M 60,178 C 82,178 92,220 118,214 C 140,209 154,140 175,147 C 196,154 204,220 232,214 C 252,209 265,146 287,152 C 306,158 318,188 340,178 C 349,173 357,140 370,134";

  const purplePath =
    "M 370,134 C 396,128 420,150 450,143 C 484,134 512,104 550,96 C 596,86 628,110 670,100 C 718,88 750,114 802,94 C 852,76 882,100 926,82 C 958,68 978,57 1010,50";

  const gridCount = 17;
  const gridStartX = 60;
  const gridSpacingX = 56;

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#111111",
        borderRadius: "32px 32px 0 0",
        marginTop: "-32px",
        position: "relative",
        zIndex: 1,
        padding: "88px 24px 88px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 54px)",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "64px",
          }}
        >
          The growth tax nobody talks about.
        </h2>

        {/* Chart */}
        <div style={{ marginBottom: "60px", overflow: "visible" }}>
          <svg
            viewBox="0 0 1010 280"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "auto", overflow: "visible", display: "block" }}
            aria-hidden="true"
          >
            {Array.from({ length: gridCount }).map((_, i) => (
              <line
                key={i}
                x1={gridStartX + i * gridSpacingX}
                y1={40}
                x2={gridStartX + i * gridSpacingX}
                y2={230}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
                strokeDasharray="3 7"
              />
            ))}

            <line
              x1="40"
              y1="178"
              x2="1010"
              y2="178"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />

            <path
              ref={greyPathRef}
              d={greyPath}
              fill="none"
              stroke="#555555"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: greyLen,
                strokeDashoffset: animated ? 0 : greyLen,
                transition: prefersReduced ? "none" : (animated ? "stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1) 0s" : "none"),
              }}
            />

            <path
              ref={purplePathRef}
              d={purplePath}
              fill="none"
              stroke="#006B2E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: purpleLen,
                strokeDashoffset: animated ? 0 : purpleLen,
                transition: prefersReduced ? "none" : (animated ? "stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1) 1.4s" : "none"),
              }}
            />

            <circle
              cx="370"
              cy="134"
              r="8"
              fill="#ffffff"
              style={{
                opacity: animated ? 1 : 0,
                transition: prefersReduced ? "none" : (animated ? "opacity 0.4s ease 1.3s" : "none"),
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,255,255,0.4))",
              }}
            />
            <circle
              cx="370"
              cy="134"
              r="3"
              fill="#111111"
              style={{
                opacity: animated ? 1 : 0,
                transition: prefersReduced ? "none" : (animated ? "opacity 0.4s ease 1.3s" : "none"),
              }}
            />
          </svg>
        </div>

        {/* Body — 3 paragraphs with deliberate contrast hierarchy */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto 44px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(16px, 1.3vw, 19px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
            }}
          >
            Costs come first. Cash gets stuck in inventory, suppliers, and shipping long before a single sale lands. You&apos;re not short on demand — you&apos;re short on timing.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
            }}
          >
            That gap kills momentum. You skip the Q4 stock order. You pass on the bulk discount. You watch a competitor take the deal.
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 1.3vw, 19px)",
              lineHeight: 1.4,
              color: "#ffffff",
              textAlign: "center",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Treyd closes the gap.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "12px 22px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#222222";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A1A1A";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            See how it works
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
