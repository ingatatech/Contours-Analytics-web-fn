# Quick Reference Guide

## 🎯 Common Tasks

### Add a New Page

1. Create folder in `app/` (e.g., `/app/blog/`)
2. Add `page.tsx`:
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Contours Analytics',
  description: 'Page description',
};

export default function Page() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </div>
  );
}
```

### Add a New Component

1. Create in `components/ui/` or `components/layout/`
2. Follow existing component patterns:
```tsx
'use client'; // if interactive

import { motion } from 'framer-motion';

interface Props {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
    >
      {title}
    </motion.div>
  );
}
```

### Update Colors

**Option 1: CSS Variables (quick)**
```css
/* app/globals.css */
:root {
  --primary: #038bca; /* Change here */
}
```

**Option 2: Tailwind Config (comprehensive)**
```ts
// tailwind.config.ts
colors: {
  primary: {
    500: '#038bca',
    // ...
  },
}
```

### Add Animation

```tsx
import { motion } from 'framer-motion';

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Slide up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>

// Scroll trigger
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Create API Route

1. Create `app/api/your-route/route.ts`:
```tsx
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Process data
    
    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Handle GET requests
}
```

### Add Dark Mode Support

All components automatically support dark mode via:
- CSS variables (–primary, –secondary, etc.)
- Tailwind `dark:` prefix

```tsx
<div className="bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white">
  Content
</div>
```

### Update Navigation Links

Edit `Navigation.tsx` - navigationItems array:
```tsx
const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Your Page', href: '/your-page' },
  // ...
];
```

### Add to Footer

Edit `Footer.tsx` - footerLinks object:
```tsx
const footerLinks = {
  yourSection: [
    { name: 'Link Name', href: '/link' },
    // ...
  ],
};
```

---

## 🔍 Useful Patterns

### Form Handling
```tsx
const [formData, setFormData] = useState({ /* ... */ });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Process form
};
```

### Conditional Classes
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  isDark && 'dark-class'
)}>
  Content
</div>
```

### Fetch Data
```tsx
const [data, setData] = useState(null);

useEffect(() => {
  fetch('/api/endpoint')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

---

## 📦 Useful Dependencies

- **framer-motion** - Animations
- **lucide-react** - Icons
- **@headlessui/react** - Accessible components
- **clsx** - Class name utilities
- **tailwind-merge** - Merge Tailwind classes

---

## 🛠️ VS Code Extensions (Recommended)

- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **Thunder Client** or **REST Client** - API testing

---

## 🚀 Deployment Checklist

- [ ] Set environment variables in `.env.local`
- [ ] Run `npm run build` locally (test build)
- [ ] Update domain references
- [ ] Setup analytics (GA4 ID)
- [ ] Configure API endpoints
- [ ] Test all forms & API routes
- [ ] Test dark mode
- [ ] Test on mobile devices
- [ ] Run Lighthouse check
- [ ] Setup monitoring
- [ ] Configure SSL/HTTPS
- [ ] Setup backups
- [ ] Create runbooks for support

---

## 🐛 Common Issues & Fixes

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Check TS
npx tsc --noEmit

# Fix common issues
npm run lint -- --fix
```

### Dark Mode Not Working
- Check `dark:` prefix on classes
- Verify `darkMode: 'class'` in tailwind config
- Check `<html>` has `class="dark"` on toggle

### Animations Stuttering
- Check for heavy components in viewport
- Use `will-change` CSS property
- Optimize re-renders with React.memo

---

## 📚 File Structure Quick Map

```
Components to modify: components/
Pages to edit: app/
Styling: tailwind.config.ts & app/globals.css
API routes: app/api/
Utilities: lib/
Static files: public/
```

---

## 🎓 Next Level Features

### Add Blog
```tsx
// app/blog/[slug]/page.tsx
type Props = {
  params: { slug: string };
};

export default function BlogPost({ params }: Props) {
  // Fetch blog post by slug
  return <article>...</article>;
}
```

### Add Authentication
```bash
npm install @auth/nextjs
```

### Add Database
```bash
npm install @prisma/client
npm install -D prisma

npx prisma init
```

### Add Email
```bash
npm install resend # or nodemailer
```

---

## 🔗 Quick Links

- GitHub: [Your Repo URL]
- Vercel: [Your Vercel Project]
- Analytics: [Google Analytics Dashboard]
- API Docs: See `/api/*` route files

---

**Need help?**
- Check README_DEVELOPMENT.md for full guide
- See DEPLOYMENT.md for deployment help
- Review component code for patterns
