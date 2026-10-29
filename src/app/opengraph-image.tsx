import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Cameron Davies, full-stack software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const headshot = await readFile(
    join(process.cwd(), "public/square_headshot.jpg"),
  );
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 96,
          background: "#171717",
          color: "#fafafa",
        }}
      >
        <img
          src={headshotSrc}
          alt=""
          width={280}
          height={280}
          style={{ borderRadius: 9999, border: "4px solid #404040" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>Cameron Davies</div>
          <div style={{ fontSize: 36, color: "#a3a3a3" }}>
            Full-stack software engineer
          </div>
          <div
            style={{
              marginTop: 24,
              height: 6,
              width: 220,
              borderRadius: 9999,
              backgroundImage: "linear-gradient(to right, #60a5fa, #ec4899)",
            }}
          />
          <div style={{ marginTop: 8, fontSize: 30, color: "#a3a3a3" }}>
            ozdv.me
          </div>
        </div>
      </div>
    ),
    size,
  );
}
