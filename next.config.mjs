import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

export default withContentlayer(nextConfig);
