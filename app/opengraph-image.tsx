import { ImageResponse } from "next/og";
export const alt = "Elliot Shohet — Software Engineer. Web, mobile, and AI. Los Angeles & remote.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#111410", color: "#f4f5ef", display: "flex", flexDirection: "column", padding: 76, justifyContent: "space-between" }}>
      <div style={{ display: "flex", color: "#b5d991", fontSize: 22, letterSpacing: 4 }}>SOFTWARE ENGINEER · LOS ANGELES & REMOTE</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 92, letterSpacing: -5 }}>Elliot Shohet.</div><div style={{ display: "flex", fontSize: 44, color: "#b5d991", marginTop: 12 }}>Full stack. Full ownership.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#b1b9ac" }}><span>Web · Mobile · AI</span><span>elliotshohet.com</span></div>
    </div>, size,
  );
}
