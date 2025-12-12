'use client'

import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function PromotionalCard() {
  const pathname = usePathname()
  
  // Only show on home page
  if (pathname !== '/') {
    return null
  }

  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto">
        {/* Main Card */}
        <div className="bg-[#0a0f1a] rounded-t-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          {/* Left side - Ribbon graphic */}
          <div className="lg:w-2/5 relative overflow-hidden bg-[#0a0f1a]">
            <div className="relative h-full min-h-[200px] lg:min-h-[300px] flex items-center justify-center">
              {/* 3D Flowing Ribbon effect */}
              <div className="absolute inset-0">
                <svg 
                  viewBox="0 0 500 400" 
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="30%" stopColor="#f472b6" />
                      <stop offset="60%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="ribbonGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="30%" stopColor="#f9a8d4" />
                      <stop offset="60%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="rgba(0,0,0,0.5)"/>
                    </filter>
                    <filter id="shadowLight">
                      <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="rgba(0,0,0,0.3)"/>
                    </filter>
                  </defs>
                  {/* Main ribbon - bottom layer */}
                  <path
                    d="M 0 200 Q 120 140 250 180 Q 380 220 500 180 L 500 240 Q 380 280 250 240 Q 120 200 0 240 Z"
                    fill="url(#ribbonGradient)"
                    filter="url(#shadow)"
                    opacity="0.95"
                  />
                  {/* Middle ribbon */}
                  <path
                    d="M 0 160 Q 120 100 250 140 Q 380 180 500 140 L 500 200 Q 380 240 250 200 Q 120 160 0 200 Z"
                    fill="url(#ribbonGradientLight)"
                    filter="url(#shadowLight)"
                    opacity="0.9"
                  />
                  {/* Top ribbon highlight */}
                  <path
                    d="M 0 120 Q 120 60 250 100 Q 380 140 500 100 L 500 160 Q 380 200 250 160 Q 120 120 0 160 Z"
                    fill="url(#ribbonGradientLight)"
                    filter="url(#shadowLight)"
                    opacity="0.85"
                  />
                  {/* Highlight overlay for 3D effect */}
                  <path
                    d="M 0 120 Q 120 60 250 100 Q 380 140 500 100 L 500 130 Q 380 170 250 130 Q 120 90 0 130 Z"
                    fill="url(#ribbonGradientLight)"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Connect every action to impact
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Start for free with up to 50K monthly tracked users, or tell us what you want to see in a custom demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/signup"
                className="bg-white text-[#1a1a1a] hover:bg-gray-100 border-0 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg hover:shadow-lg"
              >
                Try for free
              </Button>
              <Button
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg hover:shadow-lg"
              >
                Get a demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footnotes Section - White Background */}
        <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 rounded-b-2xl">
          <p className="text-gray-700 text-xs sm:text-sm mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Cognera: "The Product Benchmark Report" (2025). Figures cited are from products in the 90th percentile of performance.
          </p>
          <p className="text-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            The Total Economic Impact™ of Cognera, a commissioned study conducted by Forrester Consulting on behalf of Cognera, August 2023.
          </p>
        </div>
      </div>
    </div>
  )
}

