/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true,
  },
  webpack: null, // Explicitly disable custom webpack to satisfy Turbopack in Next.js 16
}

export default nextConfig
