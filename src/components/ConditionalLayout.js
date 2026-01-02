'use client'

import { usePathname } from 'next/navigation'
import Layout from './Layout'

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup'
  
  if (isAuthPage) {
    return <>{children}</>
  }
  
  return <Layout>{children}</Layout>
}







