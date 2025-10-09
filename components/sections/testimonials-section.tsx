"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/lib/data";

// Split testimonials into two rows
const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

function TestimonialCard({
  name,
  role,
  company,
  content,
  image,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}) {
  return (
    <div className="relative w-80 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      <Quote className="absolute top-4 right-4 w-6 h-6 text-gray-200 dark:text-gray-700" />
      <div className="flex items-center gap-3 mb-4">
        <img alt={name} className="w-12 h-12 rounded-full" src={image} />
        <div>
          <h3 className="font-sans font-semibold text-sm text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="font-sans text-xs text-gray-600 dark:text-gray-400">
            {role} - {company}
          </p>
        </div>
      </div>
      <p className="font-sans text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>
    </div>
  );
}

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonials
          </h2>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Apa kata mereka tentang hasil kerja sama kita
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-4 w-full">
          <Marquee pauseOnHover className="[--duration:25s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:25s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
        </div>
      </div>
    </section>
  );
};
