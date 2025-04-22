import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
        {
            source: '/(.*)?', // Matches all pages
            headers: [
                {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
                {
                  key: 'Content-Security-Policy',
                  value: "default-src 'self'",
                },
            ]
        }
    ]
}
  /* config options here */
};

export default nextConfig;
