import {
  ShieldCheck,
  Leaf,
  Clock,
  AlertTriangle,
  Check,
  X,
  Star,
  Bug,
} from "lucide-react";

const CTA_HREF =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

export const metadata = {
  title:
    "Tick Season Is Exploding in 2026 — and the CDC Just Sounded the Alarm | Luna Naturals",
  description:
    "Warmer winters have stretched tick and mosquito season longer than ever. With Lyme estimates near half a million a year and dengue at record highs, here's how families are protecting their kids outdoors.",
};

/* ───── Stat Block ───── */
function StatItem({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source: string;
}) {
  return (
    <div
      className="rounded-xl border p-6 text-center"
      style={{
        borderColor: "var(--gr-cream-warm)",
        backgroundColor: "var(--gr-white)",
      }}
    >
      <p
        className="gr-display text-3xl md:text-[34px] font-bold leading-none mb-2"
        style={{ color: "var(--gr-green-dark)" }}
      >
        {value}
      </p>
      <p
        className="text-sm font-medium leading-snug mb-2"
        style={{ color: "var(--gr-dark)" }}
      >
        {label}
      </p>
      <p
        className="text-[11px] uppercase tracking-wider font-semibold"
        style={{ color: "var(--gr-sage)" }}
      >
        {source}
      </p>
    </div>
  );
}

