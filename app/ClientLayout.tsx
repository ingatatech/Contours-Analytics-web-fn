'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ChatWidgetEnhanced from '@/components/ui/ChatWidgetEnhanced'
import { Suspense, ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="h-screen bg-white dark:bg-slate-900" />}>
        <main>{children}</main>
      </Suspense>
      <Footer />
      <ChatWidgetEnhanced />
    </>
  )
}
