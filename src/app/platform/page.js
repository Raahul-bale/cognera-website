'use client'

import { useState } from 'react'

export default function PlatformPage() {
  const getIcon = (iconName) => {
    const icons = {
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
      'cognera-mcp': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-2xl p-8 sm:p-12 shadow-2xl"
            style={{ 
              background: 'linear-gradient(to bottom, #7440FA 0%, #7440FA 3%, #5a2fc7 15%, #3d1f8f 35%, #1a1a1a 100%)',
            }}
          >
            <div className="flex flex-row gap-6 sm:gap-8">
              {Object.entries(platformMenu).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-3 flex-1">
                  <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {category}
                  </h3>
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
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                          {getIcon(item.icon)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-sm group-hover:text-[#7440FA] transition-colors mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            {item.name}
                          </p>
                          <p className="text-xs text-white/70 group-hover:text-white/90 leading-relaxed transition-colors" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
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
    </div>
  )
}

