export default function PricingPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 font-bold text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Pricing
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Contact sales for custom pricing plans.
          </p>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-white/10">
            <p className="text-white/80 text-center mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Pricing information coming soon...
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#7440FA] text-white font-semibold rounded-lg hover:bg-[#5a2fc7] transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

