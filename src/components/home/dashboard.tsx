"use client";
 
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconLayoutDashboard } from "@tabler/icons-react";
 
export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-8">
                <div className="flex items-center">
                    <IconLayoutDashboard className="h-5 w-5 text-secondary-foreground mr-2" />
                    <p className="text-xl font-bold text-secondary-foreground">Dashboard</p>
                </div>
            </div>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 sm:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="sm:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
 
      <GridItem
        area="sm:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
        title="The best Portfolio ever."  
        description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
      />
 
      <GridItem
        area="sm:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
        title="You should kiss Shivam"
        description="It's the best kiss you'll ever spend"
      />
 
      <GridItem
        area="sm:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
        title="This card is also built by yours truly"
        description="I'm not even kidding. Ask my mom if you don't believe me."
      />
 
      <GridItem
        area="sm:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
        title="Coming soon"
        description="I'm writing the code as I record this, no shit."
      />
    </ul>
      </div>
  );
}
 
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
 
const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative mx-auto h-full rounded-xl border p-2 md:rounded-2xl md:p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border-0.75 p-4 shadow-[0px_0px_12px_0px_#ebecf0] dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-md border border-gray-300 dark:border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-muted-foreground"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};