'use client'

import { useState } from 'react'

export default function Input({ 
  label, 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange,
  showPasswordToggle = false,
  className = '',
  ...props 
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type

  const isLight = className.includes('light-input')
  
  return (
    <div className={`mb-4 ${className.replace('light-input', '').trim()}`}>
      {label && (
        <label className={`block text-sm font-bold mb-2 text-left ${isLight ? 'text-gray-800' : 'text-white'}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 rounded-lg border ${
            isLight 
              ? `bg-white ${isFocused ? 'border-[#7440FA]' : 'border-gray-300'} text-gray-800 placeholder-gray-400`
              : `bg-[#1a1a1a] ${isFocused ? 'border-[#7440FA]' : 'border-gray-700'} text-white placeholder-gray-500`
          } focus:outline-none focus:ring-2 focus:ring-[#7440FA] transition-all`}
          {...props}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm hover:text-[#7440FA] transition-colors ${isLight ? 'text-gray-600' : 'text-white'}`}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        )}
      </div>
    </div>
  )
}

