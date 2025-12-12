'use client'

export default function Button({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  className = '',
  ...props 
}) {
  const baseClasses = 'font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg hover:shadow-lg'
  
  const variantClasses = {
    primary: 'cta-primary-button text-white',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#080707]',
    link: 'text-white font-medium transition-colors hover:text-[#7440FA] underline text-sm sm:text-base'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
