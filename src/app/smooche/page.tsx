import { AnnouncementBar } from "@/components/smooche/AnnouncementBar";
import { SmoocheNav } from "@/components/smooche/SmoocheNav";
import { ProductSection } from "@/components/smooche/ProductSection";
import { FullerLipsSection } from "@/components/smooche/FullerLipsSection";
import { HowItWorksSection } from "@/components/smooche/HowItWorksSection";
import { StatsSection } from "@/components/smooche/StatsSection";
import { IngredientsSection } from "@/components/smooche/IngredientsSection";
import { BestSellersSection } from "@/components/smooche/BestSellersSection";
import { SmoocheFooter } from "@/components/smooche/SmoocheFooter";

export default function SmoochePage() {
  return (
    <>
      <AnnouncementBar />
      <SmoocheNav />
      <main>
        <ProductSection />
        <FullerLipsSection />
        <HowItWorksSection />
        <StatsSection />
        <IngredientsSection />
        <BestSellersSection />
      </main>
      <SmoocheFooter />
    </>
  );
}
