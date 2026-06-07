"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Story,
  StoryProgress,
  StoryControls,
  StorySlide,
  StoryOverlay,
} from "@/components/ui/story";

const PILLARS = [
  {
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% DEET-Free",
    description:
      "No harsh chemicals, no toxins. Our plant-based formulas use lemon eucalyptus, citronella, and cedarwood oils to keep bugs away naturally.",
    stories: [
      {
        title: "Plant-Powered Protection",
        caption: "Lemon eucalyptus oil proven as effective as 15% DEET in clinical studies.",
        image: "https://images.unsplash.com/photo-1501004318855-e73702b6ce97?w=800&h=1200&fit=crop",
      },
      {
        title: "Safe for the Whole Family",
        caption: "No synthetic chemicals means no worries — use it on kids, pets, and sensitive areas.",
        image: "https://images.unsplash.com/photo-1475483768296-6163e8810055?w=800&h=1200&fit=crop",
      },
    ],
  },
  {
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Gentle on Skin",
    description:
      "Formulated for sensitive skin — even for kids. No greasy residue, no stinging, just clean and effective protection you can trust.",
    stories: [
      {
        title: "Dermatologist Tested",
        caption: "Hypoallergenic formulas tested on even the most sensitive skin types.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1200&fit=crop",
      },
      {
        title: "No Greasy Residue",
        caption: "Lightweight, fast-absorbing formulas that feel like nothing on your skin.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
      },
    ],
  },
  {
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l1-1h3l9-9" />
        <path d="M3 21v-3l9-9" />
        <circle cx={18} cy={6} r={3} />
      </svg>
    ),
    title: "Eco-First Design",
    description:
      "Sustainable packaging, cruelty-free testing, and biodegradable ingredients. Protect yourself without harming the planet.",
    stories: [
      {
        title: "Sustainable Packaging",
        caption: "Recyclable materials, minimal plastic, and biodegradable formulas.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=1200&fit=crop",
      },
      {
        title: "Cruelty-Free Always",
        caption: "Never tested on animals. Certified cruelty-free by Leaping Bunny.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop",
      },
    ],
  },
];

export function WhyLunaSection() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "var(--em-grey-bg)",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <h2
        className="em-pillars-title"
        style={{
          fontSize: 36,
          fontWeight: 600,
          fontStyle: "italic",
          color: "var(--em-indigo)",
          lineHeight: 1.2,
          letterSpacing: "-1px",
          margin: "0 auto 60px",
          maxWidth: 500,
        }}
      >
        Thoughtfully designed for the outdoors.
      </h2>

      <div
        className="em-pillars-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {PILLARS.map((pillar, idx) => (
          <div
            key={pillar.title}
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => setActiveStory(idx)}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "var(--em-indigo)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                border: activeStory === idx ? "3px solid var(--em-lime)" : "3px solid transparent",
                transition: "border-color 0.2s",
              }}
            >
              {pillar.icon}
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--em-black)",
                margin: "0 0 10px",
              }}
            >
              {pillar.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--em-text-muted)",
                margin: 0,
                maxWidth: 320,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Story panel */}
      {activeStory !== null && (
        <div
          style={{
            maxWidth: 400,
            margin: "48px auto 0",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "9 / 16",
            backgroundColor: "#000",
          }}
        >
          <Story
            className="relative size-full"
            duration={5000}
            mediaLength={PILLARS[activeStory].stories.length}
          >
            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "var(--em-indigo)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {PILLARS[activeStory].icon}
              </div>
              <StoryProgress
                className="flex-1"
                progressWrapClass="h-1.5"
                progressActiveClass="bg-green-400"
              />
              <StoryControls className="text-white" />
            </div>

            {PILLARS[activeStory].stories.map((story, idx) => (
              <StorySlide
                key={idx}
                index={idx}
                className="absolute inset-0 size-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.image}
                  className="w-full h-full object-cover"
                  alt={story.title}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 16,
                    right: 16,
                    zIndex: 10,
                    color: "white",
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                    {story.title}
                  </h3>
                  <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.5 }}>
                    {story.caption}
                  </p>
                </div>
              </StorySlide>
            ))}
            <StoryOverlay />
          </Story>

          <button
            onClick={() => setActiveStory(null)}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 20,
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "white",
              width: 28,
              height: 28,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}

      <Link
        href="#"
        style={{
          display: "inline-block",
          marginTop: 48,
          backgroundColor: "var(--em-indigo)",
          color: "white",
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 50,
          padding: "14px 32px",
          textDecoration: "none",
        }}
      >
        Learn more
      </Link>
    </section>
  );
}
