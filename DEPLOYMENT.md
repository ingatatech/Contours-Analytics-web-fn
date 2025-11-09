# Deployment Guide - Contours Analytics

This guide covers deploying the Contours Analytics website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is optimized for Next.js and provides the best experience.

#### Prerequisites
- Vercel account (free tier available)
- GitHub account with repo access

#### Steps

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Select `contours-analytics-fn` folder as root
   - Click "Deploy"

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_GA_ID=your_ga_id
     NEXT_PUBLIC_API_URL=https://api.contoursanalytics.com
     API_SECRET_KEY=your_secret_key
     ```

4. **Custom Domain**
   - Settings → Domains
   - Add your custom domain
   - Update DNS records as shown

#### Auto-Deployment

After connecting, every push to `main` automatically deploys to production.

---

### Option 2: Docker + Any Server

Deploy to your own infrastructure or managed container services (AWS ECS, Google Cloud Run, Azure Container Apps, etc.).

#### Build Docker Image

```bash
docker build -t contours-analytics-fn .
```

#### Push to Registry

```bash
# Docker Hub
docker tag contours-analytics-fn:latest your-username/contours-analytics-fn:latest
docker push your-username/contours-analytics-fn:latest

# AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
docker tag contours-analytics-fn:latest YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/contours-analytics-fn:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/contours-analytics-fn:latest
```

#### Deploy to Cloud Services

**AWS ECS:**
```bash
# Create task definition using Docker image
# Create service with auto-scaling
# Setup ALB for load balancing
```

**Google Cloud Run:**
```bash
gcloud run deploy contours-analytics-fn \
  --image gcr.io/YOUR_PROJECT/contours-analytics-fn \
  --platform managed \
  --region us-central1 \
  --set-env-vars NEXT_PUBLIC_GA_ID=your_ga_id
```

**Azure Container Apps:**
```bash
az containerapp create \
  --name contours-analytics-fn \
  --resource-group my-resource-group \
  --image your-registry.azurecr.io/contours-analytics-fn:latest
```

---

### Option 3: Traditional Server (VPS/Dedicated)

For complete control over infrastructure.

#### Prerequisites
- Ubuntu 20.04+ server
- Node.js 20+
- Nginx or Apache
- SSL certificate (Let's Encrypt)
- Domain name

#### Setup Steps

1. **SSH into Server**
   ```bash
   ssh ubuntu@your-server-ip
   ```

2. **Install Dependencies**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo apt-get install -y nginx certbot python3-certbot-nginx git
   ```

3. **Clone Repository**
   ```bash
   cd /var/www
   sudo git clone https://github.com/yourusername/contours-analytics.git
   cd contours-analytics/contours-analytics-fn
   ```

4. **Install & Build**
   ```bash
   npm install
   npm run build
   ```

5. **Create `.env.local`**
   ```bash
   sudo nano .env.local
   ```
   Add:
   ```
   NEXT_PUBLIC_GA_ID=your_ga_id
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   API_SECRET_KEY=your_secret_key
   NODE_ENV=production
   ```

6. **Setup Nginx Reverse Proxy**
   ```bash
   sudo nano /etc/nginx/sites-available/contours-analytics
   ```
   
   ```nginx
   upstream contours {
     server localhost:3000;
   }

   server {
     server_name contoursanalytics.com www.contoursanalytics.com;

     location / {
       proxy_pass http://contours;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/contours-analytics /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Setup SSL**
   ```bash
   sudo certbot --nginx -d contoursanalytics.com -d www.contoursanalytics.com
   ```

9. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   cd /var/www/contours-analytics/contours-analytics-fn
   pm2 start npm --name "contours" -- start
   pm2 startup
   pm2 save
   ```

10. **Auto-Updates**
    ```bash
    # Create cron job for updates
    0 2 * * * cd /var/www/contours-analytics/contours-analytics-fn && git pull && npm install && npm run build && pm2 restart contours
    ```

---

## 📊 Environment Configuration

### Production Environment Variables

Create `.env.local` in project root:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX

# API Configuration
NEXT_PUBLIC_API_URL=https://api.contoursanalytics.com
API_SECRET_KEY=your_super_secret_key_12345

# Node Environment
NODE_ENV=production

# Optional: CDN
NEXT_PUBLIC_CDN_URL=https://cdn.contoursanalytics.com
```

### GitHub Secrets (for CI/CD)

Set these in GitHub → Repository Settings → Secrets:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
GA_ID=G_XXXXXXXXXX
DOCKER_USERNAME=your_docker_username
DOCKER_PASSWORD=your_docker_password
```

---

## 🔒 Security Considerations

### Before Going Live

- [ ] Update `contoursanalytics.com` domain references to actual domain
- [ ] Set strong `API_SECRET_KEY`
- [ ] Enable HTTPS/SSL everywhere
- [ ] Configure CORS properly
- [ ] Setup Content Security Policy (CSP) headers
- [ ] Enable rate limiting on API routes
- [ ] Add Web Application Firewall (WAF)
- [ ] Setup DDoS protection
- [ ] Enable monitoring and alerting

### Security Headers (Nginx)

```nginx
# Add to Nginx config
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

---

## 📈 Performance Optimization

### Image Optimization

Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority
/>
```

### Caching Headers (Nginx)

```nginx
# Static assets - cache for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$ {
  expires 365d;
  add_header Cache-Control "public, immutable";
}

# HTML - cache for 1 hour
location ~* \.html$ {
  expires 1h;
  add_header Cache-Control "public, must-revalidate";
}
```

### CDN Integration

```tsx
// In next.config.ts
const isProd = process.env.NODE_ENV === 'production';

export default {
  images: {
    unoptimized: !isProd,
    domains: ['cdn.contoursanalytics.com'],
  },
};
```

---

## 🐛 Monitoring & Debugging

### Setup Monitoring

**Vercel Insights:**
```tsx
// Already included with Vercel
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return <>
    <YourApp />
    <Analytics />
  </>;
}
```

**Sentry Error Tracking:**
```bash
npm install @sentry/nextjs
```

```tsx
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
});
```

### Log Aggregation

Setup with services like:
- Datadog
- LogRocket
- Splunk
- ELK Stack

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow

The `.github/workflows/ci-cd.yml` file automatically:
1. Runs linter on every push
2. Builds the project
3. Runs tests (when available)
4. Deploys to Vercel on merge to main

### Manual Deployment

```bash
# Build and test locally
npm run build
npm run lint

# Deploy to Vercel
vercel --prod

# Or deploy with Docker
docker build -t contours-analytics-fn .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GA_ID=$GA_ID \
  -e NEXT_PUBLIC_API_URL=$API_URL \
  contours-analytics-fn
```

---

## 📞 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Check Node version
node --version  # Should be 18+
```

### Performance Issues

```bash
# Analyze bundle size
npm install -g next-bundle-analyzer
npx next-bundle-analyzer
```

### 404 Errors After Deploy

- Check that all routes are properly defined in `app/` directory
- Verify `.next` folder is built
- Check server logs for errors

---

## 📞 Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Contact: devops@contoursanalytics.com

---

**Last Updated**: November 2024
