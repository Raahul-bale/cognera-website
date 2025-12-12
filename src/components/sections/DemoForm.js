'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    phoneNumber: '',
    companySize: '',
    agreeToTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleCompanySizeClick = (size) => {
    setFormData(prev => ({
      ...prev,
      companySize: size
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Demo form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section 
      className="demo-form-section py-6 sm:py-8 pointer-events-none relative w-full z-10"
      style={{
        borderTop: '2px solid rgba(116, 64, 250, 0.3)',
        borderBottom: '2px solid rgba(116, 64, 250, 0.3)',
        backgroundColor: 'transparent'
      }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="text-left pointer-events-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Get an in-depth product demo
            </h2>
            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed">
              Want to see how Cognera Data Labs can help your team build better products? Schedule a live demo with our product analytics experts.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#f5f5f0] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-300 pointer-events-auto">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* First Name and Last Name - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First name"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="light-input"
                  required
                />
                <Input
                  label="Last name"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="light-input"
                  required
                />
              </div>

              {/* Company Email and Phone Number - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Company email"
                  type="email"
                  name="companyEmail"
                  placeholder="you@mail.com"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="light-input"
                  required
                />
                <Input
                  label="Phone number"
                  type="tel"
                  name="phoneNumber"
                  placeholder="123-555-555"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="light-input"
                  required
                />
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-gray-800 text-sm font-bold mb-3 text-center">
                  Company size
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {['1-250', '251-1000', '1000+'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleCompanySizeClick(size)}
                      className={`w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                        formData.companySize === size
                          ? 'bg-[#7440FA] text-white'
                          : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-2">
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  By clicking {`"Get in Touch"`} I agree to the{' '}
                  <a href="/terms" className="text-[#7440FA] hover:underline">
                    Terms of Use
                  </a>
                  {' '}and the{' '}
                  <a href="/privacy" className="text-[#7440FA] hover:underline">
                    Privacy Statement
                  </a>
                  .
                </p>
                <Checkbox
                  name="agreeToTerms"
                  label="I agree to the Terms & Conditions"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  isLight={true}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                className="w-full mt-4 sm:mt-6"
                style={{ backgroundColor: '#7440FA' }}
              >
                Get in Touch
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

