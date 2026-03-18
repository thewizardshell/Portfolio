import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ hostname: "media.licdn.com" }],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  reactStrictMode: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
