// pages/index.tsx
"use client";
import React from 'react';
//import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import {TypewriterEffectDemo} from '@/app/typewritter/page'
import {LampDemo} from "@/components/lampeffect/lapeffect"
import {CardHoverEffectDemo} from "@/components/hovercard/hovercard"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BackgroundBeamsWithCollisionDemo} from '@/components/beambackground/beambg'







interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="bg-red-200 shadow-lg rounded-lg p-6 relative transition-transform duration-300 hover:scale-105">
    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const First: React.FC = () => {
  
  return (
    <>
    
    
    
   
    <div className="py-12 px-4 sm:px-6 lg:px-8">


    

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        
        <h1 className="text-5xl  text-white font-extrabold sm:text-5xl lg:text-6xl">
              <TypewriterEffectDemo/> 
        </h1>
      
           </div>
            
        </div>

          
    

        {/* Key Features Section */}
         <CardHoverEffectDemo/>

         <LampDemo/>
         <BackgroundBeamsWithCollisionDemo/>
        
      
       
    </>
  );
}

export default First;
