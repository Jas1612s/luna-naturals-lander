import Image from "next/image";

interface Step {
  icon: string;
  text: string;
}

const steps: Step[] = [
  { icon: "/images/everydaydose/step-icon-1.webp", text: "Add 1 Tbsp" },
  { icon: "/images/everydaydose/step-icon-2.webp", text: "Add hot water (6-8oz)" },
  { icon: "/images/everydaydose/step-icon-3.webp", text: "Stir well or froth" },
  { icon: "/images/everydaydose/step-icon-4.webp", text: "Add creamer of choice" },
  { icon: "/images/everydaydose/step-icon-5.webp", text: "Enjoy!" },
];

export function HowToMake() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-[60px] max-md:px-4 max-md:py-10">
      <div className="flex flex-col gap-8 md:h-[600px] md:flex-row md:gap-10">
        {/* Left: Product image */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-full md:w-1/2">
          <Image
            src="/images/everydaydose/coffee-plus-benefits.webp"
            alt="Everyday Dose mushroom coffee with benefits"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div className="flex w-full flex-col justify-center md:w-1/2">
          {/* Title */}
          <h2
            className="ed-heading mb-8 text-[34px] font-bold leading-tight"
            style={{ color: "var(--ed-dark, #231f20)" }}
          >
            HOW TO
            <span style={{ color: "var(--ed-dark, #231f20)" }}> MAKE</span>
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-5">
            {steps.map((step) => (
              <div key={step.text} className="flex items-center gap-4">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={step.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <p
                  className="text-base font-medium"
                  style={{ color: "var(--ed-dark, #231f20)" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="mt-8 inline-block self-start rounded-full border-2 border-[#231f20] bg-transparent px-8 py-3 text-sm font-semibold uppercase text-[#231f20] transition-colors duration-200 hover:bg-[#231f20] hover:text-white"
          >
            Read The Label
          </a>
        </div>
      </div>
    </section>
  );
}
