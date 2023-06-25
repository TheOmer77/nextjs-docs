import { withContentlayer } from 'next-contentlayer';

/**
 * Enable importing SVGs in React & MDX.
 * @see [SVGR docs](https://react-svgr.com/docs/next/#usage) (modified to include MDX)
 * @type {import('next').NextConfig['webpack']}
 */
const webpackConfig = config => {
  // Grab the existing rule that handles SVG imports
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test?.test?.('.svg')
  );

  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      issuer: /\.([jt]s|md)x?$/,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }
  );

  // Modify the file loader rule to ignore *.svg, since we have it handled now.
  fileLoaderRule.exclude = /\.svg$/i;

  return config;
};

const nextConfig = {
  reactStrictMode: true,
  webpack: webpackConfig,
};

const config = withContentlayer(nextConfig);
export default config;
