/**
 * Wave: light section above → dark green section below.
 * The SVG is split: top half = light color, bottom half = dark color. No gaps possible.
 */
export function WaveToDark({ top = "#F5F0E6" }: { top?: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block -my-px"
      style={{ height: "clamp(40px, 5vw, 60px)" }}
      preserveAspectRatio="none"
    >
      <rect width="1440" height="60" fill="#2E3A1A" />
      <path d="M0 0 L1440 0 L1440 30 C1200 55 960 10 720 30 C480 50 240 5 0 30Z" fill={top} />
    </svg>
  );
}

/**
 * Wave: dark green section above → light section below.
 */
export function WaveToLight({ bottom = "#FAF7F0" }: { bottom?: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block -my-px"
      style={{ height: "clamp(40px, 5vw, 60px)" }}
      preserveAspectRatio="none"
    >
      <rect width="1440" height="60" fill="#2E3A1A" />
      <path d="M0 30 C240 5 480 50 720 30 C960 10 1200 55 1440 30 L1440 60 L0 60Z" fill={bottom} />
    </svg>
  );
}
