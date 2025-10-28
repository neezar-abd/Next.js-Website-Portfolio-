# Portfolio Website - Neezar Abdurrahman

> Modern, performant portfolio website built with Next.js 15, HeroUI, and Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v2-7c3aed?style=flat-square)](https://heroui.com/)

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
│   ├── blog/               # Blog-specific components
│   ├── common/             # Shared components
│   ├── layout/             # Navbar, footer, etc.
│   ├── sections/           # Page sections (hero, about, etc.)
│   └── ui/                 # UI primitives (buttons, cards)
│
├── content/blog/           # MDX blog posts
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and data
├── config/                 # Configuration files
├── public/                 # Static assets
│   ├── assets/             # Audio, documents
│   ├── images/             # Photos and images
│   ├── logos/              # Company/org logos
│   ├── project/            # Project screenshots
│   └── sertifikat/         # Certificates
└── styles/                 # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Firebase account (for guestbook/contact features)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd next-app-template
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

### Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
publishedAt: "2025-10-09"
summary: "Brief description"
image: "/images/post-cover.jpg"
---

Your content here with **Markdown** support!
```

### Updating Personal Data

Edit `lib/data.ts` to update:
- Personal information
- Projects
- Skills
- Work experience
- Certifications

### Managing Assets

See [PUBLIC-ASSETS-GUIDE.md](./PUBLIC-ASSETS-GUIDE.md) for detailed asset organization.

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},  // Your brand color
      },
    },
  },
};
```

### Site Configuration

Edit `config/site.ts`:
```ts
export const siteConfig = {
  name: "Your Name",
  description: "Your tagline",
  navItems: [...],
  links: {...},
};
```

## 📚 Documentation

📖 **[DOKUMENTASI-LENGKAP.md](./DOKUMENTASI-LENGKAP.md)** - Dokumentasi lengkap dan komprehensif dalam satu file

Dokumentasi mencakup:
- Quick Start & Installation
- Struktur Proyek Detail
- Panduan Pengembangan
- Manajemen Konten (Blog, Projects, Assets)
- Optimasi Performa
- SEO & Marketing Strategy
- Deployment ke Vercel
- Troubleshooting
- Changelog & Contributing Guide

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (Firebase keys)
5. Deploy!

Vercel automatically:
- Builds your app
- Optimizes images
- Serves from global CDN
- Provides automatic HTTPS

### Other Platforms
- **Netlify**: Similar to Vercel, great for static sites
- **Railway**: Good for full-stack apps with databases
- **Self-hosted**: Build and deploy to any Node.js server

## 📊 Performance

Current Lighthouse scores:
- ⚡ Performance: 95+
- ♿ Accessibility: 95+
- ✅ Best Practices: 95+
- 🔍 SEO: 100

See [PERFORMANCE-OPTIMIZATION.md](./PERFORMANCE-OPTIMIZATION.md) for optimization details.

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [HeroUI](https://heroui.com/) - UI component library
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📞 Support

Need help? Check:
- [Developer Guide](./DEVELOPER-GUIDE.md)
- [GitHub Issues](https://github.com/your-repo/issues)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Built with ❤️ by Neezar Abdurrahman**

[Portfolio](https://yoursite.com) • [GitHub](https://github.com/yourusername) • [LinkedIn](https://linkedin.com/in/yourusername)

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
