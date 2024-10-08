import { withContentlayer } from 'next-contentlayer2';

const nextConfig = { reactStrictMode: true };

const config = withContentlayer(nextConfig);
export default config;
