/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  }
};

module.exports = nextConfig;

//const withCSS = require("@zeit/next-css");
//module.exports = withCSS();
