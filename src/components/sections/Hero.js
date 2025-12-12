'use client'

import Button from '@/components/ui/Button'

export default function Hero({ title, subtitle }) {
  return (
    <section className="hero text-center mb-8 sm:mb-12 px-4 pointer-events-none relative overflow-hidden" style={{ minHeight: '60vh', position: 'relative', zIndex: 10 }}>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          {title || 'Privacy-First Behaviour Intelligence for Modern Apps'}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 px-4 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pointer-events-auto">
          <Button href="/demo" variant="primary" className="text-lg px-8 py-4">
            Book a Demo
          </Button>
          <Button href="/platform" variant="secondary" className="text-lg px-8 py-4">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  )
}
