import Image from "next/image";

type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: "/images/luna/reviewer-megan.webp",
    name: "Megan D.",
    title: "Avid Hiker",
    quote:
      "I've tried so many repellents, but these products actually deliver. The wipes are perfect for travel, the bracelets are stylish, and the patches are foolproof. Highly recommend!",
  },
  {
    avatar: "/images/luna/reviewer-elle.webp",
    name: "Elle S.",
    title: "Outdoor Mom",
    quote:
      "Our family uses these products religiously. The kids love their fun patches, and we adults swear by the candles and spray. Finally, a brand that gets it right!",
  },
  {
    avatar: "/images/luna/reviewer-jenny.webp",
    name: "Jenny D.",
    title: "Sensitive Skin",
    quote:
      "As someone with sensitive skin, I'm picky about repellents. These DEET-free options are gentle yet effective. The anti-itch balm is now a staple in our first-aid kit!",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 16,
        padding: 28,
        flex: 1,
        minWidth: 280,
      }}
    >
      <div style={{ fontSize: 16, marginBottom: 12 }}>⭐⭐⭐⭐⭐</div>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.9)",
          marginBottom: 20,
          fontStyle: "italic",
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          style={{ borderRadius: 999, objectFit: "cover" }}
        />
        <div>
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function LunaTestimonials() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/luna/testimonial-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(42,46,22,0.85)",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: 11,
              letterSpacing: 3,
              color: "#f26a3e",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            WHAT ADVENTURERS SAY
          </p>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "white",
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            Trusted by Outdoor Enthusiasts
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
