const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const repo = "nextra-demo";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
