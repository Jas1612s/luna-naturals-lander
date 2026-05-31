const MESSAGE = "Secret Deals: 60% OFF + FREE Mystery Gift";

const marqueeItem = (
  <span className="flex items-center gap-8 px-8">
    <span>{MESSAGE}</span>
    <span aria-hidden="true">✦</span>
    <span>{MESSAGE}</span>
    <span aria-hidden="true">✦</span>
  </span>
);

export function AnnouncementBar() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#5A1726", height: "40px" }}
      role="banner"
      aria-label="Promotional announcement"
    >
      <div className="flex h-full items-center">
        {/* sm-marquee-track is defined in globals.css and runs sm-marquee 15s linear infinite */}
        <div className="sm-marquee-track whitespace-nowrap" aria-hidden="true">
          {/* Copy 1 */}
          <span
            className="inline-flex items-center gap-10"
            style={{
              color: "#C8A45C",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1px",
              paddingRight: "64px",
            }}
          >
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
          </span>
          {/* Copy 2 — identical duplicate for seamless loop */}
          <span
            className="inline-flex items-center gap-10"
            style={{
              color: "#C8A45C",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1px",
              paddingRight: "64px",
            }}
          >
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
            <span>{MESSAGE}</span>
            <span className="opacity-50">✦</span>
          </span>
        </div>
        {/* Accessible text for screen readers */}
        <p className="sr-only">{MESSAGE}</p>
      </div>
    </div>
  );
}
