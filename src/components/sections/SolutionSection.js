export default function SolutionSection() {
  const layers = [
    {
      number: '1',
      title: 'Data Layer',
      description: 'Anonymous behavioural signals such as:',
      items: ['Session windows', 'App switches', 'Focus time', 'Flow disruptions'],
      gradient: 'from-slate-700/90 to-slate-800/90',
      iconColor: 'text-blue-300',
      bgColor: 'bg-slate-700/40'
    },
    {
      number: '2',
      title: 'Insights Layer',
      description: 'AI models convert signals into:',
      items: ['Flow state detection', 'Behaviour cohorts', 'Distraction and recovery patterns', 'Intent and engagement mapping'],
      gradient: 'from-indigo-700/90 to-indigo-800/90',
      iconColor: 'text-indigo-300',
      bgColor: 'bg-indigo-700/40'
    },
    {
      number: '3',
      title: 'Action Layer',
      description: 'Teams get actionable insights to:',
      items: ['Reduce drop-offs', 'Improve user engagement', 'Optimize feature placement', 'Enhance digital productivity'],
      gradient: 'from-blue-700/90 to-blue-800/90',
      iconColor: 'text-blue-300',
      bgColor: 'bg-blue-700/40'
    }
  ]

  return (
    <section className="solution-section max-w-6xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 sm:mb-10 font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        A Three-Layer Behaviour Intelligence System
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {layers.map((layer, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${layer.gradient} rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 pointer-events-auto`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${layer.bgColor} flex items-center justify-center`}>
                <span className={`text-2xl sm:text-3xl font-bold ${layer.iconColor}`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {layer.number}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl text-white font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {layer.title}
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-white/80 mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {layer.description}
            </p>
            
            <ul className="space-y-3">
              {layer.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full ${layer.iconColor.replace('text-', 'bg-')} mt-2`}></div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

