import { TreydNav } from "@/components/treyd/TreydNav";
import { TreydHero } from "@/components/treyd/TreydHero";
import { TreydLogos } from "@/components/treyd/TreydLogos";
import { TreydCashFlowSection } from "@/components/treyd/TreydCashFlowSection";
import { TreydHowItWorksSection } from "@/components/treyd/TreydHowItWorksSection";
import { TreydTestimonialSection } from "@/components/treyd/TreydTestimonialSection";
import { TreydProductSection } from "@/components/treyd/TreydProductSection";
import { TreydWhySection } from "@/components/treyd/TreydWhySection";
import { TreydContactSection } from "@/components/treyd/TreydContactSection";
import { TreydFAQBannerSection } from "@/components/treyd/TreydFAQBannerSection";
import { TreydFooter } from "@/components/treyd/TreydFooter";

export default function TreydPage() {
  return (
    <>
      <TreydNav />
      <main>
        <TreydHero />
        <TreydLogos />
        <TreydCashFlowSection />
        <TreydHowItWorksSection />
        <TreydTestimonialSection />
        <TreydProductSection />
        <TreydWhySection />
<TreydContactSection />
        <TreydFAQBannerSection />
      </main>
      <TreydFooter />
    </>
  );
}
