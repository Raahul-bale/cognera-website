'use client'

import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeoutRef = useRef(null)
  
  const hasActiveDropdown = activeDropdown !== null

  const handleDropdownEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  useEffect(() => {
    if (activeDropdown) {
      console.log('Dropdown active:', activeDropdown)
    }
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [activeDropdown])

  const getIcon = (iconName) => {
    const icons = {
      'ai-agents': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'ai-visibility': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      'ai-feedback': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      'cognera-mcp': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'product-analytics': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'marketing-analytics': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      'session-replay': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      'heatmaps': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      'guides-surveys': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      'feature-experimentation': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      'web-experimentation': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      'feature-management': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      'activation': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      'warehouse-native': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'data-governance': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      'security-privacy': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      'integrations': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'ai-behaviour-engine': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'behaviour-insight-layer': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'product-behaviour-analytics': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'session-flow-analytics': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      'attention-distraction-mapping': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      'behaviour-cohorts': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      'insight-driven-recommendations': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      'experience-optimization-signals': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
    return icons[iconName] || null
  }

  const platformMenu = {
    'AI / Intelligence': [
      { name: 'AI Behavior Engine', description: 'Behavior processing layer', icon: 'ai-behaviour-engine', href: '/platform/ai-behavior-engine' },
      { name: 'Behavior Insight Layer', description: 'Behavior interpretation layer', icon: 'behaviour-insight-layer', href: '/platform/behavior-insight-layer' },
      { name: 'Cognera MCP', description: 'Core intelligence framework', icon: 'cognera-mcp', href: '/platform/cognera-mcp' }
    ],
    'Insights': [
      { name: 'Product Behavior Analytics', description: 'Feature usage behavior', icon: 'product-behaviour-analytics', href: '/platform/product-behavior-analytics' },
      { name: 'Session Flow Analytics', description: 'Session-level behavior flow', icon: 'session-flow-analytics', href: '/platform/session-flow-analytics' },
      { name: 'Attention & Distraction Mapping', description: 'Focus & distraction patterns', icon: 'attention-distraction-mapping', href: '/platform/attention-distraction-mapping' },
      { name: 'Behavior Cohorts', description: 'Behavior-based grouping', icon: 'behaviour-cohorts', href: '/platform/behavior-cohorts' }
    ],
    'Action (Light)': [
      { name: 'Insight-Driven Recommendations', description: 'Behavior-based signals', icon: 'insight-driven-recommendations', href: '/platform/insight-driven-recommendations' },
      { name: 'Experience Optimization Signals', description: 'Experience guidance indicators', icon: 'experience-optimization-signals', href: '/platform/experience-optimization-signals' }
    ],
    'Data & Trust': [
      { name: 'Data Governance', description: 'Responsible data controls', icon: 'data-governance', href: '/platform/data-governance' },
      { name: 'Security & Privacy', description: 'Privacy-first protection', icon: 'security-privacy', href: '/platform/security-privacy' },
      { name: 'Integrations', description: 'System connectivity', icon: 'integrations', href: '/platform/integrations' }
    ]
  }

  const solutionsMenu = [
    { name: 'For Product Teams', description: 'Build better products using real behavioral insights.' },
    { name: 'For Marketing Teams', description: 'Understand engagement quality and attention patterns without tracking personal data.' },
    { name: 'For Engineering Teams', description: 'Validate product decisions using real-world behavior signals.' },
    { name: 'For Executives', description: 'Monitor engagement health and behavioral risk at a strategic level.' },
    { name: 'For Data & Analytics Teams', description: 'Augment analytics with privacy-safe behavioral intelligence.' },
    { name: 'For Privacy & Compliance Teams', description: 'Adopt behavioral analytics without violating user trust or regulations.' }
  ]

  const resourcesMenu = [
    { name: 'Developer Docs', description: 'SDK & API guides', href: '/docs' },
    { name: 'Support & Documentation', description: 'Help & usage support', href: '/support' },
    { name: 'Resources', description: 'Blogs, updates, insights', href: '/resources' }
  ]

  const pricingMenu = [
    { name: 'Pricing', description: 'Contact sales / custom plans', href: '/pricing' }
  ]

  const companyMenu = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security & Compliance', href: '/security' }
  ]

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[100]" 
        style={{ overflow: 'visible' }}
      >
        <div className="w-full relative" style={{ overflow: 'visible' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ overflow: 'visible' }}>
            {/* Dark gradient rounded navigation bar */}
            <div 
              className="mt-2 shadow-lg relative z-[201]"
              style={{ 
                background: hasActiveDropdown 
                  ? 'linear-gradient(to bottom, #000000 0%, #7440FA 100%)' 
                  : 'linear-gradient(to bottom, #000000, #7440FA)', 
                overflow: 'visible', 
                borderRadius: '9999px',
                borderTopLeftRadius: '9999px',
                borderTopRightRadius: '9999px',
                borderBottomLeftRadius: hasActiveDropdown ? '0' : '9999px',
                borderBottomRightRadius: hasActiveDropdown ? '0' : '9999px',
                transition: 'border-radius 0.2s ease, background 0.2s ease',
                marginBottom: hasActiveDropdown ? '0' : '0',
                position: 'relative'
              }}
            >
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 relative" style={{ overflow: 'visible' }}>
              {/* Logo */}
              <a href="/" className="flex items-center gap-0 hover:opacity-80 transition-opacity min-h-[44px] min-w-[44px]">
                <img 
                  src="/img/android-chrome-512x512.png" 
                  alt="Cognera Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  style={{ objectFit: 'contain', marginRight: 0 }}
                />
                <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold relative inline-block -ml-1" style={{ fontFamily: 'var(--font-inter), sans-serif', marginLeft: '-4px' }}>
                  Cognera
                </h1>
              </a>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-6 items-center pointer-events-auto">
                {/* Platform Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => handleDropdownEnter('platform')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'platform' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={() => handleDropdownEnter('platform')}
                  >
                    Platform
                  </button>
                </div>

                {/* Solutions Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'solutions' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={() => handleDropdownEnter('solutions')}
                  >
                    Solutions
                  </button>
                </div>

                {/* Resources Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => handleDropdownEnter('resources')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'resources' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={() => handleDropdownEnter('resources')}
                  >
                    Resources
                  </button>
                </div>

                {/* Pricing Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => handleDropdownEnter('pricing')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'pricing' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={() => handleDropdownEnter('pricing')}
                  >
                    Pricing
                  </button>
                </div>

                {/* Right Side Actions */}
                <div className="flex gap-4 items-center ml-4 pl-4 border-l border-white/20">
                  <a 
                    href="/login" 
                    className="text-white transition-colors hover:text-[#7440FA] text-sm lg:text-base"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Login
                  </a>
                  <a 
                    href="/contact" 
                    className="px-4 py-2 bg-gray-300 text-gray-900 hover:bg-gray-400 transition-colors text-sm lg:text-base font-semibold"
                    style={{ 
                      fontFamily: 'var(--font-inter), sans-serif', 
                      backgroundColor: '#d1d5db',
                      borderRadius: '9999px'
                    }}
                  >
                    Contact sales
                  </a>
                  <a 
                    href="/signup" 
                    className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm lg:text-base font-semibold"
                    style={{ 
                      fontFamily: 'var(--font-inter), sans-serif',
                      borderRadius: '9999px'
                    }}
                  >
                    Get started
                  </a>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Shared Dropdown Container - Positioned right below nav bar */}
            {hasActiveDropdown && (
              <div 
                className="absolute left-0 right-0 z-[200] pointer-events-auto"
                style={{ 
                  top: '100%',
                  marginTop: '0',
                  paddingTop: '0',
                  left: '0',
                  right: '0'
                }}
                onMouseEnter={() => handleDropdownEnter(activeDropdown)}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="w-full">
                  <div 
                    className="py-8 shadow-2xl" 
                    style={{ 
                      background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 3%, #5a2fc7 15%, #3d1f8f 35%, #1a1a1a 100%)',
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      borderBottomLeftRadius: '1.5rem',
                      borderBottomRightRadius: '1.5rem',
                      marginTop: '0',
                      marginLeft: '0',
                      marginRight: '0'
                    }}
                  >
                    {activeDropdown === 'platform' && (
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-row gap-6 px-4 sm:px-6">
                          {Object.entries(platformMenu).map(([category, items]) => (
                            <div key={category} className="flex flex-col gap-3 flex-1">
                              <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>{category}</h3>
                              {items.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  className="group p-3 rounded-lg transition-all cursor-pointer border border-transparent hover:border-white/20 min-h-[60px] block"
                                  style={{
                                    backgroundColor: 'transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                  }}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20" style={{ color: '#ffffff' }}>
                                      {getIcon(item.icon)}
                                    </div>
                                    <div className="flex-1">
                                      <p 
                                        className="font-semibold text-sm transition-colors mb-1" 
                                        style={{ 
                                          fontFamily: 'var(--font-inter), sans-serif', 
                                          color: '#ffffff'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.color = '#A78BFA'
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.color = '#ffffff'
                                        }}
                                      >
                                        {item.name}
                                      </p>
                                      <p 
                                        className="text-xs leading-relaxed transition-colors" 
                                        style={{ 
                                          fontFamily: 'var(--font-inter), sans-serif', 
                                          color: 'rgba(255, 255, 255, 0.9)'
                                        }}
                                      >
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeDropdown === 'solutions' && (
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>Solutions</h3>
                            {solutionsMenu.map((item, index) => (
                              <a
                                key={index}
                                href={`/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-3 px-4 rounded transition-colors group border border-transparent hover:border-white/20 min-h-[60px]"
                                style={{ backgroundColor: 'transparent' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent'
                                }}
                              >
                              <p className="font-semibold text-sm transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#ffffff' }}>
                                {item.name}
                              </p>
                              <p className="text-xs mt-1 transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(255, 255, 255, 0.8)' }}>
                                {item.description}
                              </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeDropdown === 'resources' && (
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>Resources</h3>
                            {resourcesMenu.map((item, index) => (
                              <a
                                key={index}
                                href={item.href || `/resources/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-3 px-4 rounded transition-colors group border border-transparent hover:border-white/20 min-h-[60px]"
                                style={{ backgroundColor: 'transparent' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent'
                                }}
                              >
                                <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.name}
                                </p>
                                {item.description && (
                                  <p className="text-xs text-white/70 group-hover:text-white/90 mt-1 transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                    {item.description}
                                  </p>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeDropdown === 'pricing' && (
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>Pricing</h3>
                            {pricingMenu.map((item, index) => (
                              <a
                                key={index}
                                href={item.href}
                                className="block py-3 px-4 rounded transition-colors group border border-transparent hover:border-white/20 min-h-[60px]"
                                style={{ backgroundColor: 'transparent' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent'
                                }}
                              >
                                <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.name}
                                </p>
                                {item.description && (
                                  <p className="text-xs text-white/70 group-hover:text-white/90 mt-1 transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                    {item.description}
                                  </p>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="fixed top-20 left-0 right-0 z-[99] mx-2 sm:mx-4 mt-2 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto" 
          style={{ 
            background: 'linear-gradient(to bottom, #000000, #7440FA)',
            borderRadius: '1rem',
          }}
        >
          <nav className="pb-4 px-4">
            <div className="flex flex-col gap-2 pt-4">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'platform-mobile' ? null : 'platform-mobile')}
                className="text-white text-left py-3 px-2 flex justify-between items-center min-h-[44px] text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Platform
                <span className="text-xl">{activeDropdown === 'platform-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'platform-mobile' && (
                <div className="pl-4 space-y-1">
                  {Object.entries(platformMenu).map(([category, items]) => (
                    <div key={category}>
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-3 px-2 text-gray-300 hover:text-white min-h-[44px] text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions-mobile' ? null : 'solutions-mobile')}
                className="text-white text-left py-3 px-2 flex justify-between items-center min-h-[44px] text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Solutions
                <span className="text-xl">{activeDropdown === 'solutions-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'solutions-mobile' && (
                <div className="pl-4 space-y-1">
                  {solutionsMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || `/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-3 px-2 text-gray-300 hover:text-white min-h-[44px] text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources-mobile' ? null : 'resources-mobile')}
                className="text-white text-left py-3 px-2 flex justify-between items-center min-h-[44px] text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Resources
                <span className="text-xl">{activeDropdown === 'resources-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="pl-4 space-y-1">
                  {resourcesMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-3 px-2 text-gray-300 hover:text-white min-h-[44px] text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'pricing-mobile' ? null : 'pricing-mobile')}
                className="text-white text-left py-3 px-2 flex justify-between items-center min-h-[44px] text-base"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Pricing
                <span className="text-xl">{activeDropdown === 'pricing-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'pricing-mobile' && (
                <div className="pl-4 space-y-1">
                  {pricingMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-3 px-2 text-gray-300 hover:text-white min-h-[44px] text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <a 
                  href="/login" 
                  className="text-white py-3 px-2 text-center min-h-[44px] flex items-center justify-center text-base"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <a 
                  href="/contact" 
                  className="px-4 py-3 bg-gray-300 text-gray-900 text-center font-semibold min-h-[44px] flex items-center justify-center text-base"
                  style={{ 
                    fontFamily: 'var(--font-inter), sans-serif',
                    borderRadius: '9999px'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact sales
                </a>
                <a 
                  href="/signup" 
                  className="px-4 py-3 bg-gray-900 text-white text-center font-semibold min-h-[44px] flex items-center justify-center text-base"
                  style={{ 
                    fontFamily: 'var(--font-inter), sans-serif',
                    borderRadius: '9999px'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get started
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
