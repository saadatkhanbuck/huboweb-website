/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // agar static export kar rahe ho
  images: {
    unoptimized: true,  // disable default image optimization
  },
};

module.exports = nextConfig;
