"use client";
// import { cn } from "@/lib/utils";
import Hero from "@/components/home/hero-section"
import Experience from "@/components/home/experience-section"
import Dashboard from "@/components/home/dashboard";
import Projects from "@/components/home/project-section"
import { BlurFade } from "@/components/magicui/blur-fade";


const BLUR_FADE_DELAY = 0.15;

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="mx-auto flex max-w-4xl flex-col space-y-16 sm:space-y-32 px-4 items-center overflow-hidden ">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <section id="hero">
            <Hero />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <section id="experience">
            <Experience />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <section id="dashboard">
            <Dashboard />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <section id="projects">
            <Projects />
          </section>
        </BlurFade> 
      </div>
    </div>
  );

}
