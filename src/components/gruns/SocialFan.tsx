"use client";

const ugcVideos = [
  "/videos/gruns/ugc-102216.mp4",
  "/videos/gruns/ugc-102224.mp4",
  "/videos/gruns/ugc-102233.mp4",
  "/videos/gruns/ugc-102855.mp4",
  "/videos/gruns/ugc-102903.mp4",
  "/videos/gruns/ugc-102910.mp4",
  "/videos/gruns/ugc-102918.mp4",
  "/videos/gruns/ugc-102925.mp4",
];

export function SocialFan() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-16 md:py-20">

      {/* Horizontal scrolling UGC video carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: "max-content" }}>
          {ugcVideos.map((src, i) => (
            <div
              key={i}
              className="w-[200px] md:w-[240px] shrink-0 aspect-[9/16] rounded-2xl overflow-hidden bg-[var(--gr-green-dark)]"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
