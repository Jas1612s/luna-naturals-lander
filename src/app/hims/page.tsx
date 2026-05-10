import { AnnouncementBar } from "@/components/AnnouncementBar";
import { GlobalNav } from "@/components/GlobalNav";
import { HeroATF } from "@/components/HeroATF";
import { WeightLossSection } from "@/components/WeightLossSection";
import { TestosteroneSection } from "@/components/TestosteroneSection";
import { LabsSection } from "@/components/LabsSection";
import { TrustSection } from "@/components/TrustSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Footer } from "@/components/Footer";

export default function HimsHome() {
  return (
    <>
      <AnnouncementBar />
      <GlobalNav />
      <main>
        <HeroATF />
        <WeightLossSection />
        <TestosteroneSection />
        <LabsSection />
        <TrustSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </>
  );
}
