"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Code, Sparkles, Layout, Video, ArrowRight, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ServicesSectionNew = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
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

  // Intersection Observer to track active card
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
        threshold: 0.5,
      }
    );

    const cards = container.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && activeCard > 0) {
        scrollToCard(activeCard - 1);
      } else if (e.key === "ArrowRight" && activeCard < services.length - 1) {
        scrollToCard(activeCard + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCard]);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-index]");
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  // Tech icon mapping dengan DevIcon CDN
  const techIcons: { [key: string]: string } = {
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "OpenAI API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    LangChain: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    Analytics: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    "Premiere Pro": "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    "After Effects": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
  };

  // Outcome badge colors - biru, purple, orange, pink
  const outcomeColors: { [key: number]: string } = {
    0: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    1: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    2: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    3: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  };

  const services = [
    {
      icon: Code,
      title: "Web Applications That Automate Your Business",
      problem: "Stop wasting time on repetitive manual tasks",
      solution:
        "I build custom web apps that automate your workflows and give you real-time business insights. From inventory systems to booking platforms and customer dashboards.",
      outcome: "Save 40-70% of manual work time",
      tech: ["Next.js", "React", "PostgreSQL"],
      projectLink: "/project",
      buttonText: "View Web App Projects",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Features",
      problem: "Need intelligent automation for content and data",
      solution:
        "I integrate AI capabilities into your existing systems or build new AI-powered tools. Smart chatbots, document processors, and auto-content generators.",
      outcome: "10x faster processing",
      tech: ["OpenAI API", "LangChain"],
      projectLink: "/project",
      buttonText: "View AI Projects",
    },
    {
      icon: Layout,
      title: "Landing Pages That Convert",
      problem: "Your website not generating enough leads",
      solution:
        "I design and develop high-converting landing pages optimized for speed and conversions. Perfect for product launches, portfolios, and lead generation.",
      outcome: "2-3x better conversion rates",
      tech: ["Next.js", "Tailwind CSS", "Analytics"],
      projectLink: "/project",
      buttonText: "View Landing Page Projects",
    },
    {
      icon: Video,
      title: "Video Content Production",
      problem: "Need engaging content but lack production skills",
      solution:
        "I create professional video content from scripting to final delivery. Product demos, brand stories, and tutorials that capture attention.",
      outcome: "Boost engagement 5x",
      tech: ["Premiere Pro", "After Effects"],
      projectLink: "/project",
      buttonText: "View Video Projects",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 px-0 sm:px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {/* Section Header */}
          <motion.div className="mb-8 sm:mb-16 px-4 sm:px-0" variants={itemVariants}>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What I Can Build
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              From concept to launch, I deliver solutions that solve real business problems
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll Carousel */}
          <div className="sm:hidden relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "calc((100vw - 85vw) / 2)",
                paddingRight: "calc((100vw - 85vw) / 2)",
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={service.title}
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    className="flex-shrink-0 w-[85vw] snap-center snap-always"
                    data-index={index}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/30 dark:to-gray-900/10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 p-2.5 bg-gray-900 dark:bg-white rounded-xl mb-4">
                        <Icon className="w-full h-full text-white dark:text-gray-900" />
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>

                      {/* Problem */}
                      <p className="font-sans text-xs font-semibold text-red-600 dark:text-red-400 italic mb-3">
                        Problem: {service.problem}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-4">
                        {service.solution}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {service.tech.map((tech, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                          >
                            <img
                              alt={tech}
                              className="w-3.5 h-3.5"
                              src={techIcons[tech]}
                            />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {tech}
                            </span>
                          </div>
                        ))}
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${outcomeColors[index]}`}
                        >
                          ✓ {service.outcome}
                        </span>
                      </div>

                      {/* Button */}
                      <Button
                        as={Link}
                        className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold w-full"
                        endContent={<ArrowRight size={16} />}
                        href={service.projectLink}
                        size="md"
                      >
                        {service.buttonText}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Indicators - Mobile Only */}
            <div className="flex justify-center gap-2 mt-6 px-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to service ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    activeCard === index
                      ? "w-8 h-2"
                      : "w-2 h-2"
                  }`}
                  style={{
                    backgroundColor:
                      activeCard === index
                        ? index === 0
                          ? "#3B82F6" // blue
                          : index === 1
                            ? "#A855F7" // purple
                            : index === 2
                              ? "#F97316" // orange
                              : "#EC4899" // pink
                        : "currentColor",
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  onClick={() => scrollToCard(index)}
                />
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Service Card 1 - MAIN SERVICE - Span 2 columns - DOMINANT */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 group relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-950/10 dark:to-transparent bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 ease-out"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex-shrink-0 p-2.5 sm:p-3 lg:p-4 bg-gray-900 dark:bg-white rounded-xl">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white dark:text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {services[0].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 italic mb-3 sm:mb-4">
                    Problem: {services[0].problem}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {services[0].solution}
                  </p>

                  {/* Tech Stack with Icons */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                    {services[0].tech.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ opacity: [0, 1] }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                      >
                        <img
                          alt={tech}
                          className="w-4 h-4"
                          src={techIcons[tech]}
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                    <span
                      className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-semibold border ${outcomeColors[0]}`}
                    >
                      ✓ {services[0].outcome}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    as={Link}
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold hover:scale-105 transition-transform w-full sm:w-auto"
                    endContent={<ArrowRight size={16} />}
                    href={services[0].projectLink}
                    size="md"
                  >
                    {services[0].buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Service Card 2 - AI Features */}
            <motion.div
              className="group relative p-5 sm:p-6 lg:p-7 bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 ease-out"
              variants={itemVariants}
            >
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0 p-2 sm:p-2.5 bg-gray-900 dark:bg-white rounded-xl">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                    {services[1].title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-red-600 dark:text-red-400 italic mb-2 sm:mb-3">
                    Problem: {services[1].problem}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {services[1].solution}
              </p>

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                {services[1].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ opacity: [0, 1] }}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <img alt={tech} className="w-3.5 h-3.5" src={techIcons[tech]} />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
                <span
                  className={`inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold border ${outcomeColors[1]}`}
                >
                  ✓ {services[1].outcome}
                </span>
              </div>

              <Button
                as={Link}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold w-full hover:scale-105 transition-transform"
                endContent={<ArrowRight size={14} />}
                href={services[1].projectLink}
                size="sm"
              >
                {services[1].buttonText}
              </Button>
            </motion.div>

            {/* Service Card 3 - Landing Pages */}
            <motion.div
              className="group relative p-5 sm:p-6 lg:p-7 bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 ease-out"
              variants={itemVariants}
            >
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0 p-2 sm:p-2.5 bg-gray-900 dark:bg-white rounded-xl">
                  <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                    {services[2].title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-red-600 dark:text-red-400 italic mb-2 sm:mb-3">
                    Problem: {services[2].problem}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {services[2].solution}
              </p>

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                {services[2].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ opacity: [0, 1] }}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <img alt={tech} className="w-3.5 h-3.5" src={techIcons[tech]} />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
                <span
                  className={`inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold border ${outcomeColors[2]}`}
                >
                  ✓ {services[2].outcome}
                </span>
              </div>

              <Button
                as={Link}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold w-full hover:scale-105 transition-transform"
                endContent={<ArrowRight size={14} />}
                href={services[2].projectLink}
                size="sm"
              >
                {services[2].buttonText}
              </Button>
            </motion.div>

            {/* Service Card 4 - Video Production */}
            <motion.div
              className="group relative p-5 sm:p-6 lg:p-7 bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 ease-out"
              variants={itemVariants}
            >
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0 p-2 sm:p-2.5 bg-gray-900 dark:bg-white rounded-xl">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                    {services[3].title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-red-600 dark:text-red-400 italic mb-2 sm:mb-3">
                    Problem: {services[3].problem}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {services[3].solution}
              </p>

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                {services[3].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ opacity: [0, 1] }}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <img alt={tech} className="w-3.5 h-3.5" src={techIcons[tech]} />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
                <span
                  className={`inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold border ${outcomeColors[3]}`}
                >
                  ✓ {services[3].outcome}
                </span>
              </div>

              <Button
                as={Link}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold w-full hover:scale-105 transition-transform"
                endContent={<ArrowRight size={14} />}
                href={services[3].projectLink}
                size="sm"
              >
                {services[3].buttonText}
              </Button>
            </motion.div>

            {/* CTA Card - "Need Something Custom?" - Next to Video */}
            <motion.div
              className="group relative p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/30 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 ease-out"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center h-full justify-between">
                {/* Icon */}
                <div className="flex-shrink-0 p-2.5 sm:p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-3 sm:mb-4">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Need Something Custom?
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                    Have a unique project in mind? Let&apos;s discuss how I can help bring your ideas to life.
                  </p>
                </div>

                {/* Button */}
                <Button
                  as={Link}
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold w-full hover:scale-105 transition-transform"
                  endContent={<ArrowRight size={14} />}
                  href="/kontak"
                  size="sm"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};