import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import CaseStudiesContainer from "@/components/CaseStudiesContainer";
import { DynamicGridBackground2D } from "@/components/2dCellBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-white">
      <main className="flex-1 w-full items-center justify-center ">
        <section className="w-full py-40 md:py-52 xl:py-64 relative overflow-hidden">
          <div className="absolute inset-0">
            <DynamicGridBackground2D />
          </div>
          <div className="container px-10 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none font-Playfair_Display ">
                  <span className="font-extrabold">Welcome </span>
                  <br />
                  To My Personal Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl font-serif">
                  Exploring case studies, sharing learnings, and documenting
                  progress in web development and design.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/case-studies">Explore Case Studies</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/blog-posts" className="text-black">
                    Read Blog Posts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <CaseStudiesContainer />
        <RecentBlogPosts />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Dive Deeper?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl ">
                  Explore more of my work, reach out for collaborations, or just
                  say hello!
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/portfolio" className="text-black">
                    View Full Portolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
