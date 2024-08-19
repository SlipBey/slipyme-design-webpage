/* eslint-disable @typescript-eslint/no-var-requires */

const withImages = require("next-images");

/**
 * @type {import("next").NextConfig}
 */

module.exports = () => {
  const plugins = [withImages];
  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    poweredByHeader: false,
    trailingSlash: false,
    swcMinify: true,
    i18n: {
      locales: ["en", "tr"],
      defaultLocale: "tr",
    },
    images: {
      domains: [],
    },
    async redirects() {
      return [
        {
          source: "/github",
          destination: "https://github.com/SlipBey",
          permanent: true,
        },
        {
          source: "/instagram",
          destination: "https://www.instagram.com/SlipBey",
          permanent: true,
        },
        {
          source: "/youtube",
          destination: "https://www.youtube.com/@SlipBeyYoutube/",
          permanent: true,
        },
        {
          source: "/discord",
          destination: "https://discord.gg/ttGpRCZZp6",
          permanent: true,
        },
      ];
    },
  });
};
