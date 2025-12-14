export default function ValueProposition({ title, items }) {
  const defaultItems = [
    {
      number: '1',
      title: 'Data Foundation',
      description: 'We collect high-fidelity time, interaction, and access signals to establish a reliable behavioral dataset.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Insights Engine',
      description: 'We compute metrics such as Flow State Duration, Distraction Scores, and attention patterns to reveal the drivers behind user behavior.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Action Framework',
      description: 'We deliver real-time recommendations, coaching cues, and workflow optimizations that help teams stay focused and productive.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const displayItems = items || defaultItems

  return (
    <section className="value-proposition max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 font-bold text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {title || 'The Three-Layered Approach'}
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {displayItems.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl text-white mb-2 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {item.number}. {item.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
