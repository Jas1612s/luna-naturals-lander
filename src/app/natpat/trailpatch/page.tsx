import { TrailPatchHero } from "@/components/natpat/trailpatch/TrailPatchHero";
import { TrailPatchWhyKidsLove } from "@/components/natpat/trailpatch/TrailPatchWhyKidsLove";
import { TrailPatchNatural } from "@/components/natpat/trailpatch/TrailPatchNatural";
import { TrailPatchFeatureGrid } from "@/components/natpat/trailpatch/TrailPatchFeatureGrid";
import { TrailPatchTickProblems } from "@/components/natpat/trailpatch/TrailPatchTickProblems";
import { TrailPatchCompare } from "@/components/natpat/trailpatch/TrailPatchCompare";
import { TrailPatchFeaturedIn } from "@/components/natpat/trailpatch/TrailPatchFeaturedIn";
import { TrailPatchReviews } from "@/components/natpat/trailpatch/TrailPatchReviews";
import { TrailPatchFaqs } from "@/components/natpat/trailpatch/TrailPatchFaqs";
import { TrailPatchPurchase } from "@/components/natpat/trailpatch/TrailPatchPurchase";
import { TrailPatchBottom } from "@/components/natpat/trailpatch/TrailPatchBottom";
import { TrailPatchFooter } from "@/components/natpat/trailpatch/TrailPatchFooter";

export default function TrailPatchPage() {
  return (
    <main className="trailpatch-page">
      <TrailPatchHero />
      <TrailPatchWhyKidsLove />
      <TrailPatchNatural />
      <TrailPatchFeatureGrid />
      <TrailPatchTickProblems />
      <TrailPatchCompare />
      <TrailPatchFeaturedIn />
      <TrailPatchReviews />
      <TrailPatchFaqs />
      <TrailPatchPurchase />
      <TrailPatchBottom />
      <TrailPatchFooter />
    </main>
  );
}
