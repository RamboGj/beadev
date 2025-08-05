import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cookies } from "next/headers";
import { AdSense } from "./_components/Adsense";
import { BrowserVerifier } from "./_components/BrowserVerifier/BrowserVerifier";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { env } from "./lib/env";
import { EnsureGAInit } from "./lib/ga";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookiesStore = await cookies();

	const theme = cookiesStore.get("theme")?.value || "";

	console.log("{env.NEXT_PUBLIC_GA_ID", env.NEXT_PUBLIC_GA_ID);

	return (
		<html className={theme} lang="en">
			<GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
			<EnsureGAInit />
			<body className="antialiased">
				{/* <BrowserVerifier /> */}
				{children}
			</body>
			<Analytics />
			<SpeedInsights />
			<AdSense />
		</html>
	);
}
