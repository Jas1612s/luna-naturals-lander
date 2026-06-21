import {
  ShieldCheck,
  Leaf,
  Clock,
  PawPrint,
  Star,
  Check,
  X,
  SprayCan,
  Baby,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "The Last Bug Spray You'll Buy for Your Kids | Luna Naturals",
  description:
    "DEET-free, plant-powered bug protection the whole family can feel good about — backed by 10,000+ families and a 4.9-star rating. Up to 6 hours from one spray.",
};

const CART_URL =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

/* ───── Feature Block ───── */
function FeatureBlock({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex items-start gap-4 rounded-xl border p-6"
      style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "var(--gr-accent-light)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
      </div>
      <div>
        <h3 className="gr-display text-lg font-bold mb-1" style={{ color: "var(--gr-dark)" }}>
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ───── Step Card ───── */
function StepCard({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="text-center px-3 py-5">
      <div className="w-12 h-12 rounded-full bg-[var(--gr-green-dark)] text-[var(--gr-cream)] flex items-center justify-center text-xl font-bold mx-auto mb-3">
        {number}
      </div>
      <h3 className="gr-display text-lg font-bold text-[var(--gr-dark)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--gr-sage)] leading-snug">{desc}</p>
    </div>
  );
}

/* ───── Feature Pill ───── */
function FeaturePill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border"
      style={{
        backgroundColor: "var(--gr-white)",
        borderColor: "var(--gr-cream-warm)",
        color: "var(--gr-green-dark)",
      }}
    >
      <Check className="w-3.5 h-3.5" style={{ color: "var(--gr-green-mid)" }} />
      {label}
    </span>
  );
}

/* ───── Bundle Tile ───── */
function BundleTile({
  name,
  units,
  badge,
  highlight,
}: {
  name: string;
  units: string;
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={CART_URL}
      className="relative flex flex-col rounded-2xl border-2 p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
      style={{
        backgroundColor: highlight ? "var(--gr-cream-light)" : "var(--gr-white)",
        borderColor: highlight ? "var(--gr-accent)" : "var(--gr-cream-warm)",
      }}
    >
      {badge ? (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: "var(--gr-accent)", color: "var(--gr-white)" }}
        >
          {badge}
        </span>
      ) : null}
      <p className="gr-display text-lg font-bold mb-1 mt-1" style={{ color: "var(--gr-green-dark)" }}>
        {name}
      </p>
      <p className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: "var(--gr-sage)" }}>
        {units}
      </p>
      <div className="my-2">
        <p className="gr-display text-3xl font-bold leading-none" style={{ color: "var(--gr-dark)" }}>
          $15
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--gr-sage)" }}>
          per bottle (120 mL)
        </p>
      </div>
      <p className="text-[13px] leading-snug mt-3 mb-5" style={{ color: "var(--gr-green-mid)" }}>
        Save 15% with code <strong>BUGFREE</strong> + free shipping on $35+
      </p>
      <span
        className="mt-auto inline-block w-full font-semibold text-sm tracking-wide px-5 py-3 rounded-lg"
        style={{
          backgroundColor: highlight ? "var(--gr-green-dark)" : "var(--gr-cream-warm)",
          color: highlight ? "var(--gr-cream)" : "var(--gr-green-dark)",
        }}
      >
        CHOOSE THIS
      </span>
    </a>
  );
}

/* ───── Testimonial Card ───── */
function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div
      className="rounded-xl border p-6"
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
      <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
        {author}
      </p>
      <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>
        Verified Purchase
      </p>
    </div>
  );
}

/* ───── FAQ Item ───── */
function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
    >
      <h3 className="gr-display text-base font-bold mb-2" style={{ color: "var(--gr-dark)" }}>
        {q}
      </h3>
      <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
        {children}
      </p>
    </div>
  );
}

