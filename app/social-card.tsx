type SocialCardProps = {
  eyebrow: string;
  heading: string;
  description: string;
  detail: string;
};

export function SocialCard({ eyebrow, heading, description, detail }: SocialCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#102824",
        color: "#f5f8f7",
        padding: "60px 68px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#bcdf81", fontSize: 24, letterSpacing: 1 }}>{eyebrow}</span>
        <span style={{ color: "#c6d5cf", fontSize: 23 }}>Elliot Shohet</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ fontSize: heading.length > 24 ? 64 : 86, fontWeight: 700, letterSpacing: -3, lineHeight: 1.08 }}>
          {heading}
        </div>
        <div style={{ fontSize: 37, lineHeight: 1.22, color: "#dce8e2", maxWidth: 1040 }}>
          {description}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #476057", paddingTop: 23 }}>
        <span style={{ color: "#c6d5cf", fontSize: 22 }}>{detail}</span>
        <span style={{ color: "#bcdf81", fontSize: 23 }}>elliotshohet.com</span>
      </div>
    </div>
  );
}
