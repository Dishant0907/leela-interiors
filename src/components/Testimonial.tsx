import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const testimonials = [
    {
      quote:
        "Leela Interiors did an outstanding job on our modular kitchen. The design is both sleek and highly functional, making cooking an absolute joy. Their team was professional, attentive to our needs, and completed the project on time. We couldn't be happier!",
      name: "Harsh Singh",
      title: "Home Owner",
    },
    
    {
      quote: "Our new modular kitchen from Leela Interiors is amazing! The layout is perfect, and the quality of the materials used is top-notch. Their designers took our ideas and made them even better, creating a kitchen that is both beautiful and practical.",
      name: "Vikram Desai ",
      title: "Home Owner",
    },

   
    {
      quote: 
      "Leela Interiors transformed our outdated kitchen into a modern, efficient space. The modular design has made a huge difference in our daily routine. The craftsmanship and attention to detail are impeccable. Highly recommend their services!",
      name: "Kunal Reddy ",
      title: "Home Owner",
    },
    {
      quote: 
      "From design to installation, Leela Interiors exceeded our expectations. Our modular kitchen is a blend of modern aesthetics and functionality. The project was completed on time, and the quality is exceptional. We highly recommend them!",
      name: "Nisha Mehta ",
      title: "Home Owner",
    },
    {
      quote: 
      "We are thrilled with our new modular kitchen from Leela Interiors. The team was incredibly professional and provided excellent customer service throughout the project. The final result is a stylish, functional kitchen that has significantly enhanced our home.",
      name: "Raj Patel ",
      title: "Home Owner",
    },
    
  ];


export const Testimonial = () => {
    return (
        <div className="h-[40rem] mt-[7rem] rounded-md flex flex-col hidden md:block antialiased bg-black  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-5xl font-bold text-center text-white mb-8">Hear our Harmony: <span className="text-emerald-500">Voices of success</span></h2>
            <div className="flex justify-center w-full overflow-hidden pz-4 sm:pz-6 lg:px-8">
            <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
            </div>
        
      </div>


    )
}
