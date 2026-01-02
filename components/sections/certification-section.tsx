"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, ZoomIn } from "lucide-react";
import NextLink from "next/link";
import { useState } from "react";

const certifications = [
  {
    title: "AI Productivity & API Integration",
    issuer: "Hacktiv8",
    year: "2025",
    credentialId: "HACK-AI-2025-001",
    image: "/sertifikat/hacktiv8.png",
    credentialUrl: "#",
    skills: ["AI Integration", "API Development", "LLM"],
  },
  {
    title: "DBS Foundation Coding Camp",
    issuer: "DBS Foundation",
    year: "2025",
    credentialId: "DBS-CC-2025-089",
    image: "/sertifikat/codingcamp.webp",
    credentialUrl: "#",
    skills: ["Web Development", "JavaScript", "React"],
  },
  {
    title: "Web Programming",
    issuer: "LearningX x Axioo",
    year: "2024",
    credentialId: "LX-WP-2024-156",
    image: "/sertifikat/learningx.webp",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-4xl lg:text-5xl font-medium text-black dark:text-white mb-4">
            Sertifikasi Profesional
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            Berkomitmen untuk terus belajar dan mengikuti perkembangan teknologi terbaru
          </p>
        </motion.div>

        {/* Certifications List - Minimalist with Preview */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-600">
                <div className="p-6 md:p-8">
                  {/* Main Layout with Preview Thumbnail */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Certificate Preview Thumbnail */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setSelectedCert(index)}
                        className="relative w-full md:w-32 aspect-[1.414/1] bg-gray-100 dark:bg-gray-800 overflow-hidden group/preview cursor-pointer"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/preview:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </button>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 min-w-0">
                      {/* Main Info - Grid Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                        {/* Left: Title & Issuer */}
                        <div className="md:col-span-6">
                          <h3 className="font-sans text-xl font-semibold text-black dark:text-white mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                            {cert.issuer}
                          </p>
                        </div>

                        {/* Middle: Year */}
                        <div className="md:col-span-3 flex md:flex-col items-start gap-2">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Tahun</p>
                            <p className="text-base font-semibold text-black dark:text-white">{cert.year}</p>
                          </div>
                        </div>

                        {/* Right: Credential Link */}
                        <div className="md:col-span-3 flex items-start md:justify-end">
                          <NextLink
                            href={cert.credentialUrl}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                            Terverifikasi
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </NextLink>
                        </div>
                      </div>

                      {/* Skills & ID - Bottom Row */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        {/* Skills */}
                        <div className="flex gap-2 flex-wrap">
                          {cert.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Credential ID */}
                        <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="mt-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <NextLink
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Lihat Semua Sertifikasi
            <ExternalLink className="w-4 h-4" />
          </NextLink>
        </motion.div>
      </div>

      {/* Full Image Modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full bg-white dark:bg-gray-900 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={certifications[selectedCert].image}
              alt={certifications[selectedCert].title}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
