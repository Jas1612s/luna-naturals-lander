import Image from "next/image";

interface Ingredient {
  name: string;
  description: string;
  badge: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    name: "Hyaluronic Acid",
    description:
      "Deeply hydrates and locks in moisture, ensuring long-lasting plumpness and smoothness.",
    badge: "Hydrating",
  },
  {
    name: "Peppermint Extract",
    description:
      "A natural, vegan extract that provides a refreshing, cooling sensation and stimulates circulation for fuller-looking lips.",
    badge: "Plumping",
  },
  {
    name: "Squalane",
    description:
      "A plant-based moisturizer that mimics natural skin oils to hydrate and soften lips.",
    badge: "Nourishing",
  },
];

function IngredientIcon({ name }: { name: string }) {
  // Distinct monogram icons for each ingredient
  const initials: Record<string, string> = {
    "Hyaluronic Acid": "HA",
    "Peppermint Extract": "PE",
    Squalane: "SQ",
  };
  return (
    <div
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #EBD3C7 0%, #F5EAE4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#B8924A",
          letterSpacing: "0.5px",
        }}
      >
        {initials[name] ?? name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <article
      style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
      }}
    >
      {/* Left: icon avatar */}
      <IngredientIcon name={ingredient.name} />

      {/* Right: text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Top row: name + badge */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "6px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#3D1018",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {ingredient.name}
          </h3>

          {/* Badge */}
          <span
            style={{
              flexShrink: 0,
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              backgroundColor: "#EBD3C7",
              color: "#B8924A",
              padding: "3px 10px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {ingredient.badge}
          </span>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#555555",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {ingredient.description}
        </p>
      </div>
    </article>
  );
}

export function IngredientsSection() {
  return (
    <section style={{ backgroundColor: "#F5EAE4", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#B8924A",
              margin: 0,
            }}
          >
            What makes it special
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#3D1018",
              marginTop: "8px",
              marginBottom: 0,
              lineHeight: 1.2,
            }}
          >
            Key ingredients
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="smooche-ingredients-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "60% 40%",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left: ingredient cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {INGREDIENTS.map((ingredient) => (
              <IngredientCard key={ingredient.name} ingredient={ingredient} />
            ))}
          </div>

          {/* Right: product image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/smooche/ingredients-bg.png"
              alt="Key ingredients product visual"
              width={400}
              height={500}
              style={{
                maxWidth: "400px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .smooche-ingredients-grid {
            grid-template-columns: 1fr !important;
          }
          .smooche-ingredients-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
