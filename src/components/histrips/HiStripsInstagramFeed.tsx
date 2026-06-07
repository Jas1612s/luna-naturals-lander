import Image from "next/image";

const posts = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/histrips/instagram/post-${i + 1}.png`,
  alt: `HiStrips Instagram post ${i + 1}`,
}));

export function HiStripsInstagramFeed() {
  return (
    <>
      <style>{`
        .histrips-ig-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .histrips-ig-cell {
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
          background: #f0f0f0;
          position: relative;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .histrips-ig-cell:hover {
          transform: scale(1.02);
        }
        .histrips-ig-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .histrips-ig-cell:hover .histrips-ig-overlay {
          opacity: 1;
        }
        @media (max-width: 699px) {
          .histrips-ig-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section style={{ padding: "40px 0", background: "#ffffff" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "32px",
              marginTop: 0,
              color: "#2A2E16",
            }}
          >
            Follow us on Instagram{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E8603C, #C49B3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              @histrips
            </span>
          </h2>

          <div className="histrips-ig-grid">
            {posts.map((post, i) => (
              <div key={i} className="histrips-ig-cell">
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="histrips-ig-overlay">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.5"
                      fill="#ffffff"
                      stroke="none"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
