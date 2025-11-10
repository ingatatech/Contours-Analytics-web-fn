'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp, Users, BookOpen, Download, Share2, Eye } from 'lucide-react'
import Link from 'next/link'


const insights = [
  {
    id: 1,
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    excerpt: 'Discover how predictive analytics can help your organization anticipate market trends and make proactive decisions.',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    views: '2.4k',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
    image: '📊'
  },
  {
    id: 2,
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    excerpt: 'Navigate the complexities of IFRS 17 implementation with our expert insights and best practices.',
    date: 'Nov 12, 2024',
    readTime: '8 min read',
    views: '1.8k',
    featured: false,
    gradient: 'from-emerald-500 to-teal-500',
    image: '⚖️'
  },
  {
    id: 3,
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    excerpt: 'Transform your organization with a strategic approach to data management and analytics.',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    views: '3.1k',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
    image: '🎯'
  },
  {
    id: 4,
    title: 'Credit Risk Assessment in Uncertain Times',
    category: 'Credit Rating',
    excerpt: 'Comprehensive strategies for evaluating credit risk in volatile economic conditions.',
    date: 'Nov 8, 2024',
    readTime: '7 min read',
    views: '1.5k',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
    image: '⭐'
  },
  {
    id: 5,
    title: 'AI-Powered Risk Management Solutions',
    category: 'Technology',
    excerpt: 'Explore how artificial intelligence is revolutionizing risk management across industries.',
    date: 'Nov 5, 2024',
    readTime: '4 min read',
    views: '2.7k',
    featured: false,
    gradient: 'from-indigo-500 to-purple-500',
    image: '🤖'
  },
  {
    id: 6,
    title: 'ESG Reporting: Best Practices and Frameworks',
    category: 'Sustainability',
    excerpt: 'A comprehensive guide to environmental, social, and governance reporting standards.',
    date: 'Nov 2, 2024',
    readTime: '9 min read',
    views: '1.9k',
    featured: false,
    gradient: 'from-green-500 to-emerald-500',
    image: '🌱'
  }
]

const categories = ['All', 'Analytics', 'Actuarial', 'Business Intelligence', 'Credit Rating', 'Technology', 'Sustainability']

const stats = [
  { label: 'Articles Published', value: '150+', icon: BookOpen },
  { label: 'Monthly Readers', value: '25k+', icon: Users },
  { label: 'Industry Reports', value: '50+', icon: TrendingUp },
  { label: 'Expert Contributors', value: '20+', icon: Eye }
]

export default function InsightsPage() {
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
            <span className="gradient-text">Insights & Thought Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed with our latest articles, case studies, and industry research
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

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold gradient-text mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {insights.filter(insight => insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-10`} />
                  <div className="relative glass border border-white/20 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{insight.image}</span>
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${insight.gradient} text-white text-xs font-medium rounded-full`}>
                          {insight.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-secondary-500 dark:text-secondary-400">
                        <Eye className="w-3 h-3" />
                        <span>{insight.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
                      <div className="flex items-center gap-4 text-xs text-secondary-500 dark:text-secondary-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{insight.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="inline-flex items-center text-primary font-medium text-sm"
                      >
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold gradient-text mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{insight.image}</span>
                        <span className={`inline-block px-2 py-1 bg-gradient-to-r ${insight.gradient} text-white text-xs font-medium rounded-full`}>
                          {insight.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-secondary-500 dark:text-secondary-400">
                        <Eye className="w-3 h-3" />
                        <span>{insight.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-xs text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-secondary-200 dark:border-secondary-700">
                      <div className="flex items-center gap-3 text-xs text-secondary-500 dark:text-secondary-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{insight.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-3 h-3 text-secondary-400 hover:text-primary cursor-pointer transition-colors" />
                        <Download className="w-3 h-3 text-secondary-400 hover:text-primary cursor-pointer transition-colors" />
                      </div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
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
  )
}
