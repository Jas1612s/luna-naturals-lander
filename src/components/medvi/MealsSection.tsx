import { ProductSection } from "./ProductSection";

function MealsIllustration() {
  const meals = [
    { name: "Grilled Salmon Bowl", cal: "420 kcal", color: "rgba(255,153,51,0.15)" },
    { name: "Mediterranean Wrap", cal: "380 kcal", color: "rgba(51,153,102,0.15)" },
    { name: "Lean Turkey Plate", cal: "350 kcal", color: "rgba(102,153,204,0.15)" },
  ];

  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: "rgb(240,228,216)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div
          className="rounded-xl px-3 py-2 inline-flex items-center gap-2"
          style={{ backgroundColor: "rgba(46,147,111,0.12)", alignSelf: "flex-start" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, color: "#2E936F", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            This Week&apos;s Menu
          </span>
        </div>
        <div className="space-y-3">
          {meals.map((meal) => (
            <div
              key={meal.name}
              className="flex items-center justify-between rounded-2xl px-4 py-3"
              style={{ backgroundColor: meal.color, border: "1px solid rgba(36,34,32,0.06)" }}
            >
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "rgb(36,34,32)", fontFamily: "var(--font-sans)" }}>
                  {meal.name}
                </p>
                <p style={{ fontSize: "11px", color: "rgb(56,49,44)", fontFamily: "var(--font-sans)" }}>
                  {meal.cal}
                </p>
              </div>
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(46,147,111,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#2E936F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "rgba(36,34,32,0.45)", fontFamily: "var(--font-sans)", textAlign: "center" }}>
          Chef-made · Portion-controlled · Weekly rotating
        </p>
      </div>
    </div>
  );
}

export function MealsSection() {
  return (
    <ProductSection
      id="meals"
      badge="MEDVi Meals"
      badgeColor="#7A5C2E"
      badgeBg="rgba(180,130,60,0.15)"
      title="Fuel your transformation, protect your progress"
      subtitle="Skip the hassle of meal planning and prepping"
      body="Chef-made, portion-controlled meals with weekly rotating menus. Nutritionally balanced and macro-friendly—designed to support your treatment plan and make healthy eating effortless."
      features={[
        { text: "Chef-crafted with quality ingredients" },
        { text: "Portion-controlled for your goals" },
        { text: "Weekly rotating menu, never boring" },
        { text: "Nutritionally balanced and macro-friendly" },
      ]}
      ctaText="Get Started"
      bgColor="rgb(250,249,247)"
      blobColor="rgba(180,130,60,0.12)"
      illustration={<MealsIllustration />}
    />
  );
}
