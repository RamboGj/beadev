"use client";

import Link from "next/link";
import Image from "next/image";

import { Moon, Sun } from "@phosphor-icons/react";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { Logo } from "../components/atoms/Logo/Logo";

export function BlogHeader({ themePayload }: { themePayload: string }) {
	const [theme, setTheme] = useState<string>(themePayload);

	const toggleTheme = () => {
		const htmlElement = document.documentElement;
		const currentTheme = htmlElement.className;
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		htmlElement.className = newTheme;
		setTheme(newTheme);
		setCookie("theme", newTheme);
	};

	const url = "https://beadev.com.br";
	const openInBrowser = () => {
		const userAgent = navigator.userAgent.toLowerCase();

		if (userAgent.includes("android")) {
			// Android intent
			const intentUrl = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;
			window.location.href = intentUrl;
		} else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
			// iOS doesn't support intents, prompt to open in Safari
			window.open(url, "_blank");
		} else {
			window.open(url, "_blank");
		}
	};

	return (
		<header className="border-b border-black/[16%] dark:border-white/[16%] fixed bg-transparent backdrop-blur-2xl inset-x-0 top-0 z-20">
			<div className="max-w-[1120px] mx-auto flex items-center justify-between px-4 lg:px-0 py-5">
				<Link aria-label="Go to main page" href="/">
					<Logo />
				</Link>

				<a
					href="https://beadev.com.br"
					target="_blank"
					className="text-3xl bg-red-500 h-12 w-32"
					type="button"
					rel="noopener noreferrer"
				>
					Open in browser Open in browser Open in browser Open in browser Open
					in browser
				</a>

				<button
					type="button"
					className="flex rounded-full p-3 flex-col overflow-hidden relative items-center justify-center hover:cursor-pointer hover:bg-neutral300 bg-neutral200 transition-all duration-500 group"
					onClick={toggleTheme}
					aria-label="Switch theme"
				>
					{theme === "light" ? (
						<>
							<Moon
								size={20}
								className="text-neutral800  opacity-0 scale-0 group-hover:animate-showFromTop animate-hideBackIcon absolute"
							/>
							<Sun
								size={20}
								className="text-neutral800 group-hover:animate-hideIcon animate-showBackIcon"
							/>
						</>
					) : (
						<>
							<Sun
								size={20}
								className="text-neutral800 opacity-0 scale-0 group-hover:animate-showFromTop animate-hideBackIcon absolute "
							/>
							<Moon
								size={20}
								className="text-neutral800 group-hover:animate-hideIcon animate-showBackIcon"
							/>
						</>
					)}
				</button>
				{/* <button>
					<Moon
				</button> */}
				{/* <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground opacity-50 pointer-events-none">
              Courses(coming soon)
            </Link>
          </nav>
          <Button className="bg-blue500" size="sm">Subscribe</Button>
        </div> */}
			</div>
		</header>
	);
}
