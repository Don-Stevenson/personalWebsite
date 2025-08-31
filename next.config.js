/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove custom distDir for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true,
  },
}

export default nextConfig
