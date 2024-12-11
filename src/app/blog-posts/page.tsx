
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ExtractedContent } from "@/utils/getAllContent";
import { getAllContent } from "@/utils/getAllContent";

export default async function BlogPage() {
  const blogPosts = await getAllContent("blog");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center">
      <main className="flex-1">
        <section className="w-full py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-Playfair_Display">
                  Blog
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-serif">
                  Explore our latest articles, insights, and updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mb-8 py-12 md:py-16 lg:py-28 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
              {blogPosts.map((post: ExtractedContent) => (
                <Card key={post.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-Playfair_Display tracking-normal">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="font-serif">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        width={600}
                        height={600}
                        className="rounded-lg object-fit mb-4"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Published on: {post.date}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link className="group" href={`/blog-posts/${post.id}`}>
                        Read Full Post{" "}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
