import { getAllPosts } from "@/lib/mdx";
import BlogListSearch from "@/components/blog/blog-list-search";

export const metadata = {
  title: "Blog - Neezar",
  description:
    "Tulisan-tulisan tentang web development, belajar, dan catatan proyek.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogListSearch posts={posts} />;
}
