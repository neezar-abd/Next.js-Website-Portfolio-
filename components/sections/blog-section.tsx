/* eslint-disable @next/next/no-img-element */

"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { PostSummary } from "@/lib/mdx";
import { useSound } from "@/hooks/useSound";

interface BlogSectionProps {
  posts: PostSummary[];
}

export const BlogSection = ({ posts }: BlogSectionProps) => {
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

  // Display only latest 3 posts
  const displayPosts = posts.slice(0, 3);

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {/* Section Header - Left Aligned */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Berbagi pengalaman dan pengetahuan seputar web development dan
              video production
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {displayPosts.map((post) => {
              // Support both single image and images array
              const coverImage =
                post.image ||
                (post.images && post.images.length > 0 ? post.images[0] : null);

              return (
                <motion.div
                  key={post.slug}
                  className="h-full"
                  variants={itemVariants}
                >
                  <Link
                    className="group block h-full"
                    href={`/blog/${post.slug}`}
                    onClick={playPop}
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                      {/* Thumbnail */}
                      <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                        {coverImage ? (
                          <img
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            src={coverImage}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                            <span className="text-4xl">📝</span>
                          </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-sans">
                            {new Date(post.date).toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-sans">{post.readingTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mt-auto">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
              );
            })}
          </div>

          {/* View All CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <Button
              as={Link}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold px-8 hover:opacity-90 transition-opacity"
              endContent={<ArrowRight size={20} />}
              href="/blog"
              size="lg"
              variant="flat"
              onClick={playPop}
            >
              Lihat Semua Artikel
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
