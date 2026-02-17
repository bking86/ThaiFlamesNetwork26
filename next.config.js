
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Ensuring the API key is accessible in the build context if needed
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
};

module.exports = nextConfig;
