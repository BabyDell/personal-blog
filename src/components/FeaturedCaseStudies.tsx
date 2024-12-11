import { getAllContent, ExtractedContent } from "@/utils/getAllContent";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

export default async function FeaturedCaseStudies() {
  const caseStudies = await getAllContent('case-study');
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section
      id="case-studies"
      className="w-full py-16 lg:py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 font-Playfair_Display">
          Featured Case Studies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((study: ExtractedContent) => (
            <Card key={study.id}>
              <CardHeader>
                <CardTitle className="font-Playfair_Display">
                  {study.title}
                </CardTitle>
                <CardDescription className="font-serif">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={study.imageSrc}
                  alt={`${study.title} preview`}
                  width={1080}
                  height={480}
                  className=" my-8 rounded-lg object-cover border"
                />
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link className="group" href={`/case-studies/${study.id}`}>
                    Read More{" "}
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

