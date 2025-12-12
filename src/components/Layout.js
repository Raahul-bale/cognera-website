import Header from './layout/Header'
import Footer from './layout/Footer'
import MatrixBackground from './ui/MatrixBackground'
import PromotionalCard from './sections/PromotionalCard'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: '#080707' }}>
      <MatrixBackground />
      {/* Fixed Hero Animation - Center of Viewport */}
      <div id="hero-shape">
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        <div className="pointer-events-auto relative z-[100]">
          <Header />
        </div>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-auto mt-20 sm:mt-24 relative z-10">
          {children}
        </main>
        <div className="pointer-events-auto relative z-10 flex flex-col">
          <PromotionalCard />
          <Footer />
        </div>
      </div>
    </div>
  )
}
