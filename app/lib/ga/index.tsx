"use client";

import { useEffect } from "react";
import { env } from "../env";
import { sendGAEvent } from "@next/third-parties/google";

const MOCK_USER_ID = "user-0101-WITHOUT_USER_iD_ON_CONFIG()";

export function EnsureGAInit() {
	useEffect(() => {
		if (typeof window !== "undefined" && window.gtag) {
			console.log("window.tag", window.gtag);

			window.gtag("set", { user_id: MOCK_USER_ID });

			// sendGAEvent("set", { user_id: MOCK_USER_ID });
			// sendGAEvent("config", env.NEXT_PUBLIC_GA_ID);

			window.gtag("config", env.NEXT_PUBLIC_GA_ID || "", {
				user_id: MOCK_USER_ID,
			});
		}
	}, []);

	return null;
}
