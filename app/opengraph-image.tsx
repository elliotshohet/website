import { ImageResponse } from "next/og";
export const alt = "Elliot Shohet — Senior Full-Stack Engineer. AI products, end to end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#080b09", color: "#effaf2", display: "flex", flexDirection: "column", padding: 76, justifyContent: "space-between" }}>
      <div style={{ display: "flex", color: "#4ade80", fontSize: 22, letterSpacing: 3 }}>SENIOR FULL-STACK ENGINEER</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 92, letterSpacing: -5 }}>Elliot Shohet.</div><div style={{ display: "flex", fontSize: 44, color: "#4ade80", marginTop: 12 }}>AI products, end to end.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a6baac" }}><span>TypeScript · React · Node.js · PostgreSQL</span><span>elliotshohet.com</span></div>
    </div>, size,
  );
}
