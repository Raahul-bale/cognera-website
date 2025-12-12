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
        className={`w-4 h-4 rounded text-[#7440FA] focus:ring-[#7440FA] focus:ring-2 cursor-pointer ${
          isLight 
            ? 'border-gray-300 bg-white' 
            : 'border-gray-700 bg-[#1a1a1a]'
        }`}
        {...props}
      />
      {label && (
        <label htmlFor={name} className={`ml-2 text-sm cursor-pointer ${
          isLight ? 'text-gray-800' : 'text-white'
        }`}>
          {label}
        </label>
      )}
    </div>
  )
}

