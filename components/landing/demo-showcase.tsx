"use client";

import { useState, useMemo, useTransition } from "react";
import { Search, ArrowRight } from "lucide-react";
import { DEMOS_DATA, type DemoItem } from "@/data/demos";
import { AnimatedButtonText } from "@/components/ui/animated-button-text";

export function DemoShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();

  const filteredDemos = useMemo(() => {
    const query = searchQuery.toLowerCase().trim().replace(/\s+/g, " ");
    if (!query) return DEMOS_DATA;
    const terms = query.split(" ");
    return DEMOS_DATA.filter((demo) => {
      const haystack = `${demo.searchCategories} ${demo.title} ${demo.description}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [searchQuery]);

  function handleClear() {
    startTransition(() => {
      setSearchQuery("");
    });
  }

  return (
    <section className="site-section" id="demos" data-od-id="demo-showcase">
      <div className="site-container">
        <div className="mb-[clamp(44px,7vw,72px)] section-reveal">
          <div className="max-w-[760px]">
            <p className="eyebrow">Demo collection</p>
            <h2
              className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
              data-od-id="demos-heading"
            >
              Start with a site designed for your mission.
            </h2>
            <p className="lead mt-5">
              Explore professionally designed AlonePro demos for nonprofit and
              charity organizations. Choose a starting point, then customize it
              directly with Gutenberg.
            </p>
          </div>
        </div>

        {/* Search controls */}
        <div
          className="demo-search -mt-4 mb-10 grid grid-cols-[minmax(0,620px)_auto] items-end justify-between gap-6 max-[620px]:grid-cols-1 max-[620px]:items-stretch max-[620px]:mt-[-8px] section-reveal"
          role="search"
          data-od-id="demo-search"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="demo-search-input"
              className="font-mono text-[11px] leading-[1.3] uppercase tracking-[0.1em] text-[var(--muted)]"
            >
              Search the demo collection
            </label>
            <div className="flex gap-2.5">
              <div className="relative flex-1 max-w-[540px]">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--muted)]"
                  aria-hidden="true"
                />
                <input
                  className="h-12 w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 pl-11 text-[15px] text-[var(--fg)] placeholder:text-[var(--muted)] placeholder:opacity-85 focus:border-[var(--accent)] focus:outline-3 focus:outline-[var(--accent-soft)]"
                  id="demo-search-input"
                  type="search"
                  placeholder="Try “education”, “healthcare”, or “fundraising”"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-controls="demo-assets"
                  data-od-id="demo-search-input"
                />
              </div>
              {searchQuery && (
                <button
                  className="btn demo-search-clear"
                  id="demo-search-clear"
                  type="button"
                  onClick={handleClear}
                  data-od-id="demo-search-clear"
                >
                  <AnimatedButtonText text="Clear" />
                </button>
              )}
            </div>
          </div>

          <p
            className="meta min-w-[116px] pb-3.5 text-right max-[620px]:min-w-0 max-[620px]:pb-0 max-[620px]:text-left"
            id="demo-result-count"
            aria-live="polite"
          >
            Showing {filteredDemos.length}{" "}
            {filteredDemos.length === 1 ? "demo" : "demos"}
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div
          className="grid grid-cols-3 gap-x-6 gap-y-12 max-[1020px]:grid-cols-2 max-[620px]:grid-cols-1"
          id="demo-assets"
        >
          {filteredDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>

        {/* Empty State */}
        {filteredDemos.length === 0 && (
          <div
            className="my-8 border-y border-[var(--border)] py-14 text-center"
            id="demo-empty"
            role="status"
          >
            <h3 className="mb-2 text-[var(--fs-h3)] font-semibold">
              No demos match that search.
            </h3>
            <p className="text-[var(--muted)]">
              Try a broader mission area or clear the search to view all 15.
            </p>
          </div>
        )}

        <p
          className="mt-11 flex items-baseline gap-3 border-t border-[var(--border)] pt-4.5 text-[13px] text-[var(--muted)] max-[620px]:items-start"
          id="demo-note"
        >
          <span className="num font-semibold text-[var(--fg)]">NOTE</span>
          <span>
            Preview frames and catalog details are intentional placeholders. Replace
            every title, description, frame, and URL with its corresponding,
            unmodified AlonePro demo asset before launch.
          </span>
        </p>
      </div>
    </section>
  );
}

function DemoCard({ demo }: { demo: DemoItem }) {
  return (
    <article
      className="demo-card min-w-0"
      data-search={demo.searchCategories}
      data-od-id={demo.id}
    >
      <div
        className="group relative grid aspect-[16/10] place-items-center overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--fg)]"
        role="img"
        aria-label={`${demo.title} demo preview`}
      >
        {demo.image ? (
          <img
            src={demo.image}
            alt={demo.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <>
            <span className="font-mono text-[10px] leading-none uppercase tracking-[0.1em] text-[var(--muted)] absolute left-3.5 top-3.5">
              {demo.isPlaceholder ? "Catalog Placeholder" : "Demo Preview · Asset Required"}
            </span>
            <div className="demo-placeholder grid w-[62%] gap-2.5 text-[var(--muted)]" aria-hidden="true">
              <span className="h-[1px] w-[62%] bg-[var(--border)]" />
              <span className="h-[1px] w-full bg-[var(--border)]" />
              <div className="grid h-[70px] grid-cols-[1.45fr_0.55fr] gap-2.5">
                <span className="border border-[var(--border)] bg-[var(--fg-soft)]" />
                <span className="border border-[var(--border)] bg-[var(--fg-soft)]" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="pt-5">
        <h3 className="mb-2 text-[var(--fs-h3)] font-semibold leading-[1.25] tracking-[-0.01em]">
          {demo.title}
        </h3>
        <p className="mb-3 min-h-[66px] text-[14px] text-[var(--muted)] max-[620px]:min-h-0">
          {demo.description}
        </p>
        <a
          className="demo-link inline-flex min-h-[44px] items-center gap-1.5 border-b border-[var(--border)] text-[13px] font-semibold transition-colors duration-200 hover:border-[var(--fg)]"
          href={demo.url}
          aria-describedby="demo-note"
        >
          <span>{demo.linkText}</span>
          <ArrowRight className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
