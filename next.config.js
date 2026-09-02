/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-loader-spinner", "styled-components"],
}

export default nextConfig
