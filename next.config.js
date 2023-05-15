/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // i18n: { // not supported for static export
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
