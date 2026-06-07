import Image from "next/image";

export function MoodScienceSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative left-edge flower/blob */}
      <div
        style={{
          position: "absolute",
          left: -40,
          top: "50%",
          transform: "translateY(-50%)",
          width: 150,
          height: 300,
          opacity: 0.7,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/everymood/homebackgroundvectorhomebottom.webp"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
          The Mood Science
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: 16,
            lineHeight: "26px",
            maxWidth: 600,
            margin: "20px auto 0",
          }}
        >
          In 0.146 seconds, our scent molecules reach your limbic
          system&mdash;where emotions live. We&rsquo;ve cracked the code on
          triggering specific mood states through targeted olfactory pathways.
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
            transition: "opacity 0.2s",
          }}
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
