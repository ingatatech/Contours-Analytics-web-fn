'use client'

import { ParticleField } from '@/components/ui/ParticleField'
import { motion,  AnimatePresence } from 'framer-motion'
import { ArrowRight,  Star, TrendingUp, Database, Brain, Users, Globe, Award, CheckCircle, Eye, Sparkles, Zap, MousePointer2, Play, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'



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

const partners = [
  { name: 'CloudTech Solutions', category: 'Technology' },
  { name: 'DataViz Pro', category: 'Analytics' },
  { name: 'SecureNet', category: 'Security' },
  { name: 'InsightAI', category: 'AI/ML' },
  { name: 'FinanceCore', category: 'Financial' },
  { name: 'DataStream', category: 'Integration' }
]




function LiveKPIWidget({ label, targetValue, icon: Icon, gradient }: { label: string, targetValue: string, icon: any, gradient: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showRipple, setShowRipple] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, y: -8 }}
      onHoverStart={() => {
        setIsHovered(true)
        setShowRipple(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        setTimeout(() => setShowRipple(false), 600)
      }}
      className="relative group cursor-pointer"
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-50`}
      />

      <div className="relative rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300 p-6 overflow-hidden group-hover:shadow-2xl">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
          }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5`}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Ripple effect */}
        <AnimatePresence>
          {showRipple && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl`}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0
            }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all`}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Value */}
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              opacity: isHovered ? 1 : 0.9
            }}
            className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary-900 dark:from-white to-secondary-700 dark:to-secondary-200 bg-clip-text text-transparent mb-2"
          >
            {targetValue}
          </motion.div>

          {/* Label */}
          <div className="relative text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-4">
            {label}
          </div>

          {/* Trend indicator */}
          <motion.div
            animate={{
              width: isHovered ? "100%" : "0%"
            }}
            transition={{ duration: 0.5 }}
            className={`h-1 bg-gradient-to-r ${gradient} rounded-full`}
          />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${gradient} rounded-full blur-sm`}
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${gradient} rounded-full blur-sm`}
        />
      </div>
    </motion.div>
  )
}

