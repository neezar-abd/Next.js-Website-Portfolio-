"use client";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Store,
  TrendingDown,
  Image as ImageIcon,
  Clock,
  Megaphone,
  Globe,
  Award,
  ShoppingCart,
  Sparkles,
  Target,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LayananPage() {
  const services = [
    {
      icon: Code,
      title: "Website Company Profile",
      description:
        "Website profesional untuk perusahaan dan bisnis. Tampilan modern, responsif, dan SEO-friendly.",
      features: [
        "Design modern & profesional",
        "Responsif di semua device",
        "SEO optimization",
        "Contact form & Google Maps",
        "Fast loading speed",
      ],
      price: "Mulai dari Rp 2.500.000",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Smartphone,
      title: "Website UMKM & Toko Online",
      description:
        "Solusi website untuk UMKM di Probolinggo yang ingin go digital. Katalog produk, WhatsApp integration, dan payment gateway.",
      features: [
        "Katalog produk unlimited",
        "WhatsApp order integration",
        "Payment gateway (opsional)",
        "Admin panel mudah digunakan",
        "Gratis training penggunaan",
      ],
      price: "Mulai dari Rp 1.500.000",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Zap,
      title: "Website Portfolio & Personal",
      description:
        "Portfolio online untuk profesional, freelancer, atau personal branding. Showcase karya Anda dengan website yang menarik.",
      features: [
        "Design custom sesuai kebutuhan",
        "Blog integration",
        "Project showcase",
        "Contact & social media links",
        "Fast & lightweight",
      ],
      price: "Mulai dari Rp 1.000.000",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const packages = [
    {
      name: "Paket Basic",
      price: "Rp 1.000.000",
      description: "Cocok untuk personal portfolio atau landing page sederhana",
      features: [
        "1-3 halaman",
        "Responsif mobile & desktop",
        "SEO basic",
        "Contact form",
        "Free domain 1 tahun (.my.id)",
        "Free hosting 1 tahun",
        "1x revisi design",
      ],
      recommended: false,
    },
    {
      name: "Paket Professional",
      price: "Rp 2.500.000",
      description:
        "Ideal untuk UMKM, toko online, atau company profile lengkap",
      features: [
        "5-10 halaman",
        "Responsif mobile & desktop",
        "SEO advanced",
        "Contact form & WhatsApp integration",
        "Free domain 1 tahun (.com/.id)",
        "Free hosting 1 tahun",
        "Admin panel (optional)",
        "3x revisi design",
        "Gratis training penggunaan",
      ],
      recommended: true,
    },
    {
      name: "Paket Premium",
      price: "Mulai Rp 5.000.000",
      description:
        "Untuk bisnis yang butuh fitur custom dan integrasi advanced",
      features: [
        "Unlimited halaman",
        "Custom design & fitur",
        "SEO advanced + Google Analytics",
        "Payment gateway integration",
        "API integration",
        "Database & backend custom",
        "Free domain 1 tahun (.com/.id)",
        "Free hosting 1 tahun",
        "Unlimited revisi",
        "Maintenance 3 bulan gratis",
        "Priority support",
      ],
      recommended: false,
    },
  ];

  const portfolioHighlights = [
    {
      title: "Soalin - AI Quiz Generator",
      description: "Platform quiz AI dengan fitur generate soal otomatis dan sistem scoring",
      tech: ["Next.js", "AI Integration", "Firebase"],
      image: "/project/Soalin-AI-Quiz.webp",
      link: "/project",
    },
    {
      title: "Personal Portfolio Website",
      description: "Portfolio modern dengan blog, project showcase, dan dark mode",
      tech: ["Next.js", "Tailwind CSS", "MDX"],
      image: "/project/website-portfolio.webp",
      link: "/project",
    },
    {
      title: "Hello World Project",
      description: "Website interaktif dengan animasi dan responsive design",
      tech: ["React", "Framer Motion", "CSS3"],
      image: "/project/Hello-world.webp",
      link: "/project",
    },
  ];

  const whyChooseUs = [
    {
      title: "Lokal Probolinggo",
      description:
        "Pelayanan langsung dari developer lokal Probolinggo. Mudah komunikasi dan meeting langsung.",
    },
    {
      title: "Harga Terjangkau",
      description:
        "Harga kompetitif untuk UMKM dan bisnis kecil. Tanpa biaya tersembunyi.",
    },
    {
      title: "Kualitas Profesional",
      description:
        "Alumni Coding Camp DBS Foundation dengan pengalaman 2+ tahun di web development.",
    },
    {
      title: "After-Sales Support",
      description:
        "Gratis konsultasi dan support setelah website jadi. Kami bantu sampai website Anda online.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Jasa Pembuatan Website di{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Probolinggo
            </span>
          </h1>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Solusi website profesional untuk UMKM, bisnis, sekolah, dan personal
            branding di Probolinggo dan sekitarnya. Harga terjangkau, kualitas
            terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6283899200333?text=Halo%20Neezar,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website">
              <Button
                className="font-sans bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                startContent={<Phone size={20} />}
              >
                WhatsApp Sekarang
              </Button>
            </Link>
            <Link href="/kontak">
              <Button
                className="font-sans"
                size="lg"
                startContent={<Mail size={20} />}
                variant="bordered"
              >
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Storytelling Section - Why Need Website */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Kenapa Bisnis Anda Butuh Website?
            </h2>
            <p className="font-sans text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
              Di era digital ini, website bukan lagi pilihan, tapi kebutuhan. Lihat perbedaannya!
            </p>
            
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              {/* Problem Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 md:p-10 bg-gradient-to-br from-orange-50 via-orange-50/50 to-white dark:from-orange-950/20 dark:via-orange-950/10 dark:to-gray-900 border border-orange-200 dark:border-orange-900/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 dark:bg-orange-500/5 rounded-full blur-3xl -z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Icon Illustration */}
                      <div className="flex-shrink-0 hidden md:block">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 rounded-2xl flex items-center justify-center shadow-md">
                          <AlertCircle className="text-orange-600 dark:text-orange-400" size={40} />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          Masalah yang Sering Dialami UMKM
                        </h3>
                        <p className="font-sans text-base text-orange-700 dark:text-orange-300 font-medium">
                          Tanpa website, bisnis Anda tertinggal jauh
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-5 font-sans text-base md:text-lg">
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <TrendingDown className="text-orange-600 dark:text-orange-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Susah ditemukan pelanggan baru</strong> - Pelanggan sekarang cari produk/jasa lewat Google, bukan keliling kota</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Target className="text-orange-600 dark:text-orange-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Kalah saing dengan kompetitor</strong> - Kompetitor yang punya website terlihat lebih profesional dan terpercaya</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ImageIcon className="text-orange-600 dark:text-orange-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Katalog produk tidak terorganisir</strong> - Foto produk bertebaran di WA, susah dikelola dan terlihat kurang meyakinkan</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Clock className="text-orange-600 dark:text-orange-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Terbatas jam operasional</strong> - Pelanggan hanya bisa order saat jam kerja, kehilangan peluang penjualan 24/7</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Megaphone className="text-orange-600 dark:text-orange-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Sulit membangun brand awareness</strong> - Tanpa website, bisnis Anda sulit diingat dan dipercaya calon pelanggan</span>
                      </motion.li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 md:p-10 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white dark:from-green-950/20 dark:via-emerald-950/10 dark:to-gray-900 border border-green-200 dark:border-green-900/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/20 dark:bg-green-500/5 rounded-full blur-3xl -z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Icon Illustration */}
                      <div className="flex-shrink-0 hidden md:block">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/40 dark:to-emerald-800/40 rounded-2xl flex items-center justify-center shadow-md">
                          <Sparkles className="text-green-600 dark:text-green-400" size={40} />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          Solusi: Website Profesional yang Bekerja untuk Bisnis Anda
                        </h3>
                        <p className="font-sans text-base text-green-700 dark:text-green-300 font-medium">
                          Investasi sekali, hasil selamanya
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-5 font-sans text-base md:text-lg">
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Globe className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Ditemukan di Google 24/7</strong> - Pelanggan bisa menemukan bisnis Anda kapan saja lewat pencarian Google</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Award className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Terlihat lebih profesional & kredibel</strong> - Website membuat bisnis Anda setara dengan kompetitor besar</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Store className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Katalog produk yang rapi & menarik</strong> - Tampilkan semua produk/jasa dengan foto dan deskripsi lengkap</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ShoppingCart className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Penjualan otomatis tanpa henti</strong> - Pelanggan bisa order via WhatsApp langsung dari website, bahkan tengah malam</span>
                      </motion.li>
                      
                      <motion.li 
                        className="flex items-start gap-4 leading-relaxed group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <span><strong className="text-gray-900 dark:text-white">Investasi jangka panjang</strong> - Satu kali bayar, website Anda bekerja selamanya untuk menarik pelanggan baru</span>
                      </motion.li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Fact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8 md:p-10 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-gray-900 border-2 border-blue-400 dark:border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-2xl" />
                  
                  <div className="text-center relative z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/40 dark:to-indigo-800/40 rounded-2xl mb-5 shadow-lg"
                    >
                      <MessageCircle className="text-blue-600 dark:text-blue-400" size={32} />
                    </motion.div>
                    
                    <p className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-5">
                      Fakta Menarik
                    </p>
                    
                    <motion.p 
                      className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed max-w-3xl mx-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      "81% konsumen melakukan riset online sebelum membeli. Jika bisnis Anda tidak punya website, 
                      Anda kehilangan <strong className="text-blue-600 dark:text-blue-400 font-bold">8 dari 10 calon pelanggan potensial</strong> ke kompetitor yang punya website."
                    </motion.p>
                    
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 font-medium">
                      - Research by GE Capital Retail Bank
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-sans text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Layanan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                  <div className={`${service.color} mb-4`}>
                    <service.icon size={40} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle
                          className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        <span className="font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans text-lg font-bold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-sans text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Paket Harga Website
          </h2>
          <p className="font-sans text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket
            sudah include domain dan hosting 1 tahun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                animate={{ opacity: 1, y: 0 }}
                className={pkg.recommended ? "md:-mt-4" : ""}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card
                  className={`p-6 h-full flex flex-col ${
                    pkg.recommended
                      ? "border-2 border-blue-600 dark:border-blue-400 shadow-xl"
                      : "border border-gray-200 dark:border-gray-800"
                  } bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300`}
                >
                  {/* Badge Area - Fixed Height */}
                  <div className="h-8 mb-4">
                    {pkg.recommended && (
                      <div className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full w-fit">
                        PALING POPULER
                      </div>
                    )}
                  </div>
                  
                  {/* Title - Aligned */}
                  <h3 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  
                  {/* Price - Aligned */}
                  <p className="font-sans text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {pkg.price}
                  </p>
                  
                  {/* Description */}
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {pkg.description}
                  </p>
                  
                  {/* Features - Flexible grow */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle
                          className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        <span className="font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button - Aligned at bottom */}
                  <Link href="https://wa.me/6283899200333?text=Halo%20Neezar,%20saya%20tertarik%20dengan%20paket%20website">
                    <Button
                      className={`w-full font-sans ${
                        pkg.recommended
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      }`}
                    >
                      Pesan Sekarang
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Highlights */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-sans text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Portfolio Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <motion.div
                key={project.title}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Link href={project.link}>
                  <Card className="overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
                      <Image
                        alt={project.title}
                        className="object-cover"
                        fill
                        src={project.image}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-sans text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/project">
              <Button className="font-sans" size="lg" variant="bordered">
                Lihat Semua Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="font-sans text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Kenapa Pilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircle
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Membawa Bisnis Anda Go Digital?
          </h2>
          <p className="font-sans text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis untuk diskusi kebutuhan website Anda. Kami siap
            membantu UMKM dan bisnis lokal Probolinggo untuk berkembang di era
            digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6283899200333?text=Halo%20Neezar,%20saya%20mau%20konsultasi%20tentang%20pembuatan%20website">
              <Button
                className="font-sans bg-white text-blue-600 hover:bg-gray-100"
                size="lg"
                startContent={<Phone size={20} />}
              >
                Hubungi via WhatsApp
              </Button>
            </Link>
            <Link href="/kontak">
              <Button
                className="font-sans text-white border-white hover:bg-white/10"
                size="lg"
                startContent={<Mail size={20} />}
                variant="bordered"
              >
                Kirim Pesan
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="font-sans text-sm">
                Kota Probolinggo, Jawa Timur
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="font-sans text-sm">+62 838 9920 0333</span>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          animate={{ opacity: 1 }}
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
            <strong>Melayani:</strong> Kota Probolinggo, Kabupaten Probolinggo,
            Kraksaan, Leces, Paiton, dan sekitarnya
          </p>
          <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2">
            <strong>Teknologi:</strong> Next.js, React, Tailwind CSS, Firebase,
            WordPress, dan Custom Development
          </p>
        </motion.div>
      </div>
    </div>
  );
}
