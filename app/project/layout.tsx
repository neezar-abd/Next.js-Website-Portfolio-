import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Neezar Abd | Portfolio Web Developer Probolinggo",
  description:
    "Portfolio project Neezar Abdurrahman - Web applications, AI projects, dan creative works. Dibuat dengan Next.js, React, TypeScript, Firebase, dan teknologi modern lainnya.",
  keywords: [
    "Portfolio Neezar",
    "Web Projects",
    "Next.js Projects",
    "React Portfolio",
    "Developer Portfolio",
    "AI Quiz Generator",
    "Web Applications",
    "Student Projects",
  ],
  openGraph: {
    title: "Projects - Neezar Abd Portfolio",
    description:
      "Lihat portfolio project web development Neezar Abdurrahman. Web apps, AI projects, dan creative works dengan Next.js, React, TypeScript.",
    url: "https://neezar.tech/project",
  },
  alternates: {
    canonical: "https://neezar.tech/project",
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
