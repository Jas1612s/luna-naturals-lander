import Image from "next/image";

const badges = [
  "Science Backed Formulas",
  "Eco-First Design",
  "No Harmful Chemicals",
  "Safe & Gentle Always",
] as const;

function CheckmarkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="var(--em-indigo)" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThisMomentSection() {
  return (
    <section style={{ width: "100%" }}>
      {/* Split layout */}
      <div
        style={{
          display: "flex",
          minHeight: 600,
          width: "100%",
        }}
        className="flex-col md:flex-row"
      >
        {/* Left half — image */}
        <div
          className="w-full md:w-1/2"
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #f5e6f0 0%, #ddd6f3 100%)",
            minHeight: 350,
          }}
        >
          {/* Decorative overlay */}
          <Image
            src="/images/everymood/left1bakcgroundimage.webp"
            alt=""
            fill
            style={{
              objectFit: "cover",
              opacity: 0.15,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          {/* Product image */}
          <Image
            src="/images/everymood/Rectangle-resize-2.webp"
            alt="Every Mood product collection"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right half — text */}
        <div
          className="w-full md:w-1/2"
          style={{
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "var(--em-indigo)",
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: "-1.6px",
              lineHeight: "48px",
              margin: 0,
            }}
          >
            This Moment is Yours
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: 16,
              lineHeight: "26px",
              marginTop: 20,
              maxWidth: 450,
            }}
          >
            Monday motivation. Tuesday tranquility. Wednesday wildness. Every
            day demands a different version of you&mdash;now you have the tools
            to deliver.
          </p>

          <a
            href="#"
            style={{
              background: "var(--em-indigo)",
              color: "white",
              borderRadius: 50,
              padding: "14px 32px",
              fontSize: 16,
              fontWeight: 500,
              marginTop: 24,
              display: "inline-block",
              textDecoration: "none",
              width: "fit-content",
              transition: "opacity 0.2s",
            }}
          >
            Find Your Mood
          </a>
        </div>
      </div>

      {/* Feature badges */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          padding: "32px 40px",
          background: "white",
        }}
      >
        {badges.map((badge) => (
          <div
            key={badge}
            style={{
              border: "1px solid #E5E5E5",
              borderRadius: 50,
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "black",
            }}
          >
            <CheckmarkIcon />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
