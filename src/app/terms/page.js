export default function TermsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Terms of Service
          </h1>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-white/10">
            <p className="text-white/80 mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Terms of Service content coming soon...
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

