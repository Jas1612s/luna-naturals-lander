import { cn } from '@/lib/utils';

const categories = [
  {
    color: '#FF209E',
    cover: '/images/natpat/cat-outdoor-cover.webp',
    wave: '/images/natpat/cat-outdoor-wave.webp',
    packs: '/images/natpat/cat-outdoor-packs.webp',
    packsWidth: 228,
    logo: '/images/natpat/cat-outdoor-logo.webp',
    name: 'Outdoor Protection',
    href: '#',
    colSpan: 'lg:col-span-4',
  },
  {
    color: '#1F4FC9',
    cover: '/images/natpat/cat-wellness-cover.webp',
    wave: '/images/natpat/cat-wellness-wave.webp',
    packs: '/images/natpat/cat-wellness-packs.webp',
    packsWidth: 286,
    logo: '/images/natpat/cat-wellness-logo.webp',
    name: 'Wellness & Cognitive',
    href: '#',
    colSpan: 'lg:col-span-4',
  },
  {
    color: '#19714B',
    cover: '/images/natpat/cat-pets-cover.webp',
    wave: '/images/natpat/cat-pets-wave.webp',
    packs: '/images/natpat/cat-pets-packs.webp',
    packsWidth: 228,
    logo: '/images/natpat/cat-pets-logo.webp',
    name: 'Pets',
    href: '#',
    colSpan: 'lg:col-span-4',
  },
  {
    color: '#9D38F4',
    cover: '/images/natpat/cat-allergy-cover.webp',
    wave: '/images/natpat/cat-allergy-wave.webp',
    packs: '/images/natpat/cat-allergy-packs.webp',
    packsWidth: 112,
    logo: '/images/natpat/cat-allergy-logo.webp',
    name: 'Respiratory & Allergy Relief',
    href: '#',
    colSpan: 'lg:col-start-3 lg:col-span-4',
  },
  {
    color: '#1F4FC9',
    cover: '/images/natpat/cat-bundles-cover.webp',
    wave: '/images/natpat/cat-bundles-wave.webp',
    packs: '/images/natpat/cat-bundles-packs.webp',
    packsWidth: 170,
    logo: null,
    name: 'Shop our Bundles Collection',
    href: '#',
    colSpan: 'lg:col-span-4',
    isBundle: true,
    saveBadge: '/images/natpat/cat-bundles-save-badge.svg',
  },
] as const;

type Category = (typeof categories)[number];

function CategoryCard({ cat }: { cat: Category }) {
  const isBundle = 'isBundle' in cat && cat.isBundle === true;
  const saveBadge = 'saveBadge' in cat ? cat.saveBadge : undefined;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-t-2xl max-w-[360px] mx-auto w-full group',
        cat.colSpan
      )}
    >
      {/* Cover image */}
      <img
        src={cat.cover}
        alt={cat.name}
        className="w-full"
        style={{ clipPath: 'inset(0 3.5px 0 4.5px)' }}
      />

      {/* Wave overlay — overlaps cover by -50px */}
      <div className="relative -mt-12 z-10">
        <img src={cat.wave} alt="" className="w-full min-h-[200px]" />

        {/* Overlaid content — centered over wave */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full px-6 -mt-20">
          {/* Bundle save badge */}
          {isBundle && saveBadge && (
            <div className="relative flex justify-center mb-2">
              <img src={saveBadge} alt="" className="w-36" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold uppercase whitespace-nowrap">
                Save up to 59%
              </span>
            </div>
          )}

          {/* Product packs image */}
          <img
            src={cat.packs}
            alt=""
            width={cat.packsWidth}
            className="block mx-auto mb-5"
          />

          {/* Category name with logo */}
          <div
            className="flex items-center justify-center gap-2 text-white font-bold text-base mb-3"
            style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
          >
            {cat.logo && (
              <img src={cat.logo} alt="" width={32} className="w-8 h-8" />
            )}
            <span>{cat.name}</span>
          </div>

          {/* View Collection button */}
          <a
            href={cat.href}
            className="group-hover:[animation:np-bounce_1s_ease_1] flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white font-semibold uppercase text-[15px] transition-colors"
            style={{
              color: isBundle ? '#ffffff' : cat.color,
              background: isBundle ? cat.color : '#ffffff',
            }}
          >
            View Collection
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: isBundle ? '#ffffff' : cat.color }}
            >
              <img
                src="/images/natpat/cat-arrow-right.svg"
                alt=""
                width={8}
                style={
                  isBundle
                    ? {
                        filter:
                          'brightness(0) saturate(100%) invert(22%) sepia(58%) saturate(3354%) hue-rotate(218deg) brightness(93%) contrast(93%)',
                      }
                    : {}
                }
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function NatPatCategories() {
  return (
    <section className="mt-8 mb-10 px-6">
      <h2
        className="text-[22px] md:text-[38px] font-[900] text-[#1F4FC9] uppercase text-center mb-6 md:mb-10"
        style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
      >
        Shop By Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 max-w-[1140px] mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} cat={cat} />
        ))}
      </div>
    </section>
  );
}
