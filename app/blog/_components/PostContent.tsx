/**
 * PostContent Component
 * Render konten artikel dengan Tailwind Typography
 * Auto-inject copy button ke code blocks
 */

"use client";

import { useEffect } from "react";

interface PostContentProps {
  html: string;
}

export function PostContent({ html }: PostContentProps) {
  useEffect(() => {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((block) => {
      if (block.querySelector(".copy-button")) return;

      const button = document.createElement("button");

      button.className =
        "copy-button absolute top-2 right-2 px-2 py-1 text-xs text-gray-400 hover:text-gray-100 bg-gray-800 hover:bg-gray-700 rounded transition-colors";
      button.textContent = "Copy";

      button.addEventListener("click", async () => {
        const code = block.querySelector("code")?.textContent || "";

        await navigator.clipboard.writeText(code);
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      });

      block.style.position = "relative";
      block.appendChild(button);
    });
  }, []);

  return (
    <article
      className="prose prose-lg prose-zinc dark:prose-invert max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:leading-7 prose-p:text-gray-700 prose-p:dark:text-gray-300
        prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 prose-strong:dark:text-gray-100
        prose-code:text-gray-900 prose-code:dark:text-gray-100 prose-code:bg-gray-100 prose-code:dark:bg-gray-800
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-zinc-900 prose-pre:text-zinc-100
        prose-pre:rounded-lg prose-pre:p-4 prose-pre:md:p-5 prose-pre:overflow-x-auto prose-pre:text-sm
        prose-ul:marker:text-gray-400 prose-ol:marker:text-gray-400
        prose-li:text-gray-700 prose-li:dark:text-gray-300
        prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:dark:border-gray-600
        prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:dark:text-gray-300"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
