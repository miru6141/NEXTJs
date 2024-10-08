
import { HoverEffect } from "../ui/card-hover-effect";
 
export function CardHoverEffectDemo() {
  return (
    <div className="min-h-screen">
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}



export const projects = [
    {
      title: "Custom Design",
      description:
        "Tailored to your brand and vision.",
      link: "",
    },
    {
      title: "Mobile-Optimized",
      description:
        "Perfectly responsive on all devices",
      link: "",
    },
    {
      title: "Fast & Secure",
      description:
        "Built with speed and security in mind., and more on thousands of internet-connected devices.",
      link: "",
    },
    {
      title: "SEO-Friendly",
      description:
        "Get found online with search engine optimization.",
      link: "",
    },
    {
      title: "Free Consultation",
      description:
        "Let’s discuss your project with no obligation.",
      link: "",
    },
    {
      title: "Contact Form Integration",
      description:
        "Enable users to reach out through an easy-to-use form.",
      link: "",
    },
    
  ];