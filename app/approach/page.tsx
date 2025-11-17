'use client'

import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { AnimatedCode } from '@/components/ui/AnimatedCode'
import { motion, useScroll } from 'framer-motion'
import { Target, Database, BarChart3, Eye, Rocket, CheckCircle, ArrowRight, Users, Clock, Award, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const approachSteps = [
  {
    step: 1,
    title: 'Understand',
    description: 'We begin by deeply understanding your business goals, challenges, and current data landscape.',
    icon: Target,
    gradient: 'from-blue-500 to-cyan-500',
    details: ['Business Requirements Analysis', 'Stakeholder Interviews', 'Current State Assessment']
  },
  {
    step: 2,
    title: 'Collect',
    description: 'We gather and integrate data from all relevant sources to create a comprehensive dataset.',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    details: ['Data Source Identification', 'ETL Pipeline Setup', 'Data Quality Validation']
  },
  {
    step: 3,
    title: 'Analyze',
    description: 'Our experts apply advanced analytics and modeling techniques to extract meaningful insights.',
    icon: BarChart3,
    gradient: 'from-primary-500 to-primary-600',
    details: ['Statistical Analysis', 'Machine Learning Models', 'Pattern Recognition']
  },
  {
    step: 4,
    title: 'Visualize',
    description: 'We transform complex data into clear, actionable visualizations and dashboards.',
    icon: Eye,
    gradient: 'from-orange-500 to-red-500',
    details: ['Interactive Dashboards', 'Custom Reports', 'Real-time Monitoring']
  },
  {
    step: 5,
    title: 'Implement',
    description: 'We assist in implementing recommendations and strategies to drive tangible business results.',
    icon: Rocket,
    gradient: 'from-indigo-500 to-primary-500',
    details: ['Strategy Deployment', 'Change Management', 'Performance Tracking']
  },
]

const principles = [
  {
    icon: CheckCircle,
    title: 'Data-Driven',
    description: 'Every decision backed by rigorous analysis and evidence.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success, tailored solutions for each client.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology and methodologies.',
    color: 'from-amber-500 to-orange-500'
  }
]


export default function ApproachPage() {
  const containerRef = useRef(null)
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-secondary-950">
      {/* Hero Section - Approach with Data Analytics Focus */}
      <section className="relative  flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-3">
           <AnimatedBackground />
   <AnimatedCode/>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl py-3">
          <motion.div
       initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
            className="text-left mb-5"
          >
            {/* Badge */}
            <motion.div
         initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Our Proven Methodology</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                <span>Transform</span>{" "}
                <span className="">
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300"
                    animate={{ backgroundPosition: ["0%", "200%"] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    Data Into Strategy
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-6xl">
                Our five-step methodology blends industry-leading best practices with advanced analytical techniques to help organizations uncover hidden opportunities, solve complex challenges, and achieve meaningful, long-term business transformation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 pt-3"
            >
                             <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >

              <motion.a
                href="#methodology"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all  gap-2"
                >
               Our Process
              </motion.a>
                </motion.div>
                              <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact-us" className="inline-flex items-center border-2 border-white/30 text-white px-10 py-3 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
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
            <span className="text-xs text-slate-400">Discover our methodology</span>
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

   
      {/* Process Steps - Compact Grid */}
      <section id="methodology" className="max-w-7xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-primary-500 bg-clip-text text-transparent">5-Step Process</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A systematic approach that transforms complexity into clarity
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {approachSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Gradient Blur */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative bg-white dark:bg-secondary-900 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-800 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Header with Icon and Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full text-white font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 flex-grow">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2 pt-2 border-t border-secondary-100 dark:border-secondary-800">
                    {step.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${step.gradient}`} />
                        <span className="text-xs text-secondary-600 dark:text-secondary-400 leading-snug">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-bold text-secondary-900 dark:text-white mb-4">
            Guided by <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Core Principles</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            The fundamental values that ensure consistent excellence in everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-4 border border-secondary-200 dark:border-secondary-800 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-blue-600 overflow-hidden"
        >
 <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/90 via-blue-600/60 to-white/95" style={{ mixBlendMode: "multiply" }} />
        </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 2px, transparent 2px),
                linear-gradient(to bottom, white 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative py-3 text-center text-white">
         
            
            <h2 className="text-3xl  font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our proven methodology can transform your business challenges into competitive advantages
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-7">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
                    {/* Bottom wave */}
  <div className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none -mb-3">
    <svg
      viewBox="0 0 1920 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-10 md:h-14"
    >
      <path d="M0,40 Q480,80 960,40 T1920,40 V80 H0 Z" fill="#038bca" />
    </svg>
  </div>
        </motion.div>
      </section>
    </div>
  )
}