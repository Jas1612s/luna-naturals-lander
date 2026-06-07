import Image from "next/image";

const circularImageStyle = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "inline-block",
  verticalAlign: "middle" as const,
  margin: "0 8px",
};

export function ScentTextSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration — left lavender flower */}
      <Image
        src="/images/everymood/left1bakcgroundimage.webp"
        alt=""
        width={250}
        height={250}
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          bottom: -40,
          width: 250,
          height: "auto",
          pointerEvents: "none",
        }}
      />

      {/* Background decoration — right yellow-green circle */}
      <Image
        src="/images/everymood/backgroundvector3.webp"
        alt=""
        width={120}
        height={120}
        aria-hidden
        style={{
          position: "absolute",
          right: -60,
          top: "50%",
          width: 120,
          height: "auto",
          pointerEvents: "none",
        }}
      />

      {/* Main text layout */}
      <div className="scent-text-content">
        <span>Scent your way </span>
        <Image
          src="/images/everymood/text-with-image-1-min.jpg_1_667666f8-4408-4a11-b19c-8f560d623672.webp"
          alt="Scent visual 1"
          width={80}
          height={80}
          style={circularImageStyle}
        />
        <span> and into next-gen</span>
        <br />
        <Image
          src="/images/everymood/text-with-image-1-min.jpg_2_4b04efee-73cf-40f7-9c4a-4b58a9ff8a6d.webp"
          alt="Scent visual 2"
          width={80}
          height={80}
          style={circularImageStyle}
        />
        <span> emotional optimization. </span>
        <Image
          src="/images/everymood/text-with-image-1-min.jpg_4.webp"
          alt="Scent visual 3"
          width={80}
          height={80}
          style={circularImageStyle}
        />
      </div>

      <style>{`
        .scent-text-content {
          max-width: 900px;
          margin: 0 auto;
          color: #999;
          font-size: 40px;
          font-weight: 400;
          line-height: 56px;
          letter-spacing: -1.6px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .scent-text-content {
            font-size: 28px;
            line-height: 40px;
          }
          .scent-text-content img {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
