"use client";

import { ExtractedContent } from "@/utils/getAllContent";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

interface TiltedCaseStudiesSliderProps {
  caseStudies: ExtractedContent[];
}

export default function TiltedCaseStudiesSlider({
  caseStudies,
}: TiltedCaseStudiesSliderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Double the case studies array to create a seamless loop
  const doubledCaseStudies = [...caseStudies, ...caseStudies];

  return (
    <div className="w-full pb-20 overflow-hidden">
      <h1 className="font-Playfair_Display ml-10 sm:ml-14 md:ml-20 mb-2 text-3xl sm:text-4xl">
        Featured Case Studies
      </h1>
      <h3 className="font-serif ml-10 sm:ml-14 md:ml-20 mb-10 text-lg sm:text-xl text-gray-300">
        Hover Over to Reveal Details
      </h3>
      <div className="image-slider-container">
        <div className="image-slider-track">
          {doubledCaseStudies.map((caseStudy, index) => (
            <div
              className="image-slide"
              key={`${caseStudy.id}-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={caseStudy.imageSrc} alt={caseStudy.title} fill objectFit="cover" />
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
    </div>
  );
}

