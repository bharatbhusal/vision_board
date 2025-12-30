'use client'

import { useState } from 'react'
import { toPng } from 'html-to-image'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Select } from './ui/select'
import { Download } from 'lucide-react'
import { ExportSize, ExportDimensions } from '@/lib/types'

interface ExportControlsProps {
  targetRef: React.RefObject<HTMLDivElement | null>
}

const EXPORT_DIMENSIONS: Record<ExportSize, ExportDimensions> = {
  mobile: { width: 1080, height: 1920 },
  tablet: { width: 1536, height: 2048 },
  desktop: { width: 1920, height: 1080 },
}

export function ExportControls({ targetRef }: ExportControlsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [exportSize, setExportSize] = useState<ExportSize>('desktop')
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleExport = async () => {
    if (!targetRef.current) return

    setIsExporting(true)
    setError(null)
    try {
      const dimensions = EXPORT_DIMENSIONS[exportSize]
      
      const dataUrl = await toPng(targetRef.current, {
        cacheBust: true,
        width: dimensions.width,
        height: dimensions.height,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        pixelRatio: 2,
      })

      const link = document.createElement('a')
      link.download = `vision-board-${exportSize}-${Date.now()}.png`
      link.href = dataUrl
      link.click()
      
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Failed to export image:', error)
      setError('Failed to export image. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        size="lg"
        className="gap-2"
      >
        <Download className="w-4 h-4" />
        Export as Image
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Vision Board</DialogTitle>
            <DialogDescription>
              Choose the size for your vision board wallpaper
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="export-size" className="text-sm font-medium">
                Export Size
              </label>
              <Select
                id="export-size"
                value={exportSize}
                onChange={(e) => setExportSize(e.target.value as ExportSize)}
              >
                <option value="mobile">Mobile Wallpaper (1080x1920)</option>
                <option value="tablet">Tablet Wallpaper (1536x2048)</option>
                <option value="desktop">Desktop Wallpaper (1920x1080)</option>
              </Select>
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleExport}
                disabled={isExporting}
              >
                {isExporting ? 'Exporting...' : 'Export'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
