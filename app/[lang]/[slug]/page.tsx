import { getAllArticles, getArticle } from "@/lib/api";
import type { ArticleAdProps, ArticleProps } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string; lang: string }> }) {
	const { slug, lang } = await params;

	const articleAd: ArticleAdProps = await getArticle({ slug, locale: lang });

	if (!articleAd) {
		return {
			openGraph: {
				title: "Not found",
				description: "Article not found",
			},
		};
	}

	return {
		openGraph: {
			title: articleAd.title,
			description: articleAd.subtitle,
			images: [articleAd.cover.url],
		},
	};
}

export async function generateStaticParams({
	params: { lang },
}: {
	params: { lang: string };
}) {
	const allArticles: ArticleAdProps[] = await getAllArticles({ locale: lang });

	return allArticles.map((article) => ({
		slug: article.slug,
	}));
}

export default async function BlogPostPage({
	params,
}: { params: Promise<{ lang: string; slug: string }> }) {
	const { lang, slug } = await params;

	const article: ArticleProps = await getArticle({ slug, locale: lang });

	console.log("ARTICLE ->", article);

	if (!article) notFound();

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
