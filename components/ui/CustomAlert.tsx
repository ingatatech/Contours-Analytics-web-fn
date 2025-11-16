'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react'
import { useEffect } from 'react'

interface CustomAlertProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message: string
  type?: 'error' | 'success' | 'info' | 'warning'
  autoClose?: boolean
  autoCloseDuration?: number
}

export default function CustomAlert({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  autoClose = true,
  autoCloseDuration = 3000,
}: CustomAlertProps) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, autoCloseDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, autoCloseDuration, onClose])

  const alertConfig = {
    error: {
      bgColor: 'bg-red-500',
      textColor: 'text-white',
      icon: AlertCircle,
      iconColor: 'text-white',
    },
    success: {
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      icon: CheckCircle,
      iconColor: 'text-white',
    },
    info: {
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
      icon: Info,
      iconColor: 'text-white',
    },
    warning: {
      bgColor: 'bg-amber-500',
      textColor: 'text-white',
      icon: AlertCircle,
      iconColor: 'text-white',
    },
  }

  const config = alertConfig[type]
  const Icon = config.icon

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-4 right-4 max-w-xs w-full z-[9999] ${config.bgColor} rounded-lg shadow-lg overflow-hidden text-white`}
        >
          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: autoCloseDuration / 1000, ease: 'linear' }}
            className="h-0.5 bg-white/30 origin-left absolute top-0 left-0 right-0"
          />

          <div className="p-4 flex items-start gap-3">
            {/* Icon */}
            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />

            {/* Content */}
            <div className="flex-1 min-w-0">
              {title && (
                <h4 className={`font-semibold text-sm ${config.textColor} mb-0.5`}>
                  {title}
                </h4>
              )}
              <p className={`text-xs ${config.textColor} line-clamp-2`}>
                {message}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
