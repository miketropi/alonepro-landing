"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Info } from "lucide-react";
import {
  MEGAMENU_SEGMENTS,
  MEGAMENU_VIDEO_URL,
  MEGAMENU_NOTICE,
} from "@/data/megamenu";

export function MegaMenuSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(0);

  // Compute active segment and its progress
  const activeSegment = MEGAMENU_SEGMENTS[activeSegmentIndex] || MEGAMENU_SEGMENTS[0];
  const segmentDuration = activeSegment.endTime - activeSegment.startTime;
  const rawSegmentElapsed = currentTime - activeSegment.startTime;
  const segmentProgress = Math.max(
    0,
    Math.min(1, rawSegmentElapsed / (segmentDuration || 1))
  );

  // Determine active segment index based on currentTime
  const updateSegmentFromTime = useCallback((time: number) => {
    const idx = MEGAMENU_SEGMENTS.findIndex(
      (seg) => time >= seg.startTime && time < seg.endTime
    );
    if (idx !== -1) {
      setActiveSegmentIndex(idx);
    } else if (time >= MEGAMENU_SEGMENTS[MEGAMENU_SEGMENTS.length - 1].startTime) {
      setActiveSegmentIndex(MEGAMENU_SEGMENTS.length - 1);
    }
  }, []);

  // Time update listener
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);
    updateSegmentFromTime(current);
  };

  // Autoplay when in viewport, pause when out
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Seek to specific segment on click
  const seekToSegment = (index: number) => {
    const video = videoRef.current;
    if (!video) return;
    const target = MEGAMENU_SEGMENTS[index];
    if (!target) return;
    video.currentTime = target.startTime;
    setActiveSegmentIndex(index);
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <section
      className="site-section bg-[var(--bg)] border-t border-[var(--border)]"
      id="megamenu"
      data-od-id="megamenu-showcase"
      ref={containerRef}
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-[clamp(40px,6vw,68px)] section-reveal">
          <div className="max-w-[760px]">
            <p className="eyebrow">Visual Mega Navigation</p>
            <h2
              className="text-[var(--fs-h2)] leading-[1.06] tracking-[-0.025em] font-medium"
              data-od-id="megamenu-heading"
            >
              Navigation designed to connect donors with your cause.
            </h2>
            <p className="lead mt-4 text-[16px]">
              Highlight urgent campaigns, volunteer programs, and direct donation
              links with flexible Gutenberg mega menus—no custom code required.
            </p>
          </div>
        </div>

        {/* Two-column layout: Left = interactive synced entries, Right = video player */}
        <div className="grid grid-cols-[minmax(280px,360px)_minmax(0,1fr)] items-start gap-[clamp(28px,3.5vw,52px)] max-[1020px]:grid-cols-1">
          {/* Column 1: Synchronized Segment Entries (order-2 on mobile so video is visible first) */}
          <div
            className="megamenu-entries-list flex flex-col gap-2.5 max-[1020px]:order-2"
            role="tablist"
            aria-label="MegaMenu walkthrough chapters"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                Walkthrough chapters
              </span>
              <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
                Click to seek
              </span>
            </div>

            {MEGAMENU_SEGMENTS.map((segment, index) => {
              const isActive = activeSegmentIndex === index;
              return (
                <div
                  key={segment.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => seekToSegment(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      seekToSegment(index);
                    }
                  }}
                  className={`megamenu-entry group relative flex flex-col rounded-[6px] p-4 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[var(--surface)] border border-[color-mix(in_oklch,var(--accent)_30%,var(--border))] shadow-[0_4px_16px_rgba(20,18,17,0.04)]"
                      : "bg-transparent border border-transparent hover:bg-[color-mix(in_oklch,var(--surface)_65%,transparent)] hover:border-[var(--border)]"
                  }`}
                  data-od-id={`megamenu-step-${segment.id}`}
                >
                  {/* Top line: Numeral + H4 Title + Timestamp */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className={`font-mono text-[12px] font-semibold transition-colors ${
                          isActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--muted)] group-hover:text-[var(--fg)]"
                        }`}
                      >
                        {segment.num}
                      </span>
                      <h4
                        className={`font-display text-[18px] md:text-[19px] font-medium leading-[1.22] tracking-[-0.015em] transition-colors ${
                          isActive
                            ? "text-[var(--fg)] font-semibold"
                            : "text-[var(--fg)] group-hover:text-[var(--accent)]"
                        }`}
                      >
                        {segment.title}
                      </h4>
                    </div>

                    <span className="font-mono text-[11px] text-[var(--muted)] shrink-0 tabular-nums pt-0.5">
                      {segment.timeRange}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p className="mt-1.5 m-0 text-[13px] leading-[1.5] text-[var(--muted)] pl-5">
                    {segment.description}
                  </p>

                  {/* Active Segment Progress Bar */}
                  {isActive && (
                    <div
                      className="mt-3 ml-5 h-[2px] rounded-full bg-[color-mix(in_oklch,var(--accent)_20%,transparent)] overflow-hidden"
                      aria-hidden="true"
                    >
                      <div
                        className="h-full bg-[var(--accent)] transition-[width] duration-150 ease-linear"
                        style={{ width: `${segmentProgress * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2: Video Player with Modern Browser Frame (No Controls) */}
          <div className="sticky top-[100px] max-[1020px]:static max-[1020px]:order-1">
            <div
              className="megamenu-player-frame overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_rgba(20,18,17,0.07)]"
              data-od-id="megamenu-player"
            >
              {/* Minimalist Browser Window Header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] bg-[color-mix(in_oklch,var(--surface)_92%,var(--bg))] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--muted)]">
                    alonepro / visual-megamenu
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-semibold text-[var(--fg)]">
                    Live Demo · 1080p
                  </span>
                </div>
              </div>

              {/* Video Container (No Controls) */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  src={MEGAMENU_VIDEO_URL}
                  playsInline
                  autoPlay
                  muted
                  loop
                  onTimeUpdate={handleTimeUpdate}
                  className="h-full w-full object-cover"
                  aria-label="AlonePro MegaMenu setup walkthrough video"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notice Message Callout */}
        <div
          className="mt-[clamp(32px,4.5vw,52px)] rounded-[4px] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] bg-[var(--surface)] p-4 sm:p-5 section-reveal"
          role="note"
          aria-label="Notice: The AlonePro Difference"
        >
          <div className="flex items-start gap-3 sm:gap-3.5">
            <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklch,var(--accent)_14%,transparent)] text-[var(--accent)]">
              <Info className="h-3.5 w-3.5 stroke-[2.2]" aria-hidden="true" />
            </div>

            <div className="flex-1 text-[13.5px] sm:text-[14px] leading-[1.6] text-[var(--muted)]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] mr-2">
                {MEGAMENU_NOTICE.badge} · {MEGAMENU_NOTICE.title}:
              </span>
              <span className="text-[var(--fg)] font-body">
                {MEGAMENU_NOTICE.message}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
