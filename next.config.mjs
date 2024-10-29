import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

const config = withContentCollections(nextConfig);
export default config;
