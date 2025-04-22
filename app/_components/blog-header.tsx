import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function BlogHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link aria-label="Go to main page" href="/" className="text-2xl font-bold">
          <Image src={`/logo.svg`} width={124} height={40} alt="Be a Dev logo"/>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground opacity-50 pointer-events-none">
              Courses(coming soon)
            </Link>
          </nav>
          <Button className="bg-blue500" size="sm">Subscribe</Button>
        </div>
      </div>
    </header>
  )
}
