import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "server-only";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { PostFrontmatter, PostSummary } from "./mdx";

export type MDXPost = PostSummary & {
  mdxSource: MDXRemoteSerializeResult;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export async function getPostBySlugMDX(
  slug: string
): Promise<MDXPost | null> {
  const fullPathMdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fullPathMd = path.join(CONTENT_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const fm = data as PostFrontmatter;

  // Serialize MDX with React component support
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
      development: process.env.NODE_ENV === "development",
    },
    parseFrontmatter: false,
  });

  const stats = readingTime(content);

  const summary: PostSummary = {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags ?? [],
    category: fm.category ?? "General",
    image: fm.image,
    author: fm.author,
    readingTime: `${Math.max(1, Math.round(stats.minutes))} min`,
  };

  return { ...summary, mdxSource };
}
