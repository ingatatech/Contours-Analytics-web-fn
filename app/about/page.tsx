'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Globe, Lightbulb, Target, Heart, Zap, Shield, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions that redefine industry standards',
    color: 'from-primary-500 via-slate-700 to-slate-800'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards in all our engagements',
    color: 'from-primary-500 via-slate-700 to-slate-800'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering exceptional results that exceed client expectations',
    color: 'from-primary-500 via-slate-700 to-slate-800'
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'Building lasting partnerships through trust and transparency',
    color: 'from-primary-500 via-slate-700 to-slate-800'
  }
]

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Global Clients', value: '500+' },
  { label: 'Expert Team Members', value: '100+' },
  { label: 'Success Rate', value: '98%' }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    expertise: 'Data Science & Strategy',
    experience: '20+ years',
    description: 'Former McKinsey partner with expertise in analytics transformation',
    gradient: 'from-primary-500 to-primary'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer', 
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    description: 'Ex-Google engineer specializing in large-scale data systems',
    gradient: 'from-accent to-primary-500/50'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Chief Actuarial Officer',
    expertise: 'Risk Management',
    experience: '18+ years',
    description: 'Fellow of the Institute of Actuaries with insurance expertise',
    gradient: 'from-primary-500 to-primary'
  }
]

export default function AboutPage() {
  const containerRef = useRef(null)
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-secondary-950">
      {/* Hero Section - Advanced Data Science Focus */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10">
        {/* Dynamic Background with Data Visualization Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          
          {/* Animated data grid lines */}
          <motion.svg 
            className="absolute inset-0 w-full h-full opacity-10"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-about" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
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

          {/* Glowing accent orbs */}
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

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 max-w-6xl py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Data-Driven Enterprise Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl  font-bold text-white mb-6 leading-tight">
                <span className="mb-2">We Are a Leading</span>{" "}
                <motion.span
                  className=" bg-gradient-to-r from-primary-500 via-accent to-primary-500 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  Provider of Advanced Analytics
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Transforming complex data into strategic insights that drive business growth and competitive advantage
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
            >
              <motion.a
                href="#mission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/50 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
              >
                Get in Touch
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
            <span className="text-xs text-slate-400">Learn about our journey</span>
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


      {/* Mission & Vision - Side by Side Cards */}
      <section className="py-10 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [-30, 0, -30]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [30, 0, 30]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-primary-500 rounded-3xl blur-2xl opacity-30"
              />
              
              <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-10 border border-secondary-200/50 dark:border-secondary-800/50 h-full overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                {/* Animated background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity"
                    style={{ backgroundSize: "200% 200%" }}
                  />                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                    className="relative w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:shadow-xl"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed relative">
                  To empower businesses with actionable insights and innovative solutions, driving sustainable growth and success in an ever-evolving digital landscape through data-driven excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-1 bg-accent rounded-3xl blur-2xl opacity-30"
              />
              
              <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-10 border border-secondary-200/50 dark:border-secondary-800/50 h-full overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                {/* Animated background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity"
                    style={{ backgroundSize: "200% 200%" }}
                  />                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, delay: 0.5 }
                  }}
                    className="relative w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:shadow-xl"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed relative">
                  To pioneer innovative solutions that redefine industry standards, leveraging cutting-edge technology and unparalleled expertise to empower businesses worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Horizontal Cards */}
      <section className="py-10 relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="values-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#values-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
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
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-500/50 rounded-full mb-6 opacity-80"
            >
              <Lightbulb className="w-7 h-7 text-white" />
            </motion.div>

            <h2 className="text-4xl  font-bold text-secondary-900 dark:text-white mb-4">
              Core Values That <span className="bg-gradient-to-r from-primary-500 to-primary-500/50 bg-clip-text text-transparent">Drive Us</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -8 }}
                className="group cursor-pointer relative"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-20`}
                />

                <div className="relative bg-white dark:bg-secondary-900 rounded-2xl p-8 border border-secondary-200/50 dark:border-secondary-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:border-primary/50">
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative flex items-start gap-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-500/50 group-hover:bg-clip-text transition-all">
                        {value.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary-500/50/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [-30, 0, -30]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary-500/50/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [30, 0, 30]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 opacity-80"
            >
              <Users className="w-7 h-7 text-white" />
            </motion.div>

            <h2 className="text-4xl  font-bold text-secondary-900 dark:text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Decades of combined expertise in data science, actuarial science, and business strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.04 }}
                className="group cursor-pointer relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-3xl blur-2xl opacity-30`}
                />

                <div className="relative bg-white dark:bg-secondary-900 rounded-3xl overflow-hidden border border-secondary-200/50 dark:border-secondary-800/50 hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                  {/* Header with animated gradient */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className={`h-32 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    
                    {/* Floating orbs */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-xl"
                    />
                  </motion.div>
                  
                  {/* Avatar overlapping header */}
                  <div className="px-8 -mt-16 relative z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white dark:border-secondary-900 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 pt-4">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-bold mb-4">{member.role}</p>
                    
                    <div className="space-y-2 mb-4">
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-secondary-700 dark:text-secondary-300">
                          <span className="font-medium">Expertise:</span> {member.expertise}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-secondary-700 dark:text-secondary-300">
                          <span className="font-medium">Experience:</span> {member.experience}
                        </p>
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                      animate={{
                        width: ["0%", "100%", "0%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-0.5 bg-gradient-to-r from-primary-500 to-primary-500/50 rounded-full mb-4"
                    />
                    
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}