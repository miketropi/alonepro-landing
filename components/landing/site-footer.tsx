import React from "react";
import { ExternalLink } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-[var(--border)] py-[54px_28px] text-[13px] text-[var(--muted)]"
      data-od-id="footer"
    >
      <div className="site-container">
        <div className="grid grid-cols-[1.5fr_repeat(3,0.65fr)] gap-[var(--gap-xl)] max-[1020px]:grid-cols-[1.4fr_repeat(3,0.6fr)] max-[1020px]:gap-7 max-[760px]:grid-cols-2 max-[430px]:grid-cols-1">
          <div className="max-[760px]:col-span-full max-[430px]:col-auto">
            <a
              className="mb-3.5 block font-display text-2xl font-semibold leading-none text-[var(--fg)]"
              href="#top"
              data-od-id="footer-brand-home"
            >
              AlonePro
            </a>
            <p className="m-0 max-w-[34ch]">
              Native Gutenberg WordPress theme for nonprofit, charity,
              humanitarian, community, and social-impact websites.
            </p>
            <a
              className="group mt-5 inline-flex items-center gap-2 text-[13px] text-[var(--fg)]"
              href="https://beplusthemes.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-od-id="footer-developer-link"
            >
              <span className="text-[var(--muted)]">Developed by</span>
              <strong className="font-semibold underline-offset-3 group-hover:underline">
                BeplusTheme
              </strong>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div>
            <strong className="mb-3 block text-[12px] font-semibold text-[var(--fg)]">
              Product
            </strong>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#demos">
              Demos
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#features">
              Features
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#gutenberg">
              Gutenberg
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#pricing">
              Pricing
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#compatible">
              Compatible
            </a>
          </div>

          <div>
            <strong className="mb-3 block text-[12px] font-semibold text-[var(--fg)]">
              Resources
            </strong>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              Documentation
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              Support
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              Changelog
            </a>
          </div>

          <div>
            <strong className="mb-3 block text-[12px] font-semibold text-[var(--fg)]">
              Legal
            </strong>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              License
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              Privacy
            </a>
            <a className="block w-fit py-1.25 hover:text-[var(--fg)] hover:underline hover:underline-offset-3" href="#footer-note">
              Terms
            </a>
          </div>
        </div>

        <div
          className="mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5 max-[430px]:flex-col max-[430px]:items-start"
          id="footer-note"
        >
          <span>© AlonePro. All rights reserved.</span>
          <span className="meta">
            Native Gutenberg · Nonprofit &amp; Charity · Developed by BeplusTheme
          </span>
        </div>
      </div>
    </footer>
  );
}
