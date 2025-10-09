# Performance Optimization Checklist

> **Complete guide for optimizing website performance and Core Web Vitals**

## 📊 Current Performance Status

### Target Metrics (Lighthouse Score)
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## ✅ Implemented Optimizations

### 🖼 Image Optimization
- [x] Next.js Image component for all images
- [x] WebP format for optimized images
- [x] Proper image sizing (width/height attributes)
- [x] Lazy loading for below-fold images
- [x] Priority loading for hero images
- [x] Organized in `/images/` folder
- [x] Removed duplicate/unused images

**File Locations:**
```
public/images/neezar.jpg              # Main profile (30KB)
public/images/neezar-hero-small.webp  # Hero optimized (15KB)
```

**Implementation:**
```tsx
// Above-fold (Hero section)
<Image src="/images/neezar.jpg" priority width={320} height={320} />

// Below-fold
<Image src="/images/project.png" loading="lazy" width={600} height={400} />
```

### 🎨 Asset Organization
- [x] Logos grouped in `/logos/` folder
- [x] Audio files in `/assets/audio/`
- [x] Documents in `/assets/documents/`
- [x] Clear folder structure
- [x] Removed unused files (logo-new.svg, next.svg, vercel.svg)

### 🎵 Audio Optimization
- [x] Preloaded in custom `useSound` hook
- [x] Volume set to 30% (not jarring)
- [x] Error handling for autoplay restrictions
- [x] Cleanup on unmount to prevent memory leaks

**File:** `hooks/useSound.ts`
```tsx
// Optimized audio loading
useEffect(() => {
  audioRef.current = new Audio(soundFile);
  audioRef.current.volume = 0.3;
  return () => {
    audioRef.current?.pause();
    audioRef.current = null;
  };
}, [soundFile]);
```

### 📝 Code Optimization
- [x] Server Components by default
- [x] Client Components only when needed
- [x] Proper use of `"use client"` directive
- [x] Component organization (sections/, common/, layout/)
- [x] No unnecessary re-renders

### 🎭 Animation Performance
- [x] Framer Motion with GPU-accelerated properties
- [x] `will-change` CSS for animated elements
- [x] Stagger children for smooth transitions
- [x] Above-fold animations use `animate` (immediate)
- [x] Below-fold animations use `whileInView` (on scroll)

**Best Practice:**
```tsx
// GPU-accelerated properties: opacity, transform
const itemVariants = {
  hidden: { opacity: 0, y: 30 },  // transform: translateY
  visible: { opacity: 1, y: 0 }
};

// Avoid animating: width, height, top, left
```

### 🔤 Font Optimization
- [x] Next.js Font optimization (`next/font/local`)
- [x] Font display: swap (prevents FOIT)
- [x] Variable fonts for fewer requests
- [x] Font subsetting (only used characters)

**File:** `config/fonts.ts`
```tsx
export const satoshi = localFont({
  src: "../public/fonts/WEB/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap"  // Prevents Flash of Invisible Text
});
```

### 📦 Bundle Optimization
- [x] Tree shaking enabled
- [x] Dynamic imports for heavy components
- [x] Code splitting by route (automatic in Next.js)
- [x] No duplicate dependencies

---

## 🚀 Further Optimization Opportunities

### 🖼 Advanced Image Techniques

#### 1. Responsive Images
Add multiple sizes for different devices:
```tsx
<Image
  src="/images/hero.jpg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
/>
```

#### 2. Blur Placeholder
Add blur-up effect while loading:
```tsx
<Image
  src="/images/profile.jpg"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Tiny base64
/>
```

#### 3. Convert Remaining Images to WebP
```bash
# Install cwebp (Google WebP tool)
# macOS: brew install webp
# Windows: Download from Google

# Convert images
cwebp -q 80 input.jpg -o output.webp

# Or batch convert
for file in public/project/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

### ⚡ Code Splitting

#### 1. Dynamic Imports for Heavy Components
```tsx
import dynamic from "next/dynamic";

// Heavy chart library - load only when needed
const Chart = dynamic(() => import("@/components/Chart"), {
  loading: () => <div>Loading chart...</div>,
  ssr: false  // Skip server-side rendering if not needed
});
```

#### 2. Route-based Code Splitting
Already automatic with App Router, but verify:
```tsx
// Each page is automatically split
app/blog/page.tsx       → separate bundle
app/project/page.tsx    → separate bundle
```

### 🗜 Bundle Size Reduction

#### 1. Analyze Current Bundle
```bash
npm install -D @next/bundle-analyzer

# Add to next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

#### 2. Replace Heavy Dependencies
Check for lighter alternatives:
- Lodash → Individual imports or native methods
- Moment.js → date-fns or Day.js (smaller)
- Full icon libraries → Import only needed icons

#### 3. Remove Unused Code
```bash
# Check for unused exports
npm install -D ts-prune
npx ts-prune
```

### 📄 Static Generation

