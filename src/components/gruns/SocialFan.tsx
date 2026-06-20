"use client";

import { useRef, useState, useCallback } from "react";

const ugcVideos = [
  { src: "/videos/gruns/ugc-102216.mp4", poster: "/images/gruns/ugc-102216-poster.webp" },
  { src: "/videos/gruns/ugc-102224.mp4", poster: "/images/gruns/ugc-102224-poster.webp" },
  { src: "/videos/gruns/ugc-102233.mp4", poster: "/images/gruns/ugc-102233-poster.webp" },
  { src: "/videos/gruns/ugc-102855.mp4", poster: "/images/gruns/ugc-102855-poster.webp" },
  { src: "/videos/gruns/ugc-102903.mp4", poster: "/images/gruns/ugc-102903-poster.webp" },
  { src: "/videos/gruns/ugc-102910.mp4", poster: "/images/gruns/ugc-102910-poster.webp" },
  { src: "/videos/gruns/ugc-102918.mp4", poster: "/images/gruns/ugc-102918-poster.webp" },
  { src: "/videos/gruns/ugc-102925.mp4", poster: "/images/gruns/ugc-102925-poster.webp" },
];

function ClickToPlayVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={toggle}>
      <video
        ref={ref}
        src={playing ? src : undefined}
        preload="none"
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster={poster}
      />
      {/* Play button overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SocialFan() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-16 md:py-20">

      {/* Horizontal scrolling UGC video carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: "max-content" }}>
          {ugcVideos.map((vid, i) => (
            <div
              key={i}
              className="w-[200px] md:w-[240px] shrink-0 aspect-[9/16] rounded-2xl overflow-hidden bg-[var(--gr-green-dark)]"
            >
              <ClickToPlayVideo src={vid.src} poster={vid.poster} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
