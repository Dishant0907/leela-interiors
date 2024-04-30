"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function StepToBuild() {
  return (
    <TracingBeam className="px-6">
        <h1 className="font-extrabold text-white text-5xl mx-auto mt-[7rem]">Steps to Your dream kitchen</h1>

      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              
            </h2>

            <p className={twMerge( "text-xl font-bold mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
             
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
    {
      title: "Consultation and Planning",
      description: (
        <>
          <p>
            In this initial stage, we collaborate with you to understand your vision, preferences, and spatial constraints. Our experts meticulously measure and analyze the available space, ensuring a tailored design that seamlessly integrates into your home.
          </p>
        </>
      ),
     
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Design and Visualization",
      description: (
        <>
          <p>
            Leveraging cutting-edge 3D rendering technology, we bring your dream kitchen to life. Explore a virtual walkthrough, experiment with various color schemes, finishes, and material options to create a space that truly resonates with your style.
          </p>
        </>
      ),
      
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Component Selection",
      description: (
        <>
          <p>
            Choose from our extensive range of modular cabinets, drawers, shelves, and accessories tailored to your specific needs. Select countertops, backsplashes, and other surface materials that complement your design vision, and pick appliances, hardware, and lighting fixtures that elevate the overall aesthetic.
          </p>
        </>
      ),
    
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Customization and Personalization",
      description: (
        <>
          <p>
            Embrace the flexibility of modular kitchens as we tailor the components to your unique requirements and preferences. Customize cabinet sizes, configurations, and storage solutions to optimize functionality and incorporate unique design elements that reflect your personal touch.
          </p>
        </>
      ),
      
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Preparation and Installation",
      description: (
        <>
          <p>
            Our skilled team meticulously prepares the designated kitchen area, ensuring proper ventilation, plumbing, and electrical connections. With precision and care, we assemble and install the modular components, bringing your vision to life according to the design plan.
          </p>
        </>
      ),
      
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Finishing Touches",
      description: (
        <>
          <p>
            With attention to detail, we install countertops, backsplashes, and other surface materials, seamlessly integrating them into your modular kitchen. We connect and set up appliances, fixtures, and lighting, ensuring proper functionality and alignment of all components.
          </p>
        </>
      ),
      
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
