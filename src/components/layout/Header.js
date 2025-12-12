'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  const hasActiveDropdown = activeDropdown !== null

  useEffect(() => {
    if (activeDropdown) {
      console.log('Dropdown active:', activeDropdown)
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
      )
    }
    return icons[iconName] || null
  }

  const platformMenu = {
    AI: [
      { name: 'AI Agents', description: 'Sense, decide, and act faster than ever before', icon: 'ai-agents', href: '/platform/ai-agents' },
      { name: 'AI Visibility', description: 'See how your brand shows up in AI search', icon: 'ai-visibility', href: '/platform/ai-visibility' },
      { name: 'AI Feedback', description: 'Distill what your customers say they want', icon: 'ai-feedback', href: '/platform/ai-feedback' },
      { name: 'Cognera MCP', description: 'Insights from the comfort of your favorite AI tool', icon: 'cognera-mcp', href: '/platform/cognera-mcp' }
    ],
    INSIGHTS: [
      { name: 'Product Analytics', description: 'Understand the full user journey', icon: 'product-analytics', href: '/platform/product-analytics' },
      { name: 'Marketing Analytics', description: 'Get the metrics you need with one line of code', icon: 'marketing-analytics', href: '/platform/marketing-analytics' },
      { name: 'Session Replay', description: 'Visualize sessions based on events in your product', icon: 'session-replay', href: '/platform/session-replay' },
      { name: 'Heatmaps', description: 'Visualize clicks, scrolls, and engagement', icon: 'heatmaps', href: '/platform/heatmaps' }
    ],
    ACTION: [
      { name: 'Guides and Surveys', description: 'Guide your users and collect feedback', icon: 'guides-surveys', href: '/platform/guides-surveys' },
      { name: 'Feature Experimentation', description: 'Innovate with personalized product experiences', icon: 'feature-experimentation', href: '/platform/feature-experimentation' },
      { name: 'Web Experimentation', description: 'Drive conversion with A/B testing powered by data', icon: 'web-experimentation', href: '/platform/web-experimentation' },
      { name: 'Feature Management', description: 'Build fast, target easily, and learn as you ship', icon: 'feature-management', href: '/platform/feature-management' },
      { name: 'Activation', description: 'Unite data across teams', icon: 'activation', href: '/platform/activation' }
    ],
    DATA: [
      { name: 'Warehouse-native Cognera', description: 'Unlock insights from your data warehouse', icon: 'warehouse-native', href: '/platform/warehouse-native' },
      { name: 'Data Governance', description: 'Complete data you can trust', icon: 'data-governance', href: '/platform/data-governance' },
      { name: 'Security & Privacy', description: 'Keep your data secure and compliant', icon: 'security-privacy', href: '/platform/security-privacy' },
      { name: 'Integrations', description: 'Connect Cognera to hundreds of partners', icon: 'integrations', href: '/platform/integrations' }
    ]
  }

  const solutionsMenu = [
    { name: 'For Product Teams', description: 'Build better products with data-driven insights' },
    { name: 'For Marketing Teams', description: 'Optimize campaigns and drive growth' },
    { name: 'For Engineering Teams', description: 'Ship faster with confidence' },
    { name: 'For Executives', description: 'Make strategic decisions with real-time data' }
  ]

  const resourcesMenu = [
    { name: 'Documentation', description: 'Complete guides and API references' },
    { name: 'Blog', description: 'Latest insights and product updates' },
    { name: 'Case Studies', description: 'See how customers succeed with Cognera' },
    { name: 'Webinars', description: 'Learn from experts and best practices' },
    { name: 'Community', description: 'Connect with other users and developers' },
    { name: 'Support', description: 'Get help when you need it' }
  ]

  const pricingMenu = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Customer Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Developer Docs', href: '/docs' }
  ]

  const companyMenu = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & News', href: '/press' },
    { name: 'Investor Relations', href: '/investors' }
  ]

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[100]" 
        style={{ overflow: 'visible' }}
      >
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
              transition: 'border-radius 0.2s ease, background 0.2s ease'
            }}
          >
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 relative" style={{ overflow: 'visible' }}>
              {/* Logo */}
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-[#3399CC] rounded-full mr-2 flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <h1 className="text-lg sm:text-xl text-white font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Cognera
                </h1>
              </a>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-6 items-center pointer-events-auto">
                {/* Platform Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => setActiveDropdown('platform')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'platform' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Platform
                  </button>
                  {activeDropdown === 'platform' && (
                    <div 
                      className="fixed left-0 right-0 z-[200] pointer-events-auto"
                      style={{ 
                        top: 'calc(64px)',
                        display: 'block',
                        paddingTop: '0',
                      }}
                      onMouseEnter={() => setActiveDropdown('platform')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div 
                          className="py-8 shadow-2xl" 
                          style={{ 
                            background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 5%, #5a2fc7 20%, #3d1f8f 40%, #1a1a1a 100%)',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                            borderBottomLeftRadius: '1.5rem',
                            borderBottomRightRadius: '1.5rem',
                            marginTop: '0'
                          }}
                        >
                          <div className="flex flex-row gap-6 px-4 sm:px-6">
                          {Object.entries(platformMenu).map(([category, items]) => (
                            <div key={category} className="flex flex-col gap-3 flex-1">
                              <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{category}</h3>
                              {items.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  className="group hover:bg-white/10 p-3 rounded-lg transition-all cursor-pointer border border-transparent hover:border-white/20"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                      {getIcon(item.icon)}
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                        {item.name}
                                      </p>
                                      <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
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
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'solutions' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Solutions
                  </button>
                  {activeDropdown === 'solutions' && (
                    <div 
                      className="fixed left-0 right-0 z-[200] pointer-events-auto"
                      style={{ 
                        top: 'calc(64px)',
                        display: 'block',
                        paddingTop: '0',
                      }}
                      onMouseEnter={() => setActiveDropdown('solutions')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div 
                          className="py-8 shadow-2xl" 
                          style={{ 
                            background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 5%, #5a2fc7 20%, #3d1f8f 40%, #1a1a1a 100%)',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                            borderBottomLeftRadius: '1.5rem',
                            borderBottomRightRadius: '1.5rem',
                            marginTop: '0'
                          }}
                        >
                          <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-white/80 mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Solutions</h3>
                            {solutionsMenu.map((item, index) => (
                              <a
                                key={index}
                                href={`/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-3 px-4 rounded hover:bg-white/10 transition-colors group border border-transparent hover:border-white/20"
                              >
                                <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-300 mt-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.description}
                                </p>
                              </a>
                            ))}
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'resources' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Resources
                  </button>
                  {activeDropdown === 'resources' && (
                    <div 
                      className="fixed left-0 right-0 z-[200] pointer-events-auto"
                      style={{ 
                        top: 'calc(64px)',
                        display: 'block',
                        paddingTop: '0',
                      }}
                      onMouseEnter={() => setActiveDropdown('resources')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div 
                          className="py-8 shadow-2xl" 
                          style={{ 
                            background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 5%, #5a2fc7 20%, #3d1f8f 40%, #1a1a1a 100%)',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                            borderBottomLeftRadius: '1.5rem',
                            borderBottomRightRadius: '1.5rem',
                            marginTop: '0'
                          }}
                        >
                          <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-white/80 mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Resources</h3>
                            {resourcesMenu.map((item, index) => (
                              <a
                                key={index}
                                href={`/resources/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block py-3 px-4 rounded hover:bg-white/10 transition-colors group border border-transparent hover:border-white/20"
                              >
                                <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-300 mt-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.description}
                                </p>
                              </a>
                            ))}
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing Dropdown */}
                <div 
                  className="relative pointer-events-auto"
                  onMouseEnter={() => setActiveDropdown('pricing')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    type="button"
                    className={`text-white transition-colors text-sm lg:text-base py-2 ${
                      activeDropdown === 'pricing' ? 'text-[#7440FA] border-b-2 border-[#7440FA]' : 'hover:text-[#7440FA]'
                    }`}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Pricing
                  </button>
                  {activeDropdown === 'pricing' && (
                    <div 
                      className="fixed left-0 right-0 z-[200] pointer-events-auto"
                      style={{ 
                        top: 'calc(64px)',
                        display: 'block',
                        paddingTop: '0',
                      }}
                      onMouseEnter={() => setActiveDropdown('pricing')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div 
                          className="py-8 shadow-2xl" 
                          style={{ 
                            background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 5%, #5a2fc7 20%, #3d1f8f 40%, #1a1a1a 100%)',
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                            borderBottomLeftRadius: '1.5rem',
                            borderBottomRightRadius: '1.5rem',
                            marginTop: '0'
                          }}
                        >
                          <div className="flex flex-row gap-8 px-4 sm:px-6">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-white/80 mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Pricing</h3>
                            {pricingMenu.map((item, index) => (
                              <a
                                key={index}
                                href={item.href}
                                className="block py-3 px-4 rounded hover:bg-white/10 transition-colors group border border-transparent hover:border-white/20"
                              >
                                <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                  {item.name}
                                </p>
                              </a>
                            ))}
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
                className="lg:hidden text-white p-2"
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
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="fixed top-20 left-0 right-0 z-[99] mx-4 mt-2 shadow-lg" 
          style={{ 
            background: 'linear-gradient(to bottom, #000000, #7440FA)',
            borderRadius: '9999px',
            borderTopLeftRadius: '9999px',
            borderTopRightRadius: '9999px',
            borderBottomLeftRadius: '9999px',
            borderBottomRightRadius: '9999px'
          }}
        >
          <nav className="pb-4 px-4">
            <div className="flex flex-col gap-4 pt-4">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'platform-mobile' ? null : 'platform-mobile')}
                className="text-white text-left py-2 flex justify-between items-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Platform
                <span>{activeDropdown === 'platform-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'platform-mobile' && (
                <div className="pl-4 space-y-2">
                  {Object.entries(platformMenu).map(([category, items]) => (
                    <div key={category}>
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-300 hover:text-white"
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
                className="text-white text-left py-2 flex justify-between items-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Solutions
                <span>{activeDropdown === 'solutions-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'solutions-mobile' && (
                <div className="pl-4 space-y-2">
                  {solutionsMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2 text-gray-300 hover:text-white"
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
                className="text-white text-left py-2 flex justify-between items-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Resources
                <span>{activeDropdown === 'resources-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="pl-4 space-y-2">
                  {resourcesMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2 text-gray-300 hover:text-white"
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
                className="text-white text-left py-2 flex justify-between items-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Pricing
                <span>{activeDropdown === 'pricing-mobile' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'pricing-mobile' && (
                <div className="pl-4 space-y-2">
                  {pricingMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2 text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
                <a 
                  href="/login" 
                  className="text-white py-2"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <a 
                  href="/contact" 
                  className="px-4 py-2 bg-gray-300 text-gray-900 text-center font-semibold"
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
                  className="px-4 py-2 bg-gray-900 text-white text-center font-semibold"
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
