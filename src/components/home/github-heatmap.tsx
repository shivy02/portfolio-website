"use client";

import { GitHubContribution } from '@/hooks/useGitHub';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface GitHubHeatmapProps {
  contributions: GitHubContribution[];
  isLoading: boolean;
}

const levelColors = {
  NONE: 'bg-zinc-100 dark:bg-neutral-800/50',
  FIRST_QUARTILE: 'bg-green-200 dark:bg-green-900/70',
  SECOND_QUARTILE: 'bg-green-400 dark:bg-green-700/80',
  THIRD_QUARTILE: 'bg-green-600 dark:bg-green-500/90',
  FOURTH_QUARTILE: 'bg-green-700 dark:bg-green-400',
};

export function GitHubHeatmap({ contributions, isLoading }: GitHubHeatmapProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-sm text-neutral-400">Loading contributions...</div>
      </div>
    );
  }

  if (!contributions || contributions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-sm text-neutral-400">No contribution data available</div>
      </div>
    );
  }

  // Group contributions into weeks (7 days each)
  const weeks: GitHubContribution[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T12:00:00Z'); // Parse as UTC noon to avoid timezone shifts
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex gap-1.5 sm:gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1.5 sm:gap-1">
              {week.map((day) => (
                <Tooltip key={day.date}>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-[2px]
                        ${levelColors[day.level]}
                        border border-neutral-200/50 dark:border-neutral-700/30
                        hover:border-neutral-300 dark:hover:border-neutral-500
                        transition-all duration-200
                        hover:scale-125
                        cursor-pointer
                      `}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-neutral-900 border-neutral-700">
                    <div className="text-xs">
                      <div className="font-semibold">
                        {day.count} {day.count === 1 ? 'contribution' : 'contributions'}
                      </div>
                      <div className="text-neutral-400">{formatDate(day.date)}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
