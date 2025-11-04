# 🚀 Portfolio Website - Neezar Abdurrahman

> Modern, high-performance portfolio website built with Next.js 15, HeroUI, and Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v2-7c3aed?style=flat-square)](https://heroui.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**🌐 Live Site:** [neezar.tech](https://neezar.tech)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark mode support
- ⚡ **High Performance** - Optimized for Core Web Vitals (Lighthouse 90+)
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- 🎭 **Smooth Animations** - Framer Motion for delightful interactions
- 📝 **MDX Blog** - Write blog posts in Markdown with React components
- 🔥 **Firebase Integration** - Guestbook and contact form with Firestore
- 🎵 **Interactive UX** - Sound effects on user interactions
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📊 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🚀 **Fast Load Times** - Code splitting, lazy loading, optimized images

## 🛠 Technologies Used

### Core
- [Next.js 15.3.1](https://nextjs.org/) - React framework with App Router
- [React 18.3.1](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [HeroUI v2](https://heroui.com/) - Beautiful UI component library
- [Tailwind CSS 4.1.11](https://tailwindcss.com/) - Utility-first CSS

### Features & Tools
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [MDX](https://mdxjs.com/) - Markdown with JSX for blog
- [Firebase](https://firebase.google.com/) - Firestore for data storage
- [Lucide Icons](https://lucide.dev/) - Clean, consistent icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## 📁 Project Structure

```
next-app-template/
├── app/                    # Next.js 15 App Router
│   ├── about/              # About page
│   ├── blog/               # Blog with MDX posts
│   ├── project/            # Projects showcase
│   ├── guestbook/          # Guestbook (Firebase)
│   └── kontak/             # Contact form
│
├── components/             # React components
│   ├── blog/               # Blog-specific
│   ├── common/             # Shared components
│   ├── layout/             # Navbar, footer
│   ├── sections/           # Page sections
│   └── ui/                 # UI primitives
│
├── content/blog/           # MDX blog posts
├── lib/                    # Utilities & data
├── config/                 # Configuration
└── public/                 # Static assets
    ├── assets/             # Audio, documents
    ├── images/             # Photos
    ├── logos/              # Company logos
    └── project/            # Project screenshots
```

**📖 [Full Structure Guide](./DOCUMENTATION.md#struktur-proyek)**

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/neezar-abd/Next.js-Website-Portfolio-.git
cd Next.js-Website-Portfolio-

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

**📖 [Full Setup Guide](./DOCUMENTATION.md#quick-start)**

## 📝 Content Management

### Adding Blog Posts

Create `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
publishedAt: "2025-11-04"
summary: "Brief description"
image: "/images/post-cover.jpg"
---

Your content here with **Markdown** support!
```

### Updating Personal Data

Edit `lib/data.ts` for:
- Personal information
- Projects
- Skills
- Certifications

**📖 [Content Management Guide](./DOCUMENTATION.md#manajemen-konten)**



## 📚 Documentation

**📖 [Read Complete Documentation](./DOCUMENTATION.md)** - Comprehensive guide covering:
- Quick Start & Installation
- Project Structure & Development
- Content Management (Blog, Projects, Data)
- SEO & Performance Optimization
- Deployment & Troubleshooting
- Contributing Guidelines

**Other Docs:**
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## 🚢 Deployment

### Quick Deploy to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy! 🚀

**📖 [Full Deployment Guide](./DOCUMENTATION.md#deployment)**

## 📊 Performance

Lighthouse scores:
- ⚡ Performance: **95+**
- ♿ Accessibility: **95+**
- ✅ Best Practices: **95+**
- 🔍 SEO: **100**

**📖 [Performance Guide](./DOCUMENTATION.md#seo--optimasi)**

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

Quick steps:
1. Fork & clone repository
2. Create feature branch
3. Make your changes
4. Submit Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## � Support

- 📖 [Complete Documentation](./DOCUMENTATION.md)
- 🐛 [Report Issues](https://github.com/neezar-abd/Next.js-Website-Portfolio-/issues)
- 💬 [Discussions](https://github.com/neezar-abd/Next.js-Website-Portfolio-/discussions)

## 🙏 Credits

Built with: [Next.js](https://nextjs.org/) • [HeroUI](https://heroui.com/) • [Tailwind CSS](https://tailwindcss.com/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Built with ❤️ by [Neezar Abdurrahman](https://neezar.tech)**

[Website](https://neezar.tech) • [GitHub](https://github.com/neezar-abd) • [LinkedIn](https://linkedin.com/in/neezarabd)

</div>

## 📄 License

Licensed under the [MIT License](./LICENSE).
