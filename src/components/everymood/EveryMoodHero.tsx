"use client";

import Image from "next/image";
import Link from "next/link";
import { ImagePlayer } from "@/components/ui/image-player";

const CAROUSEL_IMAGES = [
  "/images/everymood/hero-carousel-1.webp",
  "/images/everymood/hero-carousel-2.webp",
  "/images/everymood/hero-carousel-3.webp",
  "/images/everymood/hero-carousel-4.webp",
  "/images/everymood/hero-carousel-5.webp",
];

export function EveryMoodHero() {
  return (
    <section
      className="em-hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        minHeight: "600px",
        height: "calc(100vh - 120px)",
        overflow: "hidden",
        gap: "10px",
      }}
    >
      {/* Left column — photo carousel via ImagePlayer */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ImagePlayer
          images={CAROUSEL_IMAGES}
          interval={4000}
          renderImage={(src) => (
            <Image
              src={src}
              alt="Luna Naturals product showcase"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="50vw"
            />
          )}
        />

        {/* Text overlay */}
        <div
          className="em-hero-overlay"
          style={{
            position: "absolute",
            bottom: "80px",
            left: "40px",
            zIndex: 1,
            maxWidth: "500px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "42px",
              letterSpacing: "-1.28px",
              margin: 0,
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            Premium self-care essentials that move the moment.
          </p>

          <Link
            href="#"
            style={{
              display: "inline-block",
              marginTop: "16px",
              backgroundColor: "white",
              color: "black",
              fontSize: "16px",
              fontWeight: 500,
              borderRadius: "50px",
              padding: "12px 32px",
              border: "2px solid white",
              textDecoration: "none",
              textTransform: "capitalize" as const,
            }}
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Right column — hero video */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/videos/everymood/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
