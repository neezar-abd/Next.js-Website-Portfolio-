"use client";

import { Link } from "@heroui/link";
import { Github, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";

import { personalInfo } from "@/lib/data";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navigation = {
    main: [
      { name: "Beranda", href: "/" },
      { name: "Tentang", href: "/about" },
      { name: "Proyek", href: "/project" },
      { name: "Blog", href: "/blog" },
      { name: "Buku Tamu", href: "/guestbook" },
      { name: "Kontak", href: "/kontak" },
    ],
    social: [
      { name: "GitHub", icon: Github, href: personalInfo.social.github },
      {
        name: "Instagram",
        icon: Instagram,
        href: personalInfo.social.instagram,
      },
      { name: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
    ],
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-3">
              {personalInfo.displayName}
            </h3>
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.tagline} dari {personalInfo.location}.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-sans text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    className="font-sans text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-1">
            <h4 className="font-sans text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Hubungi
            </h4>
            <div className="flex gap-4 mb-4">
              {navigation.social.map((item) => {
                const IconComponent = item.icon;

                return (
                  <Link
                    key={item.name}
                    isExternal
                    aria-label={item.name}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    href={item.href}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
              Email:{" "}
              <Link
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {currentYear || "2025"} {personalInfo.displayName}. Hak cipta
              dilindungi.
            </p>
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
              Dibuat dengan Next.js, Tailwind CSS & HeroUI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
