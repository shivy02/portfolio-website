"use client";
import Hero from "@/components/home/hero"
import Experience from "@/components/home/experience"
import Dashboard from "@/components/home/dashboard";
import Projects from "@/components/home/projects"
import { BlurFade } from "@/components/ui/blur-fade";


const BLUR_FADE_DELAY = 0.005;

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="mx-auto flex max-w-5xl flex-col space-y-12 sm:space-y-32 px-4">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <section id="hero">
            <Hero />
          </section>
        </BlurFade> 
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <section id="dashboard">
            <Dashboard />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <section id="projects">
            <Projects />
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 1} inView>
          <section id="experience">
            <Experience />
          </section>
        </BlurFade>
      </div>
    </div>
  );

}
