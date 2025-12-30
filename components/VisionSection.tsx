'use client'

import { VisionBoardSection } from '@/lib/types'
import { ImageGrid } from './ImageGrid'
import { IdentityStatements } from './IdentityStatements'
import { cn } from '@/lib/utils'
import { useGSAPHover } from '@/lib/gsap-hooks'

interface VisionSectionProps {
  section: VisionBoardSection
  className?: string
}

export function VisionSection({ section, className }: VisionSectionProps) {
  const hoverRef = useGSAPHover(1.03, 0.3)

  return (
    <div 
      ref={hoverRef}
      className={cn(
        "vision-board-card bg-card rounded-lg p-5 sm:p-6 space-y-4 pointer-events-auto",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)]",
        "border-2 border-border transition-all duration-300",
        "backdrop-blur-sm bg-card/95",
        className
      )}
    >
      <h2 className="text-xl sm:text-2xl md:text-2xl font-light text-foreground tracking-wide border-b-2 border-border pb-2">
        {section.title}
      </h2>
      <ImageGrid images={section.images} />
      <IdentityStatements statements={section.statements} />
    </div>
  )
}
