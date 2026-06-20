import Image from "next/image";

const navLinks = [
  { label: "Our Story", href: "#OurStory" },
  { label: "Advantages", href: "#Advantages" },
  { label: "Our TrailPatch", href: "#OurTrailPatch" },
  { label: "Reviews", href: "#Reviews" },
  { label: "Wholesale Enquiries", href: "#Wholesale" },
];

const heroBullets = [
  {
    icon: "/images/natpat/trailpatch/icon-natural.svg",
    text: "100% Natural Tick Solution",
  },
  {
    icon: "/images/natpat/trailpatch/icon-baby.svg",
    text: "Protect Your Kids Without Chemicals",
  },
  {
    icon: "/images/natpat/trailpatch/icon-smile-face.svg",
    text: "Say Hello To A Stress-Free Summer",
  },
];

const footerItems = [
  { icon: "/images/natpat/trailpatch/icon-return.svg", label: "Easy Returns" },
  {
    icon: "/images/natpat/trailpatch/icon-whatsapp.svg",
    label: "24/7 Customer Service",
  },
  {
    icon: "/images/natpat/trailpatch/icon-cart.svg",
    label: "100% Secure Checkout",
  },
  {
    icon: "/images/natpat/trailpatch/icon-shipping.svg",
    label: "Free Shipping Worldwide",
  },
];

export function TrailPatchHero() {
  return (
    <div>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div
        style={{
          background: "#2b2b2b",
          color: "#fff",
          padding: "10px 16px",
          fontSize: "13px",
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontWeight: 400,
          lineHeight: 1.4,
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {/* Left chevron */}
          <button
            aria-label="Previous announcement"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "4px",
              fontSize: "16px",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1L1 7l6 6" />
            </svg>
          </button>

          {/* Announcement text */}
          <span style={{ textAlign: "center" }}>
            A note to our community on{" "}
            <strong style={{ fontWeight: 700 }}>infant formula safety</strong>{" "}
            in light of recent news.{" "}
            <span style={{ marginLeft: "2px" }}>&rarr;</span>
          </span>

          {/* Right chevron */}
          <button
            aria-label="Next announcement"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "4px",
              fontSize: "16px",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e5e5",
        }}
        className="w-full"
      >
        <div
          style={{
            padding: "14px 20px",
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Hamburger menu */}
          <button
            aria-label="Open menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "28px",
            }}
          >
            <span style={{ display: "block", height: "2px", background: "#2b2b2b", width: "100%", borderRadius: "1px" }} />
            <span style={{ display: "block", height: "2px", background: "#2b2b2b", width: "100%", borderRadius: "1px" }} />
            <span style={{ display: "block", height: "2px", background: "#2b2b2b", width: "100%", borderRadius: "1px" }} />
          </button>

          {/* Logo placeholder — replace with actual logo image */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <span
              style={{
                fontFamily: "cursive, serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#2b2b2b",
                letterSpacing: "-0.5px",
              }}
            >
              luna naturals
            </span>
          </div>

          {/* User icon */}
          <button
            aria-label="Account"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b2b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section
        style={{
          background: "var(--tp-pink)",
          position: "relative",
          overflow: "hidden",
        }}
        className="pt-[50px] pb-[150px] max-[767px]:pt-[30px] max-[767px]:pb-[10px]"
      >
        {/* Desktop floating image — top right */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            maxWidth: "500px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/natpat/trailpatch/kids-ticks-float-top.png"
            alt=""
            aria-hidden="true"
            width={500}
            height={500}
            className="object-contain max-[1199px]:max-w-[450px] max-[1059px]:max-w-[360px]"
            style={{ display: "block" }}
          />
        </div>

        {/* Desktop floating image — bottom left */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: 15,
            left: 0,
            width: "500px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/natpat/trailpatch/kids-ticks-float-left.png"
            alt=""
            aria-hidden="true"
            width={500}
            height={500}
            className="object-contain max-[1199px]:max-w-[450px] max-[1059px]:max-w-[400px]"
            style={{ display: "block" }}
          />
        </div>

        {/* Hero content — above footer bar */}
        <div
          className="relative max-w-[900px] mx-auto px-5 flex flex-col items-center"
          style={{ zIndex: 2 }}
        >
          {/* Title */}
          <h1
            className="text-center hidden md:block"
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "70px",
              fontWeight: 400,
              color: "var(--tp-white)",
              lineHeight: 1.05,
              margin: "0 0 30px",
            }}
          >
            100% Safe, Eco-Friendly Tick Protection
          </h1>

          {/* Mobile title */}
          <h1
            className="text-center block md:hidden"
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "26px",
              fontWeight: 600,
              color: "var(--tp-white)",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Designed with Safety in Mind, Eco-Conscious Tick Protection
          </h1>

          {/* Bullet list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "30px auto",
              color: "var(--tp-white)",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            {heroBullets.map((item) => (
              <li
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                  fontFamily: "var(--font-barlow), Barlow, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
                className="max-[767px]:text-[15px]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="flex-shrink-0 object-contain"
                />
                {item.text}
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="#OurTrailPatch"
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', 'DIN Condensed', sans-serif",
              fontSize: "36px",
              fontWeight: 600,
              color: "var(--tp-white)",
              background: "var(--tp-blue)",
              padding: "13px 20px 8px",
              borderRadius: "50px",
              maxWidth: "345px",
              width: "100%",
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
            className="hover:opacity-90 transition-opacity max-[767px]:text-[25px]"
          >
            Get Yours Now!
          </a>

          {/* Mobile image — overlaps next section */}
          <div
            className="block md:hidden mt-6"
            style={{
              width: "100%",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "-80px",
            }}
          >
            <Image
              src="/images/natpat/trailpatch/kids-ticks-mb.png"
              alt="Kids tick protection"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Mobile "Learn More" link */}
          <div
            className="flex md:hidden flex-col items-center mt-6"
            style={{ marginBottom: "20px" }}
          >
            <a
              href="#OurStory"
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', 'DIN Condensed', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "var(--tp-white)",
                textDecoration: "none",
                textTransform: "uppercase",
                textAlign: "center",
                letterSpacing: "0.03em",
              }}
            >
              Learn More
            </a>
            <Image
              src="/images/natpat/trailpatch/icon-arrow-down.svg"
              alt="scroll down"
              width={24}
              height={24}
              className="mt-1 object-contain"
            />
          </div>
        </div>

        {/* ── HERO FOOTER (desktop only) ── */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundImage:
              "url('/images/natpat/trailpatch/pink-wave.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            padding: "90px 0 25px",
            zIndex: 3,
          }}
        >
          <div
            className="max-w-[1200px] mx-auto px-5 flex items-center justify-center"
            style={{ flexWrap: "wrap" }}
          >
            {footerItems.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  borderRight:
                    idx < footerItems.length - 1
                      ? "1px solid var(--tp-white)"
                      : "none",
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "14px",
                  color: "var(--tp-white)",
                  fontWeight: 400,
                }}
                className="max-[990px]:text-[12px]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  style={{ marginRight: "20px" }}
                  className="flex-shrink-0 object-contain"
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
