import type { SVGProps } from "react";
const paths = {
  briefcase: "M8 6V4h8v2M3 6h18v14H3zM3 11c5 4 13 4 18 0M10 12h4",
  user: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-3a8 8 0 0 1 16 0v3",
  mail: "M3 5h18v14H3zM3 5l9 7 9-7",
  download: "M12 3v12M7 10l5 5 5-5M4 16v5h16v-5",
  arrow: "M4 12h16M14 6l6 6-6 6",
  down: "M12 4v16M6 14l6 6 6-6",
  external: "M8 5H4v15h15v-4M12 4h8v8M20 4L10 14",
  globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18",
  phone: "M7 2h10v20H7zM10 18h4",
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18",
  spark: "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z",
  music: "M9 18V5l12-3v13M9 5l12-3M9 18a3 3 0 1 1-3-3h3M21 15a3 3 0 1 1-3-3h3",
  pin: "M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
  sun: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",
  moon: "M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11",
  layers: "M12 3l10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5",
  up: "M12 20V4M6 10l6-6 6 6",
};
export function Icon({ name, className = "", ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}><path d={paths[name]} /></svg>;
}
