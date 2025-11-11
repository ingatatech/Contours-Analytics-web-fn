'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Moon, Sun, BarChart3, Shield, Database, TrendingUp } from 'lucide-react'

const serviceIcons = {
  'Data Analytics': BarChart3,
  'Actuarial Services': Shield,
  'Business Intelligence': Database,
  'Credit Rating': TrendingUp
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { 
        name: 'Data Analytics', 
        href: '/services?service=data-analytics',
        description: 'Transform data into strategic insights'
      },
      { 
        name: 'Actuarial Services', 
        href: '/services?service=actuarial',
        description: 'Quantitative expertise and risk assessment'
      },
      { 
        name: 'Business Intelligence', 
        href: '/services?service=business-intelligence',
        description: 'Data-driven ecosystems and BI solutions'
      },
      { 
        name: 'Credit Rating', 
        href: '/services?service=credit-rating',
        description: 'Comprehensive credit evaluation services'
      },
    ]
  },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-secondary-200/20 dark:border-secondary-800/20'
          : 'bg-transparent'
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
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Enhanced Submenu with Icons */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-secondary-900 rounded-2xl shadow-2xl border border-secondary-200 dark:border-secondary-700 py-2 overflow-hidden"
                    >
                      {item.submenu.map((subItem, idx) => {
                        const Icon = serviceIcons[subItem.name as keyof typeof serviceIcons]
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              {Icon && (
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-secondary-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-secondary-600 dark:text-secondary-400 mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Dark Mode Toggle */}
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
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
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                    onClick={() => !item.submenu && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => {
                        const Icon = serviceIcons[subItem.name as keyof typeof serviceIcons]
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {Icon && (
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                            )}
                            <span>{subItem.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}