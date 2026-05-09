import { ChevronRightIcon } from "@/components/icons";

const CDN = "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit";

const card1Default = `${CDN}/Hims/homepage/2026/hims_nn-wp-hd-pen-default-d.png`;
const card1Hover = `${CDN}/Hims/homepage/2026/hims_nn-wp-hd-pen-hover-d`;
const card2Default = `${CDN}/Hims/homepage/2026/final/hims_nn-wp-2-default-d`;
const card2Person = `${CDN}/Hims/homepage/2026/final/hims_nn-wp-2-person-d`;
const card2Graph = `${CDN}/Hims/homepage/2026/final/hims_nn-wp-2-graph-d`;

const GRID_CDN = `${CDN}/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage/product-category-grid`;

const catTiles = [
  {
    href: "/g/i/sh",
    label: "Have better",
    accent: "sex",
    accentColor: "rgb(78,121,158)",
    img: `${GRID_CDN}/Hims_Homepage_Better_Sex_Default_240-3`,
  },
  {
    href: "/c/hl",
    label: "Regrow",
    accent: "hair",
    accentColor: "rgb(138,58,52)",
    img: `${GRID_CDN}/Hims_Homepage_Regrow_Hair_Default_480-2`,
  },
  {
    href: "/g/i/tt",
    label: "Boost",
    accent: "testosterone",
    accentColor: "rgb(109,141,158)",
    img: `${GRID_CDN}/Hims_Homepage_Boost_Testosterone_Supps_Default`,
  },
  {
    href: "/g/i/hc",
    label: "Get a",
    accent: "health check",
    accentColor: "rgb(191,142,94)",
    img: null,
  },
];

export function HeroATF() {
  return (
    <section className="bg-white pb-8 pt-4">
      <div className="mx-auto max-w-[1392px] px-6">
        {/* H1 */}
        <h1
          className="mb-6 text-[rgba(0,0,0,0.88)]"
          style={{
            fontSize: "57px",
            fontWeight: 400,
            lineHeight: "57px",
            letterSpacing: "-3.5625px",
          }}
        >
          The care you&apos;ve
          <br />
          always deserved
        </h1>

        {/* Featured cards row */}
        <div className="mb-3 flex gap-4">
          {/* Card 1 — Weight loss pen */}
          <a
            href="/#wm-quiz"
            className="group relative h-[199px] flex-1 cursor-pointer overflow-hidden rounded-3xl"
          >
            <img
              src={card1Default}
              alt="Weight loss injection pen"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={card1Hover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-5 z-10">
              <p className="text-xl font-medium">
                <span className="text-white">Start your </span>
                <span className="text-hims-amber">weight loss today</span>
              </p>
              <p className="mt-0.5 text-base text-white">
                Find your Rx match
              </p>
            </div>
            <div className="absolute bottom-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,255,255,0.8)]">
              <ChevronRightIcon className="h-4 w-4 text-[rgba(0,0,0,0.88)]" />
            </div>
          </a>

          {/* Card 2 — Weight loss graph */}
          <a
            href="/#wm-quiz"
            className="group relative h-[199px] flex-1 cursor-pointer overflow-hidden rounded-3xl bg-[#9A6D2A]"
          >
            <img
              src={card2Default}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={card2Person}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <img
              src={card2Graph}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-5 z-10">
              <p className="text-xl font-medium text-hims-amber">
                See how much weight you can lose
              </p>
              <p className="mt-0.5 text-base text-hims-amber">
                ↓ Lose up to 25%*
              </p>
            </div>
            <div className="absolute bottom-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,255,255,0.8)]">
              <ChevronRightIcon className="h-4 w-4 text-[rgba(0,0,0,0.88)]" />
            </div>
          </a>
        </div>

        {/* Category tiles row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {catTiles.map((tile) => (
            <a
              key={tile.href}
              href={tile.href}
              className="flex h-[100px] items-center justify-between rounded-2xl bg-hims-cream px-5 transition-transform duration-200 hover:scale-[1.02]"
            >
              <p className="text-lg text-[rgba(0,0,0,0.88)]">
                {tile.label}{" "}
                <span className="font-medium" style={{ color: tile.accentColor }}>
                  {tile.accent}
                </span>
              </p>
              {tile.img ? (
                <img
                  src={tile.img}
                  alt={tile.accent}
                  className="h-20 w-auto object-contain"
                />
              ) : (
                <div
                  className="h-20 w-20 rounded-full opacity-40"
                  style={{ backgroundColor: tile.accentColor }}
                />
              )}
              <span className="text-base text-[rgba(0,0,0,0.44)]">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
