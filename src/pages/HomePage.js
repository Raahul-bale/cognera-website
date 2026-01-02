import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import ValueProposition from '@/components/sections/ValueProposition'

export default function HomePage() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'transparent', zIndex: 10 }}>
      <div className="container mx-auto relative z-10">
        {/* Hero Section */}
        <Hero 
          title="Unlock Digital Productivity with Cognera Data Labs"
          subtitle="Transform your workflow with advanced analytics and real-time insights that drive meaningful productivity gains."
        />
        
        {/* Problem Section */}
        <div className="py-4 sm:py-6">
          <ProblemSection />
        </div>
        
        {/* Solution Section */}
        <div className="py-4 sm:py-6">
          <SolutionSection />
        </div>
        
        {/* Feature Grid */}
        <div className="py-4 sm:py-6">
          <FeatureGrid />
        </div>
        
        {/* How It Works */}
        <div className="py-4 sm:py-6">
          <HowItWorks />
        </div>
        
        {/* Value Proposition */}
        <div className="py-4 sm:py-6">
          <ValueProposition 
            title="The Three-Layered Approach"
            items={[
              '1. Data Foundation: We capture precise time and access logs.',
              '2. Insights Engine: We calculate Flow State Duration and Distraction Scores.',
              '3. Action Framework: We enable real-time coaching and workflow optimization.'
            ]}
          />
        </div>
        

      </div>
    </div>
  )
}
