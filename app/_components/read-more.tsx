"use client";

import type { ArticleAdProps } from "@/lib/types";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export interface FeaturedPostsProps {
	lang: string;
	articles: ArticleAdProps[];
}

export function ReadMorePosts({ lang, articles }: FeaturedPostsProps) {
	return (
		<section className="px-4 lg:px-0" id="readMorePosts">
			<h1 className="w-fit text-[3rem] font-SatoshiBold tracking-[-1.44px] leading-auto bg-clip-text bg-brandGradient text-transparent  dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.16)] drop-shadow-[2px_2px_0_rgba(0,0,0,0.16)]">
				Read more
			</h1>

			<div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-12">
				{articles?.map(
					({ cover, categories, publishedAt, subtitle, slug, title }) => {
						return (
							<div key={slug} className="col-span-1 flex flex-col items-start">
								<Link
									href={`/${lang}/${slug}`}
									className="flex flex-col gap-y-2 group/post"
								>
									<Image
										loading="lazy"
										width={300}
										height={180}
										src={cover.url}
										alt={title}
										className="h-[180px] w-full rounded-[12px] object-cover overflow-hidden outline-1 outline-white/[16%] outline-offset-[-1px]"
									/>

									<div className="px-2">
										<h3 className="line-clamp-2 text-[1.5rem] group-hover/post:underline text-neutral800 tracking-[-3%] font-SatoshiBold leading-normal">
											{title}
										</h3>

										<p className="font-SatoshiMedium text-neutral600 text-[1rem] leading-normal block mt-2 line-clamp-3">
											{subtitle}
										</p>
									</div>
								</Link>

								<div className="w-full flex items-center justify-between mt-1 px-2">
									<span className="text-[0.875rem] font-SatoshiMedium text-neutral300">
										{format(publishedAt, "dd MMM yyyy")}
									</span>

									<button
										onClick={(e) => {
											e.stopPropagation();
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
					},
				)}
			</div>
		</section>
	);
}
