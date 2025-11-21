'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Send } from 'lucide-react'

const footerLinks = {

  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Services', href: '/services' },
    { name: 'Insights', href: '/insights' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
]

export default function Footer() {
  return (
    <footer className="relative bg-primary-500 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
        {/* Main Footer Content */}
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="flex items-center mb-6 group">
                  <div className="relative p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all">
                    <Image
                      src="/logo.jpeg"
                      alt="Contours Analytics"
                      width={200}
                      height={80}
                      className="h-10 w-auto"
                    />
                  </div>
                </Link>
                
                <p className="text-white mb-8 leading-relaxed">
                  Empowering businesses with comprehensive data analytics, actuarial services, 
                  and business intelligence solutions that drive sustainable growth and success.
                </p>

              
              </motion.div>
            </div>

          
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-white-500 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
                <div className="space-y-1">
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">Contacts</h3>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white hover:text-white-500 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-white-500" />
                    </div>
                    <span>contoursanalytics@gmail.com</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white hover:text-white-200 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span>+(250) 786 600 190</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white hover:text-white-500 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <MapPin className="w-5 h-5 white" />
                    </div>
                    <span>Kimironko , Trumph House 3rd Floor</span>
                  </motion.div>
                </div>
          </div>
        </div>

     
        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-100 py-2"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Contours Analytics. All rights reserved. | <span className="text-sm text-primary-foreground/80">
              Developed by <span className="font-semibold text-white">The Ingata Technologies Ltd</span>
            </span>
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-lg flex items-center justify-center text-white hover:text-white-500 border border-slate-200 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}