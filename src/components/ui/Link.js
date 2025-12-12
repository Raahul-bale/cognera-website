export default function Link({ 
  children, 
  href, 
  className = '',
  ...props 
}) {
  const defaultClasses = 'text-white transition-colors hover:text-[#7440FA]'
  
  return (
    <a 
      href={href} 
      className={`${defaultClasses} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}




