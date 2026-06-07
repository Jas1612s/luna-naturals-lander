import { AnnouncementBar } from "@/components/everydaydose/AnnouncementBar";
import { EverydayDoseNav } from "@/components/everydaydose/EverydayDoseNav";
import { IconTextBar } from "@/components/everydaydose/IconTextBar";
import { CoffeePlusBenefits } from "@/components/everydaydose/CoffeePlusBenefits";
import { ReviewsSection } from "@/components/everydaydose/ReviewsSection";
import { PressBanner } from "@/components/everydaydose/PressBanner";
import { IngredientsSection } from "@/components/everydaydose/IngredientsSection";
import { HowToMake } from "@/components/everydaydose/HowToMake";
import { WhoWeAre } from "@/components/everydaydose/WhoWeAre";
import { PartnerSection } from "@/components/everydaydose/PartnerSection";
import { FAQSection } from "@/components/everydaydose/FAQSection";
import { TrustBadges } from "@/components/everydaydose/TrustBadges";
import { HeroSection } from "@/components/everydaydose/HeroSection";
import { EverydayDoseFooter } from "@/components/everydaydose/EverydayDoseFooter";

export default function EverydayDosePage() {
  return (
    <>
      <AnnouncementBar />
      <EverydayDoseNav />
      <main>
        <HeroSection />
        <IconTextBar />
        <CoffeePlusBenefits />
        <ReviewsSection />
        <PressBanner />
        <IngredientsSection />
        <HowToMake />
        <WhoWeAre />
        <PartnerSection />
        <FAQSection />
        <TrustBadges />
      </main>
      <EverydayDoseFooter />
    </>
  );
}
