import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ExtractedContent } from "@/utils/getAllContent";

export default function CaseStudyTemplate({
  title,
  description,
  tags,
  imageSrc,
  content,
}: ExtractedContent) {
  return (
    <div className="flex flex-col min-h-screen text-foreground animate-fade-in mb-10 sm:mb-20">
      <main className="flex-1 flex m-auto">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 pb-10 mx-5 sm:mx-8 justify-center items-center">
          <article className="lg:w-4/5 mx-auto">
            <div className="space-y-4">
              <Button variant="ghost" asChild className="mt-4">
                <Link
                  className="group text-white hover:text-white hover:bg-transparent "
                  href="/case-studies"
                >
                  <ArrowLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform " />
                  Back to Case Studies
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-white">
                {title}
              </h1>
              <p className="text-muted-foreground text-xl lg:w-3/4 w-11/12">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags && tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </div>
            <div>
              <Image
                src={imageSrc}
                alt={`${title} Hero Image`}
                width={1080}
                height={480}
                className="my-8 rounded-lg object-cover"
              />
            </div>
            <div className="space-y-8 text-lg text-white">
              {content &&
                content.map((section) => (
                  <section key={section.title} id={section.title.toLowerCase()}>
                    <h2 className="text-2xl font-bold font-Playfair_Display">
                      {section.title}
                    </h2>
                    <p className="font-serif mt-1 text-slate-100">{section.content}</p>
                  </section>
                ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
