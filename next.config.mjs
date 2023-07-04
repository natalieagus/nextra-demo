import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default withNextra({
  ...nextConfig,
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
});
