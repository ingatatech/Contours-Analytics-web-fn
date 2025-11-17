'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Mic, Loader } from 'lucide-react'
import CustomAlert from './CustomAlert'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ConversationData {
  id: string
  title: string
  userId?: string
  createdAt: string
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
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [apiBaseUrl] = useState(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004/api')
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info' as 'error' | 'success' | 'info' | 'warning',
  })
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  // Helper function to show custom alert
  const showAlert = (message: string, title: string = '', type: 'error' | 'success' | 'info' | 'warning' = 'info') => {
    setAlertConfig({
      isOpen: true,
      title,
      message,
      type,
    })
  }

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
    
    // Create a new conversation when widget is first opened
    if (isOpen && !conversationId) {
      initializeConversation()
    }
  }, [])

  // Initialize conversation with backend
  const initializeConversation = async (): Promise<string | null> => {
    try {
      const response = await fetch(`${apiBaseUrl}/chat/conversations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Chat - ${new Date().toLocaleDateString()}`,
          userId: undefined, // Optional: add user ID if you track users
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const newConversationId = data.data.id
        setConversationId(newConversationId)
        return newConversationId
      } else {
        console.error('Failed to create conversation')
        return null
      }
    } catch (error) {
      console.error('Error initializing conversation:', error)
      return null
    }
  }

  // Create conversation when widget opens
  useEffect(() => {
    if (isOpen && !conversationId) {
      initializeConversation()
    }
  }, [isOpen])

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
      showAlert(translatedUI.voiceError, 'Voice Input', 'warning')
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
    // Make sure conversation is initialized
    let currentConversationId = conversationId
    if (!currentConversationId) {
      showAlert('Initializing chat...', 'Starting Conversation', 'info')
      currentConversationId = await initializeConversation()
      if (!currentConversationId) {
        showAlert('Failed to initialize chat. Please try again.', 'Error', 'error')
        return
      }
    }

    if (!inputValue.trim() || isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    const userText = inputValue
    setInputValue('')
    setIsLoading(true)
    
    try {
      // Send message to backend
      const response = await fetch(
        `${apiBaseUrl}/chat/conversations/${currentConversationId}/message`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText }),
        }
      ) 

      if (response.ok) {
        const data = await response.json()
        const assistantMessage: Message = {
          id: data.data.assistantMessage.id,
          text: data.data.assistantMessage.content,
          sender: 'bot',
          timestamp: new Date(),
        }
        
        setMessages(prev => [...prev, assistantMessage])
      } else {
        const errorData = await response.json()
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `Error: ${errorData.message || 'Failed to get response'}`,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2 sm:p-0">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 lg:w-[28rem] h-[60vh] sm:h-96 max-h-[600px] max-w-md bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-3 sm:p-4 flex justify-between items-center flex-shrink-0">
              <h3 className="font-bold text-base sm:text-lg truncate pr-2">{translatedUI.title}</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-500/90 p-1.5 sm:p-1 rounded-lg transition flex-shrink-0" aria-label="Close">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-slate-500 dark:text-slate-400 py-4 sm:py-8">
                  <p className="text-sm sm:text-base">Start a conversation</p>
                </div>
              )}
              {messages.map(msg => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-xs px-3 py-2 rounded-lg text-xs sm:text-sm break-words ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'}`}>
                    <p>{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 px-3 sm:px-4 py-2 sm:py-4 space-y-2 flex-shrink-0">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)} 
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()} 
                  placeholder={translatedUI.placeholder} 
                  disabled={isLoading}
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-xs sm:text-sm disabled:opacity-50" 
                />
                <button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !inputValue.trim()}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-primary-500 text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {isLoading ? <Loader className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" /> : <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>
              </div>
              <button 
                onClick={startVoiceInput} 
                disabled={isListening || isLoading} 
                className="w-full flex items-center justify-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 text-xs sm:text-sm"
              >
                <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {isListening ? translatedUI.listening : translatedUI.voice}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-4 right-4 sm:relative sm:bottom-0 sm:right-0 p-3 sm:p-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0" 
        aria-label="Open chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <CustomAlert
        isOpen={alertConfig.isOpen}
        onClose={() => setAlertConfig({ ...alertConfig, isOpen: false })}
        title={alertConfig.title}
        message={alertConfig.message}
        type={alertConfig.type}
      />
    </div>
  )
}
