'use client'

import Button from '@/components/ui/Button'

export default function Hero({ title, subtitle }) {
  return (
    <section className="hero text-center mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative overflow-hidden" style={{ minHeight: '50vh', paddingTop: '6rem', position: 'relative', zIndex: 10 }}>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight font-bold pointer-events-auto px-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          {title || 'Privacy-First Behavior Intelligence for Modern Apps'}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 px-2 sm:px-4 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pointer-events-auto px-2">
          <Button href="/demo" variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
            Book a Demo
          </Button>
          <Button href="/platform" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  )
}
