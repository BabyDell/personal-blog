

import { getContent } from "@/utils/getContent";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { ExtractedContent } from "@/utils/getAllContent";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  const blogPost = await getContent("blog", slug);

  // Check if blogPost is undefined
  if (!blogPost) {
    // Handle the case where blogPost is undefined
    return <div>Blog post not found</div>;
  }

  // Ensure all properties are defined
  const blogPostData: ExtractedContent = {
    id: blogPost.id || "",
    title: blogPost.title || "Untitled",
    description: blogPost.description || "No description available",
    tags: blogPost.tags || [],
    imageSrc: blogPost.imageSrc || "",
    date: blogPost.date || "",
    content: blogPost.content || [],
  };

  return <BlogPostTemplate {...blogPostData} />;
}