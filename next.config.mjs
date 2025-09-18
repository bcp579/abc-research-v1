/**@type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: "/abc-research-v1",
    assetPrefix: "/abc-research-v1/",
    images: {
        unoptimized:true,
    },
};

export default nextConfig;