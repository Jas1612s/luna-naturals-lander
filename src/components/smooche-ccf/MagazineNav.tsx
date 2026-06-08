const NAV_ITEMS = [
  { label: "FASHION", active: false },
  { label: "BEAUTY", active: false },
  { label: "SKIN", active: true },
];

export function MagazineNav() {
  return (
    <nav
      className="w-full bg-white"
      style={{ borderBottom: "1px solid #e5e5e5" }}
      aria-label="Magazine navigation"
    >
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
              color: "#151515",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              paddingBottom: "10px",
              borderBottom: active ? "2px solid #151515" : "2px solid transparent",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
