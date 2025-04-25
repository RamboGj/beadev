import { type NextRequest, NextResponse, userAgent } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en-US", "pt-BR"];

function getLocale(request: NextRequest) {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	const defaultLocale = "en-US";

	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const { browser, device, os } = userAgent(request);

	console.log("browser ->", browser);
	console.log("device ->", device);
	console.log("os ->", os);

	if (browser.name === "Instagram") {
		request.nextUrl.pathname = "/inst";
		return NextResponse.redirect(request.nextUrl);
	}

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.startsWith("/fonts") || // Allow fonts directory access
		pathname.match(
			/\.(svg|ico|png|jpg|jpeg|gif|webp|txt|xml|json|woff|woff2|ttf|eot)$/,
		)
	) {
		// Skip middleware for static assets and API routes
		return NextResponse.next();
	}

	if (pathname === "/") {
		// Check if already has locale
		const pathnameHasLocale = locales.some(
			(locale) =>
				pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
		);

		if (pathnameHasLocale) {
			return NextResponse.next();
		}

		// Redirect to locale prefixed path
		const locale = getLocale(request);

		request.nextUrl.pathname = `/${locale}${pathname}`;
		return NextResponse.redirect(request.nextUrl);
	}

	const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
	// 	const cspHeader = `
	//     default-src 'self';
	//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
	//     style-src  'unsafe-inline' 'self';
	//     img-src 'self' blob: data:;
	//     font-src 'self' data:;
	//     object-src 'none';
	//     base-uri 'self';
	//     form-action 'self';
	//     frame-ancestors 'none';
	//     upgrade-insecure-requests;
	// `;

	const cspHeader = `
    
 `;
	// Replace newline characters and spaces
	const contentSecurityPolicyHeaderValue = cspHeader
		.replace(/\s{2,}/g, " ")
		.trim();

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-nonce", nonce);

	requestHeaders.set(
		"Content-Security-Policy",
		contentSecurityPolicyHeaderValue,
	);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
	response.headers.set(
		"Content-Security-Policy",
		contentSecurityPolicyHeaderValue,
	);

	return response;
}

export const config = {
	matcher: ["/((?!_next.*\\..*).*)"],
};