/* ───── Testimonial ───── */
function Testimonial({
  quote,
  author,
  avatar,
}: {
  quote: string;
  author: string;
  avatar: string;
}) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{
        borderColor: "var(--gr-cream-warm)",
        backgroundColor: "var(--gr-white)",
      }}
    >
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]"
          />
        ))}
      </div>
      <p
        className="text-[15px] leading-relaxed italic mb-3"
        style={{ color: "var(--gr-sage)" }}
      >
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
          <p
            className="text-xs font-medium"
            style={{ color: "var(--gr-green-mid)" }}
          >
            Verified Purchase
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───── Article Image ───── */
function ImagePlaceholder({
  src,
  alt,
  ratio = "aspect-[3/2]",
  caption,
}: {
  src: string;
  alt: string;
  ratio?: string;
  caption?: string;
}) {
  return (
    <div className="my-10">
      <div className={`${ratio} overflow-hidden rounded-xl`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {caption ? (
        <p
          className="text-xs text-center mt-2.5"
          style={{ color: "var(--gr-sage)" }}
        >
          {caption}
        </p>
      ) : null}
    </div>
  );
}

/* ───── Checklist Item ───── */
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex items-start gap-3 text-[15px]"
      style={{ color: "var(--gr-dark)", opacity: 0.85 }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: "var(--gr-accent-light)" }}
      >
        <Check className="w-3.5 h-3.5" style={{ color: "var(--gr-green-dark)" }} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function TickWarningPage() {
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
          className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
          style={{
            backgroundColor: "var(--gr-accent-light)",
            color: "var(--gr-green-dark)",
          }}
        >
          <AlertTriangle className="w-3.5 h-3.5" /> Health Alert
        </span>
        <h1
          className="gr-display text-[26px] md:text-[40px] font-bold leading-[1.12] mb-4"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Tick Season Is Exploding in 2026 &mdash; and the CDC Just Sounded the
          Alarm. Here&rsquo;s What Parents Are Doing.
        </h1>
        <p
          className="text-lg leading-relaxed mb-5"
          style={{ color: "var(--gr-sage)" }}
        >
          Warmer winters have stretched tick and mosquito season longer than
          ever. With Lyme estimates near half a million a year and dengue at
          record highs, families are rethinking how they protect their kids
          outdoors.
        </p>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-6"
          style={{ color: "var(--gr-green-mid)" }}
        >
          Based on public-health reporting
        </p>
        <div
          className="flex items-center gap-4 pb-8 border-b flex-wrap"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{
              backgroundColor: "var(--gr-cream-warm)",
              color: "var(--gr-green-dark)",
            }}
          >
            JM
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
              Jonathan Mills, Health News Desk
            </p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>
              June 2026
            </p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>
            5 min read
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
          {["Forbes", "NBC", "Today", "People", "Women's Health", "CBS"].map(
            (name) => (
              <span
                key={name}
                className="text-sm md:text-base font-bold tracking-wide whitespace-nowrap"
                style={{ color: "var(--gr-dark)" }}
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="max-w-[720px] mx-auto px-5 my-8">
        <div className="rounded-xl aspect-video overflow-hidden">
          <img
            src="/images/luna/hf-family-1.webp"
            alt="A family hiking outdoors together on a wooded trail in summer"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        {/* Sponsored label up top */}
        <p
          className="text-[11px] font-semibold uppercase tracking-wider mb-7"
          style={{ color: "var(--gr-sage)" }}
        >
          Sponsored Content &bull; In partnership with Luna Naturals
        </p>

        {/* Problem agitation */}
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The hike was supposed to be the easy part of the weekend. Two hours on
          a shaded trail, a picnic by the creek, both kids asleep in the car by
          the time we pulled into the driveway. It was only at bath time, brushing
          the hair back from my six-year-old&rsquo;s forehead, that I saw it: a
          small dark speck tucked right at her hairline.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          A tick. Embedded. I&rsquo;d checked her arms and legs in the parking
          lot like the pamphlets say. I hadn&rsquo;t thought to part her hair.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          What followed is a scene a lot of parents will recognize: the careful
          removal with tweezers, the phone propped against the mirror,{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            the late-night panic-google
          </strong>{" "}
          of every symptom and timeline. How long was it attached? Do we save it?
          Do we call the pediatrician now or in the morning? It is a small thing
          and an enormous thing at the same time, and once you&rsquo;ve lived it,
          you never look at a wooded trail the same way again.
        </p>

        {/* Pull Quote */}
        <div
          className="border-l-4 rounded-r-xl py-6 px-7 my-10"
          style={{
            borderColor: "var(--gr-accent)",
            backgroundColor: "var(--gr-accent-light)",
          }}
        >
          <p
            className="text-lg font-medium leading-relaxed italic"
            style={{ color: "var(--gr-green-dark)" }}
          >
            &ldquo;The bite itself takes ten seconds. The worry it leaves behind
            can last for weeks. That&rsquo;s what most parents are really trying
            to avoid.&rdquo;
          </p>
        </div>

        {/* The numbers */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          The Numbers Parents Are Waking Up To
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Concern about ticks and mosquitoes isn&rsquo;t just parental
          imagination running hot. The public-health picture has shifted, and the
          numbers are doing a lot of the talking.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <StatItem
            value="~476,000"
            label="Americans diagnosed and treated for Lyme disease each year"
            source="Per the CDC"
          />
          <StatItem
            value="Longer"
            label="Tick ranges and active seasons have been expanding with milder winters"
            source="Per the CDC"
          />
          <StatItem
            value="Record"
            label="Dengue cases across the Americas reached record-high levels, per a 2024 CDC advisory"
            source="Per the CDC"
          />
        </div>

        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          A few things are worth saying plainly. The CDC estimates that roughly{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            476,000 Americans
          </strong>{" "}
          are diagnosed and treated for Lyme disease every year. Tick ranges and
          active seasons have been lengthening as winters grow milder, which means
          the window of risk now stretches well beyond the few peak summer weeks
          parents used to plan around. And in 2024, the CDC issued a health
          advisory about a record rise in dengue cases in the Americas.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          None of this is cause for panic. It is cause for the same boring,
          reliable thing that has always worked best:{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            avoiding bites in the first place.
          </strong>
        </p>

        {/* Why usual protection falls short */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Why the Usual Protection Falls Short
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Here is the catch most families run into. The longer season means more
          hours outside that need covering, and the everyday tools a lot of us
          reach for were never built for all-day, kid-friendly use.
        </p>
        <div
          className="rounded-xl p-7 my-6"
          style={{
            backgroundColor: "rgba(220, 38, 38, 0.04)",
            border: "1px solid rgba(220, 38, 38, 0.15)",
          }}
        >
          <ul className="space-y-3">
            {[
              "Citronella candles and clip-ons wear off fast and barely hold a perimeter on a breezy evening.",
              "DEET is effective and EPA-registered, but plenty of parents simply prefer not to apply it to a wriggling toddler several times a day.",
              "Sprays leave coverage gaps — the spot you missed is the spot that gets bitten.",
              "Reapplication is the real failure point: the bottle is in the other bag, the timer never went off, the kids wouldn't stand still.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px]"
                style={{ color: "var(--gr-sage)" }}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          To be clear, DEET works and is registered by the EPA. The issue for many
          families isn&rsquo;t whether it repels insects. It&rsquo;s that they
          want an option they feel comfortable using on small children, all day,
          without the spray-down struggle.
        </p>

        <ImagePlaceholder
          src="/images/luna/hf-kids-1.webp"
          alt="Kids playing outdoors in nature during the long bug season"
          ratio="aspect-[16/10]"
        />

        {/* What families are switching to */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What Families Are Switching To
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The shift a lot of parents are making is toward DEET-free, plant-based
          protection. The ingredient doing the heavy lifting is{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            Oil of Lemon Eucalyptus
          </strong>{" "}
          (OLE), which the CDC and EPA recognize as an effective repellent.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          One practical note from the guidance: the CDC advises that Oil of Lemon
          Eucalyptus not be used on children under 3. For the littlest kids,
          that&rsquo;s exactly why parents are reaching for{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            patches that stick to clothing rather than skin
          </strong>{" "}
          &mdash; protection without anything applied to the child directly.
        </p>
        <div
          className="border-l-4 rounded-r-xl py-5 px-6 my-8"
          style={{
            borderColor: "var(--gr-accent)",
            backgroundColor: "var(--gr-accent-light)",
          }}
        >
          <p
            className="text-[15px] font-medium leading-relaxed"
            style={{ color: "var(--gr-green-dark)" }}
          >
            Worth being precise about: a repellent helps you{" "}
            <strong>reduce bites</strong>. It is not a treatment and does not
            prevent any disease. Fewer bites simply means fewer chances for the
            thing nobody wants in the first place.
          </p>
        </div>

        {/* Luna solution */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Where Luna Naturals Fits In
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong> makes
          DEET-free, plant-based protection built around this exact problem. The
          Bug &amp; Tick Repellent Spray uses Oil of Lemon Eucalyptus alongside
          citronella, lemongrass, and eucalyptus for up to{" "}
          <strong style={{ color: "var(--gr-dark)" }}>6 hours</strong> of coverage.
          For kids, the Patches stick to clothing &mdash; not skin &mdash; and
          last up to <strong style={{ color: "var(--gr-dark)" }}>12 hours</strong>.
          No DEET, no parabens, Leaping Bunny certified, and gentle enough for
          babies, kids, and pets.
        </p>

        <div className="grid grid-cols-2 gap-3 my-8">
          {[
            { Icon: ShieldCheck, label: "DEET-Free", detail: "No DEET, no parabens" },
            { Icon: Leaf, label: "Plant-Based", detail: "OLE + citronella blend" },
            { Icon: Clock, label: "Long-Lasting", detail: "Up to 6–12 hrs" },
            { Icon: Bug, label: "Bug & Tick", detail: "Reduces bites" },
          ].map(({ Icon, label, detail }) => (
            <div
              key={label}
              className="border rounded-xl p-5 text-center"
              style={{
                borderColor: "var(--gr-cream-warm)",
                backgroundColor: "var(--gr-white)",
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "var(--gr-accent-light)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
                {label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--gr-sage)" }}>
                {detail}
              </p>
            </div>
          ))}
        </div>

        <ImagePlaceholder
          src="/images/luna/hf-patch-closeup.webp"
          alt="A Luna Naturals bug-repellent patch on a child's clothing outdoors"
          ratio="aspect-[4/3]"
          caption="Luna Naturals patches stick to clothing, not skin — built for the littlest adventurers."
        />

        {/* Comparison Table */}
        <h3
          className="gr-display text-xl font-bold mt-8 mb-4"
          style={{ color: "var(--gr-dark)" }}
        >
          Luna Naturals vs. DEET vs. Citronella
        </h3>
        <div
          className="overflow-x-auto rounded-xl border mb-10"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  backgroundColor: "var(--gr-green-dark)",
                  color: "var(--gr-cream)",
                }}
              >
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  Luna Naturals
                </th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  DEET Spray
                </th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  Citronella
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Active Ingredient", "OLE + plant oils", "DEET (synthetic)", "Citronella oil"],
                  ["DEET-Free", "check", "cross", "check"],
                  ["Protection Window", "Up to 6–12 hrs", "Varies by %", "Wears off fast"],
                  ["Kid-Friendly Option", "Patch on clothing (check)", "Apply to skin", "Candle / clip-on"],
                  ["Parabens", "None (check)", "Varies", "Varies"],
                  ["Leaping Bunny", "check", "Varies", "Varies"],
                ] as const
              ).map(([label, luna, deet, citronella], i) => (
                <tr
                  key={i}
                  style={
                    i % 2 !== 0
                      ? { backgroundColor: "var(--gr-cream-light)" }
                      : {}
                  }
                >
                  <td
                    className="py-3 px-4 font-medium"
                    style={{ color: "var(--gr-dark)" }}
                  >
                    {label}
                  </td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check
                        className="w-4 h-4"
                        style={{ color: "var(--gr-green-mid)" }}
                      />
                    ) : luna.includes("(check)") ? (
                      <span
                        className="font-semibold flex items-center gap-1"
                        style={{ color: "var(--gr-green-mid)" }}
                      >
                        <Check className="w-4 h-4" /> {luna.replace(" (check)", "")}
                      </span>
                    ) : (
                      <span
                        className="font-semibold"
                        style={{ color: "var(--gr-green-mid)" }}
                      >
                        {luna}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {citronella === "check" ? (
                      <Check
                        className="w-4 h-4"
                        style={{ color: "var(--gr-green-mid)" }}
                      />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{citronella}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-xs" style={{ color: "var(--gr-sage)" }}>
          DEET is effective and EPA-registered. This comparison reflects what many
          parents weigh when choosing an everyday option for young children, not a
          judgment on DEET&rsquo;s efficacy.
        </p>

        {/* Mid CTA */}
        <div
          className="rounded-2xl p-10 md:p-12 text-center my-12"
          style={{ backgroundColor: "var(--gr-green-dark)" }}
        >
          <h2
            className="gr-display text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "var(--gr-cream)" }}
          >
            Protect the Whole Family This Season
          </h2>
          <p
            className="mb-7 text-base max-w-[480px] mx-auto"
            style={{ color: "rgba(245, 240, 230, 0.72)" }}
          >
            DEET-free, plant-based protection that helps reduce bites &mdash;
            spray for the grown-ups, patches for the kids.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* Proof: Testimonials */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-2 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What Parents Are Saying
        </h2>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]"
              />
            ))}
          </div>
          <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
            4.9/5 from 10,000+ families
          </p>
        </div>
        <div className="grid gap-4 mb-12">
          <Testimonial
            quote="After we pulled a tick off our daughter last summer, I wanted something I felt okay using every single day. The patches go on their backpacks and we just don't think about it anymore."
            author="Megan R."
            avatar="/images/luna/reviewer-megan.webp"
          />
          <Testimonial
            quote="We hike most weekends now that the season runs so long. I use the spray, the boys wear the patches. Way fewer bites to deal with at bath time."
            author="Daniel K."
            avatar="/images/luna/reviewer-jenny.webp"
          />
          <Testimonial
            quote="I didn't want to put DEET on a toddler. Plant-based and on the clothing instead of her skin is exactly what I was looking for."
            author="Priya S."
            avatar="/images/luna/reviewer-elle.webp"
          />
        </div>
        <p className="mb-10 text-xs italic" style={{ color: "var(--gr-sage)" }}>
          Testimonials are illustrative and reflect individual experiences.
        </p>

        {/* What to do this season checklist */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What to Do This Season
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          A few simple habits go a long way once the season is underway. None of
          them are complicated, and together they make outdoor time a lot easier
          to relax into.
        </p>
        <div
          className="rounded-2xl p-8 my-6"
          style={{ backgroundColor: "var(--gr-cream-light)" }}
        >
          <ul className="space-y-4">
            <CheckItem>
              Tuck pant legs into socks on wooded or grassy trails so ticks
              can&rsquo;t reach skin.
            </CheckItem>
            <CheckItem>
              Do a full tick-check after outdoor play &mdash; and don&rsquo;t
              forget the hairline, behind the ears, and the backs of the knees.
            </CheckItem>
            <CheckItem>
              Use a recognized repellent such as Oil of Lemon Eucalyptus (and note
              the CDC advises against OLE for children under 3).
            </CheckItem>
            <CheckItem>
              For the littlest kids, put protection on clothing rather than skin
              with patches.
            </CheckItem>
            <CheckItem>
              Reduce bites wherever you can &mdash; fewer bites means fewer worries
              to chase down later.
            </CheckItem>
          </ul>
        </div>

        {/* Urgency P.S. */}
        <div
          className="rounded-xl p-7 my-10"
          style={{
            backgroundColor: "rgba(58, 68, 40, 0.06)",
            border: "1px solid rgba(58, 68, 40, 0.15)",
          }}
        >
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-dark)" }}>
            <strong style={{ color: "var(--gr-green-dark)" }}>P.S.</strong> The
            season is already underway, and with the active window running longer
            than it used to, the weeks of heaviest outdoor time are right now.
            Families tend to stock up early &mdash; getting protection on hand
            before the next hike, campout, or evening at the park beats scrambling
            after the first bite.
          </p>
        </div>

        {/* Final CTA */}
        <div
          className="rounded-2xl p-10 md:p-12 text-center my-12"
          style={{ backgroundColor: "var(--gr-green-dark)" }}
        >
          <h2
            className="gr-display text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "var(--gr-cream)" }}
          >
            Get Ahead of Tick Season
          </h2>
          <p
            className="mb-7 text-base max-w-[480px] mx-auto"
            style={{ color: "rgba(245, 240, 230, 0.72)" }}
          >
            DEET-free, plant-based, and gentle for the whole family. Help reduce
            bites before the next adventure.
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
        </div>
      </article>

      {/* ── Disclosure ── */}
      <div
        className="text-center text-xs py-6 border-t"
        style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
      >
        <strong>Sponsored Content</strong> &mdash; This article is produced in
        partnership with Luna Naturals.
      </div>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-5 text-center"
        style={{ backgroundColor: "var(--gr-cream-light)" }}
      >
        <p
          className="gr-display text-xl font-bold mb-2"
          style={{ color: "var(--gr-green-dark)" }}
        >
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
              DEET-free &bull; Bug &amp; tick protection
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
