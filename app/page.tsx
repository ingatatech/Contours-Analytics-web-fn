'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { InteractiveCursor } from '@/components/ui/InteractiveCursor'
import { ParticleField } from '@/components/ui/ParticleField'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, BarChart3, Shield, Target, Star, TrendingUp, Database, Brain, Users, Globe, Award, CheckCircle, Eye, Sparkles, Zap, MousePointer2, Play, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const coreServices = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into strategic insights that drive business growth',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Predictive Modeling', 'Real-time Analytics', 'Custom Dashboards'],
    stats: { value: '500+', label: 'Projects' }
  },
  {
    icon: Shield,
    title: 'Actuarial Services',
    description: 'Expert risk assessment and financial strategy solutions',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Risk Modeling', 'Regulatory Compliance', 'Financial Planning'],
    stats: { value: '99%', label: 'Accuracy' }
  },
  {
    icon: Target,
    title: 'Business Intelligence',
    description: 'Build scalable, data-driven ecosystems for informed decisions',
    gradient: 'from-primary-500 to-pink-500',
    features: ['Data Integration', 'BI Dashboards', 'Strategic Planning'],
    stats: { value: '1B+', label: 'Data Points' }
  },
  {
    icon: Star,
    title: 'Credit Rating',
    description: 'Comprehensive credit assessment and rating services',
    gradient: 'from-orange-500 to-red-500',
    features: ['Credit Analysis', 'Rating Reports', 'Risk Assessment'],
    stats: { value: '15+', label: 'Years' }
  }
]

