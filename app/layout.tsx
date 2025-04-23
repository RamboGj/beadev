import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cookies } from "next/headers";
import { AdSense } from "./_components/Adsense";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.beadev.com.br"),
	title: {
		default: "BeaDev | Your Technology Hub",
		template: "%s | BeaDev",
	},
	description:
		"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
	openGraph: {
		type: "website",
		url: "https://www.beadev.com.br",
		siteName: "BeaDev",
		title: "BeaDev | Your Technology Hub",
		description:
			"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "BeaDev Technology Hub",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "BeaDev | Your Technology Hub",
		description:
			"Stay ahead with BeaDev — your go-to hub for technology news, development tips, and innovation insights.",
		images: ["/og.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	},
	keywords: [
		"nextjs",
		"blog",
		"developer",
		"software engineering",
		"technology",
		"posts",
		"articles",
		"read more",
		"hub",
		"ai",
	],
	alternates: {
		languages: {
			en: "https://www.beadev.com.br/en-US",
			br: "https://www.beadev.com.br/pt-BR",
		},
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookiesStore = await cookies();

	const theme = cookiesStore.get("theme")?.value || "";

	return (
		<html className={theme} lang="en">
			<body className="antialiased">{children}</body>
			<Analytics />
			<SpeedInsights />
			<AdSense />
		</html>
	);
}
