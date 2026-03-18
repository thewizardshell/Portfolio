import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog-posts";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OgImage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const title = post?.title ?? "Blog";
  const description = post?.description ?? "";
  const tags = post?.tags ?? [];
  const readingTime = post?.readingTime ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#EDE0C4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Borde decorativo superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#8A9A4E",
          }}
        />

        {/* Contenido principal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1, justifyContent: "center" }}>
          {/* Tags */}
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "10px" }}>
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#C8D89A",
                    color: "#3D4A1A",
                    fontSize: "18px",
                    padding: "4px 14px",
                    borderRadius: "999px",
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Título */}
          <div
            style={{
              fontSize: title.length > 60 ? "48px" : "56px",
              fontWeight: 700,
              color: "#3D2800",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Descripción */}
          {description && (
            <div
              style={{
                fontSize: "24px",
                color: "#7A5C30",
                maxWidth: "820px",
                lineHeight: 1.5,
                fontFamily: "sans-serif",
              }}
            >
              {description.length > 120 ? description.slice(0, 120) + "..." : description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #C8B898",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "#8A9A4E",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              VR
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "20px", color: "#3D2800", fontWeight: 700, fontFamily: "sans-serif" }}>
                Vicente Roa
              </span>
              <span style={{ fontSize: "16px", color: "#7A5C30", fontFamily: "sans-serif" }}>
                vctroa.cl
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#7A5C30",
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {readingTime} min de lectura
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
