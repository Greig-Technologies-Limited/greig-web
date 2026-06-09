/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Required for Cloudflare Pages static export
  trailingSlash: true,

  // Image optimization — must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
