import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { DemoShowcase } from "@/components/landing/demo-showcase";
import { GutenbergShowcase } from "@/components/landing/gutenberg-showcase";
import { FeatureHighlights } from "@/components/landing/feature-highlights";
import { PatternShowcase } from "@/components/landing/pattern-showcase";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { CompatibleSection } from "@/components/landing/compatible-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { GsapProvider } from "@/components/motion/gsap-provider";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <GsapProvider>
        <main id="content">
          <HeroSection />
          <DemoShowcase />
          <GutenbergShowcase />
          <FeatureHighlights />
          <PatternShowcase />
          <PrinciplesSection />
          <CompatibleSection />
          <PricingSection />
          <FinalCta />
        </main>
        <SiteFooter />
      </GsapProvider>
    </>
  );
}
