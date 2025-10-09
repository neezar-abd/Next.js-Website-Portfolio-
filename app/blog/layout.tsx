import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Neezar Abd | Tutorial Web Development & Tech Articles",
  description:
    "Blog Neezar Abdurrahman tentang web development, Next.js, React, TypeScript, dan teknologi terkini. Tutorial coding, tips programming, dan sharing pengalaman developer.",
  keywords: [
    "Blog Neezar",
    "Tutorial Next.js",
    "Tutorial React",
    "Web Development Indonesia",
    "Coding Tutorial",
    "TypeScript Tutorial",
    "Programming Tips",
    "Developer Blog",
  ],
  openGraph: {
    title: "Blog Neezar Abd - Tutorial Web Development",
    description:
      "Tutorial web development, tips coding, dan artikel teknologi dari Neezar Abdurrahman. Next.js, React, TypeScript, dan lebih banyak lagi.",
    url: "https://neezar.tech/blog",
  },
  alternates: {
    canonical: "https://neezar.tech/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
