/**
 * TableOfContents Component
 * Sticky sidebar TOC dengan active heading tracking
 * Hidden di mobile, visible di lg+
 * Otomatis extract headings dari artikel
 */

"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");

    if (!article) return;

    const headings = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.substring(1)),
    }));

    setToc(items);

    // Scrollspy: highlight active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 text-sm text-gray-600 dark:text-gray-400">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Daftar Isi
      </h4>
      <ul className="space-y-1.5 border-l-2 border-gray-200 dark:border-gray-800">
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${item.id}`}
              className={`block py-1 px-3 -ml-px border-l-2 transition-colors ${
                activeId === item.id
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium"
                  : "border-transparent hover:text-gray-900 dark:hover:text-gray-100"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
