# Contours Analytics Website

A modern, responsive, and beautifully animated website for Contours Analytics built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**.

## 🎨 Design Features

- **Modern Color Scheme**: Primary cyan (#038bca) with complementary blues and grays
- **Dark/Light Mode**: Automatic detection with persistent user preference
- **Smooth Animations**: Powered by Framer Motion with optimized performance
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessible Components**: WCAG 2.1 compliant with semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React Version**: React 19
- **Styling**: Tailwind CSS 4 with postcss
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Components**: Headless UI
- **Language**: TypeScript
- **Package Manager**: npm/pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
cd contours-analytics-fn
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
contours-analytics-fn/
├── app/
│   ├── layout.tsx          # Root layout with Navigation, Footer, ChatWidget
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & theme variables
│   ├── about/page.tsx      # About/Who We Are page
│   ├── services/page.tsx   # Services page
│   ├── approach/page.tsx   # Our Approach page
│   ├── insights/page.tsx   # Insights/Blog page
│   ├── partners/page.tsx   # Partners page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Header with nav & dark mode toggle
│   │   ├── Footer.tsx      # Footer with links & newsletter
│   │   ├── Hero.tsx        # Homepage hero section
│   │   └── ServicesOverview.tsx  # Services cards
│   └── ui/
│       ├── AnimatedCounter.tsx   # Animated number counter
│       ├── ServiceFilter.tsx     # Filterable services list
│       └── ChatWidget.tsx        # Floating chat assistant
├── lib/
│   ├── theme.ts           # Centralized theme tokens
│   └── utils.ts           # Utility functions
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Key Features

### 1. **Responsive Navigation**
- Sticky header with smooth scrolling
- Desktop menu with service submenu
- Mobile hamburger menu with animations
- Dark/light mode toggle with persistence

### 2. **Homepage**
- Animated hero section with background elements
- KPI statistics with animated counters
- Services overview cards
- Call-to-action buttons

### 3. **Service Pages**
- Comprehensive service descriptions
- Categorized sub-services
- Interactive filters
- Lead generation CTAs

### 4. **Interactive Features**
- Animated page transitions
- Scroll-triggered animations
- Hover effects on cards
- Smooth micro-interactions

### 5. **Contact Form**
- Input validation
- Success messages
- Backend integration ready
- Responsive layout

### 6. **Floating Chat Widget**
- AI assistant placeholder
- Message history
- Ready for OpenAI integration
- Accessible keyboard navigation

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #038bca;
  --secondary: #f1f5f9;
  --accent: #06b6d4;
  /* ... more colors */
}
```

Or extend in `tailwind.config.ts`:

```ts
colors: {
  primary: {
    50: '#e0f7fa',
    // ...
    500: '#038bca',
  },
}
```

### Fonts

Currently using **Inter** from Google Fonts. To change:

1. Update `app/layout.tsx`:

```tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});
```

2. Update `tailwind.config.ts` fontFamily

### Theme Tokens

Centralized in `lib/theme.ts`:

```ts
export const theme = {
  colors: { /* ... */ },
  typography: { /* ... */ },
  spacing: { /* ... */ },
  // ... more tokens
};
```

## 🔌 Backend Integration

### Contact Form

The contact form in `app/contact/page.tsx` is ready to integrate with your backend API:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```

### Chat Widget Integration

The `ChatWidget` component is ready for OpenAI integration. Update `components/ui/ChatWidget.tsx` to connect to your backend API.

## 📊 SEO & Analytics

### Meta Tags

All pages have SEO-optimized metadata:

```tsx
export const metadata: Metadata = {
  title: 'Page Title - Contours Analytics',
  description: 'Page description...',
  keywords: 'relevant, keywords',
};
```

### Structured Data

Add schema.org markup in components for better SEO:

```tsx
<script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>
```

### GA4 Integration

Add Google Analytics 4 to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Environment Variables

Create `.env.local`:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# API Endpoints
NEXT_PUBLIC_API_URL=https://api.contoursanalytics.com

# Other configs
NODE_ENV=production
```

## 🧪 Testing

### Lighthouse

```bash
npm run build
npm start
# Then use Chrome DevTools Lighthouse tab
```

### Accessibility

Use axe DevTools browser extension or:

```bash
npm install --save-dev @axe-core/react
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 API Routes

Create API routes in `app/api/` for:

- **POST `/api/contact`** - Handle contact form submissions
- **POST `/api/chat`** - Handle chat messages (integrate with OpenAI)
- **GET `/api/services`** - Fetch services data
- **GET `/api/insights`** - Fetch blog posts/insights

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS 12+, Android 8+)

## 🔐 Security

- Input sanitization on forms
- CORS headers for API calls
- Content Security Policy (CSP) headers
- Environment variable protection

## 📄 License

Proprietary - Contours Analytics

## 📧 Support

For issues or questions, contact: contoursanalytics@gmail.com

---

**Last Updated**: November 2024
