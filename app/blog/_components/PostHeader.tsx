/**
 * PostHeader Component
 * Menampilkan breadcrumb, judul artikel, meta info, dan cover image
 * Responsif dengan tipografi yang jelas
 */

import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  image?: string;
  author?: string;
  breadcrumb?: string[];
}

export function PostHeader({
  title,
  date,
  readingTime,
  image,
  author = "Neezar",
  breadcrumb = ["Blog"],
}: PostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <header className="mb-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 dark:text-gray-400">
        <Link
          href="/blog"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          {breadcrumb[0]}
        </Link>
        {breadcrumb.length > 1 && (
          <>
            <span className="mx-2">/</span>
            <span>{breadcrumb[1]}</span>
          </>
        )}
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium">{author}</span>
        <span>•</span>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{readingTime}</span>
        </div>
      </div>

      {/* Cover Image removed - using carousel in content instead */}
    </header>
  );
}
