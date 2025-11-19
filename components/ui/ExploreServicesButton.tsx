'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Briefcase } from 'lucide-react'
import Link from 'next/link'
import api from '@/lib/axios'
import LoadingSpinner from './LoadingSpinner'

interface Service {
  id: string
  name: string
  description: string
}

interface ExploreServicesButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ExploreServicesButton({ className = "", children }: ExploreServicesButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const res = await api.get('/services')
      setServices(res.data.data || res.data)
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
    if (services.length === 0) {
      fetchServices()
    }
  }

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] overflow-y-auto px-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative top-16 lg:top-20 mx-auto max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary-500 px-4 py-3 text-white flex items-center justify-between">
              <h2 className="font-semibold text-lg">Our Services</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 max-h-[calc(100vh-150px)]">
              {loading ? (
                <div className="flex justify-center py-20">
                  <LoadingSpinner />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={`/services?service=${service.id}`}
                        onClick={() => setIsModalOpen(false)}
                        className="group/item block h-full p-3 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 text-white flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-sm group-hover/item:text-blue-600 transition-colors mb-2">
                              {service.name}
                            </h3>
                            <div 
                              className="text-xs text-gray-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: service.description?.slice(0, 80) + (service.description?.length > 80 ? '...' : '') || 'No description available'
                              }}
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={`inline-flex items-center bg-transparent border-2 border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 ${className}`}
      >
        {children || 'Explore Our Services'}
      </button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}