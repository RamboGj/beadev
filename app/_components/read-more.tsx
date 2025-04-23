"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export interface FeaturedPostsProps {
	lang: string;
}

export function ReadMorePosts({ lang }: FeaturedPostsProps) {
	console.log(lang);
	return (
		<section className="px-4 lg:px-0" id="readMorePosts">
			<h1 className="w-fit text-[3rem] font-SatoshiBold tracking-[-1.44px] leading-auto bg-clip-text bg-brandGradient text-transparent  dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.16)] drop-shadow-[2px_2px_0_rgba(0,0,0,0.16)]">
				Read more
			</h1>

			<div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-12">
				{Array.from({ length: 12 }).map((_, index) => {
					return (
						<div
							key={String(index)}
							className="col-span-1 flex flex-col items-start"
						>
							<Link
								href={`/${lang}/post-021`}
								className="flex flex-col gap-y-2 group/post"
							>
								<Image
									loading="lazy"
									width={300}
									height={180}
									src="/sample01.jpg"
									alt="Post cover image"
									className="h-[180px] w-full rounded-[12px] object-cover overflow-hidden outline-1 outline-white/[16%] outline-offset-[-1px]"
								/>

								<div className="px-2">
									<h3 className="line-clamp-2 text-[1.5rem] group-hover/post:underline text-neutral800 tracking-[-3%] font-SatoshiBold leading-normal">
										Post title lorem ipsum dolor lorem ipsum
									</h3>

									<p className="font-SatoshiMedium text-neutral600 text-[1rem] leading-normal block mt-2 line-clamp-3">
										Post title lorem ipsum dolor lorem ipsum lorem ipsum dolor
										lorem upsum dolor lorem up...
									</p>
								</div>
							</Link>

							<div className="w-full flex items-center justify-between mt-1 px-2">
								<span className="text-[0.875rem] font-SatoshiMedium text-neutral300">
									Feb 9, 2025
								</span>

								<button
									onClick={(e) => {
										e.stopPropagation();
										// you can also add your share logic here
										console.log("Share button clicked!");
									}}
									className="w-8 h-8 flex hover:scale-110 hover:cursor-pointer transition duration-500 items-center justify-center bg-brandGradient rounded-[8px] outline-1 outline-black/[8%] outline-offset-[-1px]"
									type="button"
									aria-label="Share post"
								>
									<PaperPlaneTilt
										className="text-neutral100"
										size={20}
										weight="bold"
									/>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
