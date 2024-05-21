"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
export function MobileTestimonial() {
  return (
    <>
        <h1 className="text-white text-3xl  sm:hidden font-bold mx-[2rem] mt-12 text-center">Words from Our Satisfied Clients</h1>
    <div className="h-[22rem] bg md:hidden flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
    </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Harsh Singh",
    designation: "Home Owner",
    content: (
      <p>
        Leela Interiors did an outstanding job on our modular kitchen.  Their team was professional, attentive to our needs, and completed the project on time. We could not be happier! 
      </p>
    ),
  },
  {
    id: 1,
    name: "Vikram Desai",
    designation: "Home Owner",
    content: (
      <p>
        Our new modular kitchen from Leela Interiors is amazing! The layout is perfect, and the quality of the materials used is top-notch , creating a kitchen that is both beautiful and practical.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Leela Interiors transformed our outdated kitchen into a modern, efficient space. The modular design has made a huge difference in our daily routine. The craftsmanship and attention to detail are impeccable. Highly recommend their services!
      </p>
    ),
  },
];
