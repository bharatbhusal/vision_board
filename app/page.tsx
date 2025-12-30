'use client'

import { useRef, useEffect, useState } from 'react'
import { VisionBoard } from '@/components/VisionBoard'
import { ExportControls } from '@/components/ExportControls'
import { VisionBoardData } from '@/lib/types'

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null)
  const [visionData, setVisionData] = useState<VisionBoardData | null>(null)

  useEffect(() => {
    // Load vision board data from JSON
    fetch('/data/vision-board.json')
      .then((res) => res.json())
      .then((data) => setVisionData(data))
      .catch((error) => console.error('Failed to load vision board data:', error))
  }, [])

  if (!visionData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading your vision board...</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Export Controls - Fixed at top */}
      <div className="fixed top-4 right-4 z-50">
        <ExportControls targetRef={boardRef} />
      </div>

      {/* Vision Board */}
      <div ref={boardRef}>
        <VisionBoard data={visionData} />
      </div>
    </div>
  )
}
