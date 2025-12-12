'use client'

import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="final-cta text-center mb-8 sm:mb-12 px-4 pointer-events-none relative z-10">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-bold leading-tight pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Ready to unlock real behavioural intelligence?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Get a personalised walkthrough of how Cognera can improve user experience, engagement, and digital productivity.
          </p>
          <div className="pointer-events-auto">
            <Button href="/demo" variant="primary" className="text-lg px-10 py-5 text-xl">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

