import { ScrollingPromoBar } from "@/components/everymood/ScrollingPromoBar";
import { EveryMoodNav } from "@/components/everymood/EveryMoodNav";
import { EveryMoodHero } from "@/components/everymood/EveryMoodHero";
import { AsSeenInSection } from "@/components/everymood/AsSeenInSection";
import { MoodMenuSection } from "@/components/everymood/MoodMenuSection";
import { BugOffBundleSection } from "@/components/everymood/BugOffBundleSection";
import { CustomerTestimonialsSection } from "@/components/everymood/CustomerTestimonialsSection";
import { WhyLunaSection } from "@/components/everymood/WhyLunaSection";
import { ProductTabsSection } from "@/components/everymood/ProductTabsSection";
import { MosquitoProblemSection } from "@/components/everymood/MosquitoProblemSection";
import { QuizCTASection } from "@/components/everymood/QuizCTASection";
import { ScentTextSection } from "@/components/everymood/ScentTextSection";
import { ThisMomentSection } from "@/components/everymood/ThisMomentSection";
import { MoodScienceSection } from "@/components/everymood/MoodScienceSection";
import { KitsBundleSection } from "@/components/everymood/KitsBundleSection";
import { HairBodyMistsSection } from "@/components/everymood/HairBodyMistsSection";
import { TestimonialsSection } from "@/components/everymood/TestimonialsSection";
import { FAQSection } from "@/components/everymood/FAQSection";
import { EveryMoodFooter } from "@/components/everymood/EveryMoodFooter";

export default function EveryMoodPage() {
  return (
    <>
      <ScrollingPromoBar />
      <EveryMoodNav />
      <main>
        <EveryMoodHero />
        <AsSeenInSection />
        <MoodMenuSection />
        <BugOffBundleSection />
        <CustomerTestimonialsSection />
        <WhyLunaSection />
        <ProductTabsSection />
        <MosquitoProblemSection />
        <ThisMomentSection />
        <QuizCTASection />
        <ScentTextSection />
        <MoodScienceSection />
        <KitsBundleSection />
        <HairBodyMistsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <EveryMoodFooter />
    </>
  );
}
