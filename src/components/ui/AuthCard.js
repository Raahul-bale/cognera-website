import MatrixBackground from './MatrixBackground'

export default function AuthCard({ children, title, subtitle, logo = true }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative" style={{ backgroundColor: '#080707' }}>
      <MatrixBackground />
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-800">
          {logo && (
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#7440FA] transform rotate-45 mr-2"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Cognera</h1>
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
