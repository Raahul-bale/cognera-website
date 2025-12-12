export default function FeatureGrid() {
  const features = [
    {
      title: 'Screen Time Intelligence',
      description: 'Analyse usage distribution, focus duration, and active time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-slate-700/90 to-slate-800/90'
    },
    {
      title: 'App Switching Flows',
      description: 'Identify distractions and attention shifts instantly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      gradient: 'from-indigo-700/90 to-indigo-800/90'
    },
    {
      title: 'Flow State Detection',
      description: 'Recognize deep-focus sessions and high-engagement periods.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-700/90 to-blue-800/90'
    },
    {
      title: 'Behaviour Cohorts',
      description: 'Group users based on usage habits, not personal data.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-slate-600/90 to-slate-700/90'
    },
    {
      title: 'Distraction Mapping',
      description: 'Understand how often users break focus and recovery time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: 'from-indigo-600/90 to-indigo-700/90'
    },
    {
      title: 'Privacy-Safe Analytics',
      description: 'Zero PII. Anonymous IDs. Fully compliant with DPDP requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: 'from-blue-600/90 to-blue-700/90'
    }
  ]

  return (
    <section className="feature-grid max-w-7xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-4 sm:mb-6 font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        Understand Your Users Like Never Before
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl pointer-events-auto group`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-3 sm:mb-4 transition-colors text-white/90">
              {feature.icon}
            </div>
            <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {feature.title}
            </h3>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

