"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { Github, Instagram, Mail, ArrowRight } from "lucide-react";

import ThemeAwareTiltedCard from "@/components/ThemeAwareTiltedCard";
import { personalInfo } from "@/lib/data";
import { useSound } from "@/hooks/useSound";

export const HeroSection = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.social.github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: personalInfo.social.instagram,
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ];

  return (
    <section className="relative flex items-center justify-center pt-24 pb-8 md:pt-32 md:pb-12 px-4 overflow-hidden">


      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center"
          initial="hidden"
          variants={containerVariants}
        >
          {/* Image/Visual Content - First on mobile, second on desktop */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            variants={imageVariants}
          >
            <ThemeAwareTiltedCard
              imageSrc="/images/bg-hitam.jpg"
              darkImageSrc="/images/bg-putih.jpg"
              altText={personalInfo.name}
              captionText="Fullstack Developer"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="350px"
              scaleOnHover={1.05}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
            />
          </motion.div>

          {/* Text Content - Second on mobile, first on desktop */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <span className="text-sm md:text-base font-medium text-blue-500 dark:text-blue-400 tracking-wider uppercase">
                  Hai, saya
                </span>
              </motion.div>
              <motion.h1
                className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                  Neezar Abd.
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {personalInfo.tagline} yang membangun aplikasi web modern dengan{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Next.js
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Tailwind CSS
              </span>
              , dan{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                scalable backend
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                as={Link}
                className="font-sans bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                endContent={<ArrowRight size={20} />}
                href="/project"
                size="lg"
                onClick={playPop}
              >
                Lihat Portofolio
              </Button>
              <Button
                as={Link}
                className="font-sans border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-8 py-3 rounded-full hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                href="/kontak"
                size="lg"
                variant="bordered"
                onClick={playPop}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;

                return (
                  <Link
                    key={social.name}
                    isExternal
                    aria-label={social.name}
                    className={`text-gray-500 dark:text-gray-400 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                    href={social.href}
                    onClick={playPop}
                  >
                    <IconComponent size={24} />
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
