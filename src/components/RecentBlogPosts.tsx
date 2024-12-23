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
    <section id="blog-posts" className="w-full py-12 md:py-24 lg:py-32 ">
      <h1 className="text-3xl sm:text-4xl mb-10 ml-10 sm:ml-14 md:ml-20 font-Playfair_Display">
          Recent Blog Posts
        </h1>
      <div className="container px-6 md:px-20 mx-auto md:mx-0">
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogPosts.map((blog: ExtractedContent) => (
            <Card key={blog.id} className="bg-transparent border-opacity-30 border-white hover:border-opacity-55 transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-Playfair_Display text-white">
                  {blog.title}
                </CardTitle>
                <CardDescription>
                  {blog.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-serif">
                  {blog.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="bg-white" asChild>
                  <Link className="group" href={`/blog-posts/${blog.id}`}>
                    Read Post
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
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

