const NAV_ITEMS = [
  { label: "PARENTING", active: false },
  { label: "HEALTH", active: true },
  { label: "OUTDOORS", active: false },
];

export function MagazineNav() {
  return (
    <nav
      className="w-full"
      style={{ background: "#2d4a2d", borderBottom: "1px solid #3d5a3d" }}
      aria-label="Magazine navigation"
    >
      {/* Publication name */}
      <div
        className="mx-auto max-w-[900px] text-center"
        style={{ padding: "16px 20px 0" }}
      >
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          Nature Times
        </span>
      </div>

      {/* Category nav */}
      <div
        className="mx-auto flex max-w-[900px] items-center justify-center"
        style={{ padding: "12px 20px", gap: "32px" }}
      >
        {NAV_ITEMS.map(({ label, active }) => (
          <a
            key={label}
            href="#"
            className="relative transition-opacity hover:opacity-70"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              paddingBottom: "10px",
              borderBottom: active ? "2px solid #ffffff" : "2px solid transparent",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
