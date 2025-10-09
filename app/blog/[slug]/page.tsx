/**
 * Blog Post Page
 * Layout dua kolom: konten utama + TOC sidebar (lg+)
 * Container responsif: 3xl → 4xl
 * Include progress bar, breadcrumb, meta, dan related posts
 */

import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { PostHeader } from "../_components/PostHeader";
import { PostContent } from "../_components/PostContent";
import { PostNavigation } from "../_components/PostNavigation";
import { ReadingProgress } from "../_components/ReadingProgress";
import { TableOfContents } from "../_components/TableOfContents";
import { BlogJsonLd } from "../_components/BlogJsonLd";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: `${post.title} | Blog Neezar`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Neezar"],
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-semibold">Artikel tidak ditemukan</h1>
      </div>
    );
  }

  // Get related posts (same category, max 3)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neezar.dev";
  const postUrl = `${baseUrl}/blog/${slug}`;

  return (
    <>
      {/* JSON-LD for SEO */}
      <BlogJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.date}
        author={post.author || "Neezar"}
        image={post.image}
        url={postUrl}
      />

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Main Wrapper - Lebar maksimal untuk artikel */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Two Column Layout: Main (flexible) + TOC Sidebar (fixed) */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
          {/* Main Content - Tidak boleh menyusut */}
          <main className="min-w-0">
            <PostHeader
              title={post.title}
              date={post.date}
              readingTime={post.readingTime}
              image={post.image}
              author={post.author}
              breadcrumb={["Blog", post.category || "Artikel"]}
            />

            <PostContent html={post.html} />

            <PostNavigation relatedPosts={relatedPosts} />
          </main>

          {/* Sidebar TOC - Fixed width, no shrink */}
          <aside className="hidden lg:block w-80 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  );
}
