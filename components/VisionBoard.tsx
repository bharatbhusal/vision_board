'use client'

import { VisionBoardData } from '@/lib/types'
import { MinimalCinematic } from '@/templates/minimal-cinematic'

interface VisionBoardProps {
  data: VisionBoardData
}

export function VisionBoard({ data }: VisionBoardProps) {
  // Template selection based on JSON data
  const renderTemplate = () => {
    switch (data.meta.template) {
      case 'minimal-cinematic':
        return <MinimalCinematic data={data} />
      default:
        return <MinimalCinematic data={data} />
    }
  }

  return renderTemplate()
}
