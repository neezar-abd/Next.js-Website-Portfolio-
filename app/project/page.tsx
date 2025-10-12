/* eslint-disable @next/next/no-img-element */

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Search, X, Filter } from "lucide-react";

// Tech stack options for filter
const techStackOptions = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Prisma",
  "Framer Motion",
  "Docker",
  "Vercel",
  "GitHub",
  "Figma",
  "CapCut",
];

// Real Projects
const allProjects = [
  {
    id: 1,
    title: "Soalin - AI Quiz Generator",
    description:
      "Platform AI-powered untuk generate quiz interaktif dengan teknologi machine learning. Mendukung multiple choice, essay, dan true/false questions dengan auto-grading system.",
    image: "/project/Soalin-AI-Quiz.webp",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AI/ML"],
    demoUrl: "https://soalin.vercel.app",
    githubUrl: "https://github.com/neezar-abd/soalin",
  },
  {
    id: 2,
    title: "Portfolio Website - Neezar",
    description:
      "Portfolio website personal dengan design modern dan clean. Dilengkapi dengan dark mode, animasi smooth menggunakan Framer Motion, Firebase integration untuk guestbook dan contact form.",
    image: "/project/website-portfolio.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
    ],
    demoUrl: "https://neezar.vercel.app",
    githubUrl: "https://github.com/neezar-abd/portfolio",
  },
  {
    id: 3,
    title: "Hello World - First Project",
    description:
      "Project pertama saya dalam perjalanan belajar web development. Simple landing page dengan HTML, CSS, dan JavaScript vanilla untuk memahami fundamental web development.",
    image: "/project/Hello-world.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/neezar-abd/hello-world",
  },
];

const PROJECTS_PER_PAGE = 3;
const MAX_TECH_DISPLAY = 3; // Max tech stack to show before "+N more"

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filter (if any tag selected, project must have at least one matching tag)
      const matchesTags =
        selectedTags.size === 0 ||
        project.tags.some((tag) => selectedTags.has(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedTags(new Set());
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  const handleTagChange = (keys: any) => {
    setSelectedTags(new Set(keys));
    setVisibleCount(PROJECTS_PER_PAGE); // Reset visible count when filter changes
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      {/* Single Section - All in one screen */}
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Projects
          </h1>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Koleksi project yang telah saya kerjakan dengan berbagai teknologi
            dan use case
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <Input
                classNames={{
                  input: "font-sans text-sm",
                  inputWrapper:
                    "h-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                }}
                endContent={
                  searchQuery && (
                    <button
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      onClick={() => setSearchQuery("")}
                    >
                      <X size={18} />
                    </button>
                  )
                }
                placeholder="Cari project..."
                startContent={<Search className="text-gray-400" size={18} />}
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
            </div>

            {/* Tech Stack Filter Dropdown */}
            <div className="w-full md:w-80">
              <Select
                classNames={{
                  trigger:
                    "h-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                  value: "font-sans text-sm",
                }}
                placeholder="Filter by tech stack"
                selectedKeys={selectedTags}
                selectionMode="multiple"
                startContent={<Filter className="text-gray-400" size={18} />}
                onSelectionChange={handleTagChange}
              >
                {techStackOptions.map((tech) => (
                  <SelectItem key={tech} className="font-sans">
                    {tech}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedTags.size > 0) && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="font-sans text-xs text-gray-600 dark:text-gray-400">
                Active filters:
              </span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-sans">
                  Search: &quot;{searchQuery}&quot;
                  <button
                    className="hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setSearchQuery("")}
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {Array.from(selectedTags).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-sans"
                >
                  {tag}
                  <button
                    className="hover:text-gray-900 dark:hover:text-white"
                    onClick={() => {
                      const newTags = new Set(selectedTags);

                      newTags.delete(tag);
                      setSelectedTags(newTags);
                    }}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
              <button
                className="font-sans text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white underline"
                onClick={handleResetFilters}
              >
                Reset all
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-2 text-center">
            <p className="font-sans text-xs text-gray-600 dark:text-gray-400">
              Menampilkan {visibleProjects.length} dari{" "}
              {filteredProjects.length} project
            </p>
          </div>
        </motion.div>

        {/* Projects Grid - Same section, no background change */}
        <div className="mt-6">
          {filteredProjects.length === 0 ? (
            // Empty State
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <Search className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700" />
              </div>
              <h3 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hasil tidak ditemukan
              </h3>
              <p className="font-sans text-gray-600 dark:text-gray-400 mb-6">
                Tidak ada project yang cocok dengan filter yang dipilih
              </p>
              <Button
                className="font-sans border-2"
                variant="bordered"
                onClick={handleResetFilters}
              >
                Reset Filter
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Projects Grid */}
              <motion.div
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
                initial="hidden"
                variants={containerVariants}
              >
                <AnimatePresence mode="popLayout">
                  {visibleProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      animate={{ opacity: 1, scale: 1 }}
                      className="group"
                      exit={{ opacity: 0, scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      variants={itemVariants}
                    >
                      <Link className="block" href={`/project/${project.id}`}>
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                          {/* Thumbnail Image 16:9 */}
                          <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                            <img
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              src={project.image}
                            />
                          </div>

                          {/* Card Content */}
                          <div className="p-3 flex flex-col flex-grow">
                            {/* Title */}
                            <h3 className="font-sans text-base font-bold text-gray-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mb-2 leading-relaxed flex-grow line-clamp-2">
                              {project.description}
                            </p>

                            {/* Tech Tags - Limited Display */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.tags
                                .slice(0, MAX_TECH_DISPLAY)
                                .map((tech) => (
                                  <span
                                    key={tech}
                                    className="font-sans text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.tags.length > MAX_TECH_DISPLAY && (
                                <span className="font-sans text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md font-medium">
                                  +{project.tags.length - MAX_TECH_DISPLAY}
                                </span>
                              )}
                            </div>

                            {/* CTA Button */}
                            <Button
                              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold text-xs py-1 h-8 hover:opacity-90 transition-opacity"
                              size="sm"
                              variant="flat"
                            >
                              Lihat Detail
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Load More Button */}
              {hasMore && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    className="font-sans border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all"
                    size="md"
                    variant="bordered"
                    onClick={handleLoadMore}
                  >
                    Muat Lebih Banyak ({filteredProjects.length - visibleCount}{" "}
                    project tersisa)
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
