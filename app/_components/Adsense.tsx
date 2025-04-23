// components/AdSense.tsx
import Script from "next/script";

export function AdSense() {
	const publisherId = "ca-pub-1266444059498080";

	return (
		<>
			<Script
				async
				src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
				crossOrigin="anonymous"
				strategy="afterInteractive"
			/>
		</>
	);
}
