'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Users, MessageSquare, ArrowRight } from 'lucide-react'
import { AnimatedCode } from '@/components/ui/AnimatedCode'


const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    contact: 'info@contoursanalytics.com',
    href: 'mailto:info@contoursanalytics.com',
    gradient: 'from-primary-500 to-primary-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    contact: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
   gradient: 'from-primary-500 to-primary-500'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    contact: 'New York, NY 10001',
    href: '#',
    gradient: 'from-primary-500 to-primary-500'
  }
]


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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
    setIsClient(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Contact with Data Focus */}
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
              <pattern id="grid-contact" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
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
              <span className="text-sm font-medium text-blue-300">Connect With Our Experts</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl  font-bold text-white mb-6 leading-tight">
                <span className="mb-2">Let's Transform</span>{" "}
                <motion.span
                  className=" bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  Your Data Strategy
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-xl text-white leading-relaxed max-w-6xl">
                Have questions about our analytics solutions? Our team is ready to discuss your specific needs and help you achieve your business goals.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-10"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Email Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/50 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
              >
                Explore Our Services
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
            <span className="text-xs text-slate-400">Get in touch</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border border-blue-500/30 rounded-full flex justify-center items-center"
            >
              <div className="w-1 h-2 bg-blue-500 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <div className="py-10 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [-30, 0, -30]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6 opacity-80"
            >
              <MessageSquare className="w-7 h-7 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Get In <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Choose your preferred way to reach us. We're here to help and look forward to connecting with you.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  className={`absolute -inset-1 bg-gradient-to-br ${method.gradient} rounded-2xl blur-xl opacity-20`}
                />

                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200/50 dark:border-secondary-700/50 p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity }
                      }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="font-bold text-secondary-900 dark:text-white mb-2 text-lg group-hover:text-primary-500 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                      {method.description}
                    </p>
                    <p className="text-secondary-900 dark:text-white font-bold text-primary">
                      {method.contact}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative glass border border-blue-200/20 dark:border-blue-900/20 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="contact-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0891b2" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
              </div>

              <div className="relative">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                    Send us a Message
                  </h2>
                  <motion.div
                    animate={{
                      width: ["0%", "100%", "0%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full my-3"
                  />
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-200"
                  >
                    ✅ Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="actuarial">Actuarial Services</option>
                        <option value="business-intelligence">Business Intelligence</option>
                        <option value="credit-rating">Credit Rating</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
