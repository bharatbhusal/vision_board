'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageGridProps {
  images: string[]
  className?: string
}

export function ImageGrid({ images, className }: ImageGridProps) {
  if (images.length === 0) return null

  return (
    <div className={cn("grid gap-2", className)}>
      {images.length === 1 && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={images[0]}
            alt="Vision board image"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      {images.length === 2 && (
        <>
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-video w-full overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Vision board image ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </>
      )}
      {images.length >= 3 && (
        <div className="grid grid-cols-2 gap-2">
          {images.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square w-full overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Vision board image ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
