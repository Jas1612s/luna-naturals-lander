import Image from "next/image";
import { cn } from "@/lib/utils";

const videos = [
  { src: "/images/histrips/social/carlos-alcaraz.webp", handle: "@carlitosalcarazz" },
  { src: "/images/histrips/social/team-visma.webp", handle: "@teamvisma" },
  { src: "/images/histrips/social/video-3.webp", handle: "@juanlebron" },
  { src: "/images/histrips/social/taeke.webp", handle: "@taeke" },
  { src: "/images/histrips/social/video-5.webp", handle: "@histrips" },
];

function PlayButton() {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Play triangle */}
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        aria-hidden="true"
      >
        <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="#2A2E16" stroke="#2A2E16" strokeWidth="0.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

interface VideoCardProps {
  src: string;
  handle: string;
}

function VideoCard({ src, handle }: VideoCardProps) {
  return (
    <div
      style={{
        width: "175px",
        flexShrink: 0,
        aspectRatio: "9.6/16",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: "0 0 5px rgba(0,0,0,0.25)",
        background: "#111",
        scrollSnapAlign: "start",
      }}
    >
      {/* Thumbnail */}
      <Image
        src={src}
        alt={`${handle} video`}
        fill
        style={{ objectFit: "cover" }}
        sizes="175px"
      />

      {/* Athlete handle */}
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "10px",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: 700,
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      >
        {handle}
      </span>

      {/* Play button */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: 1,
        }}
      >
        <PlayButton />
      </div>
    </div>
  );
}

export function HiStripsSocialProof() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#2A2E16",
            margin: 0,
          }}
        >
          Loved by 150k+ athletes
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#888",
            marginTop: "4px",
            marginBottom: 0,
          }}
        >
          Over 30.4M Views On Instagram
        </p>
      </div>

      {/* Video cards */}
      <div
        className={cn("scrollbar-hide")}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "4px",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.handle} src={video.src} handle={video.handle} />
        ))}
      </div>
    </section>
  );
}
