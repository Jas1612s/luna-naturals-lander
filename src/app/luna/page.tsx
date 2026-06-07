import { LunaNav } from "@/components/luna/LunaNav";
import { LunaHero } from "@/components/luna/LunaHero";
import { LunaTrustBar } from "@/components/luna/LunaTrustBar";
import { LunaBestSellers } from "@/components/luna/LunaBestSellers";
import { LunaCollections } from "@/components/luna/LunaCollections";
import { LunaBrand } from "@/components/luna/LunaBrand";
import { LunaStory } from "@/components/luna/LunaStory";
import { LunaProtection } from "@/components/luna/LunaProtection";
import { LunaTestimonials } from "@/components/luna/LunaTestimonials";
import { LunaFooter } from "@/components/luna/LunaFooter";

export default function LunaPage() {
  return (
    <main>
      <LunaNav />
      <LunaHero />
      <LunaTrustBar />
      <LunaBestSellers />
      <LunaCollections />
      <LunaBrand />
      <LunaStory />
      <LunaProtection />
      <LunaTestimonials />
      <LunaFooter />
    </main>
  );
}
