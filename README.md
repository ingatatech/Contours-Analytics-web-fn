# 🌐 Contours Analytics - Official Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

A modern, responsive, and beautifully animated website for **Contours Analytics** - a leading provider of data analytics, actuarial services, and business intelligence solutions.

## ✨ Features

### Core Features
- 🎨 **Modern Design** - Clean, professional interface with attention to detail
- 🌙 **Dark Mode** - Automatic detection with user preference persistence
- ⚡ **Performance** - Optimized for speed with Next.js 16 and Tailwind CSS 4
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- ♿ **Accessible** - WCAG 2.1 compliant with semantic HTML
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and GA4 integration
- 📧 **Contact Form** - Fully functional with backend integration
- 🚀 **Production Ready** - Ready to deploy to Vercel, Docker, or any server

### AI Assistant Features (NEW! 🆕)
- 🤖 **Smart Chat Widget** - Intelligent conversation with context awareness
- 🎤 **Voice Input** - Hands-free interaction with Web Speech API
- 🔊 **Voice Output** - Text-to-speech responses in multiple languages
- 🌍 **Multi-Language Support** - English, Spanish, French, German, Portuguese
- 📊 **Query Logging** - Analytics tracking for continuous improvement
- 💾 **Message History** - Persistent chat history during sessions

## 📑 Pages Included

- **Home** - Hero section with CTAs, services overview, and KPI statistics
- **About** - Company mission, vision, and leadership information
- **Services** - Comprehensive service catalog with detailed descriptions
- **Approach** - 5-step methodology visualization and explanation
- **Insights** - Blog/thought leadership knowledge hub
- **Partners** - Strategic partnerships and collaborations showcase
- **Contact** - Contact form with validation and backend integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/contours-analytics.git
cd contours-analytics/contours-analytics-fn

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📚 Documentation

- 📖 **[Development Guide](README_DEVELOPMENT.md)** - Architecture, setup, and customization
- 🚀 **[Deployment Guide](DEPLOYMENT.md)** - Deploy to Vercel, Docker, or VPS
- 📋 **[Project Summary](PROJECT_SUMMARY.md)** - Complete feature overview
- ⚡ **[Quick Reference](QUICK_REFERENCE.md)** - Common tasks and patterns
- ✨ **[Features Guide](FEATURES.md)** - Detailed documentation of all features

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| Next.js | React framework | 16.0.1 |
| React | UI library | 19.2.0 |
| Tailwind CSS | Styling | 4.0 |
| Framer Motion | Animations | 12.23.24 |
| TypeScript | Type safety | 5.0 |
| Lucide React | Icons | 0.553.0 |
| Headless UI | Components | 2.2.9 |

## 🎨 Customization

### Change Primary Color

Edit `app/globals.css`:
```css
:root {
  --primary: #038bca; /* Change to your color */
}
```

### Update Company Information

- **Navigation**: Edit `components/layout/Navigation.tsx`
- **Footer**: Edit `components/layout/Footer.tsx`
- **Contact Info**: Edit `app/contact/page.tsx`

### Extend Tailwind Theme

Edit `tailwind.config.ts`:
```ts
extend: {
  colors: {
    primary: { /* ... */ },
    secondary: { /* ... */ },
  },
}
```

## 🔌 Backend Integration

Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.contoursanalytics.com
API_SECRET_KEY=your_secret_key
```

## 📊 Performance

- **Lighthouse Score**: 90+ (optimized)
- **Mobile Optimized**: First mobile-first, then desktop
- **Load Time**: <2 seconds on 4G

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

## 🧪 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📧 Support

For issues or questions:
- Email: contoursanalytics@gmail.com
- See [DEPLOYMENT.md](DEPLOYMENT.md) or [README_DEVELOPMENT.md](README_DEVELOPMENT.md)

---

**Version**: 1.0.0  
**Status**: Production Ready ✅
