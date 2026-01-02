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
        minHeight: '400px',
        overflow: 'visible',
        background: 'linear-gradient(to bottom, #7440FA, #000000)'
      }}
    >
      {/* Large Brand Name with Gradient */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ zIndex: 1, paddingBottom: '2rem', bottom: 0, overflow: 'visible' }}
      >
        <h1
          className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none text-center relative inline-block"
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
          <sup
            style={{
              fontSize: '0.25em',
              verticalAlign: 'super',
              lineHeight: 0,
              position: 'relative',
              top: '-0.2em',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.4))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            TM
          </sup>
        </h1>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 sm:mb-32 lg:mb-40 xl:mb-48">
          <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            &copy; 2025 Cognera Data Labs, Inc. All rights reserved. Cognera is a registered trademark of Cognera Data Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
