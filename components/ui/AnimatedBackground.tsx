"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RandomPos {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [randomPositions, setRandomPositions] = useState<RandomPos[]>([]);

  useEffect(() => {
    setIsClient(true);

    // Random floating dots
    const positions = Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4,
      delay: Math.random() * 3,
    }));

    setRandomPositions(positions);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 3px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 3px, transparent 2px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Data Points */}
      {isClient &&
        randomPositions.slice(0, 8).map((pos, i) => (
          <motion.div
            key={`data-point-${i}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + pos.duration,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}
    </div>
  );
}
