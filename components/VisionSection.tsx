'use client'

import { VisionBoardSection } from '@/lib/types'
import { ImageGrid } from './ImageGrid'
import { IdentityStatements } from './IdentityStatements'
import { cn } from '@/lib/utils'

interface VisionSectionProps {
  section: VisionBoardSection
  className?: string
}

export function VisionSection({ section, className }: VisionSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 tracking-wide">
        {section.title}
      </h2>
      <ImageGrid images={section.images} />
      <IdentityStatements statements={section.statements} />
    </div>
  )
}
