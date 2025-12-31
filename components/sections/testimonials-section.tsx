"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
  // 3 real collaborators: Developer, Graphic Designer, Cyber Security
  const testimonials = [
    {
      name: 'Ahmad Dzaki Habibullah',
      role: 'Full Stack Developer',
      avatar: 'https://ui-avatars.com/api/?name=Ahmad+Dzaki&background=3b82f6&color=fff&size=200',
      content: 'Neezar itu developer yang sangat teliti dan kreatif. Projectnya selalu clean code dan design-nya keren banget! Collaboration dengannya selalu smooth.',
    },
    {
      name: 'Mahdi Aryasatya',
      role: 'Graphic Designer',
      avatar: 'https://ui-avatars.com/api/?name=Mahdi+Arya&background=8b5cf6&color=fff&size=200',
      content: 'Kerja bareng Neezar untuk project design selalu menyenangkan. Dia paham UI/UX dan selalu open untuk feedback. Result always exceed expectations!',
    },
    {
      name: 'Firman Ibnu Shobirin',
      role: 'Cyber Security Specialist',
      avatar: 'https://ui-avatars.com/api/?name=Firman+Ibnu&background=10b981&color=fff&size=200',
      content: 'Neezar very aware tentang security best practices dalam development. Dia selalu implement proper authentication dan data protection di project-nya.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What My Collaborators Say
          </h2>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonials from developers, designers, and security specialists I've worked with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl border border-gray-200 dark:border-gray-700 px-6 py-5 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 flex-1">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Avatar className="size-10 border-2 border-gray-200 dark:border-gray-600 shadow-md">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900 dark:text-white text-sm font-semibold">
                      {testimonial.name}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
