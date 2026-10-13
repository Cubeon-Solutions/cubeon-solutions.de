import { ImageResponse } from "next/og";

export const alt = "Cubeon Solutions – Softwareentwicklung, Apps und Beratung aus Kassel für KMU deutschlandweit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "#f8fafc", color: "#0f172a", borderLeft: "18px solid #1e50d4" }}>
      <div style={{ display: "flex", fontSize: 30, color: "#1e50d4" }}>Cubeon Solutions · Aus Kassel. Deutschlandweit.</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.15 }}><div style={{ display: "flex" }}>Individuelle Software.</div><div style={{ display: "flex", color: "#1e50d4" }}>Apps. Beratung.</div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 25, color: "#334155" }}><div style={{ display: "flex" }}>Apps für Smartphone und Desktop.</div><div style={{ display: "flex" }}>Auf Wunsch mit KI, Datenanbindung, Betrieb und Wartung.</div><div style={{ display: "flex" }}>cubeon-solutions.de</div></div>
    </div>,
    size,
  );
}
