/* eslint-disable @next/next/no-img-element */

"use client";

import { motion } from "framer-motion";

import { personalInfo, skills } from "@/lib/data";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Tech Stack with logo URLs
  const techStack = [
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center">
      {/* Single About Section */}
      <section className="relative w-full py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {/* Header */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h1 className="font-sans text-2xl md:text-4xl font-bold text-black dark:text-white mb-3">
                About
              </h1>
              <h2 className="font-sans text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                Neezar Abdurrahman
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              <p className="font-sans text-sm md:text-base">
                Saya Neezar, fullstack developer dari Probolinggo yang fokus membangun web applications untuk automate 
                business processes. Saat ini kelas 12 di SMKN 1 Probolinggo (Axioo Class Program), dengan 2+ tahun 
                experience mengerjakan real projects.
              </p>

              <p className="font-sans text-sm md:text-base">
                Saya combine technical skills dengan creative background di videography. Ini bikin saya tidak cuma build 
                apps yang functional, tapi juga punya UI/UX yang engaging. Setiap project saya approach dengan mindset: 
                solve real problems, deliver measurable results.
              </p>
            </motion.div>

            {/* Favorite Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-black dark:text-white mb-4">
                Favorite Tech Stack
              </h3>
              <div className="flex gap-4 items-center flex-wrap">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-110 p-2"
                    title={tech.name}
                  >
                    <img
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      src={tech.logo}
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(0%) dark:invert(100%)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
