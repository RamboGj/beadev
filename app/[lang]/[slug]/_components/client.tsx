"use client";

import type { ArticleProps } from "@/lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import Link from "next/link";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const getOptions = (includes: any) => {
	return {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: unknown, children: ReactNode) => {
				return (
					<p className="font-Satoshi mt-4 text-sm font-normal leading-[2.18rem] tracking-[-0.03rem] text-neutrals500 lg:text-base lg:leading-[2.18rem]">
						{children}
					</p>
				);
			},
			[BLOCKS.HEADING_3]: (node: unknown, children: ReactNode) => {
				return (
					<h3 className="mt-12 block text-base font-bold text-[#FAFAFA] lg:text-[1.25rem]">
						{children}
					</h3>
				);
			},
			[BLOCKS.HEADING_2]: (node: unknown, children: ReactNode) => {
				return (
					<h2 className="mt-12 block font-bold lg:text-[1.25rem] text-3xl lg:text-4xl text-neutral800 font-SatoshiBold">
						{children}
					</h2>
				);
			},
			[BLOCKS.OL_LIST]: (node: unknown, children: ReactNode) => {
				return <ol className="mt-4 flex list-decimal flex-col">{children}</ol>;
			},
			[BLOCKS.UL_LIST]: (node: unknown, children: ReactNode) => {
				return <ul className="mt-4 flex list-disc flex-col">{children}</ul>;
			},
			[BLOCKS.LIST_ITEM]: (node: unknown, children: ReactNode) => {
				return (
					<li className="font-Satoshi -mt-2 ml-6 text-sm text-[#949494] lg:text-base">
						{children}
					</li>
				);
			},

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			[BLOCKS.EMBEDDED_ASSET]: (node: any) => {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				const image = includes.links.assets.block.find((asset: any) => {
					return asset.sys.id === node.data.target.sys.id;
				});

				return (
					<Image
						src={image.url}
						width={400}
						height={320}
						alt={"Embedded Asset"}
						className="mx-auto mb-[4.25rem] mt-[3.3rem] max-h-[385px] max-w-[320px] object-contain lg:max-h-[455px] lg:max-w-[720px]"
					/>
				);
			},

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			[INLINES.HYPERLINK]: (data: any, children: ReactNode) => {
				return (
					<Link
						target="_blank"
						href={data.data.uri || ""}
						className="font-Satoshi text-sm text-blue500 transition duration-300 hover:opacity-85 lg:text-base"
					>
						{children}
					</Link>
				);
			},
		},

		renderMark: {
			[MARKS.BOLD]: (children: React.ReactNode) => (
				<strong className="text-sm font-SatoshiMedium text-neutral600 lg:text-base">
					{children}
				</strong>
			),

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			[MARKS.CODE]: (text: any) => {
				return (
					<SyntaxHighlighter language="javascript" style={docco}>
						{text.split("\n").slice(1).join("\n")}
					</SyntaxHighlighter>
				);
			},
		},
	};
};

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
					{documentToReactComponents(
						article.content.json,
						getOptions(article.content),
					)}
				</article>
			</div>
		</main>
	);
}
