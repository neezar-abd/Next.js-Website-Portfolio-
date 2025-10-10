import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://neezar.tech"),
  title: {
    default: "Neezar Abd - Web Developer Probolinggo | Fullstack Developer",
    template: `%s | Neezar Abd - Developer Probolinggo`,
  },
  description:
    "Portfolio Neezar Abdurrahman (Neezar Abd) - Web Developer & Fullstack Developer dari Probolinggo. Spesialis Next.js, React, TypeScript, Firebase. Siswa SMKN 1 Probolinggo Axioo Class Program.",
  keywords: [
    "Neezar Abd",
    "Neezar Abdurrahman",
    "Developer Probolinggo",
    "Web Developer Probolinggo",
    "Fullstack Developer Probolinggo",
    "Next.js Developer",
    "React Developer Indonesia",
    "TypeScript Developer",
    "SMKN 1 Probolinggo",
    "Axioo Class Program",
    "Portfolio Developer",
    "Frontend Developer",
    "Backend Developer",
    "Jawa Timur",
  ],
  authors: [
    {
      name: "Neezar Abdurrahman Ahnaf Abiyyi",
      url: "https://neezar.tech",
    },
  ],
  creator: "Neezar Abdurrahman",
  publisher: "Neezar Abd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://neezar.tech",
    title: "Neezar Abd - Web Developer Probolinggo | Fullstack Developer",
    description:
      "Portfolio Neezar Abdurrahman - Web Developer & Fullstack Developer dari Probolinggo. Spesialis Next.js, React, TypeScript, Firebase.",
    siteName: "Neezar Abd Portfolio",
    images: [
      {
        url: "https://neezar.tech/images/neezar.jpg",
        width: 1200,
        height: 630,
        alt: "Neezar Abdurrahman - Web Developer Probolinggo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neezar Abd - Web Developer Probolinggo",
    description:
      "Portfolio Neezar Abdurrahman - Fullstack Developer spesialis Next.js, React, TypeScript dari Probolinggo",
    creator: "@neezarabd",
    images: ["https://neezar.tech/images/neezar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://neezar.tech",
  },
  verification: {
    google: "your-google-verification-code", // Nanti diganti setelah verify di Google Search Console
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Neezar Abdurrahman Ahnaf Abiyyi",
              alternateName: "Neezar Abd",
              url: "https://neezar.tech",
              image: "https://neezar.tech/images/neezar.jpg",
              sameAs: [
                "https://github.com/neezar",
                "https://instagram.com/neezarabd",
                "https://linkedin.com/in/neezarabd",
              ],
              jobTitle: "Fullstack Web Developer",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "SMKN 1 Probolinggo - Axioo Class Program",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Probolinggo",
                addressRegion: "Jawa Timur",
                addressCountry: "ID",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Firebase",
                "Node.js",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
            }),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Neezar Abd Portfolio",
              url: "https://neezar.tech",
              description:
                "Portfolio Web Developer Probolinggo - Neezar Abdurrahman. Fullstack Developer spesialis Next.js, React, TypeScript",
              author: {
                "@type": "Person",
                name: "Neezar Abdurrahman Ahnaf Abiyyi",
              },
              inLanguage: "id-ID",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://neezar.tech/blog?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://neezar.tech/#organization",
              name: "Neezar Abd",
              alternateName: "Neezar Abdurrahman",
              url: "https://neezar.tech",
              logo: {
                "@type": "ImageObject",
                url: "https://neezar.tech/logo.svg",
                width: "600",
                height: "600",
              },
              description:
                "Web Developer Probolinggo - Fullstack Developer spesialis Next.js, React, TypeScript",
              sameAs: [
                "https://github.com/neezar-abd",
                "https://instagram.com/neezarabd",
                "https://linkedin.com/in/neezarabd",
              ],
              founder: {
                "@type": "Person",
                name: "Neezar Abdurrahman Ahnaf Abiyyi",
                image: "https://neezar.tech/images/neezar.jpg",
              },
            }),
          }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
