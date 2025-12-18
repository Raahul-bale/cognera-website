export default function SupportPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12" style={{ backgroundColor: '#080707' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-12 sm:mb-16 font-bold text-center uppercase"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Support Page
          </h1>

          {/* Content Section */}
          <div className="space-y-8 sm:space-y-12">
            {/* Support Emails Section */}
            <div>
              <h2 
                className="text-2xl sm:text-3xl text-white font-bold mb-4 sm:mb-6"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Support Emails:
              </h2>
              <div className="space-y-3">
                <a 
                  href="mailto:support@cogneradatalabs.com"
                  className="block text-[#3399CC] hover:text-[#7440FA] transition-colors text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  support@cogneradatalabs.com
                </a>
                <a 
                  href="mailto:escalation@cogneradatalabs.com"
                  className="block text-[#3399CC] hover:text-[#7440FA] transition-colors text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  escalation@cogneradatalabs.com
                </a>
              </div>
            </div>

            {/* Support Topics Section */}
            <div>
              <h2 
                className="text-2xl sm:text-3xl text-white font-bold mb-4 sm:mb-6"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Support Topics:
              </h2>
              <ul className="space-y-2 sm:space-y-3 list-none">
                <li 
                  className="text-white text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  - SDK integration
                </li>
                <li 
                  className="text-white text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  - Dashboard usage
                </li>
                <li 
                  className="text-white text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  - Troubleshooting
                </li>
                <li 
                  className="text-white text-lg sm:text-xl"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  - Custom reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

