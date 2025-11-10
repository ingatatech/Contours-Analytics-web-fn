'use client'

import { motion } from 'framer-motion'
import { Target, Database, BarChart3, Eye, Rocket, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react'
import Link from 'next/link'

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
    description: 'Every decision backed by rigorous analysis and evidence.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success, tailored solutions for each client.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology and methodologies.'
  }
]

const benefits = [
  { metric: '40%', label: 'Faster Implementation' },
  { metric: '95%', label: 'Project Success Rate' },
  { metric: '60%', label: 'Cost Reduction' },
  { metric: '24/7', label: 'Support Available' }
]

export default function ApproachPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-secondary-900 dark:via-blue-900/10 dark:to-cyan-900/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Our Approach</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            A proven 5-step methodology designed to deliver measurable results and sustainable business transformation
          </motion.p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-4 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-1">
                {benefit.metric}
              </div>
              <div className="text-xs text-secondary-600 dark:text-secondary-400 font-medium">
                {benefit.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12 mb-16">
          {approachSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col lg:flex-row gap-8 items-start"
            >
              {/* Step Number & Connector */}
              <div className="flex flex-col items-center lg:items-start">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg mb-4`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                {idx < approachSteps.length - 1 && (
                  <div className="hidden lg:block w-1 h-20 bg-gradient-to-b from-primary to-accent" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-5`} />
                  <div className="relative glass border border-white/20 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 rounded-lg text-primary font-bold text-sm">
                        {step.step}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-secondary-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed"
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {step.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-3">Our Core Principles</h2>
            <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              The fundamental values that guide our methodology and ensure consistent excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-secondary-900 dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
          <div className="relative p-8 md:p-12 text-center text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Ready to Experience Our Proven Approach?
            </h2>
            <p className="text-xs md:text-sm opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our methodology can transform your business challenges into competitive advantages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg text-xs"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
