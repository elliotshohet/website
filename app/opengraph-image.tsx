import { ImageResponse } from "next/og";
export const alt = "Elliot Shohet — Senior Fullstack Engineer. Web, mobile, and AI. Open to remote roles.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#181111", color: "#fff1ed", display: "flex", flexDirection: "column", padding: 76, justifyContent: "space-between" }}>
      <div style={{ display: "flex", color: "#ff6652", fontSize: 22, letterSpacing: 4 }}>SENIOR FULLSTACK ENGINEER · OPEN TO REMOTE ROLES</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 92, letterSpacing: -5 }}>Elliot Shohet.</div><div style={{ display: "flex", fontSize: 44, color: "#ff6652", marginTop: 12 }}>Zero to one. Idea to production.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#cbb5af" }}><span>Web · Mobile · AI</span><span>elliotshohet.com</span></div>
    </div>, size,
  );
}
