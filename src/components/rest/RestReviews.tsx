"use client";

const reviews = [
  {
    title: "Best sleep in a long time.",
    text: "I\u2019m so glad I finally splurged and spent money on this comforter. I get so hot at night that I have trouble sleeping and staying asleep and for the past two nights since I have the rest comforter, I have slept so well without waking up I will be ordering this in more colors.",
    author: "Ronnie E.",
    product: "Evercool\u00AE Comforter",
  },
  {
    title: "Life changing!",
    text: "This is the first time in my 71 years that I\u2019ve experienced restful sleep! Last Summer I was sleeping on top of ice packs\u2026now I sleep through the night without waking up in a pool of sweat.",
    author: "Gail K.",
    product: "Evercool\u00AE Comforter",
  },
  {
    title: "Middle age...",
    text: "I got this for my sister who\u2019s in her mid 50\u2019s, going through menopause. Needless to say her hot flashes have been unbearable, especially at night. She LOVES this comforter!",
    author: "Hai Q.",
    product: "Evercool\u00AE Comforter",
  },
];

function Stars() {
  return (
    <svg
      width="72"
      height="12"
      viewBox="0 0 72 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="5 out of 5 stars"
    >
      <path
        d="M6.30877 0L8.06334 4.21848L12.6175 4.58359L9.14772 7.55587L10.2078 12L6.30877 9.61848L2.40974 12L3.46983 7.55587L0 4.58359L4.55421 4.21848L6.30877 0Z"
        fill="#C49B3D"
      />
      <path
        d="M20.926 0L22.6805 4.21848L27.2347 4.58359L23.7649 7.55587L24.825 12L20.926 9.61848L17.0269 12L18.087 7.55587L14.6172 4.58359L19.1714 4.21848L20.926 0Z"
        fill="#C49B3D"
      />
      <path
        d="M35.5431 0L37.2977 4.21848L41.8519 4.58359L38.3821 7.55587L39.4422 12L35.5431 9.61848L31.6441 12L32.7042 7.55587L29.2344 4.58359L33.7886 4.21848L35.5431 0Z"
        fill="#C49B3D"
      />
      <path
        d="M50.1623 0L51.9169 4.21848L56.4711 4.58359L53.0012 7.55587L54.0613 12L50.1623 9.61848L46.2633 12L47.3233 7.55587L43.8535 4.58359L48.4077 4.21848L50.1623 0Z"
        fill="#C49B3D"
      />
      <path
        d="M64.7795 0L66.534 4.21848L71.0883 4.58359L67.6184 7.55587L68.6785 12L64.7795 9.61848L60.8804 12L61.9405 7.55587L58.4707 4.58359L63.0249 4.21848L64.7795 0Z"
        fill="#C49B3D"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verified"
    >
      <circle cx="3.5" cy="3.5" r="3.5" fill="#22C55E" />
      <path
        d="M2 3.5L3 4.5L5 2.5"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L1 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RestReviews() {
  return (
    <section className="relative z-10 overflow-hidden min-h-[600px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            srcSet="/images/rest/about-bg-desktop.webp"
            media="(min-width: 900px)"
          />
          <img
            src="/images/rest/about-bg-mobile.webp"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1E2110]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-[500px] text-[32px] leading-tight font-semibold text-white md:text-[40px]">
            Over 300,000+ People Have Transformed Their Sleep.
          </h2>
          <a
            href="#reviews"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
          >
            Read Reviews
            <ChevronRight />
          </a>
        </div>

        {/* Reviews carousel */}
        <div className="mt-12 flex snap-x gap-6 overflow-x-auto scrollbar-hide">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="min-w-[320px] shrink-0 snap-start p-6 md:min-w-[400px]"
            >
              {/* Title and stars */}
              <div>
                <h3 className="text-[18px] font-medium text-white">
                  {review.title}
                </h3>
                <div className="mt-2">
                  <Stars />
                </div>
              </div>

              {/* Review text */}
              <p className="mt-4 line-clamp-4 text-[14px] leading-[22px] text-white/80">
                {review.text}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div>
                  <span className="text-[14px] font-medium text-white">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] text-white/60">Verified</span>
                    <VerifiedBadge />
                  </div>
                </div>
                <span className="text-[12px] text-white/50">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
