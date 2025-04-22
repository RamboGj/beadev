import Link from "next/link";
import Image from "next/image";

export function BlogHeader() {
	return (
		<header className="border-b border-black/[16%] fixed bg-white/[10%] backdrop-blur-2xl inset-x-0 top-0 z-20">
			<div className="max-w-[1120px] mx-auto flex items-center justify-between px-4 lg:px-0 py-5">
				<Link
					aria-label="Go to main page"
					href="/"
					className="text-2xl font-bold"
				>
					<Image
						src={"/logo.svg"}
						width={162}
						height={48}
						alt="Be a Dev logo"
					/>
				</Link>
				{/* <div className="flex items-center gap-4">
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
        </div> */}
			</div>
		</header>
	);
}
