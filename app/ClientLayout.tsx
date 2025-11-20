'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ChatWidgetEnhanced from '@/components/ui/ChatWidgetEnhanced'
import { Suspense, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navigation />}
      <Suspense fallback={<div className="h-screen bg-white dark:bg-slate-900" />}>
        <main>{children}</main>
      </Suspense>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <ChatWidgetEnhanced />}
    </>
  )
}
