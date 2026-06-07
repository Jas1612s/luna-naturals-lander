"use client";

import Image from "next/image";

export function QuizCTASection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: 500,
        background: "linear-gradient(180deg, var(--em-lavender-light) 0%, var(--em-grey-bg) 100%)",
        padding: "80px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative 3D element — top-right */}
      <Image
        src="/images/everymood/right1bakcgroundimage2.webp"
        alt=""
        width={300}
        height={300}
        aria-hidden
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 300,
          height: "auto",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Eyebrow */}
      <p
        style={{
          color: "var(--em-indigo)",
          fontSize: 14,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        Stop guessing. Start smelling like the vibe.
      </p>

      {/* Heading */}
      <h2
        style={{
          color: "#000",
          fontSize: 40,
          fontWeight: 400,
          lineHeight: "48px",
          letterSpacing: "-1.6px",
          maxWidth: 600,
          margin: 0,
        }}
      >
        Sweet? Sexy? Soft-girl? You decide.
      </h2>

      {/* Subtext */}
      <p
        style={{
          color: "#666",
          fontSize: 14,
          marginTop: 16,
        }}
      >
        Take our 60-second quiz &amp; meet your Everymood alter ego.
      </p>

      {/* CTA Button */}
      <a
        href="#"
        style={{
          display: "inline-block",
          background: "var(--em-indigo)",
          color: "#fff",
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 50,
          padding: "14px 32px",
          marginTop: 24,
          textDecoration: "none",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
        }}
      >
        Get My Scent Match
      </a>

      {/* Progress bar decoration */}
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <span style={{ color: "#999", fontSize: 12 }}>0% complete</span>
        <div
          style={{
            width: "100%",
            height: 4,
            background: "#E5E5E5",
            borderRadius: 2,
          }}
        />
      </div>
    </section>
  );
}
