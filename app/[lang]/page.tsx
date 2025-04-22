import { BlogHeader } from "../_components/blog-header";
import { FeaturedPosts } from "../_components/featured-posts";
import { FilterablePosts } from "../_components/filterable-posts";
import { TrendingPosts } from "../_components/trending-posts";

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {

  const { lang } = await params
  console.log(lang)

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <main className="container mx-auto px-4 py-8">
        <FeaturedPosts />
        <TrendingPosts />
        <FilterablePosts />
      </main>
    </div>
  )
}
