'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ChatWidgetEnhanced from '@/components/ui/ChatWidgetEnhanced'
import { Suspense, ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Check if user is admin by checking localStorage and current route
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      const isAdminRoute = pathname?.startsWith('/admin')
      
      // Set isAdmin to true if on admin route and has token
      setIsAdmin(isAdminRoute && !!token)
    }
  }, [pathname])

  return (
    <>
      {!isAdmin && <Navigation />}
      <Suspense fallback={<div className="h-screen bg-white dark:bg-slate-900" />}>
        <main>{children}</main>
      </Suspense>
      {!isAdmin && <Footer />}
      {!isAdmin && <ChatWidgetEnhanced />}
    </>
  )
}
