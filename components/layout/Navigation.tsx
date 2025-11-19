'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react'
import api from '@/lib/axios'
import LoadingSpinner from '../ui/LoadingSpinner'


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false)
  const [services, setServices] = useState<any[]>([])
  const [servicesLoading, setServicesLoading] = useState(false)

  const fetchServices = async () => {
    try {
      setServicesLoading(true)
      const res = await api.get('/services/categories')
      setServices(res.data.data || res.data)
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setServicesLoading(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    fetchServices()
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   scrolled
      //     ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-secondary-200/20 dark:border-secondary-800/20'
      //     : 'bg-transparent text-white'
      // }`}
        className={` sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-secondary-200/20 dark:border-secondary-800/20'
        
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center pl-5">
              <Image
                src="/logo.jpeg"
                alt="ONCG"
                width={200}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              <span>Home</span>
            </Link>

            {/* Who we are Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('Who we are')}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
              >
                <span>Who we are</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === 'Who we are' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeSubmenu === 'Who we are' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-secondary-900 rounded-xl shadow-2xl dark:border-secondary-700 py-2 overflow-hidden"
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-secondary-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        About Us
                      </div>
                    </Link>
                    <Link
                      href="/leadership"
                      className="block px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-secondary-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        Leadership
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/approach"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              <span>Approach</span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('Services')}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === 'Services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeSubmenu === 'Services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-secondary-900 rounded-xl shadow-2xl dark:border-secondary-700 py-2 overflow-hidden"
                  >
                    {servicesLoading ? (
                      <div className="flex justify-center py-4">
                        <LoadingSpinner size="sm" />
                      </div>
                    ) : (
                      services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services?service=${service.id}`}
                          className="block px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-secondary-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </div>
                        </Link>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/insights"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              <span>Insights</span>
            </Link>

            <Link
              href="/contact-us"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700"
          >
            <div className="px-4 py-6 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Who we are Mobile */}
              <div>
                <button
                  onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors font-medium text-secondary-700 dark:text-secondary-300"
                >
                  <span>Who we are</span>
                  {mobileWhoWeAreOpen ? (
                    <Minus className="h-5 w-5 text-secondary-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-secondary-500" />
                  )}
                </button>
                <AnimatePresence>
                  {mobileWhoWeAreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 pb-2 space-y-1">
                        <Link
                          href="/about"
                          className="block p-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          About Us
                        </Link>
                        <Link
                          href="/leadership"
                          className="block p-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Leadership
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/approach"
                className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Approach
              </Link>

              {/* Services Mobile */}
              <div>
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === 'Services' ? null : 'Services')}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors font-medium text-secondary-700 dark:text-secondary-300"
                >
                  <span>Services</span>
                  {activeSubmenu === 'Services' ? (
                    <Minus className="h-5 w-5 text-secondary-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-secondary-500" />
                  )}
                </button>
                <AnimatePresence>
                  {activeSubmenu === 'Services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 pb-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services?service=${service.id}`}
                            className="block p-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/insights"
                className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>

              <Link
                href="/contact-us"
                className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}