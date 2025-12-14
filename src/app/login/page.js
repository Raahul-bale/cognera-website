import { Suspense } from 'react'
import LoginPage from '@/pages/LoginPage'

function LoginPageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  )
}

export default function Login() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <LoginPage />
    </Suspense>
  )
}

