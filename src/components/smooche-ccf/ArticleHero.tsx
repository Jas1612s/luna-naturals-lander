export function ArticleHero() {
  return (
    <header
      className="mx-auto w-full"
      style={{ maxWidth: "700px", padding: "40px 20px 0" }}
    >
      {/* Badges row */}
      <div className="flex items-center" style={{ gap: "12px" }}>
        <span
          className="inline-block rounded-full"
          style={{
            background: "#f7f7f7",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#151515",
          }}
        >
          Most read 2025
        </span>
        <span style={{ fontSize: "13px", color: "#999" }}>4 min read</span>
      </div>

      {/* Headline */}
      <h1
        className="text-2xl font-bold md:text-[32px]"
        style={{
          lineHeight: 1.2,
          color: "#000",
          marginTop: "20px",
          fontWeight: 700,
        }}
      >
        My foundation shade used to make me look 10 years older
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          lineHeight: 1.6,
          marginTop: "16px",
        }}
      >
        If you&apos;ve started noticing your foundation turning orange or gray a
        few hours after application&mdash;and wish you could find a shade that
        actually stays true&mdash;this might be exactly what you&apos;ve been
        looking for.
      </p>

      {/* Author */}
      <div
        className="flex items-center"
        style={{ marginTop: "24px", gap: "12px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/smooche-ccf/article-image-2.png"
          alt="Michelle Mason"
          width={48}
          height={48}
          className="rounded-full object-cover"
          style={{ width: "48px", height: "48px" }}
        />
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#151515",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Michelle Mason
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#555",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            May 29, 2025
          </p>
        </div>
      </div>
    </header>
  );
}
