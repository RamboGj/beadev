"use client";

import { useEffect, useState } from "react";

export function BrowserVerifier() {
	const [uaState, setUaState] = useState<{
		browser: string;
		deviceType: string;
	}>({
		browser: "",
		deviceType: "",
	});

	useEffect(() => {
		const ua = navigator.userAgent;
		console.log("UA ->", ua);

		const isInstagram = ua?.indexOf("Instagram") > -1;
		if (isInstagram) {
			const isAndroid = ua.indexOf("android") > -1;

			setUaState({
				browser: "Instagram",
				deviceType: isAndroid ? "android" : "ios",
			});
			console.log(
				"The website is being accessed through the Instagram embedded browser.",
			);
		} else {
			setUaState({
				browser: "",
				deviceType: "",
			});
			console.log(
				"The website is not being accessed through the Instagram embedded browser.",
			);
		}
	}, []);

	// if (browser.name === "Instagram") {
	// 	request.nextUrl.pathname = "/inst";
	// 	return NextResponse.redirect(request.nextUrl);
	// }

	if (uaState.browser === "Instagram") {
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
