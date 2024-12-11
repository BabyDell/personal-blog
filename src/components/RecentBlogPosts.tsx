import { getAllContent, ExtractedContent } from "@/utils/getAllContent";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default async function RecentBlogPosts() {
  const blogPosts = await getAllContent('blog');
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog-posts" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 font-Playfair_Display">
          Recent Blog Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogPosts.map((blog: ExtractedContent) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle className="font-Playfair_Display">
                  {blog.title}
                </CardTitle>
                <CardDescription>
                  {blog.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 font-serif">
                  {blog.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild>
                  <Link className="group" href={`/blog-posts/${blog.id}`}>
                    Read Post{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

