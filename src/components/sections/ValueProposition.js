export default function ValueProposition({ title, items }) {
  const defaultItems = [
    '1. Data Foundation: We capture precise time and access logs.',
    '2. Insights Engine: We calculate Flow State Duration and Distraction Scores.',
    '3. Action Framework: We enable real-time coaching and workflow optimization.'
  ]

  const displayItems = items || defaultItems

  return (
    <section className="value-proposition max-w-3xl mx-auto text-left mb-6 sm:mb-8 px-4 sm:px-6 relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 font-bold">
        {title || 'The Three-Layered Approach'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {displayItems.map((item, index) => (
          <p key={index} className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
