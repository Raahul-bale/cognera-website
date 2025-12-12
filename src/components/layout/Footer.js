'use client'

import { useEffect, useState, useRef } from 'react'

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const lastScrollYRef = useRef(0)
  const scrollProgressRef = useRef(0)
  const footerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return

      const footer = footerRef.current
      const rect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollYRef.current
      
      // Determine scroll direction
      const scrollingUp = scrollDelta < 0
      const scrollingDown = scrollDelta > 0
      
      // Check if footer is in viewport
      const footerInView = rect.top < windowHeight && rect.bottom > 0
      
      let progress = scrollProgressRef.current // Start with current progress
      
      if (footerInView) {
        const scrollSpeed = Math.abs(scrollDelta)
        
        if (scrollingDown && scrollSpeed > 0.5) {
          // Scrolling DOWN - REVEAL the text (increase opacity)
          progress = Math.min(1, progress + scrollSpeed * 0.02)
        } else if (scrollingUp && scrollSpeed > 0.5) {
          // Scrolling UP - HIDE the text (decrease opacity)
          progress = Math.max(0, progress - scrollSpeed * 0.02)
        }
        // If no scroll or very small scroll, keep current progress
      } else {
        // Footer not in view, keep hidden
        progress = 0
      }
      
      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress))
      scrollProgressRef.current = progress
      lastScrollYRef.current = currentScrollY
      setScrollProgress(progress)
    }

    // Initialize last scroll position
    lastScrollYRef.current = window.scrollY
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Calculate opacity and transform based on scroll progress
  const opacity = Math.max(0, Math.min(1, scrollProgress)) // Ensure it's between 0 and 1
  const translateY = (1 - scrollProgress) * 50 // Move up as we scroll up

  return (
    <footer 
      ref={footerRef}
      className="text-white py-8 sm:py-12 mt-auto relative w-full z-10"
      style={{ 
        marginBottom: 0, 
        paddingBottom: '8rem', 
        minHeight: '700px', 
        overflow: 'visible',
        background: 'linear-gradient(to bottom, #7440FA, #000000)'
      }}
    >
      {/* Large Brand Name with Gradient - Behind Footer Content */}
      <div 
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ zIndex: 1, paddingBottom: '8rem', bottom: 0, overflow: 'visible' }}
      >
        <h1 
          className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none text-center"
          style={{ 
            fontFamily: 'var(--font-inter), sans-serif',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.4))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            opacity: opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
            lineHeight: '1.1',
            paddingBottom: '0.1em'
          }}
        >
          Cognera
        </h1>
      </div>

      {/* Footer Content - In Front */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left Side - Product Links and Social Icons */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <a 
                href="/platform/ai-feedback" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                AI Feedback
              </a>
              <a 
                href="/platform/cognera-mcp" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Cognera MCP
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://linkedin.com/company/cognera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#7440FA] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/cognera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#7440FA] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.g2.com/products/cognera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#7440FA] transition-colors font-bold text-lg"
                aria-label="G2"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                G²
              </a>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a 
                href="/terms" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Terms of Service
              </a>
              <a 
                href="/privacy" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Privacy Notice
              </a>
              <a 
                href="/acceptable-use" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Acceptable Use Policy
              </a>
              <a 
                href="/legal" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Legal
              </a>
              <a 
                href="/cookie-settings" 
                className="text-white hover:text-[#7440FA] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Cookie Settings
              </a>
            </div>

            {/* Language Options */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a 
                href="/?lang=en" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                English
              </a>
              <a 
                href="/?lang=ja" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Japanese (日本語)
              </a>
              <a 
                href="/?lang=ko" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Korean (한국어)
              </a>
              <a 
                href="/?lang=es" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Español (Spain)
              </a>
              <a 
                href="/?lang=pt-br" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Português (Brasil)
              </a>
              <a 
                href="/?lang=pt" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Português (Portugal)
              </a>
              <a 
                href="/?lang=fr" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Français
              </a>
              <a 
                href="/?lang=de" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Deutsch
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mb-32 sm:mb-40 lg:mb-48 xl:mb-56">
          <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            &copy; 2025 Cognera Data Labs, Inc. All rights reserved. Cognera is a registered trademark of Cognera Data Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
