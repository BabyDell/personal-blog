import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Lightbulb } from "lucide-react";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <main className="flex-1 ">
        <section className="w-full py-24 md:py-32 xl:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none font-Playfair_Display ">
                  Welcome to My Personal Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 font-serif">
                  Exploring case studies, sharing learnings, and documenting
                  progress in web development and design.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/case-studies">Explore Case Studies</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/blog-posts">Read Blog Posts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <FeaturedCaseStudies />
        <RecentBlogPosts />
        <section
          id="learning-progress"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Learning Progress
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Books Read
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Technical books completed this year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Courses Completed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Online courses finished
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    New Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Dive Deeper?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore more of my work, reach out for collaborations, or just
                  say hello!
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#portfolio">View Full Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
