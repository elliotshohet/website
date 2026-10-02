"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Enable only after custom events are available on the site's analytics plan.
export function ConversionTracking() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_CONVERSION_TRACKING !== "true") return;
    function clicked(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      const name = target?.dataset.track;
      const allowed = ["email_click", "resume_download", "project_open"];
      if (name && allowed.includes(name)) {
        // Never include query strings, email addresses, or form values.
        try { track(name, { page: window.location.pathname }); } catch { /* Analytics must not interrupt navigation. */ }
      }
    }
    document.addEventListener("click", clicked);
    return () => document.removeEventListener("click", clicked);
  }, []);
  return null;
}
