
"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
          text: "We",
        },
        {
            text: "Build ",
          },
        {
            text: "Modern,",
        },

        {
          text: "Responsive",
        },
        {
          text: "Websites",
        },
        {
          text: "Starting",
        },
        {
          text: "at",
          
        },
        {
            text: "Just",
           
          },
        {
            text: "₹4,999!",
            className: "text-orange-600 mt-8 text-6xl",
          },
      ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] text-white">
      
      <TypewriterEffect words={words} className="text-white" />
     
    </div>
  );
}
