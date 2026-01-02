'use client'

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{ overflow: 'visible' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ overflow: 'visible' }}>
        {/* Dark gradient rounded navigation bar */}
        <div
          className="mt-2 shadow-lg relative z-[201]"
          style={{
            background: 'linear-gradient(to bottom, #000000, #7440FA)',
            overflow: 'visible',
            borderRadius: '9999px'
          }}
        >
          <div className="flex justify-center items-center py-3 px-4 sm:px-6 relative" style={{ overflow: 'visible' }}>
            {/* Centered Logo */}
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/img/android-chrome-512x512.png"
                alt="Cognera Logo"
                className="w-16 h-16 mr-2"
                style={{ objectFit: 'contain' }}
              />
              <h1 className="text-xl sm:text-2xl text-white font-semibold relative inline-block" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Cognera
                <sup
                  style={{
                    fontSize: '0.35em',
                    verticalAlign: 'super',
                    lineHeight: 0,
                    position: 'relative',
                    top: '-0.2em',
                    marginLeft: '2px'
                  }}
                >
                  TM
                </sup>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
