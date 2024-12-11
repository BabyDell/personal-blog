import { getContent } from "@/utils/getContent";
import BlogPostTemplate from "@/components/BlogPostTemplate";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = await getContent("blog", slug);
  return <BlogPostTemplate {...blogPost} />;
}

