import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF4EC",
          color: "#3B241E",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#FF5A00",
            color: "#3B241E",
            borderRadius: 999,
            padding: "12px 32px",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 3,
          }}
        >
          ODONTOLOGIA · TEIXEIRA DE FREITAS, BA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginTop: 48,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Seu sorriso merece cuidado em cada detalhe.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 40,
            color: "#3B241E",
          }}
        >
          André Lucas Scalzer · Laizza Scalzer
        </div>
      </div>
    ),
    { ...size },
  );
}
