"use client";

import Image from "next/image";
import Link from "next/link";

export interface FeaturedPostsProps {
	lang: string;
}

export function FeaturedPosts({ lang }: FeaturedPostsProps) {
	return (
		<section id="featuredPosts">
			<h1 className="w-fit text-[3rem] font-SatoshiBold tracking-[-1.44px] leading-auto bg-clip-text bg-brandGradient text-transparent drop-shadow-[2px_2px_0_rgba(0,0,0,0.16)]">
				Featured Posts
			</h1>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
				<Link
					href={`/${lang}/post-021`}
					className="group col-span-4 flex items-center gap-x-10"
				>
					<Image
						width={577}
						height={346}
						src="/sample01.jpg"
						alt="Post cover image"
						className="h-[346px] w-full rounded-[12px] flex-1 outline-1 outline-black/[8%] outline-offset-[-1px]"
					/>

					<div className="max-w-[382px] flex flex-col flex-1">
						<h3 className="line-clamp-2 text-[2rem] text-neutral800 tracking-[-3%] font-SatoshiBold">
							Post title lorem ipsum dolor lorem ipsum
						</h3>

						<p className="font-SatoshiMedium text-neutral600 text-[1.25rem] block mt-2 line-clamp-3">
							Post title lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem
							upsum dolor lorem up...
						</p>

						<div className="flex items-center justify-between mt-1">
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral300">
								Feb 9, 2025
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

				<div className="group col-span-2 flex flex-col items-start">
					<Image
						width={486}
						height={292}
						src="/sample01.jpg"
						alt="Post cover image"
						className="h-[292px] w-full rounded-[12px] object-cover overflow-hidden"
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
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral300">
								Feb 9, 2025
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
				</div>

				<div className="group col-span-2 flex flex-col items-start">
					<Image
						width={486}
						height={292}
						src="/sample01.jpg"
						alt="Post cover image"
						className="h-[292px] w-full rounded-[12px] object-cover overflow-hidden"
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
							<span className="text-[0.875rem] font-SatoshiMedium text-neutral300">
								Feb 9, 2025
							</span>
							{/* 
							<button
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
				</div>
			</div>
		</section>
	);
}
