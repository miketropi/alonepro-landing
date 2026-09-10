import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { PATTERN_TAGS, WORKFLOW_STEPS } from "@/data/showcase-info";

export function PatternShowcase() {
  return (
    <section className="site-section" data-od-id="patterns-building-blocks">
      <div className="site-container grid grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] items-start gap-[var(--gap-xl)] max-[920px]:grid-cols-1">
        <div className="section-reveal">
          <p className="eyebrow">Patterns &amp; building blocks</p>
          <h2
            className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
            data-od-id="patterns-heading"
          >
            Useful sections, ready to shape around your cause.
          </h2>
          <p className="lead mt-5" style={{ marginBottom: "36px" }}>
            Compose pages from familiar nonprofit content structures, then make every
            section your own.
          </p>
          <div className="flex flex-wrap gap-2.5" aria-label="Available pattern types">
            {PATTERN_TAGS.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="workflow border-t border-[var(--fg)] max-[920px]:mt-6" aria-label="Publishing workflow">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="workflow-step grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-[var(--border)] py-[19px]"
            >
              <span className="num font-mono text-[12px] text-[var(--muted)]">
                {step.num}
              </span>
              <strong className="font-display text-[21px] font-semibold text-[var(--fg)]">
                {step.title}
              </strong>
              <span className="text-[var(--muted)]">
                {step.isLast ? (
                  <Check className="h-[18px] w-[18px]" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
