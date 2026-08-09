/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};
