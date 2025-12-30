'use client'

import { useRef, useEffect, useState } from 'react'
import { VisionBoard } from '@/components/VisionBoard'
import { ExportControls } from '@/components/ExportControls'
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

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
