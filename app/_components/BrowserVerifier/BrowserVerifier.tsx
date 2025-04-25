"use client";

import { useEffect, useState } from "react";

export function BrowserVerifier() {
	const [displayModal, setDisplayModal] = useState<boolean>(false);

	useEffect(() => {
		const ua = navigator.userAgent;
		console.log("UA ->", ua);

		const isInstagram = ua?.indexOf("Instagram") > -1;
		if (isInstagram) {
			setDisplayModal(true);
			console.log(
				"The website is being accessed through the Instagram embedded browser.",
			);
		} else {
			console.log(
				"The website is not being accessed through the Instagram embedded browser.",
			);
		}
	}, []);

	// if (browser.name === "Instagram") {
	// 	request.nextUrl.pathname = "/inst";
	// 	return NextResponse.redirect(request.nextUrl);
	// }

	if (displayModal) {
		return (
			<div className="fixed inset-x-0 bg-red-500 Z-50">
				<button type="button">Open IOS link</button>
			</div>
		);
	}

	return null;
}
