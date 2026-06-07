import Image from "next/image";

const reviews = [
  {
    image: "/images/everydaydose/review-1.webp",
    stars: 5,
    text: "As a mom of 3 littles under 3 I need my coffee. I was feeling so guilty drinking conventional coffee and still crashing by 10am. This changed everything for me!",
    name: "Sarah M.",
  },
  {
    image: "/images/everydaydose/review-2.webp",
    stars: 5,
    text: "I\u2019ve never been a morning person and have never been able to get rid of the \u2018brain fog\u2019 for at least 2 hours after waking. After just a week of Everyday Dose, I wake up clear-headed.",
    name: "James T.",
  },
  {
    image: "/images/everydaydose/review-3.webp",
    stars: 5,
    text: "The taste is exactly like coffee but the results are so much better. I instantly feel energized, and over the last few weeks my skin and hair have noticeably improved.",
    name: "Michelle K.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{ color: "#FFB800", fontSize: "20px", lineHeight: 1 }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      {/* Subtitle */}
      <p
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
          color: "#666",
          fontWeight: 600,
          margin: 0,
        }}
      >
        +100,000 + FIVE STAR REVIEWS
      </p>

      {/* Title */}
      <h2
        className="ed-heading"
        style={{
          fontSize: "34px",
          fontWeight: 700,
          textAlign: "center",
          margin: "12px 0",
        }}
      >
        JOIN THE
        <span style={{ color: "var(--ed-purple, #4C19D8)" }}> DOSE FAM</span>
      </h2>

      {/* Description */}
      <h3
        style={{
          fontSize: "16px",
          color: "#666",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto 24px",
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        Don&apos;t just take our word for it. Hear from real people upgrading
        their coffee and getting more out of their day.
      </h3>

      {/* Star rating row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "30px",
        }}
      >
        <StarRow count={5} />
        <span style={{ fontSize: "13px", color: "#666" }}>
          101,172 Reviews
        </span>
      </div>

      {/* Review cards carousel */}
      <div
        className="scrollbar-hide"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              background: "white",
              border: "1px solid #eee",
              borderRadius: "16px",
              padding: "24px",
              minWidth: "360px",
              maxWidth: "360px",
              flexShrink: 0,
            }}
          >
            {/* Review image */}
            <div
              style={{
                position: "relative",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <Image
                src={review.image}
                alt={`Review by ${review.name}`}
                fill
                sizes="360px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Stars */}
            <div style={{ marginBottom: "12px" }}>
              <StarRow count={review.stars} />
            </div>

            {/* Review text */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#333",
                margin: "0 0 12px",
              }}
            >
              {review.text}
            </p>

            {/* Reviewer name */}
            <p
              style={{
                fontWeight: 700,
                fontSize: "14px",
                margin: 0,
                color: "var(--ed-dark, #231f20)",
              }}
            >
              {review.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile responsive style override */}
      <style>{`
        @media (max-width: 768px) {
          .ed-reviews-section-wrapper {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
