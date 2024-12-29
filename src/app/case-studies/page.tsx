import { getAllContent, ExtractedContent } from "@/utils/getAllContent";
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
import { ArrowRight } from 'lucide-react';

export default async function CaseStudiesPage() {
  const caseStudies = await getAllContent('case-study');

  return (
    <div className="flex flex-col min-h-screen text-foreground justify-center items-center animate-fade-in">
      <main className="flex-1">
        <section className="w-full py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-Playfair_Display">
                  Case Studies
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-serif mx-10">
                  Explore detailed breakdowns of my most impactful projects and
                  their outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mb-8 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
              {caseStudies.map((study: ExtractedContent) => (
                <Card key={study.id} className="flex flex-col bg-transparent  border-opacity-30 border-white hover:border-opacity-55 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="font-Playfair_Display tracking-normal text-white text-xl">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="font-serif">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={study.imageSrc}
                        alt={study.title}
                        width={600}
                        height={600}
                        className="rounded-lg object-fit mb-4"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Published on: {study.date}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link className="group" href={`/case-studies/${study.id}`}>
                        Read Full Study
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

