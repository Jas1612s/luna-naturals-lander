import Image from "next/image";

const collections = [
  { name: "Itch Relief", image: "/images/luna/col-itch-relief.webp" },
  { name: "Sprays", image: "/images/luna/col-sprays.webp" },
  { name: "Patches", image: "/images/luna/col-patches.webp" },
  { name: "Wipes", image: "/images/luna/col-wipes.webp" },
  { name: "Bracelets", image: "/images/luna/col-bracelets.webp" },
  { name: "Kids", image: "/images/luna/col-kids.webp" },
  { name: "Candles & Incense", image: "/images/luna/col-candles.webp" },
];

export function LunaCollections() {
  return (
    <section
      style={{
        background: "#f4f4f4",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: 11,
              letterSpacing: 3,
              color: "#f26a3e",
              margin: "0 0 8px 0",
              textTransform: "uppercase",
            }}
          >
            SHOP BY CATEGORY
          </p>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#1D1D1D",
              margin: 0,
              fontFamily: "var(--font-jost)",
            }}
          >
            Browse Collections
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="luna-collections-grid"
        >
          {collections.map((col) => (
            <CollectionCard key={col.name} name={col.name} image={col.image} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .luna-collections-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .luna-collection-card:hover .luna-collection-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

function CollectionCard({ name, image }: { name: string; image: string }) {
  return (
    <div
      className="luna-collection-card"
      style={{
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        aspectRatio: "4 / 3",
      }}
    >
      {/* Image with hover scale via CSS class */}
      <div
        className="luna-collection-image"
        style={{
          position: "absolute",
          inset: 0,
          transition: "transform 2s ease",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(42,46,22,0.8) 0%, transparent 50%)",
          borderRadius: 16,
        }}
      />

      {/* Label */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
        }}
      >
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "white",
            fontFamily: "var(--font-jost)",
            margin: "0 0 2px 0",
            lineHeight: 1.2,
          }}
        >
          {name}
        </p>
        <span
          style={{
            color: "#f26a3e",
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}
