import React from "react";
import { PATTERN_TAGS } from "@/data/showcase-info";
import { PatternWorkflow } from "./pattern-workflow";

export function PatternShowcase() {
  return (
    <section className="site-section" data-od-id="patterns-building-blocks">
      <div className="site-container grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-[clamp(52px,9vw,120px)] max-[920px]:grid-cols-1">
        <div className="sticky top-[112px] max-[920px]:static section-reveal">
          <p className="eyebrow">Patterns &amp; building blocks</p>
          <h2
            className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
            data-od-id="patterns-heading"
          >
            Useful sections, ready to shape around your cause.
          </h2>
          <p className="lead mt-6">
            Compose pages from familiar nonprofit content structures, then make every
            section your own.
          </p>
          <div className="mt-9 flex flex-wrap gap-2.5" aria-label="Available pattern types">
            {PATTERN_TAGS.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <PatternWorkflow />
      </div>
    </section>
  );
}
