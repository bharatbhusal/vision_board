'use client'

import { VisionBoardData } from '@/lib/types'
import { VisionSection } from '@/components/VisionSection'
import { cn } from '@/lib/utils'

interface MinimalCinematicProps {
  data: VisionBoardData
  className?: string
}

export function MinimalCinematic({ data, className }: MinimalCinematicProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 md:p-12 lg:p-16",
        className
      )}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 tracking-tight">
            {data.meta.title}
          </h1>
          {data.quotes && data.quotes.length > 0 && (
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-600 font-light italic max-w-3xl mx-auto">
              &ldquo;{data.quotes[0]}&rdquo;
            </blockquote>
          )}
        </header>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {data.sections.map((section) => (
            <VisionSection key={section.id} section={section} />
          ))}
        </div>

        {/* Footer Quote */}
        {data.quotes && data.quotes.length > 1 && (
          <footer className="text-center pt-8 border-t border-gray-200">
            <blockquote className="text-sm sm:text-base md:text-lg text-gray-500 font-light italic">
              &ldquo;{data.quotes[1]}&rdquo;
            </blockquote>
          </footer>
        )}
      </div>
    </div>
  )
}
