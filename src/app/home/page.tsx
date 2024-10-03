// pages/index.tsx
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="bg-red-200 shadow-lg rounded-lg p-6">
    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const First: React.FC = () => {
  return (
    <div className="bg-black-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl  text-blue-300 font-extrabold sm:text-5xl lg:text-6xl">
          We Build Modern, Responsive Websites Starting at Just <span className="text-blue-600">₹4,999!</span>
        </h1>

        {/* Key Features Section */}
        <div className="mt-10 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12 lg:grid-cols-3">
          <Feature title="Custom Design" description="Tailored to your brand and vision." />
          <Feature title="Mobile-Optimized" description="Perfectly responsive on all devices." />
          <Feature title="Fast & Secure" description="Built with speed and security in mind." />
          <Feature title="SEO-Friendly" description="Get found online with search engine optimization." />
          <Feature title="Free Consultation" description="Let’s discuss your project with no obligation." />
        </div>

        {/* What's Included */}
        <div className="mt-12 bg-orange-200 shadow-lg rounded-lg p-8 text-left">
          <h2 className="text-2xl font-bold text-gray-800">What&apos;s Included:</h2>
          <ul className="mt-4 space-y-2 text-white list-disc list-inside">
            <li>Home page design</li>
            <li>Contact form integration</li>
            <li>Basic SEO setup</li>
            <li>Up to 5 pages</li>
            <li>Free domain consultation (if needed)</li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 text-left text-yellow-600">
          <h2 className="text-2xl font-bold text-yellow-600">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-yellow-600 list-disc list-inside">
            <li>Experienced team of developers</li>
            <li>Quick turnaround time</li>
            <li>Quality support post-delivery</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </div>

        {/* Limited Time Offer Section */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Limited Time Offer:</h2>
          <p className="mt-4 text-lg">
            Don&apos;t miss out—Get your modern website now for just <span className="font-extrabold">₹4,999!</span>
          </p>
          <p className="mt-4">Contact Us Now!</p>
          <div className="mt-6">
            <p className="text-lg">📞 +91 75429 87786 <br/>  +91 84097 09154</p>
            <p className="text-lg">📧 teckontechsolutions@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
