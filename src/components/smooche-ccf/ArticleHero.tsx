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
            background: "#f5f7f4",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#1a2e1a",
          }}
        >
          Most read 2026
        </span>
        <span style={{ fontSize: "13px", color: "#999" }}>5 min read</span>
      </div>

      {/* Headline */}
      <h1
        className="text-2xl font-bold md:text-[32px]"
        style={{
          lineHeight: 1.2,
          color: "#1a2e1a",
          marginTop: "20px",
          fontWeight: 700,
        }}
      >
        My kids haven&apos;t had a single mosquito bite all summer &mdash; and I
        never spray them
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "16px",
          color: "#4a5d4a",
          lineHeight: 1.6,
          marginTop: "16px",
        }}
      >
        If you&apos;re tired of wrestling your kids with bug spray every time
        they go outside &mdash; and worried about the chemicals soaking into
        their skin &mdash; one mom&apos;s discovery might change your summer
        forever.
      </p>

      {/* Author */}
      <div
        className="flex items-center"
        style={{ marginTop: "24px", gap: "12px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/smooche-ccf/article-image-2.png"
          alt="Sarah Mitchell"
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
              color: "#1a2e1a",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Sarah Mitchell
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#4a5d4a",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            June 2, 2026
          </p>
        </div>
      </div>

      {/* Hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/smooche-ccf/article-image-1.jpg"
        alt="Kids playing outside with mosquito repellent patches"
        className="w-full rounded-lg object-cover"
        style={{ marginTop: "32px" }}
      />
    </header>
  );
}
