'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, ArrowRight, MapPin, Award, Users, ChevronDown, ChevronUp, FileText, ArrowUpRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { servicesData } from '@/lib/servicesData'
import { AnimatedCode } from '@/components/ui/AnimatedCode'

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [selectedServiceId, setSelectedServiceId] = useState<string>('')
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null)
  const [expandedContacts, setExpandedContacts] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
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
    setMounted(true)
    setIsClient(true)
    // Get service from URL params
    const service = searchParams?.get('service')
    if (service && servicesData.find(s => s.id === service)) {
      setSelectedServiceId(service)
      // Set first sub-service by default
      const selectedSvc = servicesData.find(s => s.id === service)
      if (selectedSvc?.subServices[0]) {
        setSelectedSubServiceId(selectedSvc.subServices[0].id)
      }
    } else if (servicesData[0]) {
      setSelectedServiceId(servicesData[0].id)
      setSelectedSubServiceId(servicesData[0].subServices[0]?.id || null)
    }
  }, [searchParams])

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const selectedService = servicesData.find(s => s.id === selectedServiceId)
  const selectedSubService = selectedService?.subServices.find(sub => sub.id === selectedSubServiceId)

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Service not found</p>
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const toggleContactExpanded = (contactId: string) => {
    const newExpanded = new Set(expandedContacts)
    if (newExpanded.has(contactId)) {
      newExpanded.delete(contactId)
    } else {
      newExpanded.add(contactId)
    }
    setExpandedContacts(newExpanded)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Services with Data Analytics Focus */}
      <section className="relative  flex items-center justify-center overflow-hidden py-10">
        {/* Dynamic Background with Data Visualization Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-600 to-slate-800" />
          
          {/* Animated data grid lines */}
          <motion.svg 
            className="absolute inset-0 w-full h-full opacity-10"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-services" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)" />
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

          {/* Glowing accent-500 orbs */}
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
                  <motion.div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
  </motion.div>
<AnimatedCode/>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl">
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
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-500 to-white"
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
              className="mb-4"
            >
              <p className="text-lg  text-white leading-relaxed max-w-6xl">
                Unlock the full potential of your business with our comprehensive suite of data analytics and consulting services. We combine cutting-edge technology, industry expertise, and innovative methodologies to deliver transformative solutions that drive measurable business value. Our team of seasoned professionals works closely with you to understand your unique challenges and develop tailored strategies that align with your organizational goals. From advanced analytics and risk management to actuarial consulting and strategic planning, we empower you to make data-driven decisions with confidence and clarity.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-3"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-100 text-blue-100 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
              >
                Get Consultation
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
            <span className="text-xs text-slate-200">Discover our solutions</span>
          
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Sub Services List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                 Our Solutions
                </h3>
                <div className="space-y-2">
                  {selectedService.subServices.map((subSvc) => (
                    <motion.button
                      key={subSvc.id}
                      onClick={() => setSelectedSubServiceId(subSvc.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedSubServiceId === subSvc.id
                          ? 'bg-blue-600 text-white shadow-md'
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
              {/* Service Overview Section - First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  {selectedService.name}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </motion.div>

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
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                     {selectedSubService.description}
                    </p>

                  
                  </div>

                  {/* Key Contacts */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                     Key Contacts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedSubService.keyContacts.map((contact, idx) => {
                        const contactId = `${selectedSubService.id}-${idx}`
                        const isExpanded = expandedContacts.has(contactId)

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
                                    
                                    {/* Avatar Container */}
                                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 shadow-lg group-hover/avatar:scale-105 transition-transform duration-300">
                                      <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-200">
                                        <Image
                                          src={contact.image}
                                          alt={contact.name}
                                          width={96}
                                          height={96}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                            e.currentTarget.src = '/placeholder-avatar.svg'
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full p-2 shadow-lg">
                                      <Award className="w-4 h-4" />
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
                                  <p className="text-sm font-semibold text-blue-600">
                                   {contact.title}
                                  </p>
                                </div>

                                {/* Contact Section */}
                                <AnimatePresence>
                                  {isExpanded && (
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
                                          <span className="truncate font-medium text-xs">{contact.email}</span>
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
                                          <span className="font-medium text-xs">{contact.phone}</span>
                                        </a>
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                {/* Expand Toggle Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleContactExpanded(contactId)
                                  }}
                                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium text-sm transition-colors"
                                >
                                  {isExpanded ? (
                                    <>
                                      <ChevronUp className="w-4 h-4" />
                                     Hide Contact
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="w-4 h-4" />
                                     Show Contact
                                    </>
                                  )}
                                </button>
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
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full inline-flex items-center px-8 py-3 font-medium transition-all duration-300 group"
            >
             Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
