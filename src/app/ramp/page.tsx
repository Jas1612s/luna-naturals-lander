import { RampNav } from "@/components/ramp/RampNav";
import { RampHero } from "@/components/ramp/RampHero";
import { PreQualCTABanner } from "@/components/ramp/PreQualCTABanner";
import { CustomerLogos } from "@/components/ramp/CustomerLogos";
import { SpendVisibilitySection } from "@/components/ramp/SpendVisibilitySection";
import { ControlSpendSection } from "@/components/ramp/ControlSpendSection";
import { CompetitiveLimitsSection } from "@/components/ramp/CompetitiveLimitsSection";
import { ReceiptCaptureSection } from "@/components/ramp/ReceiptCaptureSection";
import { DemoCTA } from "@/components/ramp/DemoCTA";
import { RampFooter } from "@/components/ramp/RampFooter";

export default function RampHomePage() {
  return (
    <>
      <RampNav />
      <main>
        <RampHero />
        <PreQualCTABanner />
        <CustomerLogos />
        <SpendVisibilitySection />
        <ControlSpendSection />
        <CompetitiveLimitsSection />
        <ReceiptCaptureSection />
        <DemoCTA />
      </main>
      <RampFooter />
    </>
  );
}
