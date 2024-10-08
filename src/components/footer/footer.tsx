import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full sm:h-[5rem] h-[20rem] flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Limited Time Offer: <br />  Don&apos;t miss out—Get your modern website now for just.
      </h2>
      < p className="max-w-xl mx-auto text-sm md:text-lg  text-white text-center">
      📞 +91 75429 87786 <br/>  +91 84097 09154
      </p>
      <p className="text-lg text-white">📧 teckontechsolutions@gmail.com   </p>
           
    </BackgroundLines>
  );
}
