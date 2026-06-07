import Image from "next/image";

const posts = [
  {
    category: "couples",
    image: "/images/histrips/blog/blog-1.webp",
    title: "How to Wake Up for Work Without Disturbing Your Spouse",
    excerpt:
      "If you wake earlier for work than your spouse does, your routine should help you leave the room quietly instead of pulling them into your morning.",
    readTime: "1 min read",
  },
  {
    category: "couples",
    image: "/images/histrips/blog/blog-2.webp",
    title: "Best Wake-Up Solution for Couples Sharing a Bed",
    excerpt:
      "The best wake-up solution for couples is one that respects both people's sleep, not just the schedule of the first person who needs to get up.",
    readTime: "1 min read",
  },
  {
    category: "couples",
    image: "/images/histrips/blog/blog-3.webp",
    title: "How Married Couples Can Improve Mornings With a Vibration Alarm",
    excerpt:
      "A better morning does not always require a complex routine. Sometimes it starts with removing one obvious source of friction: the alarm.",
    readTime: "1 min read",
  },
  {
    category: "couples",
    image: "/images/histrips/blog/blog-4.webp",
    title: "Best Alarm for Couples Where One Person Sleeps Much Heavier",
    excerpt:
      "When one person sleeps much heavier than the other, standard alarm clocks become a daily problem for both people in the relationship.",
    readTime: "1 min read",
  },
];

export function HiStripsBlog() {
  return (
    <>
      <style>{`
        .histrips-blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .histrips-blog-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .histrips-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.13);
        }
        @media (max-width: 999px) {
          .histrips-blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 699px) {
          .histrips-blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        style={{
          background: "#ffffff",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#666666",
              fontWeight: 500,
              marginBottom: "12px",
              marginTop: 0,
            }}
          >
            FROM THE JOURNAL
          </p>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#2A2E16",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Featured Posts
          </h2>

          <div className="histrips-blog-grid">
            {posts.map((post) => (
              <article key={post.title} className="histrips-blog-card">
                {/* Image */}
                <div
                  style={{
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#009BF1",
                      fontWeight: 500,
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    {post.category}
                  </p>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#2A2E16",
                      lineHeight: 1.3,
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666666",
                      lineHeight: 1.5,
                      marginBottom: "12px",
                      marginTop: 0,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#999999",
                      margin: 0,
                    }}
                  >
                    {post.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
