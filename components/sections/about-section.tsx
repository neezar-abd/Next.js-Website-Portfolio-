"use client";

import Image from 'next/image'
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Web Developer & Visual Storyteller Kreatif
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0 max-w-sm mx-auto w-full">
            <div className="bg-gradient-to-b h-full relative from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <div className="relative w-full h-full bg-white dark:bg-gray-900 overflow-hidden">
                <Image
                  src="/images/neezar.webp"
                  className="w-full h-full object-cover"
                  alt="Neezar Abdurrahman profile"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Siswa Rekayasa Perangkat Lunak di SMKN 1 Probolinggo (Axioo Class Program). <span className="text-gray-900 dark:text-white font-bold">2+ tahun experience</span> di web development, fokus pada aplikasi modern, responsif, dan user-friendly.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate dalam mengubah ide menjadi solusi digital yang nyata. Menggabungkan kreativitas visual dengan problem-solving skills untuk menciptakan aplikasi yang fungsional dan stunning.
            </p>
            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Menggabungkan kreativitas visual dengan kemampuan problem-solving untuk menciptakan aplikasi yang memukau."
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-gray-900 dark:text-white not-italic">
                    Neezar Abdurrahman
                  </cite>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                  </div>
                  <Button
                    as={Link}
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold mt-4"
                    endContent={<ArrowRight size={16} />}
                    href="/about"
                    size="sm"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
