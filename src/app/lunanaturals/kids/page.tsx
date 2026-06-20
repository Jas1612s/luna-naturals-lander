import { GrunsNav } from "@/components/gruns/GrunsNav";
import { ProductBuyBox } from "@/components/gruns/ProductBuyBox";
import { WhatCustomersSayKids } from "@/components/gruns/WhatCustomersSayKids";
import { SafeForKids } from "@/components/gruns/SafeForKids";
import { HowItWorksKids } from "@/components/gruns/HowItWorksKids";
import { UsVsThem } from "@/components/gruns/UsVsThem";
import { ReviewsTabs } from "@/components/gruns/ReviewsTabs";
import { FaqSectionKids } from "@/components/gruns/FaqSectionKids";
import { ReviewWall } from "@/components/gruns/ReviewWall";
import { YouMayAlsoLike } from "@/components/gruns/YouMayAlsoLike";
import { GrunsFooter } from "@/components/gruns/GrunsFooter";
import { StickyMobileCTA } from "@/components/gruns/StickyMobileCTA";

export default function KidsPDP() {
  return (
    <>
      <GrunsNav />
      <main>
        <ProductBuyBox defaultVariant="kids" />
        <WhatCustomersSayKids />
        <HowItWorksKids />
        <SafeForKids />
        <ReviewsTabs />
        <UsVsThem />
        <FaqSectionKids />
        <ReviewWall />
        <YouMayAlsoLike currentVariant="kids" />
      </main>
      <GrunsFooter />
      <StickyMobileCTA />
    </>
  );
}
