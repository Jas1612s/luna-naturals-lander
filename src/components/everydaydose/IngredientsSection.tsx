import Image from "next/image";
import { cn } from "@/lib/utils";

interface Ingredient {
  image: string | null;
  name: string;
  isSpecial?: boolean;
}

const ingredients: Ingredient[] = [
  { image: "/images/everydaydose/ingredient-coffee.webp", name: "100% Arabica Coffee" },
  { image: "/images/everydaydose/ingredient-collagen.webp", name: "Collagen Protein" },
  { image: "/images/everydaydose/ingredient-lions-mane.webp", name: "Lion's Mane" },
  { image: "/images/everydaydose/ingredient-chaga.webp", name: "Chaga" },
  { image: "/images/everydaydose/ingredient-l-theanine.webp", name: "L-Theanine" },
  { image: null, name: "Nothing Else", isSpecial: true },
];

export function IngredientsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-[60px]">
      {/* Subtitle */}
      <p
        className="mb-3 text-center text-xs font-semibold uppercase tracking-[2px]"
        style={{ color: "#666" }}
      >
        Science-Backed Ingredients
      </p>

      {/* Title */}
      <h2
        className="ed-heading mx-auto mb-4 text-center text-[34px] font-bold leading-tight"
        style={{ color: "var(--ed-dark, #231f20)" }}
      >
        It&apos;s What&apos;s Inside That
        <span style={{ color: "var(--ed-purple, #4C19D8)" }}> Counts</span>
      </h2>

      {/* Description */}
      <p
        className="mx-auto mb-10 max-w-[600px] text-center text-base"
        style={{ color: "#666" }}
      >
        We&apos;re obsessed with quality. Each functional ingredient in our blend
        is researched and tested to create the perfect cup.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.name}
            className={cn(
              "flex flex-col items-center rounded-2xl p-[30px] text-center transition-transform duration-200 hover:scale-[1.02]",
              ingredient.isSpecial
                ? "relative overflow-hidden border-2 border-dashed"
                : ""
            )}
            style={{
              backgroundColor: "var(--ed-gray, #f3f4f6)",
              borderColor: ingredient.isSpecial
                ? "var(--ed-purple, #4C19D8)"
                : "transparent",
            }}
          >
            {ingredient.isSpecial ? (
              /* Special "nothing else" card */
              <div className="flex h-20 w-20 items-center justify-center">
                <span className="text-[40px] leading-none" role="img" aria-label="leaf">
                  🍃
                </span>
              </div>
            ) : (
              /* Regular ingredient image */
              <div className="relative h-20 w-full">
                <Image
                  src={ingredient.image as string}
                  alt={ingredient.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 40vw, 200px"
                />
              </div>
            )}

            <p
              className="mt-4 text-base font-bold uppercase"
              style={{ color: "var(--ed-dark, #231f20)" }}
            >
              {ingredient.name}
            </p>

            {ingredient.isSpecial && (
              <p
                className="mt-2 text-sm"
                style={{ color: "#666" }}
              >
                That&apos;s it. No fillers.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
