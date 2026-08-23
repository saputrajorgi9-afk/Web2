import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export function initAnalytics() {
  if (!GA_ID) {
    console.warn("Google Analytics ID belum diatur.");
    return;
  }

  ReactGA.initialize(GA_ID);
}

export function trackEvent(
  action,
  category = "interaction",
  label = ""
) {
  if (!GA_ID) return;

  ReactGA.event({
    action,
    category,
    label,
  });
}

export function trackPageView(path) {
  if (!GA_ID) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
}