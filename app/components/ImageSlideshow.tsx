'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageSlideshowProps {
  images: string[]
  title: string
}

export default function ImageSlideshow({ images, title }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] bg-[#0f0f1e] border-4 border-[#4a4a6a] overflow-hidden">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
          priority={currentIndex === 0}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a2e]/50"></div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#0f0f1e]/80 hover:bg-[#0f0f1e] border-2 border-[#6c5ce7] text-[#00d2ff] p-2 transition-all hover:scale-110 pixel-text"
            aria-label="Previous image"
          >
            ◄
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#0f0f1e]/80 hover:bg-[#0f0f1e] border-2 border-[#6c5ce7] text-[#00d2ff] p-2 transition-all hover:scale-110 pixel-text"
            aria-label="Next image"
          >
            ►
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-[#0f0f1e]/80 border-2 border-[#4a4a6a] px-2 py-1">
          <span className="text-[8px] text-[#00d2ff] pixel-text">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#00d2ff] scale-125'
                  : 'bg-[#4a4a6a] hover:bg-[#6c5ce7]'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

