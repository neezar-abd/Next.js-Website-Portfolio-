# Developer Guide - Portfolio Website

> **Comprehensive guide for maintaining and developing this Next.js portfolio website**

## 📋 Table of Contents
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Component Architecture](#component-architecture)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git for version control
- VS Code (recommended)

### Installation
```bash
# Clone repository
git clone <repository-url>
cd next-app-template

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier (if configured)
```

---

## 📁 Project Structure

### Overview
```
next-app-template/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── providers.tsx       # Theme and UI providers
│   ├── about/              # About page
│   ├── blog/               # Blog with MDX
│   ├── project/            # Projects showcase
│   ├── guestbook/          # Guestbook with Firebase
│   └── kontak/             # Contact form
│
├── components/             # React components
│   ├── blog/               # Blog-specific components
│   ├── common/             # Shared components (theme-switch, counter)
│   ├── layout/             # Layout components (navbar, footer)
│   ├── sections/           # Page sections (hero, about, blog, etc.)
│   └── ui/                 # UI primitives (buttons, cards, animations)
│
├── content/                # MDX content
│   └── blog/               # Blog posts in MDX format
│
├── hooks/                  # Custom React hooks
│   └── useSound.ts         # Audio playback hook
│
├── lib/                    # Utilities and data
│   ├── data.ts             # Site data (personal info, projects, etc.)
│   ├── firebase.ts         # Firebase configuration
│   ├── mdx.ts              # MDX processing utilities
│   └── utils.ts            # Helper functions
│
├── public/                 # Static assets
│   ├── assets/             # Organized assets (audio, documents)
│   ├── images/             # Photos and images
│   ├── logos/              # Company/org logos
│   ├── project/            # Project screenshots
│   └── sertifikat/         # Certificate images
│
├── config/                 # Configuration files
│   ├── site.ts             # Site metadata and navigation
│   └── fonts.ts            # Font configuration
│
└── styles/                 # Global styles
    ├── globals.css         # Tailwind base styles
    └── satoshi.css         # Satoshi font styles
```

### Key Files Explained

#### `app/layout.tsx`
Root layout wrapping all pages. Includes:
- Font configuration (Satoshi, SF Mono)
- Theme provider setup
- Global navbar and footer
- Metadata configuration

#### `lib/data.ts`
Central data source for:
- Personal information (name, bio, contact)
- Projects list with metadata
- Skills and tech stack
- Work experience
- Certifications
- Statistics

**Usage:**
```tsx
import { personalInfo, projects, skills } from "@/lib/data";
```

#### `config/site.ts`
Site-wide configuration:
- Navigation menu items
- Social media links
- SEO metadata
- Site name and description

---

## 🏗 Component Architecture

### Organization Philosophy
Components are organized by **function and scope**:

1. **`/sections`** - Full-page sections (Hero, About, Blog, Projects)
2. **`/layout`** - Layout wrappers (Navbar, Footer, LayoutWrapper)
3. **`/blog`** - Blog-specific components (PostContent, PostHeader)
4. **`/common`** - Shared utilities (ThemeSwitch, Counter)
5. **`/ui`** - Design system primitives (Badge, Card, animations)

### Component Naming Conventions
- **PascalCase** for component files: `HeroSection.tsx`
- **Descriptive names**: `BlogListSearch.tsx` not `Search.tsx`
- **Section suffix** for page sections: `AboutSection.tsx`

### Component Best Practices

#### 1. Server vs Client Components
```tsx
// Server Component (default) - Use for static content
export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogList posts={posts} />;
}

// Client Component - Use for interactivity
"use client";
export function ThemeSwitch() {
  const [theme, setTheme] = useState("light");
  // ...
}
```

#### 2. Props Interface
Always define prop types:
```tsx
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
}

export function HeroSection({ title, subtitle, showCTA = true }: HeroSectionProps) {
  // ...
}
```

#### 3. Animation Patterns
Using Framer Motion with consistent variants:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

**For above-fold content**: Use `animate="visible"`
**For below-fold content**: Use `whileInView="visible" viewport={{ once: true }}`

---

## 🎨 Styling Guide

### Tailwind CSS
This project uses Tailwind CSS 4.1.11 with custom configuration.

#### Color Palette
```css
/* Light Mode */
background: white
text: gray-900
accent: blue-500

/* Dark Mode */
background: gray-950
text: white
accent: blue-400
```

#### Responsive Breakpoints
```
sm: 640px   (mobile landscape)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (large desktop)
```

#### Common Patterns
```tsx
// Responsive container
<div className="container mx-auto max-w-7xl px-4 md:px-8">

// Responsive text
<h1 className="text-2xl md:text-4xl lg:text-5xl">

// Dark mode support
<div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### HeroUI Components
Built on top of NextUI with custom theming:

```tsx
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";

// Usage
<Button color="primary" variant="shadow">Click Me</Button>
```

---

## 📝 Content Management

### Blog Posts (MDX)

#### Creating a New Post
1. Create file in `content/blog/` with `.mdx` extension
2. Add frontmatter metadata:
```mdx
---
title: "Your Post Title"
publishedAt: "2025-10-09"
summary: "Brief description for SEO and preview"
image: "/images/post-cover.jpg"
---

Your content here...
```

3. Post automatically appears in blog list (sorted by date)

#### MDX Features
- **Markdown** syntax support
- **React components** in content
- **Syntax highlighting** for code blocks
- **Auto-generated** table of contents

#### Supported Plugins
- `remark-gfm`: GitHub Flavored Markdown (tables, task lists)
- `rehype-slug`: Auto ID for headings
- `rehype-autolink-headings`: Clickable heading anchors

### Data Updates

#### Adding a Project
Edit `lib/data.ts`:
```tsx
export const projects: Project[] = [
  {
    id: "new-project",
    title: "Project Name",
    description: "Project description",
    image: "/project/project-name.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/repo",
    featured: true,
    category: "web"
  }
];
```

#### Updating Personal Info
Edit `lib/data.ts`:
```tsx
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ...
};
```

---

## ⚡ Performance Optimization

### Image Optimization

#### 1. Next.js Image Component
Always use for local images:
```tsx
import Image from "next/image";

