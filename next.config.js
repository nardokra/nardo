const path = require("path");
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },

  webpack(config) {
    config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles");
    config.resolve.alias["@assets"] = path.resolve(__dirname, "src/assets");
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "src/components"
    );

    return config;
  },
};
