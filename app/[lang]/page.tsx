import { cookies } from "next/headers";
import { BlogHeader } from "../_components/blog-header";
import { FeaturedPosts } from "../_components/featured-posts";
import { ReadMorePosts } from "../_components/read-more";
import { Skeleton } from "../components/atoms/Skeleton/Skeleton";

export default async function BlogPage({
	params,
}: { params: Promise<{ lang: string }> }) {
	const [{ lang }, cookiesStore] = await Promise.all([params, cookies()]);

	const theme = cookiesStore.get("theme")?.value || "";

	return (
		<div className="min-h-screen bg-neutral100">
			<BlogHeader themePayload={theme} />
			<main className="max-w-[1120px] mx-auto lg:px-0 py-[112px] lg:py-[calc(64px_+_88px)]">
				<FeaturedPosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-8 lg:my-20" />
				<ReadMorePosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-8 lg:my-20" />
			</main>
		</div>
	);
}
