"use client";

import type { ArticleProps } from "@/lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export function BlogPostPageClient({ article }: { article: ArticleProps }) {
	return (
		<main className="bg-neutral100 flex flex-col items-start w-full pb-32">
			<div className="w-ful py-20 flex justify-center mx-auto">
				<Image
					unoptimized
					alt="Article Image"
					width="1200"
					height="630"
					src={article.cover.url}
				/>
			</div>
			<div className="max-w-[1120px] w-full mx-auto flex flex-col gap-y-4 px-4 lg:px-0">
				<h1 className="text-4xl lg:text-5xl text-neutral800 font-SatoshiBold">
					{article.title}
				</h1>
				<article className="text-neutral500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed block mt-8">
					{documentToReactComponents(article.content.json)}
				</article>
			</div>
		</main>
	);
}
