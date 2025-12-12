'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#080707' }}>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">404</h2>
        <p className="text-xl text-white mb-6">Page Not Found</p>
        <a href="/" className="text-[#7440FA] hover:underline">
          Go back home
        </a>
      </div>
    </div>
  )
}
