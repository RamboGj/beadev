import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  skipMiddlewareUrlNormalize: true,
  async headers() {
    return [
        {
            source: '/(.*)?', // Matches all pages
            headers: [
                {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
            ]
        }
    ]
}
  /* config options here */
};

export default nextConfig;
