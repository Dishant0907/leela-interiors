import { HeroSection } from "@/components/HeroSection";
import { ImageHeroSection } from "@/components/ImageHeroSection";
import { MobileTestimonial } from "@/components/MobileTestimonial";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Service";
import { StepToBuild } from "@/components/StepsToBuild";
import { Testimonial } from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden   bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <HeroSection/>
      
      {/* <ImageHeroSection/> */}
      {/* <StepToBuild/> */}
      
      <Testimonial/> 
      <MobileTestimonial/> 
      <Services/>

      
    </main>
  );
}
