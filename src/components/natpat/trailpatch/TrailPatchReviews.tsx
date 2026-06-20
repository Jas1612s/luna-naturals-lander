"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Review {
  image: string;
  name: string;
  title: string;
  text: string;
}

const reviews: Review[] = [
  {
    image: "/images/natpat/trailpatch/review-1.png",
    name: "K.T. (Madison Heights, US)",
    title: "Great for Toddler",
    text: "This product is great for my toddler. Less chemicals and less mess than a spray. Seems to work great so far! The main reason we purchased was for our toddler, so the product is 5 stars for that reason!!! My husband did try to use them.",
  },
  {
    image: "/images/natpat/trailpatch/review-2.png",
    name: "C.B. (Brossard, CA)",
    title: "Great Product",
    text: "These were bought last summer. Wore them as I walk on trails nearly every day. Confirm that they also repel blackflies. Picture taken on trail in BC, Canada. Grandson also enjoys them!",
  },
  {
    image: "/images/natpat/trailpatch/review-3.png",
    name: "S.A. (Toronto, CA)",
    title: "Love Product",
    text: "I had the best experience with stickers. I'm so glad I found you guys. So happy with them I'm using it for myself too 😅 with my little one and I never had a bite me or my baby.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        padding: "25px",
        boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)",
        flex: 1,
        background: "#fff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Image
          src={review.image}
          alt={`Review from ${review.name}`}
          width={260}
          height={260}
          style={{ maxWidth: "260px", width: "100%", margin: "0 auto", display: "block" }}
        />
      </div>
      <p
        style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize: "12px",
          fontWeight: 600,
          margin: "15px 0 5px",
        }}
      >
        {review.name}
      </p>
      <Image
        src="/images/natpat/trailpatch/5-star.svg"
        alt="5 stars"
        width={100}
        height={20}
        style={{ marginBottom: "20px", display: "block" }}
      />
      <p
        style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "30px",
        }}
      >
        {review.title}
      </p>
      <p
        style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          margin: 0,
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

export function TrailPatchReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="TrustedReviews">
      {/* Title */}
      <h2
        className="uppercase text-center"
        style={{
          fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
          fontSize: "clamp(17px, 4vw, 40px)",
          fontWeight: 400,
          marginTop: "100px",
          // Mobile override applied via responsive classes below
        }}
      >
        <span className="hidden md:block" style={{ fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif", fontSize: "40px", textTransform: "uppercase" }}>
          What People Are Saying About Other NATPAT Products:
        </span>
        <span
          className="block md:hidden"
          style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize: "17px",
            fontWeight: 600,
            textTransform: "capitalize",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          What People Are Saying About Other NATPAT Products:
        </span>
      </h2>

      {/* Desktop: 3 cards in a row */}
      <div
        className="hidden md:flex"
        style={{
          justifyContent: "space-between",
          maxWidth: "1046px",
          margin: "50px auto",
          gap: "50px",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      {/* Mobile: carousel */}
      <div
        className="block md:hidden"
        style={{ paddingBottom: "70px", position: "relative" }}
      >
        <div
          style={{
            background: "#fff",
            boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)",
            margin: "20px 16px",
          }}
        >
          <ReviewCard review={reviews[activeIndex]} />
        </div>

        {/* Indicator dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: i === activeIndex ? "var(--tp-blue)" : "#c4c4c4",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
