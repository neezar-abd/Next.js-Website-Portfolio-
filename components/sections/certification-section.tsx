"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import NextLink from "next/link";
import { useState, useEffect, useRef } from "react";

const certifications = [
  {
    title: "AI Productivity & API Integration",
    issuer: "Hacktiv8",
    year: "2025",
    credentialId: "HACK-AI-2025-001",
    image: "/sertifikat/hacktiv8.png",
    credentialUrl: "#",
    skills: ["AI Integration", "API Development", "LLM"],
    category: "ai",
  },
  {
    title: "DBS Foundation Coding Camp",
    issuer: "DBS Foundation",
    year: "2025",
    credentialId: "DBS-CC-2025-089",
    image: "/sertifikat/codingcamp.webp",
    credentialUrl: "#",
    skills: ["Web Development", "JavaScript", "React"],
    category: "webdev",
  },
  {
    title: "Web Programming",
    issuer: "LearningX x Axioo",
    year: "2024",
    credentialId: "LX-WP-2024-156",
    image: "/sertifikat/learningx.webp",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript"],
    category: "webdev",
  },
];

export function CertificationSection() {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Intersection Observer for mobile carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveCard(index);
          }
        });
      },
      {
        root: container,
        threshold: [0.5],
      }
    );

    const cards = container.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector(`[data-index="${index}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900 mb-4">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Certified Excellence
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            Committed to continuous learning and staying current with latest technologies
          </p>
        </motion.div>

        {/* Certifications Grid - Desktop */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                {/* Certificate Image - A4 Landscape Aspect Ratio (1.414:1) */}
                <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" style={{ paddingTop: '70.7%' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <NextLink
                      href={cert.credentialUrl}
                      className="flex items-center gap-2 text-white text-sm font-medium hover:underline px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4" />
                    </NextLink>
                    {/* Skills tags slide up */}
                    <div className="flex gap-2 flex-wrap justify-center px-4">
                      {cert.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-2.5 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-md border border-white/20"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info - Fixed height */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-sans text-lg font-bold text-black dark:text-white leading-tight line-clamp-2 flex-1">
                      {cert.title}
                    </h3>
                    <span 
                      className={`flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        cert.year === "2025" 
                          ? cert.category === "ai"
                            ? "bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
                            : "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                          : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3 line-clamp-1">
                    {cert.issuer}
                  </p>
                  {/* Credential ID & Verified */}
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                      {cert.credentialId}
                    </span>
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Premium accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              paddingLeft: "calc((100vw - 85vw) / 2)",
              paddingRight: "calc((100vw - 85vw) / 2)",
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                data-index={index}
                className="group relative flex-shrink-0 w-[85vw] snap-center"
              >
                {/* Card - Same structure as desktop */}
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-lg h-full flex flex-col">
                  <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" style={{ paddingTop: '70.7%' }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-sans text-base font-bold text-black dark:text-white leading-tight line-clamp-2 flex-1">
                        {cert.title}
                      </h3>
                      <span 
                        className={`flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold border ${
                          cert.year === "2025" 
                            ? cert.category === "ai"
                              ? "bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
                              : "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                            : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3 line-clamp-1">
                      {cert.issuer}
                    </p>
                    
                    {/* Skills tags visible on mobile */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                        {cert.credentialId}
                      </span>
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    </div>

                    {/* View button on mobile */}
                    <NextLink
                      href={cert.credentialUrl}
                      className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 py-2 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4" />
                    </NextLink>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((cert, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCard === index ? "w-8" : "w-2"
                } ${
                  cert.category === "ai"
                    ? activeCard === index
                      ? "bg-purple-500"
                      : "bg-purple-200 dark:bg-purple-900"
                    : activeCard === index
                    ? "bg-blue-500"
                    : "bg-blue-200 dark:bg-blue-900"
                }`}
                aria-label={`Go to ${cert.title}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <NextLink
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            View All Certifications
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </NextLink>
        </motion.div>
      </div>
    </section>
  );
}
