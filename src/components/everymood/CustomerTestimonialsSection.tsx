"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote:
      "I've tried so many repellents, but these actually deliver. The wipes are perfect for travel, the bracelets are stylish, and the patches are foolproof.",
    author: "Megan D.",
  },
  {
    quote:
      "Our family uses these religiously. The kids love their patches, and we adults swear by the candles and spray. Finally, a brand that gets it right.",
    author: "Elle S.",
  },
  {
    quote:
      "As someone with sensitive skin, I'm picky about repellents. These DEET-free options are gentle but effective. The itch stick is now a first-aid-kit staple.",
    author: "Jenny D.",
  },
];

export function CustomerTestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "var(--em-indigo)",
      }}
    >
      <div
        className="em-testimonials-inner"
        style={{
          position: "relative",
          padding: "80px 40px",
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
      <h2
        style={{
          fontSize: 36,
          fontWeight: 500,
          color: "white",
          marginBottom: 48,
          letterSpacing: "-0.5px",
        }}
      >
        Customer Testimonials
      </h2>

      <div style={{ position: "relative", minHeight: 180 }}>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            style={{
              position: i === active ? "relative" : "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: i === active ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              pointerEvents: i === active ? "auto" : "none",
            }}
          >
            <p
              className="em-testimonials-quote"
              style={{
                fontSize: 24,
                lineHeight: 1.7,
                fontStyle: "italic",
                color: "white",
                margin: 0,
                letterSpacing: "-0.3px",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              — {t.author}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 32,
        }}
      >
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background:
                i === active
                  ? "white"
                  : "rgba(255,255,255,0.35)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
