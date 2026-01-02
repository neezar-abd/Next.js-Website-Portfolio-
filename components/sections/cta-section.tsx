"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Mail, ArrowRight, Briefcase } from "lucide-react";

export const CTASection = () => {
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

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6"
            variants={itemVariants}
          >
            <Briefcase className="w-8 h-8 text-gray-900 dark:text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-sans text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Mari Berkolaborasi
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Punya project menarik atau ingin berdiskusi tentang ide Anda? Saya
            siap membantu mewujudkannya menjadi kenyataan.
          </motion.p>

          {/* Email */}
          <motion.div
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white mb-8"
            variants={itemVariants}
          >
            <Mail className="w-5 h-5" />
            <a
              className="font-sans text-lg hover:underline"
              href="mailto:neezar.dev@gmail.com"
            >
              neezar.dev@gmail.com
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              as={Link}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold px-8 hover:opacity-90 transition-opacity"
              endContent={<ArrowRight size={20} />}
              href="/kontak"
              size="lg"
            >
              Hubungi Saya
            </Button>
            <Button
              as={Link}
              className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-sans font-semibold px-8 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all"
              href="/project"
              size="lg"
              variant="bordered"
            >
              Lihat Portofolio
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-900 dark:bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-900 dark:bg-white opacity-5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
