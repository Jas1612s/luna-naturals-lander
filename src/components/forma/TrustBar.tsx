export function TrustBar() {
  const items = [
    { icon: "🏥", text: "Max Healthcare clinical partnership" },
    { icon: "🩺", text: "MD-supervised, every step" },
    { icon: "💊", text: "Authentic, prescribed medication" },
    { icon: "📱", text: "100% on your phone" },
  ];

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#072018",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6"
        style={{ maxWidth: "1600px" }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            {i > 0 && (
              <span
                className="hidden text-lg md:block"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                |
              </span>
            )}
            <span className="text-base">{item.icon}</span>
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
