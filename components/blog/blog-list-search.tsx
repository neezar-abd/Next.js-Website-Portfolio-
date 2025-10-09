"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, Clock, Search, X, Filter } from "lucide-react";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { motion } from "framer-motion";
import type { PostSummary } from "@/lib/mdx";

// Get all available tags from posts
function getAllTags(posts: PostSummary[]): string[] {
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

interface BlogListSearchProps {
  posts: PostSummary[];
}

const POSTS_PER_PAGE = 3;

export default function BlogListSearch({ posts }: BlogListSearchProps) {
  const allTags = getAllTags(posts);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);

  // Filter posts based on search and tags
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      // Tag filter (if any tag selected, post must have at least one matching tag)
      const matchesTags =
        selectedTags.size === 0 ||
        post.tags?.some((tag) => selectedTags.has(tag));

      return matchesSearch && matchesTags;
    });
  }, [posts, searchQuery, selectedTags]);

  // Posts to display (limited by displayCount)
  const displayedPosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  const handleTagChange = (keys: any) => {
    setSelectedTags(new Set(keys));
    setDisplayCount(POSTS_PER_PAGE); // Reset when filter changes
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <section className="relative min-h-screen py-16 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="font-sans text-gray-600 dark:text-gray-400 mt-2">
            Tulisan-tulisan tentang web development, belajar, dan catatan
            proyek.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
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
                placeholder="Cari artikel..."
                startContent={<Search className="text-gray-400" size={18} />}
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
            </div>

            {/* Tags Filter Dropdown */}
            {allTags.length > 0 && (
              <div className="w-full md:w-80">
                <Select
                  classNames={{
                    trigger:
                      "h-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                    value: "font-sans text-sm",
                  }}
                  placeholder="Filter by tags"
                  selectedKeys={selectedTags}
                  selectionMode="multiple"
                  startContent={<Filter className="text-gray-400" size={18} />}
                  onSelectionChange={handleTagChange}
                >
                  {allTags.map((tag) => (
                    <SelectItem key={tag} className="font-sans">
                      {tag}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedTags.size > 0) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
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
                  #{tag}
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
              {(searchQuery || selectedTags.size > 0) && (
                <button
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-sans"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTags(new Set());
                  }}
                >
                  Clear all
                </button>
              )}
            </div>
          )}

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-sans">
            Menampilkan {displayedPosts.length} dari {filteredPosts.length} artikel
          </div>
        </motion.div>

        {/* Blog List - Same card design */}
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            {posts.length === 0
              ? "Belum ada artikel. Yuk tulis artikel pertama kamu!"
              : "Tidak ada artikel yang cocok dengan pencarian Anda."}
          </div>
        ) : (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {displayedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {post.image && (
                    <img
                      alt={post.title}
                      className="w-full h-44 object-cover"
                      src={post.image}
                    />
                  )}
                  <div className="p-5">
                    <Link className="group" href={`/blog/${post.slug}`}>
                      <h3 className="font-sans font-bold text-lg text-gray-900 dark:text-white group-hover:underline">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                    {post.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Load More Button */}
            {hasMore && (
              <motion.div
                animate={{ opacity: 1 }}
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  className="px-8 py-3 font-sans font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all"
                  onClick={handleLoadMore}
                >
                  Load More ({filteredPosts.length - displayCount} tersisa)
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