#### 1. Pre-render Blog Posts
```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// This generates all blog pages at build time
```

#### 2. Incremental Static Regeneration
For dynamic content that changes occasionally:
```tsx
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const data = await fetchData();
  return <Content data={data} />;
}
```

### 🌐 CDN & Caching

#### 1. Vercel Edge Network
- Automatic when deployed to Vercel
- Assets served from nearest location
- Automatic cache headers

#### 2. Custom Cache Headers
```tsx
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 🎯 Third-Party Script Optimization

#### 1. Use Next.js Script Component
```tsx
import Script from "next/script";

// In layout.tsx
<Script
  src="https://analytics.example.com/script.js"
  strategy="lazyOnload"  // Load after page is interactive
/>
```

#### 2. Self-Host Analytics
Instead of Google Analytics, consider:
- Plausible (lightweight, privacy-friendly)
- Umami (self-hosted, open-source)
- Vercel Analytics (built-in)

### 🔧 Build Configuration

#### 1. Enable SWC Minification
```js
// next.config.js
module.exports = {
  swcMinify: true,  // Faster than Terser
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
```

#### 2. Optimize CSS
```js
module.exports = {
  experimental: {
    optimizeCss: true,  // Use lightningcss
  },
};
```

---

## 🧪 Testing Performance

### Local Testing

#### 1. Lighthouse CI
```bash
npm install -g @lhci/cli

# Run audit
lhci autorun --upload.target=temporary-public-storage

# Or in package.json
"scripts": {
  "lighthouse": "lhci autorun"
}
```

#### 2. WebPageTest
- Visit [webpagetest.org](https://www.webpagetest.org)
- Test from multiple locations
- Analyze waterfall chart

#### 3. Chrome DevTools
```
1. Open DevTools (F12)
2. Lighthouse tab → Generate report
3. Performance tab → Record page load
4. Network tab → Check request sizes
```

### Performance Monitoring

#### 1. Vercel Analytics
```tsx
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### 2. Real User Monitoring (RUM)
Track actual user metrics:
```tsx
// lib/analytics.ts
export function reportWebVitals(metric) {
  const { name, value, id } = metric;
  
  // Send to analytics
  window.gtag?.("event", name, {
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}

// app/layout.tsx
export default function RootLayout({ children }) {
  useReportWebVitals(reportWebVitals);
  return <>{children}</>;
}
```

---

## 📋 Performance Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Check bundle size: `ANALYZE=true npm run build`
- [ ] Lighthouse score 90+ for all metrics
- [ ] Test on slow 3G network (Chrome DevTools)
- [ ] Verify images are optimized (<200KB each)
- [ ] Check for console errors
- [ ] Test dark mode performance

### Post-Deployment
- [ ] Run Lighthouse on production URL
- [ ] Test Core Web Vitals with PageSpeed Insights
- [ ] Monitor Vercel Analytics for real metrics
- [ ] Check loading time from different regions
- [ ] Verify CDN cache headers
- [ ] Test on mobile devices (real, not just emulator)

### Monthly Review
- [ ] Analyze bundle size trends
- [ ] Review and optimize heaviest pages
- [ ] Update dependencies (check for performance improvements)
- [ ] Clean up unused code/assets
- [ ] Re-run performance audits
- [ ] Check for new Next.js optimizations

---

## 🎯 Quick Wins (Easy Optimizations)

### 1. Add `loading="lazy"` to All Below-Fold Images
```tsx
// Before
<Image src="/project/screenshot.png" width={600} height={400} />

// After
<Image src="/project/screenshot.png" width={600} height={400} loading="lazy" />
```

### 2. Preconnect to External Domains
```tsx
// app/layout.tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://firebase.googleapis.com" />
</head>
```

### 3. Add Width/Height to All Images
Prevents layout shift (CLS):
```tsx
// Before - causes CLS
<Image src="/logo.png" />

// After - reserves space
<Image src="/logo.png" width={200} height={50} />
```

### 4. Use CSS `contain` for Fixed Sections
```css
/* For navbar, footer, or any fixed-size sections */
.navbar {
  contain: layout style;
}
```

### 5. Reduce Motion for Accessibility
```tsx
// Respect user preferences
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

<motion.div
  initial={prefersReducedMotion ? "visible" : "hidden"}
  animate="visible"
  variants={itemVariants}
/>
```

---

## 📊 Benchmark Results

### Before Optimization
```
Performance: 75
LCP: 3.2s
FID: 120ms
CLS: 0.15
Bundle Size: 450KB
```

### After Optimization (Target)
```
Performance: 95+
LCP: < 2.0s
FID: < 50ms
CLS: < 0.05
Bundle Size: < 300KB
```

---

## 🔗 Resources

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Documentation
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### Monitoring
- [Vercel Analytics](https://vercel.com/analytics)
- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)

---

**Last Updated:** October 9, 2025
**Status:** ✅ Optimizations Implemented | 🚀 Further Improvements Available
