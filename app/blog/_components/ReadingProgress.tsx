/**
 * ReadingProgress Component
 * Progress bar tipis di top yang track scroll artikel
 * Fixed position, smooth transition
 */

"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
