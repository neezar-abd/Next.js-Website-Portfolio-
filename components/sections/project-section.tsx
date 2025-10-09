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
      title: "Soalin - AI Quiz Generator",
      description:
        "Platform AI-powered untuk generate quiz interaktif dengan machine learning dan auto-grading system.",
      image: "/project/Soalin-AI-Quiz.png",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AI/ML"],
      link: "/project",
    },
    {
      title: "Portfolio Website - Neezar",
      description:
        "Portfolio website personal dengan design modern, dark mode, animasi Framer Motion, dan Firebase integration.",
      image: "/project/website-portfolio.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      link: "/project",
    },
    {
      title: "Hello World - First Project",
      description:
        "Project pertama dalam perjalanan belajar web development dengan HTML, CSS, dan JavaScript vanilla.",
      image: "/project/Hello-world.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/project",
    },
  ];

  // Max tech stack to show before "+N more"
  const MAX_TECH_DISPLAY = 3;

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beberapa proyek terbaik yang telah saya kerjakan dengan hasil yang
              memuaskan
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                variants={itemVariants}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  {/* Thumbnail Image 16:9 */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={project.image}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, MAX_TECH_DISPLAY).map((tech) => (
                        <span
                          key={tech}
                          className="font-sans text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > MAX_TECH_DISPLAY && (
                        <span className="font-sans text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                          +{project.tech.length - MAX_TECH_DISPLAY}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      as={Link}
                      className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold hover:opacity-90 transition-opacity"
                      endContent={<ArrowRight size={18} />}
                      href={project.link}
                      variant="flat"
                      onClick={playPop}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button
              as={Link}
              className="font-sans border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all"
              href="/project"
              size="lg"
              variant="bordered"
              onClick={playPop}
            >
              Lihat Semua Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
