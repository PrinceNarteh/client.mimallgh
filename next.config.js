/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com", "res.cloudinary.com", "localhost"],
  },
};

module.exports = nextConfig;
