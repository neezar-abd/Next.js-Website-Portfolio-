import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { getAllPosts, PostSummary } from "@/lib/mdx";

export default async function BlogList() {
  const posts: PostSummary[] = await getAllPosts();

  if (!posts.length) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        Belum ada artikel. Yuk tulis artikel pertama kamu!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow"
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
        </article>
      ))}
    </div>
  );
}
