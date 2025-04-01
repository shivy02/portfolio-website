"use client";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam"
import { GlowingEffect } from "./ui/glowing-effect";

// export default function Experience() {
//     return (
//       <div className="flex flex-col items-start justify-center space-y-4">
//         {/* Heading */}
//         <p className="text-xl font-bold text-start">Experience</p>
  
//         {/* Content inside TracingBeam */}
//         <TracingBeam>
//           <div className="p-4">
//             <p>
//               Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
//               elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
//               commodi quidem ea incidunt, sint officia voluptatum accusantium,
//               dolorem sunt expedita veritatis atque. Amet?
//             </p>
//             {/* Add your content here */}
//           </div>
//         </TracingBeam>
//       </div>
//     );
//   }

export default function Experience() {
    return (
      <div className="flex rounded-xl flex-col items-start justify-start space-y-4 mb-24">
        {/* Container for heading and content */}
        <div className="w-full max-w-4xl">

          {/* Heading */}
          <p className="text-2xl font-bold text-left pb-4 ml-8 md:ml-auto">Experience</p>

          {/* Content inside TracingBeam */}
          <TracingBeam>
            {/* Experience Card */}
   
            <div className="p-4 border rounded-md my-4 mx-8 md:mx-auto">

              <p className="text-left">
                Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet?
              </p>
              <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
              {/* Add your content here */}
            </div>

            <div className="p-4 border rounded-md my-4 mx-8 md:mx-auto">
              <p className="text-left">
                Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet?
              </p>
              {/* Add your content here */}
            </div>
            <div className="p-4 border rounded-md my-4 mx-8 md:mx-auto">
              <p className="text-left">
                Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet? Hello asdfasdf a Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Totam itaque obcaecati, odio blanditiis ullam iste tempora
                commodi quidem ea incidunt, sint officia voluptatum accusantium,
                dolorem sunt expedita veritatis atque. Amet?
              </p>
              {/* Add your content here */}
            </div>
          </TracingBeam>
        </div>
      </div>
    );
  }