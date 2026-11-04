// Custom PostHog events. Links opt in with `trackAttributes`, which renders
// `data-track-*` attributes that <TrackClicks /> turns into posthog.capture().

export type AnalyticsEvents = {
  resume_opened: { location: "hero" | "footer" | "experience_page" };
  project_link_clicked: {
    project: string;
    link: string;
    location: "project_card" | "icatholic_page";
  };
  social_link_clicked: {
    network: "github" | "linkedin" | "email";
    location: "hero" | "footer" | "mobile_nav" | "contact_cta";
  };
  contact_form_submitted: { success: boolean };
};

type ClickEvent = Exclude<keyof AnalyticsEvents, "contact_form_submitted">;

export const trackAttributes = <E extends ClickEvent>(
  event: E,
  properties: AnalyticsEvents[E],
) => {
  return {
    "data-track": event,
    ...Object.fromEntries(
      Object.entries(properties).map(([key, value]) => [
        `data-track-${key}`,
        String(value),
      ]),
    ),
  };
};
