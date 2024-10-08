import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
       <div className="md:mt-12  shadow-lg rounded-lg p-8 text-left max-w-full mx-auto min-h-screen flex sm:flex-row flex-col justify-between space-x-6 ">
  {/* Basic Website Package */}

  <div className=" ">
  <h2 className="relative z-10 text-xl  md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold ">Basic Website Package</h2>
  <p className="relative z-10 text-md md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-4">Perfect for small businesses, portfolios, and blogs.</p>
  
  <h3 className=" text-sm sm:text-lg font-semibold text-neutral-500 mb-2 pl-5 sm:pl-0">What You Get:</h3>
  <ul className="space-y-2 text-gray-200  list-inside mb-8 text-sm sm:text-lg pl-5 sm:pl-0 list-none">
    <li>Custom Design (up to 5 pages)</li>
    <li>Fully Responsive Layout (Mobile, Tablet, Desktop)</li>
    <li>Contact Form Integration</li>
    <li>Basic SEO Setup to improve visibility</li>
    <li>Fast & Secure website development</li>
    <li>Social Media Integration</li>
    <li>3-Month Free Support</li>
  </ul>
  </div>
  {/* Advanced Website Package */}
  
  <div className="">
  <h2 className="relative z-10 text-xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Advanced Website Package</h2>
  <p className="relative z-10 text-sm md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold mb-4  text-center">Ideal for businesses that require advanced, scalable, and reliable websites.</p>
  
  <h3 className="text-sm sm:text-lg font-semibold text-neutral-500 mb-2">What&apos;s Included:</h3>
  <ul className="space-y-2 text-gray-200 list-none list-inside text-sm  sm:text-lg">
    <li>Everything in the Basic Package PLUS:</li>
    <li>Payment Gateway Integration (e.g., Razorpay, PayPal)</li>
    <li>User Authentication (Login/Sign Up)</li>
    <li>E-commerce Capabilities (Product Listings, Cart, etc.)</li>
    <li>Advanced SEO for enhanced visibility</li>
    <li>Admin Panel for easy content management</li>
    <li>Custom Features tailored to your business needs</li>
    <li>Highly Scalable & Reliable infrastructure for future growth</li>
    <li>6-Month Free Support</li>
  </ul>
  </div>
</div>
    </BackgroundBeamsWithCollision>
  );
}
