const CDN = "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit";
const FDA_BADGE = "https://cloudinary.forhims.com/image/upload/v1773990110/Novo%20Nordisk%20Launch/Carousel/FDA_Approved_Badge_Vector.png";

const glp1Products = [
  {
    name: "Wegovy® Pill",
    price: "From $149/mo†",
    type: "Semaglutide",
    bg: "rgb(185, 140, 110)",
    img: `${CDN}/Hers/homepage/2026/product_wegovy-pill.png`,
    isNew: true,
  },
  {
    name: "Zepbound® KwikPen®",
    price: "$299/mo†",
    type: "Tirzepatide",
    bg: "rgb(170, 120, 90)",
    img: `${CDN}/Hers/homepage/2026/product_zepbound-kwikpen.png`,
    isNew: true,
  },
  {
    name: "Foundayo®",
    price: "From $149/mo†",
    type: "Orforglipron",
    bg: "rgb(160, 115, 85)",
    img: `${CDN}/Hers/homepage/2026/product_foundayo.png`,
    isNew: true,
  },
  {
    name: "Wegovy® Pen",
    price: "From $199/mo†",
    type: "Semaglutide",
    bg: "rgb(175, 130, 100)",
    img: `${CDN}/Hers/homepage/2026/product_wegovy-pen.png`,
    isNew: true,
    badge: "High dose option",
  },
  {
    name: "Zepbound® Vial",
    price: "From $349/mo†",
    type: "Tirzepatide",
    bg: "rgb(155, 110, 80)",
    img: `${CDN}/Hers/homepage/2026/product_zepbound_vial.png`,
    isNew: true,
  },
];

export function WeightLossSection() {
  return (
    <section className="overflow-hidden rounded-t-3xl bg-hims-brown">
      {/* Sub-A: Hero */}
      <div className="relative px-6 pb-0 pt-20 text-center">
        <h2
          className="text-white"
          style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 400, lineHeight: 1.1 }}
        >
          Your weight loss
          <br />
          <span className="text-hims-amber">breakthrough is here</span>
        </h2>
        <video
          className="mx-auto mt-8 w-full max-w-[900px] rounded-3xl object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Hims_Sunlight_Rough_PillsPen_poster.jpg"
        >
          <source src="/videos/Hims_Sunlight_Rough_PillsPen.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sub-B: CTA */}
      <div className="px-6 py-12 text-center">
        <p
          className="mb-3"
          style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 400, color: "white" }}
        >
          <span className="text-hims-amber">Lose up to 25%</span> body weight
        </p>
        <p className="mb-8 text-base text-[rgba(255,255,255,0.7)]">
          with Wegovy®*, now with more options than ever.
        </p>
        <a
          href="/#wm-quiz"
          className="inline-flex cursor-pointer items-center justify-center rounded-full bg-hims-amber px-8 py-3.5 text-base font-medium text-[rgba(0,0,0,0.88)] transition-opacity hover:opacity-85"
        >
          Get started
        </a>
      </div>

      {/* Sub-C: GLP-1 Lineup */}
      <div className="pb-8">
        <h3 className="mb-6 px-6 text-xl font-medium text-white">
          Access our wide GLP-1 lineup
        </h3>
        <div className="scrollbar-hide flex gap-4 overflow-x-auto px-6">
          {glp1Products.map((product) => (
            <div
              key={product.name}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl p-5"
              style={{ backgroundColor: product.bg, minWidth: "240px" }}
            >
              {/* Badges row */}
              <div className="mb-3 flex items-center justify-between">
                {product.isNew && (
                  <span className="rounded-full bg-[rgba(255,255,255,0.25)] px-2.5 py-1 text-xs text-white">
                    New
                  </span>
                )}
                {product.badge && (
                  <span className="rounded-full bg-[rgba(255,255,255,0.25)] px-2.5 py-1 text-xs text-white ml-2">
                    {product.badge}
                  </span>
                )}
                <img src={FDA_BADGE} alt="FDA Approved" className="ml-auto h-10 w-10 object-contain" />
              </div>
              {/* Product image */}
              <div className="mb-4 flex h-36 items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-lg"
                />
              </div>
              <p className="text-base font-medium text-white">{product.name}</p>
              <p className="mt-1 text-sm text-[rgba(255,255,255,0.8)]">{product.price}</p>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">{product.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-D: SNAC + Wegovy Pen */}
      <div className="flex flex-col md:flex-row">
        {/* Left: SNAC */}
        <div className="flex flex-1 flex-col justify-center px-12 py-12">
          <h3
            className="mb-6 text-white"
            style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 400, lineHeight: 1.2 }}
          >
            The perfect
            <br />
            <span className="text-hims-amber">SNAC</span>
          </h3>
          <p className="mb-8 text-base text-[rgba(255,255,255,0.7)]">
            Structured Nutrition and Activity Coaching — personalized to keep
            you on track between visits.
          </p>
          <a
            href="/#snac"
            className="inline-flex w-fit cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] px-7 py-3 text-base text-white transition-opacity hover:opacity-85"
          >
            See the science
          </a>
        </div>

        {/* Right: Wegovy Pen / comprehensive pill video */}
        <div className="flex flex-1 flex-col items-end px-12 py-12 text-right">
          <span className="mb-4 inline-block rounded-full bg-hims-amber px-3 py-1 text-xs font-medium text-[rgba(0,0,0,0.88)]">
            New high dose
          </span>
          <h3
            className="mb-6 text-white"
            style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 400, lineHeight: 1.2 }}
          >
            Lose up to 25%
            <br />
            body weight*
          </h3>
          <video
            className="mb-8 w-full max-w-[320px] rounded-3xl object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/comprehensive-pill-poster.png"
          >
            <source src="/videos/comprehensive-pill.mp4" type="video/mp4" />
          </video>
          <a
            href="/#wegovy-pen"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.1)] px-7 py-3 text-base text-white transition-opacity hover:opacity-85"
          >
            Explore Wegovy® Pen
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="px-6 pb-8 text-center text-xs text-[rgba(255,255,255,0.44)]">
        *Results based on clinical trials. Individual results may vary. Prescription required.
        Compounded products not evaluated by the FDA.
      </p>
    </section>
  );
}
