import Image from "next/image";

function getCurrentDate() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

const CTA_LINK = "#";

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
      target="_blank"
      rel="noopener noreferrer"
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
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Stars() {
  return (
    <Image
      src="/images/bugmd/icon-star-opt.jpg"
      alt="5 stars"
      width={100}
      height={20}
      className="mt-3.5 mb-1.5 block"
    />
  );
}

export default function BugMDPage() {
  const dateStr = getCurrentDate();

  return (
    <>
      {/* Advertorial Disclosure Bar */}
      <div
        className="text-center py-[3px] text-black font-[arial] text-[16px] leading-normal"
        style={{ background: "var(--bm-disclose-bg)" }}
      >
        Advertorial
      </div>

      {/* Header */}
      <header className="bg-black py-2.5">
        <div className="max-w-[960px] mx-auto px-4">
          <CtaLink>
            <Image
              src="/images/bugmd/header-logo-opt.jpg"
              alt="BugMD"
              width={152}
              height={40}
              className="max-w-[152px] max-[479px]:max-w-[98px]"
              priority
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
              Smart Way To Eliminate Mites.
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
                    T
                  </span>
                  homas C., 37, never imagined his dream home would almost ruin
                  his life.
                  <br />
                  <br />
                  Thomas and his wife Lisa had finally saved enough for a down
                  payment on a perfect house in Tulsa. With their budget tight
                  after the move, they filled their new home with stuff from the
                  thrift store, including a couch, some fabric dining chairs, and
                  new blankets for all the beds... but then something terrible
                  happened.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:pl-2.5 max-[991px]:pl-0 max-[767px]:order-[-1]">
                <CtaLink>
                  <Image
                    src="/images/bugmd/hero-img.jpg"
                    alt="BugMD pest spray"
                    width={800}
                    height={600}
                    className="w-full max-[767px]:mb-[30px] max-[479px]:mb-5"
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
                src="/images/bugmd/footer-logo-opt.jpg"
                alt="BugMD"
                width={152}
                height={40}
                className="max-w-[152px]"
              />
            </div>
            <div className="md:w-3/4">
              <ul className="list-none p-0">
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a
                      href="https://bugmd.com/policies/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--bm-footer-text)] no-underline hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </li>
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a
                      href="https://bugmd.com/policies/refund-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--bm-footer-text)] no-underline hover:underline"
                    >
                      Returns &amp; Refund Policy
                    </a>
                  </span>
                </li>
                <li className="mb-[15px]">
                  <span className="text-[var(--bm-footer-text)] text-[17px]">
                    <a
                      href="https://bugmd.com/policies/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--bm-footer-text)] no-underline hover:underline"
                    >
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
            MARKETING DISCLOSURE: This website is owned and operated by BugMD.
            The advertorial contains fictitious product reviews that reflect a
            composite of BugMd customer&apos;s experiences using the product.
            <br />
            <br />
            AFFILIATE DISCLOSURE: This advertorial contains affiliate links
            within the content and display ads. The owner of this site receives a
            commission if you make a purchase after clicking on the affiliate
            links.
          </p>

          <CtaLink className="block w-[278px] ml-auto max-[479px]:mx-auto">
            <Image
              src="/images/bugmd/payment-providers.jpg"
              alt="Payment providers"
              width={278}
              height={40}
              className="mb-2.5"
            />
          </CtaLink>

          <div className="text-[var(--bm-footer-text)] text-[15px] text-right max-[479px]:text-center">
            &copy; 2025 BugMD
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
        One morning before a long day at work, Thomas felt an intense itching on
        his back and legs. He scratched desperately and tried to stop the
        itching, but little did he know it was too late. After checking himself
        in the mirror, he noticed tiny red bumps all over his skin. He was
        COVERED in bites!
        <br />
        <br />
        &ldquo;I was so confused,&rdquo; Thomas recalls.{" "}
        <strong>&ldquo;But the itching was unbearable.&rdquo;</strong>
        <br />
        <br />
        Thomas couldn&apos;t stop scratching, thinking there must be mosquitoes
        in the house. But it was worse, there was no sign of any bugs anywhere.
        &ldquo;I felt like I was losing my mind. I searched every inch of our
        bedroom and couldn&apos;t find a single bug. But something was
        definitely biting me.&rdquo;
        <br />
        <br />A couple days later his 7-year-old daughter Stacy woke up crying
        in the middle of the night. Once Thomas turned on the light to her room,
        he noticed something that shook him to his core. There were tiny red
        welts all over his daughter&apos;s arms. Thomas felt sick. These
        invisible pests were spreading to the rest of his family.
        <br />
        <br />
        He immediately stripped all the beds and checked the mattresses. He
        couldn&apos;t see a single bug, so where were these bites even coming
        from? By the end of the week, his son and even his wife were covered in
        these itchy bites. &ldquo;How did I not see this coming!&rdquo; Thomas
        thought. &ldquo;These must be mites from the furniture and blankets we
        thrifted,&rdquo; Lisa said after researching their symptoms online.
        &ldquo;They&apos;re too small to see.&rdquo;
        <br />
        <br />
      </p>

      <CtaLink className="block w-full">
        <Image
          src="/images/bugmd/mites-itching-2.jpg"
          alt="Mites itching"
          width={800}
          height={500}
          className="w-full mt-2.5 mb-5"
        />
      </CtaLink>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        It got so bad Thomas and his family spent three nights sleeping in their
        car just to escape the constant biting. &ldquo;My kids having to sleep
        in car seats&rdquo; &mdash; &ldquo;all because of these tiny invisible
        pests that invaded our home.&rdquo; Thomas recalled. &ldquo;All this
        itching and bites,&rdquo; he said, &ldquo;made me realize how much of a
        problem these tiny little mites were causing to our daily life. It
        wasn&apos;t just the physical torture from the constant itching, it was
        watching my children crying because they couldn&apos;t sleep.&rdquo;
        <br />
        <br />
        He knew he had to do something to get rid of these mites so his family
        could sleep in their bed again. Immediately he started looking into bug
        sprays, special mite treatments and even a service to come spray the
        entire house.
        <br />
        <br />
        &ldquo;That&apos;s when the real nightmare began,&rdquo; Thomas said.
        &ldquo;I called a pest control company and they wanted to charge $550
        just for one treatment! Way out of our budget after just buying the
        house. So I tried washing all our bedding every single day in hot water
        and vacuuming constantly, which worked for like a second but bites just
        came back. We even sprinkled baking soda all over our carpets and
        furniture because we read online it might help, but our house just
        looked like a mess and we were still itching every night.&rdquo;
        <br />
        <br />
        Running out of options,{" "}
        <strong>Thomas had a tough choice to make:</strong> spend a fortune they
        didn&apos;t have getting their house treated for mites, or abandon their
        new home and let the mites take over.
        <br />
        <br />
      </p>

      <CtaLink className="block w-full">
        <Image
          src="/images/bugmd/mites-itching-3.jpg"
          alt="Family affected by mites"
          width={800}
          height={500}
          className="w-full mt-2.5 mb-5"
        />
      </CtaLink>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        But this dad was about to get his answer from next door&hellip;{" "}
        <strong>literally</strong>.
        <br />
        <br />
        One morning, as Thomas and his family were getting out of their car
        after another uncomfortable night, their neighbor Pete was heading out
        to get his mail and saw them. &ldquo;Everything okay over there,
        Thomas? Why are you sleeping in your car?&rdquo; Pete asked.
        <br />
        <br />
        &ldquo;We&apos;ve got mites in the house,&rdquo; Thomas said.
        &ldquo;We&apos;ve tried everything but can&apos;t get rid of them. The
        bites are driving us crazy.&rdquo;
        <br />
        <br />
        Pete&apos;s eyes widened in shock. Without another word, he turned and
        rushed back into his house&hellip;
        <br />
        <br />A few minutes later, Pete came out holding a small bottle. And
        that&apos;s when Thomas noticed the smile on Pete&apos;s face.
        <br />
        <br />
        <strong>&ldquo;Trust me,&rdquo;</strong> said Pete. &ldquo;You&apos;ll
        love this. Just mix this little bottle with some water, and start
        spraying anywhere you think those pesky mites might be hiding. It works
        like a charm!&rdquo;
        <br />
        <br />
        &ldquo;He wasn&apos;t kidding,&rdquo; said Thomas. &ldquo;Later that
        evening, I sprayed down all our beds and every piece of furniture. I was
        skeptical at first, but to my surprise everyone slept through the night
        without a single bite! The next day there was not a single complaint
        about any itching!&rdquo;
        <br />
        <br />
        He called Pete to thank him for this miracle bottle.{" "}
        <strong>
          &ldquo;This spray is absolutely amazing,&rdquo;
        </strong>
        he said, impressed with how well it worked.
        <br />
        <br />
        The bottle, labeled &lsquo;BugMD Essential Pest Concentrate&rsquo; was
        full of this miracle liquid. &ldquo;I had no idea how it worked at the
        time, but was thrilled,&rdquo; Thomas recalls. &ldquo;I immediately
        grabbed my computer and ordered a few more bottles just to make sure I
        would always have some on hand.&rdquo;
        <br />
        <br />
        &ldquo;The best part is,&rdquo; said Thomas,{" "}
        <strong>
          &ldquo;This spray is easy to use and contains no harsh chemicals,{" "}
        </strong>
        and eliminates over 40+ different nasty bugs on contact. I ordered 5
        more boxes since I noticed they had sold out a couple times
        before!&rdquo;
        <br />
        <br />
      </p>

      {/* Product Section */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        The use anywhere, plant-powered spray that eliminates mites and 40+
        other pests&hellip;
      </h2>

      <CtaLink className="block w-full">
        <Image
          src="/images/bugmd/updated-server-bpdy-image.jpg"
          alt="BugMD Essential Pest Concentrate"
          width={800}
          height={500}
          className="w-full mt-2.5 mb-5"
        />
      </CtaLink>

      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        <br />
        <TextLink>BugMD Essential Pest Concentrate</TextLink> is a
        plant-powered, 100% harsh chemical free solution that you can spray
        anywhere to eliminate ants fast. This little green bottle gives you a
        complete piece of mind. Made with breakthrough &ldquo;nano-oil&rdquo;
        technology, BugMD Essential Pest Concentrate protects your home from ants
        and 40+ other pests.
        <br />
        <br />
        It combines the perfect mixture of clove and cottonseed oil. The
        cottonseed oil is one of the most powerful natural insecticides,
        eliminating the mites on contact. Clove oil acts to overwhelm the
        mites&apos; senses and repels them from coming back.
        <br />
        <br />
        The innovative &ldquo;nano-oil&rdquo; technology means there is no
        longer any need to keep reapplying nasty smelling bug sprays every day.{" "}
        <TextLink>BugMD Essential Pest Concentrate</TextLink> comes in a
        convenient 3.7oz bottle of concentrate that can easily be stored anywhere
        in your home, packed for travel or outdoor adventures. BugMD Essential
        Concentrate works great to eliminate mites, bed bugs and more.
        <br />
        <br />
        Unlike traditional bug spray, this spray doesn&apos;t contain harsh
        chemicals making it{" "}
        <strong>safe to use around kids and pets. * </strong>
        <br />
        <br />
        Plus, it&apos;s incredibly easy to use: simply mix the bottle of
        concentrate with water in the FREE spray bottle that is provided, shake,
        and start spraying anywhere bugs like to hide.
      </p>

      {/* Reviews */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        With over 76,745 bottles of BugMD sold nationwide, the reviews are
        in&hellip;
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        BugMD customers love spreading the word about this new bug spray
        repellent. Here are just a few verified reviews:
      </p>

      <blockquote>
        &ldquo;OMG I bought this spray for mites and when I say so far so good.
        I might have had ten million mites&hellip;Thanks guys.&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Kimberly D.</strong>
      </blockquote>

      <blockquote>
        &ldquo;So far I&apos;ve only used one bottle and it&apos;s great. I had
        mites in the upholstery of my sofa. They are gone !! This stuff
        works&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Larry B.</strong>
      </blockquote>

      <blockquote>
        &ldquo;This stuff actually works good, we had mites and gnats, we live
        on a small farm and I am in the chicken coops every day , and I think I
        was getting mites , we sprayed this stuff on and around the coops and the
        house around the bed it took care of the problem. Great stuff.&rdquo;
        <br />
        <Stars />
        <strong>&mdash; Joe L.</strong>
      </blockquote>

      {/* Testing section */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        BugMD Essential Pest Concentrate is transforming lives, so we had to try
        it for ourselves&hellip;
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        We&apos;ve read thousands of positive reviews about BugMD, but in order
        to truly believe it, we had to test it for ourselves. So, we ordered a
        bunch of <TextLink>BugMD</TextLink> bottles (which arrived at our door 3
        days later) and started conducting tests everyday.
      </p>

      {/* Review Box */}
      <div className="mx-5 my-[30px] p-[20px_15px] border border-[var(--bm-border)] bg-[var(--bm-bg)] max-[479px]:mx-1 max-[479px]:px-2.5">
        {/* Author */}
        <div className="mb-[30px]">
          <div
            className="pt-5 pb-2.5 pl-[100px] bg-no-repeat max-[479px]:pt-0 max-[479px]:pb-0"
            style={{
              backgroundImage: "url('/images/bugmd/user-picture-opt.jpg')",
              backgroundPosition: "0px 15px",
              backgroundSize: "84px",
            }}
          >
            <div className="bm-heading text-[var(--bm-text)] text-[17px] font-medium tracking-[1px] mb-2.5">
              SHARON ARCHER
            </div>
            <h3 className="mt-0 text-[#333] text-[19px] font-medium max-[479px]:text-[21px]">
              <strong>MY REVIEW OF </strong>
              <TextLink>
                <strong>BugMD Essential Pest Concentrate</strong>
              </TextLink>
            </h3>
          </div>
        </div>

        {/* Week 1 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 1
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          I wanted to see if BugMd really could beat one of the toughest pests
          to get rid of - mites. I recently moved into a new home and was
          experiencing an invisible invasion. I never had this problem where I
          used to live so I didn&apos;t know how horrible it could get. By the
          time I realized what happened it was too late. The mites had completely
          infested my bedding and furniture. I already had tried washing
          everything in hot water and vacuuming, but that didn&apos;t seem to
          help at all. So, I sprayed BugMD around every surface of my bedroom
          and furniture, then waited to see if the itching and irritation would
          return.
          <br />
          <br />
          <strong> RESULT:</strong> The next morning, I woke up and immediately
          checked my skin. I was amazed! Not a single new bite or itch, NOT ONE.
          Next I examined my bedding with a magnifying glass and all I could see
          were dead mites. Not a single one was moving. So far, blown away by
          how versatile this powerful solution is.
        </p>

        {/* Week 2 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 2
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          For the next test, I wanted to see if BugMD could stand up against
          even the most stubborn roaches. So, I went to one of my friends&apos;
          houses who said they had some roach problems lately. There were nasty,
          peppery droppings everywhere and I even saw a big roach scurry by less
          than a minute after I opened the door. So, I sprayed BugMD around all
          the entrances and nooks and crannies at the house. One even crawled
          from under the stove so I immediately sprayed it. The roach moved for
          barely a second then died right in front of me. I was shocked how fast
          it worked!
          <br />
          <br />
          <strong> RESULT:</strong> I came back to her house 2 weeks later and
          was amazed to find absolutely no signs of roaches. I checked those
          exact same spots and no droppings at all. Zero. I was shocked and so
          was my friend. She demanded that I let her keep a couple bottles I had
          with me in her house!
        </p>

        {/* Week 3 */}
        <h4 className="bm-heading mt-5 pb-2.5 border-b border-[var(--bm-text)] text-[var(--bm-text)] text-[31px] font-normal">
          WEEK 3
        </h4>
        <p className="text-[17px] leading-[1.6] max-[767px]:leading-[1.75]">
          Finally, I took this experiment to fleas, who are known for laying
          dozens of eggs per day.
          <br />
          <br />
          Luckily (for the sake of this experiment) my sister&apos;s dog has
          been scratching herself raw. She chalked it up to being fleas
          (probably from a recent hike). She tried flea drop but her dog had a
          bad reaction to them so she had to stop. With no other option, I
          convinced her to let me try out BugMD since it&apos;s safe for pets.
          So, I sprayed BugMD around her bed and even a little on her fur (I
          diluted it just to be safe).
          <br />
          <br />
          Within minutes, I kid you not, I counted 3 fleas jump right off her
          like it was the titanic. I chased them down and got them all in one
          spray that eviscerated them instantly. I left the bottle with her and
          told her I&apos;d check in later.
          <br />
          <br />
          When I called the next day to see how it worked she was shocked. She
          said her dog hadn&apos;t scratched once all day. I just laughed
          because I honestly had my doubts, but{" "}
          <strong> this stuff really does work!</strong>
        </p>
      </div>

      {/* Final Thoughts */}
      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        MY FINAL THOUGHTS
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        <TextLink>BugMD Essential Pest Concentrate</TextLink> blew my
        expectations away, and I can say it&apos;s well worth the hype. I
        haven&apos;t seen anything on the market this effective, easy, and
        affordable &mdash; this is a game changer! If you are tired of pesky
        mites invading your home, you need these!&rdquo;{" "}
        <strong>I strongly recommend trying BugMD spray for yourself.</strong>
      </p>

      <h2 className="text-[32px] mt-5 text-black font-bold leading-[1.2]">
        IS IT WORTH IT?
      </h2>
      <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
        Right now is the perfect time to protect you &amp; your loved ones from
        pesky and painful mites. BugMD is offering a special internet only
        promotion on BugMD Essential Pest Concentrate &mdash; but only while
        their limited inventory lasts. The best part is BugMD is a small US
        owned and operated business that stands behind their products with a
        100% satisfaction guarantee. That&apos;s how confident they are
        you&apos;ll love their products.
        <br />
        <br />
        If you want an easy, mess-free, and effective way to eliminate &amp;
        repel Ants, BugMD Essential Pest Concentrate is the family-friendly and
        harsh-chemical free alternative you need.
      </p>

      {/* CTA Box */}
      <div className="px-5 pb-5 max-[479px]:px-0">
        {/* Update Banner */}
        <p className="text-[19px] leading-[1.6] max-[767px]:leading-[1.75]">
          <span className="text-[var(--bm-red)]">
            *UPDATE: {dateStr} *
          </span>{" "}
          <TextLink className="text-[var(--bm-link-blue)]">
            BugMD Essential Pest Concentrate
          </TextLink>{" "}
          is making waves online. These bottles are flying off the shelves.
          BugMD Essential Pest Concentrate has now sold out of inventory 3
          times. Even with popularity soaring and 5-star reviews pouring in,
          BugMD&apos;s Essential Pest Concentrate are currently offering a 55%
          OFF discount for new customers (while supplies last). The best part is
          BugMD is a small US owned and operated company that is so sure you
          will love their products that they offer a no hassle 30-day
          satisfaction guarantee. So there&apos;s no reason not to give BugMD a
          try. Click below to see if it&apos;s still in stock.
        </p>

        <div className="mt-5 text-[19px]">
          <strong>SELLING OUT FAST: </strong>
          <CtaLink className="text-[var(--bm-link)] hover:underline">
            <strong className="underline">
              {" "}
              CLICK HERE TO GET UP TO 66% OFF YOUR ORDER
            </strong>
          </CtaLink>
        </div>

        {/* Warning Box */}
        <div
          className="mt-2.5 mb-2.5 py-2.5 px-5 pl-[50px] bg-[var(--bm-blue-box)] text-white bg-no-repeat max-[479px]:pl-[60px] max-[479px]:bg-[length:32px]"
          style={{
            backgroundImage: "url('/images/bugmd/warning.jpg')",
            backgroundPosition: "15px 50%",
            backgroundSize: "auto",
          }}
        >
          <div className="text-[19px] max-[767px]:text-[16px] max-[479px]:text-[15px]">
            IMPORTANT: Get BugMD Essential Pest Concentrate for complete pest
            protection.
          </div>
        </div>

        {/* Check Box */}
        <div
          className="mb-2.5 py-2.5 px-5 pl-[50px] border border-dotted border-[var(--bm-blue-box-border)] bg-no-repeat max-[479px]:pl-[60px] max-[479px]:bg-[length:32px]"
          style={{
            backgroundImage: "url('/images/bugmd/check.jpg')",
            backgroundPosition: "13px 50%",
            backgroundSize: "28px",
          }}
        >
          <p className="text-black text-[16px] max-[479px]:text-[15px] !mb-0">
            Update: BugMD Essential Pest Concentrate has sold out 3 times
            before, so make sure to act fast!
          </p>
        </div>

        {/* Product CTA Box */}
        <div className="p-5 border border-[#b2c7da]">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="md:w-1/3">
              <CtaLink>
                <Image
                  src="/images/bugmd/main-prodict-opt.jpg"
                  alt="BugMD Essential Pest Concentrate"
                  width={300}
                  height={300}
                  className="w-full max-[991px]:w-[40%] max-[991px]:mx-auto max-[991px]:block max-[479px]:w-full"
                />
              </CtaLink>
            </div>
            <div className="md:w-2/3 text-center">
              <div className="mt-10 md:mt-10 max-[991px]:mt-2.5 flex flex-col items-center">
                <div className="bm-heading text-[var(--bm-text)] text-[24px] mb-5 leading-[1.4]">
                  STEP 1: USE BUGMD TO ELIMINATE ANTS
                </div>
                <CtaLink className="bm-btn-font inline-block mb-5 py-[25px] px-5 border-2 border-[var(--bm-orange-border)] rounded-[5px] bg-[var(--bm-orange)] text-white text-[25px] leading-[1] font-bold text-center hover:brightness-110 transition-all max-[479px]:py-2.5 max-[479px]:px-2.5 max-[479px]:text-[21px] max-[479px]:leading-[1.2]">
                  APPLY DISCOUNT &amp; CHECK INVENTORY
                </CtaLink>
                <p className="text-[16px]">Limited Inventory Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
