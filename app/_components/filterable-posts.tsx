"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Filter, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FilterablePosts() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "technology", label: "Technology" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "business", label: "Business" },
  ]

  const posts = [
    {
      id: 1,
      title: "How to Build a Responsive Website with Tailwind CSS",
      excerpt: "Learn how to create beautiful responsive layouts using Tailwind CSS utility classes.",
      category: "development",
      categoryLabel: "Development",
      categoryColor: "bg-blue-500 hover:bg-blue-600",
      author: "Jane Cooper",
      date: "Apr 20, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "The Impact of AI on Modern Business Operations",
      excerpt: "Explore how artificial intelligence is transforming business processes and decision-making.",
      category: "business",
      categoryLabel: "Business",
      categoryColor: "bg-amber-500 hover:bg-amber-600",
      author: "Robert Fox",
      date: "Apr 18, 2025",
      readTime: "12 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "UI/UX Design Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with these emerging user interface and experience design trends.",
      category: "design",
      categoryLabel: "Design",
      categoryColor: "bg-emerald-500 hover:bg-emerald-600",
      author: "Leslie Alexander",
      date: "Apr 15, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Getting Started with Next.js 15",
      excerpt: "A comprehensive guide to building modern web applications with Next.js 15.",
      category: "development",
      categoryLabel: "Development",
      categoryColor: "bg-blue-500 hover:bg-blue-600",
      author: "Cameron Williamson",
      date: "Apr 12, 2025",
      readTime: "15 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "The Evolution of Quantum Computing",
      excerpt: "Understanding the revolutionary potential of quantum computing technology.",
      category: "technology",
      categoryLabel: "Technology",
      categoryColor: "bg-rose-500 hover:bg-rose-600",
      author: "Dianne Russell",
      date: "Apr 10, 2025",
      readTime: "11 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Sustainable Web Design Practices",
      excerpt: "How to reduce the environmental impact of your digital products through sustainable design.",
      category: "design",
      categoryLabel: "Design",
      categoryColor: "bg-emerald-500 hover:bg-emerald-600",
      author: "Jenny Wilson",
      date: "Apr 8, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredPosts = activeFilter === "all" ? posts : posts.filter((post) => post.category === activeFilter)

  return (
    <section className="py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>

        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveFilter}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover h-full w-full transition-transform hover:scale-105 duration-500"
              />
              <Badge className={`absolute top-3 left-3 ${post.categoryColor}`}>{post.categoryLabel}</Badge>
            </div>
            <CardContent className="flex-1 p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold line-clamp-2">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
