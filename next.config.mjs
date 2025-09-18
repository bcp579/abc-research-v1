/** @type {import('next').NextConfig} */

// Check if the environment is production
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  
  // Apply basePath and assetPrefix only in production
  basePath: isProd ? '/abc-research-v1' : '',
  assetPrefix: isProd ? '/abc-research-v1/' : '',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;