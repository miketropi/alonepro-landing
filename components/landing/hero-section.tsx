import React from "react";

export function HeroSection() {
  return (
    <section
      className="hero relative grid min-h-[min(800px,calc(100vh-68px))] items-center overflow-hidden py-[clamp(88px,12vw,164px)] max-[760px]:min-h-0"
      id="top"
      data-od-id="hero"
    >
      {/* Decorative Gutenberg wireframe blocks */}
      <div
        className="block-field absolute inset-x-[3%] inset-y-[7%] pointer-events-none opacity-70 max-[760px]:-inset-x-[8%] max-[760px]:inset-y-[5%] max-[760px]:opacity-45"
        aria-hidden="true"
      >
        <span
          data-hero-block
          className="absolute left-0 top-[5%] block w-[16%] aspect-square border border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_45%,transparent)]"
        />
        <span
          data-hero-block
          className="absolute right-[4%] top-[12%] block w-[10%] aspect-[1.7] border border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_45%,transparent)]"
        />
        <span
          data-hero-block
          className="absolute bottom-[4%] left-[8%] block w-[8%] aspect-[0.7] border border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_45%,transparent)]"
        />
        <span
          data-hero-block
          className="absolute bottom-[10%] right-0 block w-[17%] aspect-[2.2] border border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_45%,transparent)]"
        />
        <span
          data-hero-block
          className="absolute right-[20%] top-[40%] block w-[5%] aspect-square border border-[var(--border)] bg-[var(--fg-soft)]"
        />
      </div>

      <div className="site-container relative z-10 mx-auto max-w-[920px] text-center">
        <p className="eyebrow !text-[var(--accent)] hero-reveal">
          WordPress theme · Native Gutenberg
        </p>

        <h1
          className="mx-auto mb-[var(--gap-lg)] max-w-[14ch] text-[var(--fs-h1)] leading-[0.98] tracking-[-0.035em] font-medium hero-reveal"
          data-od-id="hero-heading"
        >
          Build meaningful websites.
        </h1>

        <p className="lead mx-auto mb-[clamp(44px,5.5vw,56px)] hero-reveal">
          AlonePro brings professionally designed nonprofit layouts, flexible
          customization, responsive foundations, and a lightweight native
          Gutenberg workflow into one focused theme.
        </p>
        <div className="hero-cta hero-reveal inline-flex flex-wrap justify-center gap-[var(--gap-sm)] max-[430px]:grid max-[430px]:w-full">
          <a
            className="btn btn-primary max-[430px]:w-full"
            href="#demos"
            data-od-id="hero-explore-demos"
          >
            Explore Demos
          </a>
          <a
            className="btn btn-secondary max-[430px]:w-full"
            href="#features"
            data-od-id="hero-view-features"
          >
            View Features
          </a>
        </div>

        <p className="meta mt-5 hero-reveal">
          Designed for nonprofit, charity, NGO, humanitarian, community, and
          social-impact websites.
        </p>
      </div>
    </section>
  );
}
