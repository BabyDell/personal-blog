// 'use client'

// import { useState, useRef, useEffect, useMemo } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, FastForward } from 'lucide-react';
// import { ExtractedContent } from "@/utils/getAllContent";

// interface TiltedCaseStudiesSliderProps {
//   caseStudies: ExtractedContent[];
// }

// export default function TiltedCaseStudiesSlider({ caseStudies }: TiltedCaseStudiesSliderProps) {
//   const [hoveredStudy, setHoveredStudy] = useState<ExtractedContent | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [speed, setSpeed] = useState(1);
//   const [isSpeedButtonPressed, setIsSpeedButtonPressed] = useState(false);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.style.setProperty('--animation-play-state', isPaused ? 'paused' : 'running');
//     }
//   }, [isPaused]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.style.setProperty('--animation-duration', `${15 / speed}s`);
//     }
//   }, [speed]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleAnimationEnd = () => {
//       container.style.animation = 'none';
//       container.offsetHeight; // Trigger reflow
//       container.style.animation = '';
//     };

//     container.addEventListener('animationiteration', handleAnimationEnd);

//     return () => {
//       container.removeEventListener('animationiteration', handleAnimationEnd);
//     };
//   }, []);

//   const handleMouseEnter = (study: ExtractedContent) => {
//     setIsPaused(true);
//     setHoveredStudy(study);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//     setHoveredStudy(null);
//   };

//   const handleSpeedButtonPress = () => {
//     setIsSpeedButtonPressed(true);
//     setSpeed(3);
//   };

//   const handleSpeedButtonRelease = () => {
//     setIsSpeedButtonPressed(false);
//     setSpeed(1);
//   };

//   return (
//     <section
//       id="case-studies"
//       className="w-full py-16 lg:py-20 overflow-hidden"
//     >
//       <div className="">
//         <div className="flex w-full">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20 font-Playfair_Display ml-8 md:ml-20">
//           Featured Case Studies
//         </h2>
//         <Button
//           variant="outline"
//           className=" bg-white ml-auto mr-10 my-auto"
//           onMouseEnter={handleSpeedButtonPress}
//           onMouseDown={handleSpeedButtonPress}
//           onMouseLeave={handleSpeedButtonRelease}
//         >
//           <FastForward className={`h-6 w-6  text-black ${isSpeedButtonPressed ? 'text-primary' : 'text-muted-foreground'}`} />
//         </Button>
//         </div>
//         <div 
//           ref={containerRef}
//           className="relative w-full transform -rotate-1 overflow-hidden"
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="flex animate-slide">
//             {useMemo(() => {
//               const doubledStudies = [...caseStudies, ...caseStudies];
//               return doubledStudies.map((study, index) => (
//                 <div 
//                   key={`${study.id}-${index}`}
//                   className="relative flex-shrink-0 aspect-[16/9] w-[70%] md:w-[44%] mx-2"
//                   onMouseEnter={() => handleMouseEnter(study)}
//                 >
//                   <Image
//                     src={study.imageSrc}
//                     alt={`${study.title} preview`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                   {hoveredStudy && hoveredStudy.id === study.id && (
//                     <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 text-white case-study-content animate-fade-in">
//                       <h3 className="text-base md:text-xl font-bold mb-2 font-Playfair_Display">{study.title}</h3>
//                       <p className="text-xs sm:text-sm mb-4 font-serif mx-20 text-center">{study.description}</p>
//                       <Button variant="outline" className="text-xs px-2 py-1" asChild>
//                         <Link className="group text-black" href={`/case-studies/${study.id}`}>
//                           Read More
//                           <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                         </Link>
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               ));
//             }, [caseStudies, hoveredStudy])}
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// }

