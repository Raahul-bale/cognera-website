'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#080707' }}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[#7440FA] text-white rounded-lg hover:bg-[#3399CC] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}






