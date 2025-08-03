"use client";

import type { ArticleAdProps } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export interface FeaturedPostsProps {
	lang: string;
	articles: ArticleAdProps[];
}

export function FeaturedPosts({ lang, articles }: FeaturedPostsProps) {
	return (
		<section className="px-4 lg:px-0" id="featuredPosts">
			<h1 className="w-fit text-[3rem] font-SatoshiBold tracking-[-1.44px] leading-auto bg-clip-text bg-brandGradient text-transparent dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.16)] drop-shadow-[2px_2px_0_rgba(0,0,0,0.16)]">
				Featured Posts
			</h1>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 lg:mt-12">
				<Link
					href={`/${lang}/${articles[0].slug}`}
					className="w-full group col-span-1 md:col-span-2 lg:col-span-4 flex-col md:flex-row flex items-center gap-x-10"
				>
					<Image
						width={577}
						height={346}
						src={articles[0].cover.url}
						alt={articles[0].title}
						className="h-[346px] aspect-square w-full rounded-[12px] flex-1 outline-1 outline-black/[8%] dark:outline-white/[16%] outline-offset-[-1px]"
					/>

					<div className="md:max-w-[382px] flex flex-col flex-1 mt-2 md:mt-0">
						<h2 className="line-clamp-2 text-[2rem] text-neutral800 tracking-[-3%] font-SatoshiBold">
							{articles[0].title}
						</h2>

						<p className="font-SatoshiMedium text-neutral600 text-[1.25rem] block mt-2 line-clamp-3">
							{articles[0].subtitle}
						</p>

						<div className="flex items-center justify-between mt-1">
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral400">
								{format(articles[0].publishedAt, "dd MMM yyyy")}
							</span>

							{/* <button
								className="w-8 h-8 flex hover:scale-110 hover:cursor-pointer transition duration-500 items-center justify-center bg-brandGradient rounded-[8px] outline-1 outline-black/[8%] outline-offset-[-1px]"
								type="button"
								aria-label="Share post"
							>
								<PaperPlaneTilt
									className="text-neutral100"
									size={20}
									weight="bold"
								/>
							</button> */}
						</div>
					</div>
				</Link>

				{/* <div className="group col-span-1 lg:col-span-2 flex flex-col items-start">
					<Image
						loading="lazy"
						width={486}
						height={292}
						src="/sample01.jpg"
						alt="Post cover image"
						className="h-[292px] w-full rounded-[12px] object-cover overflow-hidden outline-1 outline-black/[8%] dark:outline-white/[16%] outline-offset-[-1px]"
					/>

					<div className="flex flex-col items-start px-2 mt-2">
						<h3 className="line-clamp-2 text-[2rem] text-neutral800 tracking-[-3%] font-SatoshiBold leading-normal">
							Post title lorem ipsum dolor lorem ipsum
						</h3>

						<p className="font-SatoshiMedium text-neutral600 text-[1.25rem] leading-normal block mt-2 line-clamp-3">
							Post title lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem
							upsum dolor lorem up...
						</p>

						<div className="w-full flex items-center justify-between mt-3">
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral400">
								Feb 9, 2025
							</span>
						</div>
					</div>
				</div> */}

				{/* <div className="group col-span-1 lg:col-span-2 flex flex-col items-start">
					<Image
						loading="lazy"
						width={486}
						height={292}
						src="/sample01.jpg"
						alt="Post cover image"
						className="h-[292px] w-full rounded-[12px] object-cover overflow-hidden outline-1 outline-black/[8%] dark:outline-white/[16%] outline-offset-[-1px]"
					/>

					<div className="flex flex-col items-start px-2 mt-2">
						<h3 className="line-clamp-2 text-[2rem] text-neutral800 tracking-[-3%] font-SatoshiBold leading-normal">
							Post title lorem ipsum dolor lorem ipsum
						</h3>

						<p className="font-SatoshiMedium text-neutral600 text-[1.25rem] leading-normal block mt-2 line-clamp-3">
							Post title lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem
							upsum dolor lorem up...
						</p>

						<div className="w-full flex items-center justify-between mt-3">
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral400">
								Feb 9, 2025
							</span>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
}
