export default function ProblemSection() {
  const challenges = [
    'Users switch apps frequently, breaking attention flow',
    'Drop-offs happen without behavioural context',
    'Engagement fluctuates without clear reasons',
    'Privacy laws restrict conventional tracking',
    'Teams cannot see distraction patterns or deep-work sessions'
  ]

  return (
    <section className="problem-section max-w-5xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl pointer-events-auto">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-slate-700/40 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 font-bold leading-tight" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Analytics show what happened. Cognera shows how it happened.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Traditional analytics stop at clicks, visits, and events. They do not explain behaviour.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl text-white mb-4 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {`Today's challenges:`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10">
          <p className="text-xl sm:text-2xl text-white font-bold text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Companies make decisions with half information.
          </p>
        </div>
      </div>
    </section>
  )
}

