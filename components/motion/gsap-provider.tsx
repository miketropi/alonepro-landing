"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, CustomEase);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      return;
    }


    const ctx = gsap.context(() => {
      // 1. Hero Reveal Timeline (immediate, smooth, fail-safe)
      const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      heroTl
        .fromTo(
          ".hero-reveal",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "all",
          }
        )
        .fromTo(
          "[data-hero-block]",
          { opacity: 0, scale: 0.94 },
          {
            opacity: 0.68,
            scale: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform",
          },
          "-=0.4"
        );

      const headlines = gsap.utils.toArray<HTMLElement>("[data-hero-headline]");
      if (headlines.length > 1) {
        const enterEase = CustomEase.create(
          "hero-headline-enter",
          "0.22, 1, 0.36, 1",
        );
        const exitEase = CustomEase.create(
          "hero-headline-exit",
          "0.64, 0, 0.78, 0",
        );
        const headlineTl = gsap.timeline({ repeat: -1, delay: 0.4 });

        gsap.set(headlines, { autoAlpha: 0 });

        headlines.forEach((headline) => {
          const characters = headline.querySelectorAll<HTMLElement>(
            "[data-hero-character]",
          );

          headlineTl
            .set(headline, { autoAlpha: 1 })
            .set(characters, {
              autoAlpha: 0,
              y: 9.28,
              filter: "blur(12px)",
            })
            .to(characters, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.648,
              stagger: 0.018,
              ease: enterEase,
            })
            .to({}, { duration: 2.8 })
            .to(characters, {
              autoAlpha: 0,
              y: -9.28,
              filter: "blur(12px)",
              duration: 0.432,
              stagger: 0.011,
              ease: exitEase,
            })
            .set(headline, { autoAlpha: 0 });
        });
      }


      // Parallax effect on decorative hero blocks
      const heroSection = document.getElementById("top");
      if (heroSection) {
        gsap.to("[data-hero-block]", {
          yPercent: (i) => (i % 2 === 0 ? 14 : -12),
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      // Helper function for reusable section entrance animation
      const animateSectionHead = (selector: string, triggerElement?: string) => {
        const targets = gsap.utils.toArray<HTMLElement>(selector);
        targets.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: triggerElement || el,
              start: "top 90%",
              once: true,
            },
          });
        });
      };

      // 2. Section Headers Entrance
      animateSectionHead(".section-head");
      animateSectionHead(".gutenberg-copy");
      animateSectionHead('[data-od-id="patterns-building-blocks"] .section-reveal');
      animateSectionHead('[data-od-id="lightweight-responsive"] .section-reveal');
      animateSectionHead('[data-od-id="plugin-compatibility"] .section-reveal');
      animateSectionHead('[data-od-id="megamenu-showcase"] .section-reveal');
      animateSectionHead(".cta-section .container", ".cta-section");

      // 3. Demo Collection: search bar & cards grid
      const demoSearch = document.querySelector(".demo-search");
      if (demoSearch) {
        gsap.from(demoSearch, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: demoSearch,
            start: "top 90%",
            once: true,
          },
        });
      }

      const demoCards = gsap.utils.toArray<HTMLElement>("#demo-assets .demo-card");
      if (demoCards.length > 0) {
        gsap.from(demoCards, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "#demo-assets",
            start: "top 88%",
            once: true,
          },
        });
      }

      // 4. Gutenberg Capabilities
      const capabilityRows = gsap.utils.toArray<HTMLElement>(".capability-row");
      if (capabilityRows.length > 0) {
        gsap.from(capabilityRows, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".capability-list",
            start: "top 88%",
            once: true,
          },
        });
      }

      // 5. Theme Feature Cards
      const featureCards = gsap.utils.toArray<HTMLElement>(".feature-grid .feature");
      if (featureCards.length > 0) {
        gsap.from(featureCards, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 88%",
            once: true,
          },
        });
      }

      // 7. Principles List
      const principleItems = gsap.utils.toArray<HTMLElement>(".principle-item");
      if (principleItems.length > 0) {
        gsap.from(principleItems, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".principle-list",
            start: "top 88%",
            once: true,
          },
        });
      }

      // 8. Pricing Cards
      const priceCards = gsap.utils.toArray<HTMLElement>(".pricing-grid .price-card");
      if (priceCards.length > 0) {
        gsap.from(priceCards, {
          opacity: 0,
          y: 36,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 88%",
            once: true,
          },
        });
      }

      // 9. Compatible Plugin Items
      const compatibleItems = gsap.utils.toArray<HTMLElement>(".compatible-item");
      if (compatibleItems.length > 0) {
        gsap.from(compatibleItems, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: '[data-od-id="plugin-compatibility"]',
            start: "top 88%",
            once: true,
          },
        });
      }

      // 10. MegaMenu Walkthrough Items & Video Frame
      const megamenuEntries = gsap.utils.toArray<HTMLElement>(".megamenu-entry");
      if (megamenuEntries.length > 0) {
        gsap.from(megamenuEntries, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".megamenu-entries-list",
            start: "top 88%",
            once: true,
          },
        });
      }

      const megamenuPlayer = document.querySelector<HTMLElement>(".megamenu-player-frame");
      if (megamenuPlayer) {
        gsap.from(megamenuPlayer, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".megamenu-player-frame",
            start: "top 88%",
            once: true,
          },
        });
      }


      // Refresh ScrollTrigger after elements render
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
