'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Code, Sparkles, Layout, Video } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export const ServicesSectionNew = () => {
  type ServiceKey = 'service-1' | 'service-2' | 'service-3' | 'service-4'
  const [activeService, setActiveService] = useState<ServiceKey>('service-1')

  const services = [
    {
      id: 'service-1' as ServiceKey,
      icon: Code,
      title: 'Aplikasi Web yang Mengotomatisasi Bisnis Anda',
      description: 'Saya membangun aplikasi web kustom yang mengotomatisasi alur kerja dan memberikan insight bisnis real-time. Dari sistem inventaris hingga platform booking dan dashboard pelanggan. Hemat 40-70% waktu kerja manual.',
      image: '/images/dashboard.png',
      alt: 'Dashboard aplikasi web',
    },
    {
      id: 'service-2' as ServiceKey,
      icon: Sparkles,
      title: 'Fitur Berbasis AI',
      description: 'Saya mengintegrasikan kemampuan AI ke sistem yang sudah ada atau membangun tools berbasis AI baru. Chatbot pintar, pemroses dokumen, dan generator konten otomatis. Proses 10x lebih cepat.',
      image: '/music.png',
      alt: 'Visualisasi fitur AI',
    },
    {
      id: 'service-3' as ServiceKey,
      icon: Layout,
      title: 'Landing Page yang Mengkonversi',
      description: 'Saya mendesain dan mengembangkan landing page high-converting yang dioptimalkan untuk kecepatan dan konversi. Sempurna untuk peluncuran produk, portofolio, dan lead generation. Tingkat konversi 2-3x lebih baik.',
      image: '/images/landingpage.jpg',
      alt: 'Desain landing page',
    },
    {
      id: 'service-4' as ServiceKey,
      icon: Video,
      title: 'Produksi Konten Video',
      description: 'Saya membuat konten video profesional dari scripting hingga pengiriman final. Demo produk, brand stories, dan tutorial yang menarik perhatian. Tingkatkan engagement 5x.',
      image: '/payments.png',
      alt: 'Alur kerja produksi video',
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-32">

      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Yang Bisa Saya Bangun</h2>
          <p>Dari konsep hingga peluncuran, saya memberikan solusi yang memecahkan masalah bisnis nyata dan menghasilkan hasil terukur untuk organisasi Anda.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 h-fit">
            <Accordion
              type="single"
              value={activeService}
              onValueChange={(value) => setActiveService(value as ServiceKey)}
              className="w-full">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <AccordionItem key={service.id} value={service.id}>
                    <AccordionTrigger>
                      <div className="flex items-center gap-2 text-base">
                        <Icon className="size-4" />
                        {service.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{service.description}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeService}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                  <Image
                    src={services.find(s => s.id === activeService)?.image || '/charts.png'}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={services.find(s => s.id === activeService)?.alt || 'Service preview'}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div >
      </div >
    </section >
  )
}