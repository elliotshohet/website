import { ImageResponse } from "next/og";
export const alt =
  "Elliot Shohet — Full-stack Engineer. Useful products. Every layer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f5f8f7",
          color: "#163f46",
          display: "flex",
          flexDirection: "column",
          padding: 76,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#176f70",
            fontSize: 22,
            letterSpacing: -0.5,
          }}
        >
          Full-stack Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, letterSpacing: -5 }}>
            Elliot Shohet.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              color: "#176f70",
              marginTop: 12,
            }}
          >
            Useful products. Every layer.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#526b70",
          }}
        >
          <span>TypeScript · React · Node.js · PostgreSQL</span>
          <span>elliotshohet.com</span>
        </div>
      </div>
    ),
    size,
  );
}
