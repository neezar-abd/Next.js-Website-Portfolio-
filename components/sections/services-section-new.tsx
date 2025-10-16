"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Code, Palette, Video, Sparkles, Rocket, Zap } from "lucide-react";

import { IconCloud } from "@/components/ui/icon-cloud";

// Tech stack icons for Icon Cloud
const techIcons = [
  "https://cdn.simpleicons.org/nextdotjs/000000",
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/firebase/FFCA28",
  "https://cdn.simpleicons.org/supabase/3FCF8E",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/vercel/000000",
  "https://cdn.simpleicons.org/github/181717",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/figma/F24E1E",
  "https://cdn.simpleicons.org/framer/0055FF",
  "https://cdn.simpleicons.org/capcut/000000",
];

export const ServicesSectionNew = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Expertise
          </h2>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kombinasi keahlian teknis dan kreativitas untuk solusi digital
            terbaik
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Icon Cloud */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              <IconCloud images={techIcons} />
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Accordion
              className="gap-4 px-0"
              defaultExpandedKeys={["fullstack"]}
              selectionMode="multiple"
              variant="light"
            >
              <AccordionItem
                key="fullstack"
                aria-label="Full-Stack Development"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md px-6 py-4 mb-3"
                title={
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-sans font-semibold text-lg">
                      Full-Stack Development
                    </span>
                  </div>
                }
              >
                <div className="px-4 pb-4 font-sans text-gray-600 dark:text-gray-300">
                  <p className="mb-3 leading-relaxed">
                    Membangun aplikasi web end-to-end dengan teknologi modern
                    dan arsitektur yang scalable.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>
                        Frontend: React, Next.js, TypeScript, Tailwind CSS
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Backend: Node.js, Express, REST API, GraphQL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Database: MongoDB, PostgreSQL, Prisma ORM</span>
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem
                key="frontend"
                aria-label="Frontend Development"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md px-6 py-4 mb-3"
                title={
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-sans font-semibold text-lg">
                      Frontend Development
                    </span>
                  </div>
                }
              >
                <div className="px-4 pb-4 font-sans text-gray-600 dark:text-gray-300">
                  <p className="mb-3 leading-relaxed">
                    Menciptakan user interface yang modern, responsive, dan
                    user-friendly dengan performa optimal.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>
                        Responsive Design dengan Mobile-First Approach
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Animasi & Interaksi dengan Framer Motion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Performance Optimization & SEO Best Practices</span>
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem
                key="video"
                aria-label="Video Production"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md px-6 py-4"
                title={
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                      <Video className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <span className="font-sans font-semibold text-lg">
                      Video Production
                    </span>
                  </div>
                }
              >
                <div className="px-4 pb-4 font-sans text-gray-600 dark:text-gray-300">
                  <p className="mb-3 leading-relaxed">
                    Menghasilkan konten video berkualitas tinggi untuk berbagai
                    platform digital.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Rocket className="w-4 h-4 mt-0.5 text-rose-500 flex-shrink-0" />
                      <span>Video Editing dengan Adobe Premiere Pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Rocket className="w-4 h-4 mt-0.5 text-rose-500 flex-shrink-0" />
                      <span>Motion Graphics & Animation (After Effects)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Rocket className="w-4 h-4 mt-0.5 text-rose-500 flex-shrink-0" />
                      <span>Tutorial Content & Technical Documentation</span>
                    </li>
                  </ul>
                </div>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
