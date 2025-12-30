'use client'

import { VisionBoardData } from '@/lib/types'
import { VisionSection } from '@/components/VisionSection'
import { cn } from '@/lib/utils'
import { useGSAPStagger } from '@/lib/gsap-hooks'

interface MinimalCinematicProps {
  data: VisionBoardData
  className?: string
}

export function MinimalCinematic({ data, className }: MinimalCinematicProps) {
  const containerRef = useGSAPStagger('.vision-card', 0.3)

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-background via-background to-secondary p-6 sm:p-8 md:p-12 lg:p-16 relative",
        className
      )}
    >
      <div className="max-w-[1600px] mx-auto relative" ref={containerRef}>
        {/* Central Title - Vision Board Style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-foreground tracking-tight opacity-90 drop-shadow-2xl">
            {data.meta.title}
          </h1>
          {data.quotes && data.quotes.length > 0 && (
            <blockquote className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto drop-shadow-lg">
              &ldquo;{data.quotes[0]}&rdquo;
            </blockquote>
          )}
        </div>

        {/* Vision Board Cards - Scattered Layout */}
        <div className="relative min-h-screen py-32 sm:py-40 md:py-48 lg:py-56">
          {/* Top Left */}
          {data.sections[0] && (
            <div className="absolute top-0 left-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] transform -rotate-3 hover:rotate-0 transition-transform duration-300 vision-card">
              <VisionSection section={data.sections[0]} />
            </div>
          )}

          {/* Top Right */}
          {data.sections[1] && (
            <div className="absolute top-0 right-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] transform rotate-2 hover:rotate-0 transition-transform duration-300 vision-card">
              <VisionSection section={data.sections[1]} />
            </div>
          )}

          {/* Bottom Left */}
          {data.sections[2] && (
            <div className="absolute bottom-0 left-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] transform rotate-1 hover:rotate-0 transition-transform duration-300 vision-card">
              <VisionSection section={data.sections[2]} />
            </div>
          )}

          {/* Bottom Right */}
          {data.sections[3] && (
            <div className="absolute bottom-0 right-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] transform -rotate-2 hover:rotate-0 transition-transform duration-300 vision-card">
              <VisionSection section={data.sections[3]} />
            </div>
          )}

          {/* Additional sections if any - scattered in middle areas */}
          {data.sections.slice(4).map((section, idx) => {
            const positions = [
              'top-1/4 left-1/4',
              'top-3/4 right-1/3',
              'top-1/3 right-1/4',
              'bottom-1/3 left-1/3'
            ]
            const rotations = ['rotate-3', '-rotate-1', 'rotate-2', '-rotate-3']
            return (
              <div
                key={section.id}
                className={cn(
                  "absolute w-[280px] sm:w-[320px] md:w-[360px] transform hover:rotate-0 transition-transform duration-300 vision-card",
                  positions[idx % positions.length],
                  rotations[idx % rotations.length]
                )}
              >
                <VisionSection section={section} />
              </div>
            )
          })}
        </div>

        {/* Footer Quote */}
        {data.quotes && data.quotes.length > 1 && (
          <footer className="text-center pt-8 pb-4">
            <blockquote className="text-sm sm:text-base md:text-lg text-muted-foreground font-light italic drop-shadow-md">
              &ldquo;{data.quotes[1]}&rdquo;
            </blockquote>
          </footer>
        )}
      </div>
    </div>
  )
}
