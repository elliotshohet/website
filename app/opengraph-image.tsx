import { ImageResponse } from "next/og";
import { SocialCard } from "./social-card";

export const alt = "Elliot Shohet — Full-stack Engineer. AI products, end to end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="FULL-STACK ENGINEER"
      heading="Elliot Shohet."
      description="AI products, end to end."
      detail="Mobile · Web · APIs · AI agents"
    />,
    size,
  );
}
