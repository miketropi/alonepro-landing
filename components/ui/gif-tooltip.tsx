"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface GifTooltipProps {
  src: string;
  alt?: string;
  width?: number;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ActiveGifTooltipProps extends Omit<GifTooltipProps, "disabled"> {
  alt: string;
  width: number;
}

const PULSE_STYLE_ID = "gif-tooltip-pulse-style";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToEnvironment(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getEnvironmentDisabled() {
  return (
    window.matchMedia(REDUCED_MOTION_QUERY).matches ||
    navigator.maxTouchPoints > 0
  );
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function GifTooltip({
  src,
  alt = "",
  width = 280,
  children,
  disabled = false,
}: GifTooltipProps) {
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isEnvironmentDisabled = useSyncExternalStore(
    subscribeToEnvironment,
    getEnvironmentDisabled,
    () => true,
  );

  if (!isMounted || disabled || isEnvironmentDisabled) return <>{children}</>;

  return (
    <ActiveGifTooltip key={src} src={src} alt={alt} width={width}>
      {children}
    </ActiveGifTooltip>
  );
}

function ActiveGifTooltip({
  src,
  alt,
  width,
  children,
}: ActiveGifTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function positionTooltip() {
    const tooltipWidth = tooltipRef.current?.offsetWidth ?? width;
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? 200;
    const maxX = Math.max(16, window.innerWidth - tooltipWidth - 16);
    const maxY = Math.max(8, window.innerHeight - tooltipHeight - 8);
    const preferredX = currentPosition.current.x + 24;
    const x = Math.max(
      16,
      preferredX <= maxX
        ? preferredX
        : Math.min(currentPosition.current.x - tooltipWidth - 24, maxX),
    );
    const y = Math.max(
      8,
      Math.min(currentPosition.current.y - tooltipHeight / 2, maxY),
    );

    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  function animate() {
    currentPosition.current.x +=
      (targetPosition.current.x - currentPosition.current.x) * 0.12;
    currentPosition.current.y +=
      (targetPosition.current.y - currentPosition.current.y) * 0.12;
    positionTooltip();
    rafRef.current = requestAnimationFrame(animate);
  }

  function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
    targetPosition.current = { x: event.clientX, y: event.clientY };
    currentPosition.current = { x: event.clientX, y: event.clientY };
    positionTooltip();
    setVisible(true);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    targetPosition.current = { x: event.clientX, y: event.clientY };
  }

  function handleMouseLeave() {
    setVisible(false);
    cancelAnimationFrame(rafRef.current);
  }

  useEffect(() => {
    if (!document.getElementById(PULSE_STYLE_ID)) {
      const style = document.createElement("style");
      style.id = PULSE_STYLE_ID;
      style.textContent =
        "@keyframes gif-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }";
      document.head.appendChild(style);
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const tooltip = (
    <div
      ref={tooltipRef}
      data-gif-tooltip=""
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: `min(${width}px, calc(100vw - 32px))`,
        opacity: visible && !error ? 1 : 0,
        transition: "opacity 150ms ease",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        overflow: "hidden",
        maxHeight: "calc(100vh - 16px)",
      }}
    >
      {!loaded && !error && (
        <div
          data-gif-tooltip-placeholder=""
          style={{
            width: "100%",
            height: 180,
            background: "var(--fg-soft)",
            animation: "gif-pulse 1.4s ease-in-out infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          display: "block",
          position: loaded ? "static" : "absolute",
          inset: loaded ? undefined : 0,
          width: "100%",
          height: "auto",
          maxHeight: "calc(100vh - 16px)",
          objectFit: "contain",
          opacity: loaded && !error ? 1 : 0,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {children}
      {createPortal(tooltip, document.body)}
    </div>
  );
}
