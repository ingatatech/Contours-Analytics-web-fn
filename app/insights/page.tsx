'use client'

import { AnimatedCode } from '@/components/ui/AnimatedCode'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight,  BookOpen,  Filter, ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Image
 from 'next/image'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { subscribeNewsletter } from '@/lib/api'
interface Insight {
  id: string
  title: string
  content: string
  category: string
  createdAt: string
  image: string
}

const insights: Insight[] = [
  {
    id: '1',
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    content: 'Discover how predictive analytics can help your organization anticipate market trends and make proactive decisions.',
    createdAt: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: '2',
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    content: 'Navigate the complexities of IFRS 17 implementation with our expert insights and best practices.',
    createdAt: '2024-11-12',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: '3',
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    content: 'Transform your organization with a strategic approach to data management and analytics.',
    createdAt: '2024-11-10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: '4',
    title: 'Credit Risk Assessment in Uncertain Times',
    category: 'Credit Rating',
    content: 'Comprehensive strategies for evaluating credit risk in volatile economic conditions.',
    createdAt: '2024-11-08',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop'
  },
  {
    id: '5',
    title: 'AI-Powered Risk Management Solutions',
    category: 'Technology',
    content: 'Explore how artificial intelligence is revolutionizing risk management across categories.',
    createdAt: '2024-11-05',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: '6',
    title: 'ESG Reporting: Best Practices and Frameworks',
    category: 'Sustainability',
    content: 'A comprehensive guide to environmental, social, and governance reporting standards.',
    createdAt: '2024-11-02',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  }
]




export default function InsightsPage() {
  const [isClient, setIsClient] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
  // const [insights, setInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [subscribeMsg, setSubscribeMsg] = useState<string | null>(null)
  const [categories, setcategories] = useState<[]>([])
  const [categoryFilter, setcategoryFilter] = useState("All categories")
  const [searchTerm, setSearchTerm] = useState("")


   const filteredInsights = insights.filter((insight) => {
    const matchesSearch =
      insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      insight.content.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })
  useEffect(() => {
    setIsClient(true)
  }, [])
  // Custom Select Component
  const CustomSelect = ({ 
    value, 
    onValueChange, 
    options, 
    placeholder, 
    className = "" 
  }: {
    value: string;
    onValueChange: (value: string) => void;
    options: { value: string}[];
    placeholder: string;
    className?: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (!target.closest('.custom-select')) {
          setIsOpen(false)
        }
      }
      
      if (isOpen) {
        document.addEventListener('click', handleClickOutside)
      }
      
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [isOpen])
    
    return (
      <div className={`relative custom-select ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        >
          <span className={value === placeholder ? "text-gray-500" : "text-gray-900"}>
            {options.find(opt => opt.value === value)?.value || placeholder}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.length === 0 ? (
              <div className="px-4 py-2 text-gray-500 text-sm">No options available</div>
            ) : (
              options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onValueChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors ${
                    value === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                  }`}
                >
                  {option.value}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Insights with Data Analytics Focus */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8">
             <AnimatedBackground />
     <AnimatedCode/>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left mb-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Thought Leadership & Insights</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl  font-bold text-white mb-3 leading-tight">
                <span className="mb-2">Latest</span>{" "}
                <motion.span
                  className=" bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  Insights & Research
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-xl text-white leading-relaxed max-w-6xl">
                Explore our latest research, extensive case studies, and rich category insights to understand how advanced analytics, actuarial science, and data-driven decision-making are being applied to solve complex challenges, optimize operations, and support strategic planning across various sectors.
              </p>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400">Browse our insights</span>
         
          </div>
        </motion.div>
      </section>

       {/* Filters and Search */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Toggle - Mobile */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:hidden"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Filter by category:</span>
                  <CustomSelect
                    value={categoryFilter}
                    onValueChange={setcategoryFilter}
                    options={[
                      { value: "All categories",},
                      ...categories.map(category => ({ 
                        value: category 
                      }))
                    ]}
                    placeholder="All categories"
                    className="min-w-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by category:
                  </label>
                  <CustomSelect
                    value={categoryFilter}
                    onValueChange={setcategoryFilter}
                    options={[
                      { value: "All categories",},
                      ...categories.map(category => ({ 
                        value: category
                      }))
                    ]}
                    placeholder="All categories"
                  />
                </div>
              </div>
            )}

            {/* Filter Summary */}
            {(searchTerm || categoryFilter !== "All categories") && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {categoryFilter !== "All categories" && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      category: { categoryFilter}
                      <button
                        onClick={() => setcategoryFilter("All categories")}
                        className="ml-1 text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setcategoryFilter("All categories")
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          {!loading && (
            <div className="mb-6 text-sm text-gray-600">
              {filteredInsights.length === insights.length 
                ? `Showing all ${insights.length} insights`
                : `Showing ${filteredInsights.length} of ${insights.length} insights`
              }
            </div>
          )}

          {/* Loading / Error */}
          {loading && (
            <div className="text-center py-12">
              <LoadingSpinner />
            </div>
          )}
          {error && (
            <div className="text-center py-12 text-red-600 bg-red-50 rounded-lg p-4">
              {error}
            </div>
          )}

          {/* Insights Grid */}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight) => {
                return (
                    <Link href={`/insights/detail?id=${insight.id}`}>
                  <article
                    key={insight.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative">
                      <Image
                        src={insight.image || "/placeholder.svg"}
                        alt={insight.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex space-x-2">
                        <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                          {(insight?.category ?? insight?.category ?? "").toString()}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span> {new Date(insight.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        <button  className="text-left w-full">
                          {insight.title}
                        </button>
                      </h3>
                      <div className="flex items-center justify-end">
                        <button
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center space-x-1 group"
                        >
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                  </Link>
                )
              })}
            </div>
          )}

          {filteredInsights.length === 0 && !loading && !error && (
            <div className="text-center py-12 bg-white rounded-lg">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No insights found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || categoryFilter !== "All categories"
                  ? "Try adjusting your search or filter criteria."
                  : "No insights are currently available."}
              </p>
              {(searchTerm || categoryFilter !== "All categories") && (
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setcategoryFilter("All categories")
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
          
        </div>
      </section> 
            {/* Newsletter Signup */}
      <section id="subscribe" className="relative py-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary-500/90 via-primary-500/60 to-white/95"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Insights</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest insights, industry trends, and expert analysis delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={async () => {
                  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setSubscribeMsg("Please enter a valid email")
                    return
                  }
                  try {
                    setSubmitting(true)
                    setSubscribeMsg(null)
                    await subscribeNewsletter(email)
                    setSubscribeMsg("Subscribed successfully!")
                    setEmail("")
                  } catch (e) {
                    setSubscribeMsg("Subscription failed. Please try again.")
                  } finally {
                    setSubmitting(false)
                  }
                }}
                disabled={submitting}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {submitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </div>
            {subscribeMsg && (
              <p className={`mt-3 ${subscribeMsg.includes('successfully') ? 'text-green-100' : 'text-red-100'}`}>
                {subscribeMsg}
              </p>
            )}
            <p className="text-gray-800 text-sm mt-4">
              Join 2,500+ professionals who trust our insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none -mb-3">
          <svg viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-14">
            <path d="M0,40 Q480,80 960,40 T1920,40 V80 H0 Z" fill="#038bca" />
          </svg>
        </div>
      </section>     

      
    </div>
  )
}
