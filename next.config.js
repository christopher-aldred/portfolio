/** @type {import('next').NextConfig} */

const repo = "portfolio";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
