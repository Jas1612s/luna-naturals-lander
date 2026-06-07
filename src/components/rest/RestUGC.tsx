"use client";

import { useRef, useCallback } from "react";

interface VideoCard {
  title: string;
  video: string;
  thumb: string;
}

const videos: VideoCard[] = [
  {
    title: "Real Review: Changed for The Better!",
    video: "/videos/rest/ugc-1.mp4",
    thumb: "/images/rest/ugc-thumb-1.webp",
  },
  {
    title: "Perfect Temperature All Night Long",
    video: "/videos/rest/ugc-2.mp4",
    thumb: "/images/rest/ugc-thumb-2.webp",
  },
  {
    title: "Evercool\u00ae IRL",
    video: "/videos/rest/ugc-3.mp4",
    thumb: "/images/rest/ugc-thumb-3.webp",
  },
  {
    title: "Cooling Technology That Lasts",
    video: "/videos/rest/ugc-4.mp4",
    thumb: "/images/rest/ugc-thumb-4.webp",
  },
  {
    title: "Real Review: 2025's Best Purchase",
    video: "/videos/rest/ugc-5.mp4",
    thumb: "/images/rest/ugc-thumb-5.webp",
  },
];

function UGCCard({ card }: { card: VideoCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play().catch(() => {
      // Autoplay may be blocked by the browser
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-[12px] bg-[#1E2110]"
      style={{ aspectRatio: "9/16" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={card.video}
        poster={card.thumb}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      {/* Bottom overlay with title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
        <p className="text-[12px] font-medium leading-tight text-white">
          {card.title}
        </p>
      </div>
      {/* Play button on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M1 1L15 9L1 17V1Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function RestUGC() {
  return (
    <section className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="mb-10 text-center text-[28px] font-semibold text-[#2A2E16] md:text-[32px]">
          Trusted by experts and all kinds of sleepers.
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {videos.map((card) => (
            <UGCCard key={card.video} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
