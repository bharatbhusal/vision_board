'use client'

import { useRef, useEffect, useState } from 'react'
import { VisionBoard } from '@/components/VisionBoard'
import { ExportControls } from '@/components/ExportControls'
import { ThemeToggle } from '@/components/theme-toggle'
import { VisionBoardData } from '@/lib/types'

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null)
  const [visionData, setVisionData] = useState<VisionBoardData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load vision board data from JSON
    fetch('/data/vision-board.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load vision board data')
        }
        return res.json()
      })
      .then((data) => setVisionData(data))
      .catch((error) => {
        console.error('Failed to load vision board data:', error)
        setError('Failed to load vision board. Please check the data file.')
      })
  }, [])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 shadow-md"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!visionData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading your vision board...</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Controls - Fixed position with responsive handling */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <ThemeToggle />
        <ExportControls targetRef={boardRef} />
      </div>

      {/* Vision Board */}
      <div ref={boardRef}>
        <VisionBoard data={visionData} />
      </div>
    </div>
  )
}
