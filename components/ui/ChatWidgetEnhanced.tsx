'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Mic } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const UI_STRINGS = {
  en: { title: 'Contours Analytics Assistant', placeholder: 'Type your message...', send: 'Send', voice: 'Voice', speaking: 'Speaking...', listening: 'Listening...', voiceError: 'Voice not supported' },
  es: { title: 'Asistente de Contours Analytics', placeholder: 'Escribe tu mensaje...', send: 'Enviar', voice: 'Voz', speaking: 'Hablando...', listening: 'Escuchando...', voiceError: 'Voz no soportada' },
  fr: { title: 'Assistant Contours Analytics', placeholder: 'Tapez votre message...', send: 'Envoyer', voice: 'Voix', speaking: 'Parlant...', listening: 'À l\'écoute...', voiceError: 'Voix non supportée' },
  de: { title: 'Contours Analytics-Assistent', placeholder: 'Geben Sie Ihre Nachricht ein...', send: 'Senden', voice: 'Stimme', speaking: 'Spricht...', listening: 'Höre zu...', voiceError: 'Stimme nicht unterstützt' },
  pt: { title: 'Assistente Contours Analytics', placeholder: 'Digite sua mensagem...', send: 'Enviar', voice: 'Voz', speaking: 'Falando...', listening: 'Ouvindo...', voiceError: 'Voz não suportada' },
}

export default function ChatWidgetEnhanced() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'de' | 'pt'>('en')
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [translatedUI, setTranslatedUI] = useState(UI_STRINGS.en)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  // Initialize on client side only
  useEffect(() => {
    setMounted(true)
    
    // Try to get language from context
    try {
      const stored = localStorage.getItem('language')
      if (stored) setLanguage(stored as any)
    } catch (error) {
      // Ignore localStorage errors during SSR
    }
    
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
    }
  }, [])

  // Update UI strings when language changes
  useEffect(() => {
    const strings = UI_STRINGS[language as keyof typeof UI_STRINGS] || UI_STRINGS.en
    setTranslatedUI(strings)
  }, [language])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startVoiceInput = () => {
    if (!recognitionRef.current) {
      alert(translatedUI.voiceError)
      return
    }
    
    setIsListening(true)
    recognitionRef.current.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('')
      setInputValue(transcript)
      setIsListening(false)
    }
    recognitionRef.current.onerror = () => setIsListening(false)
    recognitionRef.current.start()
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    const userText = inputValue
    setInputValue('')
    
    // Log to analytics
    try {
      fetch('/api/analytics/log-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userMessage: userText,
          language,
          botResponse: 'pending',
          method: 'chat',
        }),
      }).catch(() => {})
    } catch {}
    
    // Generate bot response
    const responses: Record<string, string> = {
      services: 'We offer data analytics, actuarial services, business intelligence, and credit rating solutions.',
      pricing: 'Please contact us for customized pricing at contact@contoursanalytics.com',
      contact: 'You can reach us through the contact page or email info@contoursanalytics.com',
      team: 'Our team consists of experienced data scientists, actuaries, and business analysts.',
      hello: 'Hi! I\'m Contours Analytics Assistant. How can I help?',
    }
    
    let botResponseText = 'Thank you for your message. How else can I help?'
    for (const [key, response] of Object.entries(responses)) {
      if (userText.toLowerCase().includes(key)) {
        botResponseText = response
        break
      }
    }
    
    // Translate if needed
    if (language !== 'en') {
      try {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: botResponseText, targetLanguage: language }),
        })
        const data = await res.json()
        botResponseText = data.translatedText || botResponseText
      } catch (error) {
        console.error('Translation error:', error)
      }
    }
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      sender: 'bot',
      timestamp: new Date(),
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage])
      
      // Text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(botResponseText)
        utterance.lang = `${language}-${language === 'pt' ? 'BR' : language.toUpperCase()}`
        speechSynthesis.speak(utterance)
      }
    }, 500)
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-96 h-96 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">{translatedUI.title}</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-500/90 p-1 rounded-lg transition" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                  <p>Start a conversation</p>
                </div>
              )}
              {messages.map(msg => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'}`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 p-4 space-y-2">
              <div className="flex gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder={translatedUI.placeholder} className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm" />
                <button onClick={handleSendMessage} className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary/90 transition-colors"><Send className="w-4 h-4" /></button>
              </div>
              <button onClick={startVoiceInput} disabled={isListening} className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 text-sm">
                <Mic className="w-4 h-4" />
                {isListening ? translatedUI.listening : translatedUI.voice}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="p-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-500 text-white shadow-lg hover:shadow-xl transition-all duration-200" aria-label="Open chat">
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
