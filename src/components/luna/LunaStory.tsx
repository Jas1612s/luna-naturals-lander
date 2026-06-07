interface StoryBlock {
  bg: string;
  label: string;
  heading: string;
  body: string;
  headingColor: string;
  bodyColor: string;
  cta?: boolean;
}

const storyBlocks: StoryBlock[] = [
  {
    bg: "#2a2e16",
    label: "WHAT WE DO",
    heading: "We're Selling Adventure",
    body: "Bugs ambush trails, crash campfire tales, and turn \"off-the-grid\" into \"off-your-game.\" Our gear isn't just repellent—it's a backstage pass to the wild. Whether you're summiting peaks, kayaking hidden rivers, or finally tackling that sunrise hike you've Instagram-stalked for months, we're here to keep bugs from stealing your spotlight.",
    headingColor: "#ffffff",
    bodyColor: "rgba(255,255,255,0.8)",
  },
  {
    bg: "#f4f4f4",
    label: "WHY WE EXIST",
    heading: "We're Selling Freedom",
    body: "Bugs are the ultimate buzzkill. They gatekeep forests, ruin picnics, and turn cozy nights into scratchfests. We're here to reclaim your time outdoors—with gear that's as tough as it is thoughtful. Because life's too short to hide indoors.",
    headingColor: "#2a2e16",
    bodyColor: "#555",
  },
  {
    bg: "#2a2e16",
    label: "OUR PROMISE",
    heading: "We're Selling Moments",
    body: "Mosquitoes can't tell time, but you can. That golden-hour picnic? Those rooftop laughs with friends? The backyard campout where your kid finally conquered their fear of the dark? These are the moments that stick. Our job? To make sure bugs don't.",
    headingColor: "#ffffff",
    bodyColor: "rgba(255,255,255,0.8)",
    cta: true,
  },
];

export function LunaStory() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .luna-story-heading {
            font-size: 32px !important;
          }
        }
      `}</style>
      {storyBlocks.map((block) => (
        <section
          key={block.label}
          style={{
            background: block.bg,
            padding: "100px 20px",
            fontFamily: "var(--font-jost)",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#f26a3e",
                marginBottom: "20px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {block.label}
            </p>
            <h2
              className="luna-story-heading"
              style={{
                fontSize: "48px",
                fontWeight: 700,
                color: block.headingColor,
                letterSpacing: "-1px",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              {block.heading}
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: block.bodyColor,
                lineHeight: 1.7,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {block.body}
            </p>
            {block.cta && (
              <a
                href="/luna/collections"
                style={{
                  display: "block",
                  width: "fit-content",
                  margin: "40px auto 0",
                  background: "#f26a3e",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "16px 48px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Shop Protection
              </a>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