const insights = [
  {
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    readTime: '5 min read',
    gradient: 'from-blue-500 to-cyan-500',
    views: '2.3k'
  },
  {
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    readTime: '8 min read',
    gradient: 'from-emerald-500 to-teal-500',
    views: '1.8k'
  },
  {
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    readTime: '6 min read',
    gradient: 'from-primary-500 to-pink-500',
    views: '3.1k'
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



function InteractiveServiceCard({ service, index }: { service: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer relative"
    >
      <motion.div
        animate={{
          rotateX: (mousePosition.y - 150) / 30,
          rotateY: (mousePosition.x - 150) / 30
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl"
      >
        {/* Spotlight effect */}
        <motion.div
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`} />
        <div className="relative glass border border-white/20 p-8">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isExpanded ? 1 : 0 }}
              className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-white font-medium">{service.stats.value}</span>
            </motion.div>
          </div>
          
          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed mb-4">
            {service.description}
          </p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-white/10">
                  {service.features.map((feature: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-secondary-600 dark:text-secondary-400">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="absolute bottom-4 right-4"
          >
            <ChevronDown className="w-5 h-5 text-secondary-400" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function LiveKPIWidget({ label, targetValue, icon: Icon, gradient }: { label: string, targetValue: string, icon: any, gradient: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showRipple, setShowRipple] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => {
        setIsHovered(true)
        setShowRipple(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        setTimeout(() => setShowRipple(false), 600)
      }}
      className="relative glass rounded-2xl p-6 text-left group hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Ripple effect */}
      <AnimatePresence>
        {showRipple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl`}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 360 : 0
        }}
        transition={{ duration: 0.6 }}
        className={`relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      
      <motion.div 
        animate={{ scale: isHovered ? 1.1 : 1 }}
        className="relative text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white mb-1"
      >
        {targetValue}
      </motion.div>
      
      <div className="relative text-sm text-secondary-600 dark:text-secondary-400 font-medium">
        {label}
      </div>
      
      {/* Pulse animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${gradient} rounded-full`}
      />
    </motion.div>
  )
}

function InteractiveInsightCard({ insight, index }: { insight: any, index: number }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-500/5 opacity-0 group-hover:opacity-100"
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className={`inline-block px-3 py-1 bg-gradient-to-r ${insight.gradient} text-white text-xs font-medium rounded-full`}
            >
              {insight.category}
            </motion.span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-secondary-500 dark:text-secondary-400">
                <Eye className="w-3 h-3" />
                <span>{insight.views}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLiked(!isLiked)
                  setLikes(isLiked ? likes - 1 : likes + 1)
                }}
                className="flex items-center gap-1"
              >
                <motion.div
                  animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star 
                    className={`w-4 h-4 ${isLiked ? 'fill-yellow-400 text-yellow-400' : 'text-secondary-400'}`}
                  />
                </motion.div>
                <span className="text-xs text-secondary-500">{likes}</span>
              </motion.button>
            </div>
          </div>
          
          <h3 className="text-base font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
            {insight.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary-500">{insight.readTime}</span>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="inline-flex items-center text-primary font-medium text-sm"
            >
              Read More <ArrowRight className="w-3 h-3 ml-1" />
            </motion.div>
          </div>
        </div>
        
        {/* Shine effect */}
        <motion.div
          animate={{
            x: ["-100%", "200%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
        />
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-secondary-900 dark:via-blue-900/10 dark:to-cyan-900/10 overflow-hidden">
      <InteractiveCursor />
      <ParticleField />
      
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: scrollY * 0.5 }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: scrollY * 0.3 }}
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen py-20 flex items-center justify-center overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Interactive Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </motion.div>
                <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  Powered by Advanced AI & Analytics
                </span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  <motion.span 
                    className=" text-slate-900 dark:text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Transform Data Into {" "}
                  </motion.span>
                  <motion.span 
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.span
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{
                        backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6, #0891b2)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      Strategic Insights
                    </motion.span>
                  </motion.span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-6xl leading-relaxed"
                >
                  Empowering businesses with comprehensive{" "}
                  <motion.span 
                    className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    data analytics
                  </motion.span>
                  , actuarial services, and business intelligence solutions that drive sustainable growth.
                </motion.p>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-start"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.6)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-xl blur-sm"
                  />
                  <div className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-base overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    <span className="relative">Explore Services</span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center space-x-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-base border border-slate-200 dark:border-slate-700 overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative">Contact Us</span>
                </motion.button>
              </motion.div>

              {/* Live KPI Widgets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              >
                <LiveKPIWidget label="Projects Completed" targetValue="500+" icon={TrendingUp} gradient="from-blue-600 to-cyan-500" />
                <LiveKPIWidget label="Client Satisfaction" targetValue="99%" icon={Star} gradient="from-emerald-600 to-teal-500" />
                <LiveKPIWidget label="Data Points Analyzed" targetValue="1B+" icon={Database} gradient="from-primary-600 to-pink-500" />
                <LiveKPIWidget label="Years Experience" targetValue="15+" icon={Award} gradient="from-orange-600 to-red-500" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <span className="text-xs text-secondary-500">Scroll to explore</span>
                  <ChevronDown className="w-5 h-5 text-secondary-400" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Core Services Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Our Core Services
              </motion.h2>
              <p className="text-base text-secondary-600 dark:text-secondary-300 ">
                Comprehensive solutions that transform data into strategic advantages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <InteractiveServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Insights Highlights */}
        <section className="py-10 bg-secondary-50/50 dark:bg-secondary-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Latest Insights
              </motion.h2>
              <p className="text-base text-secondary-600 dark:text-secondary-300 ">
                Stay informed with our latest thought leadership and industry expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <InteractiveInsightCard key={insight.title} insight={insight} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                View All Insights <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Partner Trust Indicators */}
        <section className="py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Trusted Partners
              </motion.h2>
              <p className="text-base text-secondary-600 dark:text-secondary-300 ">
                Strategic collaborations that enhance our capabilities and deliver greater value
              </p>
            </motion.div>

            <div className="relative">
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
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group flex-shrink-0 w-48"
                  >
                    <div className="glass rounded-xl p-4 text-left hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center text-lg font-bold text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-all"
                      >
                        {partner.name.split(' ').map(word => word[0]).join('')}
                      </motion.div>
                      <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">
                        {partner.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive CTA Section */}
        <section className="py-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary-600 opacity-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Animated background pattern */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.5) 0%, transparent 50%)",
                  backgroundSize: "100% 100%"
                }}
              />
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-500 rounded-full mb-6"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our data-driven solutions can accelerate your growth and drive sustainable success.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}