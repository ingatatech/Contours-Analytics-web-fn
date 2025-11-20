'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { AnimatedCode } from '@/components/ui/AnimatedCode'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import api from '@/lib/axios'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [selectedServiceId, setSelectedServiceId] = useState<string>('')
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
 

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

  useEffect(() => {
    setMounted(true)
    fetchServices()
  }, [])

  useEffect(() => {
    if (services.length > 0) {
      // Get service from URL params
      const service = searchParams?.get('service')
      if (service && services.find(s => s.id === service)) {
        setSelectedServiceId(service)
        // Set first sub-service by default
        const selectedSvc = services.find(s => s.id === service)
        if (selectedSvc?.subServices[0]) {
          setSelectedSubServiceId(selectedSvc.subServices[0].id)
        }
      } else if (services[0]) {
        setSelectedServiceId(services[0].id)
        setSelectedSubServiceId(services[0].subServices[0]?.id || null)
      }
    }
  }, [searchParams, services])

  if (!mounted || loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">
     <LoadingSpinner/>
    </div>
  }

  const selectedService = services.find(s => s.id === selectedServiceId)
  const selectedSubService = selectedService?.subServices?.find((sub: any) => sub.id === selectedSubServiceId)

  // Debug logging
  console.log('Services:', services)
  console.log('Selected Service ID:', selectedServiceId)
  console.log('Selected Service:', selectedService)

  if (services.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No services available</p>
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Service not found</p>
          <p className="text-sm text-gray-500 mb-4">Available services: {services.map(s => s.name).join(', ')}</p>
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Services with Data Analytics Focus */}
      <section className="relative  flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-10">
        {/* Dynamic Background with Data Visualization Elements */}
          <AnimatedBackground />
  <AnimatedCode/>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Comprehensive Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
               
                <span className="">{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white"
                    animate={{ backgroundPosition: ["0%", "200%"] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    {selectedService.name}
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className=""
            >
              <div className="text-lg text-white leading-relaxed max-w-6xl" dangerouslySetInnerHTML={{ __html: selectedService.description }} />
            </motion.div>

         
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Sub Services List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                 Our Solutions
                </h3>
                <div className="space-y-2">
                  {selectedService.subServices?.map((subSvc:any) => (
                    <motion.button
                      key={subSvc.id}
                      onClick={() => setSelectedSubServiceId(subSvc.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedSubServiceId === subSvc.id
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <p className="font-medium text-sm">
                       {subSvc.name}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-8">
           

              {/* Sub Services Details */}
              {selectedSubService && (
                <motion.div
                  key={selectedSubService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Sub Service Overview */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                     {selectedSubService.name}
                    </h2>
                    <div className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: selectedSubService.description }} />

                  
                  </div>

                  {/* Key Contacts */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                     Key Contacts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedService.teamMembers?.map((contact: any, idx: number) => {
                        const contactId = `${selectedService.id}-${idx}`

                        return (
                          <motion.div
                            key={contactId}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative group cursor-pointer"
                          >
                            {/* Main Card */}
                            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/50">
                              {/* LinkedIn Badge */}
                              {contact.linkedin && (
                                <a
                                  href={contact.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="w-5 h-5" />
                                </a>
                              )}

                              {/* Avatar Section */}
                              <div className="relative pt-4 pb-4 px-6">
                                <div className="flex flex-col items-center">
                                  <div className="relative group/avatar">
                                    {/* Glow Ring */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110" />
                                    
                                       {/* Avatar Section */}
            <div className="relative pt-4 pb-4 px-6">
              <div className="flex flex-col items-center">
                <div className="relative group/avatar">
                  {/* Glow Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110" />
                  
                  {/* Avatar Container - Rectangle */}
                  <div className="relative w-32 h-36 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-xl group-hover/avatar:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl border-4 border-white overflow-hidden">
                      <img
                        src={contact.image || "/api/placeholder/300/400"}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full p-2 shadow-lg">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

                                   
                                  </div>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div className="relative px-6 pb-6">
                                {/* Name and Title */}
                                <div className="text-center mb-4">
                                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                   {contact.name}
                                  </h4>
                                  <div className="text-sm font-semibold text-blue-600" dangerouslySetInnerHTML={{ __html: contact.position }} />
                                </div>

                                {/* Contact Section */}
                                <AnimatePresence>
                           
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-xl p-3 space-y-2 border border-gray-100/50 mb-3"
                                    >
                                      {/* Email */}
                                      {contact.email && (
                                        <a
                                          href={`mailto:${contact.email}`}
                                          className="flex items-center gap-2 text-gray-700 text-sm hover:text-blue-700 transition-colors"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                                          <span className="truncate font-medium text-sm">{contact.email}</span>
                                        </a>
                                      )}

                                      {/* Phone */}
                                      {contact.phone && (
                                        <a
                                          href={`tel:${contact.phone}`}
                                          className="flex items-center gap-2 text-gray-700 text-sm hover:text-blue-700 transition-colors"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                                          <span className="font-medium text-sm">{contact.phone}</span>
                                        </a>
                                      )}
                                    </motion.div>
                                
                                </AnimatePresence>

                               
                              </div>

                              {/* Bottom accent-500 Line */}
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>

                            {/* Floating Shadow Effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-primary-600 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 via-primary-600/60 to-white/95" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">
           Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
           Let our experts help you achieve your goals with proven solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full inline-flex items-center px-8 py-3 font-medium transition-all duration-300 group"
            >
             Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      </section>
    </div>
  )
}
