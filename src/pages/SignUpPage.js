'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthCard from '@/components/ui/AuthCard'
import SocialAuth from '@/components/sections/SocialAuth'
import Input from '@/components/ui/Input'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'
import Link from '@/components/ui/Link'
import { validatePassword, validateEmail } from '@/lib/auth-client'

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [passwordErrors, setPasswordErrors] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Validate password in real-time
    if (name === 'password' && value) {
      const validation = validatePassword(value)
      setPasswordErrors(validation.errors)
    } else if (name === 'password' && !value) {
      setPasswordErrors([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)

    // Validate form
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else {
      const passwordValidation = validatePassword(formData.password)
      if (!passwordValidation.isValid) {
        newErrors.password = passwordValidation.errors.join(', ')
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms & Conditions'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors({ submit: data.error || 'Registration failed' })
        setIsLoading(false)
        return
      }

      // Registration successful, redirect to login
      window.location.href = '/login?registered=true'
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' })
      setIsLoading(false)
    }
  }

  return (
    <AuthCard 
      title="Create Account" 
      subtitle="Sign up to get started"
    >
      <form onSubmit={handleSubmit}>
        <SocialAuth />
        
        {errors.submit && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{errors.submit}</p>
          </div>
        )}

        <Input
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1 mb-2">{errors.fullName}</p>
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
        
        <div>
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
          {passwordErrors.length > 0 && !errors.password && (
            <div className="mt-2 text-xs">
              <p className="text-gray-400 mb-1">Password requirements:</p>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div>
          <Checkbox
            name="agreeToTerms"
            label="I agree to the Terms & Conditions"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          {errors.agreeToTerms && (
            <p className="text-red-400 text-xs mt-1">{errors.agreeToTerms}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full mb-4"
          style={{ backgroundColor: '#7440FA' }}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#7440FA] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}


