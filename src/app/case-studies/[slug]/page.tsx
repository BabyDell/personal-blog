import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { getContent } from "@/utils/getContent";

export default async function BlogPost({
  params,
}: {
    params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getContent("case-study", slug);
  return <CaseStudyTemplate {...caseStudy} />;
}

