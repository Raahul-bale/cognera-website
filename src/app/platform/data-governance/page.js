'use client'

import Button from '@/components/ui/Button'

export default function DataGovernancePage() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'transparent', zIndex: 10 }}>
      <div className="container mx-auto relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16 px-4 sm:px-6 pointer-events-none relative overflow-hidden" style={{ minHeight: '40vh', paddingTop: '8rem', position: 'relative', zIndex: 10 }}>
          <div className="max-w-5xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight font-bold pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Better Digital Experiences Powered by Trusted Data
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 px-2 sm:px-4 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed pointer-events-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Easily integrate with your tech stack, resolve identities across devices, and control customer and product data.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pointer-events-auto px-2">
              <Button href="/demo" variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
                Get Started
              </Button>
              <Button href="/contact" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Easy to access
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Keep trusted data in the right hands with governance and compliance controls that make transparency effortless.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Simple to get started
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Put your team in position to uncover customer insights, segment customers, and make faster, smarter decisions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Seamless to integrate
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Our no-code, open platform connects to all your sources, so you can effortlessly bring data in and out when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Cut through the complexity and easily connect your data
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Turnkey integrations, cloud apps, data warehouses, SDKs, and APIs—everything you need to import and export data to drive better decisions.
              </p>
              <div className="mt-6">
                <Button href="/platform/integrations" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]">
                  View integrations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* RBAC */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Limit data risk, expand productivity
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  RBAC offers granular control over who can create events, edit taxonomies, download cohorts, launch guides, and watch session replays. Users get exactly the permissions their role requires while everything else stays buttoned up tight.
                </p>
              </div>

              {/* Data Access Controls */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Lock down your data, unlock your insights
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Data security you can trust with the flexibility you need. Cognera&apos;s Data Access Controls empower you to precisely manage who sees what data, ensuring compliance and minimizing risk.
                </p>
                <div className="mt-4">
                  <a href="/platform/security-privacy" className="text-[#7440FA] hover:text-[#A78BFA] transition-colors font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Learn more →
                  </a>
                </div>
              </div>

              {/* Data Mutability */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Data that&apos;s always up to date
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  With Data Mutability your analytics data stays in perfect sync with changes in your data warehouse. Eliminate data drift by ensuring you&apos;re always working from the single source of truth.
                </p>
                <div className="mt-4">
                  <a href="/platform/integrations" className="text-[#7440FA] hover:text-[#A78BFA] transition-colors font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Learn more →
                  </a>
                </div>
              </div>

              {/* AI-Driven Workflows */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Take the guesswork out of data governance
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  AI-driven workflows automatically surface data quality issues and recommend fixes. Filters, data merging, and schema controls make it easy to establish and maintain trust.
                </p>
              </div>

              {/* Customer Profiles */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  A new dimension of customer intelligence
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  See your customers in a whole new light. Profiles enable you to join customer profile data from Snowflake or Databricks with existing data in Cognera for a deeper level of insight.
                </p>
                <div className="mt-4">
                  <a href="/platform/product-behavior-analytics" className="text-[#7440FA] hover:text-[#A78BFA] transition-colors font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Explore now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Unlock the power of your data without compromise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Foster privacy that&apos;s built on trust
                </h3>
                <p className="text-base text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Rely on our platform to protect your data and meet your privacy needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Make compliance easy and seamless
                </h3>
                <p className="text-base text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Keep your business flexible to stay in compliance with new privacy laws.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Control your data with the right tools
                </h3>
                <p className="text-base text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Stay in complete control of how data is used across the platform.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Minimize risk by design
                </h3>
                <p className="text-base text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Safeguard your data with a privacy program that is proactive and based on privacy-by-design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Make better decisions with trusted data
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Give data and engineering teams a central hub to plan, transform, and oversee their event data without writing code. Empower the business to make data-driven decisions with high-quality data.
              </p>
            </div>
          </div>
        </section>

        {/* Business Outcomes Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Unleash data-driven digital experiences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Optimize acquisition
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Get 360-degree visibility into user behavior to target new audiences and accelerate growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Drive monetization
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Take action on trusted insights to deliver what your customers want and increase conversions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 flex items-center justify-center text-[#7440FA] border border-[#7440FA]/30 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Improve retention
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Unlock insights across your entire data ecosystem to build lifelong customers and boost their lifetime value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse-Native Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-8 sm:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Harness the power of the data cloud with Warehouse-native Cognera
                </h2>
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Empower teams with easy, self-service product analytics built on top of a fast, flexible data cloud. Seamlessly access insights and run queries directly in Cognera or Snowflake.
                </p>
                <Button href="/platform/integrations" variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]">
                  Explore now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Why do engineers, analysts, and data scientists love Cognera?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <p className="text-base sm:text-lg text-white/90 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  &quot;Amplitude acts as an intuitive and genuine tool for us to perform queries and efficiently create charts and dashboards, apart from directly querying the data warehouse.&quot;
                </p>
                <p className="text-sm text-white/70 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  — IBM
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <p className="text-base sm:text-lg text-white/90 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  &quot;Each member of our team can discover insights about user behavior without database query skills. We can bootstrap analytics expertise without developing an internal data warehouse and query platform.&quot;
                </p>
                <p className="text-sm text-white/70 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  — Prisma Labs
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-white/10">
                <p className="text-base sm:text-lg text-white/90 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  &quot;Ultimately, it nurtures the understanding of how each part of the company contributes to tangible metrics and amplifies data-driven decisions.&quot;
                </p>
                <p className="text-sm text-white/70 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  — Landr
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mb-16 sm:mb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#7440FA]/20 to-[#7440FA]/10 rounded-xl p-8 sm:p-12 border border-[#7440FA]/30 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Ready to get started?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Start building better digital experiences with trusted data governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button href="/demo" variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
                  Get Started
                </Button>
                <Button href="/contact" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[44px]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

