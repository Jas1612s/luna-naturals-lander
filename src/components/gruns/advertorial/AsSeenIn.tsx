import Image from "next/image";

const logos = [
  { src: "/images/gruns/logo-forbes-black.svg", alt: "Forbes", w: 80 },
  { src: "/images/gruns/logo-today-black.svg", alt: "Today", w: 70 },
  { src: "/images/gruns/logo-people-black.svg", alt: "People", w: 70 },
  { src: "/images/gruns/logo-goodhousekeeping-black.svg", alt: "Good Housekeeping", w: 120 },
  { src: "/images/gruns/logo-womenshealth-black.svg", alt: "Women's Health", w: 110 },
];

export function AsSeenIn() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50/50 py-6 px-4 md:px-6">
      <div className="max-w-[720px] mx-auto">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 text-center mb-4">
          As Seen In
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-40 grayscale">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={28}
              className="h-5 md:h-6 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
