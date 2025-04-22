import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedPosts() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Featured Posts</h1>
        <Button variant="ghost">View all</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main featured post */}
        <Card className="col-span-full lg:col-span-2 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Featured post"
                width={800}
                height={600}
                className="object-cover h-full w-full transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="space-y-4">
                <Badge className="bg-rose-500 hover:bg-rose-600">Technology</Badge>
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                  <Link href="#" className="hover:underline">
                    The Future of Web Development: {"What's"} Next in 2025
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Explore the cutting-edge technologies and methodologies that will shape the future of web development
                  in the coming years.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                  <span>•</span>
                  <span>Apr 18, 2025</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Secondary featured posts */}
        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Featured post"
              width={600}
              height={400}
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-500"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-3">
              <Badge className="bg-emerald-500 hover:bg-emerald-600">Design</Badge>
              <h3 className="text-xl font-bold">
                <Link href="#" className="hover:underline">
                  Minimalist Design Principles for Modern Websites
                </Link>
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
                <span>•</span>
                <span>Apr 15, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Featured post"
              width={600}
              height={400}
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-500"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-3">
              <Badge className="bg-amber-500 hover:bg-amber-600">AI</Badge>
              <h3 className="text-xl font-bold">
                <Link href="#" className="hover:underline">
                  How AI is Transforming Content Creation
                </Link>
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
                <span>•</span>
                <span>Apr 12, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
