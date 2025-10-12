import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Neezar Abdurrahman | Web Developer Probolinggo",
  description:
    "Tentang Neezar Abdurrahman (Neezar Abd) - Siswa SMKN 1 Probolinggo jurusan RPL Axioo Class Program. Fullstack Developer spesialis Next.js, React, TypeScript. Experience di OSIS, Broadcasting, dan berbagai bootcamp coding.",
  keywords: [
    "About Neezar",
    "Neezar Abdurrahman",
    "SMKN 1 Probolinggo",
    "Axioo Class Program",
    "RPL Probolinggo",
    "Developer Probolinggo",
    "OSIS SMKN 1 Probolinggo",
    "Siswa Developer",
  ],
  openGraph: {
    title: "About Neezar Abd - Web Developer Probolinggo",
    description:
      "Siswa SMKN 1 Probolinggo yang passionate di web development. Member OSIS bidang Publikasi & Dokumentasi, alumni berbagai bootcamp coding.",
    url: "https://neezar.tech/about",
    images: [
      {
        url: "https://neezar.tech/images/neezar.webp",
        width: 1200,
        height: 630,
        alt: "Neezar Abdurrahman - Web Developer Probolinggo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Neezar Abd - Web Developer Probolinggo",
    description:
      "Siswa SMKN 1 Probolinggo passionate di web development. Fullstack Developer spesialis Next.js, React, TypeScript.",
    images: ["https://neezar.tech/images/neezar.webp"],
  },
  alternates: {
    canonical: "https://neezar.tech/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This route-specific layout previously constrained width (max-w-lg) and centered content,
  // causing the About page to look narrow on large screens. We expose children directly so
  // section containers in the page control their own width.
  return <>{children}</>;
}