<Image
  src="/images/profile.jpg"
  width={400}
  height={400}
  alt="Profile"
  priority // For above-fold images
/>
```

#### 2. Image Formats
- **WebP**: Best for web (30% smaller than JPG)
- **PNG**: For logos with transparency
- **SVG**: For icons and simple graphics
- **JPG**: For photos (as fallback)

#### 3. Lazy Loading
```tsx
// Below-fold images
<Image src="..." loading="lazy" />

// Above-fold images (hero, first section)
<Image src="..." priority />
```

### Code Splitting

#### Dynamic Imports
For heavy components not needed immediately:
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false // If component doesn't need SSR
});
```

### Font Optimization
Fonts are auto-optimized via `next/font`:
```tsx
// config/fonts.ts
import localFont from "next/font/local";

export const satoshi = localFont({
  src: "../public/fonts/WEB/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap"
});
```

### Audio Performance
Sound effects use optimized hook:
```tsx
import { useSound } from "@/hooks/useSound";

function Component() {
  const { playSound } = useSound("/assets/audio/pop.mp3");
  // Audio preloaded, plays instantly on click
}
```

---

## 🔥 Firebase Integration

### Setup
1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Add web app and copy config
3. Add to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Firestore Usage

#### Writing Data (Guestbook)
```tsx
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const addEntry = async (name: string, message: string) => {
  await addDoc(collection(db, "guestbook"), {
    name,
    message,
    timestamp: serverTimestamp()
  });
};
```

#### Reading Data
```tsx
import { collection, query, orderBy, getDocs } from "firebase/firestore";

const getEntries = async () => {
  const q = query(
    collection(db, "guestbook"),
    orderBy("timestamp", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

---

## 🚢 Deployment

### Vercel (Recommended)

#### First Deployment
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables (Firebase keys)
5. Deploy

#### Automatic Deployments
- **Main branch** → Production
- **Other branches** → Preview deployments

### Build Optimization
```bash
# Test production build locally
npm run build
npm run start

# Check build output
.next/static/         # Static assets
.next/server/         # Server-side code
```

### Environment Variables
Set in Vercel dashboard or `.env.local`:
```env
# Required for production
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. "Module not found" errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

#### 2. Firebase connection errors
- Check `.env.local` is properly configured
- Verify Firebase project is active
- Check Firestore rules allow read/write

#### 3. Build failures
```bash
# Check TypeScript errors
npm run build

# Check for unused imports
npm run lint
```

#### 4. Image optimization errors
- Ensure images exist in `public/` folder
- Check file paths are correct (case-sensitive on Linux)
- Use absolute paths from `/public`: `/images/photo.jpg`

#### 5. Audio not playing
- Check file path: `/assets/audio/pop.mp3`
- Verify file exists and is accessible
- Check browser console for autoplay restrictions
- Reduce volume in `useSound.ts` if too loud

### Performance Debugging

#### Lighthouse Audit
```bash
# Run in production mode
npm run build
npm run start

# Open Chrome DevTools > Lighthouse
# Run audit on http://localhost:3000
```

#### Bundle Analysis
```bash
# Install analyzer
npm install -D @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

---

## 📚 Additional Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [HeroUI/NextUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase](https://firebase.google.com/docs)

### Related Guides
- [PUBLIC-ASSETS-GUIDE.md](./PUBLIC-ASSETS-GUIDE.md) - Asset organization
- [BLOG-UI-GUIDE.md](./BLOG-UI-GUIDE.md) - Blog development
- [DARK-MODE-PALETTE.md](./DARK-MODE-PALETTE.md) - Theme customization

---

## 🤝 Contributing

### Code Style
- Use **2 spaces** for indentation
- **Semicolons** required
- **Double quotes** for strings
- **PascalCase** for components
- **camelCase** for functions/variables

### Commit Messages
Follow conventional commits:
```
feat: add new project to portfolio
fix: correct image path in hero section
docs: update developer guide
style: format code with prettier
refactor: reorganize component structure
perf: optimize image loading
```

### Pull Request Process
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Commit with descriptive messages
4. Push and create PR
5. Wait for review and approval

---

## 📞 Support

### Need Help?
- Check this guide first
- Search existing issues on GitHub
- Create new issue with:
  - Clear description
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots if applicable

### Maintenance Checklist
- [ ] Update dependencies monthly: `npm update`
- [ ] Review and optimize images
- [ ] Check broken links
- [ ] Test all forms (contact, guestbook)
- [ ] Run Lighthouse audit
- [ ] Update content (blog, projects)
- [ ] Backup Firebase data

---

**Last Updated:** October 9, 2025
**Version:** 2.0.0
**Maintainer:** Neezar Abdurrahman
