import {
  ShieldCheck,
  Leaf,
  Heart,
  Baby,
  Star,
  Check,
  X,
  Backpack,
  Car,
  Footprints,
  Sun,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title:
    "It's About Time Bug Protection Worked With Your Family — Not Against It | Luna Naturals",
  description:
    "For the moms managing the sunscreen, the snacks, the meltdowns, and the mosquitoes. Plant-powered, DEET-free bug protection built for real family life.",
};

const CTA_HREF =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

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

/* ───── Long-form Review ───── */
function LongReview({ quote, author, context }: { quote: string; author: string; context: string }) {
  return (
    <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}>
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-[18px] h-[18px] fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-base leading-relaxed mb-5" style={{ color: "var(--gr-sage)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--gr-cream-warm)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
        >
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{author}</p>
          <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>Verified Purchase &bull; {context}</p>
        </div>
      </div>
    </div>
  );
}

/* ───── "Where Luna Lives" Vignette ───── */
function Vignette({ Icon, where, copy }: { Icon: React.ElementType; where: string; copy: string }) {
  return (
    <div className="flex items-start gap-4 py-5">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "var(--gr-accent-light)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
      </div>
      <div>
        <h3 className="gr-display text-lg font-bold mb-1 leading-tight" style={{ color: "var(--gr-dark)" }}>{where}</h3>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>{copy}</p>
      </div>
    </div>
  );
}

/* ───── Ritual Step ───── */
function RitualStep({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
        style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
      >
        {number}
      </div>
      <div className="pt-1">
        <h3 className="gr-display text-lg font-bold mb-1 leading-tight" style={{ color: "var(--gr-dark)" }}>{title}</h3>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>{desc}</p>
      </div>
    </div>
  );
}

/* ───── Image Placeholder ───── */
function ImagePlaceholder({ label, ratio = "aspect-[3/2]", caption }: { label: string; ratio?: string; caption?: string }) {
  return (
    <div className="my-9">
      <div
        className={`${ratio} flex items-center justify-center text-sm font-medium border border-dashed rounded-xl text-center px-4`}
        style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
      >
        [ IMAGE COMING SOON &mdash; {label} ]
      </div>
      {caption ? (
        <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>{caption}</p>
      ) : null}
    </div>
  );
}

