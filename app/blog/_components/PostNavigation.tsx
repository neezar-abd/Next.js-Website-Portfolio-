/**
 * PostNavigation Component
 * Navigasi kembali ke blog dan related posts
 * Versi ringkas untuk halaman artikel
 */

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { PostSummary } from "@/lib/mdx";

interface PostNavigationProps {
  relatedPosts?: PostSummary[];
}

export function PostNavigation({ relatedPosts = [] }: PostNavigationProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Blog
      </Link>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Artikel Terkait
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <h4 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
