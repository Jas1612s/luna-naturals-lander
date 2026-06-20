import Image from "next/image";

const logos = [
  {
    src: "/images/natpat/trailpatch/logo-womens-health.svg",
    alt: "Women's Health",
    order: 2,
  },
  {
    src: "/images/natpat/trailpatch/logo-delish.svg",
    alt: "Delish",
    order: 5,
  },
  {
    src: "/images/natpat/trailpatch/logo-usa-today.svg",
    alt: "USA Today",
    order: 6,
  },
  {
    src: "/images/natpat/trailpatch/logo-yahoo.svg",
    alt: "Yahoo",
    order: 1,
  },
  {
    src: "/images/natpat/trailpatch/logo-little-things.svg",
    alt: "Little Things",
    order: 3,
  },
  {
    src: "/images/natpat/trailpatch/logo-today.svg",
    alt: "Today",
    order: 4,
  },
];

export function TrailPatchFeaturedIn() {
  return (
    <section
      style={{
        padding: "clamp(25px, 4vw, 50px) 0",
      }}
    >
      {/* Title */}
      <h2
        className="text-center"
        style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize: "clamp(17px, 3vw, 32px)",
          fontWeight: 400,
          marginBottom: "1rem",
        }}
      >
        NATPAT Featured In:
      </h2>

      {/* Desktop logo row */}
      <ul
        className="hidden md:flex list-none justify-between items-center"
        style={{ padding: "0 2rem", margin: 0, maxWidth: "1046px", marginLeft: "auto", marginRight: "auto" }}
      >
        {logos.map((logo) => (
          <li key={logo.alt} style={{ padding: "15px" }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={60}
              style={{ objectFit: "contain", display: "block" }}
            />
          </li>
        ))}
      </ul>

      {/* Mobile 2×3 logo grid */}
      <ul
        className="grid md:hidden list-none"
        style={{
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: 0,
          margin: 0,
          maxWidth: "390px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {[...logos]
          .sort((a, b) => a.order - b.order)
          .map((logo) => (
            <li key={logo.alt} style={{ padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={50}
                style={{ objectFit: "contain", display: "block" }}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
