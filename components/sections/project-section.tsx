/* eslint-disable @next/next/no-img-element */

"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export const ProjectSection = () => {
  const playPop = useSound();
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

  const projects = [
    {
      title: "NezarAI - AI Chatbot",
      description:
        "AI Chatbot personal yang dibangun dengan teknologi terkini. Platform chat berbasis AI yang dapat membantu menjawab berbagai pertanyaan dengan respons yang cepat dan akurat.",
      image: "/project/nezarai-interface.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI/ML", "Vercel"],
      link: "/project/nezar-ai",
    },
    {
      title: "Villa Nusantara - Booking Platform",
      description:
        "Platform booking villa modern dengan fitur pencarian, filter, dan reservasi online. UI/UX yang clean dan responsive untuk pengalaman booking yang seamless.",
      image: "/project/Villa-nusantara.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "/project/villa-nusantara",
    },
    {
      title: "Soalin - AI Quiz Generator",
      description:
        "Platform AI-powered untuk generate quiz interaktif dengan teknologi machine learning. Mendukung multiple choice, essay, dan true/false questions dengan auto-grading system.",
      image: "/project/Soalin-AI-Quiz.webp",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AI/ML"],
      link: "/project/soalin-ai-quiz",
    },
  ];

  // Max tech stack to show before "+N more"
  const MAX_TECH_DISPLAY = 3;

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {/* Section Header - Left Aligned */}
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Project
            </h2>
          </motion.div>

          {/* Projects List - Simple Layout */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                variants={itemVariants}
              >
                {/* Project Title */}
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                {/* Project Description - Half width on desktop, full on mobile */}
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 leading-snug md:max-w-[50%]">
                  {project.description}
                </p>

                {/* Project Image with Frame/Mockup Effect */}
                <Link
                  className="block relative w-full"
                  href={project.link}
                  onClick={playPop}
                >
                  {/* Outer Container with light background */}
                  <div className="relative bg-gray-50 dark:bg-gray-900/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
                    {/* Device Frame - Smaller */}
                    <div className="relative bg-gray-900 dark:bg-gray-800 rounded-xl md:rounded-2xl p-1.5 sm:p-2 shadow-2xl max-w-2xl mx-auto">
                      {/* Screen/Image */}
                      <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden bg-white dark:bg-gray-950">
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover"
                          src={project.image}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <Button
              as={Link}
              className="font-sans border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all"
              endContent={<ArrowRight size={20} />}
              href="/project"
              size="lg"
              variant="bordered"
              onClick={playPop}
            >
              View all projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
