import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 72,
        background: "#0b0b0c",
        color: "#f2f2ef",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 28,
          color: "#b0b0aa",
        }}
      >
        <div style={{ width: 16, height: 16, background: "#c6f432" }} />
        Frontend design engineer · Dhaka, Bangladesh
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 120,
          fontWeight: 700,
          marginTop: 24,
          letterSpacing: -4,
        }}
      >
        {siteConfig.name}
      </div>
      <div style={{ display: "flex", fontSize: 44, marginTop: 8, color: "#c6f432" }}>
        Building for the web.
      </div>
    </div>,
    size,
  );
}
