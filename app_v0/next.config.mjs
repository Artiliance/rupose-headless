/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'rupose.nl' },
      { protocol: 'https', hostname: 'www.rupose.nl' },
      // WP media-host na de headless-switch (Cloudways):
      { protocol: 'https', hostname: '**.cloudwaysapps.com' },
    ],
  },
}

export default nextConfig
