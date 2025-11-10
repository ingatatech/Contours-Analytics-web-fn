'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Users, MessageSquare } from 'lucide-react'


const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    contact: 'info@contoursanalytics.com',
    href: 'mailto:info@contoursanalytics.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    contact: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    contact: 'New York, NY 10001',
    href: '#',
    gradient: 'from-purple-500 to-pink-500'
  }
]

const features = [
  {
    icon: Clock,
    title: '24h Response Time',
    description: 'We respond to all inquiries within 24 hours'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Direct access to our senior consultants'
  },
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'Complimentary 30-minute strategy session'
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
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Get in Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to transform your business with data-driven insights? Let's start the conversation.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-secondary-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">
                Choose your preferred way to reach us. We're here to help!
              </p>
            </div>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 p-6 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-2">
                        {method.description}
                      </p>
                      <p className="text-secondary-900 dark:text-white font-medium">
                        {method.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
              <div className="relative glass border border-blue-200/20 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
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
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 text-secondary-900 dark:text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
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
