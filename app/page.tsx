'use client'

import { AnimatedCode } from '@/components/ui/AnimatedCode'
import InsightModal from '@/components/ui/InsightModal'
import { motion,  } from 'framer-motion'
import { ArrowRight, Users, Sparkles, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Image from 'next/image'
import { Insight } from '@/lib/types/Insights'
import { fetchInsights } from '@/lib/api'
import api from '@/lib/axios'
import { Partner } from '@/components/admin/partners'
import LoadingSpinner from '@/components/ui/LoadingSpinner'


function InteractiveInsightCard({ insight, index }: { insight: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link href={`/insights/detail?id=${insight.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="cursor-pointer"
      >
        <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
          <div className="relative">
            <Image
              src={insight.image || "/placeholder.svg"}
              alt={insight.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 flex space-x-2">
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                {insight?.category ?? ""}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
              <Calendar className="h-4 w-4" />
              <span>{new Date(insight.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
              {insight.title}
            </h3>
            
            <div className="flex items-center justify-end">
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center space-x-1 group">
                <span>Read more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </article>
      </motion.div>
    </Link>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [selectedInsight, setSelectedInsight] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [partnerScroll, setPartnerScroll] = useState(0)
  const [partnerScrollAmount, setPartnerScrollAmount] = useState(0)
  const partnerScrollRef = useRef<HTMLDivElement>(null)
 const [insights, setInsights] = useState<Insight[]>([])
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [partnersLoading, setPartnersLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [partners, setPartners] = useState<Partner[]>([])

  const loadInsights = async () => {
    try {
          setLoading(true)
          setError(null)
          const response = await fetchInsights("isActive=true&limit=100")
          const data = response.insights || response.data || response
          if (Array.isArray(data)) {
            setInsights(data)
          } else if (data?.insights && Array.isArray(data.insights)) {
            setInsights(data.insights)
          } else {
            setInsights([])
          }
        } catch (err) {
          console.error("Error loading insights:", err)
          setError("Failed to load insights.")
        } finally {
          setLoading(false)
        }
      }
          useEffect(() => {
      loadInsights()
      fetchPartners()
      fetchServices()
    }, [])
  
  async function fetchPartners() {
    setPartnersLoading(true)
    try {
      const res = await api.get("/partners")
      setPartners(res.data)
    } catch (err: any) {
        console.error('Error fetching partners:', err)
    } finally {
      setPartnersLoading(false)
    }
  }

  async function fetchServices() {
    try {
      const res = await api.get("/services")
      setServices(res.data.data || res.data)
    } catch (err: any) {
      console.error('Error fetching services:', err)
    }
  }
  // Generate random positions once on mount to avoid hydration mismatch
  const [randomPositions] = useState(() =>
    [...Array(12)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  )

  useEffect(() => {
    setIsClient(true)
    // Guard against SSR - only run on client side
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePartnerScroll = (direction: 'left' | 'right') => {
    if (partnerScrollRef.current) {
      const scrollAmount = 280 // card width (224px) + gap (56px)
      const maxScroll = partnerScrollRef.current.scrollWidth - partnerScrollRef.current.offsetWidth
      
      let newScroll = partnerScrollAmount
      if (direction === 'left') {
        newScroll = Math.max(0, partnerScrollAmount - scrollAmount)
      } else {
        newScroll = Math.min(maxScroll, partnerScrollAmount + scrollAmount)
      }
      
      setPartnerScrollAmount(newScroll)
    }
  }



  return (
        <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    <div className="min-h-screen bg-white overflow-hidden">

        {/* Hero Section - Modern Analytics Design */}
        <section className="relative py-7 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <AnimatedBackground />
<AnimatedCode/>
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4 max-w-6xl">
            <div className=" items-center">
              <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{delay: 0.4, duration: 1 }}
                className="space-y-8"
              >
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                  />
                  <span className="text-sm font-semibold text-cyan-300">Advanced Analytics & Data Science</span>
                </motion.div>

                {/* Main Headline */}
                <div>
                  <motion.h1
                initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1 }}
                    className="text-4xl font-bold leading-tight mb-6"
                  >
                    <span className="text-white">Transform Your Data</span> {" "}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Into Competitive Advantage
                    </span>
                  </motion.h1>
                  
                  <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1 }}
                    className="text-xl text-slate-300 leading-relaxed max-w-6xl"
                  >
                   We are a leading provider of comprehensive data analytics and actuarial services. With cutting-edge technology and highly skilled professionals, we empower businesses to make informed decisions and mitigate risks effectively.
                  </motion.p>
                </div>
     {/* Key Values */}
              <motion.div
                     initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
              >
                {[
                  { label: "Advanced Analytics", desc: "Statistical modeling & predictive insights" },
                  { label: "Risk Mitigation", desc: "Actuarial expertise across industries" },
                  { label: "Actionable Intelligence", desc: "Data-driven decisions for growth" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-lg border-2 border-cyan-300/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
                  >
                    {/* <div className="text-3xl mb-2">{item.icon}</div> */}
                    <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-slate-200">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
                {/* CTA Buttons */}
                <motion.div
                     initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg  hover:shadow-xl  transition-all flex items-center justify-center gap-2"
                  >
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="/contact-us"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    Get Started Today
                  </motion.a>
                </motion.div>

               
              </motion.div>

         
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-10 relative overflow-hidden bg-secondary-50 dark:bg-secondary-900">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #0891b2 0%, transparent 50%)",
              backgroundSize: "100% 100%"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full mb-6 opacity-80 shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              
              <motion.h2 
                className="text-4xl font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Our Core Services
              </motion.h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your unique business needs
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {loading ? (
                <div className="col-span-full flex justify-center py-12">
                  <LoadingSpinner />
                </div>
              ) : (
                services.slice(0, 4).map((service, idx) => {
                const gradients = [
                  'from-blue-500 to-cyan-500',
                  'from-emerald-500 to-teal-500', 
                  'from-primary-500 to-primary-600',
                  'from-orange-500 to-red-500'
                ];
                return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/services?service=${service.id}`}>
                    <div className="relative h-full cursor-pointer">
                      {/* Background Gradient Blur */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Card Content */}
                      <div className="relative bg-white dark:bg-secondary-800 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    

                        {/* Title */}
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>

                        {/* Description */}
                        <div className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: service.description?.substring(0, 100) + '...' || 'No description available' }} />

                        {/* CTA Link */}
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-2 transition-all"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
              })
              )}
            </div>

            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore All Services <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Insights Highlights */}
        <section className="py-10 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, #0891b2 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)",
              backgroundSize: "100% 100%"
            }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="insights-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0891b2" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#insights-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 bg-primary-500 rounded-full mb-6 opacity-80 shadow-lg"
            >
              <Sparkles className="w-7 h-7 text-white" />
            </motion.div>              <motion.h2 
                className="text-4xl  font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0891b2, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Latest Insights
              </motion.h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Stay informed with our latest thought leadership and industry expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {loading ? (
                <div className="col-span-full flex justify-center py-12">
                  <LoadingSpinner />
                </div>
              ) : (
                insights.slice(0, 3).map((insight, index) => (
                  <InteractiveInsightCard key={insight.title} insight={insight} index={index} />
                ))
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-500 text-white px-8 py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Insights <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Partner Trust Indicators */}
        <section className="py-10 relative overflow-hidden">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(-45deg, transparent 0%, rgba(8, 145, 178, 0.05) 25%, transparent 50%, rgba(59, 130, 246, 0.05) 75%, transparent 100%)",
              backgroundSize: "400% 400%"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-14 h-14 bg-primary-500 rounded-full mb-6 opacity-80 shadow-lg"
              >
                <Users className="w-7 h-7 text-white" />
              </motion.div>

              <motion.h2 
                className="text-4xl  font-bold mb-4"
                style={{
                  backgroundImage: "linear-gradient(90deg, #10b981, #0891b2, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Trusted by Partners
              </motion.h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Strategic partnerships that amplify our capabilities and deliver exceptional value
              </p>
            </motion.div>

            <div className="relative">
              {/* Left Navigation Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePartnerScroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                disabled={partnerScrollAmount === 0}
              >
                <ChevronLeft className="w-6 h-6 text-primary-500 group-hover:text-primary-600 transition-colors" />
              </motion.button>

              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary-50 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary-50 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />

              {/* Partners Container */}
              <div className="overflow-hidden">
                {partnersLoading ? (
                  <div className="flex justify-center py-12">
                    <LoadingSpinner />
                  </div>
                ) : (
                  <motion.div
                    ref={partnerScrollRef}
                    className="flex gap-6 w-max"
                    animate={{ x: -partnerScrollAmount }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {[...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    whileHover={{ y: -8, scale: 1.08 }}
                    className="group flex-shrink-0 w-56"
                  >
                    <a 
                      href={partner.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                      {/* Glowing background effect */}
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"]
                        }}
                        transition={{ duration: 5, repeat: 0, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      <div className="relative p-6">
                        <motion.div 
                          transition={{ duration: 0.8 }}
                          className="w-full h-20 bg-gradient-to-br from-primary-500/10 to-primary-500/10 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold text-primary group-hover:from-primary-500/20 group-hover:to-primary-500/20 transition-all relative overflow-hidden"
                        >
                          {/* Pulsing glow */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-500/20 w-32 h-16 rounded-xl"
                          />
                          <Image className="max-h-full max-w-full object-contain" src={partner.image} alt={partner.name} width={200} height={80} />
                        </motion.div>

                        <div className="relative">
                          <h3 className="text-sm font-bold text-secondary-900 dark:text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                            {partner.name}
                          </h3>
                    
                        </div>
                      </div>
                      </div>
                    </a>
                  </motion.div>
                  ))}
                  </motion.div>
                )}
              </div>

              {/* Right Navigation Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePartnerScroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-primary-500 group-hover:text-primary-600 transition-colors" />
              </motion.button>
            </div>

          </div>
        </section>




           {/* CTA Section */}
      <section className="relative py-12 bg-primary-500 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 via-primary-600/60 to-white/95" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">
           Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
           Unlock the power of data-driven decision-making and accelerate your growth with our proven analytics solutions.
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
      
      {/* Insight Modal */}
      <InsightModal 
        insight={selectedInsight} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
     
    </div>
    </>
  )
}