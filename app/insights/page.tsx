'use client'

import { AnimatedCode } from '@/components/ui/AnimatedCode'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp, Users, BookOpen, Download, Share2, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'


const insights = [
  {
    id: 1,
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    excerpt: 'Discover how predictive analytics can help your organization anticipate market trends and make proactive decisions.',
    date: 'Nov 15, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: '📊'
  },
  {
    id: 2,
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    excerpt: 'Navigate the complexities of IFRS 17 implementation with our expert insights and best practices.',
    date: 'Nov 12, 2024',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    excerpt: 'Transform your organization with a strategic approach to data management and analytics.',
    date: 'Nov 10, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: '🎯'
  },
  {
    id: 4,
    title: 'Credit Risk Assessment in Uncertain Times',
    category: 'Credit Rating',
    excerpt: 'Comprehensive strategies for evaluating credit risk in volatile economic conditions.',
    date: 'Nov 8, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: '⭐'
  },
  {
    id: 5,
    title: 'AI-Powered Risk Management Solutions',
    category: 'Technology',
    excerpt: 'Explore how artificial intelligence is revolutionizing risk management across industries.',
    date: 'Nov 5, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: '🤖'
  },
  {
    id: 6,
    title: 'ESG Reporting: Best Practices and Frameworks',
    category: 'Sustainability',
    excerpt: 'A comprehensive guide to environmental, social, and governance reporting standards.',
    date: 'Nov 2, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: '🌱'
  }
]

const categories = ['All', 'Analytics', 'Actuarial', 'Business Intelligence', 'Credit Rating', 'Technology', 'Sustainability']



export default function InsightsPage() {
  const [isClient, setIsClient] = useState(false)
  const [randomPositions] = useState(() =>
    [...Array(12)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Insights with Data Analytics Focus */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10">
        {/* Dynamic Background with Data Visualization Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          
          {/* Animated data grid lines */}
          <motion.svg 
            className="absolute inset-0 w-full h-full opacity-10"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-insights" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-insights)" />
          </motion.svg>

          {/* Floating Data Points Animation */}
          {isClient && randomPositions.map((pos, i) => (
            <motion.div
              key={`data-point-${i}`}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            />
          ))}

          {/* Glowing accent orbs */}
          <motion.div
            className="absolute top-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>
<AnimatedCode/>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
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
              <h1 className="text-4xl  font-bold text-white mb-6 leading-tight">
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
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Explore our latest research, case studies, and industry insights on advanced analytics, actuarial science, and data-driven decision making.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
            >
              <motion.a
                href="#insights-grid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Read Our Articles
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/50 text-blue-300 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
              >
                Contact for Consultation
              </motion.a>
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
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border border-blue-500/30 rounded-full flex justify-center items-center"
            >
              <div className="w-1 h-2 bg-blue-500 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <div className="py-10 bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6 opacity-80"
            >
              <BookOpen className="w-7 h-7 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Latest <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Explore our most popular insights and in-depth analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group cursor-pointer relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  className={`absolute -inset-2 bg-gradient-to-br ${insight.gradient} rounded-2xl blur-2xl opacity-30`}
                />

                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={`inline-block px-4 py-1.5 bg-gradient-to-r ${insight.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                        >
                          {insight.category}
                        </motion.span>
                      </div>
                 
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>

                    {/* Divider */}
                    <motion.div
                      animate={{
                        width: ["0%", "100%", "0%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-0.5 bg-gradient-to-r from-primary-500 to-accent-500  rounded-full my-4"
                    />
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-4 text-xs text-secondary-500 dark:text-secondary-400">
                        <motion.div
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-1"
                        >
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{insight.date}</span>
                        </motion.div>
                     
                      </div>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="inline-flex items-center text-primary-500 font-bold text-sm"
                      >
                        Read <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

     
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
          <div className="relative p-8 md:p-12 text-center text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xs md:text-sm opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights, case studies, and industry updates delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}
