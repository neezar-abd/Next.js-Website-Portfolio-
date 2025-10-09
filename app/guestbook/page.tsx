"use client";

import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  Timestamp,
} from "firebase/firestore";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, Mail, User } from "lucide-react";

import { db } from "@/lib/firebase";

interface GuestbookEntry {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Timestamp;
  createdAt: Date;
}

const MESSAGES_PER_PAGE = 9;

// Generate avatar from name/email initial
const getAvatarUrl = (name: string, email: string) => {
  const initial = name.charAt(0).toUpperCase() || email.charAt(0).toUpperCase();

  // Using UI Avatars API for generated avatars
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || email,
  )}&background=random&color=fff&size=128&bold=true`;
};

export default function GuestbookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Fetch initial messages
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async (loadMore = false) => {
    try {
      if (loadMore) {
        setLoadingMore(true);
      } else {
        setIsLoading(true);
      }

      const messagesRef = collection(db, "guestbook");
      let q = query(
        messagesRef,
        orderBy("timestamp", "desc"),
        limit(MESSAGES_PER_PAGE),
      );

      if (loadMore && lastVisible) {
        q = query(
          messagesRef,
          orderBy("timestamp", "desc"),
          startAfter(lastVisible),
          limit(MESSAGES_PER_PAGE),
        );
      }

      const snapshot = await getDocs(q);
      const newEntries: GuestbookEntry[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().timestamp?.toDate() || new Date(),
      })) as GuestbookEntry[];

      if (loadMore) {
        setEntries((prev) => [...prev, ...newEntries]);
      } else {
        setEntries(newEntries);
      }

      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === MESSAGES_PER_PAGE);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
      setLoadingMore(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
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
      await addDoc(collection(db, "guestbook"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: Timestamp.now(),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Refresh messages
      await fetchMessages();

      alert("Terima kasih! Pesan Anda berhasil dikirim 🎉");
    } catch (error) {
      console.error("Error adding message:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
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

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Baru saja";
    if (diffMins < 60) return `${diffMins} menit yang lalu`;
    if (diffHours < 24) return `${diffHours} jam yang lalu`;
    if (diffDays < 7) return `${diffDays} hari yang lalu`;

    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <MessageSquare className="w-12 h-12 text-gray-900 dark:text-white" />
          </div>
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Guestbook
          </h1>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tinggalkan pesan, feedback, atau sekedar say hi! 👋
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <Input
                  required
                  classNames={{
                    input: "font-sans text-sm",
                    inputWrapper:
                      "h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                  }}
                  name="name"
                  placeholder="Nama atau Username"
                  startContent={<User className="text-gray-400" size={18} />}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div>
                <Input
                  required
                  classNames={{
                    input: "font-sans text-sm",
                    inputWrapper:
                      "h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                  }}
                  name="email"
                  placeholder="Email"
                  startContent={<Mail className="text-gray-400" size={18} />}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                required
                className="w-full px-4 py-3 font-sans text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white resize-none"
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                className="font-sans bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                disabled={isSubmitting}
                endContent={!isSubmitting && <Send size={18} />}
                type="submit"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Messages Section */}
        <div>
          <motion.div
            animate={{ opacity: 1 }}
            className="mb-6"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Pesan dari Pengunjung
            </h2>
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 text-center">
              {entries.length} pesan telah ditulis
            </p>
          </motion.div>

          {isLoading ? (
            // Loading State
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white" />
              <p className="font-sans text-gray-600 dark:text-gray-400 mt-4">
                Memuat pesan...
              </p>
            </div>
          ) : entries.length === 0 ? (
            // Empty State
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-2">
                Belum ada pesan
              </h3>
              <p className="font-sans text-gray-600 dark:text-gray-400">
                Jadilah yang pertama untuk meninggalkan pesan!
              </p>
            </motion.div>
          ) : (
            <>
              {/* Messages Grid */}
              <motion.div
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                initial="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <AnimatePresence mode="popLayout">
                  {entries.map((entry, index) => (
                    <motion.div
                      key={entry.id}
                      layout
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
                      exit={{ opacity: 0, scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      {/* Header with Avatar */}
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          alt={entry.name}
                          className="w-12 h-12 rounded-full flex-shrink-0"
                          src={getAvatarUrl(entry.name, entry.email)}
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-sans text-sm font-bold text-gray-900 dark:text-white truncate">
                            {entry.name}
                          </h3>
                          <p className="font-sans text-xs text-gray-500 dark:text-gray-400">
                            {formatDate(entry.createdAt)}
                          </p>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
                        {entry.message}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Load More Button */}
              {hasMore && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    className="font-sans bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    disabled={loadingMore}
                    size="md"
                    onClick={() => fetchMessages(true)}
                  >
                    {loadingMore ? "Memuat..." : "Muat Lebih Banyak"}
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
