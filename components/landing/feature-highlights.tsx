import React from "react";
import {
  Blocks,
  PanelsTopLeft,
  Palette,
  MonitorSmartphone,
  Zap,
  Columns3,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { FEATURES_DATA, type FeatureItem } from "@/data/features";

export function FeatureHighlights() {
  function renderIcon(iconName: FeatureItem["icon"]) {
    const props = { className: "w-[18px] h-[18px]", "aria-hidden": "true" as const };
    switch (iconName) {
      case "blocks":
        return <Blocks {...props} />;
      case "panels":
        return <PanelsTopLeft {...props} />;
      case "palette":
        return <Palette {...props} />;
      case "monitor":
        return <MonitorSmartphone {...props} />;
      case "zap":
        return <Zap {...props} />;
      case "columns":
        return <Columns3 {...props} />;
      case "heart":
        return <Heart {...props} />;
      case "sliders":
        return <SlidersHorizontal {...props} />;
    }
  }

  return (
    <section className="site-section" id="features" data-od-id="theme-features">
      <div className="site-container">
        <div className="mb-[clamp(44px,7vw,72px)] section-reveal">
          <div className="max-w-[760px]">
            <p className="eyebrow">Theme capabilities</p>
            <h2
              className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
              data-od-id="features-heading"
            >
              Everything needed to tell the story and invite action.
            </h2>
          </div>
        </div>

        <div className="feature-grid grid grid-cols-4 border-t border-[var(--border)] border-l border-[var(--border)] max-[1020px]:grid-cols-2 max-[620px]:grid-cols-1">
          {FEATURES_DATA.map((feat) => (
            <article
              key={feat.id}
              className="flex min-h-[250px] flex-col border-r border-b border-[var(--border)] p-[28px_24px] max-[620px]:min-h-0"
              data-od-id={feat.id}
            >
              <div className="mb-[var(--gap-md)] grid h-9 w-9 place-items-center border border-[var(--border)] text-[var(--fg)]">
                {renderIcon(feat.icon)}
              </div>
              <h3 className="mb-2 text-[var(--fs-h3)] font-semibold leading-[1.25] tracking-[-0.01em]">
                {feat.title}
              </h3>
              <p className="m-0 text-[15px] text-[var(--muted)]">
                {feat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
