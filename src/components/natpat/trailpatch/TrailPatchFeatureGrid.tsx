import Image from "next/image";

const features = [
  {
    image: "60-color-patches.png",
    title: "48 Colorful Patches In Every Bag",
    description: null,
    disclaimer: null,
  },
  {
    image: "airtight-seal.png",
    title: "Airtight Seal",
    description: (
      <>
        Keeps Your Patches Safe Between Uses. Just Seal The Bag And Your
        Stickers Will Last Up <strong>To 12 Months</strong>.
      </>
    ),
    disclaimer: null,
  },
  {
    image: "easy-to-use.png",
    title: "Easy-to-Use and Functional",
    description: (
      <>
        Just peel, stick, and let the playful designs bring a smile to your face
        while offering serious protection.
      </>
    ),
    disclaimer: null,
  },
  {
    image: "family-friendly.png",
    title: "Designed for Families",
    description: (
      <>
        Perfect for kids and adults, these stickers are free from DEET and made
        with carefully selected,{" "}
        <strong>non-toxic, plant-inspired ingredients</strong>
      </>
    ),
    disclaimer: "* Not a safety claim",
  },
];

export function TrailPatchFeatureGrid() {
  return (
    <section className="py-[60px] md:py-[60px] pt-[25px] md:pt-[60px]">
      <div className="max-w-[880px] mx-auto px-4">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 mb-12 md:flex-row md:gap-12 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full flex justify-center md:w-auto">
                <div className="relative w-full max-w-[340px]">
                  <Image
                    src={`/images/natpat/trailpatch/${feature.image}`}
                    alt={feature.title}
                    width={340}
                    height={340}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), Barlow, sans-serif",
                    fontSize: "32px",
                    fontWeight: 600,
                    textAlign: "left",
                    color: "var(--tp-text)",
                    margin: 0,
                  }}
                >
                  {feature.title}
                </h3>
                {feature.description && (
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "18px",
                      textAlign: "left",
                      marginTop: "10px",
                      color: "var(--tp-text)",
                    }}
                  >
                    {feature.description}
                  </p>
                )}
                {feature.disclaimer && (
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "13px",
                      textAlign: "left",
                      marginTop: "8px",
                      color: "#888",
                    }}
                  >
                    {feature.disclaimer}
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {/* CTA Button */}
        <div className="flex flex-col items-center mt-12 mb-8">
          <a
            href="#getNow"
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "clamp(25px, 5vw, 36px)",
              background: "var(--tp-blue)",
              color: "white",
              padding: "13px 20px 8px",
              borderRadius: "50px",
              maxWidth: "345px",
              width: "100%",
              textTransform: "uppercase",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              letterSpacing: "0.02em",
              lineHeight: 1.2,
              margin: "0 auto 20px",
            }}
          >
            Get Started Now
          </a>
          <a
            href="#getNow"
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "clamp(25px, 5vw, 36px)",
              background: "var(--tp-blue)",
              color: "white",
              padding: "13px 20px 8px",
              borderRadius: "50px",
              maxWidth: "345px",
              width: "100%",
              textTransform: "uppercase",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              letterSpacing: "0.02em",
              lineHeight: 1.2,
              margin: "0 auto",
            }}
          >
            Get Started Now
          </a>
        </div>

        {/* How To Use Image */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/natpat/trailpatch/how-to-use.png"
            alt="How To Use TrailPatch"
            width={880}
            height={500}
            className="block w-full h-auto object-contain"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </section>
  );
}
