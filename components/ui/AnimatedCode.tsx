'use client'

import { motion } from "framer-motion"

export function AnimatedCode() {
{/* Animated Code-like Background */}
 return (
        <div className="absolute inset-0 opacity-20 font-mono text-blue-500 text-xs overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${i * 12.5}%`,
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: 'linear' }}
            >
              {'> const analytics = data.transform().predict()'}
            </motion.div>
          ))}
        </div>
 )
        }