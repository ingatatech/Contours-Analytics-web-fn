'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { fetchInsights } from '@/lib/api'

export default function InsightDetail() {
  const searchParams = useSearchParams()
  const [insight, setInsight] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  useEffect(() => {
    const loadInsight = async () => {
      const id = searchParams.get('id')
      if (id) {
        try {
          const response = await fetchInsights("isActive=true&limit=100")
          const data = response.insights || response.data || response
          const insights = Array.isArray(data) ? data : data?.insights || []
          console.log('Available insights:', insights)
          console.log('Looking for ID:', id)
          const foundInsight = insights.find((item: any) => 
            item.id === parseInt(id) || item.id === id || item._id === id
          )
          console.log('Found insight:', foundInsight)
          setInsight(foundInsight || null)
          if (foundInsight) {
            document.title = `${foundInsight.title} - Contours Analytics`
          }
        } catch (err) {
          console.error('Error loading insight:', err)
          setInsight(null)
        }
      }
      setIsLoading(false)
    }
    loadInsight()
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
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
          <div 
            className="prose dark:prose-invert max-w-none mb-12 text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

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
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(insight.title)}`}
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
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
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
                    href={`mailto:?subject=${encodeURIComponent(insight.title)}&body=${encodeURIComponent(currentUrl)}`}
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
