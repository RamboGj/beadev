import { BlogHeader } from "../_components/blog-header";
import { FeaturedPosts } from "../_components/featured-posts";
import { ReadMorePosts } from "../_components/read-more";

export default async function BlogPage({
	params,
}: { params: Promise<{ lang: string }> }) {
	const { lang } = await params;
	console.log(lang);

	return (
		<div className="min-h-screen bg-white">
			<BlogHeader />
			<main className="max-w-[1120px] mx-auto px-4 lg:px-0 py-[calc(64px_+_88px)]">
				<FeaturedPosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-20" />
				<ReadMorePosts lang={lang} />
				<div className="bg-black/[16%] h-[1px] w-full mx-auto my-20" />
			</main>
		</div>
	);
}
