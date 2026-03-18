/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Tells Next.js to build a static HTML/CSS/JS site
  images: {
    unoptimized: true, // Crucial: Disables server-side image optimization so images work on GitHub Pages
  },
};

module.exports = nextConfig; 
// Note: If your file is .mjs, use `export default nextConfig;` instead.