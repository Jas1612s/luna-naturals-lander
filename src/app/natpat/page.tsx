import { NatPatNav } from "@/components/natpat/NatPatNav";
import { NatPatHero } from "@/components/natpat/NatPatHero";
import { NatPatCategories } from "@/components/natpat/NatPatCategories";
import { NatPatTestimonials } from "@/components/natpat/NatPatTestimonials";
import { NatPatInTheNews } from "@/components/natpat/NatPatInTheNews";
import { NatPatScience } from "@/components/natpat/NatPatScience";
import { NatPatFooter } from "@/components/natpat/NatPatFooter";

export default function NatPatPage() {
  return (
    <main>
      <NatPatNav />
      <NatPatHero />
      <NatPatCategories />
      <NatPatTestimonials />
      <NatPatInTheNews />
      <NatPatScience />
      <NatPatFooter />
    </main>
  );
}
