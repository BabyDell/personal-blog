"use client";

import { ExtractedContent } from "@/utils/getAllContent";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TiltedCaseStudiesSliderProps {
  caseStudies: ExtractedContent[];
}

export default function TiltedCaseStudiesSlider({
  caseStudies,
}: TiltedCaseStudiesSliderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <h1 className="font-Playfair_Display ml-20 mb-2 text-4xl">
        Featured Case Studies
      </h1>
      <h3 className="font-serif ml-20 mb-10 text-xl text-gray-300">
        Hover Over to Reveal Details
      </h3>
      <div className="flex w-full h-[calc(450px*9/16)] md:h-[calc(600px*9/16)] lg:h-[calc(850px*9/16)] relative md:min-w-[950px] lg:min-w-[1700px] overflow-hidden">
        {caseStudies.map((caseStudy, index) => (
          <div
            className={`image-slider aspect-[16/9] w-[450px] md:w-[600px] lg:w-[850px] absolute left-[100%] transition-all duration-300 ease-in-out ${
              hoveredIndex !== null ? "paused" : ""
            }`}
            key={caseStudy.id}
            style={{
              animationDelay: `${(12 / 3) * index}s`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image src={caseStudy.imageSrc} alt={caseStudy.title} fill />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity opacity-0 hover:opacity-100 duration-500">
                <h3 className="text-base md:text-xl font-bold mb-2 font-Playfair_Display">
                  {caseStudy.title}
                </h3>

                <p className="text-xs sm:text-sm mb-4 font-serif mx-20 text-center">
                  {caseStudy.description}
                </p>

                <Button variant="outline" className="text-xs px-2 py-1" asChild>
                  <Link
                    className="group text-black"
                    href={`/case-studies/${caseStudy.id}`}
                  >
                    Read More
                    <ArrowRight className="ml-[1px] h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
