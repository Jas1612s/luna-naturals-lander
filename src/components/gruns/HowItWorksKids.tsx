import { LazyVideo } from "@/components/gruns/LazyVideo";

const steps = [
  {
    title: "Let Them Pick",
    desc: "Kids choose their favorite patch design. They think it's a sticker – you know it's protection.",
    video: "/videos/gruns/kids-patch-demo.mp4",
  },
  {
    title: "Stick on Clothes",
    desc: "Press onto shirts, shorts, hats, or backpacks. No chemicals touching their skin – ever.",
    video: "/videos/gruns/kids-patch-step2.mp4",
  },
  {
    title: "Play All Day",
    desc: "8 hours of plant-based protection. Waterproof through sprinklers, sweat, and puddle jumps.",
    video: "/videos/gruns/kids-patch-step3.mp4",
  },
];

export function HowItWorksKids() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-[960px] mx-auto">
        <h2 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-dark)] text-center leading-tight mb-4">
          So easy, your kids can do it.
        </h2>
        <p className="text-center text-[var(--gr-sage)] text-base mb-12 max-w-md mx-auto">
          No more wrestling with spray bottles. Just peel, stick, and let them play.
        </p>
      </div>

      {/* Mobile: horizontal scroll / Desktop: 3-col grid */}
      <div className="overflow-x-auto scrollbar-hide lg:overflow-visible">
        <div className="flex gap-5 px-4 md:px-6 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:max-w-[1100px] lg:mx-auto lg:snap-none lg:pb-0">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="w-[280px] md:w-[320px] lg:w-auto shrink-0 lg:shrink snap-center bg-[var(--gr-cream)] rounded-2xl overflow-hidden"
            >
              {/* Video area */}
              <div className="aspect-square relative bg-black/5">
                <LazyVideo src={step.video} className="w-full h-full object-cover" />
                {/* Step badge overlay */}
                <div className="absolute top-3 left-3 bg-[var(--gr-accent)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Step {i + 1}
                </div>
              </div>

              {/* Text */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-[var(--gr-dark)] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--gr-sage)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
