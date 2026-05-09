import { AnnouncementBar } from "@/components/AnnouncementBar";
import { GlobalNav } from "@/components/GlobalNav";
import { HeroATF } from "@/components/HeroATF";
import { WeightLossSection } from "@/components/WeightLossSection";
import { TestosteroneSection } from "@/components/TestosteroneSection";
import { LabsSection } from "@/components/LabsSection";
import { TrustSection } from "@/components/TrustSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Announcement bar scrolls normally */}
      <AnnouncementBar />
      {/* Nav is fixed at top-0, transparent until scrollY > 44 */}
      <GlobalNav />

      <main>
        {/* HeroATF has its own pt-[280px] to clear the fixed nav + give visual space */}
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
