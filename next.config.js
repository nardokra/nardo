const path = require("path");
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["en-GB", "nl-NL"],
    defaultLocale: "en-GB",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  env: {
    HYGRAPH_API_TOKEN: process.env.HYGRAPH_API_TOKEN,
    NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
  },

  webpack(config) {
    config.resolve.alias["@/cmsTypes"] = path.resolve(
      __dirname,
      "src/types/generated/"
    );
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@/constants"] = path.resolve(
      __dirname,
      "src/constants"
    );
    config.resolve.alias["@/styles"] = path.resolve(__dirname, "src/styles");
    config.resolve.alias["@/utils"] = path.resolve(__dirname, "src/utils");

    return config;
  },
};
