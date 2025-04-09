"use client";
// import { cn } from "@/lib/utils";
import Hero from "@/components/hero-section"
import Experience from "@/components/experience-section"
import Dashboard  from "@/components/dashboard";




export default function Home() {
  return (

    <div className="relative min-h-screen w-full bg-background">

      {/* <div className="z-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6/7 w-[60vw] h-[80vh] md:w-[40vw] md:h-[90vh] lg:w-[40vw] lg:h-[90vh] rounded-full blur-3xl bg-gradient-to-r via-purple-400/70 from-orange-400/70 to-blue-400/70 dark:via-purple-400/50 dark:from-orange-400/50 dark:to-blue-400/50 mixed-blend-multiply"></div> */}

      <div className="mx-auto flex flex-col items-center overflow-hidden ">

        <section id="hero">
          <Hero />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="dashboard">
          <Dashboard />
        </section>


      </div>
    </div>
  );

}