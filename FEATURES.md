# Features Guide - Contours Analytics Website

## Overview

This document details all features implemented in the Contours Analytics website, including new enhancements for voice input, multi-language support, and query logging.

---

## 1. 🎨 Core Features

### 1.1 Responsive Design
- **Mobile-first approach** with breakpoints for all screen sizes
- **Tailwind CSS 4** for utility-first styling
- **Touch-friendly** navigation and interactions
- Tested on devices from 320px to 4K+ displays

### 1.2 Dark Mode Support
- **Automatic detection** of system preferences (`prefers-color-scheme`)
- **Manual toggle** via button in navigation
- **Persistent preference** stored in `localStorage`
- CSS variables (`--primary`, `--secondary`, etc.) for theme consistency
- Smooth transitions between light and dark modes

### 1.3 Animations & Interactions
- **Framer Motion** for smooth, performant animations
- **Page transitions** with fade-in and slide-up effects
- **Scroll-triggered animations** for hero sections and cards
- **Hover effects** on buttons and interactive elements
- **Staggered animations** for lists and grids

---

## 2. 🤖 AI Chat Assistant (Enhanced)

### 2.1 Multi-Language Support
The chat widget now supports **5 languages** with full UI translation:
- **English** (en)
- **Spanish** (es)
- **French** (fr)
- **German** (de)
- **Portuguese** (pt)

**Usage:**
```tsx
// Language dropdown in chat header
<select value={language} onChange={(e) => handleLanguageChange(e.target.value as Language)}>
  <option value="en">English</option>
  <option value="es">Español</option>
  <option value="fr">Français</option>
  <option value="de">Deutsch</option>
  <option value="pt">Português</option>
</select>
```

**Implementation Details:**
- All UI text is translated via `translations` object
- Speech recognition language updates dynamically
- Text-to-speech respects selected language

### 2.2 Voice Input (Web Speech API)
The assistant supports voice input for hands-free interaction:

**Features:**
- **Microphone access** via browser's Web Speech API
- **Real-time transcription** of spoken words
- **Language-specific recognition** (updates with language selection)
- **Visual feedback** showing listening status
- **Fallback message** if browser doesn't support Web Speech API

**Code Example:**
```tsx
const handleVoiceInput = () => {
  if (!recognitionRef.current) {
    alert('Voice input is not supported in your browser')
    return
  }

  if (isListening) {
    recognitionRef.current.stop()
    setIsListening(false)
  } else {
    recognitionRef.current.start()
  }
}
```

**Browser Support:**
- ✅ Chrome, Edge, Safari (iOS 14.5+)
- ✅ Firefox (experimental)
- ❌ Limited support in older browsers

### 2.3 Voice Output (Text-to-Speech)
The assistant can read responses aloud:

**Features:**
- **Automatic playback** of bot responses (optional)
- **Manual playback** button for any previous bot message
- **Language-aware** speech synthesis
- **Abort capability** to stop speaking mid-sentence
- **Visual feedback** showing when audio is playing

**Code Example:**
```tsx
const speakText = (text: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    syntesisRef.current = new SpeechSynthesisUtterance(text)
    syntesisRef.current.lang = `${language}-${language.toUpperCase()}`
    
    syntesisRef.current.onstart = () => setIsSpeaking(true)
    syntesisRef.current.onend = () => setIsSpeaking(false)
    
    window.speechSynthesis.speak(syntesisRef.current)
  }
}
```

### 2.4 Query Logging & Analytics
All chat queries are logged for analytics and improvement:

**Logged Data:**
- User message
- Bot response
- Timestamp
- Language used
- Input method (text/voice)

**API Endpoint:**
```
POST /api/analytics/log-query
```

**Payload:**
```json
{
  "timestamp": "2025-11-09T10:30:00.000Z",
  "userMessage": "What are your services?",
  "language": "en",
  "botResponse": "We offer comprehensive data analytics...",
  "method": "chat"
}
```

**Response Retrieval:**
```
GET /api/analytics/log-query?language=en
```

Returns all logs, optionally filtered by language.

**Console Logging:**
All queries are logged to the browser console for debugging:
```
[Chat Query Log] {timestamp, userMessage, language, botResponse, method}
```

---

## 3. 📱 Smart Conversation

### 3.1 Intent Recognition
The bot recognizes common intents and provides contextual responses:

| Intent | Keywords | Response |
|--------|----------|----------|
| Greeting | hello, hi, hola, bonjour | Welcome message |
| Services | services, offerings | List of services |
| Pricing | price, pricing, cost | Pricing inquiry guidance |
| Contact | contact, email, reach | Contact information |
| Team | team, people, staff | Team information |
| Default | (any other) | Generic helpful response |

### 3.2 Message History
- Messages persist during the session
- Timestamps shown for each message
- User and bot messages are visually distinct
- Auto-scroll to latest message
- Clear visual indicator when chat is empty

---

## 4. 🎯 Page-Specific Features

### 4.1 Homepage
- **Animated Hero Section** with dynamic background shapes
- **KPI Counter** with auto-animating numbers on scroll
- **Services Overview** with grid layout
- **Call-to-Action** buttons for key conversions
- **Scroll-triggered animations** for all major sections

### 4.2 About Page (`/about`)
- Company mission and vision
- Leadership team section with placeholder images
- Key achievements timeline
- Company values and culture

