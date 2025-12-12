'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    workEmail: '',
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
    country: '',
    emailUpdates: false,
    consentToPrivacy: false
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)

    // Validate form
    const newErrors = {}

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Invalid email format'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    }

    if (!formData.country) {
      newErrors.country = 'Country is required'
    }

    if (!formData.consentToPrivacy) {
      newErrors.consentToPrivacy = 'You must consent to the Privacy Policy'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      // Here you would send the form data to your API
      console.log('Contact form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success message or redirect
      alert('Thank you! We will contact you soon.')
      setFormData({
        workEmail: '',
        firstName: '',
        lastName: '',
        company: '',
        phoneNumber: '',
        country: '',
        emailUpdates: false,
        consentToPrivacy: false
      })
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
    'China',
    'Brazil',
    'Mexico',
    'Other'
  ]

  const benefits = [
    {
      title: 'How do your digital products drive your business?',
      description: 'Find out how with data you can trust and insights you need to take action and drive growth.'
    },
    {
      title: 'Answer More Questions Faster',
      description: 'Answer what happened, why, and which actions to take next. Deeply explore behavioral data across any chart, persona, or cohort.'
    },
    {
      title: 'Drive Results & Revenue',
      description: 'Define, measure, and optimize key product metrics around acquisition, retention, monetization, and more.'
    },
    {
      title: 'Trust Your Data',
      description: 'Best-in-class data governance, security, and compliance standards keep your data trustworthy and secure.'
    }
  ]

  const trustedCompanies = [
    { name: 'adidas', logo: '🏃' },
    { name: 'Blue Apron', logo: '🍽️' },
    { name: 'Capital One', logo: '💳' },
    { name: 'clay', logo: '🧱' },
    { name: 'docomo', logo: '📱' },
    { name: 'Atlassian', logo: '🔧' }
  ]

  return (
    <div className="min-h-screen py-8 sm:py-12" style={{ backgroundColor: '#080707' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Talk to a product analytics expert
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Want to see a custom demo or get help finding the right plan? {`We'd love to chat.`}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.submit && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}

              <Input
                label="Work Email"
                type="email"
                name="workEmail"
                placeholder="Work Email"
                value={formData.workEmail}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.workEmail && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.workEmail}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="light-input"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 mb-2">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="light-input"
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 mb-2">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <Input
                label="Company"
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.company}</p>
              )}

              <Input
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="light-input"
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1 mb-2">{errors.phoneNumber}</p>
              )}

              <div>
                <label className="block text-sm font-bold mb-2 text-left text-gray-800">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7440FA] focus:border-[#7440FA] transition-all"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1 mb-2">{errors.country}</p>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <Checkbox
                  name="emailUpdates"
                  label="I'd like to receive emails about news & updates from Cognera Data Labs."
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  isLight={true}
                />

                <div>
                  <Checkbox
                    name="consentToPrivacy"
                    label={
                      <>
                        I consent to Cognera Data Labs processing my personal data in accordance with our{' '}
                        <a href="/privacy" className="text-[#7440FA] hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </>
                    }
                    checked={formData.consentToPrivacy}
                    onChange={handleChange}
                    isLight={true}
                    required
                  />
                  {errors.consentToPrivacy && (
                    <p className="text-red-500 text-xs mt-1">{errors.consentToPrivacy}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full mt-6"
                style={{ backgroundColor: '#3399CC' }}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Contact Us'}
              </Button>
            </form>
          </div>

          {/* Right Section - Marketing Content */}
          <div className="flex flex-col justify-between text-white">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
                Unlock the power of your products
              </h2>

              <div className="space-y-6 sm:space-y-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index}>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">
                {`Trusted by the world's leading companies`}
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                {trustedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl mb-2">{company.logo}</div>
                      <p className="text-xs sm:text-sm text-gray-300 font-medium">
                        {company.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  Looking for something else?
                </p>
                <a
                  href="/contact/general"
                  className="text-[#3399CC] hover:text-[#7440FA] transition-colors text-sm sm:text-base font-medium"
                >
                  General company inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




