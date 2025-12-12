'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import AuthCard from '@/components/ui/AuthCard'
import SocialAuth from '@/components/sections/SocialAuth'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Link from '@/components/ui/Link'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setSuccessMessage('Registration successful! Please log in.')
    }
    if (searchParams.get('error') === 'oauth_failed') {
      setErrors({ submit: 'OAuth authentication failed. Please try again.' })
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setSuccessMessage('')
    setIsLoading(true)

    // Validate form
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors({ submit: data.error || 'Login failed' })
        setIsLoading(false)
        return
      }

      // Login successful, redirect to home
      window.location.href = '/'
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' })
      setIsLoading(false)
    }
  }

  return (
    <AuthCard 
      title="Sign In" 
      subtitle="Welcome back to Cognera"
    >
      <form onSubmit={handleSubmit}>
        <SocialAuth />
        
        {successMessage && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded-lg">
            <p className="text-green-400 text-sm">{successMessage}</p>
          </div>
        )}

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{errors.submit}</p>
          </div>
        )}
        
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1 mb-2">{errors.email}</p>
        )}
        
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          showPasswordToggle={true}
          required
        />
        {errors.password && (
          <p className="text-red-400 text-xs mt-1 mb-2">{errors.password}</p>
        )}
        
        <div className="flex items-center justify-between mb-6">
          <Link href="/forgot-password" className="text-sm text-[#7440FA] hover:underline">
            Forgot Password?
          </Link>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full mb-4"
          style={{ backgroundColor: '#7440FA' }}
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          {`Don't have an account?`}{' '}
          <Link href="/signup" className="text-[#7440FA] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}


