interface ValuePropCard {
  image: string;
  title: string;
  description: string;
}

const cards: ValuePropCard[] = [
  {
    image: "/images/gruns/valueprop-no-mess.webp",
    title: "No Mess",
    description:
      "No spray. No lotion. No sticky hands. Peel one off, stick it on, walk outside. Done.",
  },
  {
    image: "/images/gruns/kid-running-patch.jpg",
    title: "Plant-Powered",
    description:
      "Citronella and eucalyptus oils do the work. No DEET, no parabens, no ingredients you can't pronounce.",
  },
  {
    image: "/images/gruns/valueprop-built-for-real-life.webp",
    title: "Built for Real Life",
    description:
      "Stays on during hikes, soccer practice, and playground chaos. Compact pack fits in a purse, diaper bag, or backpack.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-[var(--gr-green-dark)] pt-20 pb-16 md:pb-20">
      <div className="text-center px-4 mb-12 md:mb-16">
        <h2 className="gr-display italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto">
          We made mosquito protection, like,{" "}
          <span className="text-[var(--gr-accent)]">stupidly simple.</span>
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-4 md:px-6" style={{ width: "max-content" }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-[320px] md:w-[400px] shrink-0 bg-white rounded-3xl overflow-hidden"
            >
              <div className="aspect-square w-full bg-[var(--gr-sage)]/20 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl md:text-2xl text-center text-[var(--gr-dark)]">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-center text-gray-600 mt-3 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
