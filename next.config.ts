import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "",
	skipMiddlewareUrlNormalize: true,
	images: {
		remotePatterns: [
			{
				hostname: "images.ctfassets.net",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/(.*)?", // Matches all pages
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
				],
			},
		];
	},
	/* config options here */
};

export default nextConfig;