export default function AboutTimeMomsPage() {
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
      <header className="max-w-[760px] mx-auto px-5 pt-10 md:pt-12">
        <span
          className="inline-block text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
          style={{ backgroundColor: "var(--gr-accent-light)", color: "var(--gr-green-dark)" }}
        >
          For Moms
        </span>
        <h1 className="gr-display text-3xl md:text-[44px] font-bold leading-[1.1] mb-4" style={{ color: "var(--gr-green-dark)" }}>
          It&rsquo;s About Time Bug Protection Worked With Your Family &mdash; Not Against It.
        </h1>
        <p className="text-lg leading-relaxed pb-8 border-b" style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}>
          For the moms managing the sunscreen, the snacks, the meltdowns, and the mosquitoes &mdash; you shouldn&rsquo;t have to fight your kids to keep them safe outside.
        </p>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[760px] mx-auto px-5 mt-8 mb-2">
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

      {/* ── Main Content ── */}
      <main className="max-w-[760px] mx-auto px-5 pb-16">
        {/* ── Hero Value Prop ── */}
        <section className="mt-8 mb-4">
          <ImagePlaceholder
            label="Mom and kids laughing in the backyard at golden hour, no spray bottle in sight"
            ratio="aspect-video"
          />
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
            You already carry enough. The mental tab of who ate, who napped, who needs sunscreen, who&rsquo;s about to lose it. Bug protection should be the easy part of summer &mdash; not one more thing you have to win an argument over.
          </p>
          <p className="text-base leading-relaxed mb-7" style={{ color: "var(--gr-sage)" }}>
            <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong> is plant-powered, DEET-free protection built for how families actually live. One system that goes everywhere you go.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { Icon: Heart, title: "No spray battles", detail: "Patches stick to clothes, not squirmy kids" },
              { Icon: Leaf, title: "No chemical guilt", detail: "DEET-free, plant-based, parent-approved" },
              { Icon: ShieldCheck, title: "One system, whole family", detail: "Babies, big kids, you, even the dog" },
            ].map(({ Icon, title, detail }) => (
              <div
                key={title}
                className="border rounded-xl p-5"
                style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "var(--gr-accent-light)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
                </div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--gr-dark)" }}>{title}</p>
                <p className="text-xs leading-snug" style={{ color: "var(--gr-sage)" }}>{detail}</p>
              </div>
            ))}
          </div>

          <a
            href={CTA_HREF}
            className="block w-full text-center font-bold text-[15px] tracking-wider px-8 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            PROTECT MY FAMILY THE EASY WAY
          </a>
          <p className="text-xs text-center mt-3" style={{ color: "var(--gr-sage)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </section>

        {/* ── Social Proof Line ── */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center rounded-xl py-4 px-5 my-8"
          style={{ backgroundColor: "var(--gr-cream-light)" }}
        >
          <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
            <Star className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" /> 4.9/5
          </span>
          <span className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>10,000+ families</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
            <Leaf className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} /> Leaping Bunny cruelty-free
          </span>
        </div>

        {/* ── Problem Statement ── */}
        <h2 className="gr-display text-2xl md:text-[30px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Doing Everything Right &mdash; and Your Kids Are Still Covered in Bites?
        </h2>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          You packed the snacks. You remembered the water bottles. You wrestled sunscreen onto a kid who treats it like a personal attack. And somehow, by bedtime, there are still six new welts on a pair of little ankles and you&rsquo;re still fighting the spray bottle.
        </p>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          That&rsquo;s the part nobody warns you about. It isn&rsquo;t just the bites. It&rsquo;s the <strong style={{ color: "var(--gr-dark)" }}>mental load</strong> stacked underneath them &mdash; the wrestling, the reapplying, the quiet worry about what&rsquo;s actually in the can you&rsquo;re holding an inch from your toddler&rsquo;s face.
        </p>

        <div className="border-l-4 rounded-r-xl py-6 px-7 my-10" style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(232, 108, 44, 0.06)" }}>
          <p className="text-lg font-medium leading-relaxed italic" style={{ color: "var(--gr-green-dark)" }}>
            &ldquo;I&rsquo;m the one who remembers the bug spray, the one who reapplies it, and the one who lies awake wondering if I should be putting it on them at all. It&rsquo;s a lot to carry for a summer evening.&rdquo;
          </p>
        </div>

        {/* ── Gap Section ── */}
        <h2 className="gr-display text-2xl md:text-[30px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Most Bug Protection Asks Too Much of You
        </h2>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          The standard playbook was never designed for a mom with her hands full. It assumes you have a free pair of hands, a cooperative child, and thirty minutes to spare. You have none of those things at 6 PM on a Tuesday.
        </p>
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "rgba(220, 38, 38, 0.04)", border: "1px solid rgba(220, 38, 38, 0.15)" }}>
          <h3 className="gr-display text-lg font-bold text-red-800 mb-3">What it actually asks of you</h3>
          <ul className="space-y-3">
            {[
              "The spray struggle — pinning down a moving target while they hold their breath and complain",
              "The 30-minute reapply timer you have to keep in your head on top of everything else",
              "The chemical smell that lingers in the car the whole ride home",
              "The second-guessing every single time it goes near their skin",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          DEET is effective and EPA-registered &mdash; it works. But &ldquo;it works&rdquo; isn&rsquo;t the only thing a mom is weighing. You&rsquo;re weighing the fight, the smell, the reapplying, and the feeling in your gut. You deserve protection that doesn&rsquo;t make you choose.
        </p>

        {/* ── Positioning ── */}
        <h2 className="gr-display text-2xl md:text-[30px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Plant-Powered. Kid-Tested. Made for Real Family Life.
        </h2>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          Luna Naturals started from a simple idea: bug protection should fit into a mom&rsquo;s day, not fight it. Everything is built around two things you never have enough of &mdash; <strong style={{ color: "var(--gr-dark)" }}>hands and patience</strong>.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 my-8">
          {[
            { Icon: ShieldCheck, label: "DEET-Free", detail: "No DEET, no parabens, ever" },
            { Icon: Leaf, label: "Oil of Lemon Eucalyptus", detail: "Plant-based, citronella & lemongrass" },
            { Icon: Baby, label: "Sticks to Clothing", detail: "Patches go on the shirt, not the skin" },
          ].map(({ Icon, label, detail }) => (
            <div
              key={label}
              className="border rounded-xl p-5 text-center"
              style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "var(--gr-accent-light)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{label}</p>
              <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--gr-sage)" }}>{detail}</p>
            </div>
          ))}
        </div>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          The spray uses Oil of Lemon Eucalyptus with citronella, lemongrass, and eucalyptus for up to 6 hours of coverage. The Patches for Kids stick to clothing and last up to 12 hours. Gentle enough for babies, kids, and pets &mdash; and certified cruelty-free by Leaping Bunny.
        </p>

        {/* ── Signature Section ── */}
        <div className="rounded-2xl p-8 md:p-10 my-12" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <h2 className="gr-display text-2xl md:text-[28px] font-bold mb-2 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
            Why I Keep These in the Diaper Bag, the Car, and the Stroller
          </h2>
          <p className="mb-2 text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            The reason Luna works for moms isn&rsquo;t one big feature. It&rsquo;s that it quietly lives in all the places your day already happens.
          </p>
          <div className="divide-y" style={{ borderColor: "var(--gr-cream-warm)" }}>
            <Vignette
              Icon={Backpack}
              where="In the diaper bag"
              copy="A strip of patches tucked in the side pocket. When you get to the park and realize you forgot to prep, you peel one onto their shirt and you're done. No bottle, no mess in the bag."
            />
            <Vignette
              Icon={Car}
              where="In the glovebox"
              copy="A spray bottle lives in the car for the unplanned stops — the surprise detour to grandma's, the impromptu evening at the lake. Up to 6 hours of cover, no chemical cloud in a closed-up car."
            />
            <Vignette
              Icon={Footprints}
              where="Clipped to the stroller"
              copy="A bracelet loops around the handle so the baby is covered on every walk without anything going on their skin. It's just there, every single time, no remembering required."
            />
            <Vignette
              Icon={Backpack}
              where="In the daycare backpack"
              copy="Patches go to daycare so an afternoon on the playground is handled without asking a teacher to spray anyone down. Clothing-based, fuss-free, and nothing they can rub into their eyes."
            />
            <Vignette
              Icon={Sun}
              where="On the porch for evenings"
              copy="A candle on the railing turns the after-dinner hour back into family time instead of a retreat indoors. Everyone stays out, nobody gets eaten, and you actually get to sit down."
            />
          </div>
        </div>

        <ImagePlaceholder
          label="Flat-lay of a diaper bag with Luna patches, spray, and a bracelet spilling out"
          caption="One system, scattered exactly where a mom's day happens — bag, car, stroller, porch."
        />

        {/* ── 4-Step Daily Ritual ── */}
        <h2 className="gr-display text-2xl md:text-[30px] font-bold mt-12 mb-2 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          The Whole-Family Ritual, Start to Finish
        </h2>
        <p className="mb-7 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          It fits into the rhythm you already have. No new step to remember, no timer to babysit.
        </p>
        <div className="rounded-2xl p-8 md:p-10 my-4 space-y-7" style={{ backgroundColor: "var(--gr-white)", border: "1px solid var(--gr-cream-warm)" }}>
          <RitualStep
            number={1}
            title="Toss patches in the bag at breakfast"
            desc="While the toast is in the toaster, drop a strip of patches into the diaper bag. That's the whole prep. You're covered before you've even had coffee."
          />
          <RitualStep
            number={2}
            title="Stick & go — on the shirt, not the skin"
            desc="At the park, the trail, the backyard, peel one onto a sleeve or collar. No wrestling, no holding still, no breath-holding. Up to 12 hours from a single patch."
          />
          <RitualStep
            number={3}
            title="Refresh with a quick spray for dusk on the patio"
            desc="When the after-dinner mosquitoes show up, a fast pass of the Oil of Lemon Eucalyptus spray keeps everyone outside through the golden hour."
          />
          <RitualStep
            number={4}
            title="Itch-relief stick for the rare one that gets through"
            desc="If a bite slips past, the bite-relief patches and itch-relief stick calm it fast — so a stray welt doesn't turn into a bedtime meltdown."
          />
        </div>

        {/* ── Mid CTA ── */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-12"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(232, 108, 44, 0.25)" }}
        >
          <h3 className="gr-display text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>
            One Less Thing to Fight About
          </h3>
          <p className="text-sm mb-5 max-w-[420px] mx-auto" style={{ color: "var(--gr-sage)" }}>
            Join 10,000+ families who swapped the spray battle for peel-and-go. Build your bundle and save.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-semibold text-sm tracking-wider px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP THE FAMILY BUNDLE
          </a>
          <p className="text-xs mt-3" style={{ color: "var(--gr-sage)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* ── Comparison Table ── */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-2 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          How Luna Compares
        </h2>
        <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
          The same evening, three different ways to handle it.
        </p>
        <div className="overflow-x-auto rounded-xl border mb-10" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Citronella</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["The application", "Peel & stick (check)", "Spray struggle (cross)", "Burn & hope"],
                ["DEET-Free", "check", "cross", "Varies"],
                ["Touches Skin", "No (check)", "Yes (cross)", "n/a"],
                ["Reapplication", "Up to 12 hrs (check)", "Every 4-8 hrs", "Constant"],
                ["Chemical smell in the car", "None (check)", "Lingers (cross)", "Smoky (cross)"],
                ["Gentle for babies & pets", "check", "Caution", "Caution"],
                ["Leaping Bunny certified", "check", "Rarely", "Rarely"],
              ] as const).map(([label, luna, deet, third], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>{label}</td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : luna.includes("(check)") ? (
                      <span className="font-semibold flex items-center gap-1.5" style={{ color: "var(--gr-green-mid)" }}>
                        <Check className="w-4 h-4 flex-shrink-0" /> {luna.replace(" (check)", "")}
                      </span>
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>{luna}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : deet.includes("(cross)") ? (
                      <span className="text-red-600 font-semibold flex items-center gap-1.5">
                        <X className="w-4 h-4 flex-shrink-0" /> {deet.replace(" (cross)", "")}
                      </span>
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4" style={{ color: "var(--gr-sage)" }}>
                    {third.includes("(cross)") ? (
                      <span className="text-red-600 font-semibold flex items-center gap-1.5">
                        <X className="w-4 h-4 flex-shrink-0" /> {third.replace(" (cross)", "")}
                      </span>
                    ) : third}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Extended Testimonials ── */}
        <h2 className="gr-display text-2xl md:text-[30px] font-bold mt-12 mb-6 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          From Moms Who Stopped Fighting the Spray Bottle
        </h2>
        <div className="grid gap-5 mb-6">
          <LongReview
            quote="I have a three-year-old who screams the second she sees a spray bottle, and a baby I refuse to put DEET on. Luna basically ended the nightly standoff. I keep patches in the diaper bag and a bracelet on the stroller, and I genuinely don't think about bugs anymore. That's a sentence I never thought I'd say as a mom of two under four."
            author="Megan"
            context="Mom of 2"
          />
          <LongReview
            quote="The thing that got me was the smell in the car. We'd do an evening at the lake and the whole ride home reeked of repellent with both kids strapped in. The Luna spray doesn't do that, and the patches don't do anything at all to the air. Same protection, none of the stuff that made me uneasy. Our porch evenings are back too, thanks to the candle."
            author="Danielle"
            context="Mom of 2, sensitive-skin kiddo"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <TestimonialCard quote="The daycare keeps a strip of patches in his backpack now. No teacher spraying anyone, no skin contact, done." author="Brittany R." />
          <TestimonialCard quote="My toddler calls it her 'bug sticker' and asks for it. We went from tears to her doing it herself." author="Sofia L." />
          <TestimonialCard quote="One bundle covers all of us — me, the kids, even the dog on hikes. I love not buying five different things." author="Hannah P." />
          <TestimonialCard quote="The itch-relief stick lives in my bag for the rare one that sneaks through. Bedtime meltdowns avoided." author="Olivia T." />
        </div>

        {/* ── Final CTA ── */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <div className="flex justify-center mb-3">
            <Sparkles className="w-7 h-7" style={{ color: "var(--gr-cream)" }} />
          </div>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Ready to Make Summer Easier?
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            You carry enough already. Let bug protection be the part that just works &mdash; plant-powered, DEET-free, and built to fit your family&rsquo;s real day.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            BUILD MY FAMILY BUNDLE &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* ── Soft P.S. ── */}
        <div className="rounded-xl p-7 mb-4" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            <strong style={{ color: "var(--gr-dark)" }}>P.S.</strong> Summer fills up fast, and so does the diaper bag. Slip a strip of patches in today and the next sunny afternoon is already handled &mdash; no spray, no struggle, no second-guessing what&rsquo;s on their skin. You&rsquo;ll be glad it&rsquo;s one less thing on your list.
          </p>
        </div>
      </main>

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
        <div className="flex items-center gap-3 max-w-[760px] mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals Family Bundle</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>DEET-free &bull; No spray battles</p>
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
