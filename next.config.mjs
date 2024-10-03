/** @type {import('next').NextConfig} */
/* eslint-disable */
const nextConfig = {
  images: {
    domains: ["media.licdn.com"],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
