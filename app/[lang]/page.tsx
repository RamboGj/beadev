import { cookies } from "next/headers";
import { BlogHeader } from "../_components/blog-header";
import { FeaturedPosts } from "../_components/featured-posts";
import { ReadMorePosts } from "../_components/read-more";

export default async function BlogPage({
	params,
}: { params: Promise<{ lang: string }> }) {
	const [{ lang }, cookiesStore] = await Promise.all([params, cookies()]);

	const theme = cookiesStore.get("theme")?.value || "";

	return (
		<div className="min-h-screen bg-neutral100">
			<BlogHeader themePayload={theme} />
			<main className="max-w-[1120px] mx-auto px-4 lg:px-0 py-[calc(64px_+_88px)]">
				{/* <Skeleton className="w-24 h-8" borderRadius={999} />
				<Skeleton className="w-24 h-4" borderRadius={6} /> */}

				<FeaturedPosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-20" />
				<ReadMorePosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-20" />
			</main>
		</div>
	);
}
