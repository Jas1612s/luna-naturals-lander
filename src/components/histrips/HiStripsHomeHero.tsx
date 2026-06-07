"use client";

import { useRef, useEffect } from "react";

export function HiStripsHomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section style={{ padding: 0, background: "#1E2110", overflow: "hidden" }}>
      <div
        style={{
          width: "100%",
          height: "70vh",
          minHeight: "400px",
          maxHeight: "700px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
          }}
        >
          <source src="/videos/luna-hero.mp4" type="video/mp4" />
        </video>

        {/* Bottom-left tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Say Goodbye<br />to Bug Bites
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 1px 10px rgba(0,0,0,0.3)",
            }}
          >
            Plant-powered protection for the whole family.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              padding: "12px 28px",
              background: "#2A2E16",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "999px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
