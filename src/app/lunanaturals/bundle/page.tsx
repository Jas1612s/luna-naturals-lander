import { GrunsNav } from "@/components/gruns/GrunsNav";
import { BundleHero } from "@/components/gruns/BundleHero";
import { PressMarquee } from "@/components/gruns/PressMarquee";
import { BundleBuyBox } from "@/components/gruns/BundleBuyBox";
import { ValueProps } from "@/components/gruns/ValueProps";
import { BenefitsScroll } from "@/components/gruns/BenefitsScroll";
import { ReviewsTabs } from "@/components/gruns/ReviewsTabs";
import { UsVsThem } from "@/components/gruns/UsVsThem";
import { BiteFreeCtaBanner } from "@/components/gruns/BiteFreeCtaBanner";
import { FaqSection } from "@/components/gruns/FaqSection";
import { GrunsFooter } from "@/components/gruns/GrunsFooter";
import { StickyMobileCTA } from "@/components/gruns/StickyMobileCTA";

export default function BundlePage() {
  return (
    <>
      <GrunsNav />

      <main>
        <BundleHero />
        <PressMarquee />
        <BundleBuyBox />
        <ValueProps />
        <BenefitsScroll />
        <ReviewsTabs />
        <UsVsThem />
        <BiteFreeCtaBanner />
        <FaqSection />
      </main>

      <GrunsFooter />
      <StickyMobileCTA />
    </>
  );
}
