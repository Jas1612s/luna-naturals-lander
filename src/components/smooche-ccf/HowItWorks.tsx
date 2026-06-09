import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Sticks to clothes, not skin",
    description:
      "Each patch is infused with citronella and eucalyptus oils. Peel it off and stick it on your child\u2019s shirt, hat, shorts, or backpack. The patch releases a vapor barrier that mosquitoes can\u2019t stand \u2014 without a single chemical touching their skin.",
  },
  {
    number: 2,
    title: "Creates an invisible protection zone",
    description:
      "The plant-based oils create an invisible scent barrier around your child that mosquitoes actively avoid. No sticky spray, no chemical absorption, no skin irritation. Just a natural force field that keeps biters away.",
  },
  {
    number: 3,
    title: "Lasts 12 hours with zero reapplication",
    description:
      "One patch in the morning protects through dinner. Rain, sweat, swimming \u2014 it stays on and keeps working. No mid-day reapplication, no spray bottles in your bag. Apply once, forget about it, enjoy your day.",
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
          alt="How Luna Naturals mosquito repellent patches work"
          width={700}
          height={400}
          className="mb-10 w-full rounded-lg object-cover"
        />

        <div className="flex flex-col">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex items-start justify-between gap-6 py-6 ${
                idx < steps.length - 1 ? "border-b border-[#d4ddd4]" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="mb-2 text-[18px] font-bold leading-snug text-[#1a2e1a]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555]">
                  {step.description}
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#d4ddd4] text-[14px] font-semibold text-[#1a2e1a]">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
