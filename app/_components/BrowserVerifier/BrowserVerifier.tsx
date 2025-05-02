"use client";

import { useEffect, useState } from "react";

const embeddedBrowsersList = [
	"instagram",
	"fbav",
	"fban",
	"fb_iab",
	"tiktok",
	"snapchat",
];

export function BrowserVerifier() {
	const [uaState, setUaState] = useState<{
		embedded: boolean;
		deviceType: string;
	}>({
		embedded: false,
		deviceType: "",
	});

	useEffect(() => {
		const ua = navigator.userAgent;

		const isXEmbedded = document.referrer.includes("t.co");

		const isInAppBrowser = embeddedBrowsersList.some((browser) =>
			ua.toLowerCase().includes(browser),
		);

		if (isInAppBrowser || isXEmbedded) {
			const isAndroid = ua.toLowerCase().indexOf("android") > -1;

			setUaState({
				embedded: true,
				deviceType: isAndroid ? "android" : "ios",
			});
		}
	}, []);

	if (uaState.embedded) {
		return (
			<div className="fixed inset-x-0 h-screen bg-red-500 z-50">
				<button type="button">Open IOS link</button>

				{uaState.deviceType === "android" ? (
					<a
						href="intent://beadev.com.br#Intent;scheme=https;end"
						target="_blank"
						rel="noreferrer"
						className="bg-green-300 h-[76px] w-[120px]"
					>
						OPEN ANDROID LINK
					</a>
				) : (
					<a
						href="x-safari-https://beadev.com.br"
						target="_blank"
						rel="noreferrer"
						className="bg-blue-300 h-[76px] w-[120px]"
					>
						OPEN IOS LINK
					</a>
				)}
			</div>
		);
	}

	return null;
}
