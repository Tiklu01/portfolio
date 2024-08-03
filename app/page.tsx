import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { MusicCard } from "@/components/MusicCard";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { RecentProjects } from "@/components/ui/recentProjects";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { LampAndMusic } from "@/components/ui/lamp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relatice flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
          <Hero/> 
          <div className="relative min-h-screen w-full">
            <LampAndMusic />
         <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <div className="relative z-20 w-full">
          <MusicCard />
         </div>
       </div>
        </div>
          <RecentProjects/>
          <StickyScrollRevealDemo/>
          <ContactForm/> 
    </main>
  );
}
 