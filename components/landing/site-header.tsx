"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_oklch,var(--bg)_93%,transparent)] backdrop-blur-[14px]"
      data-od-id="topnav"
    >
      <div className="site-container flex min-h-[68px] items-center justify-between gap-8 max-[760px]:min-h-[62px]">
        <a
          className="flex min-w-max items-baseline gap-3"
          href="#top"
          data-od-id="brand-home"
          aria-label="AlonePro home"
        >
          <span className="font-display text-[22px] font-semibold tracking-[-0.02em]">
            AlonePro
          </span>
          <span className="font-mono text-[10px] leading-[1.3] uppercase tracking-[0.08em] text-[var(--muted)] max-[1020px]:hidden">
            Native Gutenberg Nonprofit Charity
          </span>
        </a>

        <nav
          id="site-nav"
          aria-label="Primary navigation"
          className={`ml-auto flex gap-[clamp(16px,2.2vw,32px)] max-[760px]:absolute max-[760px]:left-0 max-[760px]:right-0 max-[760px]:top-[62px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:bg-[var(--bg)] max-[760px]:px-[var(--gutter)] max-[760px]:pt-[18px] max-[760px]:pb-[24px] ${
            isOpen ? "max-[760px]:flex" : "max-[760px]:hidden"
          }`}
        >
          <a
            href="#demos"
            onClick={handleLinkClick}
            data-od-id="nav-demos"
            className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] max-[760px]:flex max-[760px]:min-h-[44px] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:text-[var(--fg)]"
          >
            Demos
          </a>
          <a
            href="#features"
            onClick={handleLinkClick}
            data-od-id="nav-features"
            className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] max-[760px]:flex max-[760px]:min-h-[44px] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:text-[var(--fg)]"
          >
            Features
          </a>
          <a
            href="#gutenberg"
            onClick={handleLinkClick}
            data-od-id="nav-gutenberg"
            className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] max-[760px]:flex max-[760px]:min-h-[44px] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:text-[var(--fg)]"
          >
            Gutenberg
          </a>
          <a
            href="#pricing"
            onClick={handleLinkClick}
            data-od-id="nav-pricing"
            className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] max-[760px]:flex max-[760px]:min-h-[44px] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:text-[var(--fg)]"
          >
            Pricing
          </a>
          <a
            href="#compatible"
            onClick={handleLinkClick}
            data-od-id="nav-compatible"
            className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--fg)] max-[760px]:flex max-[760px]:min-h-[44px] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-[var(--border)] max-[760px]:text-[var(--fg)]"
          >
            Compatible
          </a>
        </nav>

        <a
          className="btn btn-primary max-[760px]:hidden"
          href="#pricing"
          data-od-id="header-get-alonepro"
        >
          Get AlonePro
        </a>

        <button
          className="hidden h-[44px] w-[44px] place-items-center border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] max-[760px]:grid"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleMenu}
          data-od-id="mobile-nav-toggle"
        >
          {isOpen ? <X className="h-[19px] w-[19px]" /> : <Menu className="h-[19px] w-[19px]" />}
        </button>
      </div>
    </header>
  );
}
