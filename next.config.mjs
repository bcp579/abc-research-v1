/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  
  // Hardcode the paths for the production build.
  basePath: '/abc-research-v1',
  assetPrefix: '/abc-research-v1/', // Note the trailing slash
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;