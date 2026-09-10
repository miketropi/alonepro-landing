import React from "react";
import {
  ShoppingCart,
  Heart,
  Calendar,
  Mail,
  Layers,
  Compass,
  Search,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { COMPATIBLE_PLUGINS, type PluginItem } from "@/data/compatible";

export function CompatibleSection() {
  function renderIcon(iconName: PluginItem["icon"]) {
    const props = { className: "w-[18px] h-[18px]", "aria-hidden": "true" as const };
    switch (iconName) {
      case "cart":
        return <ShoppingCart {...props} />;
      case "heart":
        return <Heart {...props} />;
      case "calendar":
        return <Calendar {...props} />;
      case "mail":
        return <Mail {...props} />;
      case "layers":
        return <Layers {...props} />;
      case "compass":
        return <Compass {...props} />;
      case "search":
        return <Search {...props} />;
      case "more":
        return <Sparkles {...props} />;
    }
  }

  return (
    <section className="site-section" id="compatible" data-od-id="plugin-compatibility">
      <div className="site-container">
        <div className="mb-[clamp(44px,7vw,72px)] section-reveal">
          <div className="max-w-[760px]">
            <p className="eyebrow">Plugin compatibility</p>
            <h2
              className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
              data-od-id="compatible-heading"
            >
              Works with the tools your organization already uses.
            </h2>
            <p className="lead mt-5">
              AlonePro is built to coexist with the WordPress plugins nonprofits rely on—without conflicts, customizations, or workarounds.
            </p>
          </div>
        </div>

        <div className="compatible-grid grid grid-cols-4 border-t border-[var(--border)] border-l border-[var(--border)] max-[1020px]:grid-cols-2 max-[620px]:grid-cols-1">
          {COMPATIBLE_PLUGINS.map((plugin) => (
            <a
              key={plugin.id}
              className="compatible-item group flex min-h-[250px] flex-col border-r border-b border-[var(--border)] p-[28px_24px] max-[620px]:min-h-0"
              href={plugin.url}
              target="_blank"
              rel="noopener noreferrer"
              data-od-id={plugin.id}
            >
              <div className="mb-[var(--gap-md)] flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center border border-[var(--border)] text-[var(--fg)] transition-colors duration-200 group-hover:border-[var(--fg)]">
                  {renderIcon(plugin.icon)}
                </div>
                <ExternalLink
                  className="h-3.5 w-3.5 text-[var(--muted)] opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:text-[var(--fg)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-2 text-[var(--fs-h3)] font-semibold leading-[1.25] tracking-[-0.01em] text-[var(--fg)]">
                {plugin.name}
              </h3>

              <p className="m-0 text-[15px] leading-[1.55] text-[var(--muted)]">
                {plugin.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
