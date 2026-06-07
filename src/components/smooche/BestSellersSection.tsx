import { cn } from "@/lib/utils";

interface Product {
  image: string;
  subtitle: string;
  title: string;
  salePrice: string;
  comparePrice: string;
}

const PRODUCTS: Product[] = [
  {
    image: "/images/smooche/bestseller-foundation.webp",
    subtitle: "Adapts to your skin tone",
    title: "Color Changing Foundation",
    salePrice: "$39 USD",
    comparePrice: "$59 USD",
  },
  {
    image: "/images/smooche/bestseller-stain.webp",
    subtitle: "For long lasting color",
    title: "Peel-off Lip Stain",
    salePrice: "$19 USD",
    comparePrice: "$29 USD",
  },
  {
    image: "/images/smooche/bestseller-plumper.webp",
    subtitle: "For extreme results",
    title: "Extreme Lip Plumper",
    salePrice: "$39 USD",
    comparePrice: "$49 USD",
  },
  {
    image: "/images/smooche/bestseller-mascara.webp",
    subtitle: "For longer lashes",
    title: "Long Lash Mascara",
    salePrice: "$19 USD",
    comparePrice: "$29 USD",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl transition-transform duration-200 ease-out",
        "hover:scale-[1.02]"
      )}
      style={{ backgroundColor: "#F5EAE4" }}
    >
      {/* Image area — square 1:1 */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1 / 1", backgroundColor: "#F5EAE4", padding: "16px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Text area */}
      <div style={{ padding: "16px" }}>
        {/* Subtitle */}
        <p
          style={{
            fontSize: "11px",
            color: "#999",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: 0,
          }}
        >
          {product.subtitle}
        </p>

        {/* Title */}
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#3D1018",
            marginTop: "4px",
            marginBottom: 0,
          }}
        >
          {product.title}
        </h3>

        {/* Price row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            marginTop: "8px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#3D1018" }}>
            {product.salePrice}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#999",
              textDecoration: "line-through",
            }}
          >
            {product.comparePrice}
          </span>
        </div>

        {/* Add to Cart button */}
        <button
          type="button"
          className={cn(
            "mt-3 w-full transition-colors duration-150",
            "bg-[#5A1726] text-[#F5EDE6] hover:bg-[#6B1F30]"
          )}
          style={{
            height: "40px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.2px",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function BestSellersSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#3D1018",
            textAlign: "center",
            marginBottom: "48px",
            marginTop: 0,
          }}
        >
          Our best sellers
        </h2>

        {/* Product grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "20px" }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
