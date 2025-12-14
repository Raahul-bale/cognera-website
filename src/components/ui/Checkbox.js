export default function Checkbox({ 
  label, 
  checked, 
  onChange, 
  name,
  className = '',
  isLight = false,
  ...props 
}) {
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={`w-5 h-5 sm:w-4 sm:h-4 rounded text-[#7440FA] focus:ring-[#7440FA] focus:ring-2 cursor-pointer min-w-[20px] min-h-[20px] ${
          isLight 
            ? 'border-gray-300 bg-white' 
            : 'border-gray-700 bg-[#1a1a1a]'
        }`}
        {...props}
      />
      {label && (
        <label htmlFor={name} className={`ml-2 sm:ml-2 text-sm sm:text-sm cursor-pointer min-h-[44px] flex items-center ${
          isLight ? 'text-gray-800' : 'text-white'
        }`}>
          {label}
        </label>
      )}
    </div>
  )
}

