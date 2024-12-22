import { getAllContent } from "@/utils/getAllContent";
import FeaturedCaseStudies from "./FeaturedCaseStudies";


export default async function CaseStudiesContainer() {
  const caseStudies = await getAllContent('case-study');

  return <FeaturedCaseStudies caseStudies={caseStudies} />;
}

