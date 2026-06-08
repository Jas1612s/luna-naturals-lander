import Image from "next/image";

function getCurrentDate() {
  const now = new Date();
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

const CTA_LINK = "/lunanaturals/kids";
const IMG = "/images/gruns";
const IMG_LUNA = "/images/luna";

function TextLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CTA_LINK}
      className={`text-[var(--bm-link)] hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function CtaLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={CTA_LINK} className={className}>
      {children}
    </a>
  );
}

function Stars() {
  return (
    <Image
      src="/images/bugmd-luna/icon-star-opt.jpg"
      alt="5 stars"
      width={100}
      height={20}
      className="mt-3.5 mb-1.5 block"
    />
  );
}

export default function BugMDLunaPage() {
  const dateStr = getCurrentDate();

  return (
    <>
      {/* Advertorial Disclosure Bar */}
      <div
        className="text-center py-[3px] text-black font-[arial] text-[16px] leading-normal max-[768px]:text-[11px]"
        style={{ background: "var(--bm-disclose-bg)" }}
      >
        Advertorial
      </div>

      {/* Header */}
      <header className="bg-[#2a3a1e] py-2.5">
        <div className="max-w-[960px] mx-auto px-4">
          <CtaLink>
            <Image
              src={`${IMG}/luna-naturals-logo-cropped.webp`}
              alt="Luna Naturals"
              width={180}
              height={40}
              className="max-w-[180px] max-[479px]:max-w-[120px] brightness-110"
            />
          </CtaLink>
        </div>
      </header>

      {/* Content */}
      <main className="pt-5 pb-[30px] max-[479px]:pt-2.5">
        <div className="max-w-[960px] mx-auto px-0 max-[991px]:px-2.5">
          <div className="mt-0 p-[10px_20px_20px] border border-[var(--bm-border)] rounded-lg bg-white max-[767px]:px-[15px] max-[479px]:pt-0 max-[479px]:px-2.5">
            {/* Title */}
            <h1 className="bm-heading text-[var(--bm-heading)] text-[43px] leading-[1.3] font-normal max-[767px]:text-[36px] max-[767px]:mt-1.5 max-[479px]:text-[29px]">
              Mom Discovers Smart Way To Keep Mosquitoes Away From Kids — Without Spray.
            </h1>

            {/* Date */}
            <div className="mb-2.5 text-[var(--bm-text)] text-[13px] font-normal max-[767px]:text-[18px] max-[479px]:text-[16px]">
              {dateStr}
            </div>

            {/* Intro Row */}
            <div className="flex flex-col md:flex-row gap-0 mt-[30px] mb-[15px] items-center max-[767px]:mt-0 max-[767px]:flex-col-reverse">
              <div className="w-full md:w-1/2 md:pr-0 max-[991px]:pr-5 max-[767px]:pr-0">
                <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75] max-[991px]:mt-2.5">
                  <span className="relative left-[3px] top-[6px] pr-[5px] font-['Times_New_Roman',TimesNewRoman,Times,Baskerville,Georgia,serif] text-black text-[60px] leading-[0] capitalize whitespace-pre-line">
                    S
                  </span>
                  arah M., 34, never thought protecting her kids from mosquitoes
                  would become a daily battle.
                  <br />
                  <br />
                  Every summer, Sarah dreaded the same routine. Wrestling her
                  3-year-old daughter Emma and 5-year-old son Jake just to apply
                  chemical bug spray before they could play outside. The tears,
                  the screaming, the eye-watering fumes — it felt like she was
                  punishing her kids just to protect them.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:pl-2.5 max-[991px]:pl-0 max-[767px]:order-[-1]">
                <CtaLink>
                  <Image
                    src={`${IMG}/before-after-no-labels.jpg`}
                    alt="Spray vs Luna Naturals patches comparison"
                    width={800}
                    height={800}
                    className="w-full max-[767px]:mb-[30px] max-[479px]:mb-5 rounded"
                    priority
                  />
                </CtaLink>
              </div>
            </div>

            {/* Article Body */}
            <ArticleBody dateStr={dateStr} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-[30px] bg-[var(--bm-bg)] max-[991px]:px-2.5">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col md:flex-row mb-5 gap-4">
            <div className="md:w-1/4">
              <Image
                src={`${IMG_LUNA}/luna-logo-green-trimmed.webp`}
                alt="Luna Naturals"
                width={152}
                height={40}
                className="max-w-[152px]"
              />
            </div>
            <div className="md:w-3/4">
              <ul className="list-none p-0">
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a href="#" className="text-[var(--bm-footer-text)] no-underline hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </li>
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a href="#" className="text-[var(--bm-footer-text)] no-underline hover:underline">
                      Returns &amp; Refund Policy
                    </a>
                  </span>
                </li>
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a href="#" className="text-[var(--bm-footer-text)] no-underline hover:underline">
                      Terms of Service
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[13px] text-center mb-5 text-[var(--bm-text)]">
            THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR
            CONSUMER PROTECTION UPDATE
            <br />
            <br />
            MARKETING DISCLOSURE: This website is owned and operated by Luna
            Naturals. The advertorial contains fictitious product reviews that
            reflect a composite of customer experiences using the product.
            <br />
            <br />
            AFFILIATE DISCLOSURE: This advertorial contains affiliate links
            within the content and display ads. The owner of this site receives a
            commission if you make a purchase after clicking on the affiliate
            links.
          </p>

          <CtaLink className="block w-[278px] ml-auto max-[479px]:mx-auto">
            <Image
              src="/images/bugmd-luna/payment-providers.jpg"
              alt="Payment providers"
              width={278}
              height={40}
              className="mb-2.5"
            />
          </CtaLink>

          <div className="text-[var(--bm-footer-text)] text-[15px] text-right max-[479px]:text-center">
            &copy; 2025 Luna Naturals
          </div>
        </div>
      </footer>
    </>
  );
}

function ArticleBody({ dateStr }: { dateStr: string }) {
  return (
    <>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        One morning before a trip to the neighborhood park, Sarah reached for the
        bug spray like she always did. But this time, 3-year-old Emma started
        screaming the moment she saw the can. Her eyes were watering. Her little
        arms were pushing the spray away. She was terrified.
        <br />
        <br />
        &ldquo;I just froze,&rdquo; Sarah recalls.{" "}
        <strong>
          &ldquo;I thought — why does protecting my child have to feel like
          punishing her?&rdquo;
        </strong>
        <br />
        <br />
        That night, after the kids were in bed, Sarah fell down a research rabbit
        hole. What she found about DEET — the active chemical in most bug sprays
        — made her stomach turn. It was originally developed for{" "}
        <strong>military use</strong>. It gets absorbed through skin within
        minutes. And the American Academy of Pediatrics recommends limiting DEET
        exposure for children under 12.
        <br />
        <br />
        Yet here she was, coating her toddler in it three times a day, every
        single day of summer.
        <br />
        <br />
        The next morning, Emma woke up with a dozen fresh mosquito bites all over
        her arms and legs. She was scratching so hard she was drawing blood.
        Sarah felt sick.
        <br />
        <br />
      </p>

      <CtaLink className="block w-full">
        <Image
          src={`${IMG}/review-mom-kitchen.jpg`}
          alt="Mom applying Luna Naturals patch to daughter"
          width={800}
          height={800}
          className="w-full mt-2.5 mb-5 rounded"
        />
      </CtaLink>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        &ldquo;Her little arms were covered in red welts,&rdquo; Sarah said.
        &ldquo;She kept scratching in her sleep. I tried every spray, every
        lotion, every citronella candle. Nothing worked long enough, and the
        sprays were making bedtime a nightmare.&rdquo;
        <br />
        <br />
        She tried the &ldquo;natural&rdquo; bug sprays too. They smelled
        terrible and wore off in 30 minutes. She tried clip-on repellent fans —
        Jake pulled his off and threw it in the sandbox. She even tried
        dressing the kids in long sleeves in 95&deg;F heat. They were miserable.
        <br />
        <br />
        Running out of options,{" "}
        <strong>Sarah had a tough choice to make:</strong> keep drowning her
        kids in chemicals every day, or accept that summer meant mosquito bites,
        itching, and sleepless nights.
        <br />
        <br />
      </p>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        But this mom was about to get her answer at the pediatrician&apos;s
        office.
        <br />
        <br />
        At Emma&apos;s annual checkup, Dr. Patel noticed the bite marks on her
        arms. &ldquo;Have you tried patches instead of sprays?&rdquo; she asked.
        <br />
        <br />
        Sarah had never heard of mosquito patches. Dr. Patel explained that
        plant-based repellent patches stick to <strong>clothing — not skin</strong>.
        The active ingredients (citronella and eucalyptus oils) create a
        protective vapor zone around your child without any chemicals touching
        their body.
        <br />
        <br />
        &ldquo;I was skeptical,&rdquo; Sarah admits. &ldquo;If they were that
        good, why wasn&apos;t everyone using them?&rdquo;
        <br />
        <br />
        Turns out, tens of thousands of families already were. Sarah just
        hadn&apos;t heard about them yet.
        <br />
        <br />
        That weekend, Sarah ordered a box of{" "}
        <TextLink>Luna Naturals Kids Mosquito Patches</TextLink>. What happened
        next changed everything.
        <br />
        <br />
        <strong>&ldquo;Emma thought they were stickers,&rdquo;</strong> Sarah
        laughs. &ldquo;She picked a dinosaur one and stuck it on her t-shirt
        herself. Then she played outside for <strong>six hours straight</strong>.
        Zero meltdowns. Zero spray battles. Zero bites.&rdquo;
        <br />
        <br />
        &ldquo;I cried in the kitchen. Not because of the mosquitoes — because
        for the first time all summer, going outside didn&apos;t feel like a
        war.&rdquo;
        <br />
        <br />
      </p>

      <CtaLink className="block w-full">
        <Image
          src={`${IMG}/kid-running-patch.jpg`}
          alt="Happy child running outdoors wearing a Luna Naturals patch"
          width={800}
          height={800}
          className="w-full mt-2.5 mb-5 rounded"
        />
      </CtaLink>

      {/* Product Section */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        The stick-on-clothes, plant-powered patches that keep mosquitoes away
        from your kids — for 12+ hours&hellip;
      </h2>

      <CtaLink className="block w-full">
        <Image
          src={`${IMG}/product-kids-patches-v2.jpg`}
          alt="Luna Naturals Kids Mosquito Repellent Patches"
          width={800}
          height={800}
          className="w-full mt-2.5 mb-5 rounded"
        />
      </CtaLink>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        <br />
        <TextLink>Luna Naturals Kids Mosquito Patches</TextLink> are
        plant-powered, 100% DEET-free stickers that go on your child&apos;s
        clothing — never on skin. Each patch uses a blend of citronella and
        eucalyptus essential oils to create an invisible shield that repels
        mosquitoes for up to 12 hours.
        <br />
        <br />
        Unlike sprays that need constant reapplication, one patch lasts from
        morning daycare drop-off to evening bath time. The innovative
        slow-release technology means the natural oils diffuse steadily
        throughout the day — no respraying, no reapplying, no crying.
        <br />
        <br />
        <TextLink>Luna Naturals Patches</TextLink> come in fun kid-friendly
        designs — dinosaurs, butterflies, stars — so children actually{" "}
        <strong>ask</strong> to wear them. Each box contains 120 patches,
        enough for an entire summer of protection at just $0.08 per patch.
        <br />
        <br />
        Best of all, they&apos;re{" "}
        <strong>completely safe for kids and pets</strong> — no harsh chemicals,
        no skin contact, no toxic fumes. Just peel, stick on clothing, and go.
      </p>

      {/* Reviews */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        With over 50,000 families making the switch, the reviews are
        in&hellip;
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        Parents everywhere are raving about Luna Naturals patches. Here are
        just a few verified reviews:
      </p>

      <blockquote>
        &ldquo;My daughter thinks these are just fun stickers. She puts them on
        herself every morning before daycare. We went from screaming matches
        with spray to her happily picking out her &apos;bug sticker&apos; for
        the day. Absolute game-changer.&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Jennifer R., Austin TX</strong>
      </blockquote>

      <blockquote>
        &ldquo;We did a week-long camping trip with three kids under 7. Not a
        single mosquito bite on any of them. Meanwhile, my husband refused to
        try the patches and came back looking like a connect-the-dots
        puzzle.&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Michelle T., Portland OR</strong>
      </blockquote>

      <blockquote>
        &ldquo;My son has eczema so we can&apos;t use regular bug spray on him.
        These patches go on his shirt so nothing touches his skin. His
        dermatologist was actually the one who recommended them. Two months in
        and not a single bite!&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Amanda K., Charlotte NC</strong>
      </blockquote>

      {/* Testing section */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        Luna Naturals patches are transforming bedtime and outdoor play, so we
        had to try them ourselves&hellip;
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        We&apos;ve read thousands of positive reviews, but to truly believe it,
        we had to test them ourselves. So we ordered{" "}
        <TextLink>Luna Naturals Kids Patches</TextLink> (which arrived 3 days
        later) and started a real-world family test.
      </p>

      {/* Review Box */}
      <div className="mx-5 my-[30px] p-[20px_15px] border border-[var(--bm-border)] bg-[var(--bm-bg)] max-[479px]:mx-1 max-[479px]:px-2.5">
        {/* Author */}
        <div className="mb-[30px]">
          <div
            className="pt-5 pb-2.5 pl-[100px] bg-no-repeat max-[479px]:pt-0 max-[479px]:pb-0"
            style={{
              backgroundImage: `url('${IMG}/review-mom-playground.jpg')`,
              backgroundPosition: "0px 15px",
              backgroundSize: "84px",
            }}
          >
            <div className="bm-heading text-[var(--bm-text)] text-[17px] font-medium tracking-[1px] mb-2.5">
              SARAH MITCHELL
            </div>
            <h3 className="mt-0 text-[#333] text-[19px] font-medium max-[479px]:text-[21px]">
              <strong>MY REVIEW OF </strong>
              <TextLink>
                <strong>Luna Naturals Kids Mosquito Patches</strong>
              </TextLink>
            </h3>
          </div>
        </div>

        {/* Week 1 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 1
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          My kids are 3 and 5, and every summer is a mosquito nightmare. My
          daughter gets eaten alive — last year she had over 30 bites in one
          week. We&apos;ve tried every spray on the market and she screams
          bloody murder every time. So when I heard about these patches, I
          figured I had nothing to lose.
          <br />
          <br />
          I put a dinosaur patch on my daughter&apos;s t-shirt and a star patch
          on my son&apos;s backpack. Then we went to the park for three hours.
          <br />
          <br />
          <strong>RESULT:</strong> When we got home, I checked every inch of
          their skin. Not a single bite. NOT ONE. My daughter didn&apos;t even
          know she was wearing mosquito protection — she thought it was a
          sticker from school. I was genuinely shocked.
        </p>

        {/* Week 2 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 2
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          Next, I wanted to test them in the worst conditions — our backyard at
          dusk, which is basically a mosquito convention center. I put fresh
          patches on both kids and let them play in the sprinklers until dark.
          Meanwhile, I sat nearby <em>without</em> a patch as a control test.
          <br />
          <br />
          <strong>RESULT:</strong> I got bitten 7 times in 45 minutes. My kids?
          Zero bites. They played for two full hours in peak mosquito time and
          came inside completely bite-free. I immediately stuck a patch on
          myself and ordered 3 more boxes.
        </p>

        {/* Week 3 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 3
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          The real test: a family camping trip in East Texas, where the
          mosquitoes are the size of small birds. Three nights in a tent with
          two small children — normally this would mean bites from head to toe.
          <br />
          <br />
          I put patches on the kids&apos; pajamas at bedtime and fresh ones on
          their shirts each morning. We hiked, fished, roasted marshmallows, and
          explored the woods.
          <br />
          <br />
          <strong>RESULT:</strong> Three days of camping. Two kids under 6.
          Total mosquito bites across the entire family: ZERO. My sister brought
          her kids on the same trip with regular spray — her 4-year-old had 15
          bites by day two. She stole a handful of our patches before going
          home. <strong>This stuff really works!</strong>
        </p>
      </div>

      {/* Final Thoughts */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        MY FINAL THOUGHTS
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        <TextLink>Luna Naturals Kids Mosquito Patches</TextLink> completely
        changed our summers. No more spray battles. No more tears. No more guilt
        about coating my kids in chemicals. My children think they&apos;re
        wearing fun stickers, and I get peace of mind knowing they&apos;re
        protected with plant-based ingredients.{" "}
        <strong>
          I strongly recommend every parent try these before buying another can
          of spray.
        </strong>
      </p>

      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        IS IT WORTH IT?
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        Right now is the perfect time to protect your family. Luna Naturals is
        running their Mosquito Season Sale — 60% off, free shipping, and a
        30-day money-back guarantee. At just $9.99 for 120 patches (that&apos;s
        $0.08 per patch), one box covers your entire summer for less than a
        single can of DEET spray.
        <br />
        <br />
        Luna Naturals is a small US-owned company that stands behind their
        products with a 100% satisfaction guarantee. If you want a tear-free,
        chemical-free, stress-free way to keep mosquitoes away from your kids,
        this is the answer.
      </p>

      {/* CTA Box */}
      <div className="px-5 pb-5 max-[479px]:px-0">
        {/* Update Banner */}
        <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
          <span className="text-[var(--bm-red)]">
            *UPDATE: {dateStr} *
          </span>{" "}
          <TextLink className="text-[var(--bm-link-blue)]">
            Luna Naturals Kids Patches
          </TextLink>{" "}
          are going viral with parents online. These patches are flying off the
          shelves. Luna Naturals has sold out of inventory 3 times already. Even
          with popularity soaring and 5-star reviews pouring in, they&apos;re
          currently offering a <strong>60% OFF</strong> discount for new
          customers (while supplies last). Plus, free shipping and a no-hassle
          30-day satisfaction guarantee. Click below to see if they&apos;re still
          in stock.
        </p>

        <div className="mt-5 text-[19px]">
          <strong>SELLING OUT FAST: </strong>
          <CtaLink className="text-[var(--bm-link)] hover:underline">
            <strong className="underline">
              {" "}
              CLICK HERE TO GET 60% OFF YOUR ORDER
            </strong>
          </CtaLink>
        </div>

        {/* Warning Box */}
        <div
          className="mt-2.5 mb-2.5 py-2.5 px-5 pl-[50px] bg-[var(--bm-blue-box)] text-white bg-no-repeat max-[479px]:pl-[60px] max-[479px]:bg-[length:32px]"
          style={{
            backgroundImage: `url('/images/bugmd-luna/warning.jpg')`,
            backgroundPosition: "15px 50%",
            backgroundSize: "auto",
          }}
        >
          <div className="text-[19px] max-[767px]:text-[16px] max-[479px]:text-[15px]">
            IMPORTANT: Get Luna Naturals Kids Patches for complete mosquito
            protection this summer.
          </div>
        </div>

        {/* Check Box */}
        <div
          className="mb-2.5 py-2.5 px-5 pl-[50px] border border-dotted border-[var(--bm-blue-box-border)] bg-no-repeat max-[479px]:pl-[60px] max-[479px]:bg-[length:32px]"
          style={{
            backgroundImage: `url('/images/bugmd-luna/check.jpg')`,
            backgroundPosition: "13px 50%",
            backgroundSize: "28px",
          }}
        >
          <p className="text-black text-[16px] max-[479px]:text-[15px] !mb-0">
            Update: Luna Naturals has sold out 3 times before. Act fast —
            mosquito season is here!
          </p>
        </div>

        {/* Product CTA Box */}
        <div className="p-5 border border-[#b2c7da]">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="md:w-1/3">
              <CtaLink>
                <Image
                  src={`${IMG}/kids-3pack-forest.jpg`}
                  alt="Luna Naturals Kids Mosquito Patches — 3 pack"
                  width={300}
                  height={300}
                  className="w-full max-[991px]:w-[40%] max-[991px]:mx-auto max-[991px]:block max-[479px]:w-full rounded"
                />
              </CtaLink>
            </div>
            <div className="md:w-2/3 text-center">
              <div className="mt-10 md:mt-10 max-[991px]:mt-2.5 flex flex-col items-center">
                <div className="bm-heading text-[var(--bm-text)] text-[24px] mb-5 leading-[1.4]">
                  STEP 1: GET LUNA NATURALS PATCHES
                </div>
                <div className="flex items-center justify-center gap-2.5 mb-3">
                  <span className="text-[16px] text-[var(--bm-text)] line-through">$24.99</span>
                  <span className="text-[28px] font-extrabold text-black">$9.99</span>
                  <span className="text-[14px] text-[var(--bm-red)] font-bold">60% OFF</span>
                </div>
                <CtaLink className="bm-btn-font inline-block mb-5 py-[25px] px-5 border-2 border-[#166534] rounded-[5px] bg-[#16a34a] text-white text-[25px] leading-[1] font-bold text-center hover:brightness-110 transition-all max-[479px]:py-2.5 max-[479px]:px-2.5 max-[479px]:text-[21px] max-[479px]:leading-[1.2]">
                  GET BITE-FREE PROTECTION — $9.99
                </CtaLink>
                <p className="text-[16px]">
                  Free shipping &middot; 30-day guarantee &middot; 120 patches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
