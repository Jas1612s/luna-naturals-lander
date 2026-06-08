import { GrunsNav } from "@/components/gruns/GrunsNav";
import { ProductBuyBox } from "@/components/gruns/ProductBuyBox";
import { WhatCustomersSay } from "@/components/gruns/WhatCustomersSay";
import { HowItWorks } from "@/components/gruns/HowItWorks";
import { UsVsThem } from "@/components/gruns/UsVsThem";
import { ReviewsTabs } from "@/components/gruns/ReviewsTabs";
import { FaqSection } from "@/components/gruns/FaqSection";
import { ReviewWall } from "@/components/gruns/ReviewWall";
import { YouMayAlsoLike } from "@/components/gruns/YouMayAlsoLike";
import { GrunsFooter } from "@/components/gruns/GrunsFooter";
import { StickyMobileCTA } from "@/components/gruns/StickyMobileCTA";

export default function AdultsPDP() {
  return (
    <>
      <GrunsNav />
      <main>
        <ProductBuyBox defaultVariant="adults" />
        <WhatCustomersSay />
        <HowItWorks />
        <ReviewsTabs />
        <UsVsThem />
        <FaqSection />
        <ReviewWall />
        <YouMayAlsoLike currentVariant="adults" />
      </main>
      <GrunsFooter />
      <StickyMobileCTA />
    </>
  );
}
