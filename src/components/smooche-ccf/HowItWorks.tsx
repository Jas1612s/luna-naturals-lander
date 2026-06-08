import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Adjusts to your unique tone",
    description:
      "The formula contains intelligent pigments that are colorless until they make contact with your skin. They then react with your skin\u2019s chemistry to create your exact shade match\u2014even as your skin tone has changed with age.",
  },
  {
    number: 2,
    title: "Won\u2019t settle into fine lines",
    description:
      "Traditional foundations have thick, heavy pigments that sink into wrinkles and emphasize texture. Color-adapting technology uses lightweight, hydrating pigments that glide over your skin, filling in fine lines with moisture instead of makeup.",
  },
  {
    number: 3,
    title: "Maintains a youthful finish all day",
    description:
      "As your skin naturally changes throughout the day, the foundation continues to adapt\u2014maintaining a smooth, radiant finish from morning to night without oxidizing, cracking, or looking cakey.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <p className="mb-8 text-center text-[13px] font-medium uppercase tracking-[0.1em] text-[#555]">
          How it works
        </p>

        <Image
          src="/images/smooche-ccf/how-it-works.jpg"
          alt="How the color-changing foundation works"
          width={700}
          height={400}
          className="mb-10 w-full rounded-lg object-cover"
        />

        <div className="flex flex-col">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex items-start justify-between gap-6 py-6 ${
                idx < steps.length - 1 ? "border-b border-[#e5e5e5]" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="mb-2 text-[18px] font-bold leading-snug text-[#151515]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555]">
                  {step.description}
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#e5e5e5] text-[14px] font-semibold text-[#151515]">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
