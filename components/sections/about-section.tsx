"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { useSound } from "@/hooks/useSound";

export const AboutSection = () => {
  const playPop = useSound();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    "Full-Stack Web Development dengan Next.js & Node.js",
    "Video Production & Editing untuk YouTube dan Social Media",
    "UI/UX Design dengan Figma dan Design System Modern",
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              className="md:col-span-3 flex justify-center md:justify-start"
              variants={itemVariants}
            >
                            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mx-auto md:mx-0">
                <Image
                  fill
                  priority
                  alt="Neezar Abdurrahman"
                  className="object-cover"
                  src="/images/neezar.webp"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="md:col-span-9 text-center md:text-left" variants={itemVariants}>
              <h2 className="font-sans text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                Tentang Saya
              </h2>

              {/* Mobile: Short description */}
              <p className="font-sans text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 md:hidden">
                Software Engineer dan Video Creator yang passionate dalam
                membangun produk digital modern dengan fokus pada pengalaman
                pengguna.
              </p>

              {/* Desktop: Full description */}
              <p className="hidden md:block font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Saya adalah Software Engineer dan Video Creator yang passionate
                dalam membangun produk digital modern. Dengan pengalaman lebih
                dari 5 tahun, saya fokus menciptakan solusi yang tidak hanya
                fungsional tetapi juga memberikan pengalaman pengguna yang luar
                biasa.
              </p>

              {/* Skills - Show 2 on mobile, all on desktop */}
              <div className="space-y-2 md:space-y-3 mb-5 md:mb-6">
                {skills.slice(0, 2).map((skill, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 justify-center md:justify-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-900 dark:text-white flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-xs md:text-base text-gray-700 dark:text-gray-300 text-left">
                      {skill}
                    </span>
                  </div>
                ))}
                {/* Third skill - desktop only */}
                <div className="hidden md:flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-900 dark:text-white flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-base text-gray-700 dark:text-gray-300">
                    {skills[2]}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                as={Link}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold px-6 md:px-8 hover:opacity-90 transition-opacity text-sm md:text-base"
                endContent={<ArrowRight size={18} className="md:w-5 md:h-5" />}
                href="/about"
                size="md"
                variant="flat"
                onClick={playPop}
              >
                Selengkapnya
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
