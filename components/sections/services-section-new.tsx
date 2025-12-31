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
      title: 'Web Applications That Automate Your Business',
      description: 'I build custom web apps that automate your workflows and give you real-time business insights. From inventory systems to booking platforms and customer dashboards. Save 40-70% of manual work time.',
      image: '/charts.png',
      alt: 'Web application dashboard',
    },
    {
      id: 'service-2' as ServiceKey,
      icon: Sparkles,
      title: 'AI-Powered Features',
      description: 'I integrate AI capabilities into your existing systems or build new AI-powered tools. Smart chatbots, document processors, and auto-content generators. 10x faster processing.',
      image: '/music.png',
      alt: 'AI features visualization',
    },
    {
      id: 'service-3' as ServiceKey,
      icon: Layout,
      title: 'Landing Pages That Convert',
      description: 'I design and develop high-converting landing pages optimized for speed and conversions. Perfect for product launches, portfolios, and lead generation. 2-3x better conversion rates.',
      image: '/mail2.png',
      alt: 'Landing page design',
    },
    {
      id: 'service-4' as ServiceKey,
      icon: Video,
      title: 'Video Content Production',
      description: 'I create professional video content from scripting to final delivery. Product demos, brand stories, and tutorials that capture attention. Boost engagement 5x.',
      image: '/payments.png',
      alt: 'Video production workflow',
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">What I Can Build</h2>
          <p>From concept to launch, I deliver solutions that solve real business problems and drive measurable results for your organization.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
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
        </div>
      </div>
    </section>
  )
}