function InteractiveInsightCard({ insight, index }: { insight: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -16, scale: 1.04 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
        className={`absolute -inset-2 bg-gradient-to-r ${insight.gradient} rounded-2xl blur-xl opacity-40 -z-10`}
      />

      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
        {/* Animated background gradient */}
        <motion.div
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%"
          }}
          transition={{ duration: 5, repeat: isHovered ? Infinity : 0, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundSize: "200% 200%" }}
        />
        
        {/* Header */}
        <div className="relative p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            {/* Category badge */}
            <motion.span 
              whileHover={{ scale: 1.12 }}
              className={`inline-block px-4 py-1.5 bg-gradient-to-r ${insight.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
            >
              {insight.category}
            </motion.span>

          
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {insight.title}
          </h3>

          {/* Divider */}
          <motion.div
            animate={{
              width: isHovered ? "100%" : "0%"
            }}
            transition={{ duration: 0.5 }}
            className={`h-0.5 bg-gradient-to-r ${insight.gradient} rounded-full`}
          />
        </div>

        {/* Footer */}
        <div className="relative px-6 py-4 border-t border-secondary-100/50 dark:border-secondary-700/50 bg-secondary-50/30 dark:bg-secondary-800/30">
          <div className="flex items-center justify-between">
            <motion.span 
              animate={{ opacity: isHovered ? 0.7 : 1 }}
              className="text-xs font-medium text-secondary-600 dark:text-secondary-400"
            >
              {insight.date}
            </motion.span>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="inline-flex items-center text-primary-500 font-bold text-sm hover:text-accent transition-colors gap-1"
            >
              Read More 
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          animate={{
            x: isHovered ? ["0%", "150%"] : "-100%"
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Generate random positions once on mount to avoid hydration mismatch
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
    // Guard against SSR - only run on client side
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <ParticleField />

      <div className="relative z-10">
        {/* Hero Section - Data Science & Analytics Focused */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
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
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </motion.svg>

            {/* Floating Data Points Animation */}
            {isClient && randomPositions.map((pos, i) => (
              <motion.div
                key={`data-point-${i}`}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
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
              className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-40 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 max-w-6xl py-6">
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
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Advanced Analytics & Data Science</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-4xl  font-bold text-white mb-6 leading-tight">
                  <span className="mb-2">Transform Your Data</span>{" "}
                  <motion.span
                    className="bg-gradient-to-r from-cyan-400 via-blue-400 to-primary-600 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    Into Competitive Advantage
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg  text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                We are a leading provider of comprehensive data analytics and actuarial services. With cutting-edge technology and highly skilled professionals, we empower businesses to make informed decisions and mitigate risks effectively.
              </motion.p>

              {/* Key Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              >
                {[
                  { icon: "📊", label: "Advanced Analytics", desc: "Statistical modeling & predictive insights" },
                  { icon: "🔐", label: "Risk Mitigation", desc: "Actuarial expertise across industries" },
                  { icon: "⚡", label: "Actionable Intelligence", desc: "Data-driven decisions for growth" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full  font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500/50 text-white rounded-full  font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Live KPI Widgets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
              >
                <LiveKPIWidget label="Projects Completed" targetValue="500+" icon={TrendingUp} gradient="from-cyan-600 to-blue-500" />
                <LiveKPIWidget label="Client Satisfaction" targetValue="99%" icon={Star} gradient="from-emerald-600 to-teal-500" />
                <LiveKPIWidget label="Data Points Analyzed" targetValue="1B+" icon={Database} gradient="from-purple-600 to-pink-500" />
                <LiveKPIWidget label="Years Experience" targetValue="15+" icon={Award} gradient="from-orange-600 to-red-500" />
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-400">Scroll to explore</span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>


        {/* Insights Highlights */}
        <section className="py-10 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, #0891b2 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)",
              backgroundSize: "100% 100%"
            }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="insights-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0891b2" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#insights-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 bg-primary-500 rounded-full mb-6 opacity-80 shadow-lg"
            >
              <Sparkles className="w-7 h-7 text-white" />
            </motion.div>              <motion.h2 
                className="text-4xl  font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Latest Insights
              </motion.h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Stay informed with our latest thought leadership and industry expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {insights.map((insight, index) => (
                <InteractiveInsightCard key={insight.title} insight={insight} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Insights <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Partner Trust Indicators */}
        <section className="py-10 relative overflow-hidden">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(-45deg, transparent 0%, rgba(8, 145, 178, 0.05) 25%, transparent 50%, rgba(59, 130, 246, 0.05) 75%, transparent 100%)",
              backgroundSize: "400% 400%"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-14 h-14 bg-primary-500 rounded-full mb-6 opacity-80 shadow-lg"
              >
                <Users className="w-7 h-7 text-white" />
              </motion.div>

              <motion.h2 
                className="text-4xl  font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #10b981, #0891b2, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Trusted by Industry Leaders
              </motion.h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Strategic partnerships that amplify our capabilities and deliver exceptional value
              </p>
            </motion.div>

            <div className="relative">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary-50 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary-50 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: [0, -100 * partners.length] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-6 w-max"
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    whileHover={{ y: -8, scale: 1.08 }}
                    className="group flex-shrink-0 w-56"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl">
                      {/* Glowing background effect */}
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      <div className="relative p-6">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                          className="w-full h-20 bg-gradient-to-br from-primary-500/10 to-primary-500/10 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold text-primary group-hover:from-primary-500/20 group-hover:to-primary-500/20 transition-all relative overflow-hidden"
                        >
                          {/* Pulsing glow */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-500/20 rounded-xl"
                          />
                          <span className="relative">{partner.name.split(' ').map(word => word[0]).join('')}</span>
                        </motion.div>

                        <div className="relative">
                          <h3 className="text-sm font-bold text-secondary-900 dark:text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                            {partner.name}
                          </h3>
                          <motion.p 
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-xs text-secondary-600 dark:text-secondary-400 font-medium inline-flex items-center gap-1"
                          >
                            <motion.span
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-500"
                            />
                            {partner.category}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>


           {/* CTA Section */}
      <section className="relative py-12 bg-blue-600 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/90 via-blue-600/60 to-white/95" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">
           Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
           Unlock the power of data-driven decision-making and accelerate your growth with our proven analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full inline-flex items-center px-8 py-3 font-medium transition-all duration-300 group"
            >
             Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}