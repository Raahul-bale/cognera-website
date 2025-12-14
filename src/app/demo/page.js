import DemoForm from '@/components/sections/DemoForm'

export default function DemoPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 font-bold text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Request a Demo
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 text-center" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            See how Cognera Data Labs can transform your workflow with advanced analytics and real-time insights.
          </p>
          <DemoForm />
        </div>
      </div>
    </div>
  )
}

