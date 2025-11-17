'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

// Sample insights data - same as in page.tsx
const insights = [
  {
    id: 1,
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    content: 'Discover how predictive analytics can help your organization anticipate market trends and make proactive decisions. This comprehensive guide covers:\n\n• Understanding Predictive Models: Learn the fundamentals of machine learning algorithms and their applications in business.\n\n• Data Preparation: Best practices for cleaning and preparing your data for analysis.\n\n• Implementation Strategies: Step-by-step approaches to integrating predictive analytics into your existing systems.\n\n• ROI Measurement: How to quantify the business impact of your analytics initiatives.\n\nPredictive analytics empowers businesses to stay ahead of market curves by identifying patterns and trends before they become apparent to competitors.',
    createdAt: 'Nov 15, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: 2,
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    content: 'Navigate the complexities of IFRS 17 implementation with our expert insights and best practices. This guide provides:\n\n• IFRS 17 Basics: Understanding the new insurance accounting standard and its implications.\n\n• Transition Planning: A roadmap for migrating from previous standards to IFRS 17.\n\n• System Requirements: Technical infrastructure needed for compliance.\n\n• Reporting Framework: How to structure your financial reporting under the new standard.\n\n• Risk Management: Managing operational and financial risks during implementation.\n\nIFRS 17 represents a significant shift in insurance accounting, requiring careful planning and execution.',
    createdAt: 'Nov 12, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: 3,
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    content: 'Transform your organization with a strategic approach to data management and analytics. Learn how to:\n\n• Create a Data Culture: Foster an environment where data-driven decisions are the norm.\n\n• Establish Data Governance: Implement policies and procedures for data management.\n\n• Build Analytics Capabilities: Invest in tools, skills, and infrastructure.\n\n• Enable Self-Service Analytics: Empower teams with access to the data they need.\n\n• Measure Data Value: Demonstrate ROI and justify continued investment in analytics.\n\nA data-driven organization is better positioned to compete, innovate, and succeed in today\'s digital economy.',
    createdAt: 'Nov 10, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: 4,
    title: 'Credit Risk Assessment in Uncertain Times',
    category: 'Credit Rating',
    content: 'Comprehensive strategies for evaluating credit risk in volatile economic conditions. This resource covers:\n\n• Risk Identification: Recognizing emerging credit risks in your portfolio.\n\n• Quantitative Analysis: Using statistical models to assess risk probability and impact.\n\n• Qualitative Assessment: Evaluating non-quantifiable risk factors.\n\n• Scenario Analysis: Planning for various economic outcomes.\n\n• Mitigation Strategies: Practical approaches to reduce credit risk exposure.\n\nIn uncertain times, robust credit risk assessment is essential for maintaining financial stability.',
    createdAt: 'Nov 8, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop'
  },
  {
    id: 5,
    title: 'AI-Powered Risk Management Solutions',
    category: 'Technology',
    content: 'Explore how artificial intelligence is revolutionizing risk management across industries. Discover:\n\n• AI Applications: How machine learning enhances risk detection and prediction.\n\n• Automation Benefits: Reducing manual processes and human error.\n\n• Real-time Monitoring: Continuous risk assessment and alerting systems.\n\n• Predictive Capabilities: Anticipating risks before they materialize.\n\n• Implementation Challenges: Overcoming obstacles in AI adoption.\n\nAI-powered solutions enable more sophisticated, faster, and more accurate risk management.',
    createdAt: 'Nov 5, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  },
  {
    id: 6,
    title: 'ESG Reporting: Best Practices and Frameworks',
    category: 'Sustainability',
    content: 'A comprehensive guide to environmental, social, and governance reporting standards. Learn about:\n\n• ESG Fundamentals: Understanding the three pillars of ESG reporting.\n\n• Reporting Frameworks: GRI, SASB, TCFD, and other major standards.\n\n• Data Collection: Systems and processes for gathering ESG metrics.\n\n• Stakeholder Engagement: Communicating ESG performance to investors and regulators.\n\n• Continuous Improvement: Advancing your ESG maturity and performance.\n\nESG reporting is increasingly important for demonstrating corporate responsibility and managing non-financial risks.',
    createdAt: 'Nov 2, 2024',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop'
  }
]

export default function InsightDetail() {
  const searchParams = useSearchParams()
  const [insight, setInsight] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = searchParams.get('id')
    if (id) {
      const foundInsight = insights.find(item => item.id === parseInt(id))
      setInsight(foundInsight || null)
      // Set page title
      if (foundInsight) {
        document.title = `${foundInsight.title} - Contours Analytics`
      }
    }
    setIsLoading(false)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!insight) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Insight not found</h1>
        <Link href="/insights" className="text-primary-500 hover:text-primary-600">
          Back to Insights
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/insights"
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Insights</span>
          </Link>
          
        
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden h-96 shadow-lg">
            <img 
              src={insight.image} 
              alt={insight.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{insight.createdAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary-500" />
              <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                {insight.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-8 leading-tight text-secondary-900 dark:text-white">
            {insight.title}
          </h1>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            {insight.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-secondary-200 dark:border-secondary-700 pt-8 mt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-secondary-900 dark:text-white">Share this insight:</span>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <motion.a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>

                  {/* Twitter */}
                  <motion.a
                    href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${insight.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href={`mailto:?subject=${insight.title}&body=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    title="Share via Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Back to Insights Button */}
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
      </article>

      {/* Bottom wave */}
      <div className="relative mt-20 pt-10">
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
      </div>
    </div>
    
  )
}
