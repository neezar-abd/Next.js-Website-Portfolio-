import fs from "fs";
import path from "path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import "server-only";

export type PostFrontmatter = {
  title: string;
  description?: string;
  date: string; // ISO
  tags?: string[];
  category?: string;
  image?: string;
  images?: string[]; // Multiple images for gallery
  author?: string;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type CompiledPost = PostSummary & { html: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (f) =>
        (f.endsWith(".mdx") || f.endsWith(".md")) &&
        !/^readme\.(mdx?|md)$/i.test(f)
    )
    .map((f) => f.replace(/\.(mdx|md)$/i, ""));
}

export async function getPostBySlug(
  slug: string,
): Promise<CompiledPost | null> {
  const fullPathMdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fullPathMd = path.join(CONTENT_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, "utf8");

  const { content: _raw, data } = matter(source);
  const fm = data as PostFrontmatter;

  // Convert Markdown/MDX (without JSX components) to HTML string
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" } as any)
    .use(rehypeStringify)
    .process(_raw);

  const stats = readingTime(_raw);

  const summary: PostSummary = {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    tags: fm.tags ?? [],
    category: fm.category ?? "General",
    image: fm.image,
    images: fm.images ?? [],
    author: fm.author,
    readingTime: `${Math.max(1, Math.round(stats.minutes))} min`,
  };

  return { ...summary, html: String(file) };
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const file = fs.readFileSync(
      fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`))
        ? path.join(CONTENT_DIR, `${slug}.mdx`)
        : path.join(CONTENT_DIR, `${slug}.md`),
      "utf8",
    );
    const { content, data } = matter(file);
    const fm = data as PostFrontmatter;
    const stats = readingTime(content);

    return {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      tags: fm.tags ?? [],
      category: fm.category ?? "General",
      image: fm.image,
      images: fm.images ?? [],
      author: fm.author,
      readingTime: `${Math.max(1, Math.round(stats.minutes))} min`,
    } as PostSummary;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