### 4.3 Services Page (`/services`)
- **4 Main Service Categories:**
  - Data Analytics
  - Actuarial Services
  - Business Intelligence
  - Credit Rating
- **3 Sub-Services per Category** with detailed descriptions
- **Interactive Filter Component** to filter services by category
- Layout animations on filter changes

### 4.4 Approach Page (`/approach`)
- **5-Step Process Visualization:**
  1. Understand
  2. Collect
  3. Analyze
  4. Visualize
  5. Implement
- Visual connectors between steps
- Core principles section
- Methodology explanation

### 4.5 Insights Page (`/insights`)
- **Blog/Knowledge Hub** with article cards
- Category filtering (All, Analytics, Actuarial, BI, Credit)
- Read time estimates
- Newsletter signup form
- Publication dates

### 4.6 Partners Page (`/partners`)
- Strategic partners showcase
- Partnership benefits section
- Call-to-action for partnership inquiries
- Partner logos/names grid

### 4.7 Contact Page (`/contact`)
- **Contact Form** with fields:
  - Name
  - Email
  - Company
  - Message
- **Contact Information:**
  - Email address
  - Phone number
  - Physical address
- Form validation and success feedback
- Connected to `/api/contact` backend

---

## 5. 🔒 Accessibility & SEO

### 5.1 Accessibility (WCAG 2.1)
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Alt text placeholders for images
- Focus indicators on interactive elements

### 5.2 SEO Optimization
- Meta tags on all pages
- Open Graph for social sharing
- Structured data (Schema.org)
- GA4 analytics integration
- Canonical URLs
- Sitemap-ready structure

### 5.3 Meta Tags
- Title tags unique per page
- Meta descriptions
- Keywords metadata
- Twitter Card support
- Open Graph images

---

## 6. ⚙️ Configuration

### 6.1 Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.contoursanalytics.com
```

### 6.2 Theme Customization
Edit `app/globals.css`:
```css
:root {
  --primary: #038bca;        /* Main cyan color */
  --secondary: #f1f5f9;      /* Light gray backgrounds */
  --accent: #06b6d4;         /* Bright cyan accent */
}
```

### 6.3 Color Palette
- **Primary:** `#038bca` (Cyan)
- **Secondary:** Slate grays (`#0f172a` to `#f8fafc`)
- **Accent:** `#06b6d4` (Bright Cyan)
- **Success:** Green variants
- **Warning:** Amber variants
- **Error:** Red variants

---

## 7. 🚀 Performance

### 7.1 Optimization Techniques
- **Image optimization** via Next.js Image component
- **Code splitting** for faster initial load
- **CSS purging** removes unused styles
- **Tree-shaking** reduces bundle size
- **Lazy loading** for components below the fold

### 7.2 Performance Targets
- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3.5s

### 7.3 Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

---

## 8. 📊 Analytics Integration

### 8.1 GA4 Setup
```tsx
// In app/layout.tsx
{gaId && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
    <script dangerouslySetInnerHTML={{...}} />
  </>
)}
```

### 8.2 Events Tracked
- Page views
- Button clicks (CTAs)
- Form submissions
- Chat interactions
- Chat queries (via `/api/analytics/log-query`)

---

## 9. 🔌 Backend Integration

### 9.1 Contact Form API
```
POST /api/contact
```

**Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "I'm interested in your services"
}
```

### 9.2 Chat Analytics API
```
POST /api/analytics/log-query
GET /api/analytics/log-query?language=en
```

### 9.3 Future Integrations
- OpenAI API for advanced chat
- SendGrid for email notifications
- Cloudinary for image management
- Stripe for payments (if applicable)
- Calendar/scheduling APIs

---

## 10. 🛠️ Development

### 10.1 Running Locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### 10.2 Building for Production
```bash
npm run build
npm start
```

### 10.3 Linting
```bash
npm run lint
```

### 10.4 Development vs Production
- **Development:** Hot reload, source maps, verbose logging
- **Production:** Minified, optimized, cached

---

## 11. 📝 Future Enhancements

### Planned Features
- [ ] Advanced chatbot with OpenAI integration
- [ ] Persistent chat history (database)
- [ ] User authentication and profiles
- [ ] Customer testimonials section
- [ ] Case studies with detailed analysis
- [ ] Video tutorials and webinars
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Mobile app (React Native/Flutter)
- [ ] Real-time notifications
- [ ] Advanced search functionality

### Database Integration
- User and chat history storage
- Analytics data warehouse
- CMS for blog/insights
- Contact form submissions

### External Services
- OpenAI GPT-4 for intelligent responses
- SendGrid for email delivery
- Cloudinary for image hosting
- Stripe for payments
- Auth0 for authentication

---

## 12. 📞 Support & Troubleshooting

### Common Issues

**Dark mode not working:**
- Check if `html.dark` class is being applied
- Verify CSS variables are updated
- Clear localStorage and refresh

**Voice input not working:**
- Check browser support (Chrome/Edge/Safari)
- Ensure microphone permissions are granted
- Try different language selection

**Chat not responding:**
- Check console for errors
- Verify API endpoint is accessible
- Check network tab in DevTools

### Getting Help
- 📧 Email: info@contoursanalytics.com
- 📱 Contact form: `/contact`
- 💬 Chat widget: Click the message icon
- 🐛 Report bugs: GitHub Issues

---

## 13. 📄 License & Disclaimer

This website and all features are proprietary to Contours Analytics. All rights reserved.

**Last Updated:** November 9, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
