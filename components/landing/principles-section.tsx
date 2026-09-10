import React from "react";
import { PRINCIPLES_DATA } from "@/data/showcase-info";

export function PrinciplesSection() {
  return (
    <section className="site-section" data-od-id="lightweight-responsive">
      <div className="site-container grid grid-cols-[0.82fr_1.18fr] items-start gap-[var(--gap-xl)] max-[920px]:grid-cols-1">
        <div className="section-reveal">
          <p className="eyebrow">Built with restraint</p>
          <h2
            className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
            data-od-id="principles-heading"
          >
            Lightweight where it matters. Flexible where you need it.
          </h2>
          <p className="lead mt-5">
            AlonePro emphasizes clear structure and thoughtful defaults without
            making unsupported performance claims.
          </p>
        </div>

        <div className="grid grid-cols-2 border-t border-[var(--fg)] max-[620px]:grid-cols-1 max-[920px]:mt-6 section-reveal">
          {PRINCIPLES_DATA.map((item, idx) => {
            const isOdd = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className={`py-[22px] border-b border-[var(--border)] ${
                  isOdd
                    ? "pr-5 border-r border-[var(--border)] max-[620px]:border-r-0 max-[620px]:pr-0"
                    : "pl-5 max-[620px]:pl-0"
                }`}
              >
                <strong className="block mb-1 text-[15px] font-semibold text-[var(--fg)]">
                  {item.title}
                </strong>
                <span className="block text-[13px] text-[var(--muted)]">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
