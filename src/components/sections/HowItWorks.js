export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Install SDK',
      description: 'A lightweight Android / iOS SDK collects anonymous behavioural signals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Capture Events',
      description: 'Flow patterns, switches, focus windows, and session time are recorded.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'AI Processing',
      description: 'Models convert raw signals into behavioural insights.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'View Insights Dashboard',
      description: 'Teams receive real-time analytics to guide product and experience decisions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="how-it-works max-w-6xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 sm:mb-10 font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        How Cognera Works (4-Step Process)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl pointer-events-auto group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-[#0a0a0a]">
                  <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

