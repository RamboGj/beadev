import { getAllArticles, getArticle } from "@/lib/api";
import type { ArticleAdProps, ArticleProps } from "@/lib/types";
import { notFound } from "next/navigation";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogPostPageClient } from "./_components/client";

export async function generateStaticParams({
	params: { lang },
}: {
	params: { lang: string };
}) {
	const allArticles: ArticleAdProps[] = await getAllArticles({
		locale: lang,
		limit: 5,
	});

	return allArticles.map((article) => ({
		slug: article.slug,
	}));
}

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

export default async function BlogPostPage({
	params,
}: { params: Promise<{ lang: string; slug: string }> }) {
	const { lang, slug } = await params;

	const article: ArticleProps = await getArticle({ slug, locale: lang });

	if (!article) notFound();

	return <BlogPostPageClient article={article} />;
}
