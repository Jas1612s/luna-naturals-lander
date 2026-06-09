"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { LazyVideo } from "@/components/gruns/LazyVideo";

const testimonials = [
  {
    quote:
      "I just stick one on my arm before heading outside and forget about it. 12 hours later, zero bites. It\u2019s honestly the simplest thing I\u2019ve ever used.",
    name: "Jeremy H.",
    designation: "Subscriber Since 2025 \u2022 Verified Buyer",
    src: "/images/gruns/review-patch-arm.jpg",
  },
  {
    quote:
      "I was spending $40+ a month on sprays that barely worked. One box of these lasts the whole season for less than $15. The quality is incredible.",
    name: "Lisa C.",
    designation: "Outdoor Enthusiast \u2022 Verified Buyer",
    src: "/images/gruns/review-woman-box.jpg",
  },
  {
    quote:
      "My toddler thinks they\u2019re dinosaur stickers and wants to put them on herself every morning. Three weeks, zero bites. The fun designs are such a smart touch!",
    name: "Sarah M.",
    designation: "Mom of 2 \u2022 Verified Buyer",
    src: "/images/gruns/review-mom-toddler.jpg",
  },
  {
    quote:
      "Took these on a 4-day hiking trip. We used maybe 20 patches total for both of us. Not a single bite the entire trip. Absolute must-have for the outdoors.",
    name: "Rebecca D.",
    designation: "Adventure Couple \u2022 Verified Buyer",
    src: "/images/gruns/review-hikers.jpg",
  },
];

const ugcVideos = [
  { src: "/videos/gruns/ugc-102216.mp4", quote: "Zero bites all summer long" },
  { src: "/videos/gruns/ugc-102224.mp4", quote: "My kids beg me for these" },
  { src: "/videos/gruns/ugc-102233.mp4", quote: "Way better than spray" },
  { src: "/videos/gruns/ugc-102855.mp4", quote: "Our camping trip essential" },
  { src: "/videos/gruns/ugc-102903.mp4", quote: "Finally something that works" },
  { src: "/videos/gruns/ugc-102910.mp4", quote: "The whole family loves them" },
  { src: "/videos/gruns/ugc-102918.mp4", quote: "Never going back to DEET" },
  { src: "/videos/gruns/ugc-102925.mp4", quote: "Best purchase this year" },
];

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
    </svg>
  );
}

export function ReviewsTabs() {
  return (
    <section className="bg-[var(--gr-green-dark)] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Header */}
      <div className="text-center px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="var(--gr-accent)">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-white/60">4.8 stars from 50,000+ reviews</span>
        </div>

        <h2 className="gr-display italic text-3xl md:text-5xl text-white leading-tight">
          Join 50,000+ Families<br />Ditching the Spray
        </h2>
      </div>

      {/* Animated circular testimonials */}
      <div className="flex items-center justify-center px-4 md:px-6 mt-12 md:mt-16">
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "rgba(255,255,255,0.6)",
            testimony: "rgba(255,255,255,0.85)",
            arrowBackground: "rgba(255,255,255,0.15)",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "var(--gr-accent)",
          }}
          fontSizes={{
            name: "22px",
            designation: "13px",
            quote: "15px",
          }}
        />
      </div>

      {/* UGC video carousel */}
      <div className="mt-16 md:mt-20 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: "max-content" }}>
          {[...ugcVideos].reverse().map((vid, i) => (
            <div key={i} className="w-[200px] md:w-[220px] lg:w-[200px] shrink-0 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-[9/16] relative">
                <LazyVideo src={vid.src} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[var(--gr-accent)]/80 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-[var(--gr-dark)] leading-snug">
                  &ldquo;{vid.quote}&rdquo;
                </p>
                <div className="shrink-0 opacity-40">
                  <TikTokIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
