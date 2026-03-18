/** @type {import('next').NextConfig} */

// This check determines if you are running a production build or local development
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  // Apply the paths ONLY for the production build
  basePath: isProd ? '/abc-research-v1' : '',
  assetPrefix: isProd ? '/abc-research-v1/' : '',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;