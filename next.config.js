const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const repo = "nextra-demo";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  ...withNextra({
    eslint: {
      // Eslint behaves weirdly in this monorepo.
      ignoreDuringBuilds: true,
    },
    redirects: () => [
      {
        source: "/docs/docs-theme/built-ins/callout",
        destination: "/docs/guide/built-ins/callout",
        permanent: true,
      },
    ],
  }),
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
