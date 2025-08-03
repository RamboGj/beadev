"use client";

import { useEffect } from "react";
import { env } from "../env";

const MOCK_USER_ID = "user-0101";

export function EnsureGAInit() {
	useEffect(() => {
		if (typeof window !== "undefined" && window.gtag) {
			console.log("window.tag", window.gtag);

			window.gtag("config", env.NEXT_PUBLIC_GA_ID || "", {
				user_id: MOCK_USER_ID,
			});
		}
	}, []);

	return null;
}
