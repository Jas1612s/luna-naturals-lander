const benefits = [
  "30-day money-back guarantee",
  "Plant-based & DEET-free",
  "Free shipping on 2+ packs",
];

export function FinalCTA() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #282D0F 0%, #3A4220 50%, #46502D 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text side */}
        <div className="flex-1">
          {/* Rating */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="text-[#F4693E]">★★★★★</span>
            <span className="text-white">
              <span className="text-[#F4693E] font-bold">4.8</span> stars from{" "}
              <span className="text-[#F4693E] font-bold">50,000+</span> happy
              families
            </span>
          </div>

          {/* Heading */}
          <h2 className="gr-display italic text-4xl md:text-5xl text-white mt-4 leading-tight">
            Try the patch that replaced the spray.
          </h2>

          {/* Benefit checkmarks */}
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-white font-medium">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                  style={{ backgroundColor: "#46502D" }}
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#shop-adults"
              className="bg-[#F4693E] text-white font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
            >
              Shop Adults
            </a>
            <a
              href="#shop-kids"
              className="bg-[#F4693E] text-white font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
            >
              Shop Kids
            </a>
          </div>
        </div>

        {/* Product image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[550px] aspect-square rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-white/50 text-sm">Image coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
