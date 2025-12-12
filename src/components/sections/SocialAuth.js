'use client'

import SocialButton from '@/components/ui/SocialButton'

export default function SocialAuth({ onGoogleClick, onMicrosoftClick }) {
  const handleGoogleAuth = () => {
    if (onGoogleClick) {
      onGoogleClick()
    } else {
      window.location.href = '/api/auth/oauth/google'
    }
  }

  const handleMicrosoftAuth = () => {
    if (onMicrosoftClick) {
      onMicrosoftClick()
    } else {
      window.location.href = '/api/auth/oauth/microsoft'
    }
  }

  return (
    <div className="space-y-3 mb-4 sm:mb-6">
      <SocialButton 
        provider="google" 
        onClick={handleGoogleAuth}
      />
      <div className="relative my-3 sm:my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#1a1a1a] text-gray-400">OR</span>
        </div>
      </div>
      <SocialButton 
        provider="microsoft" 
        onClick={handleMicrosoftAuth}
      />
    </div>
  )
}
