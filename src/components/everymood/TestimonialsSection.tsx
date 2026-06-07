"use client";

import { useRef } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  stars: number;
  photo: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jenny E.",
    stars: 4,
    photo: "/images/everymood/WhatsApp_Image_2025-10-27_at_5.18.27_PM-2.webp",
    review:
      "I\u2019ve used a lot of mists before, but nothing compares to the Sun Drunk mist. It\u2019s so refreshing, and the scent is like a hug. I feel instantly more awake and energized, and my skin feels so soft afterward.",
  },
  {
    name: "Joanne",
    stars: 5,
    photo: "/images/everymood/WhatsApp_Image_2025-10-27_at_5.18.27_PM-3.webp",
    review:
      "I\u2019ve been using the Head in the Clouds mist every day. It smells like I\u2019m on a tropical vacation, and my skin feels so soft afterward. I feel so relaxed and happy every time I spray it, it\u2019s a game-changer.",
  },
  {
    name: "Danielle S.",
    stars: 5,
    photo: "/images/everymood/WhatsApp_Image_2025-10-27_at_5.18.27_PM-4.webp",
    review:
      "The Berry Obsessed lip balm is my go-to now. I love the strawberry scent\u2014it\u2019s not too strong, just perfect...",
  },
  {
    name: "Elizabeth R.",
    stars: 5,
    photo: "/images/everymood/WhatsApp_Image_2025-10-27_at_5.18.27_PM-5.webp",
    review:
      "I can\u2019t decide which scent I love more, so I got the Mood Set of 3. Now I just match them to how I feel \u2014...",
  },
  {
    name: "Kimberly",
    stars: 5,
    photo: "/images/everymood/WhatsApp_Image_2025-10-27_at_5.22.38_PM.webp",
    review:
      "I didn\u2019t think a hand sanitizer could actually smell this good. The Dream Catcher scent is everything.",
  },
];

function ChevronLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={filled ? "#FFC107" : "none"}
      stroke={filled ? "#FFC107" : "#E5E5E5"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 1L8.854 4.854L13 5.5L10 8.4L10.708 12.5L7 10.5L3.292 12.5L4 8.4L1 5.5L5.146 4.854L7 1Z"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #F5F0F3 0%, #EEEAF0 100%)",
        padding: "60px 0 60px 40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          paddingRight: "40px",
        }}
      >
        <h2
          style={{
            color: "var(--em-indigo)",
            fontSize: "24px",
            fontWeight: 400,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Don&apos;t Just Take Our Word for It...
        </h2>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #E5E5E5",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#666",
            }}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #E5E5E5",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#666",
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="scrollbar-hide"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          marginTop: "24px",
          scrollSnapType: "x mandatory",
          paddingRight: "40px",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              width: "280px",
              flexShrink: 0,
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              scrollSnapAlign: "start",
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                position: "relative",
              }}
            >
              <Image
                src={t.photo}
                alt={`${t.name} testimonial photo`}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
                sizes="280px"
              />
            </div>

            {/* Info */}
            <div style={{ padding: "16px" }}>
              {/* Name row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    color: "var(--em-indigo)",
                    fontSize: "14px",
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    color: "#999",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  Verified Buyer
                </span>
              </div>

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "2px",
                  marginTop: "8px",
                }}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} filled={i < t.stars} />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "#666",
                  fontSize: "13px",
                  lineHeight: "20px",
                  marginTop: "8px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {t.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
