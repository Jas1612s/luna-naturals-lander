import {
  ShieldCheck,
  Clock,
  Star,
  Check,
  X,
  ThumbsUp,
  ThumbsDown,
  Trophy,
  FlaskConical,
  Wind,
  Baby,
} from "lucide-react";

export const metadata = {
  title:
    "We Tested the 5 Most Popular Kids' Bug Sprays. Here's the Honest Winner. | Luna Naturals",
  description:
    "A panel of families put the best-selling children's repellents through a full summer of real-world use. We scored each on protection, skin-safety, smell, and ease of use. One stood out.",
};

/* ───── Score Badge ───── */
function ScoreBadge({ score }: { score: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl px-4 py-3 flex-shrink-0"
      style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
    >
      <span className="gr-display text-2xl font-bold leading-none">{score}</span>
      <span className="text-[10px] tracking-wider uppercase mt-1 opacity-70">out of 5</span>
    </div>
  );
}

/* ───── Ranked Entry ───── */
function RankedEntry({
  rank,
  name,
  tag,
  score,
  winner,
  verdict,
  pros,
  cons,
}: {
  rank: number;
  name: string;
  tag: string;
  score: string;
  winner?: boolean;
  verdict: string;
  pros: string[];
  cons: string[];
}) {
  return (
    <div
      className="rounded-2xl border p-6 md:p-7"
      style={
        winner
          ? {
              borderColor: "var(--gr-accent)",
              backgroundColor: "var(--gr-white)",
              boxShadow: "0 0 0 1px var(--gr-accent)",
            }
          : { borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }
      }
    >
      <div className="flex items-start gap-4">
        <div
          className="gr-display w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
          style={
            winner
              ? { backgroundColor: "var(--gr-accent)", color: "var(--gr-white)" }
              : { backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }
          }
        >
          {rank}
        </div>
        <div className="flex-1 min-w-0">
          {winner && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2"
              style={{ backgroundColor: "var(--gr-accent-light)", color: "var(--gr-green-dark)" }}
            >
              <Trophy className="w-3 h-3" /> Our Winner
            </span>
          )}
          <h3 className="gr-display text-lg md:text-xl font-bold leading-tight" style={{ color: "var(--gr-dark)" }}>
            {name}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--gr-green-mid)" }}>{tag}</p>
        </div>
        <ScoreBadge score={score} />
      </div>

      <p className="text-[15px] leading-relaxed mt-4" style={{ color: "var(--gr-sage)" }}>
        {verdict}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        <div>
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--gr-green-mid)" }}>
            <ThumbsUp className="w-3.5 h-3.5" /> Pros
          </p>
          <ul className="space-y-1.5">
            {pros.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--gr-sage)" }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gr-green-mid)" }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-red-700">
            <ThumbsDown className="w-3.5 h-3.5" /> Cons
          </p>
          <ul className="space-y-1.5">
            {cons.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--gr-sage)" }}>
                <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ───── Testimonial Card ───── */
function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-xl border p-6" style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed italic mb-3" style={{ color: "var(--gr-sage)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{author}</p>
      <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>Verified Purchase</p>
    </div>
  );
}

/* ───── Image Placeholder ───── */
function ImagePlaceholder({ label, ratio = "aspect-[3/2]" }: { label: string; ratio?: string }) {
  return (
    <div
      className={`${ratio} flex items-center justify-center text-sm font-medium border border-dashed rounded-xl my-8`}
      style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
    >
      [ IMAGE COMING SOON &mdash; {label} ]
    </div>
  );
}

const CART_URL =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

