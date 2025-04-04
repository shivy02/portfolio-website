"use client";
// import { cn } from "@/lib/utils";
import Hero from "../components/hero-section"
import Experience from "../components/experience-section"
import { Dashboard } from "@/components/dashboard";




export default function Home() {
  return (

    <div className="relative min-h-screen w-full bg-background overflow-hidden">

      {/* Background circles */}
      <div className="z-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[60vw] h-[100vh] md:w-150 md:h-200 bg-purple-400/40 rounded-full blur-3xl mixed-blend-multiply"></div>
      <div className="z-1 absolute top-0 left-[calc(50%-15rem)] transform -translate-x-1/2 -translate-y-4/5 w-[70vw] h-[60vh] md:w-100 md:h-100 bg-orange-300/40 rounded-full blur-3xl mixed-blend-multiply"></div>
      <div className="z-1 absolute top-0 left-[calc(50%+15rem)] transform -translate-x-1/2 -translate-y-4/5 w-[70vw] h-[60vh] md:w-100 md:h-100 bg-blue-300/40 rounded-full blur-3xl mixed-blend-multiply"></div>

      <div className="mx-auto flex flex-col items-center space-y-8">

        {/* Navbar */}


        {/* Hero */}
        <Hero />

        {/* Experience */}
        <Experience />

        {/* Dashboard */}
        <Dashboard />

      </div>
    </div>
  );

}