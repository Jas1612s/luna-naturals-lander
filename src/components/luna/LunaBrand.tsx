'use client';

import Image from "next/image";

interface TrustItem {
  image: string;
  title: string;
  desc: string;
}

const trustItems: TrustItem[] = [
  {
    image: "/images/luna/badge-lab.webp",
    title: "Lab-Tested, Adventure-Approved",
    desc: "Clinically validated efficacy you can trust in the wild.",
  },
  {
    image: "/images/luna/badge-deet.webp",
    title: "DEET-Free, Safe for Everyone",
    desc: "Gentle on skin, tough on bugs. Safe for kids and families.",
  },
  {
    image: "/images/luna/badge-natural.webp",
    title: "All-Natural Ingredients",
    desc: "Essential oils and botanicals—no harsh chemicals.",
  },
  {
    image: "/images/luna/badge-eco.webp",
    title: "Eco-Friendly & Effective",
    desc: "Sustainable formulas that are kind to the planet.",
  },
];

export function LunaBrand() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .luna-brand-inner {
            flex-direction: column !important;
          }
        }
      `}</style>
      <section
        style={{
          background: "#fff",
          padding: "80px 20px",
          fontFamily: "var(--font-jost)",
        }}
      >
        <div
          className="luna-brand-inner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: "80px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: text content */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#f26a3e",
                marginBottom: "16px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              OUR STORY
            </p>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#2a2e16",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: "24px",
              }}
            >
              Born to Outsmart Nature&apos;s Annoyances
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "#444",
                marginBottom: "32px",
              }}
            >
              We started with a simple idea: bug repellent shouldn&apos;t ruin
              the moment. Frustrated by sticky sprays, ugly bracelets, and harsh
              chemicals, we set out to create gear that works with your life,
              not against it. Whether you&apos;re conquering trails, chilling at
              a bonfire, or just trying to enjoy your balcony without becoming a
              mosquito&apos;s snack, we&apos;re here to make protection
              effortless, effective, and even a little fun.
            </p>
            <a
              href="/luna/story"
              style={{
                color: "#f26a3e",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                  "underline")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                  "none")
              }
            >
              Learn Our Story →
            </a>
          </div>

          {/* Right: 2×2 trust badge grid */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {trustItems.map((item) => (
              <div key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  style={{ marginBottom: "12px", objectFit: "contain" }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#2a2e16",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.5,
                    marginTop: "4px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
