"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="sm:mt-8 mt-4  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-sm font-small tracking-tight text-transparent md:text-xl"
      >
        <h1 className="text-2xl font-bold text-blue-800">Why Choose Us?</h1>

        <ul className="mt-4 space-y-2  text-start list-disc list-inside">
           <li>Experienced team of developers</li>
           <li>Quick turnaround time</li>
           <li>Quality support post-delivery</li>
           <li>100% satisfaction guarantee</li>
         </ul>
      </motion.h1>
    </LampContainer>
  );
}
