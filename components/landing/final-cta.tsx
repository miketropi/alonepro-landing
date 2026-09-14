import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedButtonText } from "@/components/ui/animated-button-text";
export function FinalCta() {
  return (
    <section className="section cta-section border-t border-[var(--border)]" data-od-id="final-cta">
      <div className="container" style={{ maxWidth: "720px", marginInline: "auto" }}>
        <p className="eyebrow">Begin with purpose</p>
        <h2 data-od-id="final-cta-heading">
          Your mission deserves a thoughtful website.
        </h2>
        <p className="lead" style={{ margin: "20px auto 32px" }}>
          Start with an AlonePro demo and shape it into a website that represents
          your organization—entirely with Gutenberg.
        </p>
        <div className="cta-actions">
          <a
            className="btn btn-primary"
            href="#pricing"
            data-od-id="final-get-alonepro"
          >
            <AnimatedButtonText text="Get AlonePro" />
          </a>
          <a
            className="btn btn-ghost btn-arrow inline-flex items-center gap-2"
            href="#demos"
            data-od-id="final-explore-demos"
          >
            <AnimatedButtonText text="Explore All Demos" />
            <ArrowRight className="h-4 w-4 transition-transform duration-180 ease-out group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
