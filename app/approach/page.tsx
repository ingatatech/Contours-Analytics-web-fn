'use client'

import { AnimatedCode } from '@/components/ui/AnimatedCode'
import { motion, useScroll, useTransform } from 'framer-motion'
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
              <pattern id="grid-approach" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-approach)" />
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
            className="text-left mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
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
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-6xl">
                Our five-step methodology combines industry best practices with cutting-edge analytics to deliver transformative business results.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-6"
            >
              <motion.a
                href="#methodology"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
              >
                Explore Our Process
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/50 text-blue-300 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
              >
                Schedule Consultation
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

   
      {/* Process Steps - Timeline Style */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-bold text-secondary-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-primary-500 bg-clip-text text-transparent">5-Step Process</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A systematic approach that transforms complexity into clarity
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-primary-500 to-primary-600" />

          <div className="space-y-16">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-8 border border-secondary-200 dark:border-secondary-800 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-lg text-white font-bold text-sm`}>
                              {step.step}
                            </span>
                            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3 mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-800">
                        {step.details.map((detail, detailIdx) => (
                          <div key={detailIdx} className="flex items-center gap-3 group/item">
                            <CheckCircle className={`w-5 h-5 text-blue-500 flex-shrink-0`} />
                            <span className="text-sm text-secondary-700 dark:text-secondary-300 group-hover/item:text-secondary-900 dark:group-hover/item:text-white transition-colors">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon - Desktop only */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white dark:bg-secondary-900 border-4 border-secondary-200 dark:border-secondary-800 rounded-full items-center justify-center shadow-xl z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
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
                <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-8 border border-secondary-200 dark:border-secondary-800 hover:shadow-2xl transition-all duration-300 h-full">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}