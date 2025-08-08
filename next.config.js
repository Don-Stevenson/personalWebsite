/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  trailingSlash: true, // Ensures URLs end with a slash for static hosting
  images: {
    unoptimized: true, // Can still be useful for Netlify deployment
  },
  experimental: {
    esmExternals: true,
  },
}

export default nextConfig
