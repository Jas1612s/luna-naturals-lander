const VIDEOS = [
  { thumb: "/images/smooche/elpc-5.png", alt: "Customer unboxing Lick lollipops" },
  { thumb: "/images/smooche/lick-lifestyle-2.png", alt: "Customer trying Lick lollipop" },
  { thumb: "/images/smooche/elpc-7.png", alt: "Customer review of Lick lollipops" },
];

function PlayButton() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 48,
          height: 48,
          backgroundColor: "rgba(255,255,255,0.9)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
          <path d="M2 1.5l14 8.5-14 8.5V1.5z" fill="#B01E3C" stroke="#B01E3C" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function UGCVideosSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          className="text-center"
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#3D1018",
            marginBottom: 32,
          }}
        >
          Loved by 60,000+ happy lips
        </h2>

        {/* Video thumbnails grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-5" style={{ maxWidth: 700, margin: "0 auto" }}>
          {VIDEOS.map((video, i) => (
            <button
              key={i}
              type="button"
              className="relative overflow-hidden rounded-xl focus:outline-none group"
              style={{ aspectRatio: "9 / 16", backgroundColor: "#F5EAE4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumb}
                alt={video.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <PlayButton />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
