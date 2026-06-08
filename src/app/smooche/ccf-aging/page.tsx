import { MagazineNav } from "@/components/smooche-ccf/MagazineNav";
import { ArticleHero } from "@/components/smooche-ccf/ArticleHero";
import { ArticleBody } from "@/components/smooche-ccf/ArticleBody";
import { HowItWorks } from "@/components/smooche-ccf/HowItWorks";
import { TraditionalVs } from "@/components/smooche-ccf/TraditionalVs";
import { FoundationFeatures } from "@/components/smooche-ccf/FoundationFeatures";
import { ProductComparison } from "@/components/smooche-ccf/ProductComparison";
import { ReviewsSection } from "@/components/smooche-ccf/ReviewsSection";
import { ComparisonTable } from "@/components/smooche-ccf/ComparisonTable";
import { FinalCTA } from "@/components/smooche-ccf/FinalCTA";
import { LimitedStockBanner } from "@/components/smooche-ccf/LimitedStockBanner";
import { CCFFooter } from "@/components/smooche-ccf/CCFFooter";

export default function CCFAgingPage() {
  return (
    <main className="min-h-screen bg-white">
      <MagazineNav />
      <ArticleHero />
      <ArticleBody />
      <HowItWorks />
      <TraditionalVs />
      <FoundationFeatures />
      <ProductComparison />
      <ReviewsSection />
      <ComparisonTable />
      <FinalCTA />
      <LimitedStockBanner />
      <CCFFooter />
    </main>
  );
}
