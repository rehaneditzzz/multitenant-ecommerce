import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = withPayload({
  outputFileTracing: true,
});

export default nextConfig;
