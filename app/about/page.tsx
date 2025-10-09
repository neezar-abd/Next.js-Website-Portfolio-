/* eslint-disable @next/next/no-img-element */

"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Code,
  Palette,
  Video,
  Wrench,
  Briefcase,
  Heart,
  Rocket,
  Download,
  ExternalLink,
  Mail,
  CheckCircle,
  ArrowRight,
  Gamepad2,
  BookOpen,
  Music,
  Plane,
  Lightbulb,
  Zap,
} from "lucide-react";

import {
  personalInfo,
  skills,
  stats as statsData,
  experiences as experiencesData,
  certifications as certificationsData,
} from "@/lib/data";

export default function AboutPage() {
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

  // Journey Timeline - Complete journey from 2024 to present
  const journey = [
    {
      year: "2024",
      title: "Masuk SMKN 1 Probolinggo",
      description:
        "Memulai pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) dengan program Kelas Industri Axioo Class Program.",
      icon: "🎓",
      logo: "/logos/LogoRPL.png",
    },
    {
      year: "2024",
      title: "Join OSIS - Publikasi dan Dokumentasi",
      description:
        "Bergabung dengan OSIS SMKN 1 Probolinggo sebagai anggota bidang Publikasi dan Dokumentasi, fokus pada videography, photography, dan content creation.",
      icon: "📸",
      logo: "/logos/Logo OSIS.png",
    },
    {
      year: "2024",
      title: "LearningX x Axioo Training",
      description:
        "Mengikuti program pelatihan kolaborasi LearningX Indonesia dengan Axioo untuk pengembangan skill software engineering.",
      icon: "🚀",
      logo: "/logos/logolearningx.png",
    },
    {
      year: "2024",
      title: "Broadcasting & Multimedia Certification",
      description:
        "Mendapatkan sertifikasi Broadcasting & Multimedia dari Dinas Pendidikan dan Kebudayaan untuk skill videography dan content production.",
      icon: "🎬",
      logo: "/logos/logo-broadcasting.jpeg",
    },
    {
      year: "2024",
      title: "AI Quiz Generator Project",
      description:
        "Mengembangkan personal project AI Quiz Generator menggunakan Next.js, TypeScript, Tailwind CSS, dan Supabase dengan AI integration.",
      icon: "💻",
      logo: "/project/Soalin-AI-Quiz.png",
    },
    {
      year: "2025",
      title: "ID Camp by Indosat",
      description:
        "Menyelesaikan bootcamp web development dari Indosat Ooredoo Hutchison, memperdalam skill frontend dan backend development.",
      icon: "🏕️",
      logo: "/logos/logoidcamp.png",
    },
    {
      year: "2025",
      title: "DBS Foundation Coding Camp",
      description:
        "Mengikuti intensive coding bootcamp dari DBS Foundation, fokus pada modern web development technologies dan best practices.",
      icon: "⚡",
      logo: "/logos/logodicoding.jpeg",
    },
    {
      year: "Present",
      title: "Axioo Class Program",
      description:
        "Saat ini aktif sebagai siswa Axioo Class Program di SMKN 1 Probolinggo, terus belajar dan mengembangkan skill hingga lulus.",
      icon: "🎯",
      logo: "/logos/logo-acp.png",
    },
  ];

  // Stats
  const stats = [
    { label: statsData[0].label, value: statsData[0].value, icon: Briefcase },
    { label: "Video Content", value: "Coming Soon", icon: Video },
    { label: statsData[1].label, value: statsData[1].value, icon: Rocket },
    { label: statsData[3].label, value: statsData[3].value, icon: Heart },
  ];

  // Skills Categories
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: skills.frontend,
    },
    {
      title: "Backend Development",
      icon: Wrench,
      color: "green",
      skills: skills.backend,
    },
    {
      title: "Creative Content",
      icon: Video,
      color: "rose",
      skills: [
        "Videography",
        "Photography",
        "Visual Storytelling",
        "Content Creation",
      ],
    },
    {
      title: "Tools & Others",
      icon: Palette,
      color: "purple",
      skills: skills.tools,
    },
  ];

  // Certifications - using data from lib/data.ts
  const certificates = certificationsData.map((cert) => ({
    title: cert.title,
    issuer: cert.issuer,
    date: cert.date,
    image: cert.certificate,
  }));

  // Work Experience - using data from lib/data.ts with real logos
  const experiences = experiencesData.map((exp) => {
    // Determine logo based on experience type
    let logo = "";

    if (exp.type === "education") {
      logo = "/logos/logo-acp.png"; // Axioo Class Program
    } else if (exp.type === "organization") {
      logo = "/logos/Logo OSIS.png"; // OSIS
    } else if (exp.type === "project") {
      logo = "/project/Soalin-AI-Quiz.png"; // AI Quiz Project
    }

    return {
      company: exp.company,
      logo: logo,
      role: exp.title,
      period: exp.period,
      responsibilities: exp.achievements,
    };
  });

  // Hobbies & Fun Facts
  const hobbies = [
    { icon: Gamepad2, text: "Gaming (Strategy & Simulation games)" },
    { icon: BookOpen, text: "Membaca tech articles dan development blogs" },
    { icon: Music, text: "Mendengarkan musik sambil coding" },
    { icon: Plane, text: "Traveling dan explore tempat baru" },
  ];

  const funFacts = [
    { icon: Lightbulb, text: "Mulai coding pertama kali umur 16 tahun" },
    {
      icon: Zap,
      text: "Bisa edit video sambil ngoding sekaligus (multitasking pro!)",
    },
    {
      icon: Lightbulb,
      text: "Punya collection lebih dari 100+ project ideas yang belum dikerjakan",
    },
    { icon: Zap, text: "Lebih produktif coding di malam hari" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Mini Section */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial="hidden"
            variants={containerVariants}
            animate="visible"
          >
            <motion.div className="mb-6" variants={itemVariants}>
              <img
                alt="Neezar Abdurrahman"
                className="w-32 h-32 rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700 object-cover"
                src="/images/neezar.jpg"
              />
            </motion.div>
            <motion.h1
              className="font-sans text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Tentang Saya
            </motion.h1>
            <motion.p
              className="font-sans text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {personalInfo.tagline} dari {personalInfo.location}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="relative py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              variants={itemVariants}
            >
              My Story
            </motion.h2>
            <motion.div
              className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              <p className="font-sans text-lg">{personalInfo.bio}</p>
              <p className="font-sans text-lg">{personalInfo.passion}</p>
              <p className="font-sans text-lg">{personalInfo.philosophy}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Work Philosophy
            </motion.h2>
            <motion.div
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12"
              variants={itemVariants}
            >
              <p className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 italic">
                &ldquo;Code with Purpose, Create with Passion&rdquo;
              </p>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300">
                Setiap baris kode yang saya tulis memiliki tujuan yang jelas,
                dan setiap konten yang saya buat dilakukan dengan penuh
                dedikasi. Saya percaya bahwa teknologi dan kreativitas bisa
                berjalan beriringan untuk menciptakan impact yang meaningful.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              My Journey
            </motion.h2>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gray-200 dark:border-gray-700 p-2 overflow-hidden">
                      {item.logo ? (
                        <img
                          alt={item.title}
                          className="w-full h-full object-contain"
                          src={item.logo}
                        />
                      ) : (
                        <span className="text-2xl">{item.icon}</span>
                      )}
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <p className="font-sans text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              Achievements
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl"
                  variants={itemVariants}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-900 dark:text-white" />
                  <p className="font-sans text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories Section */}
      <section className="relative py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <category.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              Certifications
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <img
                    alt={cert.title}
                    className="w-full h-52 object-cover"
                    src={cert.image}
                  />
                  <div className="p-5">
                    <h3 className="font-sans font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-500">
                      {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div className="text-center" variants={itemVariants}>
              <Button
                as={Link}
                className="font-sans font-semibold border-2"
                endContent={<ArrowRight size={20} />}
                href="/certifications"
                size="lg"
                variant="bordered"
              >
                Lihat Semua Sertifikasi
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="relative py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              Work Experience
            </motion.h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center">
                    <img
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg border border-gray-300 dark:border-gray-700 flex-shrink-0"
                      src={exp.logo}
                    />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-4" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      {exp.company}
                    </p>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 font-sans text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Side Section */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={itemVariants}
            >
              Beyond Work
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hobbies */}
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Hobbies & Interests
                </h3>
                <ul className="space-y-3">
                  {hobbies.map((hobby, idx) => {
                    const Icon = hobby.icon;

                    return (
                      <li
                        key={idx}
                        className="flex items-center gap-3 font-sans text-lg text-gray-700 dark:text-gray-300"
                      >
                        <Icon className="w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" />
                        <span>{hobby.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Fun Facts
                </h3>
                <ul className="space-y-3">
                  {funFacts.map((fact, idx) => {
                    const Icon = fact.icon;

                    return (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-sans text-gray-700 dark:text-gray-300"
                      >
                        <Icon className="w-5 h-5 text-gray-900 dark:text-white flex-shrink-0 mt-0.5" />
                        <span>{fact.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Mari Berkolaborasi!
            </motion.h2>
            <motion.p
              className="font-sans text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Tertarik untuk bekerja sama atau punya project menarik? Saya siap
              untuk berdiskusi dan mewujudkan ide Anda!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Button
                as={Link}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-semibold px-8"
                href="/assets/documents/Neezar-CV.pdf"
                size="lg"
                startContent={<Download size={20} />}
              >
                Download CV
              </Button>
              <Button
                as={Link}
                className="font-sans font-semibold border-2 px-8"
                endContent={<ExternalLink size={20} />}
                href="/project"
                size="lg"
                variant="bordered"
              >
                Lihat Portfolio
              </Button>
              <Button
                as={Link}
                className="font-sans font-semibold border-2 px-8"
                endContent={<Mail size={20} />}
                href="/kontak"
                size="lg"
                variant="bordered"
              >
                Hubungi Saya
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of sections will continue... */}
    </div>
  );
}
