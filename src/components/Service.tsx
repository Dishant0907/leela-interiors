"use client"

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";



const companyservices = [
    {
      title: "Custom Kitchen Design",
      description: "Tailored kitchen designs to suit your specific requirements, preferences, and space constraints."
    },
    {
      title: "3D Visualization",
      description: "High-quality 3D renderings of proposed kitchen designs for detailed visualization before installation."
    },
    {
      title: "Premium Materials",
      description: "Usage of high-quality materials and finishes in modular kitchen components, ensuring durability and aesthetics."
    },
    {
      title: "Smart Kitchen Solutions",
      description: "Integration of smart technology and innovative solutions for enhanced convenience, efficiency, and functionality."
    },
    {
      title: "Professional Installation",
      description: "Expert installation services carried out by skilled technicians for seamless assembly and setup."
    },
    {
      title: "After-Sales Support",
      description: "Comprehensive after-sales support including warranty services, maintenance tips, and assistance with any concerns."
    },
    {
      title: "Eco-Friendly Options",
      description: "Offering eco-friendly modular kitchen options with sustainable materials and energy-efficient appliances."
    },
    {
      title: "Consultation and Design Advice",
      description: "Expert consultation and design advice throughout the entire process, from concept development to implementation."
    }
  ];
  

export const Services = () => {
  return (
    <>

      <div className="flex justify-center mx-3 ">

      <h2 className="text-4xl mx-1 font-bold text-white text-center mb-[4rem]" >why </h2>
      <h2 className="text-4xl mx-1 text-emerald-500 font-bold text-center mb-[4rem]" >choose</h2>
      <h2 className="text-4xl  mx-1 font-bold text-white text-center mb-[4rem]" > us </h2>


      
      </div>
        <div className=" w-full mx-auto  px-auto  grid grid-cols-1 gap-8 md:mx-auto   sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 md:gap-6  lg:gap-6 ">
        {companyservices.map((service, key) => (
          <div className="w-[20rem] mx-auto "  key={key}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 h-[14rem]   bg-zinc-900">
              {/* Uncomment the Image component if needed */}
              {/* <Image4
                src={`/jordans.webp`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              /> */}
              <p className="text-base sm:text-xl font-bold  mt-4 mb-2 text-neutral-200">
                {service.title}
              </p>
              <p className="text-sm  text-emerald-200">
                {service.description}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </>
  );
};