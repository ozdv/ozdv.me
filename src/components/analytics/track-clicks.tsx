"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

// Sends a PostHog event for clicks on any element rendered with
// `trackAttributes` from "@/lib/analytics".
export const TrackClicks = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const element = target?.closest<HTMLElement>("[data-track]");
      if (!element?.dataset.track) return;

      const properties: Record<string, string> = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        if (key === "track" || !key.startsWith("track") || !value) continue;
        // dataset turns data-track-location into trackLocation
        const name = key.slice("track".length);
        properties[name.charAt(0).toLowerCase() + name.slice(1)] = value;
      }

      posthog.capture(element.dataset.track, properties);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
};
