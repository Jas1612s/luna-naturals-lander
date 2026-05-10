import { RampNav } from "@/components/ramp/RampNav";
import { RampHero } from "@/components/ramp/RampHero";
import { CustomerLogos } from "@/components/ramp/CustomerLogos";
import { SpendVisibilitySection } from "@/components/ramp/SpendVisibilitySection";
import { ControlSpendSection } from "@/components/ramp/ControlSpendSection";
import { CompetitiveLimitsSection } from "@/components/ramp/CompetitiveLimitsSection";
import { ReceiptCaptureSection } from "@/components/ramp/ReceiptCaptureSection";
import { DemoCTA } from "@/components/ramp/DemoCTA";
import { NewsletterSection } from "@/components/ramp/NewsletterSection";
import { RampFooter } from "@/components/ramp/RampFooter";

export default function Home() {
  return (
    <>
      <RampNav />
      <main>
        <RampHero />
        <CustomerLogos />
        <SpendVisibilitySection />
        <ControlSpendSection />
        <CompetitiveLimitsSection />
        <ReceiptCaptureSection />
        <DemoCTA />
        <NewsletterSection />
      </main>
      <RampFooter />
    </>
  );
}
