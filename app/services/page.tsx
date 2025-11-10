'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Shield, Target, Star, TrendingUp, Database, Brain } from 'lucide-react'
import Link from 'next/link'


const serviceCategories = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Transform raw data into strategic insights that drive business growth',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
    subservices: [
      {
        name: 'Descriptive Analytics',
        description: 'Analyze historical data to summarize performance trends and key metrics.',
        icon: '📈'
      },
      {
        name: 'Diagnostic Analytics', 
        description: 'Uncover root causes of business outcomes with advanced analysis.',
        icon: '🔍'
      },
      {
        name: 'Predictive Analytics',
        description: 'Forecast future trends using statistical modeling and machine learning.',
        icon: '🔮'
      },
    ],
  },
  {
    id: 'actuarial',
    title: 'Actuarial Services',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Expert risk assessment and financial strategy solutions',
    features: ['Risk Modeling', 'Regulatory Compliance', 'Financial Planning'],
    subservices: [
      {
        name: 'Risk Modeling & Assessment',
        description: 'Develop sophisticated risk models for insurance and finance.',
        icon: '⚖️'
      },
      {
        name: 'Pricing & Product Development',
        description: 'Design and evaluate insurance and financial products.',
        icon: '💰'
      },
      {
        name: 'Pension & Benefits Consulting',
        description: 'Valuations for pension schemes and employee benefits.',
        icon: '🏦'
      },
    ],
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: Target,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Build scalable, data-driven ecosystems for informed decisions',
    features: ['Data Integration', 'BI Dashboards', 'Strategic Planning'],
    subservices: [
      {
        name: 'Data Architecture & Integration',
        description: 'Design unified data systems for accessible insights.',
        icon: '🏗️'
      },
      {
        name: 'BI Implementation',
        description: 'Develop solutions that translate data into actionable insights.',
        icon: '⚡'
      },
      {
        name: 'Data Strategy Development',
        description: 'Create clear data strategies aligned with business goals.',
        icon: '🎯'
      },
    ],
  },
  {
    id: 'credit-rating',
    title: 'Credit Rating',
    icon: Star,
    gradient: 'from-orange-500 to-red-500',
    description: 'Comprehensive credit assessment and rating services',
    features: ['Credit Analysis', 'Rating Reports', 'Risk Assessment'],
    subservices: [
      {
        name: 'Public Credit Ratings',
        description: 'Transparent ratings for improved market visibility.',
        icon: '🌟'
      },
      {
        name: 'Private Credit Ratings',
        description: 'Confidential ratings for strategic decision-making.',
        icon: '🔒'
      },
      {
        name: 'Credit Risk Modeling',
        description: 'Quantitative models for PD, LGD, and EAD estimation.',
        icon: '📊'
      },
    ],
  },
]

const stats = [
  { label: 'Projects Delivered', value: '500+', icon: TrendingUp },
  { label: 'Client Satisfaction', value: '99%', icon: Star },
  { label: 'Data Points Analyzed', value: '1B+', icon: Database },
  { label: 'AI Models Deployed', value: '150+', icon: Brain },
]

export default function ServicesPage() {
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
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Our Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive solutions that transform data into strategic advantages and drive sustainable business growth
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="scroll-mt-20"
            >
              {/* Service Header */}
              <div className="relative overflow-hidden rounded-3xl mb-12">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10`} />
                <div className="relative glass border border-white/20 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-lg`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white mb-3">
                        {category.title}
                      </h2>
                      <p className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/50 dark:bg-secondary-800/50 text-secondary-700 dark:text-secondary-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subservices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.subservices.map((subservice, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-8">
                      <div className="text-4xl mb-4">{subservice.icon}</div>
                      <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {subservice.name}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {subservice.description}
                      </p>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="mt-4 inline-flex items-center text-primary font-medium"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
          <div className="relative p-12 md:p-16 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-2xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-base md:text-lg opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Join 500+ companies that trust us to deliver data-driven solutions that create measurable business impact
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
