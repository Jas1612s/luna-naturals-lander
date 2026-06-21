import {
  Leaf,
  ShieldCheck,
  Clock,
  Star,
  Check,
  X,
  Wind,
  Droplets,
  FlaskConical,
  Rabbit,
} from "lucide-react";

export const metadata = {
  title:
    "This Is No Ordinary Bug Spray — The Plant Behind DEET-Free Protection | Luna Naturals",
  description:
    "The secret isn't a chemical, it's a plant. How Oil of Lemon Eucalyptus quietly became the repellent ingredient families trust, without the DEET.",
};

const CTA_HREF =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

const REVIEWER_AVATARS = [
  "/images/luna/reviewer-megan.webp",
  "/images/luna/reviewer-jenny.webp",
  "/images/luna/reviewer-elle.webp",
  "/images/luna/reviewer-4.webp",
  "/images/luna/reviewer-5.webp",
];

/* ───── Testimonial Card ───── */
function TestimonialCard({
  quote,
  author,
  index = 0,
}: {
  quote: string;
  author: string;
  index?: number;
}) {
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
      <div className="flex items-center gap-3">
        <img
          src={REVIEWER_AVATARS[index % REVIEWER_AVATARS.length]}
          alt={author}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{author}</p>
          <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>Verified Purchase</p>
        </div>
      </div>
    </div>
  );
}

/* ───── Mechanism Step ───── */
function MechanismStep({ number, title, desc }: { number: number; title: string; desc: string }) {
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

/* ───── Failure Card ───── */
function FailureCard({
  Icon,
  title,
  verdict,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  verdict: string;
  desc: string;
}) {
  return (
    <div
      className="rounded-xl border p-6 h-full"
      style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--gr-cream-warm)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
      </div>
      <h3 className="gr-display text-lg font-bold mb-1" style={{ color: "var(--gr-dark)" }}>{title}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-red-700">{verdict}</p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--gr-sage)" }}>{desc}</p>
    </div>
  );
}

