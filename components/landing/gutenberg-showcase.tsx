"use client";

import React from "react";
import { CAPABILITIES_DATA } from "@/data/capabilities";
import { GifTooltip } from "@/components/ui/gif-tooltip";

export function GutenbergShowcase() {
  return (
    <section className="site-section" id="gutenberg" data-od-id="native-gutenberg">
      <div className="site-container grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-[clamp(52px,9vw,120px)] max-[920px]:grid-cols-1">
        <div className="sticky top-[112px] max-[920px]:static section-reveal">
          <p className="eyebrow">Native by design</p>
          <h2
            className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
            data-od-id="gutenberg-heading"
          >
            Built natively with Gutenberg.
          </h2>
          <p className="lead mt-6">
            Create, arrange, and refine content within WordPress’s native block
            workflow—without a fictional layer between your team and the content.
          </p>
        </div>

        <div
          className="capability-list border-t border-[var(--fg)]"
          aria-label="Gutenberg capabilities"
        >
          {CAPABILITIES_DATA.map((item) => (
            <GifTooltip
              key={item.num}
              src={item.gif}
              alt={`${item.title} preview`}
              width={680}
            >
              <div className="capability-row grid cursor-default grid-cols-[48px_1fr] gap-6 border-b border-[var(--border)] py-[25px]">
                <span className="num font-mono text-[12px] pt-[5px] text-[var(--muted)]">
                  {item.num}
                </span>
                <div>
                  <h3 className="mb-1 font-body text-[17px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[14px] text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </GifTooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
