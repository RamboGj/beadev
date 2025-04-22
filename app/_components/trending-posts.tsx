import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function TrendingPosts() {
  const trendingPosts = [
    {
      id: 1,
      title: "10 VS Code Extensions Every Developer Should Have in 2025",
      category: "Development",
      categoryColor: "bg-violet-500 hover:bg-violet-600",
      image: "/placeholder.svg?height=300&width=500",
      views: "12.5K",
    },
    {
      id: 2,
      title: "Understanding the New React Server Components",
      category: "React",
      categoryColor: "bg-sky-500 hover:bg-sky-600",
      image: "/placeholder.svg?height=300&width=500",
      views: "10.2K",
    },
    {
      id: 3,
      title: "The Complete Guide to CSS Grid Layout",
      category: "CSS",
      categoryColor: "bg-blue-500 hover:bg-blue-600",
      image: "/placeholder.svg?height=300&width=500",
      views: "9.8K",
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      category: "Accessibility",
      categoryColor: "bg-green-500 hover:bg-green-600",
      image: "/placeholder.svg?height=300&width=500",
      views: "8.7K",
    },
    {
      id: 5,
      title: "Introduction to TypeScript for JavaScript Developers",
      category: "TypeScript",
      categoryColor: "bg-blue-500 hover:bg-blue-600",
      image: "/placeholder.svg?height=300&width=500",
      views: "7.9K",
    },
  ]

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-rose-500" />
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink500 to-blue500">Trending Now</h2>
        </div>
        <Button variant="ghost" className="gap-1">
          View all <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="pb-4">
        <div className="flex gap-4">
          {trendingPosts.map((post) => (
            <Card key={post.id} className="min-w-[300px] max-w-[300px] overflow-hidden">
              <div className="relative">
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {post.views} views
                </div>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={180}
                  className="aspect-[5/3] object-cover w-full"
                />
              </div>
              <CardContent className="p-4">
                <Badge className={post.categoryColor}>{post.category}</Badge>
                <h3 className="font-bold mt-2 line-clamp-2">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
