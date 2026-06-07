import { cn } from "@/lib/utils";

const footerColumns = [
  {
    title: "Help",
    links: [
      "Contact Us",
      "FAQs",
      "Shipping",
      "Order Tracking",
      "Returns & Exchanges",
      "Terms of Service",
      "Privacy Policy",
    ],
  },
  {
    title: "About",
    links: [
      "Our Story",
      "Affiliates",
      "Become an Ambassador",
      "Press",
      "Sitemap",
      "Reviews",
    ],
  },
  {
    title: "Retail",
    links: ["Find In-store", "Become a Retailer", "You Sell, We Ship"],
  },
  {
    title: "Shop All Natural",
    links: [
      "Outdoor Protection",
      "Mind and Body",
      "Wellness Patches",
      "Allergy Relief Patches",
      "Bundle and Save",
      "Build Your Own",
      "Shop All",
    ],
  },
];

const socialLinks = [
  { name: "Twitter", symbol: "𝕏" },
  { name: "Facebook", symbol: "f" },
  { name: "Instagram", symbol: "◻" },
  { name: "TikTok", symbol: "♫" },
  { name: "YouTube", symbol: "▶" },
];

const paymentMethods = [
  "American Express",
  "Apple Pay",
  "Diners Club",
  "Discover",
  "Google Pay",
  "Mastercard",
  "Shop Pay",
  "Visa",
];

export function NatPatFooter() {
  return (
    <>
      {/* Health & Wellness text section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1140px] mx-auto">
          <h2
            className="text-[20px] md:text-[38px] font-[900] text-[#1F4FC9] mb-4 text-left"
            style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
          >
            Health and wellness patches
          </h2>
          <div className="md:flex md:gap-16 md:items-start">
            <div className="md:w-1/2">
              <img
                src="/images/natpat/health-wellness-cover-ds.webp"
                alt="Health and wellness patches"
                className="hidden md:block w-full rounded-2xl"
              />
              <img
                src="/images/natpat/health-wellness-cover-mb.webp"
                alt="Health and wellness patches"
                className="md:hidden w-full mb-6"
                style={{ marginLeft: "-24px", width: "calc(100% + 48px)" }}
              />
            </div>
            <div className="md:w-1/2 text-[16px] font-medium leading-[22px] text-[#1F1F5B]">
              <p className="mb-5">
                NATPAT stands as a beacon of innovation in the realm of health
                and wellness, offering a unique range of patches and stickers
                designed to enhance your daily life. Each product is crafted
                with care, ensuring a natural, effective solution to various
                everyday challenges.
              </p>
              <p className="mb-5">
                For those seeking tranquility in their hectic lives,
                NATPAT&apos;s{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  calming patches
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  calming stickers
                </a>{" "}
                offer a soothing escape. The{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  uv stickers
                </a>{" "}
                are a must-have for sun lovers, providing a smart way to monitor
                UV exposure. When congestion hits, the{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  stuffy patch
                </a>{" "}
                is an excellent ally, helping to alleviate discomfort.
              </p>
              <p>
                Parents will appreciate the gentle effectiveness of the{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  sleepy patch for kids
                </a>
                , ensuring a peaceful night for the little ones. For adults,{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  the sleep patch for adults
                </a>{" "}
                offers a similar benefit, promoting restful sleep. The{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  itch patch
                </a>{" "}
                is a quick solution for those annoying itches, while the{" "}
                <a href="#" className="text-[#1F4FC9] underline">
                  bug bite patches
                </a>{" "}
                provide relief from insect bites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition image */}
      <div className="relative -mb-10 md:-mb-10">
        <img
          src="/images/natpat/footer-gray-wave.webp"
          alt=""
          className="hidden md:block w-full"
        />
        <img
          src="/images/natpat/footer-dark-wave-mb.webp"
          alt=""
          className="md:hidden w-full"
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#263645] md:bg-[#F0F0F4] pt-4 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="md:flex md:gap-12 md:items-start">
            {/* Newsletter column */}
            <div className="mb-10 md:mb-0 md:w-72 flex-shrink-0">
              <h3
                className="text-[20px] font-bold text-white md:text-[#1F1F5B] mb-2"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Join The NATPAT Fam
              </h3>
              <p className="text-[14px] text-white/80 md:text-[#1F1F5B] mb-2 font-medium">
                Get first access to offers &amp; more in our newsletter.
              </p>
              <p className="text-[14px] text-white/80 md:text-[#1F1F5B] mb-4 font-medium">
                Got a question? Contact{" "}
                <a
                  href="mailto:care@natpat.com"
                  className="underline text-[#1F4FC9]"
                >
                  care@natpat.com
                </a>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 border border-[#E5E5E5] rounded-full px-4 py-3 text-[14px] bg-white outline-none focus:border-[#1F4FC9]"
                />
                <button
                  className="bg-[#1F4FC9] text-white rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </div>

              {/* Social links */}
              <div className="mt-6">
                <p className="text-[14px] font-bold text-white md:text-[#1F1F5B] mb-3 uppercase">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socialLinks.map(({ name, symbol }) => (
                    <a
                      key={name}
                      href="#"
                      className="text-white md:text-[#1F1F5B] hover:text-[#1F4FC9] transition-colors"
                      aria-label={name}
                    >
                      <span className="text-lg">{symbol}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[13px] font-bold uppercase text-[#9AABD5] md:text-[#1F1F5B] mb-3">
                    {col.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className={cn(
                            "text-[14px] font-medium leading-7 hover:underline",
                            "text-[#D1D5DB] md:text-[#1F1F5B]"
                          )}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E5]/50">
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {paymentMethods.map((pm) => (
                <span
                  key={pm}
                  className="bg-white border border-[#E5E5E5] rounded px-2 py-1 text-[11px] font-semibold text-[#1F1F5B]"
                >
                  {pm}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-[#9AABD5] text-center">
              &copy; 2026, NATPAT
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
