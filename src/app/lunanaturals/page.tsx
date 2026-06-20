import { GrunsNav } from "@/components/gruns/GrunsNav";
import { GrunsHero } from "@/components/gruns/GrunsHero";
import { PressMarquee } from "@/components/gruns/PressMarquee";
import { ProductShowcase } from "@/components/gruns/ProductShowcase";
import { ReviewCarousel } from "@/components/gruns/ReviewCarousel";
import { FindYourFlavor } from "@/components/gruns/FindYourFlavor";
import { ProductBuyBox } from "@/components/gruns/ProductBuyBox";
import { ValueProps } from "@/components/gruns/ValueProps";
import { BenefitsScroll } from "@/components/gruns/BenefitsScroll";
import { WaveToDark, WaveToLight } from "@/components/gruns/SectionDivider";
import { ReviewsTabs } from "@/components/gruns/ReviewsTabs";
import { UsVsThem } from "@/components/gruns/UsVsThem";
import { BiteFreeCtaBanner } from "@/components/gruns/BiteFreeCtaBanner";
import { FaqSection } from "@/components/gruns/FaqSection";
import { GrunsFooter } from "@/components/gruns/GrunsFooter";
import { StickyMobileCTA } from "@/components/gruns/StickyMobileCTA";

export default function GrunsPage() {
  return (
    <>
      <GrunsNav />

      <main>
        <GrunsHero />
        <PressMarquee />
        <div className="bg-[var(--gr-cream-light)] px-4"><div className="max-w-[900px] mx-auto border-t border-[var(--gr-dark)]/10" /></div>
        <ProductShowcase />
        <WaveToDark top="#FAF7F0" />
        <ReviewCarousel />
        <WaveToLight bottom="#F5F0E6" />
        <ValueProps />
        <WaveToDark top="#F5F0E6" />
        <FindYourFlavor />
        <BenefitsScroll />
        <WaveToLight bottom="#FAF7F0" />
        <ProductBuyBox defaultVariant="kids" />
        <WaveToDark top="#FAF7F0" />
        <ReviewsTabs />
        <WaveToLight bottom="#EDE6D6" />
        <UsVsThem />
        <WaveToDark top="#EDE6D6" />
        <BiteFreeCtaBanner />
        <WaveToLight bottom="#F5F0E6" />
        <FaqSection />
      </main>

      <GrunsFooter />
      <StickyMobileCTA />
    </>
  );
}
