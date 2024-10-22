/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: "",
  assetPrefix: "",
  // output: "export",
  // strict mode rerenders twice, which slows down the performance.
  reactStrictMode: isProd ? true : false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
