import { infos } from "@/config/landing";
import { BentoGrid } from "@/components/sections/bentogrid";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { Statistics } from "@/components/sections/statistics";
import { Powered } from "@/components/sections/powered";
import { PreviewLanding } from "@/components/sections/preview-landing";
import { Testimonials } from "@/components/sections/testimonials";

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      {/* <PreviewLanding /> */}
      {/* <Powered /> */}
      <BentoGrid />
      {/* <Statistics /> */}
      {/* <Features /> */}
      <Testimonials />
    </>
  );
}
