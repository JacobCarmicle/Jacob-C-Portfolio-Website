'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(0)
  const menuOptions = [
    { label: 'START GAME', href: '/projects' },
    { label: 'ACHIEVEMENTS', href: '/achievements' },
    { label: 'ABOUT', href: '/about' },
  ]

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedOption((prev) => (prev + 1) % menuOptions.length)
    } else if (e.key === 'ArrowUp') {
      setSelectedOption((prev) => (prev - 1 + menuOptions.length) % menuOptions.length)
    } else if (e.key === 'Enter') {
      window.location.href = menuOptions[selectedOption].href
    }
  }

  return (
    <div 
      className="min-h-screen bg-[#1a1a2e] relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Scanlines effect */}
      <div className="scanlines"></div>

      {/* Pixel grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108, 92, 231, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 92, 231, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Main Menu */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="pixel-text text-4xl md:text-6xl mb-4 text-[#00d2ff]">
            JACOB C
          </h1>
          <p className="text-xs md:text-sm text-[#6c5ce7] mb-2">
            DEVELOPER & SOFTWARE ENGINEER
          </p>
          <div className="flex justify-center gap-2">
            <span className="text-[#ff6b9d]">●</span>
            <span className="text-[#6bcf7f]">●</span>
            <span className="text-[#ffd93d]">●</span>
          </div>
        </div>

        {/* Start Game Menu */}
        <div className="pixel-border bg-[#0f0f1e] p-8 md:p-12 min-w-[300px] md:min-w-[400px]">
          <h2 className="text-center text-lg md:text-xl mb-8 text-[#ffd93d]">
            SELECT OPTION
          </h2>
          
          <div className="space-y-4">
            {menuOptions.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className={`block arcade-button text-center ${
                  selectedOption === index 
                    ? 'bg-[#6c5ce7] border-[#00d2ff]' 
                    : 'bg-[#2d2d44]'
                }`}
                onMouseEnter={() => setSelectedOption(index)}
              >
                {option.label}
                {selectedOption === index && (
                  <span className="ml-2 text-[#ffd93d]">◄</span>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#4a4a6a]">
            <p>USE ↑↓ OR MOUSE TO SELECT</p>
            <p className="mt-2">PRESS ENTER OR CLICK</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-xs text-[#4a4a6a]">
          <p>© 2024 JACOB C. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d2ff] transition-colors"
            >
              GITHUB
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d2ff] transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

