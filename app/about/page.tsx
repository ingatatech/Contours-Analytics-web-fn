'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Globe, Lightbulb, Target, Heart, Zap, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions that redefine industry standards',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards in all our engagements',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering exceptional results that exceed client expectations',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'Building lasting partnerships through trust and transparency',
    color: 'from-pink-500 to-rose-500'
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
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer', 
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    description: 'Ex-Google engineer specializing in large-scale data systems',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Chief Actuarial Officer',
    expertise: 'Risk Management',
    experience: '18+ years',
    description: 'Fellow of the Institute of Actuaries with insurance expertise',
    gradient: 'from-green-500 to-emerald-500'
  }
]

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-secondary-950">
      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-secondary-900 dark:via-secondary-950 dark:to-blue-950">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30">
                About Our Company
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-secondary-900 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Transforming Data<br />Into Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We empower businesses worldwide with comprehensive analytics, actuarial expertise, and intelligent solutions
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-secondary-600 dark:bg-secondary-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <section className="relative -mt-20 z-20 px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white dark:bg-secondary-900 rounded-3xl shadow-2xl border border-secondary-200 dark:border-secondary-800 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision - Side by Side Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-10 border border-secondary-200 dark:border-secondary-800 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                To empower businesses with actionable insights and innovative solutions, driving sustainable growth and success in an ever-evolving digital landscape through data-driven excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white dark:bg-secondary-900 rounded-3xl p-10 border border-secondary-200 dark:border-secondary-800 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                To pioneer innovative solutions that redefine industry standards, leveraging cutting-edge technology and unparalleled expertise to empower businesses worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values - Horizontal Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Core Values That <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Drive Us</span>
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
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-secondary-900 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-800 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
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
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-secondary-900 rounded-3xl overflow-hidden border border-secondary-200 dark:border-secondary-800 hover:shadow-2xl transition-all duration-300">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${member.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                {/* Avatar overlapping header */}
                <div className="px-8 -mt-16 relative z-10">
                  <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white dark:border-secondary-900 group-hover:scale-105 transition-transform duration-300`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 pt-4">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-secondary-700 dark:text-secondary-300">
                        <span className="font-medium">Expertise:</span> {member.expertise}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-secondary-700 dark:text-secondary-300">
                        <span className="font-medium">Experience:</span> {member.experience}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}