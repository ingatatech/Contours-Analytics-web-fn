'use client'

import { motion } from 'framer-motion'
import { Handshake, Rocket, Star, Users, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'


const partners = [
  {
    id: 1,
    name: 'CloudTech Solutions',
    category: 'Technology',
    description: 'Cloud infrastructure and data solutions partner',
    gradient: 'from-blue-500 to-cyan-500',
    services: ['Cloud Migration', 'Data Storage', 'Infrastructure'],
    years: '5+ years'
  },
  {
    id: 2,
    name: 'DataViz Pro',
    category: 'Analytics',
    description: 'Advanced data visualization and BI tools',
    gradient: 'from-purple-500 to-pink-500',
    services: ['Visualization', 'Dashboards', 'Reporting'],
    years: '3+ years'
  },
  {
    id: 3,
    name: 'SecureNet',
    category: 'Security',
    description: 'Cybersecurity and compliance solutions',
    gradient: 'from-emerald-500 to-teal-500',
    services: ['Security Audits', 'Compliance', 'Risk Management'],
    years: '4+ years'
  },
  {
    id: 4,
    name: 'InsightAI',
    category: 'AI/ML',
    description: 'Artificial intelligence and machine learning platform',
    gradient: 'from-orange-500 to-red-500',
    services: ['ML Models', 'AI Solutions', 'Automation'],
    years: '2+ years'
  },
  {
    id: 5,
    name: 'FinanceCore',
    category: 'Financial',
    description: 'Financial modeling and risk assessment tools',
    gradient: 'from-indigo-500 to-purple-500',
    services: ['Risk Models', 'Financial Analysis', 'Compliance'],
    years: '6+ years'
  },
  {
    id: 6,
    name: 'DataStream',
    category: 'Integration',
    description: 'Real-time data integration and streaming solutions',
    gradient: 'from-green-500 to-emerald-500',
    services: ['Data Pipelines', 'Real-time Processing', 'ETL'],
    years: '3+ years'
  }
]

const benefits = [
  {
    icon: Handshake,
    title: 'Proven Track Record',
    description: '15+ years of successful partnerships and industry collaborations.',
    metric: '15+'
  },
  {
    icon: Rocket,
    title: 'Innovation Focus',
    description: 'Continuous investment in cutting-edge technology and methodologies.',
    metric: '50+'
  },
  {
    icon: Star,
    title: 'Client Success',
    description: '98%+ client satisfaction and proven ROI for our partnership initiatives.',
    metric: '98%'
  }
]

const stats = [
  { label: 'Strategic Partners', value: '25+', icon: Users },
  { label: 'Countries Covered', value: '15+', icon: Globe },
  { label: 'Joint Projects', value: '200+', icon: Rocket },
  { label: 'Success Rate', value: '98%', icon: Award }
]

export default function PartnersPage() {
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
            <span className="gradient-text">Our Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic collaborations that enhance our capabilities and deliver greater value to our clients
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-4 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-secondary-600 dark:text-secondary-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold gradient-text mb-8 text-center">Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} opacity-10`} />
                  <div className="relative glass border border-white/20 p-6">
                    {/* Partner Logo */}
                    <div className={`w-full h-20 bg-gradient-to-br ${partner.gradient} rounded-xl mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-105 transition-all duration-300`}>
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-bold text-secondary-900 dark:text-white group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <span className="text-xs text-secondary-500 dark:text-secondary-400">
                        {partner.years}
                      </span>
                    </div>

                    <p className={`text-xs font-medium bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent mb-3`}>
                      {partner.category}
                    </p>

                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="space-y-2">
                      {partner.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-3">Why Partner With Us</h2>
            <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              The advantages of building strategic partnerships with Contours Analytics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{benefit.metric}</div>
                    <h3 className="text-base font-bold text-secondary-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {benefit.description}
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
              Interested in Partnering?
            </h2>
            <p className="text-xs md:text-sm opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're always looking for innovative partners to collaborate with and create mutual value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg text-xs"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
