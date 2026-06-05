import { GrunsNav } from "@/components/gruns/GrunsNav";
import { GrunsHero } from "@/components/gruns/GrunsHero";
import { PressMarquee } from "@/components/gruns/PressMarquee";
import { FindYourFlavor } from "@/components/gruns/FindYourFlavor";
import { ValueProps } from "@/components/gruns/ValueProps";
import { BenefitsScroll } from "@/components/gruns/BenefitsScroll";
import { ProductBuyBox } from "@/components/gruns/ProductBuyBox";
import { ReviewsTabs } from "@/components/gruns/ReviewsTabs";
import { UsVsThem } from "@/components/gruns/UsVsThem";
import { BiteFreeCtaBanner } from "@/components/gruns/BiteFreeCtaBanner";
import { FaqSection } from "@/components/gruns/FaqSection";
import { GrunsFooter } from "@/components/gruns/GrunsFooter";

export default function GrunsPage() {
  return (
    <>
      <GrunsNav />

      <main>
        <GrunsHero />
        <PressMarquee />
        <FindYourFlavor />
        <ValueProps />
        <BenefitsScroll />
        <ProductBuyBox />
        <ReviewsTabs />
        <UsVsThem />
        <BiteFreeCtaBanner />
        <FaqSection />
      </main>

      <GrunsFooter />
    </>
  );
}
