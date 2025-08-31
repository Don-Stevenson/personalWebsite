/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true,
  },
  // Ensure the build output goes to .next for Netlify
  // No custom distDir needed for standard Netlify deployment
}

export default nextConfig
