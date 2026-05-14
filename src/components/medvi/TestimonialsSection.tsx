"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Billy",
    text: "Ms. Gonzalez was great! She listened to my needs and provided details about the treatment plan. I felt heard and supported throughout the whole process.",
    stars: 5,
  },
  {
    name: "Terika",
    text: "The provider was knowledgeable and helpful. She answered all my questions clearly and made me feel confident about my care.",
    stars: 5,
  },
  {
    name: "Jamie",
    text: "The questions are to the point and easy to navigate. The whole process was straightforward and stress-free.",
    stars: 5,
  },
  {
    name: "Jacqueline",
    text: "My experience is very positive. I am doing very well on my way to reaching my goal with MEDVi's support every step of the way.",
    stars: 5,
  },
  {
    name: "Diana",
    text: "The staff has been so friendly and caring. I didn't expect that! They truly go above and beyond to make you feel supported.",
    stars: 5,
  },
  {
    name: "Donna",
    text: "The Physician was very knowledgeable and ready to answer all my concerns. I felt like I was in great hands.",
    stars: 5,
  },
  {
    name: "Terri",
    text: "Losing weight without a crazy diet, without cardio...it just felt like magic. MEDVi changed everything for me.",
    stars: 5,
  },
  {
    name: "Alexandra",
    text: "Everything was quick and concise. I was treated professionally and the service exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Greg",
    text: "I was ready to give up. Wow. I would pay 10x as much if I had to. MEDVi gave me my life back.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#2E936F" aria-hidden>
          <path d="M7 1l1.6 4.8H14l-4.1 3 1.6 4.8L7 11l-4.5 2.6 1.6-4.8L0 5.8h5.4z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "rgb(241,245,233)" }}
    >
      {/* Blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          left: "-150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,195,144,0.2) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="mb-4 text-center">
          <span
            className="mb-5 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ backgroundColor: "rgba(46,147,111,0.12)", color: "#2E936F" }}
          >
            Patient Stories
          </span>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "rgb(36,34,32)",
              fontFamily: "var(--font-sans)",
            }}
          >
            There&apos;s a reason people are{" "}
            <span style={{ color: "#2E936F" }}>raving about us.</span>
          </h2>
          <p
            className="mx-auto mb-12"
            style={{
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.65,
              color: "rgb(56,49,44)",
              maxWidth: "560px",
              fontFamily: "var(--font-body, var(--font-sans))",
            }}
          >
            Join the multitude of people who have trusted MEDVi to help change
            their lives, achieving significant, lasting results.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, visibleCount).map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(36,34,32,0.07)",
                boxShadow: "0 2px 12px rgba(36,34,32,0.04)",
              }}
            >
              <StarRating count={t.stars} />
              <p
                className="my-3"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "rgb(56,49,44)",
                  fontFamily: "var(--font-body, var(--font-sans))",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "rgba(46,147,111,0.12)", color: "#2E936F" }}
                >
                  {t.name[0]}
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgb(36,34,32)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {t.name}
                </span>
                <span
                  className="ml-auto text-xs"
                  style={{ color: "rgba(36,34,32,0.4)", fontFamily: "var(--font-sans)" }}
                >
                  Verified patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < testimonials.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(testimonials.length)}
              className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{
                border: "1px solid rgba(46,147,111,0.4)",
                color: "#2E936F",
                backgroundColor: "transparent",
                fontFamily: "var(--font-sans)",
              }}
            >
              Read more stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