/* ───── Image ───── */
function ImagePlaceholder({
  src,
  alt,
  ratio = "aspect-[3/2]",
}: {
  src: string;
  alt: string;
  ratio?: string;
}) {
  return (
    <div className={`${ratio} overflow-hidden rounded-xl`}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

export default function LemonEucalyptusPage() {
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
          The Science of Repellents
        </span>
        <h1
          className="gr-display text-3xl md:text-[42px] font-bold leading-[1.12] mb-4"
          style={{ color: "var(--gr-green-dark)" }}
        >
          This Is No Ordinary Bug Spray.
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          The secret isn&rsquo;t a chemical, it&rsquo;s a plant. Here&rsquo;s how Oil of Lemon Eucalyptus quietly became the repellent ingredient families trust, without the DEET.
        </p>
        <div className="flex items-center gap-4 pb-8 border-b flex-wrap" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            DW
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>Dana Whitfield</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>Ingredient Researcher &bull; June 2026</p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>6 min read</p>
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
        <div className="rounded-xl aspect-video overflow-hidden">
          <img
            src="/images/luna/spray-120-hero.webp"
            alt="Luna Naturals Oil of Lemon Eucalyptus spray bottle"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        {/* Hook */}
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Here&rsquo;s a secret the repellent aisle doesn&rsquo;t want you to notice: most of the bottles labeled &ldquo;natural&rdquo; are running on the same tired ingredient.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Citronella. The candle smell. The wristband. The spray that promises a chemical-free evening and then quietly wears off before you&rsquo;ve finished your first drink on the patio. You reapply. You get bitten anyway. And somewhere along the way you decided that &ldquo;natural&rdquo; simply doesn&rsquo;t work.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          That reputation is earned. But it&rsquo;s aimed at the wrong plant.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Because there is a botanical that the <strong style={{ color: "var(--gr-dark)" }}>CDC</strong> lists alongside DEET as an effective repellent active. It&rsquo;s registered with the <strong style={{ color: "var(--gr-dark)" }}>EPA</strong>. And it isn&rsquo;t citronella. It&rsquo;s called <strong style={{ color: "var(--gr-dark)" }}>Oil of Lemon Eucalyptus</strong>, and it&rsquo;s the reason a Luna Naturals spray is not your average &ldquo;natural&rdquo; bottle.
        </p>

        {/* Pull Quote */}
        <div
          className="border-l-4 rounded-r-xl py-6 px-7 my-10"
          style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(217, 91, 47, 0.06)" }}
        >
          <p className="text-lg font-medium leading-relaxed italic" style={{ color: "var(--gr-green-dark)" }}>
            &ldquo;The problem was never that plants can&rsquo;t repel mosquitoes. The problem was that everyone kept reaching for the weak one.&rdquo;
          </p>
        </div>

        {/* THE MECHANISM */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          So What Is Oil of Lemon Eucalyptus, Really?
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          It starts as an oil extracted from the leaves of the lemon eucalyptus tree. Inside that oil sits the compound that does the heavy lifting, a naturally derived active that the CDC recognizes and the EPA has registered as an effective repellent ingredient. In plain terms: a plant compound that has cleared the same kind of bar most people assume only synthetic chemicals can clear.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The way it works is quietly clever. Mosquitoes don&rsquo;t hunt by sight. They lock onto the invisible cues your body gives off, the carbon dioxide you exhale and the warm, scented signals on your skin. Oil of Lemon Eucalyptus muddies those signals. To a mosquito drifting nearby, you simply stop reading like a target. It can&rsquo;t easily find you, so it moves on.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          That&rsquo;s the entire trick. Not a poison cloud. A cloak.
        </p>

        {/* How It Works block */}
        <div className="rounded-2xl p-8 md:p-10 my-12" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <h2 className="gr-display text-2xl font-bold text-center mb-1" style={{ color: "var(--gr-green-dark)" }}>
            How It Works, in Three Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-7">
            <MechanismStep
              number={1}
              title="They Hunt by Scent"
              desc="Mosquitoes track the CO₂ and skin cues that say a meal is near"
            />
            <MechanismStep
              number={2}
              title="OLE Masks You"
              desc="Oil of Lemon Eucalyptus scrambles those cues in the air around you"
            />
            <MechanismStep
              number={3}
              title="They Move On"
              desc="Unable to lock on, mosquitoes drift past instead of landing"
            />
          </div>
        </div>

        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Worth saying plainly: a repellent reduces bites. It is not a vaccine and it does not treat or prevent disease. What it does is make you far harder for a mosquito to find, which means far fewer bites on you and your kids.
        </p>

        {/* WHY THE OTHERS FAIL */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Why the Others Fall Short
        </h2>
        <p className="mb-8" style={{ color: "var(--gr-sage)" }}>
          Once you understand the mechanism, the failures of the bottles next to it on the shelf make a lot more sense.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <FailureCard
            Icon={Wind}
            title="Citronella"
            verdict="Fades fast"
            desc="A genuine plant repellent, but a lightweight one. It evaporates quickly, so protection is short and you are reapplying before the evening is over."
          />
          <FailureCard
            Icon={Droplets}
            title="Cheap “Natural” Blends"
            verdict="Underdosed"
            desc="Pleasant-smelling oils with no recognized active doing the real work. They read as natural on the label and behave like air freshener in the field."
          />
          <FailureCard
            Icon={FlaskConical}
            title="DEET"
            verdict="Strong solvent"
            desc="Effective and EPA-registered, but a synthetic solvent powerful enough to degrade plastics and synthetic fabrics. Many parents would rather not put that on their kids."
          />
        </div>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          That DEET detail is not a scare tactic, it&rsquo;s chemistry. The same compound that can soften a watch strap, cloud sunglasses lenses, or eat into a synthetic jacket is the one going onto skin. It works. It just isn&rsquo;t the only thing that works, which is exactly the point parents have been missing.
        </p>

        {/* Inline Image */}
        <div className="my-10 rounded-xl overflow-hidden">
          <ImagePlaceholder
            src="/images/luna/prod-spray-120.webp"
            alt="Luna Naturals plant-based DEET-free spray bottle"
            ratio="aspect-[4/3]"
          />
          <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>
            DEET is a synthetic solvent strong enough to degrade plastics and synthetic fabrics. Luna Naturals is not.
          </p>
        </div>

        {/* WHY LUNA QUALIFIES */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Why Luna Naturals Qualifies
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Luna Naturals doesn&rsquo;t lean on a single nice-smelling oil and hope. The spray is built around a recognized active, Oil of Lemon Eucalyptus, then rounded out with citronella, lemongrass, eucalyptus, and lemon so the blend smells clean and works the way a repellent should.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The result is the combination most &ldquo;natural&rdquo; bottles can&rsquo;t offer at once: a CDC-recognized, EPA-registered active, no DEET, and real lasting protection. The spray reduces bites for up to <strong style={{ color: "var(--gr-dark)" }}>6 hours</strong> on skin and clothing. The Patches for Kids, which stick to clothing rather than skin, run up to <strong style={{ color: "var(--gr-dark)" }}>12 hours</strong>.
        </p>
        <div
          className="rounded-xl p-7 my-6"
          style={{ backgroundColor: "rgba(58, 68, 40, 0.06)", border: "1px solid rgba(58, 68, 40, 0.15)" }}
        >
          <h3 className="gr-display text-lg font-bold mb-3" style={{ color: "var(--gr-green-dark)" }}>
            What a properly formulated blend means
          </h3>
          <ul className="space-y-2.5">
            {[
              "A recognized active doing the actual work, not just fragrance",
              "DEET-free, paraben-free, and gentle enough for babies, kids, and pets",
              "Citronella, lemongrass, eucalyptus, and lemon for a clean, wearable scent",
              "Leaping Bunny certified — never tested on animals",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px]"
                style={{ color: "var(--gr-dark)", opacity: 0.85 }}
              >
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gr-green-mid)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mid-article CTA */}
        <div
          className="rounded-2xl p-10 md:p-12 text-center my-12"
          style={{ backgroundColor: "var(--gr-green-dark)" }}
        >
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Protection From a Plant, Not a Solvent
          </h2>
          <p className="mb-7 text-base" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            A recognized active, a clean botanical blend, and up to 6 hours of coverage. No DEET required.
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

        {/* THE PROOF */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          The Proof, Not Just the Promise
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          A recognized repellent active. More than <strong style={{ color: "var(--gr-dark)" }}>10,000 families</strong> protected. A <strong style={{ color: "var(--gr-dark)" }}>4.9 out of 5</strong> rating. And the Leaping Bunny certification that confirms none of it was tested on animals. The ingredient is the headline, but the reception backs it up.
        </p>

        {/* Social Proof Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl p-6 mb-8" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          {[
            { value: "OLE", label: "Recognized Active" },
            { value: "10,000+", label: "Families Protected" },
            { value: "4.9★", label: "Average Rating" },
            { value: "0", label: "DEET" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gr-display text-2xl md:text-[28px] font-bold leading-none" style={{ color: "var(--gr-green-dark)" }}>
                {stat.value}
              </p>
              <p className="text-[11px] mt-1 uppercase tracking-wider font-medium" style={{ color: "var(--gr-sage)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 className="gr-display text-xl font-bold mt-8 mb-4" style={{ color: "var(--gr-dark)" }}>
          Luna Naturals vs. Citronella vs. DEET
        </h3>
        <div className="overflow-x-auto rounded-xl border mb-10" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Citronella Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Active Ingredient", "Oil of Lemon Eucalyptus", "Citronella", "DEET"],
                ["CDC / EPA Recognized", "check", "cross", "check"],
                ["DEET-Free", "check", "check", "cross"],
                ["Safe on Plastics & Fabrics", "check", "check", "cross"],
                ["Protection Duration", "Up to 6 hrs (12 hrs patch)", "Short", "4-8 hrs"],
                ["Kid & Pet Friendly", "check", "Varies", "Use with care"],
              ] as const).map(([label, luna, citro, deet], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>{label}</td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>{luna}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {citro === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : citro === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{citro}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : deet === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HOW TO USE IT */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          How to Use It
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div
            className="rounded-xl border p-6 h-full"
            style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--gr-accent-light)" }}
            >
              <Leaf className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
            </div>
            <h3 className="gr-display text-lg font-bold mb-1" style={{ color: "var(--gr-dark)" }}>The Spray</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gr-sage)" }}>
              Mist evenly over exposed skin and clothing before you head out. Reduces bites for up to 6 hours. Reapply after heavy sweat or swimming.
            </p>
          </div>
          <div
            className="rounded-xl border p-6 h-full"
            style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--gr-accent-light)" }}
            >
              <Clock className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
            </div>
            <h3 className="gr-display text-lg font-bold mb-1" style={{ color: "var(--gr-dark)" }}>The Patches for Kids</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gr-sage)" }}>
              Peel and stick onto a shirt, hat, or stroller, never on skin. Up to 12 hours of coverage from a single patch, with nothing rubbed into little arms.
            </p>
          </div>
        </div>
        <div
          className="rounded-xl p-6 my-6 flex items-start gap-3"
          style={{ backgroundColor: "rgba(212, 160, 32, 0.10)", border: "1px solid rgba(212, 160, 32, 0.3)" }}
        >
          <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gr-yellow)" }} />
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-dark)" }}>
            <strong>One honest note.</strong> The CDC advises that Oil of Lemon Eucalyptus not be used on children under 3. For the littlest ones, reach for the clothing patches or other age-appropriate options instead. We&rsquo;d rather tell you that up front than leave it in the fine print.
          </p>
        </div>

        {/* Inline Image */}
        <div className="my-10 rounded-xl overflow-hidden">
          <ImagePlaceholder
            src="/images/luna/hero-spray-action.webp"
            alt="Misting Luna Naturals spray on clothing outdoors"
            ratio="aspect-[16/10]"
          />
        </div>

        {/* Testimonials */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-6 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What Families Are Saying
        </h2>
        <div className="grid gap-4 mb-12">
          <TestimonialCard
            index={0}
            quote="I always assumed natural meant useless until I read the label and saw the active was the same plant oil the CDC actually lists. Whole different experience on the patio this year."
            author="Megan H."
          />
          <TestimonialCard
            index={1}
            quote="I stopped putting DEET on my kids the day I watched it fog up a pair of sunglasses. If it does that to plastic, I didn't want it on their skin. This is the swap I'd been waiting for."
            author="Daniel R."
          />
          <TestimonialCard
            index={2}
            quote="It smells like lemon and eucalyptus, not a chemistry lab, and it actually lasts through an evening walk. The patches on the kids' shirts are the part I love most."
            author="Aisha N."
          />
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Trade the Solvent for the Plant
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            A recognized active. A clean botanical blend. DEET-free protection trusted by more than 10,000 families. This is no ordinary bug spray.
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

        {/* Soft P.S. */}
        <div className="flex items-start gap-3 mt-2" style={{ color: "var(--gr-sage)" }}>
          <Rabbit className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gr-green-mid)" }} />
          <p className="text-[15px] leading-relaxed italic">
            P.S. The ingredient has been hiding in plain sight on the CDC&rsquo;s own list for years. The only question is how many more summers you want to spend reapplying citronella. The 3-pack is the way most families start, and code BUGFREE takes 15% off.
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
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals Spray</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>Oil of Lemon Eucalyptus &bull; DEET-free</p>
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
