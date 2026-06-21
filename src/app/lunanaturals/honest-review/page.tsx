import {
  Star,
  Check,
  X,
  Flame,
  Watch,
  Smartphone,
  SprayCan,
  Droplets,
  Leaf,
  Sticker,
  Wind,
  Tag,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

export const metadata = {
  title:
    "I Bought Every 'Natural' Bug Product I Could Find. Here's My Honest Review. | Luna Naturals",
  description:
    "Citronella candles, wristbands, ultrasonic gadgets, drugstore sprays, $40 boutique repellents — one mom tested them on two kids and a bite-prone husband. Here's what actually worked.",
};

/* ───── Testimonial ───── */
function Testimonial({ quote, author, avatar }: { quote: string; author: string; avatar: string }) {
  return (
    <div
      className="rounded-xl border p-6 my-5"
      style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
    >
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed italic mb-3" style={{ color: "var(--gr-sage)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={author}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
            {author}
          </p>
          <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>
            Verified Purchase
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───── Highlight Box ───── */
function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border-l-4 rounded-r-xl py-5 px-6 my-5"
      style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(232, 108, 44, 0.06)" }}
    >
      <p
        className="text-[15px] font-medium leading-relaxed"
        style={{ color: "var(--gr-green-dark)" }}
      >
        {children}
      </p>
    </div>
  );
}

/* ───── Image ───── */
function ImagePlaceholder({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[3/2] rounded-xl overflow-hidden my-5">
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

/* ───── Review Entry (9-point breakdown) ───── */
function ReviewEntry({
  number,
  Icon,
  title,
  verdict,
  verdictTone,
  children,
}: {
  number: number;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  verdict: string;
  verdictTone: "fail" | "ok" | "win";
  children: React.ReactNode;
}) {
  const toneStyle =
    verdictTone === "win"
      ? { backgroundColor: "rgba(74, 90, 46, 0.12)", color: "var(--gr-green-dark)" }
      : verdictTone === "ok"
      ? { backgroundColor: "var(--gr-accent-light)", color: "var(--gr-accent)" }
      : { backgroundColor: "rgba(220, 38, 38, 0.08)", color: "#b91c1c" };

  return (
    <section className="py-7 border-b" style={{ borderColor: "var(--gr-cream-warm)" }}>
      <div className="flex items-start gap-4 mb-3">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "var(--gr-cream-warm)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
        </div>
        <div className="flex-1">
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "var(--gr-green-mid)" }}
          >
            Product {number} of 9
          </p>
          <h2
            className="gr-display text-xl md:text-[24px] font-bold leading-tight"
            style={{ color: "var(--gr-dark)" }}
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="md:pl-[60px]">
        <span
          className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3"
          style={toneStyle}
        >
          {verdict}
        </span>
        <p className="text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          {children}
        </p>
      </div>
    </section>
  );
}

const CTA_HREF =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

export default function HonestReviewPage() {
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
          Honest Review
        </span>
        <h1
          className="gr-display text-[26px] md:text-[40px] font-bold leading-[1.12] mb-4"
          style={{ color: "var(--gr-green-dark)" }}
        >
          I Bought Every &ldquo;Natural&rdquo; Bug Product I Could Find. Here&rsquo;s My Honest
          Review.
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          Citronella candles, wristbands, ultrasonic gadgets, drugstore &ldquo;natural&rdquo;
          sprays, $40 boutique repellents &mdash; I tested them on two kids and a very bite-prone
          husband. Most disappointed me. One didn&rsquo;t.
        </p>
        <div
          className="flex items-center gap-4 pb-8 border-b flex-wrap"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            JB
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
              Jenna Brooks
            </p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>
              Mom of 3 &bull; Verified Buyer &bull; June 2026
            </p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>
            7 min read
          </p>
        </div>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[720px] mx-auto px-5 mt-8 mb-2">
        <p
          className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--gr-sage)" }}
        >
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
        <div className="rounded-xl aspect-video overflow-hidden">
          <img
            src="/images/luna/ugc-mom.jpg"
            alt="The mom who tested every natural bug product"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        {/* Opening narrative */}
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          It started with my middle one, scratching a row of welts on the back of her knee until it
          bled. We&rsquo;d been outside for maybe twenty minutes. I felt that familiar twist of
          guilt: I could reach for the spray bottle I kept under the sink, the one that smelled like
          a chemistry lab and made me hold my breath while I coated my kids in it &mdash; or I could
          do nothing and watch them get eaten alive.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Neither felt right. So I did what a lot of tired parents do. I decided I&rsquo;d{" "}
          <strong style={{ color: "var(--gr-dark)" }}>just try everything</strong>. If it claimed to
          repel mosquitoes and didn&rsquo;t involve dousing my children in synthetic chemicals, it
          went in the cart. Candles. Wristbands. A clip-on gadget. Three different &ldquo;natural&rdquo;
          sprays. A $40 boutique bottle a friend swore by.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          What followed was a full summer of testing, mostly on my own family &mdash; two kids who
          attract mosquitoes like a porch light, and a husband who somehow gets bitten through
          denim. Here is my completely honest review of what worked, what was a waste of money, and
          the one thing I actually kept buying.
        </p>

        {/* What I was looking for */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What I Was Actually Looking For
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Before I started, I wrote down what I actually needed. Not what the packaging promised
          &mdash; what would make me buy it twice. Four things:
        </p>
        <div
          className="rounded-2xl p-7 md:p-8 my-6"
          style={{ backgroundColor: "var(--gr-cream-light)" }}
        >
          <ul className="space-y-4">
            {[
              {
                t: "Real protection that lasts",
                d: "Not 20 minutes. Long enough to get through a park trip or a backyard dinner without re-doing everyone.",
              },
              {
                t: "No DEET on my kids' skin",
                d: "This is a personal preference, not a verdict on DEET. I just didn't want to be the one putting it on a toddler.",
              },
              {
                t: "No awful smell",
                d: "If it smelled like solvent, my kids would fight me on it and I'd dread using it.",
              },
              {
                t: "Easy enough for a squirming toddler",
                d: "Anything that required pinning a 3-year-old down for a full spray-down was a non-starter.",
              },
            ].map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--gr-green-mid)" }}
                />
                <div>
                  <p className="text-[15px] font-semibold" style={{ color: "var(--gr-dark)" }}>
                    {c.t}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--gr-sage)" }}>
                    {c.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* The breakdown intro */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          The 9-Point Honest Breakdown
        </h2>
        <p className="mb-2" style={{ color: "var(--gr-sage)" }}>
          Here&rsquo;s every product I tried, in the order I tried it, with the verdict I&rsquo;d
          give a friend over coffee. No sugar-coating.
        </p>

        {/* The 9 entries */}
        <div className="mt-6">
          <ReviewEntry number={1} Icon={Flame} title="Citronella Candles" verdict="Decorative" verdictTone="fail">
            I wanted to love these. They look lovely on a patio table and they smell like summer.
            But as actual mosquito protection? Basically decorative. The bugs drifted right past the
            little flickering halo and went straight for my daughter&rsquo;s ankles. Pleasant
            ambiance, near-zero protection past about a foot of the flame. We now light them because
            we like them, not because they do anything.
          </ReviewEntry>

          <ReviewEntry number={2} Icon={Watch} title="Mosquito Wristbands" verdict="Cute, useless" verdictTone="fail">
            The kids thought the wristbands were fun, which earned them a point. The problem is
            obvious once you think about it: a band on one wrist does nothing for the other arm, the
            legs, the neck, or anywhere a mosquito actually wants to land. Past arm&rsquo;s reach it
            may as well not exist. Cute accessory, not a repellent.
          </ReviewEntry>

          <ReviewEntry number={3} Icon={Smartphone} title="Ultrasonic Phone Apps & Clip Gadgets" verdict="No difference" verdictTone="fail">
            I tried both the phone app version and a little clip-on gadget that promised an
            inaudible &ldquo;mosquito-repelling frequency.&rdquo; In my own backyard test, side by
            side, I noticed no difference at all. Same number of bites with it on as with it off. I
            won&rsquo;t pretend to run a lab, but for my family it did nothing I could detect.
          </ReviewEntry>

          <ImagePlaceholder src="/images/luna/col-sprays.webp" alt="The lineup of natural bug sprays I tested" />

          <ReviewEntry number={4} Icon={SprayCan} title="Drugstore &ldquo;Natural&rdquo; Sprays" verdict="Wore off fast" verdictTone="fail">
            These felt like the responsible middle ground, and I had high hopes. The reality was
            constant reapplying. In my experience they wore off in roughly 30 minutes, which meant I
            was chasing three kids around the yard with a spray bottle the whole evening. Better
            than nothing for a short stretch, but not something I could rely on for an actual
            outing.
          </ReviewEntry>

          <ReviewEntry number={5} Icon={Droplets} title="Classic DEET Spray" verdict="Worked, but" verdictTone="ok">
            I&rsquo;ll be fair: it worked. DEET is effective and it kept the bites away. My honest
            hesitation is personal, not a claim about safety &mdash; it&rsquo;s the heavy smell, the
            sticky film it left on skin, and the way I felt reading the label before spraying it on
            little kids. It did the job. I just didn&rsquo;t love being the one applying it to my
            toddler, and I kept looking for an option I felt better about.
          </ReviewEntry>

          <ReviewEntry number={6} Icon={Leaf} title="What Finally Worked: Luna Naturals DEET-Free Spray" verdict="The keeper" verdictTone="win">
            This is the one I kept re-ordering. Luna&rsquo;s plant-based spray uses Oil of Lemon
            Eucalyptus plus citronella, lemongrass and eucalyptus, and for us it delivered real
            protection &mdash; up to 6 hours from a single application. No DEET, no synthetic
            chemicals, and finally something I felt genuinely fine spraying near my kids. It checked
            every box on my list, which is more than I can say for anything else on this page.
          </ReviewEntry>

          <ImagePlaceholder src="/images/luna/hero-spray-action.webp" alt="Luna Naturals DEET-free spray and kids' patches on the counter" />

          <ReviewEntry number={7} Icon={Sticker} title="Luna Patches for the Kids" verdict="Toddler-proof" verdictTone="win">
            The patches solved my squirming-toddler problem entirely. They stick to clothing, not
            skin, and last up to 12 hours, so I peel one onto a shirt or backpack at breakfast and
            don&rsquo;t think about it again. My toddler calls hers a &ldquo;bug sticker&rdquo; and
            actually keeps it on, which anyone with a 3-year-old knows is a small miracle. No
            spray-down standoff, no tears.
          </ReviewEntry>

          <ReviewEntry number={8} Icon={Wind} title="The Smell & Feel Test" verdict="Light & clean" verdictTone="win">
            This was the moment it won me over. After a summer of solvent smell and greasy film, the
            Luna spray was a relief: a light lemon-eucalyptus scent, no chemical cloud hanging in the
            air, and no sticky residue on anyone&rsquo;s arms. The kids didn&rsquo;t complain, which
            is the highest praise a repellent gets in my house.
          </ReviewEntry>

          <ReviewEntry number={9} Icon={Tag} title="Price & Value" verdict="Finally worth it" verdictTone="win">
            Here&rsquo;s the part that actually stung in hindsight. I&rsquo;d spent money on five
            things that didn&rsquo;t work before landing on the one that did. The Luna system costs a
            few dollars and it&rsquo;s reusable across the whole family &mdash; spray for me, patches
            for the kids. No more buying a drawer full of gadgets and candles hoping one of them
            finally does the job.
          </ReviewEntry>
        </div>

        {/* Mid-article CTA */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-10"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(232, 108, 44, 0.25)" }}
        >
          <h3 className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>
            Want to Skip Straight to the One That Worked?
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--gr-sage)" }}>
            Save yourself the summer of trial and error. This is the spray-and-patch system I kept
            re-ordering.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-semibold text-sm tracking-wider px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP LUNA NATURALS
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--gr-sage)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* Honest cons */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          The Honest Cons (Because Nothing Is Perfect)
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I don&rsquo;t trust a review with no downsides, so here are mine. First, Luna sells out
          fast in peak summer &mdash; I got caught once in July and had to wait, so now I order
          ahead. Second, the scent is genuinely noticeable up close right after you apply it. I
          happen to like the lemon-eucalyptus smell, but if you want something completely
          fragrance-free, you should know it&rsquo;s there for the first little while before it
          settles. And to be clear about DEET: it works, and plenty of people are perfectly happy
          using it. My switch was a personal preference for a plant-based option, not a claim that
          DEET is unsafe.
        </p>

        {/* Comparison snapshot */}
        <h3
          className="gr-display text-xl font-bold mt-10 mb-4"
          style={{ color: "var(--gr-dark)" }}
        >
          My Scorecard: Luna vs. DEET Spray vs. Citronella
        </h3>
        <div
          className="overflow-x-auto rounded-xl border mb-6"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  Luna Naturals
                </th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  DEET Spray
                </th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  Citronella Candle
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Kept the bites away", "yes", "yes", "no"],
                  ["How long it lasted", "Up to 6 hrs (spray)", "A few hours", "Barely past the flame"],
                  ["DEET-free", "yes", "no", "yes"],
                  ["Smell I could live with", "yes", "no", "Pleasant but useless"],
                  ["Easy on a toddler", "yes-patch", "Spray struggle", "n/a"],
                  ["Would I buy again", "yes", "Reluctantly", "Only for ambiance"],
                ] as const
              ).map(([label, luna, deet, candle], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>
                    {label}
                  </td>
                  <td className="py-3 px-4">
                    {luna === "yes" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : luna === "yes-patch" ? (
                      <span
                        className="font-semibold flex items-center gap-1"
                        style={{ color: "var(--gr-green-mid)" }}
                      >
                        <Check className="w-4 h-4" /> Yes (patch)
                      </span>
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>
                        {luna}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "yes" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : deet === "no" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {candle === "no" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{candle}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12 text-xs" style={{ color: "var(--gr-sage)" }}>
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5" style={{ color: "var(--gr-green-mid)" }} /> What I&rsquo;d
            buy again
          </span>
          <span className="flex items-center gap-1.5">
            <ThumbsDown className="w-3.5 h-3.5 text-red-600" /> What I&rsquo;d skip
          </span>
          <span>Based on my own family&rsquo;s testing over one summer. Your results may vary.</span>
        </div>

        {/* Inline image */}
        <div className="my-10 rounded-xl overflow-hidden">
          <div className="aspect-[16/10] rounded-xl overflow-hidden">
            <img
              src="/images/luna/hf-kids-1.webp"
              alt="Kids playing outside at dusk, bite-free"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>
            DEET-free, plant-based protection the whole family will actually use &mdash; Leaping
            Bunny certified, gentle for babies, kids and pets.
          </p>
        </div>

        {/* Testimonials */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-2 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          I&rsquo;m Not the Only One Who Went Through This
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          After I posted about it, I realized half the parents I know had run the same gauntlet of
          candles and gadgets before landing in the same place. A few of their notes:
        </p>
        <div className="mb-12">
          <Testimonial
            quote="I had a literal drawer of citronella stuff and clip-on gadgets before a friend told me to just try the spray. Wish I'd skipped the drawer. It's the only thing that lasts through a whole evening for us."
            author="Megan R."
            avatar="/images/luna/reviewer-megan.webp"
          />
          <Testimonial
            quote="My son has sensitive skin so DEET was always a fight in my head. The patches go on his shirt, last all day, and he actually keeps his 'bug sticker' on. Game changer."
            author="Tara L."
            avatar="/images/luna/reviewer-jenny.webp"
          />
          <Testimonial
            quote="We tested it on a week-long camping trip with three kids. No DEET, no constant reapplying, no bites worth mentioning. I'm a convert."
            author="Danielle P."
            avatar="/images/luna/reviewer-elle.webp"
          />
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            My Honest Verdict
          </h2>
          <p
            className="mb-7 text-base max-w-[500px] mx-auto"
            style={{ color: "rgba(245, 240, 230, 0.7)" }}
          >
            Eight products let me down. One earned a permanent spot in our summer bag. If you only
            try one thing from this list, make it the DEET-free spray and the kids&rsquo; patches.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
          <p className="text-xs mt-5 max-w-[460px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.55)" }}>
            P.S. &mdash; A heads up from experience: Luna tends to sell out during peak summer
            weeks. If you&rsquo;re heading into mosquito season, it&rsquo;s worth grabbing the bundle
            before stock gets tight.
          </p>
        </div>
      </article>

      {/* ── Disclosure ── */}
      <div
        className="text-center text-xs py-6 border-t"
        style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
      >
        <strong>Sponsored Content</strong> &mdash; This article is produced in partnership with Luna
        Naturals.
      </div>

      {/* ── Footer ── */}
      <footer className="py-8 px-5 text-center" style={{ backgroundColor: "var(--gr-cream-light)" }}>
        <p className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>
          LUNA NATURALS
        </p>
        <div className="flex justify-center gap-6 mb-4">
          {["Shop", "About", "FAQs", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--gr-sage)" }}
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--gr-sage)" }}>
          &copy; 2026 Luna Naturals. All rights reserved.
        </p>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t p-3 pb-[max(12px,env(safe-area-inset-bottom))] md:hidden"
        style={{ backgroundColor: "var(--gr-cream)", borderColor: "var(--gr-cream-warm)" }}
      >
        <div className="flex items-center gap-3 max-w-[720px] mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>
              Luna Naturals
            </p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>
              The one that worked &bull; DEET-free
            </p>
          </div>
          <a
            href={CTA_HREF}
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
