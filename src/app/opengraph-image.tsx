import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const shot = await readFile(join(process.cwd(), "src/assets/og-dashboard.jpg"));
  const src = `data:image/jpeg;base64,${shot.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0b0b0c",
        color: "#f2f2ef",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 470,
          paddingLeft: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#b0b0aa",
          }}
        >
          <div style={{ width: 14, height: 14, background: "#c6f432" }} />
          Frontend engineer
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -3,
            marginTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>Mir</div>
          <div style={{ display: "flex" }}>Tauhidul</div>
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#c6f432" }}>
          Building for the web.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 110,
          left: 500,
          width: 760,
          height: 410,
          border: "1px solid rgba(255,255,255,0.22)",
          overflow: "hidden",
        }}
      >
        <img src={src} width={760} height={410} alt="" style={{ objectFit: "cover" }} />
      </div>
    </div>,
    size,
  );
}
