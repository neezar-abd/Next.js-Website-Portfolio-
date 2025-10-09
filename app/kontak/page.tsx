"use client";

import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Instagram } from "lucide-react";
import Link from "next/link";

import { db } from "@/lib/firebase";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact Information
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neezar.dev@gmail.com",
      href: "mailto:neezar.dev@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 838 9920 0333",
      href: "https://wa.me/6283899200333",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kota Probolinggo, Indonesia",
      href: null,
      color: "text-red-600 dark:text-red-400",
    },
  ];

  // Social Media Links
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/neezar-abd",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/neezar_abd",
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Semua field harus diisi!");

      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Email tidak valid!");

      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: Timestamp.now(),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      alert(
        "Terima kasih! Pesan Anda berhasil dikirim. Saya akan segera merespons 🎉",
      );
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Terjadi kesalahan. Silakan coba lagi atau hubungi via email langsung.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get In Touch
          </h1>
          <p className="font-sans text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi
            saya!
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="space-y-3">
              <h2 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-3">
                Contact Information
              </h2>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <Link
                      className="block group"
                      href={info.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className={`${info.color}`}>
                          <info.icon size={20} />
                        </div>
                        <div>
                          <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                            {info.label}
                          </p>
                          <p className="font-sans text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
                      <div className={`${info.color}`}>
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="font-sans text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="font-sans text-base font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-3">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    aria-label={social.label}
                    className={`flex items-center justify-center w-10 h-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="font-sans text-base font-bold text-gray-900 dark:text-white mb-2">
                Response Time
              </h3>
              <p className="font-sans text-sm text-gray-600 dark:text-gray-300">
                Saya biasanya merespons dalam <strong>24 jam</strong>. Untuk
                pertanyaan urgent, hubungi via WhatsApp untuk respons lebih
                cepat.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 lg:p-6">
              <h2 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Send Me a Message
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label
                    className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="contact-name"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    required
                    classNames={{
                      input: "font-sans text-sm",
                      inputWrapper:
                        "h-10 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700",
                    }}
                    id="contact-name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="contact-email"
                  >
                    Email Address
                  </label>
                  <Input
                    required
                    classNames={{
                      input: "font-sans text-sm",
                      inputWrapper:
                        "h-10 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700",
                    }}
                    id="contact-email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <Input
                    required
                    classNames={{
                      input: "font-sans text-sm",
                      inputWrapper:
                        "h-12 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700",
                    }}
                    id="contact-subject"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="contact-message"
                  >
                    Pesan
                  </label>
                  <textarea
                    required
                    className="w-full px-4 py-3 font-sans text-sm bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white resize-none"
                    id="contact-message"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  className="w-full font-sans bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 h-10"
                  disabled={isSubmitting}
                  endContent={!isSubmitting && <Send size={18} />}
                  type="submit"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
