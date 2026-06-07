import { RestNav } from "@/components/rest/RestNav";
import { RestAnnouncementBar } from "@/components/rest/RestAnnouncementBar";
import { RestHero } from "@/components/rest/RestHero";
import { RestFreeGifts } from "@/components/rest/RestFreeGifts";
import { RestBestsellers } from "@/components/rest/RestBestsellers";
import { RestPressLogos } from "@/components/rest/RestPressLogos";
import { RestSleepScore } from "@/components/rest/RestSleepScore";
import { RestUGC } from "@/components/rest/RestUGC";
import { RestFAQ } from "@/components/rest/RestFAQ";
import { RestFooter } from "@/components/rest/RestFooter";

export default function RestPage() {
  return (
    <>
      <RestAnnouncementBar />
      <RestNav />
      <main>
        <RestHero />
        <RestFreeGifts />
        <RestBestsellers />
        <RestPressLogos />
        <RestSleepScore />
        <RestUGC />
        <RestFAQ />
      </main>
      <RestFooter />
    </>
  );
}
