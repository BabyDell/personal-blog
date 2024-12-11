import { getContent } from "@/utils/getContent";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { ExtractedContent } from "@/utils/getAllContent";

export default async function caseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getContent("case-study", slug);

  // Check if caseStudy is undefined
  if (!caseStudy) {
    // Handle the case where caseStudy is undefined
    return <div>Blog post not found</div>;
  }

  // Ensure all properties are defined
  const caseStudyData: ExtractedContent = {
    id: caseStudy.id || "",
    title: caseStudy.title || "Untitled",
    description: caseStudy.description || "No description available",
    tags: caseStudy.tags || [],
    imageSrc: caseStudy.imageSrc || "",
    date: caseStudy.date || "",
    content: caseStudy.content || [],
  };

  return <CaseStudyTemplate {...caseStudyData} />;


  
}