/* ───── Image Placeholder ───── */
function ImagePlaceholder({
  label,
  ratio = "aspect-[3/2]",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} flex items-center justify-center text-sm font-medium border border-dashed rounded-xl`}
      style={{
        backgroundColor: "var(--gr-cream-light)",
        color: "var(--gr-sage)",
        borderColor: "var(--gr-cream-warm)",
      }}
    >
      [ IMAGE COMING SOON &mdash; {label} ]
    </div>
  );
}

export default function BestBugSprayPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--gr-cream)" }}>
      {/* ── Top Bar ── */}
      <div
        className="text-center py-2.5 px-4 text-xs font-semibold tracking-wider"
        style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
      >
        FREE SHIPPING ON ORDERS OVER $35 &mdash; USE CODE BUGFREE FOR 15% OFF
      </div>

      {/* ── Hero ── */}
      <header className="max-w-[820px] mx-auto px-5 pt-10 md:pt-14 text-center">
        <span
          className="inline-block text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
          style={{ backgroundColor: "var(--gr-accent-light)", color: "var(--gr-green-dark)" }}
        >
          Summer 2026 Bestseller
        </span>
        <h1
          className="gr-display text-3xl md:text-[48px] font-bold leading-[1.1] mb-4"
          style={{ color: "var(--gr-green-dark)" }}
        >
          The Last Bug Spray You&rsquo;ll Buy for Your Kids
        </h1>
        <p
          className="text-lg leading-relaxed mb-6 max-w-[640px] mx-auto"
          style={{ color: "var(--gr-sage)" }}
        >
          DEET-free, plant-powered protection the whole family can feel good about &mdash; backed by
          10,000+ families and a 4.9-star rating.
        </p>

        {/* Social-proof tile */}
        <div
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full px-5 py-2.5 mb-7 text-[13px] font-semibold"
          style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-green-dark)" }}
        >
          <span>10,000+ families protected</span>
          <span style={{ color: "var(--gr-cream-warm)" }}>&bull;</span>
          <span className="inline-flex items-center gap-1">
            4.9
            <Star className="w-3.5 h-3.5 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
          </span>
          <span style={{ color: "var(--gr-cream-warm)" }}>&bull;</span>
          <span>DEET-free</span>
          <span style={{ color: "var(--gr-cream-warm)" }}>&bull;</span>
          <span>Leaping Bunny cruelty-free</span>
        </div>

        {/* Primary CTA */}
        <div className="mb-3">
          <a
            href={CART_URL}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP THE BUG &amp; TICK SPRAY
          </a>
        </div>
        <p className="text-xs mb-8" style={{ color: "var(--gr-sage)" }}>
          Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
        </p>

        {/* Hero Image */}
        <div className="mb-7">
          <ImagePlaceholder
            label="Luna Naturals Bug & Tick Spray bottle with family at golden hour"
            ratio="aspect-video"
          />
        </div>

        {/* Quick feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <FeaturePill label="DEET-Free" />
          <FeaturePill label="Plant-Based" />
          <FeaturePill label="Up to 6 Hrs" />
          <FeaturePill label="Kid & Pet Safe" />
        </div>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[720px] mx-auto px-5 mt-12 mb-2">
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

      {/* ── Why families are switching ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16">
        <h2
          className="gr-display text-2xl md:text-[32px] font-bold text-center mb-3 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Why Families Are Switching to Luna
        </h2>
        <p className="text-center text-base mb-10 max-w-[560px] mx-auto" style={{ color: "var(--gr-sage)" }}>
          Effective, easy-to-use protection for every adventure &mdash; without the harsh stuff you
          don&rsquo;t want near your kids.
        </p>
        <div className="grid gap-4">
          <FeatureBlock
            Icon={ShieldCheck}
            title="No Harsh Chemicals"
            desc="No DEET and no parabens. Just protection you can spray on your family without holding your breath."
          />
          <FeatureBlock
            Icon={Leaf}
            title="Plant-Powered Oil of Lemon Eucalyptus"
            desc="Our active ingredient is Oil of Lemon Eucalyptus, blended with citronella, lemongrass, and eucalyptus that bugs can't stand."
          />
          <FeatureBlock
            Icon={Baby}
            title="Gentle on the Most Sensitive Skin"
            desc="Formulated to be gentle for babies, kids, and adults alike, so the whole family can stay protected and comfortable."
          />
          <FeatureBlock
            Icon={PawPrint}
            title="Works for the Whole Crew"
            desc="From toddlers to grandparents to the family dog, Luna is made to keep everyone covered on the same adventure."
          />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16">
        <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <h2
            className="gr-display text-2xl font-bold text-center mb-1"
            style={{ color: "var(--gr-green-dark)" }}
          >
            Three Steps to a Bite-Free Day
          </h2>
          <p className="text-center text-sm mb-2" style={{ color: "var(--gr-sage)" }}>
            Spray on, head out, and refresh once if you&rsquo;re out all day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-7">
            <StepCard number={1} title="Spray" desc="Mist exposed skin and clothing — or stick a patch on the kids' shirts" />
            <StepCard number={2} title="Play" desc="Enjoy the backyard, trail, or campsite with up to 6 hours of coverage" />
            <StepCard number={3} title="Refresh" desc="Reapply once for all-day outings or after swimming and heavy sweat" />
          </div>
        </div>
      </section>

      {/* ── Product Image ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-12">
        <ImagePlaceholder label="Close-up of the spray bottle in a parent's hand at the trailhead" />
      </section>

      {/* ── Comparison Table ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16">
        <h2
          className="gr-display text-2xl md:text-[32px] font-bold text-center mb-3 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Luna vs. The Usual Options
        </h2>
        <p className="text-center text-base mb-8 max-w-[560px] mx-auto" style={{ color: "var(--gr-sage)" }}>
          DEET sprays are EPA-registered and effective, but plenty of parents want a plant-based
          option that still holds up. Here&rsquo;s how Luna compares.
        </p>
        <div
          className="overflow-x-auto rounded-xl border"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  Citronella &ldquo;Natural&rdquo;
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["DEET-Free", "check", "cross", "Usually"],
                  ["Plant-Based Active (OLE)", "check", "cross", "Varies"],
                  ["Touches Skin", "Skin & clothing", "Yes", "Yes"],
                  ["Protection Duration", "Up to 6 hrs", "Up to 8 hrs", "1-2 hrs"],
                  ["Smell", "Fresh, citrusy", "Chemical", "Strong citronella"],
                  ["Kid & Pet Safe", "check", "Use as directed", "Varies"],
                ] as const
              ).map(([label, luna, deet, natural], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>
                    {label}
                  </td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>
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
                  <td className="py-3 px-4" style={{ color: "var(--gr-sage)" }}>
                    {natural}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-3 text-center" style={{ color: "var(--gr-sage)" }}>
          Protection times reflect typical use. Reapply as directed for longer outings.
        </p>
      </section>

      {/* ── Bundle Ladder ── */}
      <section className="max-w-[820px] mx-auto px-5 pt-16">
        <h2
          className="gr-display text-2xl md:text-[32px] font-bold text-center mb-3 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Stock Up and Save
        </h2>
        <p className="text-center text-base mb-9 max-w-[560px] mx-auto" style={{ color: "var(--gr-sage)" }}>
          Every bottle is the same trusted formula at $15 for 120 mL. Add code BUGFREE for 15% off,
          and orders over $35 ship free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 pt-3">
          <BundleTile name="Try It" units="1 Spray" />
          <BundleTile name="Family 3-Pack" units="3 Sprays" badge="Most Popular" highlight />
          <BundleTile name="Stock-Up 5-Pack" units="5 Sprays" badge="Best Value" />
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "var(--gr-sage)" }}>
          Use code BUGFREE for 15% off &bull; Free shipping on orders $35+ &bull; Try Luna risk-free
        </p>
      </section>

      {/* ── Lifestyle Image ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-14">
        <ImagePlaceholder label="Kids and a dog playing in the backyard at dusk, bite-free" ratio="aspect-[16/10]" />
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16">
        <h2
          className="gr-display text-2xl md:text-[32px] font-bold text-center mb-3 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Loved by 10,000+ Families
        </h2>
        <div className="flex items-center justify-center gap-1 mb-9">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
          ))}
          <span className="ml-2 text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
            4.9 out of 5
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TestimonialCard
            quote="Finally a repellent I feel good about spraying on my toddler. It smells fresh, not like chemicals, and the bites have basically stopped."
            author="Megan R."
          />
          <TestimonialCard
            quote="We took it camping for a long weekend and reapplied once a day. The whole family stayed comfortable, even the dog tagged along bite-free."
            author="Daniel K."
          />
          <TestimonialCard
            quote="My kids have sensitive skin so I was nervous, but this has been gentle and easy. The patches on their shirts are a lifesaver at the park."
            author="Priya S."
          />
          <TestimonialCard
            quote="Love that it's DEET-free and cruelty-free. It actually works in our buggy backyard, which is more than I can say for the citronella stuff."
            author="Jordan M."
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16">
        <h2
          className="gr-display text-2xl md:text-[32px] font-bold text-center mb-9 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Questions, Answered
        </h2>
        <div className="grid gap-3">
          <FaqItem q="Is it safe for babies and kids?">
            Luna is formulated to be gentle for the whole family. As a general safety guideline,
            products with Oil of Lemon Eucalyptus are not recommended for children under 3, and for
            infants under 2 months the safest choice is physical protection like netting over a
            stroller or carrier. Always follow the label and check with your pediatrician if
            you&rsquo;re unsure.
          </FaqItem>
          <FaqItem q="Is it really DEET-free?">
            Yes. Luna contains no DEET and no parabens. The protection comes from plant-based Oil of
            Lemon Eucalyptus blended with citronella, lemongrass, and eucalyptus.
          </FaqItem>
          <FaqItem q="How long does it last?">
            One application gives you up to 6 hours of protection. For all-day outings, or after
            swimming and heavy sweating, simply reapply as directed on the label.
          </FaqItem>
          <FaqItem q="Does it go on skin or clothing?">
            The Bug &amp; Tick Repellent Spray can be applied to both exposed skin and clothing. If
            you prefer no spray on skin at all, our Mosquito Repellent Patches for Kids stick to
            clothing rather than skin and last up to 12 hours.
          </FaqItem>
          <FaqItem q="Is it safe around pets?">
            Luna is made to be a gentle, plant-based option for households with pets around. As with
            any repellent, apply it to people as directed and keep the bottle out of reach of curious
            paws and mouths.
          </FaqItem>
          <FaqItem q="What's the active ingredient?">
            The active ingredient is Oil of Lemon Eucalyptus (OLE), supported by a blend of
            citronella, lemongrass, and eucalyptus that bugs find deeply unpleasant.
          </FaqItem>
          <FaqItem q="Do you ship fast?">
            Yes. We ship quickly, and orders over $35 ship free. Add code BUGFREE at checkout for 15%
            off your order.
          </FaqItem>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="max-w-[720px] mx-auto px-5 pt-16 pb-20">
        <div className="rounded-2xl p-10 md:p-12 text-center" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Protect Your Whole Family the Clean Way
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            Effective, easy-to-use protection for every adventure. DEET-free, plant-powered, and
            trusted by 10,000+ families. Try Luna risk-free.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4 flex items-center justify-center gap-1.5" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            <Truck className="w-3.5 h-3.5" />
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>
      </section>

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
              Luna Bug &amp; Tick Spray
            </p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>
              $15 &bull; DEET-free &bull; 15% off with BUGFREE
            </p>
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
