import { ImageResponse } from "next/og";

export const alt = "Lokesh Kushwah — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 80% 20%, #312e81 0%, #080B14 55%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            color: "#818cf8",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          trackerhub.in
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>
          Lokesh Kushwah
        </div>
        <div style={{ fontSize: 44, color: "#94a3b8", marginTop: 20 }}>
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 30, color: "#64748b", marginTop: 40 }}>
          React · Next.js · Node.js
        </div>
      </div>
    ),
    size,
  );
}
