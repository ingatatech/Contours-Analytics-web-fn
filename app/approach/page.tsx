'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Database, BarChart3, Eye, Rocket, CheckCircle, ArrowRight, Users, Clock, Award, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

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
    gradient: 'from-purple-500 to-pink-500',
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
    gradient: 'from-indigo-500 to-purple-500',
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
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology and methodologies.',
    color: 'from-amber-500 to-orange-500'
  }
]

const benefits = [
  { metric: '40%', label: 'Faster Implementation', icon: Zap },
  { metric: '95%', label: 'Project Success Rate', icon: CheckCircle },
  { metric: '60%', label: 'Cost Reduction', icon: TrendingUp },
  { metric: '24/7', label: 'Support Available', icon: Clock }
]

export default function ApproachPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-secondary-950">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-secondary-900 dark:via-secondary-950 dark:to-purple-950">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30">
                Our Methodology
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-secondary-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              A Proven<br />Approach
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Our 5-step methodology delivers measurable results and sustainable business transformation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Stats */}
      <section className="relative -mt-20 z-20 px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-secondary-900 rounded-2xl shadow-xl border border-secondary-200 dark:border-secondary-800 p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {benefit.metric}
                </div>
                <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Steps - Timeline Style */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5-Step Process</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A systematic approach that transforms complexity into clarity
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

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
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Guided by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Principles</span>
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
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative p-12 md:p-16 text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our proven methodology can transform your business challenges into competitive advantages
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
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