import { HeroSection } from "@/components/HeroSection";
import { ImageHeroSection } from "@/components/ImageHeroSection";
import { MobileTestimonial } from "@/components/MobileTestimonial";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Service";
import {FaqSection} from "@/components/FaqSection"
// import { StepToBuild } from "@/components/StepsToBuild";

import { Testimonial } from "@/components/Testimonial";
import Image from "next/image";
import { PortfolioParallax } from "@/components/Portfolio-parallax";
import { WhyChooseUs } from "@/components/why-choose-us";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden   bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <HeroSection/>
      
      
      <Testimonial/> 
      <MobileTestimonial/> 
      <PortfolioParallax/>

      {/* <Services/> */}
      
      <WhyChooseUs/>
      
      <FaqSection/>
      <VideoPlayer/>

      
      
      
      

      
    </main>
  );
}
