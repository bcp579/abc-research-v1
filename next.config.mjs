/**@type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/abc-research-v1',
    assetPrefix: '/abc-research-v1/',
    images: {
        unoptimized:true,
    },
};

export default nextConfig;