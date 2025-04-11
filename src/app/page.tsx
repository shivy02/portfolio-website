"use client";
// import { cn } from "@/lib/utils";
import Hero from "@/components/hero-section"
import Experience from "@/components/experience-section"
import Dashboard from "@/components/dashboard";
import { BlurFade } from "@/components/magicui/blur-fade";


const BLUR_FADE_DELAY = 0.15;


export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="mx-auto flex flex-col items-center overflow-hidden ">
        <BlurFade delay={BLUR_FADE_DELAY * 1} inView>
          <section id="hero">
            <Hero />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <section id="experience">
            <Experience />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <section id="dashboard">
            <Dashboard />
          </section>
        </BlurFade> 
      </div>
    </div>
  );

}