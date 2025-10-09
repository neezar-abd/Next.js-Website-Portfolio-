"use client";

import { useCallback, useEffect, useRef } from "react";

export const useSound = (soundFile: string = "/assets/audio/pop.mp3") => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio(soundFile);
    audioRef.current.volume = 0.3; // Set volume to 30%

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundFile]);

  const play = useCallback(() => {
    if (audioRef.current) {
      // Reset audio to start and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Audio play failed:", error);
      });
    }
  }, []);

  return play;
};
