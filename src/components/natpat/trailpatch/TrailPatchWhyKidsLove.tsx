import Image from "next/image";

const reasons = [
  {
    id: 1,
    title: "Designs Kids Love!",
    desc: "Printed with fun characters just for kids.",
    icon: "/images/natpat/trailpatch/icon-pink-smiley.svg",
    col: "left" as const,
  },
  {
    id: 2,
    title: "Convenient to Use!",
    desc: "Easily stick onto hats, shirts, or backpacks for all-day enjoyment and protection.",
    icon: "/images/natpat/trailpatch/icon-pink-shirt.svg",
    col: "right" as const,
  },
  {
    id: 3,
    title: "Amazing Smells",
    desc: "Natural oils like Peppermint and Cedarwood protect against ticks.",
    icon: "/images/natpat/trailpatch/icon-pink-smells.svg",
    col: "left" as const,
  },
  {
    id: 4,
    title: "Effective For 8 Hours",
    desc: "Never worry about reapplying bug spray again.",
    icon: "/images/natpat/trailpatch/icon-pink-clock.svg",
    col: "right" as const,
  },
];

const leftReasons = reasons.filter((r) => r.col === "left");
const rightReasons = reasons.filter((r) => r.col === "right");

export function TrailPatchWhyKidsLove() {
  return (
    <section className="tp-why-section">
      <style>{`
        .tp-why-section {
          padding: 50px 0;
        }
        @media (max-width: 767px) {
          .tp-why-section {
            background-image: url('/images/natpat/trailpatch/wave-bg.png'), linear-gradient(0deg, #fff 50%, var(--tp-pink) 50%);
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            padding: 70px 0 0 !important;
          }
        }
        .tp-reason-icon {
          max-width: 75px;
        }
        @media (max-width: 1200px) {
          .tp-reason-icon {
            max-width: 60px;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

          {/* Pink sticker — desktop only */}
          <div className="hidden md:flex" style={{ justifyContent: "center", marginBottom: "0" }}>
            <Image
              src="/images/natpat/trailpatch/sticker-pink.png"
              alt=""
              aria-hidden="true"
              width={105}
              height={105}
              style={{ maxWidth: "105px", width: "100%", height: "auto" }}
            />
          </div>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              textAlign: "center",
              margin: "30px 0",
            }}
            className="text-[17px] md:text-[32px]"
          >
            Here&apos;s Why Kids Love NatPat
          </h2>

          {/* Mobile image — mobile only */}
          <div
            className="flex md:hidden"
            style={{ justifyContent: "center", margin: "10px auto 40px" }}
          >
            <Image
              src="/images/natpat/trailpatch/why-kids-love-mb.png"
              alt="Why Kids Love NatPat"
              width={420}
              height={420}
              style={{ width: "100%", maxWidth: "420px", height: "auto" }}
            />
          </div>

          {/* Desktop reasons grid — desktop only */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "1fr 530px 1fr",
              backgroundImage: "url('/images/natpat/trailpatch/kids-tick-pack-bg.png')",
              backgroundSize: "530px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "100px 0",
            }}
          >
            {/* Left column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", justifyContent: "center" }}>
              {leftReasons.map((reason) => (
                <div
                  key={reason.id}
                  style={{
                    border: "2px solid var(--tp-pink)",
                    padding: "15px 50px 15px 25px",
                    borderRadius: "10px",
                    height: "131px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: "0 0 4px",
                    }}
                  >
                    {reason.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {reason.desc}
                  </p>
                  {/* Icon on right edge */}
                  <Image
                    src={reason.icon}
                    alt=""
                    aria-hidden="true"
                    width={75}
                    height={75}
                    className="tp-reason-icon"
                    style={{
                      position: "absolute",
                      right: "-37.5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Center gap — pack image is the background */}
            <div />

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", justifyContent: "center" }}>
              {rightReasons.map((reason) => (
                <div
                  key={reason.id}
                  style={{
                    border: "2px solid var(--tp-pink)",
                    padding: "15px 25px 15px 50px",
                    borderRadius: "10px",
                    height: "131px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: "0 0 4px",
                    }}
                  >
                    {reason.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), Barlow, sans-serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {reason.desc}
                  </p>
                  {/* Icon on left edge */}
                  <Image
                    src={reason.icon}
                    alt=""
                    aria-hidden="true"
                    width={75}
                    height={75}
                    className="tp-reason-icon"
                    style={{
                      position: "absolute",
                      left: "-37.5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
    </section>
  );
}
