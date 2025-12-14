import MatrixBackground from './MatrixBackground'

export default function AuthCard({ children, title, subtitle, logo = true }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative" style={{ backgroundColor: '#080707' }}>
      <MatrixBackground />
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-800">
          {logo && (
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <img 
                src="/img/android-chrome-512x512.png" 
                alt="Cognera Data Labs Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 mr-3"
                style={{ objectFit: 'contain' }}
              />
              <h1 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Cognera Data Labs
                <sup 
                  style={{ 
                    fontSize: '0.25em',
                    verticalAlign: 'super',
                    lineHeight: 0,
                    position: 'relative',
                    top: '-0.3em',
                    marginLeft: '1px',
                    fontWeight: 'normal'
                  }}
                >
                  TM
                </sup>
              </h1>
            </div>
          )}
          
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
              {title}
            </h2>
          )}
          
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  )
}