export default function Tested5Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--gr-cream)" }}>
      {/* ── Top Bar ── */}
      <div
        className="text-center py-2.5 px-4 text-xs font-semibold tracking-wider"
        style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
      >
        FREE SHIPPING ON ORDERS OVER $35 &mdash; USE CODE BUGFREE FOR 15% OFF
      </div>

      {/* ── Article Header ── */}
      <header className="max-w-[720px] mx-auto px-5 pt-10 md:pt-12">
        <span
          className="inline-block text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
          style={{ backgroundColor: "var(--gr-accent-light)", color: "var(--gr-green-dark)" }}
        >
          Tested &amp; Ranked
        </span>
        <h1 className="gr-display text-[26px] md:text-[42px] font-bold leading-[1.12] mb-4" style={{ color: "var(--gr-green-dark)" }}>
          We Tested the 5 Most Popular Kids&rsquo; Bug Sprays. Here&rsquo;s the Honest Winner.
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          We put the best-selling children&rsquo;s repellents through a full summer of real-world use &mdash; backyards, campgrounds, and one very buggy lake house. We scored each on protection, skin-safety, smell, and ease of use. One stood out.
        </p>
        <div className="flex items-center gap-4 pb-8 border-b flex-wrap" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            RT
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>The Outdoor Family Review Team</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>June 2026</p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>8 min read</p>
        </div>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[720px] mx-auto px-5 mt-8 mb-2">
        <p className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gr-sage)" }}>
          As Seen In
        </p>
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap opacity-50">
          {["Forbes", "NBC", "Today", "People", "Women's Health", "CBS"].map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-bold tracking-wide whitespace-nowrap"
              style={{ color: "var(--gr-dark)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="max-w-[720px] mx-auto px-5 my-8">
        <div
          className="rounded-xl aspect-video flex items-center justify-center text-sm font-medium border border-dashed"
          style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
        >
          [ IMAGE COMING SOON &mdash; Five bug repellents lined up on a picnic table ]
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Every spring, the same question pops up in our family group chats: <strong style={{ color: "var(--gr-dark)" }}>which bug repellent is actually worth buying for the kids?</strong> The shelf is crowded, the labels are confusing, and half of us would rather not coat a four-year-old in something we can&rsquo;t pronounce.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          So this year we stopped guessing. A group of parents on our review team picked the five best-selling children&rsquo;s repellents we kept seeing in carts and recommended in mom groups, and we used them all summer long &mdash; on the same kids, in the same backyards, on the same camping trips. This is what we found, ranked from our least to most favorite, with the winner at the top.
        </p>
        <p className="mb-8" style={{ color: "var(--gr-sage)" }}>
          One quick, honest note up front: the DEET products on this list are effective and EPA-registered. They work. Our ranking simply reflects what <em>our families</em> preferred living with all season &mdash; and many of us wanted to keep DEET off little kids if a plant-based option could hold its own.
        </p>

        {/* How We Tested */}
        <div className="rounded-2xl p-7 md:p-9 my-10" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <h2 className="gr-display text-xl md:text-2xl font-bold mb-2 flex items-center gap-2" style={{ color: "var(--gr-green-dark)" }}>
            <FlaskConical className="w-6 h-6" style={{ color: "var(--gr-accent)" }} /> How We Tested
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--gr-sage)" }}>
            This wasn&rsquo;t a lab. It was a panel of families using each product across one full summer of normal life &mdash; evening backyards, weekend campgrounds, and a week at a lake house where the mosquitoes clearly run the place. We didn&rsquo;t count bites with a microscope or claim precise percentages. We scored each product the way a parent actually judges one, across four things that matter:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Clock, label: "Protection that lasts", detail: "Did it hold up through a long evening, or fade fast?" },
              { Icon: ShieldCheck, label: "Skin-safety & ingredients", detail: "What's in it, and where does it go on a child?" },
              { Icon: Wind, label: "Smell & feel", detail: "Heavy chemical cloud and sticky film, or barely-there?" },
              { Icon: Baby, label: "Ease of use with kids", detail: "Could we actually get a squirming toddler covered?" },
            ].map(({ Icon, label, detail }) => (
              <div
                key={label}
                className="border rounded-xl p-5"
                style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "var(--gr-accent-light)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{label}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: "var(--gr-sage)" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stat Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl p-6 my-10" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          {[
            { value: "DEET-free", label: "Winner's Formula" },
            { value: "12 hrs", label: "Patches Last Up To" },
            { value: "0", label: "Parabens" },
            { value: "4.9", label: "Star Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gr-display text-xl md:text-[26px] font-bold leading-none" style={{ color: "var(--gr-green-dark)" }}>
                {stat.value}
              </p>
              <p className="text-[11px] mt-1 uppercase tracking-wider font-medium" style={{ color: "var(--gr-sage)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* The Ranked List */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-2 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          The Ranking: 5 Repellents, One Honest Winner
        </h2>
        <p className="mb-7" style={{ color: "var(--gr-sage)" }}>
          We&rsquo;ve listed all five below with each one&rsquo;s score, our plain-English verdict, and the pros and cons our testers actually felt. Counting up to number one.
        </p>

        <div className="space-y-6 mb-6">
          <RankedEntry
            rank={1}
            winner
            name="Luna Naturals"
            tag="DEET-free OLE spray + clothing patches for kids"
            score="4.9"
            verdict="This was the clear favorite across our whole panel. The spray uses Oil of Lemon Eucalyptus with citronella, lemongrass, and eucalyptus and held up well through long backyard evenings for us, while the patches stick to clothing rather than skin — which the parents of sensitive-skin kids loved. It's DEET-free and paraben-free, the scent is light and plant-forward, and honestly the kids fought us the least over it. For families who'd rather skip DEET on little ones, nothing else came close in our testing."
            pros={[
              "Real plant-based protection that lasted for us",
              "Patch option goes on clothing, not skin",
              "Light scent and no DEET or parabens",
            ]}
            cons={["Tends to sell out during peak summer"]}
          />
          <RankedEntry
            rank={2}
            name="Babyganics Natural Insect Spray"
            tag="Plant-based pump spray"
            score="4.0"
            verdict="A genuinely gentle, plant-based pick that our families liked applying — no harsh smell, easy on little arms. Our main hesitation was longevity: on the buggier evenings we found ourselves reaching for it again sooner than we wanted, so it earned a spot in our bags as a daytime backyard option more than an all-evening one."
            pros={["Gentle, plant-based formula", "Pleasant, mild scent"]}
            cons={[
              "Protection window felt shorter for us",
              "Needed reapplying more often",
            ]}
          />
          <RankedEntry
            rank={3}
            name="California Baby Natural Bug Repellent"
            tag="Essential-oil based spray"
            score="3.8"
            verdict="Easily the nicest-smelling bottle of the group, and gentle enough that our sensitive-skin testers had no complaints. The two things that held it back for us were the price — it's a premium spend — and that it faded faster than we'd hoped on the long, still evenings when the mosquitoes were thickest."
            pros={["Lovely, gentle scent", "Kind to sensitive skin"]}
            cons={["Premium price", "Faded faster on long evenings for us"]}
          />
          <RankedEntry
            rank={4}
            name="OFF! FamilyCare"
            tag="DEET-based spray"
            score="3.6"
            verdict="Let's be fair: this works. It's DEET-based and EPA-registered, and it did the job on the worst nights. But DEET is exactly what a lot of our parents were trying to keep off their youngest kids, and the chemical smell was noticeable enough that several testers didn't love spraying it near faces and hands. Effective — just not what most of our families wanted to reach for first."
            pros={["Effective, EPA-registered protection", "Widely available and affordable"]}
            cons={[
              "DEET is what many of our parents preferred to avoid on little kids",
              "Noticeable chemical smell",
            ]}
          />
          <RankedEntry
            rank={5}
            name="Cutter Skinsations"
            tag="DEET-based spray"
            score="3.4"
            verdict="The budget pick, and it does keep bugs off. For our panel it landed last mostly on experience: it had the heaviest chemical scent of the five, and testers consistently described a sticky feel they didn't enjoy on the kids. It's effective and inexpensive — it just wasn't pleasant enough that anyone wanted it to be the family default."
            pros={["Inexpensive", "Gets the job done"]}
            cons={["Heaviest chemical scent of the group", "Sticky feel our testers disliked"]}
          />
        </div>

        <ImagePlaceholder label="Tester applying a Luna Naturals patch to a child's shirt sleeve" />

        {/* Head-to-Head Comparison Table */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Head-to-Head: How the Five Compare
        </h2>
        <p className="mb-5" style={{ color: "var(--gr-sage)" }}>
          The same five products, side by side, on the things parents ask us about most. Check and X marks reflect our test panel&rsquo;s read &mdash; not a lab result.
        </p>
        <div className="overflow-x-auto rounded-xl border mb-10" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Babyganics</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">California Baby</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">OFF! FamilyCare</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Cutter Skinsations</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Active ingredient", "Oil of Lemon Eucalyptus", "Citronella oil", "Essential oil blend", "DEET", "DEET"],
                  ["DEET-free", "check", "check", "check", "cross", "cross"],
                  ["Goes on clothing option", "check", "cross", "cross", "cross", "cross"],
                  ["Protection duration", "Up to 6 hrs spray / 12 hrs patch", "Shorter for us", "Shorter for us", "Several hours", "Several hours"],
                  ["Smell", "Light, plant-forward", "Mild", "Pleasant", "Noticeable chemical", "Heaviest chemical"],
                  ["Kid & pet friendly", "check", "check", "check", "Use as directed", "Use as directed"],
                ] as const
              ).map((row, i) => {
                const [label, ...cells] = row;
                return (
                  <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                    <td className="py-3 px-4 font-medium align-top" style={{ color: "var(--gr-dark)" }}>{label}</td>
                    {cells.map((cell, j) => (
                      <td key={j} className="py-3 px-4 align-top">
                        {cell === "check" ? (
                          <Check className="w-4 h-4" style={{ color: j === 0 ? "var(--gr-green-mid)" : "var(--gr-sage)" }} />
                        ) : cell === "cross" ? (
                          <X className="w-4 h-4 text-red-600" />
                        ) : (
                          <span style={{ color: j === 0 ? "var(--gr-green-dark)" : "var(--gr-sage)", fontWeight: j === 0 ? 600 : 400 }}>
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mid CTA */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-12"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(232, 108, 44, 0.25)" }}
        >
          <h3 className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>Want to Try Our Top Pick?</h3>
          <p className="text-sm mb-5" style={{ color: "var(--gr-sage)" }}>
            Luna Naturals took the top spot with our families. See why 10,000+ parents made the switch.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-semibold text-sm tracking-wider px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP LUNA NATURALS
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--gr-sage)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* Buyer Guide */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What to Look For (and What We&rsquo;d Skip)
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          If you&rsquo;re shopping the shelf yourself, here&rsquo;s the shorthand our team landed on after a summer of testing.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-xl p-7" style={{ backgroundColor: "rgba(58, 68, 40, 0.06)", border: "1px solid rgba(58, 68, 40, 0.15)" }}>
            <h3 className="gr-display text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--gr-green-dark)" }}>
              <ThumbsUp className="w-5 h-5" /> What to look for
            </h3>
            <ul className="space-y-3">
              {[
                "Protection that lasts a full evening so you're not reapplying every half hour",
                "A clothing-patch option if your child has sensitive skin or eczema",
                "A short, readable ingredient list — plant-based actives like Oil of Lemon Eucalyptus",
                "A light scent your kids will actually tolerate without a fight",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--gr-dark)", opacity: 0.85 }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gr-green-mid)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-7" style={{ backgroundColor: "rgba(220, 38, 38, 0.04)", border: "1px solid rgba(220, 38, 38, 0.15)" }}>
            <h3 className="gr-display text-lg font-bold mb-4 flex items-center gap-2 text-red-800">
              <ThumbsDown className="w-5 h-5" /> What we&rsquo;d skip
            </h3>
            <ul className="space-y-3">
              {[
                "Heavy chemical scents that linger on hands and faces",
                "Sticky formulas that leave a film kids keep touching",
                "Anything you have to reapply so often it never leaves your bag",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--gr-sage)" }}>
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ImagePlaceholder label="Kids playing at dusk by the lake house, no spray in sight" ratio="aspect-[16/10]" />

        {/* Conclusion */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Our Verdict: Luna Naturals Wins the Summer
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          After a full season of real use, the choice was easy for our panel. Every product on this list keeps bugs away to some degree, and the DEET sprays are effective and EPA-registered. But when we asked which one our families <em>wanted</em> to reach for &mdash; the one that protected the kids, skipped the DEET and parabens, smelled light, and didn&rsquo;t start a fight at the door &mdash; the answer was{" "}
          <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong>, again and again.
        </p>
        <p className="mb-8" style={{ color: "var(--gr-sage)" }}>
          The clothing patches were the detail that sealed it: protection that never has to touch your child&rsquo;s skin, made by a Leaping Bunny brand that&rsquo;s gentle for babies, kids, and pets. If you only try one thing off this list this summer, make it our winner.
        </p>

        <div className="grid gap-4 mb-12">
          <TestimonialCard
            quote="I'd tried the natural sprays and always ended up back on DEET out of frustration. The Luna patches are the first plant-based thing that actually lasted a whole evening for us. My eczema kid can finally wear repellent."
            author="Megan R."
          />
          <TestimonialCard
            quote="We did a week at the lake and everyone in the group chat was comparing bites. The kids with the patches on their shirts won. We're stocking up before they sell out again."
            author="Daniel P."
          />
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Try Our #1 Pick This Summer
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            DEET-free, plant-based protection your kids will actually wear. Spray for up to 6 hours, patches for up to 12 &mdash; the way our families kept the bites away all season.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* Soft P.S. */}
        <div className="border-l-4 rounded-r-xl py-5 px-6 my-6" style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(232, 108, 44, 0.06)" }}>
          <p className="text-[15px] font-medium leading-relaxed" style={{ color: "var(--gr-green-dark)" }}>
            <strong>P.S.</strong> One honest heads-up from our testing notes: our winner has a habit of selling out in the thick of summer. If your calendar already has a camping trip or a lake weekend on it, it&rsquo;s worth grabbing a pack before the bugs &mdash; and everyone else &mdash; show up.
          </p>
        </div>
      </article>

      {/* ── Disclosure ── */}
      <div className="text-center text-xs py-6 border-t" style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}>
        <strong>Sponsored Content</strong> &mdash; This article is produced in partnership with Luna Naturals.
      </div>

      {/* ── Footer ── */}
      <footer className="py-8 px-5 text-center" style={{ backgroundColor: "var(--gr-cream-light)" }}>
        <p className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>LUNA NATURALS</p>
        <div className="flex justify-center gap-6 mb-4">
          {["Shop", "About", "FAQs", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--gr-sage)" }}>
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--gr-sage)" }}>&copy; 2026 Luna Naturals. All rights reserved.</p>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t p-3 pb-[max(12px,env(safe-area-inset-bottom))] md:hidden"
        style={{ backgroundColor: "var(--gr-cream)", borderColor: "var(--gr-cream-warm)" }}
      >
        <div className="flex items-center gap-3 max-w-[720px] mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals &mdash; Our #1 Pick</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>DEET-free &bull; Code BUGFREE 15% off</p>
          </div>
          <a
            href={CART_URL}
            className="font-semibold text-sm px-7 py-3.5 rounded-lg whitespace-nowrap min-h-[48px] flex items-center"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}
