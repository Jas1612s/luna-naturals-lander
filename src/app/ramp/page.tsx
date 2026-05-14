import { RampNav } from "@/components/ramp/RampNav";
import { RampHero } from "@/components/ramp/RampHero";
import { TradeAssessment } from "@/components/ramp/TradeAssessment";
import { CustomerLogos } from "@/components/ramp/CustomerLogos";
import { SpendVisibilitySection } from "@/components/ramp/SpendVisibilitySection";
import { ControlSpendSection } from "@/components/ramp/ControlSpendSection";
import { CompetitiveLimitsSection } from "@/components/ramp/CompetitiveLimitsSection";
import { ReceiptCaptureSection } from "@/components/ramp/ReceiptCaptureSection";
import { NewsletterSection } from "@/components/ramp/NewsletterSection";
import { DemoCTA } from "@/components/ramp/DemoCTA";
import { RampFooter } from "@/components/ramp/RampFooter";

export default function RampHomePage() {
  return (
    <>
      <RampNav />
      <main>
        <RampHero />
        <TradeAssessment />
        <CustomerLogos />
        <SpendVisibilitySection />
        <ControlSpendSection />
        <CompetitiveLimitsSection />
        <ReceiptCaptureSection />
        <NewsletterSection />
        <DemoCTA />
      </main>
      <RampFooter />
    </>
  );
}
