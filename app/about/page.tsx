'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Lightbulb, Target, Heart, Zap, Shield } from 'lucide-react'


const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions that redefine industry standards'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards in all our engagements'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering exceptional results that exceed client expectations'
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'Building lasting partnerships through trust and transparency'
  }
]

const achievements = [
  { number: '15+', label: 'Years of Excellence', icon: Award },
  { number: '500+', label: 'Projects Delivered', icon: Target },
  { number: '50+', label: 'Global Clients', icon: Globe },
  { number: '99%', label: 'Client Satisfaction', icon: Heart }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    expertise: 'Data Science & Strategy',
    experience: '20+ years',
    description: 'Former McKinsey partner with expertise in analytics transformation'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer', 
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    description: 'Ex-Google engineer specializing in large-scale data systems'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Chief Actuarial Officer',
    expertise: 'Risk Management',
    experience: '18+ years',
    description: 'Fellow of the Institute of Actuaries with insurance expertise'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-secondary-900 dark:via-blue-900/10 dark:to-cyan-900/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0], 
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
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
            <span className="gradient-text">Who We Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed"
          >
            A leading provider of comprehensive data analytics, actuarial services, and business intelligence solutions that transform businesses worldwide
          </motion.p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
            <div className="relative glass border border-blue-200/20 p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                To empower businesses with actionable insights and innovative solutions, driving sustainable growth and success in an ever-evolving digital landscape through data-driven excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
            <div className="relative glass border border-purple-200/20 p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                To pioneer innovative solutions that redefine industry standards, leveraging cutting-edge technology and unparalleled expertise to empower businesses worldwide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as an organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">Leadership Team</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Decades of combined experience in data science, actuarial science, and business strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        <span className="font-medium">Expertise:</span> {member.expertise}
                      </p>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        <span className="font-medium">Experience:</span> {member.experience}
                      </p>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
