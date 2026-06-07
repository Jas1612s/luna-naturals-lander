export function RestPressLogos() {
  const logos = [
    { name: "Good Housekeeping", width: 120 },
    { name: "Dwell", width: 60 },
    { name: "Men's Health", width: 100 },
    { name: "REAL SIMPLE", width: 100 },
    { name: "Allure", width: 60 },
  ];

  const renderLogo = (logo: { name: string; width: number }, index: number) => (
    <svg
      key={`${logo.name}-${index}`}
      width={logo.width}
      height={24}
      viewBox={`0 0 ${logo.width} 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 shrink-0 opacity-60"
      aria-label={logo.name}
    >
      <text
        x={logo.width / 2}
        y="17"
        textAnchor="middle"
        fill="#2A2E16"
        fontSize="13"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        {logo.name}
      </text>
    </svg>
  );

  return (
    <section className="relative z-10 overflow-hidden border-y border-[#D4D1C4] bg-white py-12">
      <div className="rest-press-track flex items-center gap-[60px]">
        {logos.map((logo, i) => renderLogo(logo, i))}
        {logos.map((logo, i) => renderLogo(logo, i + logos.length))}
      </div>
    </section>
  );
}
